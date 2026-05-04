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

async function getJoke() {
    const jokeText = document.getElementById('joke-text');
    jokeText.textContent = 'Loading...';
    
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    
    jokeText.textContent = data.setup + ' ... ' + data.punchline;
}