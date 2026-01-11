// Portfolio interactions: Intersection reveal, custom cursor, loader, micro-interactions

const body = document.body;

// --- Loading overlay ---
const createLoader = () => {
	const overlay = document.createElement('div');
	overlay.className = 'loading-overlay';
	overlay.innerHTML = '<div class="spinner" aria-hidden="true"></div>';
	document.documentElement.appendChild(overlay);
	return overlay;
};

const loader = createLoader();

window.addEventListener('load', () => {
	if (loader && loader.parentNode) {
		loader.classList.add('loaded');
		setTimeout(() => loader.remove(), 450);
	}
});

// --- IntersectionObserver for reveal animations ---
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealElements.length) {
	const obs = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-visible');
				obs.unobserve(entry.target);
			}
		});
	}, { threshold: 0.12 });
	revealElements.forEach(el => obs.observe(el));
} else {
	// Fallback: reveal all
	revealElements.forEach(el => el.classList.add('is-visible'));
}

// --- Smooth scroll fallback for older browsers ---
document.addEventListener('click', (e) => {
	const a = e.target.closest('a[href^="#"]');
	if (!a) return;
	const href = a.getAttribute('href');
	if (href === '#' || href === '') return;
	const target = document.querySelector(href);
	if (target) {
		e.preventDefault();
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		history.replaceState(null, '', href);
	}
});

// --- Custom animated cursor ---
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let pos = { x: mouse.x, y: mouse.y };

window.addEventListener('mousemove', (e) => {
	mouse.x = e.clientX;
	mouse.y = e.clientY;
});

function rafLoop() {
	pos.x += (mouse.x - pos.x) * 0.18;
	pos.y += (mouse.y - pos.y) * 0.18;
	cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
	requestAnimationFrame(rafLoop);
}
requestAnimationFrame(rafLoop);

// Enlarge cursor on interactive elements
const interactiveSelector = 'a, button, .btn-gradient, .link-btn, .social-card, input, textarea';
document.querySelectorAll(interactiveSelector).forEach(el => {
	el.addEventListener('mouseenter', () => cursor.classList.add('enlarge'));
	el.addEventListener('mouseleave', () => cursor.classList.remove('enlarge'));
});

// Hide native cursor for larger viewports
if (window.matchMedia('(pointer:fine)').matches) {
	document.documentElement.style.cursor = 'none';
}

// --- Form micro-interactions ---
document.querySelectorAll('.colorful-form .input-group input, .colorful-form .input-group textarea')
	.forEach(input => {
		input.addEventListener('focus', () => input.parentElement.classList.add('focused'));
		input.addEventListener('blur', () => {
			input.parentElement.classList.remove('focused');
			if (input.value && input.value.trim().length) input.parentElement.classList.add('filled');
			else input.parentElement.classList.remove('filled');
		});
	});

// --- Social card micro-tilt ---
const tiltCards = document.querySelectorAll('.social-card');
tiltCards.forEach(card => {
	card.addEventListener('mousemove', (e) => {
		const rect = card.getBoundingClientRect();
		const mx = e.clientX - rect.left;
		const my = e.clientY - rect.top;
		const rx = (my - rect.height / 2) / 12;
		const ry = (mx - rect.width / 2) / -12;
		card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
	});
	card.addEventListener('mouseleave', () => card.style.transform = '');
});

// Small accessibility: close mobile nav on outside click if nav toggles are added later
document.addEventListener('click', (e) => {
	// placeholder for future nav toggle logic
});

// Export nothing; module script used to scope variables safely.

// --- Mobile nav toggle ---
const navToggle = document.querySelector('.nav-toggle');
const topNav = document.querySelector('.top-nav');
const primaryNav = document.getElementById('primary-navigation');
if (navToggle && topNav && primaryNav) {
	navToggle.addEventListener('click', () => {
		const expanded = navToggle.getAttribute('aria-expanded') === 'true';
		navToggle.setAttribute('aria-expanded', String(!expanded));
		topNav.classList.toggle('nav-open');
	});

	// close when clicking outside the nav list
	document.addEventListener('click', (e) => {
		if (!topNav.contains(e.target) && topNav.classList.contains('nav-open')) {
			topNav.classList.remove('nav-open');
			navToggle.setAttribute('aria-expanded', 'false');
		}
	});
}

// --- Profile parallax on pointer move ---
const profileWrap = document.querySelector('.profile-wrap');
const animatedPic = document.querySelector('.animated-pic');
if (profileWrap && animatedPic && window.matchMedia('(pointer:fine)').matches) {
	profileWrap.addEventListener('mousemove', (e) => {
		const rect = profileWrap.getBoundingClientRect();
		const dx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
		const dy = (e.clientY - rect.top) / rect.height - 0.5;
		const rx = (-dy) * 6; // rotateX
		const ry = dx * 6; // rotateY
		animatedPic.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
	});
	profileWrap.addEventListener('mouseleave', () => {
		animatedPic.style.transform = '';
	});
}


