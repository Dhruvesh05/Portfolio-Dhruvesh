import { useEffect, useRef } from "react";
import {
  useScroll,
  useSpring,
  useMotionValue,
  MotionValue,
} from "framer-motion";

interface UseHorizontalScrollReturn {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  trackRef: React.RefObject<HTMLDivElement | null>;
  x: MotionValue<number>;
}

export function useHorizontalScroll(): UseHorizontalScrollReturn {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const rawX = useMotionValue(0);

  const x = useSpring(rawX, {
    stiffness: prefersReducedMotion ? 2000 : 90,
    damping: prefersReducedMotion ? 200 : 24,
    mass: 0.8,
    restDelta: 0.001,
  });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    let horizontalDistance = 0;

    const updateSizes = () => {
      const trackWidth = track.scrollWidth;
      horizontalDistance = Math.max(0, trackWidth - window.innerWidth);
      wrapper.style.height = `${horizontalDistance + window.innerHeight}px`;
    };

    const ro = new ResizeObserver(updateSizes);
    ro.observe(track);
    ro.observe(document.body);
    updateSizes();

    const unsubscribe = scrollYProgress.on("change", (progress) => {
      rawX.set(-progress * horizontalDistance);
    });

    return () => {
      ro.disconnect();
      unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { wrapperRef, trackRef, x };
}
