
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseTracking } from '../hooks/useMouseTracking.js';

const AnimatedText3D = ({ text }) => {
  const { normalizedX, normalizedY } = useMouseTracking();

  return (
    <motion.div
      className="relative perspective-1000"
      animate={{
        rotateX: normalizedY * -4.5,
        rotateY: normalizedX * 4.5,
      }}
      transition={{ type: 'spring', stiffness: 42, damping: 28, mass: 1.1 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <h1 
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-500 drop-shadow-[0_0_10px_rgba(29,201,192,0.4)]"
        style={{ transform: 'translateZ(28px)' }}
      >
        {text}
      </h1>
      <h1 
        className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-cyan-900/35 blur-[1.5px]"
        style={{ transform: 'translateZ(12px)', zIndex: -1 }}
        aria-hidden="true"
      >
        {text}
      </h1>
    </motion.div>
  );
};

export default AnimatedText3D;
