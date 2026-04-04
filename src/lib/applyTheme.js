import { portfolioConfig } from '@/config/portfolioConfig.js';

const paletteVarMap = {
  background: '--background',
  foreground: '--foreground',
  card: '--card',
  cardForeground: '--card-foreground',
  popover: '--popover',
  popoverForeground: '--popover-foreground',
  primary: '--primary',
  primaryForeground: '--primary-foreground',
  secondary: '--secondary',
  secondaryForeground: '--secondary-foreground',
  muted: '--muted',
  mutedForeground: '--muted-foreground',
  accent: '--accent',
  accentForeground: '--accent-foreground',
  destructive: '--destructive',
  destructiveForeground: '--destructive-foreground',
  border: '--border',
  input: '--input',
  ring: '--ring',
  radius: '--radius',
};

const lightPalette = {
  background: '0 0% 100%',
  foreground: '222 47% 11%',
  card: '0 0% 100%',
  cardForeground: '222 47% 11%',
  popover: '0 0% 100%',
  popoverForeground: '222 47% 11%',
  primary: '188 95% 35%',
  primaryForeground: '0 0% 100%',
  secondary: '210 40% 96%',
  secondaryForeground: '222 47% 11%',
  muted: '210 40% 96%',
  mutedForeground: '215 16% 35%',
  accent: '188 92% 90%',
  accentForeground: '188 95% 22%',
  destructive: '0 84% 50%',
  destructiveForeground: '0 0% 100%',
  border: '214 32% 91%',
  input: '214 32% 91%',
  ring: '188 95% 35%',
  radius: '0.75rem',
};

export const THEME_OPTIONS = [
  { value: 'dark', label: 'Dark Teal', mode: 'dark' },
  { value: 'light', label: 'Light Clean', mode: 'light' },
  { value: 'midnight', label: 'Midnight Blue', mode: 'dark' },
  { value: 'graphite', label: 'Graphite', mode: 'dark' },
  { value: 'emerald-night', label: 'Emerald Night', mode: 'dark' },
  { value: 'sunset', label: 'Sunset', mode: 'light' },
  { value: 'arctic', label: 'Arctic', mode: 'light' },
  { value: 'ocean-depth', label: 'Ocean Depth', mode: 'dark' },
  { value: 'crimson-night', label: 'Crimson Night', mode: 'dark' },
  { value: 'amber-noir', label: 'Amber Noir', mode: 'dark' },
  { value: 'forest-ink', label: 'Forest Ink', mode: 'dark' },
  { value: 'steel-day', label: 'Steel Day', mode: 'light' },
  { value: 'mint-paper', label: 'Mint Paper', mode: 'light' },
  { value: 'peach-ice', label: 'Peach Ice', mode: 'light' },
  { value: 'mono-slate', label: 'Mono Slate', mode: 'light' },
];

