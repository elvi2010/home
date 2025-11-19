const buttonTheme = document.getElementById('themeToggle');

function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        buttonTheme.textContent = '☀️ светлая тема';
    }else{
        buttonTheme.textContent = '🌙 темная тема';
    }
}

buttonTheme.addEventListener('click', toggleTheme);
