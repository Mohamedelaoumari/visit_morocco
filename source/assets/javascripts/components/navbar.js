function navbarScroll() {
  const navbar = document.querySelector('.navbar-zagora-transparent');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight / 2.5) {
        navbar.classList.remove('navbar-zagora-transparent');
        navbar.classList.add('navbar-zagora-filled');
      } else {
        navbar.classList.remove('navbar-zagora-filled');
        navbar.classList.add('navbar-zagora-transparent');
      }
    });
  }
}

export { navbarScroll };
