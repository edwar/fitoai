import confetti from "canvas-confetti";

export function useConfetti() {
  const DURATION = 5 * 1000;
  const ANIMATION_END = Date.now() + DURATION;
  const DEAFULT = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const handleConfetti = () => {
    // Tipado explícito para interval
    const interval: number = window.setInterval(function () {
      const timeLeft = ANIMATION_END - Date.now();

      if (timeLeft <= 0) {
        return window.clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / DURATION);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, DEAFULT, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        })
      );
      confetti(
        Object.assign({}, DEAFULT, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        })
      );
    }, 250);
  }

  return {
    handleConfetti
  };
}
