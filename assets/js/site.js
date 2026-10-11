// Light / dark switch: defaults to the system setting, remembers an explicit choice
const themeBtn = document.querySelector('.theme-toggle');
if (themeBtn) {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const current = () => document.documentElement.dataset.theme || (media.matches ? 'dark' : 'light');
  themeBtn.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked: choice lasts for this page only */ }
  });
}

// Mobile navigation
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Filter chips (publications, topics): items carry space-separated tokens in data-type
document.querySelectorAll('.filters').forEach((bar) => {
  const items = bar.parentElement.querySelectorAll('[data-type]');
  bar.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    bar.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', c === chip));
    const f = chip.dataset.filter;
    bar.parentElement.dataset.active = f;
    items.forEach((el) => {
      el.hidden = f !== 'all' && !el.dataset.type.split(' ').includes(f);
    });
  });
});

// Links to other sites open in a new tab
document.querySelectorAll('a[href^="http"]').forEach((a) => {
  if (a.hostname !== location.hostname) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  }
});
