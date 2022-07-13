(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
    mobileMenuRef.classList.toggle('fade-in');
  });

  const mobileLinkRef = document.querySelector('[data-menu-links');

  mobileLinkRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
    mobileMenuRef.classList.toggle('fade-in');
  });

  // const menuLinks = document.querySelectorAll('.menu-link');
  // const headerLinks = document.querySelectorAll('.header__nav-link');

  // menuLinks.forEach(link => link.addEventListener('click', clickHandler));
  // headerLinks.forEach(link => link.addEventListener('click', clickHandler));

  // function clickHandler(e) {
  //   e.preventDefault();
  //   const href = this.getAttribute('href');
  //   const offsetTop = document.querySelector(href).offsetTop;

  //   scroll({
  //     top: offsetTop,
  //     behavior: 'smooth',
  //   });
  // }
})();

// ////констанста з меню
// const mobileLinkRef = document.querySelector('#menu');
// ////код
// mobileLinkRef.addEventListener('click', () => {
//   const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
//   menuBtnRef.classList.toggle('is-open');
//   menuBtnRef.setAttribute('aria-expanded', !expanded);
//   mobileMenuRef.classList.toggle('is-open');
//   body.classList.toggle('no-scroll');
//   mobileMenuRef.classList.toggle('fade-in');
// });
