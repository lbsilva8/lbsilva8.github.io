document.addEventListener('DOMContentLoaded', () => {
  /* --- 1. Efeito Stick no Menu Superior (Nav) --- */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('stuck', window.scrollY > 50);
  });

  /* --- 2. Alternador de Tema (Dark / Light) --- */
  const toggleBtn = document.getElementById('tog');
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.dataset.theme;
    document.documentElement.dataset.theme =
      currentTheme === 'dark' ? 'light' : 'dark';
  });

  /* --- 3. Controle das Linhas do Tempo Horizontais --- */
  // card Width (260px) + gap (12px) = 272px de deslocamento por clique
  const cardWidth = 272;
  const timelineWraps = document.querySelectorAll('.timeline-wrap');

  timelineWraps.forEach((wrap) => {
    const scrollContainer = wrap.querySelector('.timeline-scroll');
    const prevBtn = wrap.querySelector('.tl-prev');
    const nextBtn = wrap.querySelector('.tl-next');

    if (scrollContainer && prevBtn && nextBtn) {
      nextBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
      });

      prevBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      });
    }
  });
});
