document.addEventListener('DOMContentLoaded', () => {
	// Initialize Animate On Scroll (AOS)
	AOS.init({
		once: true,
		duration: 800,
		offset: 100,
	});

	// Mobile Menu Logic
	const menuBtn = document.getElementById('menu-btn');
	const closeMenuBtn = document.getElementById('close-menu-btn');
	const mobileMenu = document.getElementById('mobile-menu');
	const mobileLinks = document.querySelectorAll('.mobile-link');
	const navbar = document.getElementById('navbar');

	function toggleMenu() {
		if (mobileMenu.classList.contains('translate-x-full')) {
			mobileMenu.classList.remove('translate-x-full');
			document.body.style.overflow = 'hidden'; // Prevent scrolling
		} else {
			mobileMenu.classList.add('translate-x-full');
			document.body.style.overflow = '';
		}
	}

	menuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);

	mobileLinks.forEach(link => {
		link.addEventListener('click', toggleMenu);
	});

	// Smart Navbar (Glass effect on scroll)
	window.addEventListener('scroll', () => {
		if (window.scrollY > 50) {
			navbar.classList.add('shadow-lg', 'bg-dark-900/95');
		} else {
			navbar.classList.remove('shadow-lg', 'bg-dark-900/95');
		}
	});

	// Simple "Hire Me" button console log or interaction
	const hireBtns = document.querySelectorAll('a[href="#contact"]');
	hireBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			console.log('User clicked Hire Me');
		});
	});
});
