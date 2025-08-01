import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return <Icon />;
};

// AI Typing Animation Component
const AITypingAnimation: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const aiTexts = [
      "AI/ML Engineering",
      "Software Development", 
      "Project/Program Management",
      "Data Analyst",
      "Product Management"
    ];

    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 30;
    const pauseTime = 2000;

    const typeText = () => {
      const currentFullText = aiTexts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % aiTexts.length);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <div className="ai-typing-container">
      <span className="ai-typing-text">
        {currentText}
        <span className="ai-cursor">|</span>
      </span>
      <div className="ai-neural-dots">
        <span className="neural-dot"></span>
        <span className="neural-dot"></span>
        <span className="neural-dot"></span>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {

  const roles = [
    "AI/ML Engineering",
    "Software Development", 
    "Project/Program Management",
    "Data Analyst",
    "Product Management"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
  
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
              <AITypingAnimation />
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
                href="https://kodanda1.github.io/Portfolio/resume.pdf"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
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
                  src="https://kodanda1.github.io/Portfolio/profile_pic.png" 
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