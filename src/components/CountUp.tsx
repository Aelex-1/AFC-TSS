import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  start?: number;
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  customClass?: string;
}

export default function CountUp({
  start = 0,
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  customClass = "",
}: CountUpProps) {
  const [count, setCount] = useState<number>(start);

  const ref = useRef<HTMLSpanElement | null>(null);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          // Cancel any previous animation
          if (animationFrame.current !== null) {
            cancelAnimationFrame(animationFrame.current);
          }

          const startTime = performance.now();

          const animate = (currentTime: number): void => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(easedProgress * end));

            if (progress < 1) {
              animationFrame.current =
                requestAnimationFrame(animate);
            }
          };

          animationFrame.current = requestAnimationFrame(animate);
        } else {
          // Reset when leaving viewport
          setCount(start);

          if (animationFrame.current !== null) {
            cancelAnimationFrame(animationFrame.current);
            animationFrame.current = null;
          }
        }
      },
      {
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={customClass}>
      {prefix}
      {new Intl.NumberFormat().format(count)}
      {suffix}
    </span>
  );
}
