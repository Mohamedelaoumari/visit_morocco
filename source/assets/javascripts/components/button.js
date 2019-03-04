const removeWhite = (el) => {
  el.classList.remove('white');
  el.classList.add('gray');
};

const addWhite = (el) => {
  el.classList.add('white');
  el.classList.remove('gray');
};

const changeButton = () => {
  const button = document.querySelector('.oval-button');
  const whiteItems = document.querySelectorAll('.white');
  if (button) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight / 2.5) {
        whiteItems.forEach((item) => {
          removeWhite(item);
        });
      } else {
        whiteItems.forEach((item) => {
          addWhite(item);
        });
      }
    });
  }
};


export { changeButton };
