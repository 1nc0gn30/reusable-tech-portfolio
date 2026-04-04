
import React, { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Project3DCard = ({ name, description, url, index }) => {
  const isPlaceholderUrl = !url || url.includes('example.com');
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative perspective-1000 w-full h-full"
    >
      <article
        className={`group block h-full bg-card/40 backdrop-blur-sm border rounded-2xl p-6 transition-colors duration-300 ${
          isPlaceholderUrl
            ? 'border-border/30 opacity-80'
            : 'border-border/50 hover:bg-card/60 hover:border-primary/50'
        }`}
        style={{ transform: 'translateZ(18px)' }}
      >
        <div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ transform: 'translateZ(-6px)' }}
        />
        
        <div className="flex items-start justify-between gap-4 mb-4" style={{ transform: 'translateZ(24px)' }}>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
            {name}
          </h3>
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0" />
        </div>
        <p className="text-muted-foreground leading-relaxed" style={{ transform: 'translateZ(12px)' }}>
          {description}
        </p>
        {isPlaceholderUrl ? (
          <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground/80">
            Add project URL in portfolio config
          </p>
        ) : (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Visit project
          </a>
        )}
      </article>
    </motion.div>
  );
};

export default Project3DCard;
