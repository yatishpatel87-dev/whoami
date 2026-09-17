export type ClueType = 'live' | 'like' | 'went' | 'wear' | 'do' | 'special';

export interface Clue {
  type: ClueType;
  label: string;
  labelGujarati: string;
  text: string;
  gujaratiText: string;
  icon: string;
}

export interface CharacterOption {
  id: string;
  name: string;
  gujaratiName: string;
  title: string;
  avatarEmoji: string;
  description: string;
}

export interface Question {
  id: number;
  title: string;
  category: string;
  categoryGujarati: string;
  passage: string;
  passageGujarati: string;
  characterName: string;
  characterTitle: string;
  clues: Clue[];
  options: CharacterOption[];
  correctOptionId: string;
  funFact: string;
  funFactGujarati: string;
}

export interface AnswerRecord {
  questionId: number;
  selectedOptionId: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export interface StudentProfile {
  name: string;
  avatar: string;
  gradeLevel: string;
  timerPerQuestion: number; // in seconds, e.g. 25
  soundEnabled: boolean;
  voiceSpeed: number; // 0.85, 1.0, 1.2
}

export type GameScreen = 'welcome' | 'playing' | 'game_over' | 'certificate';
