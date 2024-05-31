document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const headerLogo = document.getElementById('header-logo');
    const modalMenu = document.getElementById('modal-menu');
    const closeButton = document.getElementById('close-button');

    hamburgerMenu.addEventListener('click', () => {
        modalMenu.classList.add('open');
        hamburgerMenu.classList.add('hidden'); // Скрываем hamburger-menu
        headerLogo.classList.add('hidden'); // Скрываем header-logo
    });

    closeButton.addEventListener('click', () => {
        modalMenu.classList.remove('open');
        hamburgerMenu.classList.remove('hidden'); // Показываем hamburger-menu снова
        headerLogo.classList.remove('hidden'); // Показываем header-logo снова
    });

});
