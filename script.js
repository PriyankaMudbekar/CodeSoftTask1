
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
    
    window.addEventListener('resize', function () {
        if (window.innerWidth > 600) {
            menu.classList.remove('open');
        }
    });
});
