import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <main className="page"><p>Project not found.</p><Link to="/projects">Back to projects</Link></main>;
  }

  return (
    <main className="page">
      <Link to="/projects">← All projects</Link>
      <p className="year">{project.year}</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.subtitle}</p>
      <p>{project.summary}</p>

      <h2>Key features</h2>
      <ul>
        {project.features.map((f) => <li key={f}>{f}</li>)}
      </ul>

      <h2>Tech stack</h2>
      <p>{project.tech.join(" · ")}</p>

      <p>
        {project.liveUrl && <a className="btn" href={project.liveUrl} target="_blank" rel="noreferrer">Live demo</a>}
        {project.githubUrl && <a className="btn" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>}
      </p>
    </main>
  );
}