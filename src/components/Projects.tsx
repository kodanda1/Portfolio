import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain } from 'react-icons/fa';
import './Projects.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return <Icon />;
};

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "LLM-Based Student Q&A Assistant with RAG",
      overview: "CAD GPT is a domain-specific AI-powered assistant designed to support students in the School of Packaging at Michigan State University. The goal is to reduce repetitive Q&A workload for instructors by enabling students to ask natural language questions related to packaging course materials (slides, PDFs, assignments).",
      fullDescription: "Overview: CAD GPT is a domain-specific AI-powered assistant designed to support students in the School of Packaging at Michigan State University. The goal is to reduce repetitive Q&A workload for instructors by enabling students to ask natural language questions related to packaging course materials (slides, PDFs, assignments).\n\nKey Contributions:\n<ul><li>Built an interactive React-based frontend tailored to educational use cases.</li><li>Integrated Google's Vertex AI Search to enable RAG-based document retrieval, allowing the assistant to provide precise, contextual answers grounded in course content.</li><li>Coordinated with university IT to deploy the system securely on MSU infrastructure using cost-optimized configurations.</li><li>Designed the system to be scalable to other departments and potentially support dynamic training in the future.</li></ul>\n\nImpact: Reduced student confusion during self-study, enhanced accessibility to learning materials, and demonstrated the feasibility of department-level deployments in higher education.",
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
      overview: "PackSense is a full-stack AI platform that automatically scrapes and analyzes Amazon product reviews to identify packaging-related issues (e.g., damaged, leaking, poorly sealed products).",
      fullDescription: "Overview: PackSense is a full-stack AI platform that automatically scrapes and analyzes Amazon product reviews to identify packaging-related issues (e.g., damaged, leaking, poorly sealed products). The system uses natural language processing and visualization tools to extract actionable insights for brands and packaging researchers.\n\nKey Contributions:\n<ul><li>Developed a Flask-based backend to automate scraping of over 10,000 reviews per month using Selenium.</li><li>Enhanced keyword extraction using TF-IDF and frequent pattern mining (FP-Growth), boosting accuracy by 25% over basic keyword matching.</li><li>Built a dynamic UI to visualize issue frequency, sentiment trends, and image-based defect markers using PIL and CSS/JS.</li><li>Implemented pagination, keyword filtering, and a \"Product Overview\" page for user-friendly navigation.</li></ul>\n\nImpact: Cut manual review time by 60%, provided a research-grade dashboard for packaging analysis, and laid the groundwork for academic publications on e-commerce packaging defects.",
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
      overview: "Built and deployed Random Forest and transformer-based few-shot models on large-scale Google Trends + clinical datasets to detect anomalous COVID-19 incidence patterns.",
      fullDescription: "Overview: Built and deployed Random Forest and transformer-based few-shot models on large-scale Google Trends + clinical datasets to detect anomalous COVID-19 incidence patterns.\n\nKey Contributions:\n<ul><li>Developed Random Forest models for anomaly detection in COVID-19 data patterns.</li><li>Implemented transformer-based few-shot learning models for improved detection accuracy.</li><li>Processed large-scale Google Trends and clinical datasets for comprehensive analysis.</li><li>Deployed models in production environment for real-time anomaly detection.</li></ul>\n\nImpact: Enhanced early detection capabilities for COVID-19 outbreaks, improved public health monitoring, and demonstrated the effectiveness of ML models in epidemiological research.",
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
      overview: "Designed and benchmarked ML models (Logistic Regression, Decision Trees, SVM, Perceptron), achieving 84.71% accuracy with SVM for credit card approval prediction using UCI dataset.",
      fullDescription: "Overview: Designed and benchmarked ML models (Logistic Regression, Decision Trees, SVM, Perceptron), achieving 84.71% accuracy with SVM for credit card approval prediction using UCI dataset.\n\nKey Contributions:\n<ul><li>Implemented multiple ML algorithms including Logistic Regression, Decision Trees, SVM, and Perceptron.</li><li>Achieved 84.71% accuracy using SVM model for credit card approval prediction.</li><li>Utilized UCI dataset for comprehensive model training and validation.</li><li>Conducted thorough benchmarking and comparison of different ML approaches.</li></ul>\n\nImpact: Demonstrated the effectiveness of machine learning in financial decision-making, improved credit card approval prediction accuracy, and provided insights into model selection for financial applications.",
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
                onClick={() => {
                  setExpandedProject(expandedProject === index ? null : index);
                }}
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
                  <div 
                    className="project-description"
                    dangerouslySetInnerHTML={{ 
                      __html: expandedProject === index ? project.fullDescription : project.overview 
                    }}
                  />

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>


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