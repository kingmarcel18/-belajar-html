function sapa() {
    alert("Halo! Saya Marcel, calon Fullstack Developer! 🚀");
}

function toggleMode() {
    document.body.classList.toggle('light-mode');
    const btn = document.querySelector('.btn-toggle');
    if (document.body.classList.contains('light-mode')) {
        btn.textContent = '☀️ Light Mode';
    } else {
        btn.textContent = '🌙 Dark Mode';
    }
}