import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendar, 
  FaMapMarkerAlt,
  FaPython,
  FaAws,
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
  "Discrete Mathematics": FaCode,
  "Power BI": FaChartLine,
  "UIPath": FaRobot,
  "VB.net": FaCode,
  "SQL": FaDatabase,
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
              {/* Tech Stack Cards */}
              <motion.div
                className="tech-stack-section"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              >
                <h4>Tech Stack</h4>
                <div className="tech-stack-grid">
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

                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
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
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 