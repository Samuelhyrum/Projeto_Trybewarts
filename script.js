const email = document.getElementById('emailInput');
const password = document.getElementById('passwordInput');
const button = document.getElementById('loginButton');
const submitBtn = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
submitBtn.disabled = true;


function validateInput() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
button.addEventListener('click', validateInput);

function submitButton() {
  const checkedInput = checkbox.checked;
  if (!checkedInput) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}
checkbox.addEventListener('change', submitButton);
