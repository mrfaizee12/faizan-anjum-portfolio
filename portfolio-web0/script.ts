// TypeScript function for "Hire me" button
function hireMe(): void {
    alert("Thank you for showing interest! You can contact me at 03299267298/faizee956@gmail.com.");
}

const roles: string[] = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
let roleIndex: number = 0;
let charIndex: number = 0;
const typewriterText = document.getElementById("typewriter-text") as HTMLElement;

function typeWriter(): void {
    if (roleIndex >= roles.length) roleIndex = 0; // Reset role index if it exceeds

    // Get the current role and current character
    const currentRole: string = roles[roleIndex];
    typewriterText.style.color = "#50c878"; // Set text color

    // Display the current character
    typewriterText.textContent = currentRole.slice(0, charIndex);

    // If full word is typed, reset charIndex and move to next role after delay
    if (charIndex < currentRole.length) {
        charIndex++;
        setTimeout(typeWriter, 150); // Adjust speed for typing effect
    } else {
        charIndex = 0;
        roleIndex++;
        setTimeout(typeWriter, 2000); // Pause before next role starts
    }
}

window.onload = typeWriter; // Start on page load

function toggleMenu(): void {
    const navLinks = document.getElementById('nav-links') as HTMLElement;
    const closeIcon = document.getElementById('close-icon') as HTMLElement;
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    closeIcon.style.display = navLinks.style.display === 'flex' ? 'block' : 'none';
}

// Select all service card elements
const serviceCards = document.querySelectorAll('.service-card');

function applyHoverEffects(): void {
    serviceCards.forEach((card: Element) => {
        // Add mouseover event for hover effect
        card.addEventListener('mouseover', () => {
            (card as HTMLElement).style.color = 'black'; // Set text color to black on hover
        });

        // Add mouseout event to revert the effect
        card.addEventListener('mouseout', () => {
            (card as HTMLElement).style.color = ''; // Reset to default color
        });
    });
}

// Call the function to apply hover effects
applyHoverEffects();

// Form submission function
document.querySelector('.contact-form')?.addEventListener('submit', function(event: Event) {
    event.preventDefault(); // Prevent actual form submission

    // Get form fields
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const message = (document.getElementById('message') as HTMLTextAreaElement).value.trim();

    // Check if all fields are filled
    if (name && email && phone && message) {
        alert("Your message was successfully submitted. Thank you!");
        // Clear form fields
        (document.getElementById('name') as HTMLInputElement).value = '';
        (document.getElementById('email') as HTMLInputElement).value = '';
        (document.getElementById('phone') as HTMLInputElement).value = '';
        (document.getElementById('message') as HTMLTextAreaElement).value = '';
    } else {
        alert("Please fill in all fields before submitting.");
    }
});
