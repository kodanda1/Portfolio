import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaEnvelope } from 'react-icons/fa';
import './AIChatbot.css';

// Icon wrapper component to handle type issues
const IconWrapper: React.FC<{ icon: any }> = ({ icon: Icon }) => {
  return <Icon />;
};

// AI Chatbot Component
const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCloudDialog, setShowCloudDialog] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; timestamp: Date; isTyping?: boolean; context?: string; image?: string }>>([
    { text: "Hi! I'm your AI assistant. Ask me about Varuntej's projects, skills, or experience!", isUser: false, timestamp: new Date(), image: "https://kodanda1.github.io/Portfolio/hi.jpg" }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [conversationContext, setConversationContext] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState(true);

  const aiResponses = {
    projects: "Varuntej has worked on several AI/ML projects including:\n\n• LLM-Based Student Q&A Assistant with RAG\n• AI-Powered Review Analysis Platform\n• COVID-19 Anomaly Detection System\n• Credit Card Approval Model Prediction\n\nWould you like to know more about any specific project?",
    skills: "Varuntej specializes in:\n\n• Programming: Python, JavaScript, C++, React, Flask\n• Machine Learning: TensorFlow, PyTorch, scikit-learn, pandas, NumPy\n• Cloud & DevOps: AWS, Azure, Docker, Git, Salesforce\n• Data Visualization: Power BI, Matplotlib, Seaborn, Plotly, Excel\n• Development Tools: UIPath, Jira, VS Code, Postman, Tableau\n\nHis expertise spans from machine learning and AI to full-stack development and cloud computing.",
    experience: "Varuntej has experience at Michigan State University working on AI/ML projects, and has developed several production-ready applications. He's currently working on cutting-edge AI solutions.",
    contact: "You can reach Varuntej via email at kodandapuramvaruntej@gmail.com, LinkedIn, or GitHub. Feel free to connect!",
    education: "Varuntej holds a Master's degree in Computer Science from Michigan State University with a 3.81 GPA, and a Bachelor's degree in Computer Science (Honors) with a 3.82 GPA and a minor in Business.",
    resume: "You can download Varuntej's resume from the contact section or hero section of this portfolio. It contains detailed information about his experience, skills, and projects.",
    github: "Check out Varuntej's GitHub at https://github.com/kodanda1 to see his code repositories and projects.",
    linkedin: "Connect with Varuntej on LinkedIn at https://www.linkedin.com/in/varuntejk/ for professional networking.",
    location: "Varuntej is based in East Lansing, Michigan, and is open to remote opportunities and collaborations worldwide.",
    availability: "Varuntej is currently available for new opportunities and collaborations. He's particularly interested in AI/ML, full-stack development, and innovative tech projects.",
    interests: "Varuntej is actively looking for roles in:\n\n• AI/ML Engineering\n• Software Development\n• Project/Program Management\n• Data Analyst\n• Product Management\n\nHe's passionate about AI/ML, full-stack development, Project management and innovative technology solutions.",
    default: "I can help you learn about Varuntej's projects, skills, experience, education, resume, social links, location, availability, interests, or how to contact him. What would you like to know?"
  };

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
    if (contextLower.includes('project')) {
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

  const getAIResponse = (userInput: string): { response: string; context: string; image?: string } => {
    const input = userInput.toLowerCase();
    
    // Special case for "hi" - use hi.jpg image
    if (input === 'hi' || input === 'hello' || input === 'hey') {
      return { 
        response: "Hello! 👋 I'm your AI assistant. I can help you learn about Varuntej's projects, skills, experience, and more. What would you like to know?", 
        context: 'greeting',
        image: "https://kodanda1.github.io/Portfolio/hi.jpg"
      };
    }
    
    if (input.includes('project') || input.includes('work')) {
      return { response: aiResponses.projects, context: 'projects', image: "https://kodanda1.github.io/Portfolio/ans.jpg" };
    } else if (input.includes('skill') || input.includes('technology') || input.includes('tech')) {
      return { response: aiResponses.skills, context: 'skills', image: "https://kodanda1.github.io/Portfolio/ans.jpg" };
    } else if (input.includes('experience') || input.includes('background')) {
      return { response: aiResponses.experience, context: 'experience', image: "https://kodanda1.github.io/Portfolio/ans.jpg" };
    } else if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return { response: aiResponses.contact, context: 'contact', image: "https://kodanda1.github.io/Portfolio/ans.jpg" };
    } else if (input.includes('education') || input.includes('degree') || input.includes('gpa') || input.includes('university')) {
      return { response: aiResponses.education, context: 'education', image: "https://kodanda1.github.io/Portfolio/ans.jpg" };
    } else if (input.includes('resume') || input.includes('cv') || input.includes('download')) {
      return { response: aiResponses.resume, context: 'resume', image: "https://kodanda1.github.io/Portfolio/ans.jpg" };
    } else if (input.includes('github') || input.includes('code') || input.includes('repository')) {
      return { response: aiResponses.github, context: 'github', image: "https://kodanda1.github.io/Portfolio/ans.jpg" };
    } else if (input.includes('linkedin') || input.includes('social') || input.includes('network')) {
      return { response: aiResponses.linkedin, context: 'linkedin', image: "https://kodanda1.github.io/Portfolio/ans.jpg" };
    } else if (input.includes('location') || input.includes('where') || input.includes('based') || input.includes('michigan')) {
      return { response: aiResponses.location, context: 'location', image: "https://kodanda1.github.io/Portfolio/ans.jpg" };
    } else if (input.includes('available') || input.includes('opportunity') || input.includes('job') || input.includes('hire') || input.includes('availability')) {
      return { response: aiResponses.availability, context: 'availability', image: "https://kodanda1.github.io/Portfolio/ans.jpg" };
    } else if (input.includes('interest') || input.includes('looking') || input.includes('seeking') || input.includes('want') || input.includes('role') || input.includes('position') || input.includes('title') || input.includes('job title')) {
      return { response: aiResponses.interests, context: 'interests', image: "https://kodanda1.github.io/Portfolio/ans.jpg" };
    } else {
      return { response: aiResponses.default, context: 'general', image: "https://kodanda1.github.io/Portfolio/ans.jpg" };
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

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
      
      // Start word-by-word typing
      const words = aiResponseData.response.split(' ');
      let currentIndex = 0;
      
      const typeWord = () => {
        if (currentIndex < words.length) {
          setTypingText(words.slice(0, currentIndex + 1).join(' '));
          currentIndex++;
          setTimeout(typeWord, 80 + Math.random() * 40); // Faster typing
        } else {
          // Finished typing
          setMessages(prev => prev.map(msg => 
            msg.isTyping ? { ...msg, isTyping: false } : msg
          ));
          setShowSuggestions(true);
        }
      };
      
      setTimeout(typeWord, 300);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (action: string) => {
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
    setInputText(message);
    handleSendMessage();
    setShowSuggestions(false);
  };

  const handleToggleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

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
        <img 
          src="https://kodanda1.github.io/Portfolio/ai_assistant.png" 
          alt="AI Assistant" 
          className="ai-toggle-image"
          onError={(e) => {
            console.error('Failed to load AI assistant image:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <span style={{ position: 'absolute', color: 'white', fontSize: '12px', bottom: '-20px' }}>AI Assistant</span>
        
        {/* Cloud Dialog on Hover */}
        {showCloudDialog && (
          <motion.div
            className="ai-cloud-dialog"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="cloud-content">
              <img 
                src="https://kodanda1.github.io/Portfolio/ai_assistant.png" 
                alt="AI Assistant" 
                className="cloud-emoji"
                onError={(e) => {
                  console.error('Failed to load AI assistant emoji:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="cloud-text">Hi, I'm your AI assistant!</span>
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
        >
          <div className="ai-chatbot-header">
            <div className="ai-chatbot-title">
              <IconWrapper icon={FaBrain} />
              <span>AI Portfolio Assistant</span>
            </div>
            <button 
              className="ai-chatbot-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="ai-chatbot-messages">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                className={`ai-message ${message.isUser ? 'user' : 'ai'}`}
                initial={{ opacity: 0, x: message.isUser ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
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
                    {message.isTyping ? (
                      <>
                        {typingText.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < typingText.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                        <span className="ai-cursor">|</span>
                      </>
                    ) : (
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
                    src="https://kodanda1.github.io/Portfolio/thinking.jpg" 
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

          <div className="ai-chatbot-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about projects, skills, experience..."
              className="ai-input-field"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className="ai-send-button"
            >
              <IconWrapper icon={FaEnvelope} />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default AIChatbot; 