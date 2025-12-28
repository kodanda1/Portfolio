import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendar, 
  FaMapMarkerAlt,
  FaPython,
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
  FaRocket,
  FaProjectDiagram,
  FaUsers,
  FaHandshake
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
import './PMExperience.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return <Icon />;
};

// Tech stack icons mapping
const techStackIcons: { [key: string]: any } = {
  "Python": FaPython,
  "TensorFlow": SiTensorflow,
  "PyTorch": SiPytorch,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "Node.js": SiNodedotjs,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Redis": SiRedis,
  "Kubernetes": SiKubernetes,
  "Jenkins": SiJenkins,
  "GitLab": SiGitlab,
  "Jira": SiJira,
  "Confluence": SiConfluence,
  "Slack": SiSlack,
  "Zoom": SiZoom,
  "Tableau": SiTableau,
  "Jupyter": SiJupyter,
  "Anaconda": SiAnaconda,
  "Pandas": SiPandas,
  "NumPy": SiNumpy,
  "OpenCV": SiOpencv,
  "spaCy": SiSpacy,
  "Hugging Face": SiHuggingface,
  "Streamlit": SiStreamlit,
  "Flask": SiFlask,
  "Django": SiDjango,
  "FastAPI": SiFastapi,
  "GraphQL": SiGraphql,
  "Apollo GraphQL": SiApollographql,
  "Webpack": SiWebpack,
  "Babel": SiBabel,
  "ESLint": SiEslint,
  "Prettier": SiPrettier,
  "Jest": SiJest,
  "Cypress": SiCypress,
  "Selenium": SiSelenium,
  "Postman": SiPostman,
  "Insomnia": SiInsomnia,
  "IntelliJ IDEA": SiIntellijidea,
  "PyCharm": SiPycharm,
  "Sublime Text": SiSublimetext,
  "Vim": SiVim,
  "Ubuntu": SiUbuntu,
  "CentOS": SiCentos,
  "Red Hat": SiRedhat,
  "AWS": SiAmazon,
  "Google Cloud": SiGooglecloud,
  "DigitalOcean": SiDigitalocean,
  "Heroku": SiHeroku,
  "Vercel": SiVercel,
  "Netlify": SiNetlify,
  "Firebase": SiFirebase,
  "Supabase": SiSupabase,
  "Stripe": SiStripe,
  "PayPal": SiPaypal,
  "Twilio": SiTwilio,
  "SendGrid": SiSendgrid,
  "Mailchimp": SiMailchimp,
  "HubSpot": SiHubspot,
  "Salesforce": SiSalesforce,
  "Zendesk": SiZendesk,
  "Intercom": SiIntercom,
  "Mixpanel": SiMixpanel,
  "Snowflake": SiSnowflake,
  "Databricks": SiDatabricks,
  "Apache Kafka": SiApachekafka,
  "Apache Spark": SiApachespark,
  "Elasticsearch": SiElasticsearch,
  "Kibana": SiKibana,
  "Logstash": SiLogstash,
  "Beats": SiBeats,
  "Grafana": SiGrafana,
  "Prometheus": SiPrometheus,
  "InfluxDB": SiInfluxdb,
  "Jaeger": SiJaeger,
  "Istio": SiIstio,
  "Linkerd": SiLinkerd,
  "Consul": SiConsul,
  "Vault": SiVault,
  "Terraform": SiTerraform,
  "Ansible": SiAnsible,
  "Chef": SiChef,
  "Puppet": SiPuppet,
  "Vagrant": SiVagrant,
  "VirtualBox": SiVirtualbox,
  "VMware": SiVmware,
  "GitHub": FaGithub,
  "Docker": FaDocker,
  "Database": FaDatabase,
  "Server": FaServer,
  "Cloud": FaCloud,
  "Code": FaCode,
  "Brain": FaBrain,
  "Chart": FaChartLine,
  "Robot": FaRobot,
  "Network": FaNetworkWired,
  "Shield": FaShieldAlt,
  "Cogs": FaCogs,
  "Laptop": FaLaptopCode,
  "Mobile": FaMobile,
  "Globe": FaGlobe,
  "Lock": FaLock,
  "Bolt": FaBolt,
  "Rocket": FaRocket,
  "NLP": FaBrain,
  "Web Scraping": FaCode,
  "Statistical Modeling": FaChartLine,
  "Data Analysis": FaChartLine,
  "C++": FaCode,
  "Linux": FaServer,
  "C": FaCode,
  "ARM": FaCogs,
  "LLMs": FaBrain,
  "Power BI": FaChartLine,
  "UIPath": FaRobot,
  "VB.net": FaCode,
  "SQL": FaDatabase,
  "Agile": FaProjectDiagram,
  "Scrum": FaUsers,
  "SAFe": FaProjectDiagram,
  "Project Management": FaProjectDiagram,
  "Product Management": FaChartLine,
  "Stakeholder Management": FaUsers,
  "Risk Management": FaShieldAlt,
  "Budget Planning": FaChartLine,
  "Team Leadership": FaUsers,
  "Portfolio Management": FaProjectDiagram,
  "User Research": FaBrain,
  "Data Analytics": FaChartLine,
  "Go-to-Market": FaRocket,
  "Customer Success": FaUsers,
  "IoT": FaNetworkWired,
  "Technical Leadership": FaCode,
  "AI/ML Project Management": FaBrain,
  "Investor Relations": FaHandshake,
  "MVP Development": FaRocket,
  "CI/CD": FaBolt,
  "Strategic Planning": FaProjectDiagram,
  "Metrics Tracking": FaChartLine,
  "Cross-functional Leadership": FaUsers,
  "AI/ML": FaBrain,
  "Random Forest": FaBrain,
  "Transformers": FaBrain,
  "Predictive Analytics": FaChartLine,
  "Data Fusion": FaDatabase,
  "AI Programming": FaBrain,
  "Student Mentoring": FaUsers,
  "Lab Instruction": FaCode,
  "Curriculum Development": FaProjectDiagram,
  "Strategic Alignment": FaProjectDiagram,
  "Performance Optimization": FaBolt,
  "A/B Testing": FaChartLine,
  "SLA Management": FaShieldAlt,
  "Frontend Development": FaCode,
  "Deployment Coordination": FaRocket,
  "RPA": FaRobot,
  "Automation": FaRobot,
  "Compliance": FaShieldAlt,
  "Workflow Optimization": FaCogs,
  "Cross-team Coordination": FaUsers,
  "default": FaCode
};

