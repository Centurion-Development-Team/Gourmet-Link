document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.querySelector('.sign-button');
    const emailInput = document.querySelector('.email');
    const usernameInput = document.querySelector('.username');
    const passwordInput = document.querySelector('.pass');
    const confirmPasswordInput = document.querySelector('.confirm');

    signUpButton.addEventListener('click', () => {
        alert('Success');
        
        // Clear the text in all textboxes
        emailInput.value = '';
        usernameInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
    });
});
