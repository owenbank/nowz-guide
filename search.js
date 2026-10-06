// ===== functional guide search (enhanced) =====
(function(){
  const input=document.getElementById('gsearch'), box=document.getElementById('searchResults');
  if(!input||!box)return;

  const CHO=['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
  const CHOSET='ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
  function chosung(s){let o='';for(const ch of s){const c=ch.charCodeAt(0);if(c>=0xAC00&&c<=0xD7A3){o+=CHO[Math.floor((c-0xAC00)/588)];}else{o+=ch.toLowerCase();}}return o;}
  const norm=s=>s.toLowerCase().replace(/\s+/g,' ').trim();
  const escR=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const SYN={
    '돈':['비용','예치금','송금','지급','환급'],'비용':['예치금','송금','지급'],
    '부모':['학부모','보호자'],'학부모':['보호자'],'선생':['매니저'],'선생님':['매니저'],
    '점수':['성적','g3','표준점수'],'성적':['g3','표준점수'],'출석':['등원','귀가'],'등교':['등원'],
    '숙제':['과제'],'플래너':['주간계획','학습'],'용돈':['zpt','포인트','지급'],
    '벌':['페널티'],'상':['혜택','보상'],'채팅':['메시지'],'리포트':['보고서','주간보고'],
    '삭제':['제거'],'초대':['연동'],'모드':['직접 체크']
  };
  const expand=tok=>{const s=new Set([tok]);(SYN[tok]||[]).forEach(t=>s.add(t));return [...s];};

  const entries=[];
  document.querySelectorAll('section.section').forEach(sec=>{
    const pageTitle=sec.getAttribute('data-title')||(sec.querySelector('h1')?sec.querySelector('h1').textContent:sec.id);
    [...sec.querySelectorAll('h1,h2.h2,h3.h3')].forEach((hd,i)=>{
      if(!hd.id) hd.id=sec.id+'-s'+i;
      let body='',n=hd.nextElementSibling;
      while(n && !/^H[123]$/.test(n.tagName)){ body+=' '+n.textContent; n=n.nextElementSibling; }
      const head=hd.textContent.replace('▾','').trim(), b=body.trim();
      const e={sec:sec.id,hid:hd.id,isH1:hd.tagName==='H1',page:pageTitle,head:head,body:b};
      e.headL=norm(head); e.pageL=norm(pageTitle); e.bodyL=norm(b);
      e.headNS=e.headL.replace(/ /g,''); e.bodyNS=e.bodyL.replace(/ /g,''); e.pageNS=e.pageL.replace(/ /g,'');
      e.headCho=chosung(head).replace(/ /g,''); e.bodyCho=chosung(b).replace(/ /g,'');
      entries.push(e);
    });
  });

  let sel=-1, results=[];
  const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
  function hlTokens(t,nonCho){
    let out=esc(t);
    if(!nonCho.length)return out;
    const re=new RegExp('('+[...new Set(nonCho)].sort((a,b)=>b.length-a.length).map(escR).join('|')+')','gi');
    return out.replace(re,'<mark>$1</mark>');
  }
  // 공백을 건너뛰며 매치 → '플래너조회'로 '플래너 조회'를 찾음
  function looseIndex(hay,needle){
    const n=needle.replace(/ /g,''); if(!n)return -1;
    let k=0,start=-1;
    for(let i=0;i<hay.length;i++){
      const c=hay[i];
      if(c===' '){ if(k>0)continue; else continue; }
      if(c===n[k]){ if(k===0)start=i; k++; if(k===n.length)return start; }
      else if(k>0){ i=start; k=0; start=-1; }
    }
    return -1;
  }
  function snip(b,nonCho){const bl=b.toLowerCase();let idx=-1;for(const tk of nonCho){const j=bl.indexOf(tk)>=0?bl.indexOf(tk):looseIndex(bl,tk);if(j>=0&&(idx<0||j<idx))idx=j;}if(idx<0)return '';const s=Math.max(0,idx-26);return (s>0?'…':'')+b.slice(s,idx+70).trim()+'…';}

  function score(e,tokens,joined,isCho,cq){
    let s=0;
    const hl=e.headL,bl=e.bodyL,pl=e.pageL;
    const jns=joined.replace(/ /g,'');
    if(hl===joined||e.headNS===jns) s+=1000;
    else if(hl.startsWith(joined)||e.headNS.startsWith(jns)) s+=650;
    else if(hl.includes(joined)||e.headNS.includes(jns)) s+=430;
    let allTok=true;
    for(const tok of tokens){
      const terms=expand(tok);
      const inHead=terms.some(t=>hl.includes(t)||e.headNS.includes(t.replace(/ /g,'')));
      const inBody=terms.some(t=>bl.includes(t)||e.bodyNS.includes(t.replace(/ /g,'')))||pl.includes(tok)||e.pageNS.includes(tok.replace(/ /g,''));
      if(inHead) s+=130; else if(inBody) s+=48; else allTok=false;
    }
    let choHit=false;
    if(isCho && cq){
      if(e.headCho.startsWith(cq)){ s+=640; choHit=true; }
      else if(e.headCho.includes(cq)){ s+=500; choHit=true; }
      else if(e.bodyCho.includes(cq)){ s+=150; choHit=true; }
    }
    if(!allTok && !choHit) return 0;
    if(s<=0) return 0;
    if(pl.includes(joined)) s+=60;
    s+=Math.max(0,42-hl.length);
    return s;
  }

  function render(qRaw){
    const q=norm(qRaw||'');
    if(!q){box.hidden=true;box.innerHTML='';return;}
    const tokens=q.split(' ').filter(Boolean);
    const joined=q;
    const isCho=tokens.every(t=>[...t].every(c=>CHOSET.includes(c)));
    const cq=isCho?q.replace(/ /g,''):'';
    const nonCho=tokens.filter(tk=>![...tk].every(c=>CHOSET.includes(c)));
    results=entries.map(e=>{const sc=score(e,tokens,joined,isCho,cq);return sc>0?{e,sc}:null;}).filter(Boolean)
      .sort((a,b)=>b.sc-a.sc).slice(0,15);
    sel=-1;
    if(!results.length){box.hidden=false;box.innerHTML='<div class="sr-empty">검색 결과가 없습니다.</div>';return;}
    box.hidden=false;
    box.innerHTML=results.map((r,i)=>{const e=r.e;
      const title=e.isH1?hlTokens(e.page,nonCho):hlTokens(e.head,nonCho);
      const page=e.isH1?'':'<div class="sr-page">'+esc(e.page)+'</div>';
      const sn=snip(e.body,nonCho);
      const sp=sn?'<div class="sr-snip">'+hlTokens(sn,nonCho)+'</div>':'';
      return '<a data-i="'+i+'">'+page+'<div class="sr-title">'+title+'</div>'+sp+'</a>';}).join('');
  }
  function go(r){box.hidden=true;input.value='';showPage(r.e.sec);requestAnimationFrame(()=>{if(!r.e.isH1)scrollToId(r.e.hid);});}
  let t;input.addEventListener('input',()=>{clearTimeout(t);t=setTimeout(()=>render(input.value.trim()),100);});
  box.addEventListener('mousedown',e=>{const a=e.target.closest('a[data-i]');if(a){e.preventDefault();go(results[+a.dataset.i]);}});
  input.addEventListener('keydown',e=>{
    if(box.hidden)return;const items=[...box.querySelectorAll('a[data-i]')];
    if(e.key==='ArrowDown'){e.preventDefault();sel=Math.min(sel+1,items.length-1);}
    else if(e.key==='ArrowUp'){e.preventDefault();sel=Math.max(sel-1,0);}
    else if(e.key==='Enter'){e.preventDefault();const r=sel>=0?results[sel]:results[0];if(r)go(r);return;}
    else if(e.key==='Escape'){box.hidden=true;input.blur();return;}
    items.forEach((it,i)=>it.classList.toggle('sel',i===sel));if(items[sel])items[sel].scrollIntoView({block:'nearest'});
  });
  input.addEventListener('focus',()=>{if(input.value.trim())render(input.value.trim());});
  document.addEventListener('click',e=>{if(!e.target.closest('.search'))box.hidden=true;});
})();