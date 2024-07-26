document.addEventListener('DOMContentLoaded', function () {
    const signInButton = document.querySelector('.sign-in-button');
    const popup = document.querySelector('.popup');
    const closeButton = popup.querySelector('button:nth-child(3)'); // 'NO' button
    const confirmButton = popup.querySelector('button:nth-child(2)'); // 'YES' button

    signInButton.addEventListener('click', function () {
        popup.style.display = 'flex';
    });

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    confirmButton.addEventListener('click', function () {
        window.location.href = 'login.html';
    });
});

function togglePassword() {
    const passwordField = document.querySelector('.textbox-password');
    const passwordButton = document.querySelector('.show-password-button');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordButton.textContent = '⦿'; // Change to 'hide' icon
    } else {
        passwordField.type = 'password';
        passwordButton.textContent = '⦾'; // Change to 'show' icon
    }
}
