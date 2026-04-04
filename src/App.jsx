
import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import { applyPortfolioTheme, getThemePreferences, saveThemePreferences } from './lib/applyTheme.js';

function App() {
  const [preferences, setPreferences] = useState(() => getThemePreferences());

  useEffect(() => {
    applyPortfolioTheme(preferences);
    saveThemePreferences(preferences);
  }, [preferences]);

  const handleThemeChange = (theme) => {
    setPreferences((currentPreferences) => ({ ...currentPreferences, theme }));
  };

  const handleFontChange = (font) => {
    setPreferences((currentPreferences) => ({ ...currentPreferences, font }));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Header
          preferences={preferences}
          onThemeChange={handleThemeChange}
          onFontChange={handleFontChange}
        />
        <main className="flex-1 relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
