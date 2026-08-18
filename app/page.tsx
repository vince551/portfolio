"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
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
    description: "A polished donation experience focused on trust, clarity and accessible giving.",
    image: "/images/KVD.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://vince551.github.io/charity-donation/",
    github: "https://github.com/vince551/charity-donation",
  },
  {
    number: "02",
    title: "Pitch Kings League",
    description: "A football tournament experience for teams, fixtures, standings and competition management.",
    image: "/images/Kb Yusuf furniture.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "#",
    github: "https://github.com/vince551",
  },
  {
    number: "03",
    title: "Employee Management System",
    description: "An enterprise-style interface for employee, department and workplace operations.",
    image: "/images/Certificate.jpg",
    stack: ["Next.js", "TypeScript", "UI/UX"],
    href: "#",
    github: "https://github.com/vince551/EMS",
  },
];

const skills = [
  ["Frontend", "HTML · CSS · JavaScript · Responsive UI"],
  ["Modern web", "Next.js · TypeScript · Git · APIs"],
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
          <a className="brand" href="#top" onClick={close}>VO<span>.</span></a>
          <nav className={open ? "nav-links open" : "nav-links"}>
            <a href="#about" onClick={close}>About</a>
            <a href="#work" onClick={close}>Work</a>
            <a href="#leadership" onClick={close}>Leadership</a>
            <a href="#contact" onClick={close}>Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
          <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero-orbit" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Building digital experiences</div>
            <p className="hero-index">PORTFOLIO / 2026</p>
            <h1>Vincent<br /><span>Odhiambo.</span></h1>
            <p className="hero-role">Web Developer <i>·</i> Aspiring Architect <i>·</i> Children&apos;s Rights Advocate</p>
            <p className="hero-text">I build thoughtful digital products while developing toward a future in architecture — combining technology, design and leadership to solve real problems.</p>
            <div className="actions">
              <a className="button primary" href="#work">Explore my work <ArrowUpRight size={16} /></a>
              <a className="button secondary" href="#contact">Start a conversation</a>
            </div>
            <div className="hero-meta">
              <div><strong>06+</strong><span>Years leadership</span></div>
              <div><strong>03+</strong><span>Selected builds</span></div>
              <div><strong>01</strong><span>Clear direction</span></div>
            </div>
          </div>
          <div className="hero-portrait">
            <Image src="/images/vince.jpg" alt="Vincent Odhiambo" fill priority sizes="(max-width: 800px) 82vw, 42vw" />
            <div className="portrait-overlay"><span>VINCE / 001</span><span>KENYA</span></div>
            <div className="portrait-caption"><small>Currently</small><strong>Student · JOBO</strong></div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container split">
          <div className="section-label"><span>01</span> ABOUT</div>
          <div className="content-column">
            <p className="kicker">DESIGNER / DEVELOPER / FUTURE ARCHITECT</p>
            <h2>I build for the web now. <em>I&apos;m designing for the future.</em></h2>
            <p>I&apos;m Vincent Odhiambo, a JOBO student growing as a web developer while working toward architecture. My interests sit where technology, visual design, spatial thinking and problem solving meet.</p>
            <p>My leadership journey has also shaped how I communicate, represent people and turn ideas into action.</p>
            <div className="about-facts"><div><small>Education</small><strong>JOBO Student</strong></div><div><small>Direction</small><strong>Architecture</strong></div><div><small>Base</small><strong>Kenya</strong></div></div>
          </div>
        </div>
      </section>

      <section className="section capabilities">
        <div className="container">
          <div className="section-heading"><div><span>02 / CAPABILITIES</span><h2>What I bring</h2></div><p>A focused toolkit built around useful digital products and design.</p></div>
          <div className="skills-grid">{skills.map(([title, text], index) => <article className="skill-card" key={title}><span className="card-number">0{index + 1}</span><div className="skill-icon">{index < 2 ? <Code2 /> : <span>✦</span>}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="container">
          <div className="section-heading work-heading"><div><span>03 / SELECTED WORK</span><h2>Built, not just imagined.</h2></div><p>Projects are the proof. Explore the work and the code behind it.</p></div>
          <div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.number}>
            <div className="project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 800px) 92vw, 30vw" /><span>{project.number}</span></div>
            <div className="project-body"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-actions">{project.href !== "#" && <a href={project.href} target="_blank" rel="noreferrer">Live <ArrowUpRight size={15} /></a>}<a href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> Code</a></div></div>
          </article>)}</div>
          <a className="all-work" href="https://github.com/vince551" target="_blank" rel="noreferrer">Explore the full GitHub <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section id="leadership" className="section leadership-section">
        <div className="container leadership-grid">
          <div className="leadership-image"><Image src="/images/Certificate.jpg" alt="Vincent Odhiambo recognition certificate" fill sizes="(max-width: 800px) 92vw, 40vw" /></div>
          <div className="content-column"><p className="kicker">04 / LEADERSHIP & RECOGNITION</p><h2>Impact beyond the screen.</h2><p>I am serving my sixth year as Deputy Speaker of the Nairobi Children Assembly, developing experience in public speaking, representation, teamwork and advocacy.</p><div className="award-card"><div className="award-symbol">★</div><div><small>Recognition</small><strong>Youngest Children&apos;s Rights Advocate in Kenya</strong><p>A milestone representing my commitment to children&apos;s rights and youth leadership.</p></div></div></div>
        </div>
      </section>

      <section className="architecture-band"><div className="container architecture-inner"><div><span>05 / FUTURE DIRECTION</span><h2>Technology × Architecture</h2></div><p>Digital skills are part of a bigger direction: combining technology, design thinking and architecture to create spaces and experiences that matter.</p></div></section>

      <section className="section contact-section" id="contact"><div className="container contact-card"><div><span>06 / CONTACT</span><h2>Have an idea?<br /><em>Let&apos;s build it.</em></h2><p>For web projects, collaborations or creative opportunities, get in touch.</p></div><div className="contact-links"><a href="mailto:vincentodhiambo@example.com"><Mail size={17} /> Email me <ArrowUpRight size={15} /></a><a href="https://github.com/vince551" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a><a href="https://instagram.com/vincey.dev" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram <ArrowUpRight size={15} /></a></div></div></section>

      <footer><div className="container footer-inner"><strong>VINCE<span>.</span></strong><span>© {new Date().getFullYear()} Vincent Odhiambo</span><span>Web · Design · Architecture</span></div></footer>
    </main>
  );
}
