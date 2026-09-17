import React, { useState, useEffect, useRef, useCallback } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { HeaderStats } from './components/HeaderStats';
import { PassageCard } from './components/PassageCard';
import { QuestionCard } from './components/QuestionCard';
import { CertificateModal } from './components/CertificateModal';
import { ReviewSummary } from './components/ReviewSummary';
import { GameOverModal } from './components/GameOverModal';
import { QUESTIONS } from './data/questions';
import { StudentProfile, AnswerRecord, GameScreen } from './types';
import { soundEngine, SpeechReader } from './utils/audio';
import { launchSingleRocket } from './utils/firecrackers';

const DEFAULT_PROFILE: StudentProfile = {
  name: '',
  avatar: '👧',
  gradeLevel: 'Standard 4-5',
  timerPerQuestion: 25,
  soundEnabled: true,
  voiceSpeed: 1.0,
};

export default function App() {
  const [screen, setScreen] = useState<GameScreen>('welcome');
  const [profile, setProfile] = useState<StudentProfile>(() => {
    const saved = localStorage.getItem('whoami_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // ignore
      }
    }
    return DEFAULT_PROFILE;
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  // Per-question state
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [earnedPoints, setEarnedPoints] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(profile.timerPerQuestion);
  const [isReadingPhase, setIsReadingPhase] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [showGameOver, setShowGameOver] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync soundEngine enabled state with profile
  useEffect(() => {
    soundEngine.setSoundEnabled(profile.soundEnabled);
  }, [profile.soundEnabled]);

  // Start game handler
  const handleStartGame = (newProfile: StudentProfile) => {
    setProfile(newProfile);
    localStorage.setItem('whoami_profile', JSON.stringify(newProfile));
    setCurrentQuestionIndex(0);
    setLives(3);
    setScore(0);
    setStreak(0);
    setAnswers([]);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setEarnedPoints(null);
    setTimeLeft(newProfile.timerPerQuestion);
    setIsReadingPhase(true);
    setShowGameOver(false);
    setShowReview(false);
    setScreen('playing');
  };

  // Finish reading and start timer
  const handleFinishReading = useCallback(() => {
    if (!isReadingPhase || isAnswerSubmitted) return;
    SpeechReader.stop();
    soundEngine.playTimerStart();
    setIsReadingPhase(false);
  }, [isReadingPhase, isAnswerSubmitted]);

  // Timer Tick Logic: Only runs when NOT in reading phase!
  useEffect(() => {
    if (screen !== 'playing' || isAnswerSubmitted || isPaused || showGameOver || isReadingPhase) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up for this question!
          handleTimeout();
          return 0;
        }
        if (prev <= 5 && profile.soundEnabled) {
          soundEngine.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [screen, isAnswerSubmitted, isPaused, showGameOver, isReadingPhase, profile.soundEnabled, currentQuestionIndex]);

  // Handle Timeout when timer hits 0
  const handleTimeout = useCallback(() => {
    if (isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    setSelectedOptionId('timeout');
    setStreak(0);
    soundEngine.playWrong();
    soundEngine.playHeartLost();

    const newLives = Math.max(0, lives - 1);
    setLives(newLives);

    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedOptionId: 'timeout',
        isCorrect: false,
        timeSpentSeconds: profile.timerPerQuestion,
      },
    ]);

    if (newLives <= 0) {
      setTimeout(() => {
        setShowGameOver(true);
      }, 1200);
    }
  }, [isAnswerSubmitted, lives, currentQuestion, profile.timerPerQuestion]);

  // Option selection handler
  const handleSelectOption = (optionId: string) => {
    if (isAnswerSubmitted) return;

    SpeechReader.stop();
    if (isReadingPhase) {
      setIsReadingPhase(false);
    }
    setIsAnswerSubmitted(true);
    setSelectedOptionId(optionId);

    const isCorrect = optionId === currentQuestion.correctOptionId;
    const timeSpent = profile.timerPerQuestion - timeLeft;

    if (isCorrect) {
      // 🟢 Correct Answer
      soundEngine.playCorrect();
      launchSingleRocket(0.5, 0.4);

      // Score calculation: 100 base + speed bonus + streak bonus
      const speedBonus = Math.floor((timeLeft / profile.timerPerQuestion) * 40);
      const streakBonus = streak >= 1 ? streak * 20 : 0;
      const points = 100 + speedBonus + streakBonus;

      setEarnedPoints(points);
      setScore((prev) => prev + points);
      setStreak((prev) => prev + 1);

      setAnswers((prev) => [
        ...prev,
        {
          questionId: currentQuestion.id,
          selectedOptionId: optionId,
          isCorrect: true,
          timeSpentSeconds: timeSpent,
        },
      ]);
    } else {
      // 🔴 Wrong Answer
      soundEngine.playWrong();
      soundEngine.playHeartLost();
      setStreak(0);
      const newLives = Math.max(0, lives - 1);
      setLives(newLives);

      setAnswers((prev) => [
        ...prev,
        {
          questionId: currentQuestion.id,
          selectedOptionId: optionId,
          isCorrect: false,
          timeSpentSeconds: timeSpent,
        },
      ]);

      if (newLives <= 0) {
        setTimeout(() => {
          setShowGameOver(true);
        }, 1200);
      }
    }
  };

  // Next question or view certificate
  const handleNextQuestion = () => {
    SpeechReader.stop();
    if (currentQuestionIndex + 1 < QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
      setEarnedPoints(null);
      setTimeLeft(profile.timerPerQuestion);
      setIsReadingPhase(true);
    } else {
      // Completed all 20 questions!
      setScreen('certificate');
    }
  };

  // Toggle sound
  const handleToggleSound = () => {
    const updated = !profile.soundEnabled;
    setProfile((prev) => ({ ...prev, soundEnabled: updated }));
    soundEngine.setSoundEnabled(updated);
    if (!updated) {
      SpeechReader.stop();
    }
  };

  // Change voice speed
  const handleSpeedChange = (speed: number) => {
    setProfile((prev) => ({ ...prev, voiceSpeed: speed }));
  };

  // GameOver Actions
  const handleRevive = () => {
    setLives(3);
    setShowGameOver(false);
  };

  const handleFinishAnyway = () => {
    setShowGameOver(false);
    setScreen('certificate');
  };

  const handleRestart = () => {
    setShowGameOver(false);
    handleStartGame(profile);
  };

  return (
    <div className="min-h-screen bg-amber-50/40 text-slate-800 flex flex-col selection:bg-amber-200">
      {screen === 'welcome' && (
        <WelcomeScreen
          onStartGame={handleStartGame}
          initialProfile={profile}
        />
      )}

      {screen === 'playing' && (
        <>
          <HeaderStats
            profile={profile}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={QUESTIONS.length}
            lives={lives}
            score={score}
            streak={streak}
            timeLeft={timeLeft}
            timerDuration={profile.timerPerQuestion}
            isPaused={isPaused}
            onToggleSound={handleToggleSound}
            isTimerWarning={timeLeft <= 5}
            isReadingPhase={isReadingPhase}
          />

          <main className="flex-1 max-w-6xl w-full mx-auto p-3 sm:p-6 flex flex-col gap-6">
            {/* Passage & Clues Box with Read Aloud */}
            <PassageCard
              question={currentQuestion}
              voiceSpeed={profile.voiceSpeed}
              onSpeedChange={handleSpeedChange}
              isReadingPhase={isReadingPhase}
              onFinishReading={handleFinishReading}
            />

            {/* 4 Choices Card with 🟢 Correct / 🔴 Wrong Animation */}
            <QuestionCard
              question={currentQuestion}
              selectedOptionId={selectedOptionId}
              isAnswerSubmitted={isAnswerSubmitted}
              onSelectOption={handleSelectOption}
              onNextQuestion={handleNextQuestion}
              isLastQuestion={currentQuestionIndex === QUESTIONS.length - 1}
              earnedPoints={earnedPoints}
              isReadingPhase={isReadingPhase}
            />
          </main>

          {showGameOver && (
            <GameOverModal
              profile={profile}
              score={score}
              questionIndex={currentQuestionIndex}
              totalQuestions={QUESTIONS.length}
              onRevive={handleRevive}
              onFinishAnyway={handleFinishAnyway}
              onRestart={handleRestart}
            />
          )}
        </>
      )}

      {screen === 'certificate' && !showReview && (
        <CertificateModal
          profile={profile}
          score={score}
          answers={answers}
          totalQuestions={QUESTIONS.length}
          onPlayAgain={() => setScreen('welcome')}
          onViewReview={() => setShowReview(true)}
        />
      )}

      {screen === 'certificate' && showReview && (
        <ReviewSummary
          questions={QUESTIONS}
          answers={answers}
          onBackToCertificate={() => setShowReview(false)}
          onPlayAgain={() => {
            setShowReview(false);
            setScreen('welcome');
          }}
        />
      )}
    </div>
  );
}
