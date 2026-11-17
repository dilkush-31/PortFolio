export const projects = [
  {
    slug: "collabflow",
    title: "CollabFlow",
    subtitle: "Collaborative Project Management Tool",
    year: "2026",
    tech: ["React", "Vite", "Node.js", "Express", "MySQL", "Socket.IO", "JWT"],
    summary:
      "A full-stack project management app with role-based access, a live Kanban board, task comments, and real-time notifications.",
    features: [
      "Built JWT authentication with bcrypt and role-based access control for admin, project manager, and team member roles.",
      "Developed a Kanban board with priorities, deadlines, and assignees, with live updates using Socket.IO.",
      "Designed a 7-table MySQL schema with foreign keys and SQL dashboard analytics for overdue tasks and project progress.",
      "Deployed the frontend on Vercel, the backend on Render, and the database on Aiven MySQL with SSL.",
    ],
    liveUrl: "https://collab-flow-s53n.vercel.app",
    githubUrl: "https://github.com/dilkush-31/CollabFlow",
    image: "/collabflow.png",
  },
  {
    slug: "rag-pdf-assistant",
    title: "AI-Powered RAG PDF Assistant",
    subtitle: "Document Q&A with semantic retrieval",
    year: "2026",
    tech: ["React.js", "Spring Boot", "PostgreSQL", "pgvector", "Ollama"],
    summary:
      "A full-stack AI application that lets users upload PDF documents and ask intelligent questions based on their content.",
    features: [
      "Built a document processing pipeline using Apache PDFBox.",
      "Implemented chunking, embeddings, semantic retrieval, and cosine similarity.",
      "Used nomic-embed-text with PostgreSQL/pgvector for vector storage.",
      "Integrated Ollama and Llama 3.2 for context-aware responses.",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/dilkush-31",
    image: "",
  },
  {
    slug: "referral-management",
    title: "Referral Management System",
    subtitle: "Employee referral tracking with duplicate detection",
    year: "2025",
    tech: ["React.js", "Spring Boot", "MySQL"],
    summary:
      "A full-stack platform for employee referral submission, tracking, duplicate detection, and management.",
    features: [
      "Implemented email and phone-based duplicate detection.",
      "Achieved 100% accuracy across 200 controlled submissions.",
      "Average referral processing time: 9.21 ms.",
      "Built REST APIs, CRUD operations, and role-based access control.",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/dilkush-31",
    image: "",
  },
  {
    slug: "empower-me",
    title: "Empower Me – Women Safety App",
    subtitle: "Real-time emergency assistance app",
    year: "2024",
    tech: ["Flutter", "Firebase", "Dart"],
    summary:
      "A real-time women safety application focused on emergency assistance and rapid communication.",
    features: [
      "Implemented SOS emergency functionality.",
      "Added live location tracking and instant alerts.",
      "Integrated Firebase Firestore for real-time synchronization.",
      "Designed a responsive interface optimized for emergency use.",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/dilkush-31",
    image: "",
  },
];