import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaEye, FaUsers } from 'react-icons/fa';
import './ProfileSelector.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any; className?: string }> = ({ icon: Icon, className }) => {
  return <Icon className={className} />;
};

interface Profile {
  id: string;
  name: string;
  icon: any;
  color: string;
  description: string;
}

interface ProfileSelectorProps {
  onProfileSelect: (profileId: string) => void;
}

const ProfileSelector: React.FC<ProfileSelectorProps> = ({ onProfileSelect }) => {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Netflix tudum sound effect
  useEffect(() => {
    const playTudum = () => {
      // Create audio context for the tudum sound
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Generate tudum sound using Web Audio API
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Set up the tudum sound characteristics
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.3);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    };

    // Play the sound after a short delay
    const timer = setTimeout(playTudum, 500);
    return () => clearTimeout(timer);
  }, []);

  const profiles: Profile[] = [
    {
      id: 'sde-recruiter',
      name: 'SDE Recruiter',
      icon: FaCode,
      color: '#00bcd4',
      description: 'Hiring for software engineering roles'
    },
    {
      id: 'pm-recruiter',
      name: 'PM Recruiter',
      icon: FaUsers,
      color: '#4caf50',
      description: 'Hiring for project management roles'
    },
    {
      id: 'stalker',
      name: 'Stalker',
      icon: FaEye,
      color: '#f44336',
      description: 'Just curious about the work'
    }
  ];

  const handleProfileSelect = (profileId: string) => {
    setSelectedProfile(profileId);
    setIsTransitioning(true);
    
    // Simulate transition to different content based on profile
    setTimeout(() => {
      // Call the parent function to handle navigation
      onProfileSelect(profileId);
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <section className="profile-selector">
      <div className="selector-container">
        <motion.h1
          className="selector-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Who's Watching?
        </motion.h1>

        <motion.div
          className="profiles-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.id}
                className={`profile-card ${selectedProfile === profile.id ? 'selected' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3)`
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleProfileSelect(profile.id)}
              >
                <motion.div
                  className="profile-icon"
                  style={{ backgroundColor: profile.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconWrapper icon={Icon} className="profile-icon-svg" />
                </motion.div>
                <h3 className="profile-name">{profile.name}</h3>
                <p className="profile-description">{profile.description}</p>
                
                {selectedProfile === profile.id && (
                  <motion.div
                    className="selection-indicator"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {selectedProfile && (
          <motion.div
            className="selection-feedback"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>Welcome, {profiles.find(p => p.id === selectedProfile)?.name}!</p>
            <p>Customizing your experience...</p>
          </motion.div>
        )}

        {isTransitioning && (
          <motion.div
            className="transition-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loading-spinner"></div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProfileSelector;
