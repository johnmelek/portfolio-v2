/* JOHN MELEK v2, neo-brutalist interactions */
(() => {
  const root = document.documentElement; root.classList.add('js');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const prog = document.createElement('div'); prog.className='progress'; document.body.appendChild(prog);
  const onScroll = () => { const h=document.documentElement.scrollHeight-innerHeight; prog.style.width=(h>0?(scrollY/h)*100:0)+'%'; };
  addEventListener('scroll', onScroll, {passive:true}); onScroll();

  if(!reduce && matchMedia('(min-width:821px)').matches){
    const c=document.createElement('div'); c.className='cur';
    const style=document.createElement('style'); style.textContent='.cur{position:fixed;top:0;left:0;width:26px;height:26px;border:2px solid var(--accent);border-radius:50%;pointer-events:none;z-index:90;mix-blend-mode:difference;transform:translate(-50%,-50%);transition:width .2s,height .2s,background .2s}.cur.big{width:54px;height:54px;background:var(--accent)}';
    document.head.appendChild(style); document.body.appendChild(c);
    let x=innerWidth/2,y=innerHeight/2,tx=x,ty=y;
    addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;});
    (function loop(){x+=(tx-x)*.22;y+=(ty-y)*.22;c.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%)`;requestAnimationFrame(loop);})();
    document.addEventListener('mouseover',e=>{c.classList.toggle('big',!!e.target.closest('a,button,[data-hover]'));});
  }

  const btn=document.querySelector('.menu-btn'), ov=document.querySelector('.nav-overlay');
  if(btn&&ov){ btn.addEventListener('click',()=>{ov.classList.toggle('open');btn.textContent=ov.classList.contains('open')?'CLOSE':'MENU';});
    ov.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ov.classList.remove('open');btn.textContent='MENU';}));
    const ret=ov.querySelector('.nav-return'); if(ret) ret.addEventListener('click',()=>{ov.classList.remove('open');btn.textContent='MENU';}); }

  const clk=document.querySelector('.clk'); if(clk) setInterval(()=>{clk.textContent=new Date().toISOString().slice(11,19)+' UTC';},1000);

  const els=document.querySelectorAll('.rv');
  if(reduce||!('IntersectionObserver' in window)) els.forEach(e=>e.classList.add('in'));
  else { const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.14,rootMargin:'0px 0px -8% 0px'}); els.forEach(e=>io.observe(e)); }

  const photo=document.querySelector('.hero .photo img');
  if(photo&&!reduce){ let t=false; addEventListener('scroll',()=>{if(t)return;t=true;requestAnimationFrame(()=>{photo.style.transform=`scale(1.05) translateY(${scrollY*0.05}px)`;t=false;});},{passive:true}); }

  if(!reduce){ document.querySelectorAll('[data-scramble]').forEach(el=>{ const target=el.dataset.scramble; const ch='!<>-_\\/[]{}#%&'; let frame=0; const run=()=>{let o='';for(let i=0;i<target.length;i++){o+=Math.random()<.32?ch[Math.floor(Math.random()*ch.length)]:target[i];}el.textContent=o;if(frame++<14)setTimeout(run,30);else el.textContent=target;}; el.addEventListener('mouseenter',()=>{frame=0;run();}); }); }

  document.querySelectorAll('.marq').forEach(m=>{ m.addEventListener('mouseenter',()=>m.querySelector('.track').style.animationPlayState='paused'); m.addEventListener('mouseleave',()=>m.querySelector('.track').style.animationPlayState='running'); });
})();
