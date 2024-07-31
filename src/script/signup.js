document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.querySelector('.sign-button');
    const emailInput = document.querySelector('.email');
    const usernameInput = document.querySelector('.username');
    const passwordInput = document.querySelector('.pass');
    const confirmPasswordInput = document.querySelector('.confirm');
  
    signUpButton.addEventListener('click', async (e) => {
      e.preventDefault();
  
      const email = emailInput.value.trim();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
  
      // Input validation
      if (!email || email === "Email" || !username || username === "Username" || !password || password === "Password" || !confirmPassword || confirmPassword === "Confirm Password") {
        alert('Please fill all fields.');
        return;
      }
      if (!email.includes('@') || !email.endsWith('.com')) {
        alert('Please enter a valid email address.');
        return;
      }
      if (username.length <= 3) {
        alert('Username must be longer than 3 characters.');
        return;
      }
      if (password.length <= 6) {
        alert('Password needs to be stronger.');
        return;
      }
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
  
      // Redirect to login.html if all validations pass
      window.location.href = 'login.html';
    });
  });
  