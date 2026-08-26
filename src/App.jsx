import { useState } from "react";
import "./App.css";

const skills = [
  "Java",
  "Python",
  "C",
  "JavaScript",
  "SQL",
  "React.js",
  "HTML",
  "CSS",
  "Flutter",
  "Spring Boot",
  "Node.js",
  "REST APIs",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "RAG",
  "LLMs",
  "Ollama",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Git",
  "GitHub",
  "Docker",
  "Postman",
  "Power BI",
];

const projects = [
  {
    title: "AI-Powered RAG PDF Assistant",
    date: "May 2026",
    tech: "React.js • Spring Boot • PostgreSQL • pgvector • Ollama",
    description:
      "A full-stack AI application that allows users to upload PDF documents and ask intelligent questions based on their content.",
    points: [
      "Built document processing pipeline using Apache PDFBox.",
      "Implemented chunking, embeddings, semantic retrieval and cosine similarity.",
      "Used nomic-embed-text with PostgreSQL/pgvector for vector storage.",
      "Integrated Ollama and Llama 3.2 for context-aware responses.",
    ],
    github: "https://github.com/dilkush-31",
  },
  {
    title: "Referral Management System",
    date: "October 2025",
    tech: "React.js • Spring Boot • MySQL",
    description:
      "A full-stack platform for employee referral submission, tracking, duplicate detection and management.",
    points: [
      "Implemented email and phone-based duplicate detection.",
      "Achieved 100% accuracy across 200 controlled submissions.",
      "Average referral processing time: 9.21 ms.",
      "Built REST APIs, CRUD operations and role-based access control.",
    ],
    github: "https://github.com/dilkush-31",
  },
  {
    title: "Empower Me – Women Safety App",
    date: "June 2024",
    tech: "Flutter • Firebase • Dart",
    description:
      "A real-time women safety application focused on emergency assistance and rapid communication.",
    points: [
      "Implemented SOS emergency functionality.",
      "Added live location tracking and instant alerts.",
      "Integrated Firebase Firestore for real-time synchronization.",
      "Designed a responsive interface optimized for emergency use.",
    ],
    github: "https://github.com/dilkush-31",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          Dilkush<span>.</span>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("education")}>Education</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Dilkush <span>Janwa</span>
            </h1>

            <h2>Computer Engineer & AI Developer</h2>

            <p className="hero-description">
              Computer Engineering student specializing in Data Science,
              building full-stack applications, AI-powered systems, and
              scalable backend solutions.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>

              <button
                className="secondary-btn"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/dilkush-31"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/dilkush-janwa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
               <a
    href="https://drive.google.com/file/d/1zIkhwIPqjqJJi6XbAZik2sEV7aC-cKaY/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    Resume ↗
  </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="code-window">
              <div className="window-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <pre>
{`const developer = {
  name: "Dilkush Janwa",
  role: "AI & Full Stack Developer",
  skills: [
    "Java",
    "Spring Boot",
    "React",
    "AI / RAG"
  ],
  status: "Building 🚀"
};`}
              </pre>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p>01. ABOUT ME</p>
            <h2>Building technology with purpose.</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a Computer Engineering student specializing in Data
                Science with a strong interest in software development,
                Artificial Intelligence, backend systems, and full-stack
                development.
              </p>

              <p>
                My work includes AI-powered Retrieval-Augmented Generation
                applications, scalable REST APIs, database-driven systems, and
                real-time mobile applications.
              </p>

              <p>
                I enjoy solving problems using Data Structures and Algorithms
                and continuously improving my knowledge of modern software
                engineering technologies.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <h3>3+</h3>
                <p>Major Projects</p>
              </div>

              <div className="stat-card">
                <h3>8.5+</h3>
                <p>CGPA</p>
              </div>

              <div className="stat-card">
                <h3>20+</h3>
                <p>Technologies</p>
              </div>

              <div className="stat-card">
                <h3>Top 45</h3>
                <p>SIH Internal Hackathon</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section dark-section">
          <div className="section-heading">
            <p>02. SKILLS</p>
            <h2>Technologies I work with.</h2>
          </div>

          <div className="skill-categories">
            <div className="category">
              <h3>Programming</h3>
              <div className="skill-list">
                {skills.slice(0, 5).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="category">
              <h3>Frontend & Backend</h3>
              <div className="skill-list">
                {skills.slice(5, 13).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="category">
              <h3>AI & Data</h3>
              <div className="skill-list">
                {skills.slice(13, 22).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="category">
              <h3>Tools</h3>
              <div className="skill-list">
                {skills.slice(22).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p>03. PROJECTS</p>
            <h2>Things I've built.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">
                  0{index + 1}
                </div>

                <p className="project-date">{project.date}</p>

                <h3>{project.title}</h3>

                <p className="project-tech">{project.tech}</p>

                <p className="project-description">{project.description}</p>

                <div className="project-actions">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-btn"
                  >
                    View Details →
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section dark-section">
          <div className="section-heading">
            <p>04. EDUCATION & ACHIEVEMENTS</p>
            <h2>My academic journey.</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span>2023 — Present</span>
              <div>
                <h3>Ramrao Adik Institute of Technology</h3>
                <p>B.Tech in Computer Engineering</p>
                <p>Major: Data Science • CGPA: 8.5/10</p>
              </div>
            </div>

            <div className="timeline-item">
              <span>2025</span>
              <div>
                <h3>Smart India Hackathon</h3>
                <p>
                  Selected among the Top 45 Teams in the Internal Hackathon.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span>2021 — 2023</span>
              <div>
                <h3>HOCL International School and Jr College</h3>
                <p>Higher Secondary Certificate (HSC) — PCM</p>
              </div>
            </div>
          </div>

          <div className="certifications">
            <h3>Certifications</h3>
            <div className="cert-grid">
              <div>CS50: Course Certificate</div>
              <div>AWS Cloud Practitioner Essentials</div>
              <div>Data Analytics with Generative AI</div>
              <div>Power BI for Beginners</div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <p className="eyebrow">05. CONTACT</p>

          <h2>Let's build something great.</h2>

          <p>
            I'm always interested in new opportunities, projects, and
            collaborations.
          </p>

          <a
            className="email-btn"
            href="mailto:dilkushjanwa31@gmail.com"
          >
            Say Hello →
          </a>

          <div className="contact-links">
            <a href="mailto:dilkushjanwa31@gmail.com">
              dilkushjanwa31@gmail.com
            </a>
            <a
              href="https://github.com/dilkush-31"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dilkush-janwa"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Dilkush Janwa. Built with React.</p>
      </footer>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>

            <p className="eyebrow">PROJECT DETAILS</p>
            <h2>{activeProject.title}</h2>
            <p className="project-tech">{activeProject.tech}</p>

            <ul>
              {activeProject.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <a
              href={activeProject.github}
              target="_blank"
              rel="noreferrer"
              className="primary-btn modal-link"
            >
              View GitHub →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;