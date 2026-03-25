import { useEffect, useState } from 'react';

export function useCountUp(end: number, duration = 8000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end === 0) return;

    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Slow start, accelerate in the middle, slow at the end (ease-in-out)
      // Using a custom curve that starts very slow
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      setCount(Math.floor(eased * end));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    // Delay before starting to build anticipation
    const timer = setTimeout(() => {
      raf = requestAnimationFrame(step);
    }, 300);

    return () => {
      clearTimeout(timer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [end, duration]);

  return count;
}