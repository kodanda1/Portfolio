import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaCode, FaCogs, FaEnvelope } from 'react-icons/fa';
import './Header.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any; className?: string }> = ({ icon: Icon, className }) => {
  return <Icon className={className} />;
};

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange, isMobileMenuOpen, toggleMobileMenu }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaCode },
    { id: 'skills', label: 'Skills', icon: FaCogs },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="logo-container">
            <div className="logo-circle">
              <span className="logo-v">V</span>
              <span className="logo-k">K</span>
            </div>
            <div className="logo-glow"></div>
          </div>
        </motion.div>

        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.li
                  key={item.id}
                  className="nav-item"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => {
                      onSectionChange(item.id);
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <IconWrapper icon={IconComponent} className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        className="active-indicator"
                        layoutId="activeIndicator"
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

        <motion.div
          className="mobile-menu-toggle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMobileMenu}
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div>

        {/* Mobile Menu Backdrop */}
        <motion.div
          className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Mobile Navigation Sidebar */}
        <motion.div
          className={`mobile-nav-sidebar ${isMobileMenuOpen ? 'open' : ''}`}
          initial={{ x: '100%' }}
          animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="mobile-nav-header">
            <div className="mobile-logo">
              <div className="logo-circle">
                <span className="logo-v">V</span>
                <span className="logo-k">K</span>
              </div>
            </div>
            <button className="mobile-close-btn" onClick={toggleMobileMenu}>
              <span>×</span>
            </button>
          </div>
          
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.li
                    key={item.id}
                    className="mobile-nav-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                      onClick={() => {
                        onSectionChange(item.id);
                        toggleMobileMenu();
                        const element = document.getElementById(item.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <IconWrapper icon={IconComponent} className="mobile-nav-icon" />
                      <span className="mobile-nav-label">{item.label}</span>
                      {activeSection === item.id && (
                        <motion.div
                          className="mobile-active-indicator"
                          layoutId="mobileActiveIndicator"
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
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 