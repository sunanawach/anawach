/* ─────────────────────────────────────────
   STANLEY COLLEGE — CAREERS EXPO 2026
   Presentation JavaScript Controller
───────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Slide metadata ── */
  const SLIDES = [
    { id: 'home',        label: 'Cover',       speaker: 'Ugyen Dema',        role: 'Project Manager' },
    { id: 'contents',    label: 'Contents',    speaker: 'Ugyen Dema',        role: 'Project Manager' },
    { id: 'team',        label: 'Our Team',    speaker: 'Ugyen Dema',        role: 'Project Manager' },
    { id: 'brief',       label: 'Client Brief',speaker: 'Rinzin Norbu',      role: 'Marketing Manager' },
    { id: 'fiveW',       label: '5 W\'s',      speaker: 'All Members',       role: 'Event Plan — 5 W\'s' },
    { id: 'fiveE',       label: '5 E\'s',      speaker: 'Asmita',            role: 'Engagement Manager' },
    { id: 'fiveC',       label: '5 C\'s',      speaker: 'All Members',       role: 'Event Plan — 5 C\'s' },
    { id: 'course',      label: 'Course',      speaker: 'Asmita',            role: 'Engagement Manager' },
    { id: 'operations',  label: 'Venue & Ops', speaker: 'Annu Devi',         role: 'Operations Manager' },
    { id: 'budget',      label: 'Budget',      speaker: 'Anawach Lhakhiaw',  role: 'Finance Manager' },
    { id: 'schedule',    label: 'Schedule',    speaker: 'Ugyen Dema',        role: 'Project Manager' },
    { id: 'challenges',  label: 'Challenges',  speaker: 'All Members',       role: 'Shared — One per person' },
    { id: 'conclusion',  label: 'Conclusion',  speaker: 'Ugyen Dema',        role: 'Project Manager' },
    { id: 'qa',          label: 'Q & A',       speaker: 'All Members',       role: 'Open to questions' },
  ];

  /* ── State ── */
  let current = 0;

  /* ── DOM references ── */
  const tabNav       = document.getElementById('tabNav');
  const mobileNav    = document.getElementById('mobileNav');
  const dotNav       = document.getElementById('dotNav');
  const slideNum     = document.getElementById('slideNum');
  const slideTotal   = document.getElementById('slideTotal');
  const progressFill = document.getElementById('progressFill');
  const ribbonName   = document.getElementById('ribbonName');
  const ribbonRole   = document.getElementById('ribbonRole');
  const btnPrev      = document.getElementById('btnPrev');
  const btnNext      = document.getElementById('btnNext');
  const allSlides    = document.querySelectorAll('.slide');
  const contentsGrid = document.getElementById('contentsGrid');

  /* ─────────────────────────────────────────
     INIT — build dynamic nav elements
  ───────────────────────────────────────── */
  function init() {
    slideTotal.textContent = SLIDES.length;

    SLIDES.forEach(function (s, i) {
      /* Desktop tab */
      const tab = document.createElement('button');
      tab.className = 'tab-btn';
      tab.textContent = s.label;
      tab.dataset.index = i;
      tabNav.appendChild(tab);

      /* Mobile tab */
      const mtab = document.createElement('button');
      mtab.className = 'mnav-btn';
      mtab.textContent = s.label;
      mtab.dataset.index = i;
      mobileNav.appendChild(mtab);

      /* Dot */
      const dot = document.createElement('button');
      dot.className = 'dot-btn';
      dot.setAttribute('aria-label', 'Slide ' + (i + 1) + ': ' + s.label);
      dot.dataset.index = i;
      dotNav.appendChild(dot);
    });

    /* Contents grid cards */
    if (contentsGrid) {
      SLIDES.forEach(function (s, i) {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.innerHTML =
          '<div class="cc-num">' + (i + 1) + '</div>' +
          '<div class="cc-title">' + s.label + '</div>' +
          '<div class="cc-speaker">Speaker: ' + s.speaker + '</div>';
        card.dataset.goto = i;
        contentsGrid.appendChild(card);
      });
    }

    render(0);
  }

  /* ─────────────────────────────────────────
     RENDER — update all UI elements
  ───────────────────────────────────────── */
  function render(index) {
    current = index;
    const s = SLIDES[current];

    /* Slide visibility */
    allSlides.forEach(function (el) { el.classList.remove('active'); });
    const target = document.querySelector('.slide[data-id="' + s.id + '"]');
    if (target) {
      target.classList.add('active');
      target.scrollIntoView({ block: 'nearest', behavior: 'instant' });
    }

    /* Counter */
    slideNum.textContent = current + 1;

    /* Progress bar */
    progressFill.style.width = ((current + 1) / SLIDES.length * 100) + '%';

    /* Presenter ribbon */
    ribbonName.textContent = s.speaker;
    ribbonRole.textContent = s.role;

    /* Buttons */
    btnPrev.disabled = current === 0;
    btnNext.disabled = current === SLIDES.length - 1;

    /* Tab nav */
    document.querySelectorAll('.tab-btn').forEach(function (btn, i) {
      btn.classList.toggle('active', i === current);
    });
    /* Scroll active tab into view */
    const activeTab = tabNav.children[current];
    if (activeTab) {
      activeTab.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: 'smooth' });
    }

    /* Mobile nav */
    document.querySelectorAll('.mnav-btn').forEach(function (btn, i) {
      btn.classList.toggle('active', i === current);
    });
    const activeMnav = mobileNav.children[current];
    if (activeMnav) {
      activeMnav.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: 'smooth' });
    }

    /* Dots */
    document.querySelectorAll('.dot-btn').forEach(function (dot, i) {
      dot.classList.toggle('active', i === current);
    });

    /* Scroll stage to top */
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ─────────────────────────────────────────
     NAVIGATION
  ───────────────────────────────────────── */
  function goTo(index) {
    const i = Math.max(0, Math.min(SLIDES.length - 1, parseInt(index, 10)));
    render(i);
  }

  function goNext() { if (current < SLIDES.length - 1) render(current + 1); }
  function goPrev() { if (current > 0) render(current - 1); }

  /* ─────────────────────────────────────────
     EVENT LISTENERS
  ───────────────────────────────────────── */

  /* Prev / Next buttons */
  btnPrev.addEventListener('click', goPrev);
  btnNext.addEventListener('click', goNext);

  /* Desktop tab nav */
  tabNav.addEventListener('click', function (e) {
    const btn = e.target.closest('.tab-btn');
    if (btn) goTo(btn.dataset.index);
  });

  /* Mobile nav */
  mobileNav.addEventListener('click', function (e) {
    const btn = e.target.closest('.mnav-btn');
    if (btn) goTo(btn.dataset.index);
  });

  /* Dot nav */
  dotNav.addEventListener('click', function (e) {
    const dot = e.target.closest('.dot-btn');
    if (dot) goTo(dot.dataset.index);
  });

  /* Contents grid cards */
  document.addEventListener('click', function (e) {
    const card = e.target.closest('[data-goto]');
    if (card && !card.classList.contains('tab-btn') && !card.classList.contains('mnav-btn') && !card.classList.contains('dot-btn')) {
      goTo(card.dataset.goto);
    }
  });

  /* Keyboard navigation */
  document.addEventListener('keydown', function (e) {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        goNext();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        goPrev();
        break;
      case 'Home':
        e.preventDefault();
        goTo(0);
        break;
      case 'End':
        e.preventDefault();
        goTo(SLIDES.length - 1);
        break;
    }
  });

  /* Touch / swipe navigation */
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', function (e) {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    /* Only trigger if horizontal swipe > 60px and dominant */
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) goNext();
      else goPrev();
    }
  }, { passive: true });

  /* ─────────────────────────────────────────
     BOOT
  ───────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