const PMExperience: React.FC = () => {
  const experiences = [
    {
      title: "Technical Consultant (ML / Computer Vision)",
      company: "Michigan State University",
      location: "East Lansing, MI",
      period: "Sept 2024 – Present",
      technologies: ["Project Management", "Strategic Planning", "Stakeholder Management", "Risk Management", "Metrics Tracking", "Cross-functional Leadership"],
      achievements: [
        "Consulted on scaling an automated ECG extraction pipeline (OpenCV, PyMuPDF) to produce clean multi-lead waveforms",
        "Standardized multi-page PDF ingestion, lead layouts, and signal scaling to keep outputs consistent across files and devices",
        "Built segmentation + denoising algorithms that improved waveform fidelity and enabled downstream ML classification",
        "Developed a supervised arrhythmia-classification pipeline and iterated with cardiologists to validate edge cases and improve model reliability"
      ]
    },
    {
      title: "Technical Consultant (Full-Stack AI / Project Delivery)",
      company: "PackSense",
      location: "East Lansing, MI",
      period: "Mar 2025 – Present",
      technologies: ["Project Management", "Strategic Planning", "Stakeholder Management", "Risk Management", "Metrics Tracking", "Cross-functional Leadership"],
      achievements: [
        "Led delivery of a Python/Flask platform to scale review analysis to 10K+ reviews/month, cutting manual work by 60%",
        "Drove performance improvements via JS-based filtering and pipeline tuning, reducing processing time by 30% at scale",
        "Improved keyword/issue discovery by 25% using TF-IDF and FP-Growth, reducing analyst review effort by 40%",
        "Coordinated 3+ teams on roadmap, metrics, and insights to turn e-commerce data into sustainability-driven decisions"
      ]
    },
    {
      title: "Technical Consultant (ML Research / Program Execution)",
      company: "Michigan State University",
      location: "East Lansing, MI",
      period: "Feb 2025 – May 2025",
      technologies: ["AI/ML", "Python", "Random Forest", "Transformers", "Predictive Analytics", "Data Fusion"],
      achievements: [
        "Coordinated cross-functional efforts to build a multilingual COVID-19 forecasting model using Google Trends and clinical data",
        "Defined data specs, standardized preprocessing, and aligned modeling workflows across 75 countries and multiple language groups",
        "Led RF model cycles, validated outputs with collaborators, and delivered insights that improved regional accuracy (R² = 0.89)"
      ]
    },
    {
      title: "Software Developer",
      company: "United Airlines",
      location: "East Lansing, MI",
      period: "Sep 2022 – Dec 2022",
      technologies: ["Strategic Alignment", "Performance Optimization", "A/B Testing", "SLA Management", "Frontend Development", "Deployment Coordination"],
      achievements: [
        "Led ML engineering team at United Airlines to build algorithms assessing course and instructor effectiveness for technician training",
        "Leveraged data visualization tools to enable quick identification of performance trends, thus reducing data analysis time by 40%",
        "Created a user-friendly User Interface for United Airlines LMS, enhancing accessibility and increasing user engagement by 35%",
        "Streamlined data processing scripts, cutting report generation time by 50% for the client"
      ]
    },
    {
      title: "Software Developer",
      company: "Delta Dental of Michigan",
      location: "Okemos, MI",
      period: "Nov 2021 – Aug 2022",
      technologies: ["RPA", "Automation", "Compliance", "Workflow Optimization", "Risk Management", "Cross-team Coordination"],
      achievements: [
        "Built & deployed virtual bots using C++, UiPath to automate certain ongoing business tasks in the company",
        "Led RPA project initiatives and coordinated with cross-functional teams, improving project delivery speed by 20%"
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
          Professional Experience
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
              {/* Tech Stack Section - Desktop */}
              <motion.div
                className="tech-stack-section"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              >
                <h4>Tech Stack:</h4>
                <div className="tech-grid">
                  {exp.technologies.map((tech, techIndex) => {
                    const TechIcon = techStackIcons[tech] || techStackIcons["default"];
                    return (
                      <motion.div
                        key={techIndex}
                        className="tech-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + 0.5 + techIndex * 0.1 
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="tech-icon">
                          <IconWrapper icon={TechIcon} />
                        </div>
                        <span className="tech-name">{tech}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Experience Card */}
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

                {/* Mobile Tech Stack - Inside Card */}
                <div className="mobile-tech-stack">
                  <h4>Tech Stack:</h4>
                  <div className="mobile-tech-grid">
                    {exp.technologies.map((tech, techIndex) => {
                      const TechIcon = techStackIcons[tech] || techStackIcons["default"];
                      return (
                        <motion.span
                          key={techIndex}
                          className="mobile-tech-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.2 + 0.5 + techIndex * 0.05 
                          }}
                        >
                          <IconWrapper icon={TechIcon} />
                          {tech}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>

                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.4 + achievementIndex * 0.1 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PMExperience;
