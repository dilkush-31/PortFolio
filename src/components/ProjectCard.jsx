import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="card">
      <span className="year">{project.year}</span>
      <h3>{project.title}</h3>
      <p>{project.subtitle}</p>
      <p className="tech">{project.tech.join(" · ")}</p>
    </Link>
  );
}