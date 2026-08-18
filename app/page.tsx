"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Instagram,
  Mail,
  Menu,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Charity Donation Platform",
    description:
      "A modern donation experience designed to make giving simple, transparent and accessible.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://vince551.github.io/charity-donation/",
    github: "https://github.com/vince551/charity-donation",
  },
  {
    number: "02",
    title: "Pitch Kings League",
    description:
      "A football tournament platform for fixtures, teams, league information and competition management.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "#",
    github: "https://github.com/vince551",
  },
  {
    number: "03",
    title: "Employee Management System",
    description:
      "An enterprise-style system concept for managing employees, departments, attendance and workplace operations.",
    stack: ["Web", "UI/UX", "JavaScript"],
    href: "#",
    github: "https://github.com/vince551/EMS",
  },
];

const skills = [
  ["Frontend", "HTML · CSS · JavaScript · Responsive UI"],
  ["Development", "Git · GitHub · APIs · Modern web workflows"],
  ["Design", "UI/UX · Visual systems · Design thinking"],
  ["Architecture", "Technical drawing · Spatial thinking · Design"],
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" onClick={close}>
            VO<span>.</span>
          </a>
          <nav className={open ? "nav-links open" : "nav-links"}>
            <a href="#about" onClick={close}>About</a>
            <a href="#skills" onClick={close}>Skills</a>
            <a href="#work" onClick={close}>Work</a>
            <a href="#leadership" onClick={close}>Leadership</a>
            <a href="#contact" onClick={close}>Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
          <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <section id="top" className="hero section-grid">
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Available for web projects</div>
            <p className="hero-index">01 / PROFILE</p>
            <h1>Vincent<br /><span>Odhiambo.</span></h1>
            <p className="hero-role">Web Developer <i>·</i> Aspiring Architect <i>·</i> Children&apos;s Rights Advocate</p>
            <p className="hero-text">
              I&apos;m a student at JOBO building digital products today while working toward a future in architecture. I combine technology, design thinking and leadership to create useful things.
            </p>
            <div className="actions">
              <a className="button primary" href="#work">View my work <ArrowUpRight size={16} /></a>
              <a className="button secondary" href="#contact">Get in touch</a>
            </div>
            <div className="hero-meta">
              <div><strong>06+</strong><span>Years leadership</span></div>
              <div><strong>03+</strong><span>Web projects</span></div>
              <div><strong>01</strong><span>Big direction</span></div>
            </div>
          </div>
          <aside className="profile-card" aria-label="Profile summary">
            <div className="profile-top"><span>VINCENT / 001</span><span>KENYA</span></div>
            <div className="profile-mark">VO</div>
            <div className="profile-lines"><span /><span /><span /></div>
            <div className="profile-bottom">
              <div><small>Currently</small><strong>Student · JOBO</strong></div>
              <div><small>Focus</small><strong>Web + Architecture</strong></div>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container split">
          <div className="section-label"><span>02</span> ABOUT</div>
          <div className="content-column">
            <h2>I build for the web now.<br /><em>I&apos;m designing for the future.</em></h2>
            <p>
              I&apos;m Vincent Odhiambo, a student with a growing career in web development and a long-term ambition to become an architect. My work sits between technology, visual design and problem solving.
            </p>
            <p>
              Outside technology, I have spent years in children&apos;s leadership and advocacy. That experience shaped how I communicate, lead teams and think about building solutions that actually help people.
            </p>
            <div className="about-facts">
              <div><small>Education</small><strong>JOBO Student</strong></div>
              <div><small>Direction</small><strong>Architecture</strong></div>
              <div><small>Base</small><strong>Kenya</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-dark">
        <div className="container">
          <div className="section-heading"><div><span>03 / CAPABILITIES</span><h2>Skills & toolkit</h2></div><p>Practical skills I&apos;m using and developing as I grow.</p></div>
          <div className="skills-grid">
            {skills.map(([title, text], index) => (
              <article className="skill-card" key={title}>
                <span className="card-number">0{index + 1}</span>
                <div className="skill-icon">{index === 0 ? <Code2 /> : index === 1 ? <BriefcaseBusiness /> : <span>✦</span>}</div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="container">
          <div className="section-heading work-heading"><div><span>04 / SELECTED WORK</span><h2>Projects</h2></div><p>The work matters most. Explore what I&apos;ve built.</p></div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div><h3>{project.title}</h3><p>{project.description}</p></div>
                  <div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <div className="project-actions">
                  {project.href !== "#" && <a href={project.href} target="_blank" rel="noreferrer">Live <ArrowUpRight size={15} /></a>}
                  <a href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> Code</a>
                </div>
              </article>
            ))}
          </div>
          <a className="all-work" href="https://github.com/vince551" target="_blank" rel="noreferrer">View more on GitHub <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section id="leadership" className="section section-dark">
        <div className="container split leadership">
          <div className="section-label"><span>05</span> LEADERSHIP</div>
          <div className="content-column">
            <span className="award-kicker">RECOGNITION / LEADERSHIP</span>
            <h2>Leadership beyond the screen.</h2>
            <p>
              I am currently serving my sixth year as Deputy Speaker of the Nairobi Children Assembly, building experience in public speaking, representation, teamwork and advocacy.
            </p>
            <div className="award-card">
              <div className="award-symbol">★</div>
              <div><small>Recognition</small><strong>Youngest Children&apos;s Rights Advocate in Kenya</strong><p>An achievement that represents my commitment to children&apos;s rights and youth leadership.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="architecture-band">
        <div className="container architecture-inner">
          <div><span>06 / FUTURE DIRECTION</span><h2>Technology × Architecture</h2></div>
          <p>Web development is one part of the journey. I&apos;m building the creative, technical and problem-solving foundation I&apos;ll carry into architecture.</p>
        </div>
      </section>

      <section className="section learning-section">
        <div className="container split">
          <div className="section-label"><span>07</span> NOW LEARNING</div>
          <div className="learning-list">
            {["Advanced JavaScript & modern frontend", "Backend development & databases", "CAD, technical drawing & architectural design", "UI/UX and 3D visualisation"].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong><ArrowUpRight size={17} /></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-card">
          <div><span>08 / CONTACT</span><h2>Let&apos;s build<br /><em>something useful.</em></h2><p>Have a website idea, collaboration or project? I&apos;d be happy to hear about it.</p></div>
          <div className="contact-links">
            <a href="mailto:vincentodhiambo@example.com"><Mail size={17} /> Email me <ArrowUpRight size={15} /></a>
            <a href="https://github.com/vince551" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a>
            <a href="https://instagram.com/vincey.dev" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <footer><div className="container footer-inner"><strong>VINCE<span>.</span></strong><span>© {new Date().getFullYear()} Vincent Odhiambo</span><span>Built with purpose.</span></div></footer>
    </main>
  );
}
