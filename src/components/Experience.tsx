import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendar, 
  FaMapMarkerAlt,
  FaPython,
  FaAws,
  FaReact,
  FaGithub,
  FaDocker,
  FaDatabase,
  FaServer,
  FaCloud,
  FaCode,
  FaBrain,
  FaChartLine,
  FaRobot,
  FaNetworkWired,
  FaShieldAlt,
  FaCogs,
  FaLaptopCode,
  FaMobile,
  FaGlobe,
  FaLock,
  FaBolt,
  FaRocket
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiNodedotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis, 
  SiKubernetes, 
  SiJenkins, 
  SiGitlab, 
  SiJira, 
  SiConfluence,
  SiSlack,
  SiZoom,
  SiTableau,
  SiJupyter,
  SiAnaconda,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiSpacy,
  SiHuggingface,
  SiStreamlit,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiGraphql,
  SiApollographql,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiPrettier,
  SiJest,
  SiCypress,
  SiSelenium,
  SiPostman,
  SiInsomnia,
  SiIntellijidea,
  SiPycharm,
  SiSublimetext,
  SiVim,
  SiUbuntu,
  SiCentos,
  SiRedhat,
  SiAmazon,
  SiGooglecloud,
  SiDigitalocean,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiSupabase,
  SiStripe,
  SiPaypal,
  SiTwilio,
  SiSendgrid,
  SiMailchimp,
  SiHubspot,
  SiSalesforce,
  SiZendesk,
  SiIntercom,
  SiMixpanel,
  SiSnowflake,
  SiDatabricks,
  SiApachekafka,
  SiApachespark,
  SiElasticsearch,
  SiKibana,
  SiLogstash,
  SiBeats,
  SiGrafana,
  SiPrometheus,
  SiInfluxdb,
  SiJaeger,
  SiIstio,
  SiLinkerd,
  SiConsul,
  SiVault,
  SiTerraform,
  SiAnsible,
  SiChef,
  SiPuppet,
  SiVagrant,
  SiVirtualbox,
  SiVmware
} from 'react-icons/si';
import './Experience.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return <Icon />;
};

