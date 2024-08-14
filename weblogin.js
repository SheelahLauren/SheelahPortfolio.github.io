const loginForm = document.getElementById('login-form');

// Login form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberCheckbox = document.getElementById('remember');
    const loginNotification = document.getElementById('login-notification');

    // Check if Remember Password checkbox is checked
    const rememberPassword = rememberCheckbox.checked;

    if (username === "sheelah" && password === "sheelah") {
        alert("Login successful!");
        // Redirect to the homepage or any other page
        window.location.href = "shee.html";
        
        // Store username and password in localStorage if Remember Password is checked
        if (rememberPassword) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            // Clear stored username and password if Remember Password is not checked
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
    } else {
        alert("Invalid username and password. Please try again.");
    }
});

// Forgot Password link click event
document.getElementById('forgot-password').addEventListener('click', function(event) {
    event.preventDefault();
    // Add logic here to handle forgot password functionality, such as showing a modal or redirecting to a password recovery page.
    alert("Forgot Password functionality will be implemented soon!");
});
