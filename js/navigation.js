document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    function changeSection(currentHash) {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const activeSection = document.querySelector(currentHash);
        activeSection.style.display = 'block';

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentHash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetHash = e.target.getAttribute('href');
            window.location.hash = targetHash;
            changeSection(targetHash);
        });
    });

    // Handle browser back/forward
    window.addEventListener('hashchange', () => {
        changeSection(window.location.hash || '#about');
    });

    // Load the initial section
    if (window.location.hash) {
        changeSection(window.location.hash);
    } else {
        changeSection('#about');
    }
});