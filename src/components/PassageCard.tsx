import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Square, Languages, BookOpen, Sparkles, HelpCircle } from 'lucide-react';
import { Question, Clue } from '../types';
import { SpeechReader } from '../utils/audio';

interface PassageCardProps {
  question: Question;
  voiceSpeed: number;
  onSpeedChange: (speed: number) => void;
  isReadingPhase: boolean;
  onFinishReading: () => void;
}

export const PassageCard: React.FC<PassageCardProps> = ({
  question,
  voiceSpeed,
  onSpeedChange,
  isReadingPhase,
  onFinishReading,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showGujarati, setShowGujarati] = useState(false);
  const [activeClueIndex, setActiveClueIndex] = useState<number | null>(null);

  // Stop speech if question changes
  useEffect(() => {
    SpeechReader.stop();
    setIsPlaying(false);
    setActiveClueIndex(null);
  }, [question.id]);

  const handleToggleReadAloud = () => {
    if (isPlaying) {
      SpeechReader.stop();
      setIsPlaying(false);
      setActiveClueIndex(null);
    } else {
      setIsPlaying(true);
      SpeechReader.speak(
        question.passage,
        voiceSpeed,
        () => setIsPlaying(true),
        () => {
          setIsPlaying(false);
          setActiveClueIndex(null);
          // Auto start timer when reading ends
          if (isReadingPhase) {
            onFinishReading();
          }
        },
        () => {
          setIsPlaying(false);
          setActiveClueIndex(null);
        }
      );
    }
  };

  const handleReadClue = (clue: Clue, index: number) => {
    SpeechReader.stop();
    setActiveClueIndex(index);
    setIsPlaying(true);
    const textToSpeak = `${clue.label} ${clue.text}`;
    SpeechReader.speak(
      textToSpeak,
      voiceSpeed,
      () => setIsPlaying(true),
      () => {
        setIsPlaying(false);
        setActiveClueIndex(null);
      },
      () => {
        setIsPlaying(false);
        setActiveClueIndex(null);
      }
    );
  };

  return (
    <section className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-amber-200/80 transition-all flex flex-col gap-4">
      {/* Passage Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-amber-100 text-amber-800 text-lg shadow-2xs">
            <BookOpen className="w-5 h-5" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                {question.category}
              </span>
              {showGujarati && (
                <span className="text-xs font-medium text-amber-800 font-gujarati">
                  ({question.categoryGujarati})
                </span>
              )}
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-800 font-display">
              {question.title}
            </h2>
          </div>
        </div>

        {/* Read Aloud & Gujarati Controls */}
        <div className="flex items-center gap-2">
          {/* Gujarati Subtitles Toggle */}
          <button
            id="toggle-gujarati-btn"
            onClick={() => setShowGujarati(!showGujarati)}
            className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
              showGujarati
                ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
            }`}
            title="Toggle Gujarati hints / ગુજરાતી અનુવાદ"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{showGujarati ? 'English Only' : 'ગુજરાતી અનુવાદ'}</span>
          </button>

          {/* Speed Selector */}
          <div className="hidden sm:flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200 text-xs font-semibold">
            {[0.8, 1.0, 1.2].map((speed) => (
              <button
                key={speed}
                onClick={() => onSpeedChange(speed)}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  voiceSpeed === speed
                    ? 'bg-white text-amber-800 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>

          {/* Read Aloud Button */}
          <button
            id="read-aloud-passage-btn"
            onClick={handleToggleReadAloud}
            className={`flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer shadow-2xs ${
              isPlaying
                ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
                : 'bg-amber-500 hover:bg-amber-600 text-white border-amber-600'
            }`}
          >
            {isPlaying ? (
              <>
                <Square className="w-3.5 h-3.5 fill-white" />
                <span>Stop</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" />
                <span>🔊 Read Aloud</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* The Story Passage Box */}
      <div className="relative bg-amber-50/50 rounded-xl p-4 sm:p-5 border border-amber-200/60 leading-relaxed">
        {isPlaying && (
          <div className="absolute top-2 right-2 flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Speaking...</span>
          </div>
        )}

        <p className="text-base sm:text-lg text-slate-800 font-medium tracking-normal selection:bg-amber-200">
          "{question.passage}"
        </p>

        {/* Optional Gujarati translation of passage */}
        {showGujarati && (
          <div className="mt-3 pt-3 border-t border-amber-200/70 text-sm text-slate-700 font-gujarati leading-relaxed bg-amber-100/30 p-2.5 rounded-lg">
            <span className="font-bold text-amber-900 block mb-0.5">📖 ગુજરાતી અર્થ:</span>
            "{question.passageGujarati}"
          </div>
        )}
      </div>

      {/* Clues Breakdown ("I live...", "I like...", "I went...", "I wear...") */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Character Clues in Passage:
          </span>
          <span className="text-[11px] text-slate-400">
            Click 🔊 on any clue to listen
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {question.clues.map((clue, idx) => {
            const isClueActive = activeClueIndex === idx;

            // Distinct badge colors for clue types
            let badgeBg = 'bg-sky-100 text-sky-800 border-sky-300';
            if (clue.type === 'like') badgeBg = 'bg-rose-100 text-rose-800 border-rose-300';
            if (clue.type === 'went') badgeBg = 'bg-emerald-100 text-emerald-800 border-emerald-300';
            if (clue.type === 'wear' || clue.type === 'special') badgeBg = 'bg-purple-100 text-purple-800 border-purple-300';

            return (
              <div
                key={idx}
                className={`p-3 rounded-xl border transition-all text-left flex flex-col justify-between gap-1.5 ${
                  isClueActive
                    ? 'bg-amber-100/90 border-amber-400 ring-2 ring-amber-300 shadow-xs'
                    : 'bg-slate-50/80 hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md border ${badgeBg}`}>
                    <span>{clue.icon}</span>
                    <span>{clue.label}</span>
                    {showGujarati && (
                      <span className="font-gujarati opacity-90">({clue.labelGujarati})</span>
                    )}
                  </span>

                  <button
                    onClick={() => handleReadClue(clue, idx)}
                    className="text-slate-400 hover:text-amber-700 p-1 rounded-md hover:bg-white transition-colors cursor-pointer"
                    title={`Listen to ${clue.label}`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-sm font-semibold text-slate-800 leading-snug">
                  {clue.text}
                </p>

                {showGujarati && (
                  <p className="text-xs text-slate-600 font-gujarati pt-1 border-t border-slate-200/60">
                    {clue.gujaratiText}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Reading Phase Status & Start Timer Action Bar */}
      {isReadingPhase ? (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50/70 border-2 border-amber-300/80 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2.5 text-left w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-800 font-gujarati flex items-center gap-1.5">
                <span>વાંચન શાંતિથી પૂર્ણ કરો!</span>
                <span className="text-[11px] font-normal text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded font-sans">
                  ટાઈમર બંધ છે
                </span>
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 font-sans">
                {isPlaying
                  ? '🔊 વાર્તા સંભળાઈ રહી છે... વાર્તા પૂરું થતાં ટાઈમર આપોઆપ શરૂ થશે!'
                  : 'Take your time to read. Timer will start when audio finishes or when you tap the button.'}
              </p>
            </div>
          </div>

          <button
            id="finish-reading-start-timer-btn"
            onClick={() => {
              if (isPlaying) SpeechReader.stop();
              setIsPlaying(false);
              onFinishReading();
            }}
            className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shrink-0"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>વાંચન પૂરું થયું • ટાઈમર શરૂ કરો ⏱️</span>
          </button>
        </div>
      ) : (
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl px-3.5 py-2 flex items-center justify-between text-xs text-emerald-900 font-semibold shadow-2xs">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span>⏱️ ટાઈમર શરૂ થઈ ગયું છે! નીચે આપેલા 4 વિકલ્પોમાંથી સાચું પાત્ર પસંદ કરો.</span>
          </span>
          <span className="text-emerald-700 text-[11px] hidden md:inline font-sans">
            (Timer is running – select your answer below)
          </span>
        </div>
      )}
    </section>
  );
};
