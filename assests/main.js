const loginBtn = document.getElementById('login-btn');
const forgotPasswordText = document.getElementById('forgot-password-text');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Placeholder for login logic
    console.log(`Username: ${username}, Password: ${password}`);
    alert(`Welcome, ${username}!`);
});

forgotPasswordText.addEventListener('click', () => {
    alert('Redirecting to password recovery...');
    // Here you can redirect to a password recovery page or show a modal
});