const body=document.body;
const themeToggle=document.querySelector('.theme-toggle');
const emailButton=document.querySelector('.copy-email');
const toast=document.querySelector('.toast');
const menuToggle=document.querySelector('.menu-toggle');
const sidebar=document.querySelector('.sidebar');

const savedTheme=localStorage.getItem('vince-theme');
if(savedTheme==='dark') body.classList.add('dark');

themeToggle?.addEventListener('click',()=>{
  body.classList.toggle('dark');
  localStorage.setItem('vince-theme',body.classList.contains('dark')?'dark':'light');
});

emailButton?.addEventListener('click',async()=>{
  const email=emailButton.dataset.copy;
  try{
    await navigator.clipboard.writeText(email);
    toast.textContent='Email copied';
  }catch{
    window.location.href=`mailto:${email}`;
    toast.textContent='Opening email';
  }
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),1800);
});

menuToggle?.addEventListener('click',()=>{
  const open=sidebar.classList.toggle('mobile-open');
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.textContent=open?'CLOSE':'MENU';
});

document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>{
  sidebar.classList.remove('mobile-open');
  if(menuToggle){menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='MENU';}
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible');});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const lightbox=document.querySelector('.lightbox');
const lightboxTitle=document.querySelector('.lightbox-card h2');
const closeLightbox=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';};

document.querySelectorAll('[data-project]').forEach(card=>card.addEventListener('click',()=>{
  lightboxTitle.textContent=card.dataset.project;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}));
document.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox) closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeLightbox();});

const cursor=document.createElement('div');
cursor.className='cursor-dot';
document.body.appendChild(cursor);
if(matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;});
}else cursor.remove();
