import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return <Icon />;
};

const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const roles = [
    "Software Developer",
    "ML Engineer", 
    "AI Enthusiast",
    "Technical Project Manager"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="hero">
      <div className="hero-container">


        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="greeting"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.div
              className="name-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="name-title">
                <span className="name-first">VARUNTEJ</span>
                <span className="name-last">KODANDAPURAM</span>
              </div>

            </motion.div>

            <motion.div
              className="role-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="role-prefix">I'm a </span>
              <motion.span
                key={currentTextIndex}
                className="role-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentTextIndex]}
              </motion.span>
            </motion.div>

            <motion.p
              className="description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              a passionate technologist with a strong foundation in software development, machine learning, and AI-driven solutions. My work blends full-stack engineering, data analysis, and NLP to solve real-world problems at scale. Beyond coding, I’m deeply interested in project management and cross-functional collaboration, having led several initiatives that balance technical innovation with strategic execution.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconWrapper icon={FaEnvelope} />
                Get In Touch
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <IconWrapper icon={FaDownload} />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="profile-card">
              <div className="profile-image">
                <img 
                  src="https://kodanda1.github.io/Portfolio/profile_pic.HEIC" 
                  alt="Varuntej Kodandapuram" 
                  className="profile-picture"
                  onError={(e) => {
                    console.error('Failed to load profile image:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={() => console.log('Profile image loaded successfully')}
                />
                <div className="profile-glow"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.a
            href="https://github.com/kodanda1"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconWrapper icon={FaGithub} />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/varuntejk/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconWrapper icon={FaLinkedin} />
          </motion.a>
          
          <motion.a
            href="mailto:kodandapuramvaruntej@gmail.com"
            className="social-link"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconWrapper icon={FaEnvelope} />
          </motion.a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 