const email = document.getElementById('emailInput')
const password = document.getElementById('passwordInput')
const button = document.getElementById('loginButton')

    function validateInput () {
        if (email.value === 'tryber@teste.com' && password.value === '123456') {
            alert('Olá, Tryber!');
        } else {
            alert('Email ou senha inválidos.');
        }
    }
button.addEventListener('click', validateInput);