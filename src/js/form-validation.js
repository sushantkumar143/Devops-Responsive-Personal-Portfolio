const contactForm = document.getElementById('contact-form');
const status = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    
    if(!email.includes('@')) {
        status.innerText = "Please enter a valid email.";
        status.style.color = "red";
    } else {
        status.innerText = "Deployment successful! I'll get back to you soon.";
        status.style.color = "var(--primary-color)";
        contactForm.reset();
    }
});