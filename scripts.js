// Select elements
const homeLink = document.getElementById('home-link');
const projectsLink = document.getElementById('projects-link');
const contactLink = document.getElementById('contact-link');
const homeSection = document.getElementById('home');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');
const contactForm = document.getElementById('contact-form');

// Hide all sections except the home section initially
projectsSection.style.display = 'none';
contactSection.style.display = 'none';

// Event listeners for navigation links
homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    showSection('home');
});

projectsLink.addEventListener('click', function(event) {
    event.preventDefault();
    showSection('projects');
});

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    showSection('contact');
});

// Function to show selected section and hide others
function showSection(sectionId) {
    if (sectionId === 'home') {
        homeSection.style.display = 'block';
        projectsSection.style.display = 'none';
        contactSection.style.display = 'none';
    } else if (sectionId === 'projects') {
        homeSection.style.display = 'none';
        projectsSection.style.display = 'block';
        contactSection.style.display = 'none';
    } else if (sectionId === 'contact') {
        homeSection.style.display = 'none';
        projectsSection.style.display = 'none';
        contactSection.style.display = 'block';
    }
}

// Example: Form submission handling (you can implement AJAX or other logic)
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Example: Form validation and submission logic
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
