
const btn = document.querySelector('.btn');
const InputEmail = document.getElementById('email');
const error = document.querySelector('.error');

btn.addEventListener('click', validateEmail);

let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

function errorState(input, errorMessage) {
    input.classList.add('error');
    input.style.borderColor = 'var(--Light-Red)';
    input.style.borderWidth = '2px';
    error.textContent = errorMessage;
    const placeholderMessage = input.value;
    input.placeholder = placeholderMessage;
}

function removeErrorState(input) {
    input.classList.remove('error');
    input.style.borderColor = ' var(--Pale-Blue) ';
    input.style.borderWidth = '1px';
    error.textContent = '';
}

function validateEmail(e) {
    e.preventDefault();
    if (InputEmail.value === '') {
        errorState(InputEmail, 'Email Address cannot be empty');
    } else if (!InputEmail.value.match(mailformat)) {
        errorState(InputEmail, 'Please provide a valid email address');
    } else {
        removeErrorState(InputEmail);
    }
}
