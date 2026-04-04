
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Palette } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolioConfig.js';
import { FONT_OPTIONS, THEME_OPTIONS } from '@/lib/applyTheme.js';

const Header = ({ preferences, onThemeChange, onFontChange }) => {
  const { firstName, lastName } = portfolioConfig.brand;
  const { github, linkedin } = portfolioConfig.links;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/20 bg-background/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300 tracking-tight"
          >
            {firstName} <span className="text-primary">{lastName}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {['home', 'projects', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 capitalize"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <details className="relative">
              <summary className="list-none cursor-pointer text-muted-foreground hover:text-primary transition-colors duration-300">
                <span className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border/60 bg-background/60 px-3 backdrop-blur-sm text-xs font-semibold tracking-wide uppercase">
                  <Palette className="w-4 h-4" />
                  Theme
                </span>
              </summary>
              <div className="absolute right-0 mt-2 w-64 rounded-lg border border-border/70 bg-card/95 backdrop-blur-md p-3 shadow-xl">
                <label className="block text-xs font-medium text-muted-foreground mb-1">Theme</label>
                <select
                  className="w-full mb-3 rounded-md border border-input bg-background px-2 py-2 text-sm text-foreground"
                  value={preferences.theme}
                  onChange={(event) => onThemeChange(event.target.value)}
                >
                  {THEME_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <label className="block text-xs font-medium text-muted-foreground mb-1">Font</label>
                <select
                  className="w-full rounded-md border border-input bg-background px-2 py-2 text-sm text-foreground"
                  value={preferences.font}
                  onChange={(event) => onFontChange(event.target.value)}
                >
                  {FONT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </details>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
