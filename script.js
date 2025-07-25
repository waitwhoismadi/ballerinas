document.addEventListener("DOMContentLoaded", function () {
    function toggleMobileMenu() {
        const burgerMenu = document.querySelector('.burger-menu');
        const mobileNav = document.querySelector('.mobile-nav');
        const overlay = document.querySelector('.mobile-overlay');

        burgerMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    function closeMobileMenu() {
        const burgerMenu = document.querySelector('.burger-menu');
        const mobileNav = document.querySelector('.mobile-nav');
        const overlay = document.querySelector('.mobile-overlay');

        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
    }

    document.querySelector('.burger-menu').addEventListener('click', toggleMobileMenu);
    document.querySelectorAll('.mobile-nav .nav-item').forEach(item => {
        item.addEventListener('click', closeMobileMenu);
    });
    document.querySelector('.mobile-overlay').addEventListener('click', closeMobileMenu);
});
