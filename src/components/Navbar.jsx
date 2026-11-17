import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const [dark, setDark] = useTheme();

  return (
    <header className="navbar">
      <Link to="/" className="logo">Dilkush.</Link>
      <nav>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        <button onClick={() => setDark(!dark)}>{dark ? "Light" : "Dark"}</button>
      </nav>
    </header>
  );
}