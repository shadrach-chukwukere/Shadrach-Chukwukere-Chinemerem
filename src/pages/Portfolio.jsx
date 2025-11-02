import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  BarChart,
  HardDrive,
  Server,
  Bot,
  Globe,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

import image from "../assets/me.png"
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce site with user authentication, a product catalog, shopping cart functionality, and a secure checkout process.",
    tech: ["React", "Express.js", "MongoDB", "Stripe API"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://placehold.co/600x400/1e293b/e2e8f0?text=E-commerce",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application enabling teams to create, assign, and track tasks with real-time updates.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Socket.IO"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://placehold.co/600x400/1e293b/e2e8f0?text=Task+Manager",
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "An intelligent chatbot integrated into a web application, providing automated support and a natural language interface for users.",
    tech: ["Python", "Flask", "LangChain", "React"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://placehold.co/600x400/1e293b/e2e8f0?text=AI+Chatbot",
  },
];

// Project Card Component
const ProjectCard = ({ project }) => (
  <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:scale-105 transition-transform duration-300">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover rounded-xl mb-4 border border-slate-700"
    />
    <h3 className="text-2xl font-bold mb-2 text-slate-100">{project.title}</h3>
    <p className="text-slate-400 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tech, index) => (
        <span
          key={index}
          className="bg-sky-500 text-sky-900 text-sm font-semibold px-3 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors"
      >
        <Globe size={18} /> Live Demo
      </a>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors"
      >
        <Github size={18} /> GitHub
      </a>
    </div>
  </div>
);

// Skill Item Component
const SkillItem = ({ icon, label }) => (
  <div className="flex flex-col items-center p-4 bg-slate-800 rounded-xl border border-slate-700 hover:scale-105 transition-transform duration-300">
    {icon}
    <span className="mt-2 text-center text-slate-200 text-sm font-medium">
      {label}
    </span>
  </div>
);

// Main App Component
const Portfolio = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real application, you would handle form submission here (e.g., via an API call).
    // Using a custom modal or div instead of `alert` as it is not supported in this environment
    const alertMessage = "Thank you for your message!";
    const alertBox = document.createElement('div');
    alertBox.textContent = alertMessage;
    alertBox.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #1a202c;
      color: #cbd5e0;
      padding: 2rem;
      border-radius: 1rem;
      border: 1px solid #4a5568;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      text-align: center;
    `;
    document.body.appendChild(alertBox);
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className="bg-slate-900 text-slate-300 font-inter min-h-screen"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <a href="#" className="text-2xl font-bold text-sky-400">
            Shadrach Chukwukere
          </a>
          <div className="hidden md:flex space-x-10">
            <a
              href="#about"
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-slate-800/90 backdrop-blur-md shadow-lg py-4 transition-all duration-300">
            <div className="flex flex-col items-center space-y-6">
              <a
                href="#about"
                onClick={toggleMobileMenu}
                className="block text-slate-300 hover:text-sky-400 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={toggleMobileMenu}
                className="block text-slate-300 hover:text-sky-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={toggleMobileMenu}
                className="block text-slate-300 hover:text-sky-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={toggleMobileMenu}
                className="block text-slate-300 hover:text-sky-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="hero"
          className="container mx-auto px-4 gap-6 md:px-6 justify-between py-20 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[calc(100vh-80px)]"
        >
          <div className="max-w-xl text-center space-y-6 md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 animate-gradient">
              I build modern, <br className="hidden md:inline" /> scalable web
              solutions.
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-6">
              Full-Stack Software Developer with 3 years of experience
              specializing in building elegant and efficient applications.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="bg-sky-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-sky-600 transition-colors flex items-center gap-2"
              >
                My Work <ChevronRight size={20} />
              </a>
              <a
                href="https://github.com/shadrach-chukwukere"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 text-slate-400 hover:text-sky-400 transition-colors border border-slate-700 rounded-full"
              >
                <Github size={24} />
              </a>

              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 text-slate-400 hover:text-sky-400 transition-colors border border-slate-700 rounded-full"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="w-full max-w-xl flex items-center justify-center">
            {/* Using a placeholder image since local imports are not supported */}
            <img
              src={image}
              alt="Profile"
              className="rounded-full shadow-2xl border-4 border-slate-700"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 md:px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-center text-white text-lg">
            <p className="mb-4">
              As a dedicated full-stack software developer with 3 years of
              experience, I am passionate about crafting high-quality, scalable,
              and user-friendly web applications. My journey in development has
              equipped me with a strong foundation in both front-end and
              back-end technologies, allowing me to build comprehensive
              solutions from concept to deployment.
            </p>
            <p>
              I thrive on solving complex problems and am constantly learning
              new technologies to stay at the forefront of the industry. I am a
              detail-oriented and collaborative team player, committed to
              delivering exceptional products that not only meet but exceed
              expectations.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-4 md:px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            My Skills
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <SkillItem
                icon={<Code size={48} className="text-sky-400" />}
                label="JavaScript (ES6+)"
              />
              <SkillItem
                icon={<BarChart size={48} className="text-sky-400" />}
                label="React"
              />
              <SkillItem
                icon={<HardDrive size={48} className="text-sky-400" />}
                label="Node.js"
              />
              <SkillItem
                icon={<Server size={48} className="text-sky-400" />}
                label="Python"
              />
              <SkillItem
                icon={<Bot size={48} className="text-sky-400" />}
                label="MongoDB"
              />
              <SkillItem
                icon={<HardDrive size={48} className="text-sky-400" />}
                label="MySQL"
              />
              <SkillItem
                icon={<Code size={48} className="text-sky-400" />}
                label="HTML & CSS"
              />
              <SkillItem
                icon={<BarChart size={48} className="text-sky-400" />}
                label="Tailwind CSS"
              />
              <SkillItem
                icon={<Server size={48} className="text-sky-400" />}
                label="PHP"
              />
              <SkillItem
                icon={<Bot size={48} className="text-sky-400" />}
                label="Git & GitHub"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 md:px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 md:px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700">
            <p className="text-center text-slate-400 mb-6">
              I am currently open to new opportunities. Feel free to reach out
              to me for collaborations or just to say hello!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-slate-700 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-slate-700 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 rounded-lg bg-slate-700 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-sky-500 text-white font-semibold py-3 rounded-full shadow-lg hover:bg-sky-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-center py-8">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Shadrach Chukwukere. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
