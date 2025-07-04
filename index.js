// script.js

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const buttons = document.querySelectorAll('.btn');
    const homeSection = document.querySelector('.home');
    const aboutSection = document.querySelector('.about');
    const cardSection = document.querySelector('.card');
    const competenciesSection = document.querySelector('.competencies');
    
    // Initially hide all sections except home
    aboutSection.style.display = 'none';
    cardSection.style.display = 'none';
    competenciesSection.style.display = 'none';
    
    // Add click handlers to all buttons
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            // Hide all sections
            homeSection.style.display = 'none';
            aboutSection.style.display = 'none';
            cardSection.style.display = 'none';
            competenciesSection.style.display = 'none';
            
            // Show the corresponding section
            switch(index) {
                case 0: // Home
                    homeSection.style.display = 'block';
                    break;
                case 1: // About
                    aboutSection.style.display = 'block';
                    break;
                case 2: // Business Card
                    cardSection.style.display = 'block';
                    break;
                case 3: // Competencies
                    competenciesSection.style.display = 'block';
                    break;
            }
            
            // Update active button
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Add active state styling
    const style = document.createElement('style');
    style.textContent = `
        .btn.active {
            background: rgba(255, 255, 255, 0.3) !important;
            border-color: rgba(255, 255, 255, 0.7) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize with home visible
    buttons[0].click();
});