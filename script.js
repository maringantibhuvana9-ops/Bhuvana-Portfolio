
const themeToggle = document.querySelector("#themeToggle");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const currentYear = document.querySelector("#currentYear");

// Apply the selected theme
function applyTheme(theme) {
    document.body.classList.toggle("light-mode", theme === "light");

    themeToggle.textContent = theme === "light" ? "🌙" : "☀️";

    themeToggle.setAttribute(
        "aria-label",
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
    );
}

// Load the saved theme
const savedTheme = localStorage.getItem("bhuvanaPortfolioTheme") || "dark";
applyTheme(savedTheme);

// Toggle between dark and light themes
themeToggle.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light-mode")
        ? "dark"
        : "light";

    applyTheme(newTheme);
    localStorage.setItem("bhuvanaPortfolioTheme", newTheme);
});

// Display the current year in the footer
currentYear.textContent = new Date().getFullYear();

// Handle contact form submission
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    const name = document.querySelector("#visitorName").value.trim();
    const email = document.querySelector("#visitorEmail").value.trim();
    const subject = document.querySelector("#emailSubject").value.trim();
    const message = document.querySelector("#emailMessage").value.trim();

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    formStatus.textContent = "Opening your email application...";

    const mailto =
        `mailto:maringantibhuvana9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
});