import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Play, Clock, Heart, Volume2, Award, Flame, User, Check, BookOpen } from 'lucide-react';
import { StudentProfile } from '../types';

interface WelcomeScreenProps {
  onStartGame: (profile: StudentProfile) => void;
  initialProfile: StudentProfile;
}

const AVATARS = [
  { emoji: '👧', label: 'Girl' },
  { emoji: '👦', label: 'Boy' },
  { emoji: '🕵️‍♂️', label: 'Detective' },
  { emoji: '👩‍🎓', label: 'Scholar' },
  { emoji: '🚀', label: 'Explorer' },
  { emoji: '🦉', label: 'Wise Owl' },
  { emoji: '🦁', label: 'Brave Lion' },
  { emoji: '🌟', label: 'Superstar' },
];

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onStartGame,
  initialProfile,
}) => {
  const [name, setName] = useState(initialProfile.name || '');
  const [selectedAvatar, setSelectedAvatar] = useState(initialProfile.avatar || '👧');
  const [gradeLevel, setGradeLevel] = useState(initialProfile.gradeLevel || 'Standard 4-5');
  const [timerDuration, setTimerDuration] = useState(initialProfile.timerPerQuestion || 25);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name to start the quiz! (કૃપા કરીને તમારું નામ દાખલ કરો)');
      return;
    }

    onStartGame({
      name: name.trim(),
      avatar: selectedAvatar,
      gradeLevel,
      timerPerQuestion: timerDuration,
      soundEnabled: true,
      voiceSpeed: 1.0,
    });
  };

  return (
    <div className="min-h-screen py-8 px-4 flex items-center justify-center bg-gradient-to-b from-amber-50/80 via-white to-orange-50/50">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-amber-200/90 relative overflow-hidden"
      >
        {/* Decorative Top Pill */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider border border-amber-300 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Reading Comprehension Game
          </span>
        </div>

        {/* Game Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight mb-2">
            🎯 Who Am I? – Reading Edition
          </h1>
          <p className="text-sm sm:text-base font-semibold text-amber-800 font-gujarati">
            વાંચો અને પાત્ર ઓળખો: “I live…”, “I like…”, “I went…”
          </p>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-lg mx-auto">
            Read first-person story clues, listen with voice read aloud, identify the character among 4 choices, and earn your official Certificate with firecrackers!
          </p>
        </div>

        {/* Game Flow Features Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
          <div className="bg-amber-50/80 p-2.5 rounded-xl border border-amber-200 text-center">
            <span className="text-xl block mb-1">📖</span>
            <div className="text-xs font-bold text-slate-800">Passage Clues</div>
            <div className="text-[10px] text-slate-500">I live, I like, I went</div>
          </div>
          <div className="bg-sky-50/80 p-2.5 rounded-xl border border-sky-200 text-center">
            <span className="text-xl block mb-1">🔊</span>
            <div className="text-xs font-bold text-slate-800">Read Aloud</div>
            <div className="text-[10px] text-slate-500">Listen anytime</div>
          </div>
          <div className="bg-rose-50/80 p-2.5 rounded-xl border border-rose-200 text-center">
            <span className="text-xl block mb-1">❤️</span>
            <div className="text-xs font-bold text-slate-800">3 Lives & Timer</div>
            <div className="text-[10px] text-slate-500">20 Questions</div>
          </div>
          <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-200 text-center">
            <span className="text-xl block mb-1">🏆</span>
            <div className="text-xs font-bold text-slate-800">Certificate</div>
            <div className="text-[10px] text-slate-500">With Firecrackers 🎆</div>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Student Name */}
          <div>
            <label htmlFor="student-name-input" className="block text-sm font-bold text-slate-800 mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-amber-600" />
                <span>👧 Student Name</span>
                <span className="text-rose-500">*</span>
              </span>
              <span className="text-xs font-normal text-slate-500 font-gujarati">
                (વિદ્યાર્થીનું નામ)
              </span>
            </label>
            <input
              id="student-name-input"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              placeholder="Enter your name (e.g. Diya Patel, Aarav Shah)"
              className="w-full px-4 py-3 rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50/20 text-slate-900 font-semibold text-base transition-all placeholder:text-slate-400 placeholder:font-normal"
              autoFocus
            />
            {error && (
              <p className="text-xs font-semibold text-rose-600 mt-1.5 flex items-center gap-1">
                <span>⚠️</span> {error}
              </p>
            )}
          </div>

          {/* Avatar Selector */}
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-2">
              Choose Your Character Avatar:
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {AVATARS.map((av) => (
                <button
                  key={av.label}
                  type="button"
                  onClick={() => setSelectedAvatar(av.emoji)}
                  className={`p-2 rounded-xl text-2xl flex flex-col items-center justify-center border transition-all cursor-pointer ${
                    selectedAvatar === av.emoji
                      ? 'bg-amber-100 border-amber-500 ring-2 ring-amber-400 scale-105 shadow-xs'
                      : 'bg-slate-50 hover:bg-amber-50 border-slate-200'
                  }`}
                  title={av.label}
                >
                  <span>{av.emoji}</span>
                  <span className="text-[9px] text-slate-500 font-medium mt-0.5">{av.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Grade and Timer Speed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Class / Grade Level:
              </label>
              <select
                value={gradeLevel}
                onChange={(e) => setGradeLevel(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer"
              >
                <option value="Primary (Class 1-3)">Primary (Class 1-3)</option>
                <option value="Standard 4-5">Standard 4-5 (Recommended)</option>
                <option value="Middle School (Class 6-8)">Middle School (Class 6-8)</option>
                <option value="High School & Explorers">High School & Explorers</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span>⏱️ Timer per Question:</span>
                <span className="text-amber-700 font-bold">{timerDuration} Seconds</span>
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { label: '35s (Easy)', sec: 35 },
                  { label: '25s (Normal)', sec: 25 },
                  { label: '15s (Fast)', sec: 15 },
                ].map((mode) => (
                  <button
                    key={mode.sec}
                    type="button"
                    onClick={() => setTimerDuration(mode.sec)}
                    className={`py-2 px-1 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      timerDuration === mode.sec
                        ? 'bg-amber-500 text-white border-amber-600 shadow-2xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Start CTA Button */}
          <button
            id="start-challenge-btn"
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 active:scale-98 text-white font-extrabold text-base sm:text-lg shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Start Reading Challenge 🎯</span>
          </button>
        </form>
      </motion.div>
    </div>
  );
};
