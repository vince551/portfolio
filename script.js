const body=document.body;
const themeToggle=document.querySelector('.theme-toggle');
const emailButton=document.querySelector('.copy-email');
const toast=document.querySelector('.toast');

const sidebar=document.querySelector('.sidebar');
const header=document.querySelector('.mobile-header');
if(sidebar) sidebar.remove();

if(header){
header.innerHTML='<a class="brand" href="#top">VINCE<span>.</span></a><nav class="simple-nav" aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#stack">Stack</a><a href="#contact">Contact</a></nav><div class="nav-status"><i></i><span>Available</span></div>';
header.classList.add('simple-header');
}

const style=document.createElement('style');
style.textContent='.simple-header{display:flex!important;position:fixed!important;top:18px!important;left:50%!important;right:auto!important;transform:translateX(-50%);width:min(940px,calc(100% - 40px));height:58px!important;padding:0 14px 0 22px!important;align-items:center;justify-content:space-between;border:1px solid rgba(244,243,238,.12)!important;border-radius:999px!important;background:rgba(11,12,13,.68)!important;backdrop-filter:blur(22px)!important;z-index:70!important;transition:transform .35s ease,opacity .35s ease}.simple-header .brand{font:500 18px var(--mono);letter-spacing:-.07em;color:var(--ink);text-decoration:none}.simple-header .brand span{color:var(--accent);font-size:26px}.simple-nav{display:flex;align-items:center;gap:4px}.simple-nav a{color:var(--muted);text-decoration:none;font:10px var(--mono);text-transform:uppercase;letter-spacing:.08em;padding:10px 14px;border-radius:999px;transition:.25s}.simple-nav a:hover,.simple-nav a.active{color:var(--ink);background:rgba(244,243,238,.07)}.simple-nav a.active:after{content:"";display:block;width:3px;height:3px;margin:4px auto -7px;border-radius:50%;background:var(--accent)}.nav-status{display:flex;align-items:center;gap:7px;font:9px var(--mono);text-transform:uppercase;color:var(--muted)}.nav-status i{width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 5px rgba(200,255,69,.08)}.nav-hidden .simple-header{transform:translate(-50%,-90px);opacity:.15}main{margin-left:0!important}.hero{padding-top:100px!important}@media(max-width:700px){.simple-header{top:12px!important;width:calc(100% - 24px);height:52px!important;padding:0 8px 0 17px!important}.simple-nav{display:none}.nav-status span{display:none}.nav-status{width:30px;height:30px;justify-content:center;border:1px solid var(--line);border-radius:50%}.hero{padding-top:82px!important}}';
document.head.appendChild(style);

const savedTheme=localStorage.getItem('vince-theme');
if(savedTheme==='dark') body.classList.add('dark');
themeToggle?.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('vince-theme',body.classList.contains('dark')?'dark':'light')});

emailButton?.addEventListener('click',async()=>{const email=emailButton.dataset.copy;try{await navigator.clipboard.writeText(email);toast.textContent='Email copied'}catch{window.location.href='mailto:'+email;toast.textContent='Opening email'}toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)});

const navLinks=[...document.querySelectorAll('.simple-nav a')];
const sections=navLinks.map(x=>document.querySelector(x.getAttribute('href'))).filter(Boolean);
const sectionObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id))})},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(x=>sectionObserver.observe(x));

let lastScroll=window.scrollY;
window.addEventListener('scroll',()=>{const y=window.scrollY;if(y>lastScroll&&y>180)body.classList.add('nav-hidden');else body.classList.remove('nav-hidden');lastScroll=y},{passive:true});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const lightbox=document.querySelector('.lightbox');
const lightboxTitle=document.querySelector('.lightbox-card h2');
const closeLightbox=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow=''};
document.querySelectorAll('[data-project]').forEach(card=>card.addEventListener('click',()=>{lightboxTitle.textContent=card.dataset.project;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));
document.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});

const cursor=document.createElement('div');cursor.className='cursor-dot';document.body.appendChild(cursor);
if(matchMedia('(pointer:fine)').matches)document.addEventListener('mousemove',e=>{cursor.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)'});else cursor.remove();
