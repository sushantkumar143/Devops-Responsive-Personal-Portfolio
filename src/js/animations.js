window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal-text');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});