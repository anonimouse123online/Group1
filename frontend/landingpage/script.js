// Toggle auth section
const authToggles = document.querySelectorAll(".auth-toggle");
const authSection = document.getElementById("authSection");

authToggles.forEach(toggle => {
  toggle.addEventListener("click", e => {
    e.preventDefault();
    authSection.style.display =
      authSection.style.display === "block" ? "none" : "block";
    window.scrollTo({ top: authSection.offsetTop, behavior: "smooth" });
  });
});

// Hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => navLinks.classList.toggle("show"));

document.addEventListener("click", e => {
  if (window.innerWidth <= 768 &&
      navLinks.classList.contains("show") &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)) {
    navLinks.classList.remove("show");
  }
});

// Tabs
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const authContainer = document.querySelector(".auth-container");
const formContent = document.getElementById("formContent");

// Track current state
let currentTab = "login";

showLogin();

function showLogin() {
  currentTab = "login";
  authContainer.classList.remove("register");

  // ✅ Mobile background
  if (window.innerWidth <= 768) {
    authContainer.style.background = "url('login.jpeg') no-repeat center center/cover";
  } else {
    authContainer.style.background = "#fafafa";
  }

  formContent.innerHTML = `
    <h2>Welcome Back</h2>
    <p>Access your EduEnroll account</p>
    <form>
      <label>Email Address</label>
      <input type="email" placeholder="Enter your email" required>
      <label>Password</label>
      <input type="password" placeholder="Enter your password" required>
      <button type="submit">Log in</button>
    </form>`;

  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
}

function showRegister() {
  currentTab = "register";
  authContainer.classList.add("register");

  // ✅ Mobile background
  if (window.innerWidth <= 768) {
    authContainer.style.background = "url('register.jpeg') no-repeat center center/cover";
  } else {
    authContainer.style.background = "#fafafa";
  }

  formContent.innerHTML = `
    <h2>Create Account</h2>
    <form>
      <label>Full Name</label>
      <input type="text" placeholder="Enter your full name" required>
      <label>Email Address</label>
      <input type="email" placeholder="Enter your email" required>
      <label>Password</label>
      <input type="password" placeholder="Enter your password" required>
      <label>Confirm Password</label>
      <input type="password" placeholder="Confirm your password" required>
      <button type="submit">Create Account</button>
    </form>`;

  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
}

// Event listeners for tab switching
loginBtn.addEventListener("click", showLogin);
registerBtn.addEventListener("click", showRegister);

// ✅ Re-apply correct background on resize
window.addEventListener("resize", () => {
  if (currentTab === "login") {
    showLogin();
  } else {
    showRegister();
  }
});
