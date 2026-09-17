import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, Lightbulb, Sparkles, Award } from 'lucide-react';
import { Question, CharacterOption } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedOptionId: string | null;
  isAnswerSubmitted: boolean;
  onSelectOption: (optionId: string) => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
  earnedPoints: number | null;
  isReadingPhase?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOptionId,
  isAnswerSubmitted,
  onSelectOption,
  onNextQuestion,
  isLastQuestion,
  earnedPoints,
  isReadingPhase = false,
}) => {
  const isCorrect = selectedOptionId === question.correctOptionId;

  return (
    <section className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-amber-200/80 transition-all flex flex-col gap-5">
      {/* Title & Prompt */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-display flex items-center gap-2">
            <span>🎯 Who Am I?</span>
            <span className="text-amber-600 text-sm font-bold font-gujarati">
              (હું કોણ છું?)
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Based on the clues in the passage, select the correct character:
          </p>
          {isReadingPhase && !isAnswerSubmitted && (
            <div className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 font-gujarati">
              <span>📖</span>
              <span>વાંચન મોડ: ફકરો વંચાઈ ગયા પછી ટાઈમર શરૂ થશે. તમે સીધો વિકલ્પ પણ પસંદ કરી શકો છો.</span>
            </div>
          )}
        </div>

        {isAnswerSubmitted && isCorrect && earnedPoints && (
          <motion.div
            initial={{ scale: 0.7, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            className="flex items-center gap-1 bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-full text-xs sm:text-sm font-extrabold shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>+{earnedPoints} PTS</span>
          </motion.div>
        )}
      </div>

      {/* 4 Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {question.options.map((opt: CharacterOption, index: number) => {
          const isSelected = selectedOptionId === opt.id;
          const isThisCorrect = opt.id === question.correctOptionId;

          // Compute button styling
          let cardClasses = 'border-slate-200 bg-slate-50/50 hover:bg-amber-50/60 hover:border-amber-300 text-slate-800';
          let borderHighlight = '';

          if (isAnswerSubmitted) {
            if (isThisCorrect) {
              // 🟢 Correct Answer Highlight
              cardClasses = 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-400 text-emerald-950 shadow-md';
              borderHighlight = 'border-l-4 border-l-emerald-600';
            } else if (isSelected && !isThisCorrect) {
              // 🔴 Wrong Answer Highlight
              cardClasses = 'bg-rose-50 border-rose-500 ring-2 ring-rose-300 text-rose-950 shadow-md';
              borderHighlight = 'border-l-4 border-l-rose-600';
            } else {
              cardClasses = 'opacity-50 border-slate-200 bg-slate-50';
            }
          } else if (isSelected) {
            cardClasses = 'bg-amber-100 border-amber-500 text-amber-950 shadow-xs';
          }

          return (
            <motion.button
              key={opt.id}
              id={`option-${opt.id}`}
              disabled={isAnswerSubmitted}
              onClick={() => onSelectOption(opt.id)}
              whileHover={!isAnswerSubmitted ? { scale: 1.01 } : {}}
              whileTap={!isAnswerSubmitted ? { scale: 0.99 } : {}}
              animate={
                isAnswerSubmitted && isSelected && !isThisCorrect
                  ? { x: [-8, 8, -6, 6, -3, 3, 0] }
                  : isAnswerSubmitted && isThisCorrect
                  ? { scale: [1, 1.02, 1] }
                  : {}
              }
              transition={{ duration: 0.4 }}
              className={`p-3.5 rounded-xl border text-left transition-colors relative flex items-start gap-3 cursor-pointer ${cardClasses} ${borderHighlight}`}
            >
              {/* Avatar Emoji Box */}
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                {opt.avatarEmoji}
              </div>

              {/* Character Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="font-extrabold text-sm sm:text-base leading-tight truncate">
                    {opt.name}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 px-1.5 py-0.5 bg-white rounded-md border border-slate-200 shrink-0">
                    Option {String.fromCharCode(65 + index)}
                  </span>
                </div>

                <div className="text-xs font-semibold text-amber-800 font-gujarati mb-1">
                  {opt.gujaratiName}
                </div>

                <p className="text-xs text-slate-600 leading-snug line-clamp-2">
                  {opt.description}
                </p>
              </div>

              {/* Status Icons */}
              {isAnswerSubmitted && (
                <div className="shrink-0 self-center">
                  {isThisCorrect ? (
                    <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                      <CheckCircle2 className="w-5 h-5 fill-emerald-600 text-white" />
                    </div>
                  ) : isSelected ? (
                    <div className="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xs">
                      <XCircle className="w-5 h-5 fill-rose-600 text-white" />
                    </div>
                  ) : null}
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Answer Feedback & Character Reveal Banner */}
      <AnimatePresence>
        {isAnswerSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`rounded-xl p-4 border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
              isCorrect
                ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                : 'bg-rose-50/90 border-rose-300 text-rose-950'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="text-3xl shrink-0 mt-0.5">
                {isCorrect ? '🎉' : '💡'}
              </div>
              <div className="space-y-1">
                <div className="font-extrabold text-sm sm:text-base flex items-center gap-2">
                  <span>
                    {isCorrect ? '🟢 Brilliant! That is Correct!' : '🔴 Good Try! Here is the Answer:'}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-800">
                    {question.characterName}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                  {question.funFact}
                </p>
                <p className="text-xs text-slate-600 font-gujarati">
                  💡 {question.funFactGujarati}
                </p>
              </div>
            </div>

            {/* Next Question CTA */}
            <button
              id="next-question-btn"
              onClick={onNextQuestion}
              className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-98 text-white rounded-xl font-bold text-sm shadow-sm transition-all cursor-pointer"
            >
              <span>{isLastQuestion ? 'View Certificate 🏆' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
