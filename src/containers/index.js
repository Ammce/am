import React from "react";

import SocialIcons from "../components/SocialIcons";

import "./index.css";

const CAREER_START_YEAR = 2017;

const skills = [
  "Node.js",
  "Go",
  "TypeScript",
  "React",
  "Next.js",
  "GraphQL",
  "gRPC",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "System Design",
];

function Index() {
  const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

  return (
    <main className="page">
      <header className="hero">
        <img
          className="avatar"
          src="https://drive.google.com/thumbnail?id=1cF3lh2bEtqJt8vuutaP9HBvO1ym5-PYG&sz=w400"
          alt="Amel Muminovic"
        />
        <h1 className="name">Amel Muminovic</h1>
        <p className="role">Senior Full Stack Engineer</p>
      </header>

      <section className="section">
        <h2 className="section-title">About</h2>
        <p className="about">
          With over {yearsOfExperience} years of professional experience in
          software development and a Master’s degree in Computer Engineering,
          I’ve developed deep expertise in building robust systems using
          Node.js, GraphQL, React, and Golang.
        </p>
        <p className="about">
          As a product engineer, I work at the intersection of software
          development, user experience, and scalable architecture, often
          incorporating AI-driven and agentic AI solutions to elevate product
          functionality. I’m driven by curiosity and a commitment to
          continuous learning, always seeking new ways to build thoughtful,
          high-impact software.
        </p>
        <a
          className="cv-link"
          href="https://drive.google.com/file/d/1w1CWYhJShtU80-er99fx1kCry6eGHwOy/preview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV →
        </a>
      </section>

      <section className="section">
        <h2 className="section-title">Technologies</h2>
        <ul className="chips">
          {skills.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Elsewhere</h2>
        <SocialIcons />
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Amel Muminovic</span>
      </footer>
    </main>
  );
}

export default Index;
