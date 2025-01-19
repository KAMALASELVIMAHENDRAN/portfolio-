// Smooth scrolling for navigation links
document.querySelectorAll('nav .nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Hire Me button functionality
function hireMe() {
    alert("Thank you for considering me! Please contact me via email at kamalaselvi497@gmail.com to discuss further details.");
}

// Toggle menu visibility for small screens
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Display the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const button = document.getElementById('darkModeToggle');
    button.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
}
