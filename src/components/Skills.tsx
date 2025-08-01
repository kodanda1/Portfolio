import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaCloud, FaChartBar, FaTools } from 'react-icons/fa';
import './Skills.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return <Icon />;
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories = [
    {
      id: 'programming',
      name: 'Programming Languages',
      icon: FaCode,
      skills: [
        { name: 'Python', level: 90, color: '#3776AB' },
        { name: 'JavaScript', level: 90, color: '#F7DF1E' },
        { name: 'C++', level: 80, color: '#00599C' },
        { name: 'SQL', level: 80, color: '#336791' },
        { name: 'React', level: 90, color: '#61DAFB' },
        { name: 'Flask', level: 80, color: '#000000' }
      ]
    },
    {
      id: 'ml',
      name: 'Machine Learning',
      icon: FaBrain,
      skills: [
        { name: 'TensorFlow', level: 90, color: '#FF6F00' },
        { name: 'PyTorch', level: 80, color: '#EE4C2C' },
        { name: 'scikit-learn', level: 90, color: '#F7931E' },
        { name: 'pandas', level: 90, color: '#130654' },
        { name: 'NumPy', level: 90, color: '#4DABCF' },
        { name: 'Keras', level: 80, color: '#D00000' }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: FaCloud,
      skills: [
        { name: 'AWS', level: 80, color: '#FF9900' },
        { name: 'Azure', level: 80, color: '#0078D4' },
        { name: 'Docker', level: 80, color: '#2496ED' },
        { name: 'Git', level: 90, color: '#F05032' },
        { name: 'Salesforce', level: 80, color: '#00A1E0' }
      ]
    },
    {
      id: 'data',
      name: 'Data Visualization',
      icon: FaChartBar,
      skills: [
        { name: 'Power BI', level: 80, color: '#F2C811' },
        { name: 'Matplotlib', level: 80, color: '#11557C' },
        { name: 'Seaborn', level: 80, color: '#7A5195' },
        { name: 'Plotly', level: 80, color: '#3F4F75' },
        { name: 'Excel', level: 90, color: '#217346' }
      ]
    },
    {
      id: 'tools',
      name: 'Development Tools',
      icon: FaTools,
      skills: [
        { name: 'UIPath', level: 80, color: '#FF6C37' },
        { name: 'Jira', level: 80, color: '#0052CC' },
        { name: 'VS Code', level: 90, color: '#007ACC' },
        { name: 'Postman', level: 80, color: '#FF6C37' },
        { name: 'Tableau', level: 80, color: '#E97627' }
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
          Technical Skills
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
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconWrapper icon={Icon} />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          className="skills-content"
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {currentCategory && (
            <>
              <div className="category-header">
                <h3>{currentCategory.name}</h3>
                <div className="category-icon">
                  <IconWrapper icon={currentCategory.icon} />
                </div>
              </div>

              <div className="skills-grid">
                {currentCategory.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="summary-grid">
            <div className="summary-card">
              <h4>Expert Level</h4>
              <p>Python, TensorFlow, React, AWS</p>
            </div>
            <div className="summary-card">
              <h4>Advanced Level</h4>
              <p>PyTorch, C++, SQL, Docker</p>
            </div>
            <div className="summary-card">
              <h4>Proficient Level</h4>
              <p>Azure, Power BI, UIPath, Jira</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="certifications"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3>Certifications & Achievements</h3>
          <div className="certifications-grid">
            <div className="certification-item">
              <h4>AWS Certified Solutions Architect</h4>
              <p>Amazon Web Services</p>
              <span className="certification-date">2024</span>
            </div>
            <div className="certification-item">
              <h4>Microsoft Azure Fundamentals</h4>
              <p>Microsoft</p>
              <span className="certification-date">2024</span>
            </div>
            <div className="certification-item">
              <h4>Google Cloud Professional Data Engineer</h4>
              <p>Google Cloud</p>
              <span className="certification-date">2023</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 