
const userEmail = localStorage.getItem('userEmail');

document.getElementById('userEmail').innerText= userEmail;


document.getElementById('dismiss').addEventListener('click', function () {
    // Assuming the home page URL is 'index.html'
    window.location.href = 'index.html';
});
