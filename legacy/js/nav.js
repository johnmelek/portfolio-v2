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

  const social = `
    <div class="nav-social">
      <a href="https://www.linkedin.com/in/john-melek-182086256?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 6 3.33 6 7.66V24h-5v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-5V8z"/></svg>
        <span>LinkedIn</span>
      </a>
      <a href="mailto:john.melekdls7@gmail.com" aria-label="Email">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 4h20v16H2V4zm2 2v.4l8 5.2 8-5.2V6H4zm16 2.8V18h-2V9.1l-6 3.9-6-3.9V18H4V8.8l8 5.2 8-5.2z"/></svg>
        <span>Email</span>
      </a>
      <a href="https://github.com/johnmelek" target="_blank" rel="noopener" aria-label="GitHub">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
        <span>GitHub</span>
      </a>
    </div>`;

  const bar = `
  <div class="topbar">
    <a href="${base}index.html" class="brand"><b>JOHN MELEK</b></a><span>· FORWARD DEPLOY ENGINEER</span>
    <span class="sig">AVAILABLE</span>
  </div>
  <button class="menu-btn">MENU</button>
  <div class="nav-overlay">
    <div class="nav-top"><button class="nav-return">RETURN</button></div>
    <nav class="nav-links">${nav}</nav>
    ${social}
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
