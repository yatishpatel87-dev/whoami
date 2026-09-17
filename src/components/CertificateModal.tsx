import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Award, Printer, RotateCcw, Sparkles, Star, CheckCircle, Flame, Share2, Volume2 } from 'lucide-react';
import { StudentProfile, AnswerRecord } from '../types';
import { launchFirecrackerSequence, launchSingleRocket, launchSparklerFountain } from '../utils/firecrackers';
import { soundEngine } from '../utils/audio';

interface CertificateModalProps {
  profile: StudentProfile;
  score: number;
  answers: AnswerRecord[];
  totalQuestions: number;
  onPlayAgain: () => void;
  onViewReview: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  profile,
  score,
  answers,
  totalQuestions,
  onPlayAgain,
  onViewReview,
}) => {
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const accuracy = Math.round((correctCount / totalQuestions) * 100);
  const [stars, setStars] = useState<number>(3);
  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  useEffect(() => {
    // Determine stars
    if (accuracy >= 85) setStars(3);
    else if (accuracy >= 60) setStars(2);
    else setStars(1);

    // Grand fanfare & fireworks trigger
    soundEngine.playFanfare();
    launchFirecrackerSequence({ durationMs: 6000, playSound: true });
  }, [accuracy]);

  const handleBurstMoreCrackers = () => {
    launchFirecrackerSequence({ durationMs: 4000, playSound: true });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-8 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-amber-100/60 via-orange-50/40 to-amber-50/80">
      
      {/* Top Celebratory Announcement */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mb-6 max-w-xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-extrabold mb-3 shadow-xs border border-emerald-300">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>🎉 Congratulations {profile.name}! You did it!</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
          🏆 Reading Champion Certificate
        </h1>
        <p className="text-sm text-slate-600 mt-1 font-gujarati font-semibold">
          તમારું પ્રમાણપત્ર તૈયાર છે અને ફટાકડા ફૂટી રહ્યા છે! 🎆
        </p>

        {/* Firecrackers Button */}
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          <button
            id="burst-firecrackers-btn"
            onClick={handleBurstMoreCrackers}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 hover:from-red-700 hover:to-orange-600 active:scale-95 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md cursor-pointer transition-all animate-bounce"
          >
            <span>🎆 ફટાકડા ફોડો! (Burst Crackers!)</span>
          </button>
          <button
            onClick={() => launchSparklerFountain(0.5, 0.5)}
            className="px-3 py-2 bg-amber-200 text-amber-900 font-bold text-xs rounded-xl hover:bg-amber-300 transition-colors cursor-pointer"
          >
            ✨ તારામંડળ (Sparklers)
          </button>
        </div>
      </motion.div>

      {/* The Printable Certificate Container */}
      <motion.div
        id="printable-certificate"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="max-w-3xl w-full bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 rounded-3xl p-6 sm:p-12 shadow-2xl border-8 border-double border-amber-300 relative overflow-hidden"
      >
        {/* Subtle Watermark Background Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none text-[320px]">
          🎯
        </div>

        {/* Certificate Header Borders */}
        <div className="relative text-center border-b-2 border-amber-200/80 pb-6 mb-6">
          <div className="flex items-center justify-center gap-2 text-amber-600 mb-1">
            <Award className="w-8 h-8" />
          </div>
          <div className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-amber-800">
            Certificate of Reading Excellence
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display mt-1">
            Who Am I? – Reading Edition
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-gujarati">
            વાંચન અને પાત્ર ઓળખ પ્રવીણતા સન્માન પત્ર
          </p>
        </div>

        {/* Certificate Body */}
        <div className="text-center space-y-4 relative">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-slate-400 font-bold">
            This certificate is proudly awarded to
          </p>

          <div className="py-2">
            <h3 className="text-3xl sm:text-5xl font-black text-amber-900 tracking-tight font-display underline decoration-amber-300 decoration-wavy underline-offset-8">
              {profile.avatar} {profile.name}
            </h3>
            <span className="inline-block mt-3 text-xs font-bold text-slate-500 bg-amber-100/60 px-3 py-1 rounded-full border border-amber-200">
              Grade: {profile.gradeLevel}
            </span>
          </div>

          <p className="text-xs sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed">
            For outstanding reading comprehension, deductive character identification, and successfully completing all <strong>{totalQuestions} questions</strong> through vivid clues like <em>“I live…”, “I like…”,</em> and <em>“I went…”</em>.
          </p>

          {/* Star Rating */}
          <div className="flex justify-center gap-1.5 my-3">
            {[1, 2, 3].map((starIdx) => (
              <Star
                key={starIdx}
                className={`w-7 h-7 ${
                  starIdx <= stars
                    ? 'text-amber-400 fill-amber-400 drop-shadow-xs'
                    : 'text-slate-200'
                }`}
              />
            ))}
          </div>

          {/* Performance Metric Badges */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto py-2">
            <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200">
              <span className="text-xs text-amber-800 font-semibold block">Score</span>
              <span className="text-base sm:text-xl font-extrabold text-slate-900">{score}</span>
            </div>
            <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
              <span className="text-xs text-emerald-800 font-semibold block">Correct</span>
              <span className="text-base sm:text-xl font-extrabold text-emerald-900">
                {correctCount} / {totalQuestions}
              </span>
            </div>
            <div className="bg-sky-50 p-2.5 rounded-xl border border-sky-200">
              <span className="text-xs text-sky-800 font-semibold block">Accuracy</span>
              <span className="text-base sm:text-xl font-extrabold text-sky-900">{accuracy}%</span>
            </div>
          </div>
        </div>

        {/* Certificate Footer / Signatures & Seal */}
        <div className="mt-8 pt-6 border-t-2 border-amber-200/80 flex flex-wrap items-center justify-between gap-4 text-left">
          {/* Left: Date */}
          <div className="text-xs">
            <span className="text-slate-400 block font-semibold">Awarded On:</span>
            <span className="font-bold text-slate-800">{currentDate}</span>
          </div>

          {/* Center: Golden Seal Medal */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-300 border-4 border-white shadow-lg flex flex-col items-center justify-center text-white text-center p-1">
            <Award className="w-6 h-6 text-amber-900" />
            <span className="text-[9px] font-black uppercase text-amber-950 leading-tight">Master</span>
            <span className="text-[8px] font-bold text-amber-900 leading-tight">Reader</span>
          </div>

          {/* Right: Signature */}
          <div className="text-xs text-right">
            <span className="text-slate-400 block font-semibold">Verified By:</span>
            <span className="font-serif italic font-bold text-base text-amber-900 block">
              Who Am I? Committee
            </span>
            <span className="text-[10px] text-slate-400">Reading & Literacy Board</span>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons below Certificate */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          id="print-certificate-btn"
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 rounded-xl font-bold text-sm shadow-xs transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4 text-slate-600" />
          <span>Print / Save Certificate (PDF)</span>
        </button>

        <button
          id="review-answers-btn"
          onClick={onViewReview}
          className="flex items-center gap-2 px-5 py-2.5 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 rounded-xl font-bold text-sm shadow-xs transition-all cursor-pointer"
        >
          <CheckCircle className="w-4 h-4 text-amber-600" />
          <span>Review All 20 Questions</span>
        </button>

        <button
          id="play-again-btn"
          onClick={onPlayAgain}
          className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow-sm transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Play Again (ફરીથી રમો)</span>
        </button>
      </div>

    </div>
  );
};
