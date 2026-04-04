
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ name, description, url, index }) => {
  const isPlaceholderUrl = !url || url.includes('example.com');

  return (
    <motion.article
      className={`group block bg-card border rounded-xl p-6 transition-all duration-300 ${
        isPlaceholderUrl
          ? 'border-border/40 opacity-80'
          : 'border-border hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0" />
      </div>
      <p className="text-muted-foreground leading-relaxed">
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
    </motion.article>
  );
};

export default ProjectCard;
