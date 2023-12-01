const validationMessage = document.getElementById('ValidationMessage');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm(event) {
    event.preventDefault();

    const userEmail = document.getElementById('email').value;
    const isvalid = isValidEmail(userEmail);

    if (isvalid) {
        localStorage.setItem('userEmail', userEmail);
        window.location.href = 'another.html';
    } else {
        validationMessage.innerText = 'Valid email required';
    }
}
document.querySelector('button').addEventListener('click', submitForm);
