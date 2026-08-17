# Vince Odhiambo — Developer Portfolio

> A premium, responsive portfolio for showcasing Vince Odhiambo's web development, product design, technology projects and digital work.

![Portfolio](https://img.shields.io/badge/PORTFOLIO-ACTIVE-00ff88?style=for-the-badge&labelColor=0b1020)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111827)

## 🌐 Purpose

The portfolio is designed as a **personal product**, not just an online CV. It combines a strong hero section, an immediate profile/about section, capabilities, selected work, certificates, CV access and contact paths into one responsive experience.

### Experience priorities

- Strong first impression without sacrificing readability
- **Profile immediately after the hero** so visitors understand who Vince is before exploring services/work
- Consolidated capabilities/services to reduce repetitive sections
- Project case studies with clear visual hierarchy
- Responsive mobile navigation
- Motion and 3D effects used as enhancement rather than the only source of meaning
- Accessible labels and semantic structure where possible

## ✨ Highlights

- Premium dark visual system
- Three.js background effects
- AOS scroll animation
- Responsive navigation and mobile menu
- Project case-study visuals
- CV and certificate pages
- Contact section
- Open Graph metadata
- GitHub and social links

## 🧰 Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Tailwind CSS CDN
- Three.js
- AOS
- Phosphor Icons

## 📁 Structure

```text
.
├── index.html                 # Main portfolio experience
├── style.css                  # Core desktop styling
├── mobile.css                 # Responsive/mobile styling
├── script.js                  # Main interactions
├── premium.css                # Premium visual layer
├── premium-plus.js            # Additional interaction layer
├── cv.html                    # CV page
├── certificates.html          # Certificates page
├── images/                    # Portfolio/case-study assets
├── CONTRIBUTING.md
└── README.md
```

## 🚀 Run locally

This is a static site, so any local HTTP server works:

```bash
git clone https://github.com/vince551/portfolio.git
cd portfolio
npx serve .
```

Opening `index.html` directly may work for basic content, but an HTTP server is recommended for consistent asset/module behavior.

## 📱 Responsive design

The site is structured around responsive breakpoints and has a dedicated `mobile.css` layer. When changing the desktop layout, always test:

- Small Android screens
- Tablet widths
- Desktop widths
- Mobile navigation open/close states
- Touch targets and text wrapping

## ♿ Quality checklist

Before publishing meaningful UI changes:

- Check keyboard navigation.
- Keep meaningful images labelled with useful `alt` text.
- Avoid motion that prevents users from accessing content.
- Check color contrast for important text.
- Test the mobile menu.
- Test CV/certificate links.
- Verify external links use safe `target`/`rel` combinations where appropriate.
- Check the page with JavaScript disabled for essential content where practical.

## 🗺️ Roadmap

- [ ] Add automated HTML/CSS quality checks
- [ ] Add a project filtering experience
- [ ] Add richer case-study pages with measurable outcomes
- [ ] Improve reduced-motion support
- [ ] Add structured social preview images
- [ ] Add a lightweight contact backend/form service
- [ ] Keep portfolio projects synchronized with flagship GitHub repositories

## 👨‍💻 Author

**Vince Odhiambo**

Full-stack developer · technology builder · cybersecurity learner

- Portfolio: https://vince551.github.io/portfolio/
- GitHub: https://github.com/vince551

---

<p align="center"><sub>Building ideas into digital experiences.</sub></p>
