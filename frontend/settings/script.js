// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  const expanded = navLinks.classList.toggle("show");
  hamburger.setAttribute("aria-expanded", expanded);
});

document.addEventListener("click", e => {
  if (window.innerWidth <= 768 &&
      navLinks.classList.contains("show") &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)) {
    navLinks.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

// Load saved settings
function loadSettings() {
  const settings = JSON.parse(localStorage.getItem("userSettings")) || {};
  document.getElementById("twoFactor").checked = settings.twoFactor || false;
  document.getElementById("loginNotifications").checked = settings.loginNotifications || true;
  document.getElementById("browserNotifications").checked = settings.browserNotifications || false;
  document.getElementById("mobileNotifications").checked = settings.mobileNotifications || true;
  document.getElementById("soundNotifications").checked = settings.soundNotifications || true;
  document.getElementById("notificationFrequency").checked = settings.notificationFrequency || true;
  document.getElementById("courseUpdates").checked = settings.courseUpdates || false;
  document.getElementById("assignmentReminders").checked = settings.assignmentReminders || true;
  document.getElementById("gradeNotifications").checked = settings.gradeNotifications || true;
  document.getElementById("weeklyDigest").checked = settings.weeklyDigest || true;
  document.getElementById("marketingEmails").checked = settings.marketingEmails || true;
  document.getElementById("fullName").checked = settings.displayName === "full";
  document.getElementById("firstName").checked = settings.displayName === "first" || !settings.displayName;
  document.getElementById("lightTheme").checked = settings.theme === "light" || !settings.theme;
  document.getElementById("darkTheme").checked = settings.theme === "dark";
  document.getElementById("autoTheme").checked = settings.theme === "auto";
  document.getElementById("grid").checked = settings.layout === "grid";
  document.getElementById("list").checked = settings.layout === "list" || !settings.layout;
  document.getElementById("compact").checked = settings.layout === "compact";
  document.getElementById("lightToggle").checked = settings.lightToggle || false;
  document.getElementById("timeZone").value = settings.timeZone || "PST";
  document.getElementById("language").value = settings.language || "en_US";
}

// Save settings
function saveSettings() {
  const settings = {
    twoFactor: document.getElementById("twoFactor").checked,
    loginNotifications: document.getElementById("loginNotifications").checked,
    browserNotifications: document.getElementById("browserNotifications").checked,
    mobileNotifications: document.getElementById("mobileNotifications").checked,
    soundNotifications: document.getElementById("soundNotifications").checked,
    notificationFrequency: document.getElementById("notificationFrequency").checked,
    courseUpdates: document.getElementById("courseUpdates").checked,
    assignmentReminders: document.getElementById("assignmentReminders").checked,
    gradeNotifications: document.getElementById("gradeNotifications").checked,
    weeklyDigest: document.getElementById("weeklyDigest").checked,
    marketingEmails: document.getElementById("marketingEmails").checked,
    displayName: document.querySelector("input[name='displayName']:checked") ? document.querySelector("input[name='displayName']:checked").value : "full",
    theme: document.querySelector("input[name='theme']:checked") ? document.querySelector("input[name='theme']:checked").value : "light",
    layout: document.querySelector("input[name='layout']:checked") ? document.querySelector("input[name='layout']:checked").value : "list",
    lightToggle: document.getElementById("lightToggle").checked,
    timeZone: document.getElementById("timeZone").value,
    language: document.getElementById("language").value
  };
  localStorage.setItem("userSettings", JSON.stringify(settings));
}

// Event listeners for settings changes
document.querySelectorAll("input[type='checkbox'], input[type='radio'], select").forEach(element => {
  element.addEventListener("change", saveSettings);
});

// Password change alert (placeholder)
document.getElementById("passwordChange").addEventListener("click", () => {
  alert("Password change functionality is not implemented yet. Please contact support.");
});

// Danger zone alerts (placeholder)
document.getElementById("exportData").addEventListener("click", () => {
  alert("Export data functionality is not implemented yet. Please contact support.");
});
document.getElementById("deactivateAccount").addEventListener("click", () => {
  if (confirm("Are you sure you want to deactivate your account? This action can be reversed.")) {
    alert("Deactivation process started. Please contact support to complete.");
  }
});
document.getElementById("deleteAccount").addEventListener("click", () => {
  if (confirm("Are you sure you want to permanently delete your account? This action is irreversible.")) {
    alert("Deletion process started. Please contact support to complete.");
  }
});

// Load settings on page load
window.addEventListener("load", loadSettings);