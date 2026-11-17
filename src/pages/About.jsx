export default function About() {
  return (
    <main className="page">
      <h1>About</h1>
      <p>
        I'm a Computer Engineering student at Ramrao Adik Institute of Technology, specializing in Data Science. I build secure
        backend systems, full-stack web apps, and data-driven tools.
      </p>
      <h2>Skills</h2>
      <div className="grid">
        <div className="card"><h3>Languages</h3><p>Java · JavaScript · Python · SQL</p></div>
        <div className="card"><h3>Backend</h3><p>Spring Boot · Node.js · Express · REST APIs</p></div>
        <div className="card"><h3>Frontend</h3><p>React · HTML5 · CSS3</p></div>
        <div className="card"><h3>Data & Tools</h3><p>MySQL · PostgreSQL · Git · Postman · Power BI</p></div>
      </div>
    </main>
  );
}