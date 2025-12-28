import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaCode, FaCogs, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import './PMPortfolio.css';
import Hero from './Hero';
import PMAbout from './PMAbout';
import PMExperience from './PMExperience';
import PMProjects from './PMProjects';
import PMSkills from './PMSkills';
import Contact from './Contact';
import ParticleBackground from './ParticleBackground';
import AIChatbot from './AIChatbot';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any; className?: string }> = ({ icon: Icon, className }) => {
  return <Icon className={className} />;
};

interface PMPortfolioProps {
  onBackToProfiles: () => void;
}

const PMPortfolio: React.FC<PMPortfolioProps> = ({ onBackToProfiles }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
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
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaCode },
    { id: 'skills', label: 'Skills', icon: FaCogs },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <div className="pm-portfolio">
      <ParticleBackground />
      
      {/* PM Header */}
      <motion.header
        className="pm-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="pm-header-container">
          <motion.button
            className="back-button"
            onClick={onBackToProfiles}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconWrapper icon={FaArrowLeft} className="back-icon" />
            <span>Back to Profiles</span>
          </motion.button>

          <motion.div
            className="pm-logo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="pm-logo-container">
              <div className="pm-logo-circle">
                <span className="pm-logo-v">V</span>
                <span className="pm-logo-k">K</span>
              </div>
              <div className="pm-logo-glow"></div>
            </div>
            <span className="pm-title">Project Manager Portfolio</span>
          </motion.div>

          <nav className="pm-nav">
            <ul className="pm-nav-list">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.li
                    key={item.id}
                    className="pm-nav-item"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      className={`pm-nav-link ${activeSection === item.id ? 'active' : ''}`}
                      onClick={() => {
                        handleSectionChange(item.id);
                        const element = document.getElementById(item.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <IconWrapper icon={IconComponent} className="pm-nav-icon" />
                      <span className="pm-nav-label">{item.label}</span>
                      {activeSection === item.id && (
                        <motion.div
                          className="pm-active-indicator"
                          layoutId="pmActiveIndicator"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </nav>
        </div>
      </motion.header>
      
      <main className="pm-main-content">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <PMAbout />
        </section>
        
        <section id="experience">
          <PMExperience />
        </section>
        
        <section id="projects">
          <PMProjects />
        </section>
        
                        <section id="skills">
                  <PMSkills />
                </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <AIChatbot />
    </div>
  );
};

export default PMPortfolio;
