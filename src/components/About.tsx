import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaGraduationCap, FaUniversity, FaCode, FaBrain, FaRocket, FaProjectDiagram } from 'react-icons/fa';
import './About.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return <Icon />;
};

const About: React.FC = () => {
  const education = [
    {
      degree: "Master of Science, Computer Science",
      institution: "Michigan State University",
      location: "East Lansing, MI",
      period: "Aug 2023 - Dec 2024",
      gpa: "3.81",
      icon: FaGraduationCap
    },
    {
      degree: "Bachelor of Science, Computer Science (Honors)",
      institution: "Michigan State University",
      location: "East Lansing, MI",
      period: "Aug 2019 - May 2023",
      gpa: "3.82",
      minor: "Minor in Business",
      icon: FaUniversity
    }
  ];

  const highlights = [
    {
      icon: FaCode,
      title: "Full-Stack Development",
      description: "Expert in building scalable web applications with modern technologies"
    },
    {
      icon: FaBrain,
      title: "AI/ML Specialist",
      description: "Deep expertise in machine learning, NLP, and computer vision"
    },
    {
      icon: FaRocket,
      title: "Innovation Driver",
      description: "Passionate about creating cutting-edge solutions that make a difference"
    },
    {
      icon: FaProjectDiagram,
      title: "Project Leader",
      description: "Skilled in driving cross-functional teams, delivering complex projects on time, and aligning tech goals with business strategy"
    }
  ];

  return (
    <section className="about section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Key Highlights</h3>
            <div className="highlights-grid">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    className="highlight-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="highlight-icon">
                      <IconWrapper icon={Icon} />
                    </div>
                    <h4>{highlight.title}</h4>
                    <p>{highlight.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="values-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>My Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4>Innovation</h4>
                <p>Constantly exploring new technologies and approaches to solve problems creatively.</p>
              </div>
              <div className="value-item">
                <h4>Excellence</h4>
                <p>Committed to delivering high-quality solutions that exceed expectations.</p>
              </div>
              <div className="value-item">
                <h4>Collaboration</h4>
                <p>Believing in the power of teamwork and knowledge sharing to achieve great results.</p>
              </div>
              <div className="value-item">
                <h4>Growth</h4>
                <p>Always learning and adapting to stay current with evolving technologies.</p>
              </div>
              <div className="value-item">
                <h4>Integrity</h4>
                <p>Maintaining ethical standards and transparency in all professional endeavors.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Education</h3>
          <div className="education-grid">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  className="education-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="education-header">
                    <div className="education-icon">
                      <IconWrapper icon={Icon} />
                    </div>
                    <div className="education-info">
                      <h4>{edu.degree}</h4>
                      <p className="institution">{edu.institution}</p>
                      <p className="location">{edu.location}</p>
                      <p className="period">{edu.period}</p>
                    </div>
                  </div>
                  <div className="education-details">
                    <div className="gpa-badge">
                      <IconWrapper icon={FaAward} />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                    {edu.minor && (
                      <div className="minor-badge">
                        <span>{edu.minor}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 