// Tech stack mapping with icons
const techStackIcons: { [key: string]: any } = {
  // Programming Languages
  "Python": FaPython,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "C++": FaCode,
  "C": FaCode,
  "Java": FaCode,
  "Go": FaCode,
  "Rust": FaCode,
  "Swift": FaCode,
  "Kotlin": FaCode,
  "Scala": FaCode,
  "PHP": FaCode,
  "Ruby": FaCode,
  "C#": FaCode,
  "VB.net": FaCode,
  
  // Web Technologies
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "React": FaReact,
  "Node.js": SiNodedotjs,
  "Angular": FaCode,
  "Vue.js": FaCode,
  "Svelte": FaCode,
  "Next.js": FaCode,
  "Nuxt.js": FaCode,
  "Gatsby": FaCode,
  
  // AI/ML
  "TensorFlow": SiTensorflow,
  "PyTorch": SiPytorch,
  "NLP": FaBrain,
  "Machine Learning": FaBrain,
  "Deep Learning": FaBrain,
  "Computer Vision": FaBrain,
  "Data Science": FaChartLine,
  "Statistical Modeling": FaChartLine,
  "Data Analysis": FaChartLine,
  "LLMs": FaRobot,
  "RAG": FaBrain,
  
  // Cloud & DevOps
  "AWS": SiAmazon,
  "GCP": SiGooglecloud,
  "Azure": FaCloud,
  "Docker": FaDocker,
  "Kubernetes": SiKubernetes,
  "Jenkins": SiJenkins,
  "GitLab": SiGitlab,
  "GitHub": FaGithub,
  
  // Databases
  "SQL": FaDatabase,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Redis": SiRedis,
  "MySQL": FaDatabase,
  "SQLite": FaDatabase,
  
  // Tools & Platforms
  "Power BI": FaChartLine,
  "Tableau": SiTableau,
  "Jupyter": SiJupyter,
  "Anaconda": SiAnaconda,
  "Pandas": SiPandas,
  "NumPy": SiNumpy,
  "Scikit-learn": FaBrain,
  "OpenCV": SiOpencv,
  "NLTK": FaBrain,
  "spaCy": SiSpacy,
  "Hugging Face": SiHuggingface,
  "Streamlit": SiStreamlit,
  "Flask": SiFlask,
  "Django": SiDjango,
  "FastAPI": SiFastapi,
  
  // Other Technologies
  "Web Scraping": FaNetworkWired,
  "Linux": SiUbuntu,
  "ARM": FaCogs,
  "Discrete Mathematics": FaChartLine,
  "UIPath": FaRobot,
  "GraphQL": SiGraphql,
  "REST API": FaServer,
  "Microservices": FaServer,
  "Serverless": FaCloud,
  "CI/CD": FaRocket,
  "Agile": FaCogs,
  "Scrum": FaCogs,
  "Kanban": FaCogs,
  "JIRA": SiJira,
  "Confluence": SiConfluence,
  "Slack": SiSlack,
  "Zoom": SiZoom,
  "Microsoft Office": FaCode,
  
  // Security & Performance
  "Security": FaShieldAlt,
  "Performance": FaBolt,
  "Scalability": FaRocket,
  "Monitoring": FaChartLine,
  "Logging": FaChartLine,
  "Testing": FaCode,
  "Unit Testing": FaCode,
  "Integration Testing": FaCode,
  "E2E Testing": FaCode,
  
  // Default icon for unmatched technologies
  "default": FaCode
};

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Developer | Technical Project Manager",
      company: "PackSense",
      location: "East Lansing, MI",
      period: "Mar 2025 - Present",
      technologies: ["Python", "TensorFlow", "PyTorch", "NLP", "Web Scraping", "AWS"],
      achievements: [
        "Engineered a full-stack AI platform using Python and Flask to auto-scrape 10K+ reviews/month, cutting manual effort by 60%.",
        "Implemented JS-based filtering, improving processing speed by 30% and accuracy for large text data.",
        "Enhanced keyword extraction accuracy by 25% using TF-IDF and FP-Growth, reducing manual review by 40%.",
        "Collaborated with 3+ teams to extract insights from e-commerce data and improve packaging sustainability."
      ]
    },
    {
      title: "ML Engineer",
      company: "Michigan State University",
      location: "East Lansing, MI",
      period: "Feb 2025 - May 2025",
      technologies: ["Python", "TensorFlow", "PyTorch", "Statistical Modeling", "Data Analysis", "AWS"],
      achievements: [
        "Built and deployed Random Forest and transformer-based few-shot models on large-scale Google Trends + clinical datasets to detect anomalous COVID-19 incidence patterns, improving early warning accuracy by 20%.",
        "Built Spark-Python pipelines to balance skewed data using oversampling and custom loss, improving model robustness by 10%.",
        "Tuned TensorFlow and PyTorch models with cross-validation, raising prediction accuracy by 10%."
      ]
    },
    {
      title: "Graduate Teaching Assistant",
      company: "Michigan State University",
      location: "East Lansing, MI",
      period: "Aug 2023 - Dec 2024",
      technologies: ["C++", "Linux", "C", "ARM", "LLMs", "Discrete Mathematics"],
      achievements: [
        "Directed interactive C++ & Python programming labs for 100+ undergraduates and collaborated with faculty to design curriculum materials, boosting assignment completion rates by 30% and exam scores by 10%.",
        "Facilitated weekly code review sessions, sharpening debugging skills and increasing code quality among students."
      ]
    },
    {
      title: "Software Developer | Technical Project Manager",
      company: "United Airlines",
      location: "East Lansing, MI",
      period: "Sep 2022 - Dec 2022",
      technologies: ["Python", "Power BI", "AWS", "NLP"],
      achievements: [
        "Led ML engineering team at United Airlines to build algorithms assessing course and instructor effectiveness for technician training.",
        "Leveraged data visualization tools to enable quick identification of performance trends, thus reducing data analysis time by 40%.",
        "Created a user-friendly User Interface for United Airlines LMS, enhancing accessibility and increasing user engagement by 35%.",
        "Streamlined data processing scripts, cutting report generation time by 50% for the client."
      ]
    },
    {
      title: "Software Developer | Product Manager",
      company: "Delta Dental of Michigan",
      location: "Okemos, MI",
      period: "Nov 2021 - Aug 2022",
      technologies: ["UIPath", "VB.net", "C++", "SQL"],
      achievements: [
        "Built & deployed virtual bots using C++, UiPath to automate certain ongoing business tasks in the company.",
        "Automated the alignment of Delta Dental's agent lists with government records, achieving a 95% accuracy improvement.",
        "Led RPA project initiatives and coordinated with cross-functional teams, improving project delivery speed by 20%."
      ]
    }
  ];

  return (
    <section className="experience section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <motion.div
                  className="timeline-header"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="timeline-icon">
                    <IconWrapper icon={FaBriefcase} />
                  </div>
                  <div className="timeline-info">
                    <h3>{exp.title}</h3>
                    <div className="company-info">
                      <span className="company">{exp.company}</span>
                      <div className="meta">
                        <span className="period">
                          <IconWrapper icon={FaCalendar} />
                          {exp.period}
                        </span>
                        <span className="location">
                          <IconWrapper icon={FaMapMarkerAlt} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => {
                    const TechIcon = techStackIcons[tech] || techStackIcons["default"];
                    return (
                      <motion.div
                        key={techIndex}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <IconWrapper icon={TechIcon} />
                        <span>{tech}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + achievementIndex * 0.1 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  className="timeline-connector"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="summary-card">
            <h3>Career Highlights</h3>
            <div className="summary-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Major Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">60%</span>
                <span className="stat-label">Efficiency Gains</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 