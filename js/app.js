(() => {
  const header = document.getElementById('siteHeader');
  const navLinks = [...document.querySelectorAll('.main-nav a[data-section]')];
  const sections = [...document.querySelectorAll('main section[id]')];
  const scroll = new SmoothScroll('a[href*="#"]', {speed: 650, speedAsDuration: true, offset: 105, easing: 'easeInOutCubic'});

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    let current = 'home';
    for (const section of sections) {
      const r = section.getBoundingClientRect();
      if (r.top <= 150 && r.bottom > 150) current = section.id;
    }
    navLinks.forEach(a => a.classList.toggle('active', a.dataset.section === current));
  }, {passive:true});

  const heroPlayer = videojs('heroVideo', {controls:false, autoplay:true, muted:true, loop:true, fluid:false});
  heroPlayer.ready(() => { heroPlayer.muted(true); heroPlayer.play().catch(()=>{}); });

  const modal = document.getElementById('productModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  let deck;
  document.querySelectorAll('.product-open').forEach(btn => {
    btn.addEventListener('click', e => {
      const card = e.currentTarget.closest('.product-card');
      modalImage.src = `assets/images/${card.dataset.image}`;
      modalTitle.textContent = card.dataset.product;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden','false');
      if (!deck) deck = new Reveal(modal.querySelector('.reveal'), {embedded:true, controls:true, progress:false, history:false, keyboard:true, transition:'slide'});
      else deck.sync();
    });
  });
  function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {if(e.key==='Escape') closeModal()});

  document.querySelectorAll('.why article').forEach(card => card.addEventListener('click', () => card.classList.toggle('expanded')));
})();
