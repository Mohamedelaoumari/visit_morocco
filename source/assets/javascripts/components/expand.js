const getTogglers = () => Array.from(document.querySelectorAll('[data-expand]'));
const getTarget = toggler => document.querySelector(toggler.dataset.expand);
const hide = el => el.classList.remove('expanded');
const show = el => el.classList.add('expanded');

const checkTogglerCopy = (toggler) => {
  if (toggler.innerText.includes('more')) {
    toggler.innerText.replace('more', 'less');
  } else if (toggler.innerText.includes('less')) {
    toggler.innerText.replace('less', 'more');
  }
};

const toggleExpanded = (toggler) => {
  const target = getTarget(toggler);
  if (target.classList.value.includes('expanded')) {
    hide(target);
    hide(toggler);
  } else {
    show(target);
    show(toggler);
  }
  checkTogglerCopy(toggler);
};


const hideOtherExpandables = (toggler) => {
  const allTogglers = getTogglers();
  const togglerIndex = allTogglers.findIndex(el => el === toggler);
  allTogglers.splice(togglerIndex);
  allTogglers.forEach((tog) => {
    hide(getTarget(tog));
    hide(tog);
  });
};

const addOpenBehavior = (toggler) => {
  toggler.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleExpanded(e.target);
    hideOtherExpandables(e.target);
  });
};

const addBehaviorToTogglers = () => {
  getTogglers().forEach(toggler => addOpenBehavior(toggler));
};

export const initExpandTogglers = () => {
  addBehaviorToTogglers();
};
