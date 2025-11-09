document.addEventListener('DOMContentLoaded', () => {
    // Toggle navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('show');
        navButtons.classList.toggle('show');
    });

    // Change header style on scroll
    const navbar = document.querySelector('header');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

                if (rect.top <= 60 && rect.bottom >= 60) { 
                    if (section.classList.contains('light')) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                }
        });
    });
});