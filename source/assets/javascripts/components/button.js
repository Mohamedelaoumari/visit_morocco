const changeButton = () => {
  console.log('hello from changebutton');
  const button = document.querySelector('.oval-button');
  if (button) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight/2.5) {
        button.classList.remove('white');
        button.classList.add('gray');
      } else {
        button.classList.remove('gray');
        button.classList.add('white');
      }
    });
  }
}

export { changeButton };
