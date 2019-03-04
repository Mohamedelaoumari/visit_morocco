const fillIfHasValue = formGroup => inputHasValue(formGroup) ? fill(formGroup) : unfill(formGroup);

const inputHasValue = (formGroup) => {
  if (selectInput(formGroup)) {
    return !!selectInput(formGroup).value
  }
  return false
};

const selectInput = formGroup => formGroup.querySelector('.form-control');

const fill = formGroup => formGroup.classList.add('is-filled');

const unfill = formGroup => formGroup.classList.remove('is-filled');

const initFormsOnFocus = () => {
  const formGroups = document.querySelectorAll('.input-block');
  formGroups.forEach(formGroup => {
    fillIfHasValue(formGroup);
  });
}

export { initFormsOnFocus };
