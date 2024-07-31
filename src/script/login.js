document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.querySelector('.sign-button');
    const emailOrUsernameInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.pass');
  
    // Valid accounts
    const validAccounts = [
      { email: 'jhonny@gmail.com', username: 'jhonny', password: '1111111' },
      { email: 'anna_smith@gmail.com', username: 'annasmith', password: '2222222' },
      { email: 'julia.kim@gmail.com', username: 'juliakim', password: '3333333' }
    ];
  
    signInButton.addEventListener('click', (e) => {
      e.preventDefault();
  
      const emailOrUsername = emailOrUsernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Check if fields are empty
      if (!emailOrUsername || emailOrUsername === "Email or Username" || !password || password === "Password") {
        alert('Please enter all fields.');
        return;
      }
  
      // Check for valid email/username format
      if (!emailOrUsername.includes('@') || !emailOrUsername.endsWith('.com')) {
        const isUsername = validAccounts.some(account => account.username === emailOrUsername);
        if (!isUsername) {
          alert('Invalid email/username.');
          return;
        }
      }
  
      // Check if the email/username exists and the password matches
      const validAccount = validAccounts.find(account =>
        (account.email === emailOrUsername || account.username === emailOrUsername) &&
        account.password === password
      );
  
      if (!validAccount) {
        // Check if email/username is valid but password does not match
        const isEmailOrUsernameValid = validAccounts.some(account =>
          account.email === emailOrUsername || account.username === emailOrUsername
        );
  
        if (isEmailOrUsernameValid) {
          alert('Wrong password.');
        } else {
          alert('Account is not yet registered.');
        }
        return;
      }
  
      // Redirect to the homepage if all checks pass
      window.location.href = '../index.html';
    });
  });
  