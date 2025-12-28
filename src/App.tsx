import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import MainLanding from './components/MainLanding';
import ProfileSelector from './components/ProfileSelector';
import PMPortfolio from './components/PMPortfolio';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import AIChatbot from './components/AIChatbot';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'profiles' | 'portfolio' | 'pm-portfolio'>('landing');
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage !== 'portfolio') return;
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const handleContinueToProfiles = () => {
    setCurrentPage('profiles');
  };

  const handleProfileSelect = (profileId: string) => {
    if (profileId === 'sde-recruiter') {
      setCurrentPage('portfolio');
      setActiveSection('home');
    } else if (profileId === 'pm-recruiter') {
      setCurrentPage('pm-portfolio');
    } else if (profileId === 'stalker') {
      // For stalker, you can add different logic or also go to portfolio
      console.log(`Profile selected: ${profileId}`);
      setCurrentPage('portfolio');
      setActiveSection('home');
    }
  };

  const handleBackToProfiles = () => {
    setCurrentPage('profiles');
  };



  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="loading-content"
        >
          <div className="loading-spinner"></div>
          <h2>VARUNTEJ KODANDAPURAM</h2>
          <p>Loading Portfolio...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="App">
      <ParticleBackground />
      
      {currentPage === 'landing' && (
        <MainLanding onContinue={handleContinueToProfiles} />
      )}
      
      {currentPage === 'profiles' && (
        <ProfileSelector onProfileSelect={handleProfileSelect} />
      )}
      
      {currentPage === 'portfolio' && (
        <>
          <Header 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange}
          />
          
          <main className="main-content">
            <section id="home">
              <Hero />
            </section>
            
            <section id="about">
              <About />
            </section>
            
            <section id="experience">
              <Experience />
            </section>
            
            <section id="projects">
              <Projects />
            </section>
            
            <section id="skills">
              <Skills />
            </section>
            
            <section id="contact">
              <Contact />
            </section>
          </main>
          
          <AIChatbot />
        </>
      )}

      {currentPage === 'pm-portfolio' && (
        <PMPortfolio onBackToProfiles={handleBackToProfiles} />
      )}
    </div>
  );
}

export default App;
