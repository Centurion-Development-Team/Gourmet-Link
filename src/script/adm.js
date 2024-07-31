document.addEventListener('DOMContentLoaded', function () {
    const signInButton = document.querySelector('.sign-in-button');
    const emailInput = document.querySelector('.textbox');
    const passwordInput = document.querySelector('.textbox-password');

    // Valid admin accounts
    const validAdmins = [
        { email: 'admin1', password: '111' },
        { email: 'admin2', password: '222' },
        { email: 'admin3', password: '333' }
    ];

    signInButton.addEventListener('click', function () {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Check if fields are empty
        if (!email || email === "Email" || !password || password === "Password") {
            alert('Please enter all fields.');
            return;
        }

        // Check if email is valid
        const validAdmin = validAdmins.find(admin => admin.email === email);
        
        if (!validAdmin) {
            alert('Invalid Admin Account.');
            return;
        }

        // Check if the password matches
        if (validAdmin.password !== password) {
            alert('Wrong password.');
            return;
        }

        // Store the email in localStorage and redirect
        localStorage.setItem('adminEmail', email);
        window.location.href = 'admin-page.html';
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
