const form = document.querySelector('.form');
const snackbar = document.getElementById('snackbar');
const closeBtn = document.querySelector('.snackbar__close');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    showSnackbar();
    setTimeout(() => form.reset(), 500);
});

function showSnackbar() {
    snackbar.classList.add('show');

    // Убираем старые обработчики на всякий случай
    closeBtn.removeEventListener('click', hideSnackbar);
    closeBtn.addEventListener('click', hideSnackbar);

    // Авто-скрытие
    setTimeout(hideSnackbar, 20000);
}

function hideSnackbar() {
    snackbar.classList.remove('show');
}
