// Smooth scroll to Contact section when "Join Now" is clicked
document.getElementById('joinBtn').addEventListener('click', function() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
    contactSection.classList.add('highlight');
    setTimeout(() => contactSection.classList.remove('highlight'), 1500);

    // Pre-fill message
    document.getElementById('message').value = "I want to join FitLife Gym!";
});

// Contact form submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
    this.reset();
});

// Pricing plan selection
document.querySelectorAll('.select-plan').forEach(button => {
    button.addEventListener('click', function() {
        const plan = this.dataset.plan;
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
        contactSection.classList.add('highlight');
        setTimeout(() => contactSection.classList.remove('highlight'), 1500);

        // Pre-fill message with selected plan
        document.getElementById('message').value = `I want to join the ${plan} plan!`;
    });
});

// Scroll animations
const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-left, .scroll-right');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

scrollElements.forEach(el => observer.observe(el));
