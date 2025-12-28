import React from 'react';
import { motion } from 'framer-motion';
import './MainLanding.css';

interface MainLandingProps {
  onContinue: () => void;
}

const MainLanding: React.FC<MainLandingProps> = ({ onContinue }) => {

  return (
    <section className="main-landing" onClick={onContinue}>
      <div className="landing-container">
        <motion.div
          className="name-display"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            delay: 0.5
          }}
        >
          <motion.h1
            className="main-name"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 1,
              ease: "easeOut"
            }}
          >
            VARUNTEJ KODANDAPURAM
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

export default MainLanding;
