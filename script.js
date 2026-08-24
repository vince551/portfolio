const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const body=document.body, topbar=$('.topbar'), menu=$('.mobile-menu'), menuBtn=$('.menu-toggle');
let lastY=scrollY;
addEventListener('scroll',()=>{const y=scrollY;if(y>120&&y>lastY)topbar.classList.add('hidden');else topbar.classList.remove('hidden');lastY=y},{passive:true});
menuBtn?.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuBtn.textContent=open?'CLOSE':'MENU';menuBtn.setAttribute('aria-expanded',open)});
$$('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn.textContent='MENU';menuBtn.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});$$('.reveal').forEach(e=>observer.observe(e));
const modal=$('.project-modal'), modalTitle=$('.modal-card h2'), modalDesc=$('.modal-desc'), modalStack=$('.modal-stack'), modalLive=$('.modal-live');
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');body.style.overflow=''}
$$('.project').forEach(card=>card.addEventListener('click',()=>{modalTitle.textContent=card.dataset.project;modalDesc.textContent=card.dataset.desc;modalStack.textContent=card.dataset.stack;modalLive.href=card.dataset.live||`https://github.com/vince551`;modal.classList.add('open');modal.setAttribute('aria-hidden','false');body.style.overflow='hidden'}));
$('.modal-close')?.addEventListener('click',closeModal);modal?.addEventListener('click',e=>e.target===modal&&closeModal());
$('.modal-copy')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(modalTitle.textContent);showToast('Project name copied')}catch{showToast('Copy unavailable')}});
function showToast(text){const t=$('.toast');t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1600)}
const command=$('.command'), input=$('#command-input');
function openCommand(){command.classList.add('open');command.setAttribute('aria-hidden','false');input.value='';setTimeout(()=>input.focus(),50)}function closeCommand(){command.classList.remove('open');command.setAttribute('aria-hidden','true')}
addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openCommand()}if(e.key==='Escape'){closeCommand();closeModal()}});command?.addEventListener('click',e=>e.target===command&&closeCommand());
input?.addEventListener('input',()=>{const q=input.value.toLowerCase();$$('.command-items a').forEach(a=>a.style.display=a.textContent.toLowerCase().includes(q)?'block':'none')});
$$('.command-items a').forEach(a=>a.addEventListener('click',closeCommand));
async function loadGitHub(){try{const [u,r]=await Promise.all([fetch('https://api.github.com/users/vince551').then(x=>x.json()),fetch('https://api.github.com/users/vince551/repos?per_page=6&sort=updated').then(x=>x.json())]);$('#repo-count').textContent=u.public_repos??'—';$('#followers').textContent=u.followers??'—';$('#following').textContent=u.following??'—';const repos=Array.isArray(r)?r:[];let stars=repos.reduce((n,x)=>n+(x.stargazers_count||0),0);$('#stars').textContent=stars;$('#repo-list').innerHTML=repos.slice(0,6).map(x=>`<a href="${x.html_url}" target="_blank" rel="noreferrer"><strong>${x.name}</strong><span>${(x.description||'Open-source project').slice(0,72)}</span></a>`).join('')||'<span>No public repositories found.</span>'}catch{$('#repo-list').innerHTML='<span>GitHub data is temporarily unavailable. <a href="https://github.com/vince551">Open profile ↗</a></span>'}}
loadGitHub();
if(matchMedia('(pointer:fine)').matches){const cursor=document.createElement('div');cursor.className='cursor-dot';document.body.appendChild(cursor);addEventListener('mousemove',e=>{cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px)`})}
