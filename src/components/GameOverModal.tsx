import React from 'react';
import { motion } from 'motion/react';
import { Heart, RotateCcw, Award, Sparkles, PlusCircle } from 'lucide-react';
import { StudentProfile } from '../types';

interface GameOverModalProps {
  profile: StudentProfile;
  score: number;
  questionIndex: number;
  totalQuestions: number;
  onRevive: () => void;
  onFinishAnyway: () => void;
  onRestart: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  profile,
  score,
  questionIndex,
  totalQuestions,
  onRevive,
  onFinishAnyway,
  onRestart,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-rose-200 text-center relative overflow-hidden"
      >
        <div className="w-16 h-16 rounded-full bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-3xl mx-auto mb-4">
          💔
        </div>

        <h2 className="text-2xl font-extrabold text-slate-900 font-display">
          Out of Lives!
        </h2>
        <p className="text-sm font-semibold text-rose-700 font-gujarati mt-0.5">
          હિંમત ન હારશો, {profile.name}!
        </p>

        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          You made great progress reaching question <strong>{questionIndex + 1} of {totalQuestions}</strong> with a score of <strong>{score} points</strong>!
        </p>

        {/* Action Options */}
        <div className="mt-6 space-y-2.5">
          {/* Revive with 3 extra hearts */}
          <button
            id="revive-continue-btn"
            onClick={onRevive}
            className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Heart className="w-4 h-4 fill-white text-white" />
            <span>💖 Revive with 3 Lives & Continue!</span>
          </button>

          {/* View Certificate with current score */}
          <button
            id="claim-certificate-early-btn"
            onClick={onFinishAnyway}
            className="w-full py-2.5 px-4 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Award className="w-4 h-4 text-amber-700" />
            <span>Claim Certificate for Current Score 🏆</span>
          </button>

          {/* Restart from beginning */}
          <button
            id="restart-fresh-btn"
            onClick={onRestart}
            className="w-full py-2 px-4 text-slate-500 hover:text-slate-800 text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restart From Question 1</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
