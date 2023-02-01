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

function limite_textarea(valor) {
  const quant = 500;
  let total = valor.length;
  if (total <= quant) {
   let resto = quant - total;
    document.getElementById('counter').innerHTML = resto;
  } else {
    document.getElementById('textarea').value = valor.substr(0, quant);
  }
}

function form(event){
  event.preventDefault();
  document.querySelector('#evaluation-form').style.visibility = 'hidden';
  // document.querySelector('form-data').display = 'flex';
  const form = document.getElementById('form-data');
  form.style.display = 'flex';
  const nome = document.getElementById('input-name');
  let name = document.createElement('text');
  form.appendChild(name);
  name.innerHTML=nome.value;
  const sobrenome= document.getElementById('input-lastname').value;
  const email= document.getElementById('input-email').value;
  const select = document.getElementById('house');
  // const casa = select.options[select.selectIndex].value;
  const family = document.querySelector('[name="family"]:checked');
  const nomeF = (family) ? family.value : '';
}
submitBtn.addEventListener('click',form);