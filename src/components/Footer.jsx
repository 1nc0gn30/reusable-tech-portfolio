
import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolioConfig.js';

const Footer = () => {
  const { ownerName } = portfolioConfig.brand;
  const { github, linkedin } = portfolioConfig.links;

  return (
    <footer className="relative z-10 border-t border-border/20 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {ownerName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
