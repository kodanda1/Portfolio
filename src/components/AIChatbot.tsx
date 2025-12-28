import React, { useState, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaArrowUp } from 'react-icons/fa';
import AIChatbotParticleBackground from './AIChatbotParticleBackground';
import './AIChatbot.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return <Icon />;
};

// AI Chatbot Component
const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCloudDialog, setShowCloudDialog] = useState(false);
  const [showAssistantImage, setShowAssistantImage] = useState(true);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; timestamp: Date; isTyping?: boolean; context?: string; image?: string }>>([
    { text: "Hi! I'm your AI assistant. Ask me about Varuntej's projects, skills, or experience!", isUser: false, timestamp: new Date(), image: "/Portfolio/hi.png" }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [conversationContext, setConversationContext] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  
  const sendButtonRef = useRef<HTMLButtonElement>(null);

  const aiResponses = useMemo(() => ({
    projects: "Varuntej has worked on several cutting-edge AI/ML projects that showcase his technical expertise:\n\n🚀 **LLM-Based Student Q&A Assistant with RAG**\n► Built a sophisticated question-answering system using Large Language Models and Retrieval-Augmented Generation\n► Implemented advanced NLP techniques for educational content processing\n► Created an intuitive interface for students to get instant, accurate answers\n\n🤖 **AI-Powered Review Analysis Platform**\n► Developed a sentiment analysis system for customer reviews using machine learning\n► Integrated natural language processing to extract insights from large datasets\n► Built a scalable architecture handling thousands of reviews in real-time\n\n🔬 **COVID-19 Anomaly Detection System**\n► Created an advanced anomaly detection model for healthcare data analysis\n► Implemented statistical and machine learning algorithms for pattern recognition\n► Contributed to public health research during the pandemic\n\n💳 **Credit Card Approval Model Prediction**\n► Built a predictive model for credit card approval using machine learning\n► Implemented feature engineering and model optimization techniques\n► Achieved high accuracy in predicting approval outcomes\n\nWould you like to know more about any specific project's technical implementation, technologies used, or outcomes?",
    skills: "Varuntej possesses a comprehensive skill set spanning multiple technology domains:\n\n💻 **Programming & Development**\n► **Languages**: Python (expert), JavaScript (advanced), C++ (proficient), Java (intermediate)\n► **Frontend**: React.js, HTML5, CSS3, TypeScript, Redux\n► **Backend**: Flask, Node.js, Express.js, RESTful APIs\n► **Databases**: SQL, MongoDB, PostgreSQL, Redis\n\n🤖 **Machine Learning & AI**\n► **Frameworks**: TensorFlow, PyTorch, scikit-learn, Keras\n► **Data Processing**: pandas, NumPy, Matplotlib, Seaborn, Plotly\n► **NLP**: NLTK, spaCy, Transformers, BERT, GPT models\n► **Computer Vision**: OpenCV, PIL, YOLO, CNN architectures\n\n📋 **Project Management**\n► **Methodologies**: Agile, Scrum, Kanban, Waterfall\n► **Tools**: Jira, Confluence, Trello, Asana, Microsoft Project\n► **Leadership**: Cross-functional team management, stakeholder communication\n► **Planning**: Sprint planning, resource allocation, risk management\n► **Delivery**: Project lifecycle management, quality assurance\n\n☁️ **Cloud & DevOps**\n► **Cloud Platforms**: AWS (EC2, S3, Lambda, SageMaker), Azure, Google Cloud\n► **DevOps**: Docker, Kubernetes, Git, CI/CD pipelines, Jenkins\n► **Tools**: Salesforce, Jira, Confluence, VS Code, Postman\n\n📊 **Data Visualization & Analytics**\n► **BI Tools**: Power BI, Tableau, Excel (advanced)\n► **Visualization**: Matplotlib, Seaborn, Plotly, D3.js\n► **Automation**: UIPath, RPA tools\n\nHis expertise enables him to work across the full technology stack, from data science and AI to full-stack development, cloud architecture, and project management.",
    experience: "Varuntej has built a diverse and impactful professional experience:\n\n💼 **Technical Consultant (ML / Computer Vision)**\n► **Company**: Michigan State University, East Lansing, MI\n► **Period**: Sept 2024 – Present\n► Consulted on scaling an automated ECG extraction pipeline (OpenCV, PyMuPDF) to produce clean multi-lead waveforms\n► Standardized multi-page PDF ingestion, lead layouts, and signal scaling to keep outputs consistent across files and devices\n► Built segmentation + denoising algorithms that improved waveform fidelity and enabled downstream ML classification\n► Developed a supervised arrhythmia-classification pipeline and iterated with cardiologists to validate edge cases and improve model reliability\n\n💼 **Technical Consultant (Full-Stack AI / Project Delivery)**\n► **Company**: PackSense, East Lansing, MI\n► **Period**: Mar 2025 – Present\n► Led delivery of a Python/Flask platform to scale review analysis to 10K+ reviews/month, cutting manual work by 60%\n► Drove performance improvements via JS-based filtering and pipeline tuning, reducing processing time by 30% at scale\n► Improved keyword/issue discovery by 25% using TF-IDF and FP-Growth, reducing analyst review effort by 40%\n► Coordinated 3+ teams on roadmap, metrics, and insights to turn e-commerce data into sustainability-driven decisions\n\n💼 **Technical Consultant (ML Research / Program Execution)**\n► **Company**: Michigan State University, East Lansing, MI\n► **Period**: Feb 2025 – May 2025\n► Coordinated cross-functional efforts to build a multilingual COVID-19 forecasting model using Google Trends and clinical data\n► Defined data specs, standardized preprocessing, and aligned modeling workflows across 75 countries and multiple language groups\n► Led RF model cycles, validated outputs with collaborators, and delivered insights that improved regional accuracy (R² = 0.89)\n\n💼 **Technical Project Manager**\n► **Company**: United Airlines, East Lansing, MI\n► **Period**: Sep 2022 – Dec 2022\n► Led cross-functional student team to design and prototype a training effectiveness dashboard for United Airlines LMS\n► Created machine learning models to evaluate instructor impact and training outcomes, reducing data review cycles by 40%\n► Re-imagined LMS interface for technician training using user-centered design, increasing engagement by 35%\n► Delivered final product demo and stakeholder briefing, securing high satisfaction ratings from airline leadership\n\n💼 **Robotic Process Automation Developer**\n► **Company**: Delta Dental of Michigan, Okemos, MI\n► **Period**: Nov 2021 – Aug 2022\n► Built & deployed virtual bots using C++, UiPath to automate certain ongoing business tasks in the company\n► Led RPA project initiatives and coordinated with cross-functional teams, improving project delivery speed by 20%\n\nHis experience demonstrates a unique blend of technical expertise in AI/ML, full-stack development, and project management, with proven results in healthcare, e-commerce, and enterprise automation.",
    contact: "You can connect with Varuntej through multiple channels:\n\n📧 **Email**: kodandapuramvaruntej@gmail.com\n► Primary contact for professional inquiries and collaborations\n► Quick response time for opportunities and partnerships\n\n💼 **LinkedIn**: https://www.linkedin.com/in/varuntejk/\n► Professional network and career updates\n► Connect for industry insights and opportunities\n\n🐙 **GitHub**: https://github.com/kodanda1\n► View his code repositories and projects\n► Open-source contributions and technical portfolio\n\n📱 **Phone**: +1 517-755-0737\n► Available for urgent professional matters\n► Prefer email for initial contact\n\n📍 **Location**: East Lansing, Michigan\n► Open to remote opportunities worldwide\n► Willing to relocate for the right opportunity\n\nFeel free to reach out for collaborations, job opportunities, or technical discussions!",
    education: "Varuntej's educational background demonstrates exceptional academic achievement:\n\n🎓 **Master of Science in Computer Science**\n► **Institution**: Michigan State University\n► **GPA**: 3.81/4.00 (Outstanding Academic Performance)\n► **Focus Areas**: Artificial Intelligence, Machine Learning, Software Engineering\n► **Key Courses**: Advanced Algorithms, Machine Learning, Data Structures, Database Systems\n► **Research**: Active participation in AI/ML research projects\n\n🎓 **Bachelor of Science in Computer Science (Honors)**\n► **GPA**: 3.82/4.00 (Honors Program)\n► **Minor**: Business Administration\n► **Key Achievements**: Dean's List, Academic Excellence Awards\n► **Focus Areas**: Programming Fundamentals, Data Structures, Software Engineering\n\n📚 **Additional Certifications & Training**\n► **Machine Learning**: Coursera, edX, and other online platforms\n► **Cloud Computing**: AWS, Azure certifications\n► **Programming**: Advanced Python, JavaScript, and C++ training\n► **Project Management**: Agile methodologies and team leadership\n\nHis strong academic foundation, combined with practical experience, positions him well for advanced technical roles and research opportunities.",
    resume: "Varuntej's comprehensive resume is available for download and contains detailed information about his professional journey:\n\n📄 **Resume Highlights**\n► **Education**: Complete academic background with GPA and achievements\n► **Experience**: Detailed work history with project descriptions and outcomes\n► **Skills**: Comprehensive technical skills assessment and proficiency levels\n► **Projects**: Portfolio of AI/ML and software development projects\n► **Certifications**: Professional certifications and training programs\n\n📥 **Download Options**\n► Available in the contact section of this portfolio\n► Also accessible from the hero section\n► PDF format with professional formatting\n\n🔍 **What's Included**\n► Technical skills matrix and proficiency levels\n► Project descriptions with technologies used and outcomes\n► Academic achievements and research contributions\n► Professional experience with measurable impacts\n► Contact information and professional references\n\nHis resume showcases a well-rounded professional with strong technical skills and proven project delivery capabilities.",
    github: "Explore Varuntej's technical portfolio and open-source contributions:\n\n🐙 **GitHub Profile**: https://github.com/kodanda1\n\n💻 **Repository Highlights**\n► **AI/ML Projects**: Complete implementations of machine learning models\n► **Web Applications**: Full-stack projects with modern technologies\n► **Data Analysis**: Jupyter notebooks with comprehensive data insights\n► **Open Source**: Contributions to community projects and libraries\n\n🚀 **Featured Projects**\n► **Student Q&A Assistant**: LLM-based educational tool with RAG implementation\n► **Review Analysis Platform**: Sentiment analysis and NLP processing system\n► **Anomaly Detection**: Healthcare data analysis and pattern recognition\n► **Credit Card Prediction**: Machine learning model for financial applications\n\n📊 **Code Quality**\n► Well-documented code with comprehensive README files\n► Clean, maintainable code following best practices\n► Multiple programming languages and frameworks\n► Real-world applications with practical use cases\n\nHis GitHub demonstrates strong coding skills, project management abilities, and commitment to open-source development.",
    linkedin: "Connect with Varuntej professionally and stay updated on his career journey:\n\n💼 **LinkedIn Profile**: https://www.linkedin.com/in/varuntejk/\n\n🔗 **Professional Network**\n► Connect with industry professionals and thought leaders\n► Follow updates on career developments and achievements\n► Engage with technical content and industry insights\n\n📈 **Profile Highlights**\n► **Experience**: Detailed professional background and project descriptions\n► **Skills**: Endorsed technical skills and expertise areas\n► **Recommendations**: Professional recommendations from colleagues and mentors\n► **Publications**: Technical articles and research contributions\n\n🎯 **Networking Benefits**\n► **Industry Connections**: Network with AI/ML and software development professionals\n► **Opportunity Discovery**: Access to job opportunities and collaborations\n► **Knowledge Sharing**: Participate in technical discussions and knowledge exchange\n► **Career Growth**: Stay informed about industry trends and best practices\n\nHis LinkedIn profile reflects a professional committed to continuous learning and industry engagement.",
    location: "Varuntej is based in a vibrant academic and technology hub:\n\n📍 **Current Location**: East Lansing, Michigan\n\n🎓 **Academic Environment**\n► **Michigan State University**: Premier research institution with strong tech programs\n► **Innovation Hub**: Access to cutting-edge research and development facilities\n► **Tech Community**: Active startup ecosystem and technology meetups\n► **Industry Connections**: Proximity to major tech companies and research centers\n\n🌍 **Geographic Flexibility**\n► **Remote Work**: Fully equipped for remote collaboration and work\n► **Relocation Ready**: Willing to relocate for exceptional opportunities\n► **Global Reach**: Open to international opportunities and collaborations\n► **Travel**: Available for on-site meetings and project work\n\n🚀 **Local Advantages**\n► **Research Collaboration**: Access to university research and academic partnerships\n► **Networking**: Active participation in local tech communities and events\n► **Innovation**: Exposure to emerging technologies and research initiatives\n► **Growth**: Continuous learning opportunities in a dynamic academic environment\n\nHis location provides excellent opportunities for research collaboration, industry partnerships, and professional growth.",
    availability: "Varuntej is actively seeking new opportunities and collaborations:\n\n✅ **Current Status**: Available for new opportunities\n\n🎯 **Seeking Roles In**\n► **AI/ML Engineering**: Machine learning model development and deployment\n► **Software Development**: Full-stack development and system architecture\n► **Project Management**: Leading technical teams and strategic initiatives\n► **Data Science**: Data analysis, visualization, and insights generation\n► **Product Management**: Technical product strategy and development\n► **Research**: AI/ML research and academic collaborations\n\n💼 **Opportunity Types**\n► **Full-time Positions**: Permanent roles with growth potential\n► **Contract Work**: Project-based collaborations and consulting\n► **Research Projects**: Academic and industry research partnerships\n► **Startup Opportunities**: Early-stage company involvement\n► **Open Source**: Contributing to community projects\n\n🚀 **What He Brings**\n► **Technical Expertise**: Deep knowledge in AI/ML and software development\n► **Project Management**: Proven track record of leading cross-functional teams\n► **Project Experience**: Proven track record of successful project delivery\n► **Academic Background**: Strong foundation in computer science and research\n► **Adaptability**: Quick learner with ability to work across multiple domains\n► **Collaboration**: Excellent team player with strong communication skills\n\nHe's particularly interested in roles that combine technical innovation with real-world impact, especially in Project Management positions.",
    interests: "Varuntej is passionate about technology and innovation across multiple domains:\n\n🎯 **Primary Interests**\n► **AI/ML Engineering**: Building intelligent systems and machine learning models\n► **Software Development**: Creating scalable, user-friendly applications\n► **Project Management**: Leading technical teams and strategic initiatives\n► **Data Analysis**: Transforming data into actionable business insights\n► **Product Management**: Bridging technical and business requirements\n\n🚀 **Technology Focus Areas**\n► **Artificial Intelligence**: Natural language processing, computer vision, predictive modeling\n► **Full-Stack Development**: End-to-end application development and deployment\n► **Cloud Computing**: Scalable cloud architectures and DevOps practices\n► **Data Science**: Statistical analysis, visualization, and machine learning\n► **Emerging Technologies**: Blockchain, IoT, and cutting-edge innovations\n\n💡 **Industry Interests**\n► **Healthcare Technology**: AI applications in medical diagnosis and patient care\n► **Financial Technology**: Machine learning for risk assessment and fraud detection\n► **Educational Technology**: AI-powered learning platforms and tools\n► **E-commerce**: Recommendation systems and customer experience optimization\n► **Research & Development**: Academic and industry research collaborations\n\nHis interests reflect a commitment to using technology to solve real-world problems and drive innovation.",
    default: "I'm your AI assistant, here to help you learn about Varuntej's impressive background and capabilities! I can provide detailed information about:\n\n📚 **Education & Background**\n► Academic achievements and research experience\n► Technical foundation and learning journey\n\n💼 **Professional Experience**\n► Project management and technical leadership\n► Real-world applications and outcomes\n\n🚀 **Technical Projects**\n► AI/ML implementations and software development\n► Detailed project descriptions and technologies used\n\n⚡ **Skills & Expertise**\n► Comprehensive technical skills across multiple domains\n► Proficiency levels and specializations\n\n📞 **Contact & Networking**\n► Professional contact information and social links\n► Collaboration and opportunity details\n\nWhat would you like to know more about? I can provide in-depth information on any of these areas!"
  }), []);

  // Smart suggestion buttons
  const suggestionButtons = [
    { text: "Projects", action: "projects", icon: "🚀" },
    { text: "Skills", action: "skills", icon: "⚡" },
    { text: "Experience", action: "experience", icon: "💼" },
    { text: "Contact", action: "contact", icon: "📧" },
    { text: "Resume", action: "resume", icon: "📄" },
    { text: "GitHub", action: "github", icon: "🐙" },
    { text: "LinkedIn", action: "linkedin", icon: "💼" },
    { text: "Availability", action: "availability", icon: "✅" }
  ];

  const getContextualSuggestions = (context: string) => {
    const contextLower = context.toLowerCase();
    if (contextLower.includes('dont_know')) {
      return [
        { text: "Projects", action: "projects", icon: "🚀" },
        { text: "Skills", action: "skills", icon: "⚡" },
        { text: "Experience", action: "experience", icon: "💼" },
        { text: "Contact", action: "contact", icon: "📧" }
      ];
    } else if (contextLower.includes('project')) {
      return [
        { text: "Tell me more", action: "projects", icon: "🔍" },
        { text: "Skills used", action: "skills", icon: "⚡" },
        { text: "GitHub link", action: "github", icon: "🐙" }
      ];
    } else if (contextLower.includes('skill')) {
      return [
        { text: "Projects using these", action: "projects", icon: "🚀" },
        { text: "Experience", action: "experience", icon: "💼" },
        { text: "Resume", action: "resume", icon: "📄" }
      ];
    } else if (contextLower.includes('experience')) {
      return [
        { text: "Projects", action: "projects", icon: "🚀" },
        { text: "Skills", action: "skills", icon: "⚡" },
        { text: "Contact", action: "contact", icon: "📧" }
      ];
    }
    return suggestionButtons.slice(0, 4);
  };

  const getAIResponse = useCallback((userInput: string): { response: string; context: string; image?: string } => {
    const input = userInput.toLowerCase();
    
    // Special case for "hi" - use hi.png image
    if (input === 'hi' || input === 'hello' || input === 'hey') {
      return { 
        response: "Hello! 👋 I'm your AI assistant. I can help you learn about Varuntej's projects, skills, experience, and more. What would you like to know?", 
        context: 'greeting',
        image: "/Portfolio/hi.png"
      };
    }
    
    if (input.includes('project') || input.includes('work')) {
      return { response: aiResponses.projects, context: 'projects', image: "/Portfolio/ans.png" };
    } else if (input.includes('skill') || input.includes('technology') || input.includes('tech')) {
      return { response: aiResponses.skills, context: 'skills', image: "/Portfolio/ans.png" };
    } else if (input.includes('experience') || input.includes('background')) {
      return { response: aiResponses.experience, context: 'experience', image: "/Portfolio/ans.png" };
    } else if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return { response: aiResponses.contact, context: 'contact', image: "/Portfolio/ans.png" };
    } else if (input.includes('education') || input.includes('degree') || input.includes('gpa') || input.includes('university')) {
      return { response: aiResponses.education, context: 'education', image: "/Portfolio/ans.png" };
    } else if (input.includes('resume') || input.includes('cv') || input.includes('download')) {
      return { response: aiResponses.resume, context: 'resume', image: "/Portfolio/ans.png" };
    } else if (input.includes('github') || input.includes('code') || input.includes('repository')) {
      return { response: aiResponses.github, context: 'github', image: "/Portfolio/ans.png" };
    } else if (input.includes('linkedin') || input.includes('social') || input.includes('network')) {
      return { response: aiResponses.linkedin, context: 'linkedin', image: "/Portfolio/ans.png" };
    } else if (input.includes('location') || input.includes('where') || input.includes('based') || input.includes('michigan')) {
      return { response: aiResponses.location, context: 'location', image: "/Portfolio/ans.png" };
    } else if (input.includes('available') || input.includes('opportunity') || input.includes('job') || input.includes('hire') || input.includes('availability')) {
      return { response: aiResponses.availability, context: 'availability', image: "/Portfolio/ans.png" };
    } else if (input.includes('project management') || input.includes('pm') || input.includes('agile') || input.includes('scrum') || input.includes('kanban')) {
      return { response: aiResponses.skills, context: 'skills', image: "/Portfolio/ans.png" };
    } else if (input.includes('interest') || input.includes('looking') || input.includes('seeking') || input.includes('want') || input.includes('role') || input.includes('position') || input.includes('title') || input.includes('job title')) {
      return { response: aiResponses.interests, context: 'interests', image: "/Portfolio/ans.png" };
    } else {
      // Don't know response with dont_know.png image
      return { 
        response: "Hmm... 🤔 I don't know the answer to that question. You can send a message to Varuntej directly at kodandapuramvaruntej@gmail.com for more specific information.\n\nHere's what I can help you with:\n\n• Projects and work experience\n• Skills and technologies\n• Education and background\n• Contact information\n• Resume and social links\n• Location and availability\n• Job interests and roles", 
        context: 'dont_know', 
        image: "/Portfolio/dont_know.png" 
      };
    }
  }, [aiResponses]);

  const handleSendMessage = useCallback(() => {
    console.log('handleSendMessage called with inputText:', inputText, 'isTyping:', isTyping);
    if (!inputText.trim() || isTyping) {
      console.log('handleSendMessage early return - inputText:', inputText, 'isTyping:', isTyping);
      return;
    }

    console.log('User message sent:', inputText); // Debug log
    const userMessage = { text: inputText, isUser: true, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setShowSuggestions(false);

    // Simulate AI thinking
    setTimeout(() => {
      const aiResponseData = getAIResponse(inputText);
      const aiMessage = { 
        text: aiResponseData.response, 
        isUser: false, 
        timestamp: new Date(), 
        isTyping: true,
        context: aiResponseData.context,
        image: aiResponseData.image
      };
      setMessages(prev => [...prev, aiMessage]);
      setConversationContext(aiResponseData.context);
      setTypingText('');
      setIsTyping(false);
      
      // Start character-by-character typing for better control
      const fullText = aiResponseData.response;
      let currentIndex = 0;
      let typingComplete = false;
      
      // Show stagnant text first
      setTypingText("I'm into it...");
      
      const typeCharacter = () => {
        if (currentIndex < fullText.length && !typingComplete) {
          const currentText = fullText.substring(0, currentIndex + 1);
          setTypingText(currentText);
          currentIndex++;
          setTimeout(typeCharacter, 50 + Math.random() * 30); // Faster, more responsive typing
        } else {
          // Finished typing
          typingComplete = true;
          clearTimeout(safetyTimeout); // Clear the safety timeout
          setMessages(prev => prev.map(msg => 
            msg.isTyping ? { ...msg, isTyping: false } : msg
          ));
          setShowSuggestions(true);
        }
      };
      
      // Add a safety timeout to ensure full text is displayed
      const safetyTimeout = setTimeout(() => {
        if (!typingComplete) {
          typingComplete = true;
          setMessages(prev => prev.map(msg => 
            msg.isTyping ? { ...msg, isTyping: false } : msg
          ));
          setShowSuggestions(true);
        }
      }, 8000); // 8 second timeout
      
      setTimeout(() => {
        typeCharacter();
      }, 500);
    }, 800);
  }, [inputText, isTyping, getAIResponse]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (action: string) => {
    console.log('Suggestion clicked:', action);
    const actionMap: { [key: string]: string } = {
      'projects': 'Tell me about your projects',
      'skills': 'What skills do you have?',
      'experience': 'Tell me about your experience',
      'contact': 'How can I contact you?',
      'resume': 'Can I see your resume?',
      'github': 'Show me your GitHub',
      'linkedin': 'What\'s your LinkedIn?',
      'availability': 'Are you available for opportunities?'
    };
    
    const message = actionMap[action] || `Tell me about ${action}`;
    console.log('Setting input text to:', message);
    setInputText(message);
    
    // Use setTimeout to ensure state is updated before calling handleSendMessage
    setTimeout(() => {
      console.log('Calling handleSendMessage from suggestion');
      handleSendMessage();
    }, 0);
    
    setShowSuggestions(false);
  };

  const handleToggleClick = () => {
    console.log('Toggle button clicked, current isOpen:', isOpen);
    if (!isOpen) {
      setIsOpen(true);
      setShowAssistantImage(false);
    } else {
      setIsOpen(false);
      setShowAssistantImage(true);
    }
  };

  const handleSendButtonClick = useCallback((e: React.MouseEvent | React.TouchEvent | React.PointerEvent) => {
    console.log('Send button clicked - event:', e);
    e.preventDefault();
    e.stopPropagation();
    if ('nativeEvent' in e) {
      e.nativeEvent.stopImmediatePropagation();
    }
    
    // Add a visual indicator that the button was clicked
    const button = e.currentTarget as HTMLButtonElement;
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
      button.style.transform = '';
    }, 150);
    
    console.log('Send button clicked! inputText:', inputText, 'isTyping:', isTyping);
    
    if (inputText.trim() && !isTyping) {
      console.log('Sending message:', inputText);
      handleSendMessage();
    } else {
      console.log('Cannot send message - inputText:', inputText, 'isTyping:', isTyping);
    }
  }, [inputText, isTyping, handleSendMessage]);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        className="ai-chatbot-toggle"
        onClick={handleToggleClick}
        onMouseEnter={() => setShowCloudDialog(true)}
        onMouseLeave={() => setShowCloudDialog(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {showAssistantImage && (
          <img 
            src="/Portfolio/ai_assistant.png" 
            alt="AI Assistant" 
            className="ai-toggle-image"
            onError={(e) => {
              console.error('Failed to load AI assistant image:', e);
              // Don't hide the image, just log the error
            }}
            onLoad={() => {
              console.log('AI assistant image loaded successfully');
            }}
          />
        )}

        
        {/* Cloud Dialog on Hover */}
        {showCloudDialog && !isOpen && (
          <motion.div
            className="ai-cloud-dialog"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="cloud-content">
              <span className="cloud-text">Hi, this is your AI assistant!</span>
            </div>
          </motion.div>
        )}
      </motion.button>

      {/* Chatbot Interface */}
      {isOpen && (
        <motion.div
          className="ai-chatbot-container"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            console.log('Chat container clicked');
            e.stopPropagation();
          }}
        >
          <AIChatbotParticleBackground />
          <div className="ai-chatbot-header">
            <div className="ai-chatbot-title">
              <IconWrapper icon={FaBrain} />
              <span>AI Portfolio Assistant</span>
            </div>
            <button 
              className="ai-chatbot-close"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Close button clicked');
                setIsOpen(false);
                setShowAssistantImage(true);
              }}
            >
              ×
            </button>
          </div>

          <div 
            className="ai-chatbot-messages"
            onClick={(e) => e.stopPropagation()}
          >
            {messages.map((message, index) => (
              <motion.div
                key={index}
                className={`ai-message ${message.isUser ? 'user' : 'ai'}`}
                initial={message.isUser ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: message.isUser ? 0 : 0.3 }}
              >
                {!message.isUser && message.image && (
                  <div className="ai-message-avatar">
                    <img 
                      src={message.image} 
                      alt="AI Assistant" 
                      className="ai-avatar-image"
                      onError={(e) => {
                        console.error('Failed to load AI avatar image:', e);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="ai-message-wrapper">
                  <div className="ai-message-content">
                    {message.isUser ? (
                      // User messages always display normally - FIXED
                      <span style={{ 
                        display: 'inline', 
                        whiteSpace: 'normal', 
                        wordBreak: 'normal',
                        writingMode: 'horizontal-tb',
                        textOrientation: 'mixed',
                        lineHeight: 'normal'
                      }}>
                        {message.text}
                      </span>
                    ) : message.isTyping ? (
                      // AI messages with typing animation - only show typing text
                      <>
                        {typingText}
                        <span className="ai-cursor">|</span>
                      </>
                    ) : (
                      // AI messages without typing animation
                      message.text.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < message.text.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))
                    )}
                  </div>
                  <div className="ai-message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                className="ai-message ai"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="ai-message-avatar">
                  <img 
                    src="/Portfolio/thinking.png" 
                    alt="AI Thinking" 
                    className="ai-avatar-image thinking"
                    onError={(e) => {
                      console.error('Failed to load thinking image:', e);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="ai-typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </motion.div>
            )}
            
            {/* Smart Suggestion Buttons */}
            {showSuggestions && !isTyping && messages.length > 1 && (
              <motion.div
                className="ai-suggestions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="suggestions-title">Quick Actions:</div>
                <div className="suggestions-grid">
                  {getContextualSuggestions(conversationContext).map((suggestion, index) => (
                    <motion.button
                      key={index}
                      className="suggestion-button"
                      onClick={() => handleSuggestionClick(suggestion.action)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                      <span className="suggestion-icon">{suggestion.icon}</span>
                      <span className="suggestion-text">{suggestion.text}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div 
            className="ai-chatbot-input"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about projects, skills, experience..."
              className="ai-input-field"
            />
            <button
              ref={sendButtonRef}
              onClick={handleSendButtonClick}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              onPointerUp={(e) => e.stopPropagation()}
              disabled={!inputText.trim() || isTyping}
              className="ai-send-button"
              style={{ 
                pointerEvents: 'auto',
                position: 'relative',
                zIndex: 10001,
                cursor: (!inputText.trim() || isTyping) ? 'not-allowed' : 'pointer'
              }}
              aria-label="Send message"
              title="Send message"
            >
              <IconWrapper icon={FaArrowUp} />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default AIChatbot; 