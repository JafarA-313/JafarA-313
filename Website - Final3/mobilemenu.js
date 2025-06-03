document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));

    mobileMenu.addEventListener('click', (e) => {
        if (e.target.textContent.trim() === 'Products') {
            e.preventDefault(); // Prevent link jump
            const dropdown = e.target.nextElementSibling;
            const caret = e.target.querySelector('i');
            if (dropdown && dropdown.classList.contains('dropdown')) {
                dropdown.classList.toggle('open');

                // Toggle caret icon
                if (caret) {
                    caret.classList.toggle('fa-caret-down');
                    caret.classList.toggle('fa-caret-up');
                }
            }
        }
    });
})
