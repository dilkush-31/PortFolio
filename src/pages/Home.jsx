import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Software Engineer</p>
        <h1>Dilkush Janwa</h1>
        <p className="lead">
          I build secure full-stack and backend systems, from banking transaction engines to real-time collaboration apps.
        </p>
        <Link className="btn" to="/projects">View my work</Link>
      </section>

      <section>
        <h2>Featured projects</h2>
        <div className="grid">
          {projects.slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>
    </main>
  );
}