const themePalettes = {
  dark: portfolioConfig.theme.palette,
  light: lightPalette,
  midnight: {
    background: '226 32% 9%',
    foreground: '213 100% 97%',
    card: '226 28% 13%',
    cardForeground: '213 100% 97%',
    popover: '226 28% 13%',
    popoverForeground: '213 100% 97%',
    primary: '199 95% 57%',
    primaryForeground: '224 47% 11%',
    secondary: '223 23% 19%',
    secondaryForeground: '213 100% 97%',
    muted: '223 23% 19%',
    mutedForeground: '215 17% 74%',
    accent: '199 95% 57%',
    accentForeground: '224 47% 11%',
    destructive: '0 82% 62%',
    destructiveForeground: '0 0% 100%',
    border: '223 23% 24%',
    input: '223 23% 24%',
    ring: '199 95% 57%',
    radius: '0.75rem',
  },
  graphite: {
    background: '220 10% 11%',
    foreground: '210 20% 95%',
    card: '220 9% 15%',
    cardForeground: '210 20% 95%',
    popover: '220 9% 15%',
    popoverForeground: '210 20% 95%',
    primary: '175 77% 46%',
    primaryForeground: '220 10% 11%',
    secondary: '220 8% 21%',
    secondaryForeground: '210 20% 95%',
    muted: '220 8% 21%',
    mutedForeground: '214 12% 72%',
    accent: '175 77% 46%',
    accentForeground: '220 10% 11%',
    destructive: '0 75% 58%',
    destructiveForeground: '0 0% 100%',
    border: '220 8% 27%',
    input: '220 8% 27%',
    ring: '175 77% 46%',
    radius: '0.75rem',
  },
  'emerald-night': {
    background: '162 35% 8%',
    foreground: '156 36% 96%',
    card: '162 30% 12%',
    cardForeground: '156 36% 96%',
    popover: '162 30% 12%',
    popoverForeground: '156 36% 96%',
    primary: '160 84% 47%',
    primaryForeground: '158 47% 11%',
    secondary: '161 24% 18%',
    secondaryForeground: '156 36% 96%',
    muted: '161 24% 18%',
    mutedForeground: '160 18% 73%',
    accent: '177 82% 45%',
    accentForeground: '158 47% 11%',
    destructive: '0 78% 59%',
    destructiveForeground: '0 0% 100%',
    border: '161 24% 23%',
    input: '161 24% 23%',
    ring: '160 84% 47%',
    radius: '0.75rem',
  },
  sunset: {
    background: '28 100% 98%',
    foreground: '14 54% 16%',
    card: '28 100% 99%',
    cardForeground: '14 54% 16%',
    popover: '28 100% 99%',
    popoverForeground: '14 54% 16%',
    primary: '16 91% 56%',
    primaryForeground: '0 0% 100%',
    secondary: '30 73% 94%',
    secondaryForeground: '14 54% 16%',
    muted: '30 73% 94%',
    mutedForeground: '18 27% 39%',
    accent: '42 96% 70%',
    accentForeground: '18 68% 23%',
    destructive: '0 82% 55%',
    destructiveForeground: '0 0% 100%',
    border: '30 56% 87%',
    input: '30 56% 87%',
    ring: '16 91% 56%',
    radius: '0.75rem',
  },
  arctic: {
    background: '205 67% 98%',
    foreground: '215 39% 17%',
    card: '0 0% 100%',
    cardForeground: '215 39% 17%',
    popover: '0 0% 100%',
    popoverForeground: '215 39% 17%',
    primary: '202 88% 44%',
    primaryForeground: '0 0% 100%',
    secondary: '210 56% 95%',
    secondaryForeground: '215 39% 17%',
    muted: '210 56% 95%',
    mutedForeground: '217 20% 43%',
    accent: '188 80% 89%',
    accentForeground: '202 72% 26%',
    destructive: '0 79% 53%',
    destructiveForeground: '0 0% 100%',
    border: '210 32% 88%',
    input: '210 32% 88%',
    ring: '202 88% 44%',
    radius: '0.75rem',
  },
  'ocean-depth': {
    background: '207 44% 8%',
    foreground: '192 67% 96%',
    card: '207 38% 12%',
    cardForeground: '192 67% 96%',
    popover: '207 38% 12%',
    popoverForeground: '192 67% 96%',
    primary: '189 92% 49%',
    primaryForeground: '207 44% 8%',
    secondary: '207 26% 18%',
    secondaryForeground: '192 67% 96%',
    muted: '207 26% 18%',
    mutedForeground: '199 24% 73%',
    accent: '173 80% 45%',
    accentForeground: '207 44% 8%',
    destructive: '0 78% 59%',
    destructiveForeground: '0 0% 100%',
    border: '207 26% 24%',
    input: '207 26% 24%',
    ring: '189 92% 49%',
    radius: '0.75rem',
  },
  'crimson-night': {
    background: '350 28% 9%',
    foreground: '0 0% 97%',
    card: '350 23% 13%',
    cardForeground: '0 0% 97%',
    popover: '350 23% 13%',
    popoverForeground: '0 0% 97%',
    primary: '348 89% 60%',
    primaryForeground: '350 28% 9%',
    secondary: '345 16% 19%',
    secondaryForeground: '0 0% 97%',
    muted: '345 16% 19%',
    mutedForeground: '344 10% 74%',
    accent: '23 90% 58%',
    accentForeground: '350 28% 9%',
    destructive: '0 80% 58%',
    destructiveForeground: '0 0% 100%',
    border: '345 16% 25%',
    input: '345 16% 25%',
    ring: '348 89% 60%',
    radius: '0.75rem',
  },
  'amber-noir': {
    background: '30 22% 8%',
    foreground: '40 67% 95%',
    card: '30 18% 12%',
    cardForeground: '40 67% 95%',
    popover: '30 18% 12%',
    popoverForeground: '40 67% 95%',
    primary: '42 96% 58%',
    primaryForeground: '30 22% 8%',
    secondary: '29 13% 18%',
    secondaryForeground: '40 67% 95%',
    muted: '29 13% 18%',
    mutedForeground: '34 15% 72%',
    accent: '22 88% 57%',
    accentForeground: '30 22% 8%',
    destructive: '0 79% 58%',
    destructiveForeground: '0 0% 100%',
    border: '29 13% 24%',
    input: '29 13% 24%',
    ring: '42 96% 58%',
    radius: '0.75rem',
  },
  'forest-ink': {
    background: '154 28% 8%',
    foreground: '148 28% 95%',
    card: '154 24% 12%',
    cardForeground: '148 28% 95%',
    popover: '154 24% 12%',
    popoverForeground: '148 28% 95%',
    primary: '143 73% 45%',
    primaryForeground: '154 28% 8%',
    secondary: '151 15% 18%',
    secondaryForeground: '148 28% 95%',
    muted: '151 15% 18%',
    mutedForeground: '150 11% 70%',
    accent: '175 74% 43%',
    accentForeground: '154 28% 8%',
    destructive: '0 78% 59%',
    destructiveForeground: '0 0% 100%',
    border: '151 15% 23%',
    input: '151 15% 23%',
    ring: '143 73% 45%',
    radius: '0.75rem',
  },
  'steel-day': {
    background: '210 20% 97%',
    foreground: '220 22% 20%',
    card: '0 0% 100%',
    cardForeground: '220 22% 20%',
    popover: '0 0% 100%',
    popoverForeground: '220 22% 20%',
    primary: '211 76% 42%',
    primaryForeground: '0 0% 100%',
    secondary: '210 27% 92%',
    secondaryForeground: '220 22% 20%',
    muted: '210 27% 92%',
    mutedForeground: '218 12% 43%',
    accent: '194 70% 88%',
    accentForeground: '206 61% 27%',
    destructive: '0 74% 54%',
    destructiveForeground: '0 0% 100%',
    border: '212 20% 85%',
    input: '212 20% 85%',
    ring: '211 76% 42%',
    radius: '0.75rem',
  },
  'mint-paper': {
    background: '154 43% 97%',
    foreground: '166 44% 16%',
    card: '0 0% 100%',
    cardForeground: '166 44% 16%',
    popover: '0 0% 100%',
    popoverForeground: '166 44% 16%',
    primary: '162 84% 33%',
    primaryForeground: '0 0% 100%',
    secondary: '151 35% 90%',
    secondaryForeground: '166 44% 16%',
    muted: '151 35% 90%',
    mutedForeground: '163 20% 34%',
    accent: '176 57% 84%',
    accentForeground: '167 59% 22%',
    destructive: '0 72% 52%',
    destructiveForeground: '0 0% 100%',
    border: '152 24% 82%',
    input: '152 24% 82%',
    ring: '162 84% 33%',
    radius: '0.75rem',
  },
  'peach-ice': {
    background: '26 100% 97%',
    foreground: '225 26% 22%',
    card: '0 0% 100%',
    cardForeground: '225 26% 22%',
    popover: '0 0% 100%',
    popoverForeground: '225 26% 22%',
    primary: '17 92% 57%',
    primaryForeground: '0 0% 100%',
    secondary: '216 45% 92%',
    secondaryForeground: '225 26% 22%',
    muted: '216 45% 92%',
    mutedForeground: '225 13% 43%',
    accent: '194 81% 87%',
    accentForeground: '207 61% 27%',
    destructive: '0 75% 54%',
    destructiveForeground: '0 0% 100%',
    border: '214 31% 84%',
    input: '214 31% 84%',
    ring: '17 92% 57%',
    radius: '0.75rem',
  },
  'mono-slate': {
    background: '210 15% 96%',
    foreground: '220 9% 18%',
    card: '210 11% 99%',
    cardForeground: '220 9% 18%',
    popover: '210 11% 99%',
    popoverForeground: '220 9% 18%',
    primary: '222 10% 30%',
    primaryForeground: '0 0% 100%',
    secondary: '214 14% 90%',
    secondaryForeground: '220 9% 18%',
    muted: '214 14% 90%',
    mutedForeground: '220 8% 39%',
    accent: '213 17% 86%',
    accentForeground: '222 10% 30%',
    destructive: '0 68% 50%',
    destructiveForeground: '0 0% 100%',
    border: '216 13% 82%',
    input: '216 13% 82%',
    ring: '222 10% 30%',
    radius: '0.75rem',
  },
};

