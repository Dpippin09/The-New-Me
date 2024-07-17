document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function showError(input, message) {
        const formField = input.parentElement;
        formField.className = 'error';
        const small = formField.querySelector('small');
        small.innerText = message;
    }

    function showSuccess(input) {
        const formField = input.parentElement;
        formField.className = 'success';
    }

    function checkRequired(inputArr) {
        inputArr.forEach(input => {
            if (input.value.trim() === '') {
                showError(input, `${getFieldName(input)} is required`);
            } else {
                showSuccess(input);
            }
        });
    }

    function checkEmail(input) {
        if (!validateEmail(input.value.trim())) {
            showError(input, 'Email is not valid');
        } else {
            showSuccess(input);
        }
    }

    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkRequired([nameInput, emailInput, messageInput]);
        checkEmail(emailInput);
    });
});