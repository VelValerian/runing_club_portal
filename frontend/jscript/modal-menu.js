document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const hamburgerHead = document.getElementById('hamburger-head');
    const modalHead = document.getElementById('modal-head');
    const closeButton = document.getElementById('close-button');

    hamburgerMenu.addEventListener('click', () => {
        modalHead.classList.add('open');
        hamburgerHead.classList.add('hidden'); // Скрываем hamburger-menu
    });

    closeButton.addEventListener('click', () => {
        modalHead.classList.remove('open');
        hamburgerHead.classList.remove('hidden'); // Показываем hamburger-menu снова
    });

});
