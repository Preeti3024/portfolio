import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaBrain, FaDatabase, FaRobot } from 'react-icons/fa';
import './App.css';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            Preethika Kambampati
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['Work', 'About', 'Skills', 'Publications', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </button>
        </div>

        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden pb-4"
          >
            <nav className="flex flex-col space-y-3">
              {['Work', 'About', 'Skills', 'Publications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold text-white leading-tight"
          >
            Preethika
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Kambampati
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating intelligent solutions through AI/ML technologies, 
            full-stack development, and data analytics to solve complex real-world problems.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#work"
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Work Section
const WorkSection = () => {
  const projects = [
    {
      title: "PAYV – Payment Voice (Major Project)",
      description: "Voice-driven mobile app enabling secure transactions for seniors & accessibility-challenged. Developed backend database using SQLite & secured payment transaction system using Python & Flutter.",
      image: "https://images.unsplash.com/photo-1605764949006-10d0e9e1437c",
      tech: ["Flutter", "Python", "SQLite", "Flask", "Firebase", "Apache Flink"],
      period: "Oct 2023 – March 2024",
      link: "https://github.com/Preeti3024/payvfinal",
      status: "IEEE Explore Conference - Published"
    },
    {
      title: "Indian Sign Language Recognition",
      description: "A working ISLR System to aid communication for the physically challenged. Developed frontend using React.js and integrated it with backend using Flask.",
      image: "https://images.pexels.com/photos/1555177/pexels-photo-1555177.jpeg",
      tech: ["Python", "React.js", "Flask", "Kafka", "Kaggle Dataset"],
      period: "Jun 2023 - Oct 2023",
      link: "https://github.com/Preeti3024/ISL/tree/master",
      status: "Mini-Project"
    },
    {
      title: "Women Corner",
      description: "Website offers education and resources for managing menstrual difficulties with cycle calculation. Developed an authentication system, worked on frontend with a 3D effect and other pages.",
      image: "https://images.unsplash.com/photo-1593376893114-1aed528d80cf",
      tech: ["Angular", "Firebase", "3D Effect"],
      period: "Feb 2022 – Jun 2022",
      link: "https://women-corner.web.app/signin",
      status: "W-accinge Hackathon"
    },
    {
      title: "Bridging Gap",
      description: "Website that centralizes various aspects of senior citizen care, such as scheduling lab tests, ordering medications, and scheduling doctor's appointments & updates users via WhatsApp and a chatbot component.",
      image: "https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c",
      tech: ["Angular", "Firebase", "HTML", "Zapier", "Twilio"],
      period: "Dec 2021 – Mar 2022",
      link: "https://bridging-gaps-677a5.web.app/signin",
      status: "IEEE Explore Conference - Published"
    }
  ];

  return (
    <section id="work" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">My Work</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Building innovative AI/ML solutions that push creative boundaries and deliver real value. 
              Each project represents a commitment to excellence and technical innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{project.period}</p>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    View Project <FaExternalLinkAlt className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">About Me</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate ML/AI Engineer with 1+ years of experience in developing 
                intelligent solutions that solve complex real-world problems. My expertise 
                spans across machine learning, data analytics, and full-stack development.
              </p>
              <p>
                Currently pursuing my Master's in Computer Engineering with a focus on AI/ML, 
                I've successfully delivered projects ranging from healthcare management systems 
                to real-time fraud detection platforms.
              </p>
              <p>
                I believe in the power of technology to transform industries and am committed 
                to staying at the forefront of AI innovation while mentoring the next generation 
                of developers.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-black rounded-lg">
                <div className="text-3xl font-bold text-blue-400">1+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-black rounded-lg">
                <div className="text-3xl font-bold text-purple-400">10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="relative"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1595623654300-b27329804025" 
                alt="Coding"
                className="w-full rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AI/ML & Data Science",
      icon: <FaBrain className="text-3xl" />,
      skills: ["Python", "TensorFlow", "Scikit-learn", "PyTorch", "Pandas", "NumPy", "OpenCV", "NLP"]
    },
    {
      title: "Full Stack Development",
      icon: <FaCode className="text-3xl" />,
      skills: ["JavaScript", "React", "Node.js", "FastAPI", "HTML/CSS", "TypeScript", "GraphQL"]
    },
    {
      title: "Databases & Cloud",
      icon: <FaDatabase className="text-3xl" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Google Cloud", "Docker", "Kubernetes"]
    },
    {
      title: "Specialized Tools",
      icon: <FaRobot className="text-3xl" />,
      skills: ["Apache Kafka", "Apache Spark", "Tableau", "Power BI", "Git", "Jenkins", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Technical Skills</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit built through continuous learning and hands-on experience 
              across the full spectrum of modern AI/ML and software development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-blue-400 mr-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-4 py-2 bg-black text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Publications Section
const PublicationsSection = () => {
  const publications = [
    {
      title: "PAYV - Payment Voice: A Platform using Voice Recognition to Enable Payment Transactions",
      conference: "IEEE Conference Publication",
      year: "July 2024",
      description: "Developed novel virtual voice assistant with multi-modal biometric authentication, enhancing payment accessibility for disabled individuals. Featured advanced NLP, face recognition, and fingerprint technologies.",
      link: "https://ieeexplore.ieee.org/document/10673442"
    },
    {
      title: "iAssist: An online wellness platform to elevate the physical and mental health of the elderly",
      conference: "IEEE Conference Publication",
      year: "December 2022",
      description: "Created comprehensive healthcare management system serving elderly population with integrated appointment scheduling, medication management, and caregiver support features.",
      link: "https://ieeexplore.ieee.org/document/10119367"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Publications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Contributing to the academic community through research publications 
              that advance the field of AI/ML and data science.
            </p>
          </motion.div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-black p-8 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 md:mb-0 hover:text-blue-400 transition-colors duration-300">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </a>
                  </h3>
                  <span className="text-blue-400 font-semibold">{pub.year}</span>
                </div>
                <p className="text-lg text-gray-400 mb-4">{pub.conference}</p>
                <p className="text-gray-300 leading-relaxed mb-4">{pub.description}</p>
                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Read Paper <FaExternalLinkAlt className="ml-2" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1696713219412-0b08a5afe31c')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to collaborate on exciting AI/ML projects or discuss opportunities? 
              I'd love to hear from you and explore how we can work together.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center space-x-8 mb-12">
            <motion.a
              href="mailto:preetikpati13@gmail.com"
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope className="text-2xl" />
              <span className="text-lg">Email</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/preethika-k-658872206/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaLinkedin className="text-2xl" />
              <span className="text-lg">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/Preeti3024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaGithub className="text-2xl" />
              <span className="text-lg">GitHub</span>
            </motion.a>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <motion.a
              href="mailto:preetikpati13@gmail.com"
              className="inline-block px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          © 2024 Preethika Kambampati. Crafted with passion for AI/ML innovation.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e) => {
      if (e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <BrowserRouter>
      <div className="App bg-black text-white overflow-x-hidden">
        <Header />
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <PublicationsSection />
        <ContactSection />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;