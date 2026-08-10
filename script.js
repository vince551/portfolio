document.addEventListener('DOMContentLoaded', () => {
    if (window.AOS) {
        AOS.init({ once: true, duration: 800, offset: 100 });
    }

    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const navbar = document.getElementById('navbar');

    function setMenu(open) {
        if (!mobileMenu) return;
        mobileMenu.classList.toggle('translate-x-full', !open);
        mobileMenu.setAttribute('aria-hidden', String(!open));
        menuBtn?.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
        if (open) closeMenuBtn?.focus();
        else menuBtn?.focus();
    }

    menuBtn?.addEventListener('click', () => setMenu(true));
    closeMenuBtn?.addEventListener('click', () => setMenu(false));
    mobileLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('translate-x-full')) setMenu(false);
    });

    const updateNavbar = () => {
        const scrolled = window.scrollY > 50;
        navbar?.classList.toggle('shadow-lg', scrolled);
        navbar?.classList.toggle('bg-dark-900/95', scrolled);
        navbar?.classList.toggle('scrolled', scrolled);

        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
        document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
    };
    window.addEventListener('scroll', updateNavbar, { passive: true });
    window.addEventListener('resize', updateNavbar, { passive: true });
    updateNavbar();

    const sections = [...document.querySelectorAll('section[id]')];
    const navLinks = [...document.querySelectorAll('.nav-link')];
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navLinks.forEach(link => {
                const active = link.getAttribute('href') === `#${entry.target.id}`;
                link.classList.toggle('text-white', active);
                link.classList.toggle('text-gray-400', !active);
                link.setAttribute('aria-current', active ? 'page' : 'false');
            });
        });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(section => observer.observe(section));

    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    form?.addEventListener('submit', event => {
        event.preventDefault();
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const message = form.elements.message.value.trim();
        if (!name || !email || !message) {
            if (status) { status.textContent = 'Please complete all fields.'; status.className = 'text-sm text-center text-brand-pink'; }
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            if (status) { status.textContent = 'Please enter a valid email address.'; status.className = 'text-sm text-center text-brand-pink'; }
            return;
        }
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Opening email...'; }
        const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:architectvince7@gmail.com?subject=${subject}&body=${body}`;
        if (status) { status.textContent = 'Your email app should open with the message ready to send.'; status.className = 'text-sm text-center text-brand-cyan'; }
        setTimeout(() => {
            if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send Message'; }
        }, 1500);
    });

    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
});
