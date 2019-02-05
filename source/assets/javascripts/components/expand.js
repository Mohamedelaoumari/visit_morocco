const getTogglers = () => Array.from(document.querySelectorAll('[data-expand]'));
const getTarget = toggler => document.querySelector(toggler.dataset.expand);
const hide = el => el.classList.remove('expanded');
const show = el => el.classList.add('expanded');

const toggleExpanded = toggler => {
  const target = getTarget(toggler);
  if (target.classList.value.includes('expanded')) {
    hide(target);
    hide(toggler);
  } else {
    show(target);
    show(toggler);
  }
  checkTogglerCopy(toggler);
}

const checkTogglerCopy = toggler => {
  if (toggler.innerText.includes('more')) {
    toggler.innerText = toggler.innerText.replace('more', 'less')
  } else if (toggler.innerText.includes('less')) {
    toggler.innerText = toggler.innerText.replace('less', 'more')
  }
}

const hideOtherExpandables = toggler => {
  const allTogglers = getTogglers();
  const togglerIndex = allTogglers.findIndex(el => el === toggler);
  allTogglers.splice(togglerIndex)
  allTogglers.forEach(toggler => {
    hide(getTarget(toggler));
    hide(toggler);
  })
}

const addOpenBehavior = toggler => {
  toggler.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleExpanded(e.target);
    hideOtherExpandables(e.target);
    console.log("I'm clicking");
  });
}

const addBehaviorToTogglers = () => {
  getTogglers().forEach(toggler => addOpenBehavior(toggler));
}

export const initExpandTogglers = function() {
  addBehaviorToTogglers();
}
