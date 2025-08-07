// Create floating elements for hero section
document.addEventListener('DOMContentLoaded', function() {
    const floatingContainer = document.querySelector('.floating-elements');
    
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        
        // Random size
        const size = Math.random() * 60 + 10;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        
        // Random position
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        element.style.animationDuration = `${Math.random() * 15 + 10}s`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        
        floatingContainer.appendChild(element);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = 'none';
        }
    });

            
  
});