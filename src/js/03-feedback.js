import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  textArea: document.querySelector('textarea'),
};
const STORAGE_KEY = 'feedBack-form-state';
const formData = {};
function onTextAreaInput(e) {
  const value = e.target.value;
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(e) {
  e.prevention.default();
  e.currentTarget.reset();
  localStorage.remove(STORAGE_KEY);
  console.log(finalData);
}
function rescureData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    refs.form.value = savedData;
  }
  const finalData = JSON.parse(formData);
}
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextAreaInput, 500));






