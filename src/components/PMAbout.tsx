import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaProjectDiagram, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';
import './PMAbout.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return <Icon />;
};

const PMAbout: React.FC = () => {
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
      icon: FaProjectDiagram,
      title: "Technical Project Management",
      description: "Expert in managing complex technical projects with cross-functional teams and multi-million dollar budgets"
    },
    {
      icon: FaUsers,
      title: "Agile Leadership",
      description: "Certified Scrum Master with proven track record of implementing Agile methodologies and improving team velocity"
    },
    {
      icon: FaChartLine,
      title: "Product Strategy",
      description: "Strategic product management experience with focus on user research, market analysis, and go-to-market execution"
    },
    {
      icon: FaHandshake,
      title: "Stakeholder Management",
      description: "Strong experience managing relationships with C-level executives, clients, vendors, and cross-functional teams"
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
            <h3>Professional Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4>Data-Driven Decision Making</h4>
                <p>Leverage analytics and metrics to drive strategic decisions and measure project success</p>
              </div>
              <div className="value-item">
                <h4>Agile Transformation</h4>
                <p>Lead organizational change through Agile adoption and continuous process improvement</p>
              </div>
              <div className="value-item">
                <h4>Risk Management</h4>
                <p>Proactive identification and mitigation of project risks to ensure successful delivery</p>
              </div>
              <div className="value-item">
                <h4>Technical Acumen</h4>
                <p>Strong technical background enabling effective communication with engineering teams</p>
              </div>
            </div>
          </motion.div>

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
                    <div className="education-icon">
                      <IconWrapper icon={Icon} />
                    </div>
                    <div className="education-content">
                      <h4>{edu.degree}</h4>
                      <p className="institution">{edu.institution}</p>
                      <p className="location">{edu.location}</p>
                      <p className="period">{edu.period}</p>
                      <p className="gpa">GPA: {edu.gpa}</p>
                      {edu.minor && <p className="minor">{edu.minor}</p>}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PMAbout;
