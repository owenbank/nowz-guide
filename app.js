const TOPBAR=parseInt(getComputedStyle(document.documentElement).getPropertyValue('--topbar'))||57;
const sections=[...document.querySelectorAll('.section')];
const sectionIds=new Set(sections.map(s=>s.id));
const navlinks=[...document.querySelectorAll('.leftnav a')];
const navmap=new Map(navlinks.map(a=>[a.getAttribute('data-target'),a]));
const rtoc=document.getElementById('righttoc');
let subObserver=null;
let currentPage=null;

// scroll to a heading within the currently shown page
function scrollToId(id){
  const el=document.getElementById(id);
  if(!el)return;
  const top=el.getBoundingClientRect().top+window.scrollY-TOPBAR-14;
  window.scrollTo({top,behavior:'smooth'});
}

// build the floating right bookmark for the shown page
function buildRightTOC(sec){
  const subs=[...sec.querySelectorAll('h2.h2, h3.h3')];
  if(!subs.length){rtoc.innerHTML='';rtoc.style.visibility='hidden';return;}
  rtoc.style.visibility='visible';
  let html='';
  subs.forEach((s,i)=>{
    if(!s.id) s.id=sec.id+'-h'+i;
    const cls=s.classList.contains('h3')?'sub':'';
    html+=`<a role="link" tabindex="0" data-scroll="${s.id}" class="${cls}">${s.textContent}</a>`;
  });
  rtoc.innerHTML=html;
}

// track which heading is in view -> highlight bookmark
let spyHeads=[], spyTicking=false;
function observeSubs(sec){
  spyHeads=[...sec.querySelectorAll('h2.h2, h3.h3')].filter(h=>h.id);
  updateSpy();
}
function updateSpy(){
  if(!spyHeads.length)return;
  const line=TOPBAR+34;
  let activeId=spyHeads[0].id;
  for(const hd of spyHeads){
    if(hd.getBoundingClientRect().top<=line) activeId=hd.id; else break;
  }
  if(window.innerHeight+window.scrollY >= document.documentElement.scrollHeight-2)
    activeId=spyHeads[spyHeads.length-1].id;
  rtoc.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.getAttribute('data-scroll')===activeId));
}
window.addEventListener('scroll',()=>{
  if(spyTicking)return; spyTicking=true;
  requestAnimationFrame(()=>{updateSpy();spyTicking=false;});
},{passive:true});
window.addEventListener('resize',()=>{requestAnimationFrame(updateSpy);},{passive:true});

// === PAGE SWITCH (left menu) ===
function showPage(id){
  if(!sectionIds.has(id))return;
  currentPage=id;
  sections.forEach(s=>{s.style.display = s.id===id ? '' : 'none';});
  navlinks.forEach(a=>a.classList.toggle('active',a.getAttribute('data-target')===id));
  const sec=document.getElementById(id);
  buildRightTOC(sec);
  window.scrollTo({top:0,behavior:'auto'});
  observeSubs(sec);
  // highlight first bookmark item
  const first=rtoc.querySelector('a');
  if(first)first.classList.add('active');
}

// clicks: left menu = switch page, right bookmark = scroll within page
document.addEventListener('click',e=>{
  const page=e.target.closest('[data-target]');
  if(page){e.preventDefault();showPage(page.getAttribute('data-target'));closeNav();return;}
  const jump=e.target.closest('[data-scroll]');
  if(jump){e.preventDefault();scrollToId(jump.getAttribute('data-scroll'));}
});
document.addEventListener('keydown',e=>{
  if(e.key!=='Enter'&&e.key!==' ')return;
  const page=e.target.closest('[data-target]');
  if(page){e.preventDefault();showPage(page.getAttribute('data-target'));closeNav();return;}
  const jump=e.target.closest('[data-scroll]');
  if(jump){e.preventDefault();scrollToId(jump.getAttribute('data-scroll'));}
});

// mobile nav drawer
const tg=document.getElementById('navToggle'),ln=document.getElementById('leftnav'),sc=document.getElementById('scrim');
function closeNav(){ln.classList.remove('open');sc.classList.remove('show');tg.setAttribute('aria-expanded','false')}
tg.addEventListener('click',()=>{const o=ln.classList.toggle('open');sc.classList.toggle('show',o);tg.setAttribute('aria-expanded',o)});
sc.addEventListener('click',closeNav);

// collapsible nav group header (not a page)
document.querySelectorAll('.nav-grouphead').forEach(h=>{
  const kids=document.querySelector(`[data-children="${h.dataset.group}"]`);
  h.addEventListener('click',()=>{
    const open=h.getAttribute('aria-expanded')==='true';
    h.setAttribute('aria-expanded',String(!open));
    kids.style.display=open?'none':'block';
  });
});

// === LIGHTBOX (click screenshot to enlarge / zoom / browse) ===
const lb=document.getElementById('lb'),lbImg=document.getElementById('lbImg'),
  lbCap=document.getElementById('lbCap'),lbCount=document.getElementById('lbCount'),
  lbStage=document.getElementById('lbStage'),lbPrev=document.getElementById('lbPrev'),lbNext=document.getElementById('lbNext');
