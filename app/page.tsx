"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Github,
  Instagram,
  Menu,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Charity Donation Platform",
    description: "A focused giving experience designed around trust, clarity and frictionless action.",
    image: "/images/KVD.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://vince551.github.io/charity-donation/",
    github: "https://github.com/vince551/charity-donation",
  },
  {
    number: "02",
    title: "Pitch Kings League",
    description: "A football tournament interface for fixtures, teams, standings and competition management.",
    image: "/images/Kb Yusuf furniture.jpg",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "#",
    github: "https://github.com/vince551",
  },
  {
    number: "03",
    title: "Employee Management System",
    description: "An enterprise-style product concept for employee, department and workplace operations.",
    image: "/images/Certificate.jpg",
    stack: ["Next.js", "TypeScript", "UI/UX"],
    href: "#",
    github: "https://github.com/vince551/EMS",
  },
];

const skills = [
  ["01", "Frontend", "HTML, CSS, JavaScript, responsive interfaces"],
  ["02", "Product", "Next.js, TypeScript, APIs, Git and deployment"],
  ["03", "Design", "UI/UX, visual systems and interaction design"],
  ["04", "Architecture", "Technical drawing, spatial thinking and design"],
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" onClick={close} aria-label="Vincent Odhiambo home">
            V<span>O</span>
          </a>

          <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
            <a href="#about" onClick={close}>About</a>
            <a href="#capabilities" onClick={close}>Capabilities</a>
            <a href="#work" onClick={close}>Work</a>
            <a href="#contact" onClick={close}>Contact</a>
          </nav>

          <a className="nav-cta" href="#contact">
            Start a project <ArrowUpRight size={15} />
          </a>
          <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Available for selected projects</div>
            <p className="hero-index">PORTFOLIO / 2026 — NAIROBI, KENYA</p>
            <h1>Vincent<br /><span>Odhiambo.</span></h1>
            <div className="hero-role">WEB DEVELOPER <i>×</i> FUTURE ARCHITECT <i>×</i> CREATIVE BUILDER</div>
            <p className="hero-text">
              I design and build digital experiences with the same mindset I bring to architecture: structure, intention and a sharp eye for detail.
            </p>
            <div className="actions">
              <a className="button primary" href="#work">View selected work <ArrowUpRight size={16} /></a>
              <a className="button secondary" href="#about">About me <ArrowDownRight size={16} /></a>
            </div>
          </div>

          <aside className="hero-visual" aria-label="Vincent Odhiambo portrait">
            <div className="visual-frame">
              <Image src="/images/vince.jpg" alt="Vincent Odhiambo" fill priority sizes="(max-width: 900px) 90vw, 42vw" style={{ objectFit: "cover" }} />
              <div className="image-wash" />
              <div className="frame-grid" />
              <div className="visual-label top-left">VO / 001</div>
              <div className="visual-label top-right">KE</div>
              <div className="visual-caption">
                <span>WEB / DESIGN / ARCHITECTURE</span>
                <strong>Building ideas<br />into experiences.</strong>
              </div>
            </div>
            <div className="visual-note"><span>SCROLL TO EXPLORE</span><i /></div>
          </aside>
        </div>
      </section>

      <section className="statement">
        <div className="container statement-inner">
          <span className="section-eyebrow">THE APPROACH</span>
          <p>Good work should feel <em>obvious</em> after it is finished — clear, useful and memorable without trying too hard.</p>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container split">
          <div className="section-label"><span>01</span><strong>ABOUT</strong></div>
          <div className="content-column">
            <span className="kicker">DESIGNER / DEVELOPER / FUTURE ARCHITECT</span>
            <h2>I build for the web now.<br /><em>I&apos;m designing for the future.</em></h2>
            <p>I&apos;m Vincent Odhiambo, a student and web developer developing toward architecture. My work sits at the intersection of technology, visual design, spatial thinking and problem solving.</p>
            <p>I care about interfaces that communicate quickly, products that solve real problems and details that make a project feel considered.</p>
            <div className="about-facts">
              <div><small>Current</small><strong>JOBO Student</strong></div>
              <div><small>Direction</small><strong>Architecture</strong></div>
              <div><small>Base</small><strong>Kenya</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="section capabilities-section">
        <div className="container">
          <div className="section-heading">
            <div><span>02 / CAPABILITIES</span><h2>Built with range.</h2></div>
            <p>Technology is the medium. Design is the discipline. The goal is always a better experience.</p>
          </div>
          <div className="skills-grid">
            {skills.map(([number, title, text]) => (
              <article className="skill-card" key={title}>
                <div className="skill-top"><span>{number}</span><Code2 size={19} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="container">
          <div className="section-heading work-heading">
            <div><span>03 / SELECTED WORK</span><h2>Things I&apos;ve built.</h2></div>
            <p>Selected experiments, client work and products. The code is open where it can be.</p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-image">
                    <Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, 320px" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="project-copy">
                    <div className="project-title"><span>PROJECT {project.number}</span><h3>{project.title}</h3></div>
                    <p>{project.description}</p>
                    <div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                </div>
                <div className="project-actions">
                  {project.href !== "#" && <a href={project.href} target="_blank" rel="noreferrer">Live <ArrowUpRight size={14} /></a>}
                  <a href={project.github} target="_blank" rel="noreferrer"><Github size={14} /> Code</a>
                </div>
              </article>
            ))}
          </div>

          <a className="all-work" href="https://github.com/vince551" target="_blank" rel="noreferrer">Explore the full GitHub <ArrowUpRight size={15} /></a>
        </div>
      </section>

      <section className="leadership-section">
        <div className="container leadership-grid">
          <div><span className="section-eyebrow">04 / LEADERSHIP</span><h2>Impact beyond<br /><em>the screen.</em></h2></div>
          <div className="leadership-copy">
            <p>Technology is only one part of the picture. Leadership has taught me how to communicate, represent people, collaborate and turn ideas into action.</p>
            <div className="leadership-card"><span>RECOGNITION</span><strong>Children&apos;s rights &amp; youth leadership</strong><p>Experience in public speaking, representation, teamwork and advocacy.</p></div>
          </div>
        </div>
      </section>

      <section className="architecture-band">
        <div className="container architecture-inner">
          <div><span>05 / FUTURE DIRECTION</span><h2>Technology <b>×</b> Architecture</h2></div>
          <p>Digital skills are part of a bigger direction: combining technology, design thinking and architecture to create spaces and experiences that matter.</p>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-card">
          <div>
            <span>06 / CONTACT</span>
            <h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2>
            <p>For web projects, collaborations and creative opportunities, find me through the links below.</p>
          </div>
          <div className="contact-links">
            <a href="https://github.com/vince551" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a>
            <a href="https://instagram.com/vincey.dev" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <strong>VINCE<span>.</span></strong>
          <span>© {new Date().getFullYear()} Vincent Odhiambo</span>
          <span>WEB · DESIGN · ARCHITECTURE</span>
        </div>
      </footer>
    </main>
  );
}
