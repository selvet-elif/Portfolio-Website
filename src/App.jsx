import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Code2, Database, Brain, TrendingUp } from 'lucide-react';
import { IconHome } from '@tabler/icons-react';
import './App.css'; 
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);

    const sections = ['about', 'projects', 'contact'];
    setVisibleSections(prev => {
      const newVisibleSections = new Set(prev);
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
          if (isVisible) newVisibleSections.add(sectionId);
        }
      });
      return newVisibleSections;
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // run once on mount
  return () => window.removeEventListener('scroll', handleScroll);
}, []); // 👈 run once only


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "ML Prediction Model",
      description: "Built a machine learning model using scikit-learn to predict customer churn with 92% accuracy.",
      tags: ["Python", "ML", "Pandas", "Scikit-learn"],
      github: "#",
      demo: "#"
    },
    {
      title: "Data Dashboard",
      description: "Interactive data visualization dashboard for real-time analytics using React and D3.js.",
      tags: ["React", "JavaScript", "Data Viz"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Analytics",
      description: "Automated data pipeline for ETL operations and comprehensive business intelligence reporting.",
      tags: ["Python", "Data Analysis", "SQL"],
      github: "#",
      demo: "#"
    }
  ];

  const skills = [
    { name: "Python", icon: Code2 },
    { name: "Data Analysis", icon: TrendingUp },
    { name: "Machine Learning", icon: Brain },
    { name: "React & JavaScript", icon: Database } // Changed icon to be more representative
  ];

  // Tailwind CSS needs to be configured to include custom animations
  // Add this to tailwind.config.js (or inside <style> for a single file demo)
  

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white font-sans">
      {/* Styles for animations - needed for Tailwind animate-* classes */}
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
        .animate-slideUp { animation: slideUp 0.5s ease-out forwards; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-950/95 shadow-lg shadow-purple-500/20' : 'bg-slate-950/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300"
            >
              Portfolio
            </button>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="text-slate-300 hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-purple-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-t border-purple-500/30 animate-slideDown">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="block w-full text-left text-slate-300 hover:text-purple-400 transition-colors duration-300 font-medium py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slideUp">
            Developer & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Data Analyst</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 animate-slideUp animation-delay-200">
            Building intelligent solutions with Python, Machine Learning, and Modern Web Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slideUp animation-delay-400">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-slate-800 text-purple-300 rounded-lg font-semibold border-2 border-purple-500 hover:bg-slate-700 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-12"></div>

          <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-2xl shadow-xl p-8 sm:p-12 mb-12 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              I'm a passionate developer with over a year of experience specializing in Python, data analysis, and machine learning.
              My journey has been focused on extracting meaningful insights from data and building intelligent systems that solve real-world problems.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              Currently, I'm expanding my expertise into full-stack web development, mastering modern technologies like JavaScript,
              React, and Next.js to create comprehensive, end-to-end solutions that combine powerful data processing with elegant user interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-6 text-center hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full mb-4 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                    <Icon className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 transition-all duration-1000 ${
          visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Placeholder for project image */}
                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-20 h-20 text-white opacity-50 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-500/40 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-purple-300 transition-colors duration-300 font-medium"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-pink-300 transition-colors duration-300 font-medium"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-12"></div>

          <p className="text-xl text-slate-300 mb-12">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://github.com" // TODO: Add your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-110 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                <Github className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-slate-300 font-medium group-hover:text-purple-300 transition-colors duration-300">GitHub</span>
            </a>

            <a
              href="https://linkedin.com" // TODO: Add your LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-110 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                <Linkedin className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-slate-300 font-medium group-hover:text-purple-300 transition-colors duration-300">LinkedIn</span>
            </a>

            <a
              href="mailto:your.email@example.com" // TODO: Add your email
              className="group flex flex-col items-center gap-3 p-6 bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-110 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                <Mail className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-slate-300 font-medium group-hover:text-purple-300 transition-colors duration-300">Email</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-purple-500/20 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Portfolio. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;