let gallery=[], gi=0, scale=1, tx=0, ty=0;
const MIN=1, MAX=4;

function applyTransform(){lbImg.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;
  lbImg.classList.toggle('zoom',scale>1.01);}
function resetZoom(){scale=1;tx=0;ty=0;applyTransform();}
function clampPan(){
  const r=lbStage.getBoundingClientRect();
  const w=lbImg.offsetWidth*scale, h=lbImg.offsetHeight*scale;
  const mx=Math.max(0,(w-r.width)/2), my=Math.max(0,(h-r.height)/2);
  tx=Math.max(-mx,Math.min(mx,tx)); ty=Math.max(-my,Math.min(my,ty));
}
function zoomBy(d){scale=Math.max(MIN,Math.min(MAX,scale+d));
  if(scale<=1.01){resetZoom();}else{clampPan();applyTransform();}}
function loadShot(i){
  gi=(i+gallery.length)%gallery.length;
  const s=gallery[gi];
  lbImg.src=s.src; lbImg.alt=s.alt||'';
  lbImg.classList.toggle('onpanel', !!s.gray);
  lbImg.classList.toggle('bl-l', !!s.left);
  lbImg.classList.toggle('bl-r', !!s.right);
  lbImg.classList.toggle('bl-b', !!s.bottom);
  lbCap.textContent=s.alt||'';
  lbCount.textContent=gallery.length>1?`${gi+1} / ${gallery.length}`:'';
  const multi=gallery.length>1;
  lbPrev.hidden=!multi; lbNext.hidden=!multi;
  resetZoom();
}
function openLightbox(imgEl){
  // gallery = real screenshots on the current page; carry whether each sits on a gray panel
  const page=document.getElementById(currentPage);
  gallery=[...page.querySelectorAll('.shot img')].map(im=>{
    const box=im.closest('.shot');
    const bg=box?getComputedStyle(box).backgroundColor:'';
    const gray=bg && bg!=='rgba(0, 0, 0, 0)' && bg!=='transparent';
    const c=box?box.classList:{contains:()=>false};
    const left  = c.contains('fl')||c.contains('bleedleft');
    const right = c.contains('fr')||c.contains('bleedright');
    const bottom= c.contains('fb')||c.contains('bleedbottom');
    return {src:im.currentSrc||im.src, alt:im.alt, gray:gray, left, right, bottom};
  });
  const idx=gallery.findIndex(s=>s.src===(imgEl.currentSrc||imgEl.src));
  loadShot(idx<0?0:idx);
  lb.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeLightbox(){lb.classList.remove('open');document.body.style.overflow='';}

// open on screenshot click
document.addEventListener('click',e=>{
  const img=e.target.closest('.shot img');
  if(img){openLightbox(img);}
});
document.getElementById('lbClose').addEventListener('click',closeLightbox);
lbPrev.addEventListener('click',()=>loadShot(gi-1));
lbNext.addEventListener('click',()=>loadShot(gi+1));
document.getElementById('lbZoomIn').addEventListener('click',()=>zoomBy(0.5));
document.getElementById('lbZoomOut').addEventListener('click',()=>zoomBy(-0.5));
// click toggles centered zoom (ignored right after a drag)
lbImg.addEventListener('click',e=>{
  if(moved){moved=false;return;}
  if(scale>1.01){resetZoom();}else{scale=2.4;tx=0;ty=0;clampPan();applyTransform();}
});
// wheel zoom (centered)
lbStage.addEventListener('wheel',e=>{
  if(!lb.classList.contains('open'))return;
  e.preventDefault(); zoomBy(e.deltaY<0?0.3:-0.3);
},{passive:false});
// drag to pan
let dragging=false,moved=false,sx=0,sy=0;
lbImg.addEventListener('pointerdown',e=>{
  if(scale<=1.01)return;
  dragging=true;moved=false;sx=e.clientX-tx;sy=e.clientY-ty;
  lbImg.classList.add('grabbing'); lbImg.setPointerCapture(e.pointerId);
});
lbImg.addEventListener('pointermove',e=>{
  if(!dragging)return; moved=true;
  tx=e.clientX-sx;ty=e.clientY-sy;clampPan();applyTransform();
});
lbImg.addEventListener('pointerup',()=>{dragging=false;lbImg.classList.remove('grabbing');});
lbImg.addEventListener('pointercancel',()=>{dragging=false;lbImg.classList.remove('grabbing');});
lb.addEventListener('click',e=>{if(e.target===lb||e.target===lbStage)closeLightbox();});
document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('open'))return;
  if(e.key==='Escape')closeLightbox();
  else if(e.key==='ArrowLeft'&&gallery.length>1)loadShot(gi-1);
  else if(e.key==='ArrowRight'&&gallery.length>1)loadShot(gi+1);
  else if(e.key==='+'||e.key==='=')zoomBy(0.5);
  else if(e.key==='-')zoomBy(-0.5);
});

// start on the NOWZ 시작하기 page (first section)
showPage('signup');
(function(){const lg=document.querySelector('.logo');if(lg)lg.addEventListener('click',()=>{showPage('signup');window.scrollTo({top:0,behavior:'smooth'});});})();