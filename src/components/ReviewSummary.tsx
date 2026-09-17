import React from 'react';
import { CheckCircle2, XCircle, ArrowLeft, RotateCcw, Award } from 'lucide-react';
import { Question, AnswerRecord } from '../types';

interface ReviewSummaryProps {
  questions: Question[];
  answers: AnswerRecord[];
  onBackToCertificate: () => void;
  onPlayAgain: () => void;
}

export const ReviewSummary: React.FC<ReviewSummaryProps> = ({
  questions,
  answers,
  onBackToCertificate,
  onPlayAgain,
}) => {
  return (
    <div className="min-h-screen py-8 px-4 max-w-4xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <button
          onClick={onBackToCertificate}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-amber-200 text-amber-900 font-bold text-sm hover:bg-amber-50 cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Certificate</span>
        </button>

        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
          📋 20 Questions Review
        </h1>

        <button
          onClick={onPlayAgain}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm cursor-pointer shadow-xs"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Play Again</span>
        </button>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {questions.map((q, idx) => {
          const record = answers.find((a) => a.questionId === q.id);
          const isCorrect = record ? record.isCorrect : false;
          const selectedOption = q.options.find((opt) => opt.id === record?.selectedOptionId);
          const correctOption = q.options.find((opt) => opt.id === q.correctOptionId);

          return (
            <div
              key={q.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all bg-white shadow-2xs ${
                isCorrect ? 'border-emerald-200' : 'border-rose-200'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700">
                    {idx + 1}
                  </span>
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {q.title}
                  </span>
                </div>

                <div className="shrink-0 flex items-center gap-1">
                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Correct</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Missed</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Passage extract */}
              <p className="text-xs sm:text-sm text-slate-600 italic bg-amber-50/40 p-2.5 rounded-lg border border-amber-100 mb-3">
                "{q.passage}"
              </p>

              {/* Answers comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block font-semibold">Your Answer:</span>
                  <span className="font-bold text-slate-800">
                    {selectedOption ? `${selectedOption.avatarEmoji} ${selectedOption.name}` : 'Not answered (timed out)'}
                  </span>
                </div>

                <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                  <span className="text-emerald-700 block font-semibold">Correct Character:</span>
                  <span className="font-bold text-emerald-950">
                    {correctOption?.avatarEmoji} {correctOption?.name} ({correctOption?.gujaratiName})
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
