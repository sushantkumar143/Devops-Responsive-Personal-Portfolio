// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded', () => {
    // 1. Hide Loader
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);

    // 2. Horizontal Scroll for Projects
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
        const sections = gsap.utils.toArray(".project-card");
        const container = document.querySelector(".projects-horizontal");
        
        // Calculate the total distance to scroll: 
        // Total width of all cards minus the width of the screen
        const scrollAmount = container.scrollWidth - window.innerWidth;

        gsap.to(container, {
            x: -scrollAmount,
            ease: "none",
            scrollTrigger: {
                trigger: ".projects-section",
                pin: true,
                scrub: 1,
                start: "top top", // Starts when section hits top of viewport
                end: () => `+=${scrollAmount}`, // Ends exactly when cards finish
                invalidateOnRefresh: true, // Recalculates if window is resized
            }
        });
    });

    // 3. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
});