const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
