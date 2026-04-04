
import { useState, useEffect, useRef } from 'react';

export const useMouseTracking = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });
  const targetRef = useRef({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });
  const currentRef = useRef({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });
  const emittedRef = useRef({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });

  useEffect(() => {
    let animationFrameId;
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      targetRef.current = {
        x: event.clientX,
        y: event.clientY,
        normalizedX: clamp((event.clientX / innerWidth) * 2 - 1, -0.75, 0.75),
        normalizedY: clamp(-(event.clientY / innerHeight) * 2 + 1, -0.75, 0.75),
      };
    };

    const animate = () => {
      const smoothing = 0.12;
      const next = {
        x: currentRef.current.x + (targetRef.current.x - currentRef.current.x) * smoothing,
        y: currentRef.current.y + (targetRef.current.y - currentRef.current.y) * smoothing,
        normalizedX:
          currentRef.current.normalizedX +
          (targetRef.current.normalizedX - currentRef.current.normalizedX) * smoothing,
        normalizedY:
          currentRef.current.normalizedY +
          (targetRef.current.normalizedY - currentRef.current.normalizedY) * smoothing,
      };
      currentRef.current = next;

      if (
        Math.abs(next.normalizedX - emittedRef.current.normalizedX) > 0.001 ||
        Math.abs(next.normalizedY - emittedRef.current.normalizedY) > 0.001
      ) {
        emittedRef.current = next;
        setMousePosition(next);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return mousePosition;
};
