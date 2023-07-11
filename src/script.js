document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }

  // Simulate authentication by setting a session variable or storing in local storage
  sessionStorage.setItem("loggedIn", "true");

  // Redirect to the store page
  window.location.href = "store.html";
});

// Generate random stars on the background
function generateStars() {
  const container = document.querySelector('.container');
  const numStars = 100;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.animationDuration = `${Math.random() * 2 + 3}s`;
    container.appendChild(star);
  }
}

// Generate moving balls
function generateBalls() {
  const container = document.querySelector('.container');
  const numBalls = 10;

  for (let i = 0; i < numBalls; i++) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.top = `${Math.random() * 100}%`;
    ball.style.left = `${Math.random() * 100}%`;
    ball.style.animationDuration = `${Math.random() * 5 + 3}s`;
    ball.style.animationDelay = `${Math.random() * 3}s`;
    container.appendChild(ball);
  }
}

// Call the necessary functions on page load
window.addEventListener('load', function() {
  generateStars();
  generateBalls();
});

function submitForm(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  
  // Here, you can implement your logic to send the password reset email
  
  openPopup();
  document.getElementById('password-reset-form').reset();
}

function openPopup() {
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
  window.location.href = 'index.html';
}
