(() => {

  /* =========================
     HEADER
     ========================= */

  const header = document.getElementById('siteHeader');

  const navLinks = [
    ...document.querySelectorAll('.main-nav a[data-section]')
  ];

  const sections = [
    ...document.querySelectorAll('main section[id]')
  ];


 /* =========================
   SMOOTH SCROLL
   ========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function (e) {

    const targetId = this.getAttribute('href');

    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();

    const headerOffset = 105;

    const startPosition = window.scrollY;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    const distance = targetPosition - startPosition;

    // Increase this for slower scrolling
    const duration = 1000;

    let startTime = null;

    function animateScroll(currentTime) {

      if (!startTime) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-in-out
      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(
        0,
        startPosition + distance * eased
      );

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }

    }

    requestAnimationFrame(animateScroll);

    history.pushState(null, '', targetId);

  });

});


  /* =========================
     HEADER + ACTIVE NAV
     ========================= */

  window.addEventListener('scroll', () => {

    header.classList.toggle(
      'scrolled',
      window.scrollY > 40
    );

    let current = 'home';

    for (const section of sections) {

      const r = section.getBoundingClientRect();

      if (r.top <= 150 && r.bottom > 150) {
        current = section.id;
      }

    }

    navLinks.forEach(link => {

      link.classList.toggle(
        'active',
        link.dataset.section === current
      );

    });

  }, { passive: true });


  /* =========================
     HERO VIDEO
     ========================= */

  const heroPlayer = videojs('heroVideo', {
    controls: false,
    autoplay: true,
    muted: true,
    loop: true,
    fluid: false
  });

  heroPlayer.ready(() => {
    heroPlayer.muted(true);
    heroPlayer.play().catch(() => {});
  });


  /* =========================
     JOURNEY SLIDER
     ========================= */

  const journeySlider = document.querySelector('.journey-slider');

  if (journeySlider) {

    const journeyDeck = new Reveal(journeySlider, {

      embedded: true,

      width: 1120,
      height: 400,

      controls: false,
      progress: false,
      history: false,
      keyboard: false,
      touch: false,

      loop: true,

      transition: 'fade',

      autoSlide: 2500,
      autoSlideStoppable: false

    });

    journeyDeck.initialize();

  }


  /* =========================
     WHY CARDS
     ========================= */

  document
    .querySelectorAll('.why article')
    .forEach(card => {

      card.addEventListener('click', () => {
        card.classList.toggle('expanded');
      });

    });

})();