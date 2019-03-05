const selectInput = formGroup => formGroup.querySelector('.form-control');

const inputHasValue = (formGroup) => {
  if (selectInput(formGroup)) {
    return !!selectInput(formGroup).value;
  }
  return false;
};

const fill = formGroup => formGroup.classList.add('is-filled');

const unfill = formGroup => formGroup.classList.remove('is-filled');

const fillIfHasValue = (formGroup) => {
  if (inputHasValue(formGroup)) {
    fill(formGroup);
  } else {
    unfill(formGroup);
  }
};

const initFormsOnFocus = () => {
  const formGroups = document.querySelectorAll('.input-block');
  formGroups.forEach((formGroup) => {
    fillIfHasValue(formGroup);
  });
};

export { initFormsOnFocus };
