const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
    icon.className = savedTheme === 'light-mode' ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        icon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.add('light-mode');
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light-mode');
    }
});