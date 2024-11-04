var _a;
// TypeScript function for "Hire me" button
function hireMe() {
    alert("Thank you for showing interest! You can contact me at 03299267298/faizee956@gmail.com.");
}
var roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
var roleIndex = 0;
var charIndex = 0;
var typewriterText = document.getElementById("typewriter-text");
function typeWriter() {
    if (roleIndex >= roles.length)
        roleIndex = 0; // Reset role index if it exceeds
    // Get the current role and current character
    var currentRole = roles[roleIndex];
    typewriterText.style.color = "#50c878"; // Set text color
    // Display the current character
    typewriterText.textContent = currentRole.slice(0, charIndex);
    // If full word is typed, reset charIndex and move to next role after delay
    if (charIndex < currentRole.length) {
        charIndex++;
        setTimeout(typeWriter, 150); // Adjust speed for typing effect
    }
    else {
        charIndex = 0;
        roleIndex++;
        setTimeout(typeWriter, 2000); // Pause before next role starts
    }
}
window.onload = typeWriter; // Start on page load
function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    var closeIcon = document.getElementById('close-icon');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    closeIcon.style.display = navLinks.style.display === 'flex' ? 'block' : 'none';
}
// Select all service card elements
var serviceCards = document.querySelectorAll('.service-card');
function applyHoverEffects() {
    serviceCards.forEach(function (card) {
        // Add mouseover event for hover effect
        card.addEventListener('mouseover', function () {
            card.style.color = 'black'; // Set text color to black on hover
        });
        // Add mouseout event to revert the effect
        card.addEventListener('mouseout', function () {
            card.style.color = ''; // Reset to default color
        });
    });
}
// Call the function to apply hover effects
applyHoverEffects();
// Form submission function
(_a = document.querySelector('.contact-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission
    // Get form fields
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();
    // Check if all fields are filled
    if (name && email && phone && message) {
        alert("Your message was successfully submitted. Thank you!");
        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
    }
    else {
        alert("Please fill in all fields before submitting.");
    }
});
