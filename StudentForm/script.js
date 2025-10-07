function validateForm() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMsg = document.getElementById("errorMsg");

    // Reset error message
    errorMsg.innerHTML = "";

    // Check for empty fields
    if (!username || !email || !phone || !password || !confirmPassword) {
        errorMsg.innerHTML = "All fields are required!";
        return false;
    }

    // Phone number validation
    let phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        errorMsg.innerHTML = "Phone number must be 10 digits!";
        return false;
    }

    // Password validation
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (!passwordRegex.test(password)) {
        errorMsg.innerHTML = "Password must be at least 7 characters long and include at least one capital letter, one digit, and one special character (&,$,#,@).";
        return false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        errorMsg.innerHTML = "Passwords do not match!";
        return false;
    }

    // Email validation
    let emailRegex = /^[a-zA-Z0-9]+@[a-z]{3}\.[a-z]{2,3}$/;
    if (!emailRegex.test(email)) {
        errorMsg.innerHTML = "Enter a valid email!";
        return false;
    }

    alert("Registration successful!");
    return true;
}
