// Mobile nav toggle logic with accessible states
(function(){
  const menu = document.getElementById('mobileMenu');
  const toggle = document.getElementById('menuToggle');
  const closeBtn = document.getElementById('menuClose');
  const iconMenu = document.getElementById('iconMenu');
  const iconClose = document.getElementById('iconClose');

  function openMenu(){
    menu.classList.remove('translate-x-full');
    menu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    iconMenu.classList.add('hidden');
    iconClose.classList.remove('hidden');
  }

  function closeMenu(){
    menu.classList.add('translate-x-full');
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    iconMenu.classList.remove('hidden');
    iconClose.classList.add('hidden');
  }

  toggle?.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if(isOpen) closeMenu(); else openMenu();
  });

  closeBtn?.addEventListener('click', closeMenu);

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeMenu();
  });
})();
