/* JOHN MELEK v2, shared chrome */
(() => {
  const page = (location.pathname.split('/').pop() || 'index.html').replace('.html','');
  const isPj = location.pathname.includes('/projects/');
  const base = isPj ? '../' : '';
  const items = [
    ['index','OVERVIEW'],['work','FIELD WORK'],['projects','THE SET'],
    ['approach','APPROACH'],['fieldlog','FIELD LOG'],['contact','CONTACT']
  ];
  const nav = items.map(([id,label]) => `<a href="${base}${id}.html"><span class="idx">→</span>${label}</a>`).join('');

  const bar = `
  <div class="topbar">
    <a href="${base}index.html" class="brand"><b>JOHN MELEK</b></a><span>· FORWARD DEPLOY ENGINEER</span>
    <span class="sig">AVAILABLE</span>
  </div>
  <button class="menu-btn">MENU</button>
  <div class="nav-overlay">
    <div class="nav-top"><button class="nav-return">RETURN</button></div>
    <nav class="nav-links">${nav}</nav>
    <a class="nav-li" href="https://www.linkedin.com/in/john-melek-182086256?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener"><span class="idx">↗</span>LINKEDIN</a>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', bar);

  // back button on list pages (not home, not project pages)
  if (page !== 'index' && !isPj) {
    const back = document.createElement('a');
    back.className = 'back';
    back.href = base + 'index.html';
    back.innerHTML = '← BACK';
    const sec = document.querySelector('main .sec') || document.querySelector('main');
    if (sec) sec.insertBefore(back, sec.firstChild);
  }
})();