export const FONT_OPTIONS = [
  {
    value: 'space-grotesk',
    label: 'Space Grotesk',
    family:
      "'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    googleFontUrl:
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap',
  },
  {
    value: 'inter',
    label: 'Inter',
    family: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    googleFontUrl:
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  },
  {
    value: 'poppins',
    label: 'Poppins',
    family: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    googleFontUrl:
      'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
  },
  {
    value: 'manrope',
    label: 'Manrope',
    family: "'Manrope', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    googleFontUrl:
      'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap',
  },
  {
    value: 'sora',
    label: 'Sora',
    family: "'Sora', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    googleFontUrl:
      'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap',
  },
  {
    value: 'outfit',
    label: 'Outfit',
    family: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    googleFontUrl:
      'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap',
  },
  {
    value: 'dm-sans',
    label: 'DM Sans',
    family: "'DM Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    googleFontUrl:
      'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap',
  },
  {
    value: 'ibm-plex-sans',
    label: 'IBM Plex Sans',
    family:
      "'IBM Plex Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    googleFontUrl:
      'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap',
  },
];

const THEME_STORAGE_KEY = 'portfolio-preferences-v1';
const defaultTheme = 'dark';
const defaultFont =
  FONT_OPTIONS.find(
    (option) =>
      option.family === portfolioConfig?.theme?.font?.family &&
      option.googleFontUrl === portfolioConfig?.theme?.font?.googleFontUrl
  )?.value ?? 'space-grotesk';

