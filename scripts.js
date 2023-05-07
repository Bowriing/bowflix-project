document.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body');
  var opacity = 0;
  body.style.opacity = 0;
  setTimeout(function() {
    var intervalID = setInterval(function() {
      opacity += 0.01;
      body.style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(intervalID);
      }
    }, 5);
  }, 250);
});

//Create Account Page
function validatePassword() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match. Please try again.");
    confirmPassword.setCustomValidity("Passwords do not match.");
  } else {
    confirmPassword.setCustomValidity("");
    // You can submit the form here or perform any other action required
  }
}

//Database Scripts
function readJSON() {
  fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData);
    })
    .catch(err => {
      console.error('Error reading JSON:', err);
    });
}

function saveAccountData(data) {
  const accounts = readJSON();
  accounts.push(data);

  const fileData = JSON.stringify({ accounts });
  const blob = new Blob([fileData], { type: 'application/json' });

  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'data.json';
  a.click();
}

document.getElementById('account-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Perform your form validation here

  const formData = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  };

  saveAccountData(formData);
});




