export const initFormsOnFocus = function() {
  const formGroups = document.querySelectorAll('.mvp-form-group')
  formGroups.forEach(formGroup => {
    fillIfHasValue(formGroup);
    // addOnChangeListener(formGroup);
  });
}

const addOnChangeListener = formGroup => {
  const formInput = selectInput(formGroup);
  formInput.addEventListener('change', (e) => fillIfHasValue(e.target.parentElement));
}

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
