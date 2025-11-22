 
// 1. Put current year in footer

const yearSpan = document.getElementById("year");
if (yearSpan) {
yearSpan.textContent = new Date().getFullYear();
}


// 2. Theme Toggle (Light/Dark Mode)

const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");

// Optional: Save preference
const isDark = document.body.classList.contains("dark");
localStorage.setItem("theme", isDark ? "dark" : "light");
});
}
 
// Load saved theme on refresh
const savedTheme = localStorage.getItem ("theme");
if (savedTheme === "dark") {
document.body.classList.add("dark");
}

