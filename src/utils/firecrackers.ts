import confetti from 'canvas-confetti';
import { soundEngine } from './audio';

export interface FirecrackerShowOptions {
  durationMs?: number;
  playSound?: boolean;
}

export function launchSingleRocket(x = 0.5, y = 0.6) {
  soundEngine.playFirecrackerPop();
  
  // Bright sparkler burst
  confetti({
    particleCount: 75,
    spread: 80,
    origin: { x, y },
    colors: ['#FFD700', '#FF3B30', '#FF9500', '#4CD964', '#5AC8FA', '#AF52DE'],
    ticks: 240,
    gravity: 1.1,
    scalar: 1.1,
    shapes: ['circle', 'square'],
  });
}

export function launchFirecrackerSequence(options: FirecrackerShowOptions = {}) {
  const duration = options.durationMs || 5000;
  const playSound = options.playSound !== false;
  const animationEnd = Date.now() + duration;

  // Sound pops at staggered intervals
  if (playSound) {
    soundEngine.playFirecrackerPop();
    const intervalSound = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(intervalSound);
        return;
      }
      soundEngine.playFirecrackerPop();
    }, 450);
  }

  // 1. Center fountain blast
  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.7, x: 0.5 },
    colors: ['#FF1493', '#00FFFF', '#FFD700', '#FF4500', '#32CD32'],
    ticks: 300,
    gravity: 0.9,
    scalar: 1.2,
  });

  // 2. Rockets shooting from sides
  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 45;

    // Left cannon
    confetti({
      particleCount,
      angle: 60,
      spread: 65,
      origin: { x: 0, y: 0.75 },
      colors: ['#FFD700', '#FF2D55', '#FF9500', '#5856D6'],
    });

    // Right cannon
    confetti({
      particleCount,
      angle: 120,
      spread: 65,
      origin: { x: 1, y: 0.75 },
      colors: ['#34C759', '#007AFF', '#FFCC00', '#AF52DE'],
    });

    // Random sky burst
    if (Math.random() > 0.4) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: {
          x: 0.2 + Math.random() * 0.6,
          y: 0.2 + Math.random() * 0.4,
        },
        colors: ['#FFDF00', '#FF1493', '#00FF7F', '#1E90FF', '#FF4500'],
        gravity: 0.95,
        ticks: 200,
      });
    }
  }, 350);
}

// Sparkler shower (Taralio / sparkler fountain)
export function launchSparklerFountain(x = 0.5, y = 0.5) {
  soundEngine.playFirecrackerPop();
  confetti({
    particleCount: 60,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    origin: { x, y },
    colors: ['#FFF8DC', '#FFD700', '#FFA500', '#FF8C00'],
    ticks: 180,
    gravity: 1.3,
  });
}
