export const portfolioConfig = {
  brand: {
    ownerName: 'Neal Frazier',
    firstName: 'Neal',
    lastName: 'Frazier',
    role: 'AI & Software Security Developer',
    title: 'Neal Frazier - AI & Software Security Developer',
    description:
      'Portfolio of Neal Frazier, specializing in AI-powered security solutions and software development.',
    heroHeadline: 'Neal Frazier',
    heroIntro:
      'Building intelligent security solutions that protect systems and data through advanced machine learning and robust software engineering.',
    sectionIntro:
      'A reusable, tech-themed portfolio template for newcomers who want a strong, modern starting point.',
    about: [
      'This template is designed for developers and security engineers who want a polished portfolio without starting from scratch.',
      'Update the config file with your own bio, projects, links, and brand voice to quickly launch a personal site.',
      'The design keeps a high-tech atmosphere while prioritizing readability, smooth motion, and practical customization.',
    ],
  },
  links: {
    github: 'https://github.com/1nc0gn30',
    linkedin: 'https://linkedin.com/in/nealfrazier',
    website: 'https://nealfrazier.tech',
  },
  theme: {
    font: {
      family: "'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      googleFontUrl:
        'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap',
    },
    palette: {
      background: '222 28% 8%',
      foreground: '210 40% 98%',
      card: '222 28% 11%',
      cardForeground: '210 40% 98%',
      popover: '222 28% 11%',
      popoverForeground: '210 40% 98%',
      primary: '188 95% 43%',
      primaryForeground: '0 0% 100%',
      secondary: '223 24% 18%',
      secondaryForeground: '210 40% 98%',
      muted: '223 24% 18%',
      mutedForeground: '217 16% 68%',
      accent: '188 95% 43%',
      accentForeground: '0 0% 100%',
      destructive: '0 84% 60%',
      destructiveForeground: '0 0% 100%',
      border: '223 24% 22%',
      input: '223 24% 22%',
      ring: '188 95% 43%',
      radius: '0.75rem',
    },
  },
  three: {
    enabled: true,
    opacityClass: 'opacity-[0.58]',
    particleCountDesktop: 190,
    particleCountMobile: 90,
    particleSpread: 80,
    shapeCount: 2,
    cameraParallax: 0.95,
    cameraSmoothing: 0.02,
    rotationSpeed: {
      particlesX: 0.00004,
      particlesY: 0.00011,
      shapeX: 0.00026,
      shapeY: 0.00034,
    },
    models: [
      { path: '/models/DamagedHelmet.glb', scale: 2.3, position: [-8, 4, -4], spinY: 0.0018 },
      { path: '/models/BoomBox.glb', scale: 18, position: [8, -5, -8], spinY: -0.0015 },
      { path: '/models/Avocado.glb', scale: 11, position: [0, 7, -10], spinY: 0.0012 },
    ],
  },
  projects: [
    {
      name: 'SecureAuth',
      description:
        'Authentication system with ML-based anomaly detection for identifying suspicious login patterns.',
      url: 'https://secureauth.example.com',
    },
    {
      name: 'VulnScanner',
      description:
        'Automated vulnerability assessment tool for continuous security monitoring.',
      url: 'https://vulnscanner.example.com',
    },
    {
      name: 'CodeGuard',
      description:
        'AI-powered code security analyzer that detects vulnerabilities during development.',
      url: 'https://codeguard.example.com',
    },
    {
      name: 'ThreatIntel',
      description:
        'Real-time threat intelligence dashboard aggregating security data from multiple sources.',
      url: 'https://threatintel.example.com',
    },
    {
      name: 'DataShield',
      description:
        'Data loss prevention system monitoring and protecting sensitive information.',
      url: 'https://datashield.example.com',
    },
    {
      name: 'IdentityHub',
      description:
        'Identity and access management platform with multi-factor authentication.',
      url: 'https://identityhub.example.com',
    },
  ],
};
