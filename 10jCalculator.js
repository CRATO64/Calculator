let calculation = localStorage.getItem('calculation') || '';

submit();

function updateCalculation(value) {
  calculation+= value;
  localStorage.setItem('calculation', calculation);
}

function submit() {
  document.querySelector('.js-button').innerHTML = `${calculation}`
}