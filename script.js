const form = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const submitBtn = document.getElementById('submit-btn');

// Email validation regex
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Toggle password visibility
togglePassword.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text';
    togglePassword.textContent = 'Hide';
  } else {
    password.type = 'password';
    togglePassword.textContent = 'Show';
  }
});

// Form validation function
const validateForm = () => {
  let valid = true;

  // Email
  if (!email.value.trim()) {
    emailError.textContent = 'Email is required.';
    emailError.classList.remove('hidden');
    valid = false;
  } else if (!isValidEmail(email.value.trim())) {
    emailError.textContent = 'Please enter a valid email.';
    emailError.classList.remove('hidden');
    valid = false;
  } else {
    emailError.classList.add('hidden');
  }

  // Password
  if (!password.value.trim()) {
    passwordError.textContent = 'Password is required.';
    passwordError.classList.remove('hidden');
    valid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    passwordError.classList.remove('hidden');
    valid = false;
  } else {
    passwordError.classList.add('hidden');
  }

  submitBtn.disabled = !valid;
  return valid;
};

// Live validation
email.addEventListener('input', validateForm);
password.addEventListener('input', validateForm);

// Submit handler
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    alert('Login successful (simulation).');
    form.reset();
    submitBtn.disabled = true;
    togglePassword.textContent = 'Show';
  }
});
