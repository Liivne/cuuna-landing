(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('menu');
  const items = document.querySelectorAll('.nav-item.has-sub');

  // Sombra del encabezado al hacer scroll
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menú móvil
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));

  // Submenús: clic en el botón los abre (en escritorio también se abren con hover)
  const closeAll = (except) => items.forEach((li) => {
    if (li === except) return;
    li.classList.remove('open');
    li.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
  });
  items.forEach((li) => {
    const btn = li.querySelector('.nav-link');
    btn.addEventListener('click', () => {
      const open = !li.classList.contains('open');
      closeAll(li);
      li.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.nav-item.has-sub')) closeAll(); });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    closeAll();
    if (nav.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
  });

  // Al volver con el botón Atrás, la página puede restaurarse con el menú abierto
  window.addEventListener('pageshow', () => { closeAll(); setMenu(false); });

  // Carrusel de fotos
  const track = document.querySelector('.carousel');
  const [prev, next] = document.querySelectorAll('.carousel-ctrl .icon-btn');
  if (track && prev && next) {
    const step = () => {
      const slide = track.querySelector('.slide');
      return slide ? slide.getBoundingClientRect().width + 20 : 300;
    };
    const update = () => {
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    };
    [prev, next].forEach((b) => b.addEventListener('click', () => {
      track.scrollBy({ left: Number(b.dataset.dir) * step() * 2, behavior: 'smooth' });
    }));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // Aparición suave al hacer scroll
  const targets = document.querySelectorAll(
    '.section-head, .split > *, .mission li, .project, .conf, .news, .member, .card, .announce-inner, .join-inner, .partner, .socials li'
  );
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-visible');
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    targets.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
  }

})();
