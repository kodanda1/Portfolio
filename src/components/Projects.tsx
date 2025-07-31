import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain } from 'react-icons/fa';
import './Projects.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return <Icon />;
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "LLM-Based Student Q&A Assistant with RAG",
      description: "Built a React front end and integrated Vertex AI Search for RAG-based Q&A on course materials. Coordinated with MSU IT for deployment, user access, and cost-efficient hosting within university systems.",
      technologies: ["React", "Python", "GCP Vertex AI", "RAG", "NLP"],
      period: "Jun 2025 - Present",
      github: "https://github.com/kodanda1/Projects",
      live: "https://student-qa-assistant.vercel.app",
      image: "https://kodanda1.github.io/Portfolio/LLM-Based%20Student%20Q%26A%20Assistant%20with%20RAG.png",
      category: "AI/ML",
      icon: FaBrain
    },
    {
      title: "AI-Powered Review Analysis Platform",
      description: "Full-stack AI platform for analyzing customer reviews with sentiment analysis, keyword extraction, and trend identification. Processes 10K+ reviews monthly with 60% efficiency improvement.",
      technologies: ["Python", "Flask", "TensorFlow", "NLP", "AWS", "JavaScript"],
      period: "Mar 2025 - Present",
      github: "https://github.com/kodanda1/Projects",
      live: "https://review-analysis.vercel.app",
      image: "https://kodanda1.github.io/Portfolio/AI-Powered%20Review%20Analysis%20Platform.png",
      category: "Full-Stack",
      icon: FaCode
    },
    {
      title: "COVID-19 Anomaly Detection System",
      description: "Built and deployed Random Forest and transformer-based few-shot models on large-scale Google Trends + clinical datasets to detect anomalous COVID-19 incidence patterns.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Spark", "Statistical Modeling"],
      period: "Feb 2025 - May 2025",
      github: "https://github.com/kodanda1/Projects",
      live: null,
      image: "https://kodanda1.github.io/Portfolio/COVID-19%20Anomaly%20Detection%20System.png",
      category: "AI/ML",
      icon: FaBrain
    },
    {
      title: "Credit Card Approval Model Prediction",
      description: "Designed and benchmarked ML models (Logistic Regression, Decision Trees, SVM, Perceptron), achieving 84.71% accuracy with SVM for credit card approval prediction using UCI dataset.",
      technologies: ["Python", "MATLAB", "Machine Learning", "GenAI", "SVM", "Decision Trees"],
      period: "Aug 2023 - May 2024",
      github: "https://github.com/kodanda1/Projects",
      live: null,
      image: "https://kodanda1.github.io/Portfolio/Credit%20Card%20Approval%20Model%20Prediction.png",
      category: "Machine Learning",
      icon: FaBrain
    }
  ];

  // const categories = ["All", "AI/ML", "Full-Stack", "Machine Learning", "Enterprise", "Automation"];

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
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      console.error('Failed to load project image:', project.title, e);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => console.log('Project image loaded:', project.title)}
                  />
                  <div className="project-overlay">
                    <div className="project-category">
                      <IconWrapper icon={Icon} />
                      <span>{project.category}</span>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-period">{project.period}</p>
                  <p className="project-description">
                    {selectedProject === index 
                      ? project.description 
                      : `${project.description.substring(0, 120)}...`
                    }
                  </p>

                  <div className="project-technologies">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag more">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>



                  {selectedProject === index && (
                    <motion.div
                      className="project-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4>Technologies Used:</h4>
                      <div className="full-technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="projects-summary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="summary-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Features/Sprint</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Cross-Functional Teams</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 