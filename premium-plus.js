document.addEventListener('DOMContentLoaded',()=>{
  const style=document.createElement('style');
  style.textContent=`
  :root{--ink:#f7f4ff;--muted:#aaa3b5;--line:rgba(255,255,255,.10);--paper:#08070b;--soft:#0e0b14;--green:#8b5cf6;--green2:#a78bfa;--lime:#c084fc;--shadow:0 30px 100px rgba(92,43,160,.20);--radius:28px}
  html{background:#08070b}body{background:#08070b!important;color:#f7f4ff!important;overflow-x:hidden}
  body:before{content:'';position:fixed;inset:0;pointer-events:none;z-index:-2;background:radial-gradient(circle at 12% 8%,rgba(139,92,246,.14),transparent 28%),radial-gradient(circle at 88% 38%,rgba(192,132,252,.10),transparent 30%),radial-gradient(circle at 50% 100%,rgba(99,102,241,.08),transparent 32%)}
  body:after{content:'';position:fixed;inset:0;pointer-events:none;z-index:-1;opacity:.22;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:44px 44px;mask-image:linear-gradient(to bottom,black,transparent 75%)}
  .topbar{background:rgba(8,7,11,.78)!important;border-color:rgba(255,255,255,.12)!important;box-shadow:0 18px 70px rgba(0,0,0,.45)!important}
  .nav a{color:#aaa3b5}.nav a:hover,.nav a.active{background:rgba(139,92,246,.14);color:#fff}.nav .talk{background:linear-gradient(135deg,#8b5cf6,#c084fc)!important;color:#fff!important;box-shadow:0 8px 24px rgba(139,92,246,.25)}
  .hero{background:radial-gradient(circle at 72% 18%,rgba(139,92,246,.18),transparent 30%),linear-gradient(180deg,#0b0910 0%,#08070b 75%)!important}
  .eyebrow,.kicker{color:#c084fc!important}.hero h1{color:#fff}.hero h1 .accent{color:#a78bfa!important;text-shadow:0 0 35px rgba(167,139,250,.22)}.hero-copy,.section-intro,.profile-copy,.build p,.project-body p,.contact p{color:#aaa3b5!important}
  .btn{border-color:rgba(255,255,255,.11)!important;background:rgba(255,255,255,.035)!important;color:#fff!important;backdrop-filter:blur(12px)}.btn.primary{background:linear-gradient(135deg,#7c3aed,#a855f7)!important;border-color:transparent!important;box-shadow:0 14px 40px rgba(124,58,237,.28)}.btn.primary:hover{background:linear-gradient(135deg,#8b5cf6,#c084fc)!important}.btn.secondary:hover{border-color:rgba(167,139,250,.45)!important}
  .hero-note span:before{color:#c084fc!important}.portrait-card{background:#15101d!important;border-color:rgba(192,132,252,.24)!important;box-shadow:0 30px 100px rgba(73,35,125,.28)!important}.portrait-card:after{background:linear-gradient(180deg,transparent 50%,rgba(8,4,14,.38))!important}.portrait-label{background:rgba(12,9,17,.82)!important;color:#eee!important;border:1px solid rgba(255,255,255,.08)}.leaf{background:radial-gradient(circle,#c084fc,#7c3aed)!important;box-shadow:0 0 80px rgba(168,85,247,.35)}.ring{border-color:rgba(192,132,252,.35)!important}
  .section{background:#08070b!important}.section.soft{background:#0e0b14!important}.fact,.build,.project,.form{background:linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.018))!important;border-color:rgba(255,255,255,.09)!important;box-shadow:none}.fact:hover,.build:hover,.project:hover{border-color:rgba(139,92,246,.38)!important;box-shadow:0 30px 90px rgba(70,35,120,.18)!important}.fact span,.project-body p{color:#9690a1!important}.build-icon{background:rgba(139,92,246,.12)!important;color:#c084fc!important}.build-num{color:#756d80!important}.build h3,.project-body h3,.section h2,.contact h2{color:#fff!important}
  .project-art{background:linear-gradient(135deg,#140d20,#09070d)!important;color:#c084fc!important}.project:nth-child(2) .project-art,.project:nth-child(3) .project-art,.project:nth-child(4) .project-art{background:linear-gradient(135deg,#100a18,#1b1028)!important;color:#a78bfa!important}.project-art .tag{border-color:currentColor}.stack span,.pills span{background:rgba(139,92,246,.10)!important;color:#c7b8da!important}.proof-card{background:linear-gradient(145deg,#100b18,#08070b)!important;border:1px solid rgba(255,255,255,.09)}.green-card{background:linear-gradient(135deg,#6d28d9,#a855f7)!important}.green-card p{color:#eee!important}.proof-list .proof-item{border-color:rgba(255,255,255,.08)}.progress{background:linear-gradient(90deg,#7c3aed,#c084fc)!important}.footer{background:#08070b!important;border-color:rgba(255,255,255,.08)!important}.footer a{color:#c084fc!important}
  .premium-proof,.premium-plus-card,.github-activity,.explore-pills span{border-color:rgba(255,255,255,.08)!important;background:linear-gradient(145deg,rgba(139,92,246,.07),rgba(255,255,255,.018))!important}.premium-plus-card:hover,.explore-pills span:hover{border-color:rgba(192,132,252,.4)!important}.proof-eyebrow{color:#c084fc!important}.proof-stats div{border-color:rgba(255,255,255,.08)!important}.activity-item{color:#ddd}.activity-item:hover{background:rgba(139,92,246,.08)}
  .terminal-trigger{background:rgba(8,7,11,.78)!important;border-color:rgba(255,255,255,.1)!important}.terminal-trigger span,.terminal-input span{color:#c084fc!important}.terminal-window{border-color:rgba(167,139,250,.22)!important}.mobile-action-bar{background:rgba(8,7,11,.82)!important;border-color:rgba(255,255,255,.1)!important}.mobile-action-bar .mobile-action-main{background:linear-gradient(135deg,#7c3aed,#c084fc)!important}.premium-intro{background:#08070b!important}.intro-inner b{color:#c084fc!important}
  @media(max-width:620px){.topbar{top:10px}.hero{padding-top:118px}.hero h1{font-size:50px;letter-spacing:-.065em}.hero-copy{font-size:16px;line-height:1.7}.portrait-card{transform:rotate(1deg)}.section{padding:82px 0}.mobile-dock{display:none!important}.mobile-action-bar{display:grid!important}}
  @media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;animation:none!important;transition:none!important}}
  `;
  document.head.appendChild(style);

  const intro=document.createElement('div');
  intro.className='premium-intro';
  intro.innerHTML='<div class="intro-inner"><span>VINCE.</span><b>TECHNOLOGY × CREATIVITY × IMPACT</b></div>';
  document.body.prepend(intro);
  requestAnimationFrame(()=>setTimeout(()=>intro.classList.add('is-done'),700));

  const terminal=document.createElement('button');
  terminal.className='terminal-trigger';
  terminal.type='button';
  terminal.innerHTML='<span>›_</span> whoami';
  document.body.appendChild(terminal);
  const modal=document.createElement('div');
  modal.className='terminal-modal';
  modal.innerHTML='<div class="terminal-window"><button class="terminal-close" aria-label="Close terminal">×</button><div class="terminal-bar"><span></span><span></span><span></span><b>vince@portfolio:~</b></div><div class="terminal-body"><div id="terminal-output"></div><div class="terminal-input"><span>vince@portfolio:~$</span><input id="terminal-command" autocomplete="off" spellcheck="false"></div></div></div>';
  document.body.appendChild(modal);
  const output=modal.querySelector('#terminal-output'),input=modal.querySelector('#terminal-command');
  const commands={whoami:['Vincent Odhiambo','Web developer · digital creator · technology builder'],projects:['Scroll to Selected Work to explore the portfolio projects.'],skills:['Web development','UI / UX','JavaScript','Git','Linux & systems learning'],contact:['Scroll to Contact or use the email action.'],help:['whoami  projects  skills  contact  clear']};
  function run(v){v=v.trim().toLowerCase();if(v==='clear'){output.innerHTML='';return}const lines=commands[v]||['Command not found. Try: help'];output.innerHTML+=`<div class="terminal-command">vince@portfolio:~$ ${v||'whoami'}</div>`+lines.map(x=>`<div>${x}</div>`).join('');output.scrollTop=output.scrollHeight}
  function open(){modal.classList.add('is-open');document.body.style.overflow='hidden';output.innerHTML='';run('whoami');input.value='';setTimeout(()=>input.focus(),80)}
  function close(){modal.classList.remove('is-open');document.body.style.overflow=''}
  terminal.addEventListener('click',open);modal.querySelector('.terminal-close').addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close()});input.addEventListener('keydown',e=>{if(e.key==='Enter'){run(input.value);input.value=''}});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});

  const mobile=document.createElement('nav');
  mobile.className='mobile-action-bar';
  mobile.setAttribute('aria-label','Quick actions');
  mobile.innerHTML='<a href="#work"><i class="ph ph-squares-four"></i><span>Work</span></a><a href="https://wa.me/254718896349" target="_blank" rel="noopener noreferrer"><i class="ph ph-whatsapp-logo"></i><span>WhatsApp</span></a><a href="#contact" class="mobile-action-main"><i class="ph ph-paper-plane-tilt"></i><span>Contact</span></a><a href="https://github.com/vince551" target="_blank" rel="noopener noreferrer"><i class="ph ph-github-logo"></i><span>GitHub</span></a>';
  document.body.appendChild(mobile);

  const repos=document.querySelector('#github-repos'),followers=document.querySelector('#github-followers'),status=document.querySelector('#activity-status'),updated=document.querySelector('#github-updated'),list=document.querySelector('#activity-list');
  async function github(){try{const u=await fetch('https://api.github.com/users/vince551');if(!u.ok)throw 0;const user=await u.json();if(repos)repos.textContent=user.public_repos??'—';if(followers)followers.textContent=user.followers??'—';const r=await fetch('https://api.github.com/users/vince551/repos?sort=updated&per_page=5');if(!r.ok)throw 0;const data=await r.json();if(list)list.innerHTML=data.map((repo,i)=>`<a class="activity-item" href="${repo.html_url}" target="_blank" rel="noopener noreferrer"><span class="activity-index">0${i+1}</span><span><strong>${repo.name}</strong><small>${repo.language||'Project'} · updated ${new Date(repo.updated_at).toLocaleDateString()}</small></span><i class="ph ph-arrow-up-right"></i></a>`).join('');if(status)status.textContent='LIVE';if(updated)updated.textContent='LIVE'}catch(e){if(status)status.textContent='UNAVAILABLE'}}
  github();
});