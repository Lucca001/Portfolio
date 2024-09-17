document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');

    if (menuButton) {
        menuButton.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
});
