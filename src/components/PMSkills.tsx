import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaUsers, FaShieldAlt, FaChartLine, FaRocket, FaHandshake } from 'react-icons/fa';
import './PMSkills.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return <Icon />;
};

const PMSkills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('project-management');

  const skillCategories = [
    {
      id: 'project-management',
      name: 'Project Management',
      icon: FaProjectDiagram,
      skills: [
        { name: 'SAFe Agile', level: 90, color: '#64ffda' },
        { name: 'Scrum', level: 90, color: '#00d4ff' },
        { name: 'Portfolio Management', level: 85, color: '#64ffda' },
        { name: 'Risk Management', level: 85, color: '#00d4ff' },
        { name: 'Budget Planning', level: 80, color: '#64ffda' },
        { name: 'Stakeholder Management', level: 90, color: '#00d4ff' }
      ]
    },
    {
      id: 'leadership',
      name: 'Leadership & Strategy',
      icon: FaUsers,
      skills: [
        { name: 'Cross-functional Leadership', level: 90, color: '#64ffda' },
        { name: 'Team Leadership', level: 85, color: '#00d4ff' },
        { name: 'Strategic Planning', level: 85, color: '#64ffda' },
        { name: 'Change Management', level: 80, color: '#00d4ff' },
        { name: 'Conflict Resolution', level: 85, color: '#64ffda' },
        { name: 'Mentoring', level: 80, color: '#00d4ff' }
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics & Metrics',
      icon: FaChartLine,
      skills: [
        { name: 'Data Analytics', level: 85, color: '#64ffda' },
        { name: 'Performance Metrics', level: 85, color: '#00d4ff' },
        { name: 'KPI Tracking', level: 90, color: '#64ffda' },
        { name: 'A/B Testing', level: 80, color: '#00d4ff' },
        { name: 'Business Intelligence', level: 80, color: '#64ffda' },
        { name: 'ROI Analysis', level: 85, color: '#00d4ff' }
      ]
    },
    {
      id: 'technical',
      name: 'Technical Skills',
      icon: FaRocket,
      skills: [
        { name: 'Python', level: 85, color: '#64ffda' },
        { name: 'SQL', level: 80, color: '#00d4ff' },
        { name: 'Power BI', level: 85, color: '#64ffda' },
        { name: 'Jira', level: 90, color: '#00d4ff' },
        { name: 'Confluence', level: 85, color: '#64ffda' },
        { name: 'UIPath RPA', level: 80, color: '#00d4ff' }
      ]
    },
    {
      id: 'communication',
      name: 'Communication & Collaboration',
      icon: FaHandshake,
      skills: [
        { name: 'Stakeholder Communication', level: 90, color: '#64ffda' },
        { name: 'Presentation Skills', level: 85, color: '#00d4ff' },
        { name: 'Documentation', level: 85, color: '#64ffda' },
        { name: 'Negotiation', level: 80, color: '#00d4ff' },
        { name: 'Cross-team Coordination', level: 90, color: '#64ffda' },
        { name: 'Vendor Management', level: 80, color: '#00d4ff' }
      ]
    }
  ];

  const currentCategory = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="skills section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Project Management Skills
        </motion.h2>

        <motion.div
          className="skills-categories"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                className={`skill-category ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="category-icon">
                  <IconWrapper icon={Icon} />
                </div>
                <span className="category-name">{category.name}</span>
                {activeCategory === category.id && (
                  <motion.div
                    className="active-indicator"
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          className="skills-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {currentCategory && (
            <div className="skills-grid">
              {currentCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PMSkills;