const getPaletteForTheme = (theme) => {
  return themePalettes[theme] ?? themePalettes.dark;
};

const loadGoogleFont = (url) => {
  if (!url) return;
  const alreadyLoaded = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some(
    (link) => link.href === url
  );

  if (alreadyLoaded) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
};

export const getThemePreferences = () => {
  if (typeof window === 'undefined') {
    return { theme: defaultTheme, font: defaultFont };
  }

  try {
    const rawValue = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (!rawValue) {
      return { theme: defaultTheme, font: defaultFont };
    }

    const parsed = JSON.parse(rawValue);
    const theme = THEME_OPTIONS.some((option) => option.value === parsed?.theme)
      ? parsed.theme
      : defaultTheme;
    const font = FONT_OPTIONS.some((option) => option.value === parsed?.font)
      ? parsed.font
      : defaultFont;

    return { theme, font };
  } catch {
    return { theme: defaultTheme, font: defaultFont };
  }
};

export const saveThemePreferences = (preferences) => {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(preferences));
};

export const applyPortfolioTheme = (preferences = getThemePreferences()) => {
  const root = document.documentElement;
  const themeOption = THEME_OPTIONS.find((option) => option.value === preferences.theme);
  const palette = getPaletteForTheme(preferences.theme);
  const fontOption = FONT_OPTIONS.find((option) => option.value === preferences.font);
  const fallbackFont = portfolioConfig.theme.font;
  const selectedFont = fontOption ?? {
    family: fallbackFont?.family,
    googleFontUrl: fallbackFont?.googleFontUrl,
  };

  root.classList.toggle('dark', (themeOption?.mode ?? 'dark') === 'dark');

  Object.entries(paletteVarMap).forEach(([paletteKey, cssVar]) => {
    if (palette[paletteKey]) {
      root.style.setProperty(cssVar, palette[paletteKey]);
    }
  });

  if (selectedFont?.family) {
    root.style.setProperty('--font-family', selectedFont.family);
  }

  loadGoogleFont(selectedFont?.googleFontUrl);
};
