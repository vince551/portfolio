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

  /* FINAL POLISH — preserve the existing design, improve hierarchy and touch experience */
  .topbar{transition:transform .35s ease,box-shadow .35s ease,border-color .35s ease;will-change:transform}.topbar:hover{border-color:rgba(192,132,252,.22)!important;box-shadow:0 22px 80px rgba(0,0,0,.5),0 0 35px rgba(139,92,246,.08)!important}
  .logo{font-size:16px}.logo span{ text-shadow:0 0 18px rgba(192,132,252,.35)}
  .hero{isolation:isolate}.hero-grid{position:relative;z-index:1}.hero h1{max-width:820px;text-wrap:balance}.hero-copy{max-width:610px}.actions .btn{min-height:48px}.hero-note{row-gap:10px}
  .section-head{margin-bottom:38px}.section h2{text-wrap:balance}.intro{font-size:14px}
  .portrait-frame{transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .4s ease}.portrait-frame:hover{transform:rotate(0deg) translateY(-5px);box-shadow:0 38px 120px rgba(0,0,0,.5),0 0 45px rgba(139,92,246,.12)}
  .float-card{transition:transform .35s ease,border-color .35s ease}.float-card:hover{transform:translateY(-4px);border-color:rgba(192,132,252,.25)}
  .build,.project,.fact,.proof-card,.explore-card{will-change:transform}.build,.project{transform-origin:center bottom}
  .build h3,.project-body h3{ text-wrap:balance}.project-body{position:relative}.project-link{align-items:center;gap:7px;transition:gap .25s ease,color .25s ease}.project:hover .project-link{gap:11px;color:#dfccff}
  .stack span,.pills span{transition:transform .2s ease,border-color .2s ease,background .2s ease}.stack span:hover,.pills span:hover{transform:translateY(-2px);border-color:rgba(192,132,252,.28)}
  .activity-item{transition:background .25s ease,transform .25s ease,border-color .25s ease}.activity-item:hover{transform:translateX(4px)}
  .terminal-trigger{transition:transform .25s ease,background .25s ease,border-color .25s ease}.terminal-trigger:hover{transform:translateY(-2px);border-color:rgba(192,132,252,.28)!important}
  .mobile-action-bar{box-shadow:0 -18px 50px rgba(0,0,0,.35),0 0 30px rgba(139,92,246,.05)!important}
  @media(max-width:900px){.wrap{width:min(100% - 32px,720px)}.hero-grid{grid-template-columns:1fr;gap:44px}.hero-art{max-width:420px}.profile{grid-template-columns:1fr;gap:42px}.build-grid{grid-template-columns:repeat(2,1fr)}.proof{grid-template-columns:1fr}.explore{grid-template-columns:1fr}.project:nth-child(n){grid-column:span 6}}
  @media(max-width:620px){
    .topbar{top:9px;width:calc(100% - 22px);padding:8px 9px 8px 15px;min-height:58px}.logo{font-size:15px}.nav{display:none}.menu{display:block}.topbar .talk{padding:10px 17px!important;font-size:12px}
    .hero{min-height:auto;padding:116px 0 68px}.hero:before{width:460px;height:460px;right:-300px;top:15%}.hero h1{font-size:clamp(47px,14vw,62px);line-height:.95;letter-spacing:-.07em;margin:17px 0 22px}.eyebrow{font-size:9px;letter-spacing:.14em;line-height:1.8}.hero-copy{font-size:15.5px;line-height:1.72}.actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:26px}.actions .btn{width:100%;padding:13px 12px;font-size:12px}.hero-note{gap:8px 14px;margin-top:26px;font-size:8px;line-height:1.7}.hero-art{margin-top:8px;max-width:360px;padding:0 8px}.portrait-frame{border-radius:30px}.portrait-inner{border-radius:29px}.portrait-label{left:14px;bottom:14px;font-size:8px}.float-card{right:-2px;bottom:38px;padding:10px 12px;border-radius:13px}.float-card b{font-size:11px}.float-card span{font-size:9px}.orb.one{width:95px;height:95px;right:-20px;top:-30px}.orb.two{width:125px;height:125px;left:-45px;bottom:-55px}
    .section{padding:78px 0}.section-head{display:block;margin-bottom:30px}.section h2{font-size:42px;line-height:.98}.intro{margin-top:15px;font-size:13px}.profile{gap:32px}.profile-copy{font-size:15px;line-height:1.75}.facts{grid-template-columns:repeat(3,1fr);gap:7px}.fact{padding:13px 10px;border-radius:15px}.fact b{font-size:17px}.fact span{font-size:8px;line-height:1.35}.build-grid{grid-template-columns:1fr;gap:10px}.build{min-height:0;padding:21px;border-radius:20px}.icon{margin:25px 0 16px}.project:nth-child(n){grid-column:span 12}.project{border-radius:22px}.project-art{height:190px}.project-body{padding:21px}.project-body h3{font-size:24px}.project-body p{font-size:13px}.proof-card{min-height:0;padding:25px;border-radius:22px}.proof-card h3{font-size:30px}.explore-card{padding:24px;border-radius:21px}
    .terminal-trigger{right:14px!important;bottom:82px!important;font-size:10px!important}.mobile-action-bar{bottom:10px!important;left:10px!important;right:10px!important;border-radius:22px!important;padding:7px!important;z-index:240!important}.mobile-action-bar a{min-height:52px!important;border-radius:17px!important}.mobile-action-bar .mobile-action-main{box-shadow:0 8px 25px rgba(124,58,237,.3)}
  }
  @media(max-width:390px){.hero h1{font-size:44px}.actions{grid-template-columns:1fr}.hero-note{font-size:7.5px}.facts{grid-template-columns:1fr 1fr}.fact:last-child{grid-column:1/-1}.topbar .talk{padding:9px 13px!important}.section h2{font-size:38px}}
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