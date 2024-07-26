document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.querySelector('.sign-button');
    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.pass');

    signInButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default form submission

        alert('Login Success');

        // Clear the text in all textboxes
        emailInput.value = '';
        passwordInput.value = '';

        // Redirect to index.html
        window.location.href = 'index.html';
    });
});
