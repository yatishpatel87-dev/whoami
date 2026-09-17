import React from 'react';
import { Heart, Volume2, VolumeX, Sparkles, Flame, Clock, BookOpen } from 'lucide-react';
import { StudentProfile } from '../types';

interface HeaderStatsProps {
  profile: StudentProfile;
  currentQuestionIndex: number;
  totalQuestions: number;
  lives: number;
  score: number;
  streak: number;
  timeLeft: number;
  timerDuration: number;
  isPaused: boolean;
  onToggleSound: () => void;
  isTimerWarning: boolean;
  isReadingPhase: boolean;
}

export const HeaderStats: React.FC<HeaderStatsProps> = ({
  profile,
  currentQuestionIndex,
  totalQuestions,
  lives,
  score,
  streak,
  timeLeft,
  timerDuration,
  onToggleSound,
  isTimerWarning,
  isReadingPhase,
}) => {
  const timerPercentage = Math.max(0, Math.min(100, (timeLeft / timerDuration) * 100));

  return (
    <header className="w-full bg-white/95 backdrop-blur border-b border-amber-200/80 sticky top-0 z-30 shadow-xs px-3 sm:px-6 py-2.5 transition-all">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        
        {/* Student Avatar & Name */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-[140px]">
          <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-xl shadow-xs shrink-0">
            {profile.avatar}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-amber-900 tracking-wider uppercase">Student</span>
            <span className="text-sm sm:text-base font-bold text-slate-800 truncate max-w-[120px] sm:max-w-[160px]">
              {profile.name}
            </span>
          </div>
        </div>

        {/* Question Counter & Progress Mini Bar */}
        <div className="flex flex-col items-center flex-1 max-w-[240px] order-3 sm:order-2 w-full sm:w-auto mt-1 sm:mt-0">
          <div className="flex items-center justify-between w-full text-xs font-bold text-slate-600 mb-1">
            <span className="flex items-center gap-1">
              <span className="text-amber-600">Q</span>uestion {currentQuestionIndex + 1} / {totalQuestions}
            </span>
            <span className="text-amber-700 font-semibold">{Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%</span>
          </div>
          <div className="w-full h-2.5 bg-amber-100/90 rounded-full overflow-hidden p-0.5 border border-amber-200">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Gameplay Status: Timer, Lives, Score, Sound */}
        <div className="flex items-center gap-2 sm:gap-4 order-2 sm:order-3">
          
          {/* Timer or Reading Mode Status */}
          {isReadingPhase ? (
            <div 
              id="game-timer" 
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-300 bg-sky-50 text-sky-900 font-semibold shadow-2xs animate-pulse"
              title="Reading Phase: Timer starts after reading completes"
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-xs sm:text-sm font-bold">
                વાંચન સમય <span className="text-sky-600 font-normal hidden sm:inline">(Reading)</span>
              </span>
              <span className="text-[11px] bg-sky-200/80 text-sky-800 px-1.5 py-0.2 rounded font-bold ml-0.5">
                {timeLeft}s
              </span>
            </div>
          ) : (
            <div 
              id="game-timer" 
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-all ${
                isTimerWarning
                  ? 'bg-rose-100 border-rose-400 text-rose-700 animate-pulse font-extrabold shadow-sm' 
                  : 'bg-amber-50/80 border-amber-200 text-amber-900 font-semibold'
              }`}
            >
              <Clock className={`w-4 h-4 ${isTimerWarning ? 'text-rose-600 animate-spin' : 'text-amber-600'}`} />
              <span className="text-xs sm:text-sm tabular-nums font-bold">
                {timeLeft}s
              </span>
              <div className="w-8 h-1.5 bg-slate-200 rounded-full overflow-hidden hidden sm:block">
                <div 
                  className={`h-full transition-all duration-200 ${
                    isTimerWarning ? 'bg-rose-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${timerPercentage}%` }}
                />
              </div>
            </div>
          )}

          {/* 3 Lives */}
          <div id="lives-counter" className="flex items-center gap-0.5 px-2 py-1 bg-rose-50 border border-rose-200 rounded-full shadow-2xs">
            {[1, 2, 3].map((heartIndex) => {
              const hasLife = heartIndex <= lives;
              return (
                <span key={heartIndex} className="transition-transform duration-200">
                  {hasLife ? (
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500 drop-shadow-xs" />
                  ) : (
                    <Heart className="w-4 h-4 text-slate-300 fill-slate-200" />
                  )}
                </span>
              );
            })}
          </div>

          {/* Score & Streak */}
          <div className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 border border-amber-300 rounded-full text-xs sm:text-sm font-bold text-amber-950">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="tabular-nums">{score}</span>
            {streak >= 2 && (
              <span className="flex items-center gap-0.5 text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ml-1">
                <Flame className="w-3 h-3 fill-orange-500 text-orange-600" />
                {streak}x
              </span>
            )}
          </div>

          {/* Sound Toggle */}
          <button
            id="sound-toggle-btn"
            onClick={onToggleSound}
            aria-label={profile.soundEnabled ? "Mute sound" : "Enable sound"}
            className="p-1.5 text-slate-600 hover:text-amber-800 hover:bg-amber-100 rounded-full transition-colors cursor-pointer"
            title={profile.soundEnabled ? "Sound: ON" : "Sound: OFF"}
          >
            {profile.soundEnabled ? (
              <Volume2 className="w-4 h-4 text-amber-700" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

        </div>

      </div>
    </header>
  );
};
