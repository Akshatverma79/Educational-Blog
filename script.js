function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Update button text based on the theme
    const button = document.getElementById('themeToggle');
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Light Mode';
    } else {
        button.textContent = 'Dark Mode';
    }
}
