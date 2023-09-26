const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

themeToggle.addEventListener("click", toggleTheme);

function toggleTheme() {
  if (
    root.style.getPropertyValue("--background-color") ===
    "var(--background-color)"
  ) {
    // Switch to dark theme
    root.style.setProperty("--background-color", "var(--dark-background)");
    root.style.setProperty("--text-color", "var(--dark-text)");
    root.style.setProperty("--nav-links-color", "var(--dark-nav-links)");
    root.style.setProperty("--buttons-color", "var(--dark-buttons)");
    root.style.setProperty("--borders-color", "var(--dark-borders)");
  } else {
    // Switch to light theme
    root.style.setProperty("--background-color", "var(--background-color)");
    root.style.setProperty("--text-color", "var(--text-color)");
    root.style.setProperty("--nav-links-color", "var(--nav-links-color)");
    root.style.setProperty("--buttons-color", "var(--buttons-color)");
    root.style.setProperty("--borders-color", "var(--borders-color)");
  }
}
