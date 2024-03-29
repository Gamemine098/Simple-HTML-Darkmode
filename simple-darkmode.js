const button = document.getElementById("dark-mode-button");
const body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", body.classList.contains("dark-mode")); // Store preference
});

// Restore user's preference on page load
const storedPreference = localStorage.getItem("darkMode");
if (storedPreference === "true") {
  body.classList.add("dark-mode");
}
