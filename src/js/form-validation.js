const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple visual feedback
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<span>Sending...</span>';
    btn.disabled = true;

    // Simulate API Call
    setTimeout(() => {
        alert('Message sent successfully! (Simulation)');
        btn.innerHTML = originalText;
        btn.disabled = false;
        contactForm.reset();
    }, 1500);
});