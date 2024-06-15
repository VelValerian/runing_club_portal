document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const modalMenu = document.getElementById('modal-menu');
    const closeButton = document.getElementById('close-button');
    const logoModal = document.getElementById('logo-modal');
    const footerModal = document.getElementById('footer-modal');

    hamburgerMenu.addEventListener('click', () => {
        modalMenu.classList.add('open');
        hamburgerMenu.classList.add('hidden'); // Скрываем hamburger-menu
        closeButton.style.display = 'initial';
        logoModal.style.display = 'flex';
        footerModal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        modalMenu.classList.remove('open');
        hamburgerMenu.classList.remove('hidden'); // Показываем hamburger-menu снова
        closeButton.style.display = 'none';
        logoModal.style.display = 'none';
        footerModal.style.display = 'none';
    });

});
