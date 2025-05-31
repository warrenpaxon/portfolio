import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CloudsScene from './scenes/CloudsScene';
import StarsScene from './scenes/StarsScene';
import About from './pages/About';
import Skills from './pages/Skills';
import Career from "./pages/Career"
import Contact from "./pages/Contact"


const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      {theme === 'light' ? <CloudsScene /> : <StarsScene />}
      <div className="relative min-h-screen flex flex-col">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;