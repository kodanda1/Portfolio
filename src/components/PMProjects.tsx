import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain } from 'react-icons/fa';
import './PMProjects.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return <Icon />;
};

const PMProjects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "United Airlines Digital Transformation",
      overview: "Led enterprise-wide digital transformation initiative managing $5M+ portfolio across 350+ airports globally, improving operational efficiency and customer experience.",
      fullDescription: "<h4>Overview</h4>As Technical Project Manager at United Airlines, I orchestrated a comprehensive digital transformation program that modernized core systems and processes across the entire organization. This initiative involved managing a $5M+ portfolio of concurrent projects, coordinating with 25+ cross-functional teams across 4 time zones, and implementing SAFe Agile framework.\n\n<h4>Key Project Management Contributions</h4><ul><li>Managed $5M+ portfolio of digital transformation projects across 350+ airports globally</li><li>Led 25-person cross-functional team across 4 time zones, improving delivery efficiency by 45%</li><li>Implemented SAFe Agile framework resulting in 35% faster time-to-market</li><li>Reduced system downtime by 70% and improved customer satisfaction scores by 30%</li><li>Established PMO best practices and standardized project management processes</li><li>Coordinated stakeholder communication and risk management across multiple departments</li></ul>\n\n<h4>Impact</h4>Successfully transformed United Airlines' digital infrastructure, resulting in significant operational improvements, enhanced customer experience, and established scalable project management frameworks for future initiatives.",
      technologies: ["SAFe Agile", "Portfolio Management", "Stakeholder Management", "Risk Management", "Budget Planning"],
      period: "Sep 2022 - Dec 2022",
      github: "https://github.com/kodanda1/Projects",
      live: "#",
      image: null, // No image for United Airlines
      category: "Digital Transformation",
      icon: FaCode
    },
    {
      title: "Packsense IoT Platform",
      overview: "Led product development for enterprise IoT supply chain optimization platform serving 1000+ enterprise clients across 15 countries.",
      fullDescription: "<h4>Overview</h4>As Technical Project Manager at Packsense, I drove the strategy and execution of an innovative IoT platform that revolutionized supply chain management. I led a cross-functional team of 18 engineers, designers, and data scientists to develop five core modules that served 1000+ enterprise clients across 15 countries.\n\n<h4>Key Project Management Contributions</h4><ul><li>Increased user engagement by 60% and reduced customer churn by 40% through data-driven product decisions</li><li>Managed product roadmap for 5 core modules serving 1000+ enterprise clients across 15 countries</li><li>Led cross-functional team of 18 engineers, designers, and data scientists</li><li>Achieved 150% of quarterly revenue targets and secured $2M in additional funding</li><li>Launched 3 major product features that generated $500K in additional ARR</li><li>Coordinated go-to-market strategies and customer success initiatives</li></ul>\n\n<h4>Impact</h4>Successfully optimized supply chains for major retailers, reducing costs by an average of 35% and establishing Packsense as a leader in IoT supply chain solutions.",
      technologies: ["Product Strategy", "User Research", "Data Analytics", "Go-to-Market", "Customer Success", "IoT"],
      period: "Mar 2025 - Present",
      github: "https://github.com/kodanda1/Projects",
      live: "#",
      image: "https://kodanda1.github.io/Portfolio/AI-Powered%20Review%20Analysis%20Platform.png",
      category: "Product Management",
      icon: FaBrain
    },
    {
      title: "LLM-Based Student Q&A Assistant with RAG",
      overview: "Led the development of an AI-powered Q&A assistant for university students using GCP Vertex AI + React, enhancing academic resource accessibility.",
      fullDescription: "<h4>Overview</h4>As Research Analyst (AI/ML) at Michigan State University, I led the development of an AI-powered Q&A assistant for university students using GCP Vertex AI + React, enhancing academic resource accessibility.\n\n<h4>Key Project Management Contributions</h4><ul><li>Designed retrieval-augmented generation workflows for accurate and contextual student responses</li><li>Optimized onboarding processes and improved discoverability of academic resources</li><li>Collaborated with IT and faculty teams to ensure seamless integration with existing systems</li><li>Implemented React-based frontend with intuitive user interface for student interactions</li><li>Integrated GCP Vertex AI for advanced natural language processing capabilities</li><li>Managed stakeholder relationships with academic departments and IT teams</li></ul>\n\n<h4>Impact</h4>Successfully enhanced academic resource accessibility for university students, providing instant access to course materials and improving the overall learning experience through AI-powered assistance.",
      technologies: ["React", "Python", "GCP Vertex AI", "RAG", "NLP"],
      period: "Aug 2023 - May 2024",
      github: "https://github.com/kodanda1/Projects",
      live: "https://student-qa-assistant.vercel.app",
      image: "https://kodanda1.github.io/Portfolio/LLM-Based%20Student%20Q%26A%20Assistant%20with%20RAG.png",
      category: "AI/ML",
      icon: FaBrain
    }
  ];

  return (
    <section className="projects section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Recent Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              >
                <div className="project-image">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/400x250/1a1a2e/64ffda?text=Project+Image';
                      }}
                    />
                  ) : (
                    <div className="project-placeholder">United Airlines</div>
                  )}
                  <div className="project-overlay">
                    <div className="project-icon">
                      <IconWrapper icon={Icon} />
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-category">{project.category}</div>
                  </div>

                  <p className="project-overview">{project.overview}</p>

                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag more">+{project.technologies.length - 3} more</span>
                    )}
                  </div>

                  <div className="project-meta">
                    <span className="project-period">{project.period}</span>
                    <div className="project-links">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <IconWrapper icon={FaCode} />
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <IconWrapper icon={FaBrain} />
                        </a>
                      )}
                    </div>
                  </div>

                  {expandedProject === index && (
                    <motion.div
                      className="project-expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        className="project-full-description"
                        dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                      />
                      <div className="project-all-technologies">
                        <h4>Technologies Used:</h4>
                        <div className="tech-tags">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PMProjects;
