// ========================================
// LUX DIGITAL - SCRIPT.JS
// Dynamic & Interactive Features
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // ========================================
    // Navigation Functions
    // ========================================
    
    // Navigate to sections with smooth scroll
    document.getElementById('nav-home').addEventListener('click', function() {
        navigateTo('home');
    });
    
    document.getElementById('nav-about').addEventListener('click', function() {
        navigateTo('about');
    });
    
    document.getElementById('nav-services').addEventListener('click', function() {
        navigateTo('services');
    });
    
    document.getElementById('nav-contact').addEventListener('click', function() {
        navigateTo('contact');
    });
    
    // Button to explore services from home
    document.getElementById('explore-btn').addEventListener('click', function() {
        navigateTo('services');
    });
    
    // Button to contact from home
    document.getElementById('contact-btn').addEventListener('click', function() {
        navigateTo('contact');
    });
    
    function navigateTo(sectionId) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'border-purple-200');
            btn.classList.add('bg-white', 'text-purple-700', 'border-2', 'border-purple-200');
        });
        
        if (sectionId === 'home') {
            document.getElementById('nav-home').classList.remove('bg-white', 'text-purple-700', 'border-purple-200');
            document.getElementById('nav-home').classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'border-purple-200');
        } else if (sectionId === 'about') {
            document.getElementById('nav-about').classList.remove('bg-white', 'text-purple-700', 'border-purple-200');
            document.getElementById('nav-about').classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'border-purple-200');
        } else if (sectionId === 'services') {
            document.getElementById('nav-services').classList.remove('bg-white', 'text-purple-700', 'border-purple-200');
            document.getElementById('nav-services').classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'border-purple-200');
        } else if (sectionId === 'contact') {
            document.getElementById('nav-contact').classList.remove('bg-white', 'text-purple-700', 'border-purple-200');
            document.getElementById('nav-contact').classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'border-purple-200');
        }
        
        const section = document.getElementById(sectionId);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Add animation class on scroll
        section.classList.add('animate-fadeIn');
    }
    
    // ========================================
    // Contact Form Functionality
    // ========================================
    
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Format message for WhatsApp
        const whatsappNumber = '+244959622160';
        const whatsappMessage = encodeURIComponent(
            `Olá Lux Digital! Meu nome é ${name}. Email: ${email}. Mensagem: ${message}`
        );
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
        
        // Reset form and show success message
        this.reset();
        
        alert('Obrigado por sua mensagem! Estamos abrindo o WhatsApp para continuar o contato.');
    });
    
    // ========================================
    // Intersection Observer for Scroll Effects
    // ========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Update active nav button
                const sectionId = entry.target.getAttribute('id');
                updateActiveNavButton(sectionId);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });
    
    function updateActiveNavButton(sectionId) {
        // Skip if it's not one of our main sections
        if (!['home', 'about', 'services', 'contact'].includes(sectionId)) return;
        
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'border-purple-200');
            btn.classList.add('bg-white', 'text-purple-700', 'border-2', 'border-purple-200');
        });
        
        if (sectionId === 'home') {
            document.getElementById('nav-home').classList.remove('bg-white', 'text-purple-700', 'border-purple-200');
            document.getElementById('nav-home').classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'border-purple-200');
        } else if (sectionId === 'about') {
            document.getElementById('nav-about').classList.remove('bg-white', 'text-purple-700', 'border-purple-200');
            document.getElementById('nav-about').classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'border-purple-200');
        } else if (sectionId === 'services') {
            document.getElementById('nav-services').classList.remove('bg-white', 'text-purple-700', 'border-purple-200');
            document.getElementById('nav-services').classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'border-purple-200');
        } else if (sectionId === 'contact') {
            document.getElementById('nav-contact').classList.remove('bg-white', 'text-purple-700', 'border-purple-200');
            document.getElementById('nav-contact').classList.add('bg-gradient-to-r', 'from-purple-600', 'to-pink-600', 'text-white', 'border-purple-200');
        }
    }
    
    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // ========================================
    // Button Click Animations
    // ========================================
    
    document.querySelectorAll('.nav-btn, #explore-btn, #contact-btn, .service-card button').forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // ========================================
    // Input Fields Interaction
    // ========================================
    
    document.querySelectorAll('#contact-form input, #contact-form textarea').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('scale-[1.01]');
            this.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('scale-[1.01]');
        });
    });
    
    // ========================================
    // Service Cards Interactive Features
    // ========================================
    
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // ========================================
    // Window Resize Handler for Responsiveness
    // ========================================
    
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Re-initialize any responsive components if needed
            console.log('Window resized');
        }, 250);
    });
    
    // ========================================
    // Page Load Animation
    // ========================================
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease-in';
            document.body.style.opacity = '1';
        }, 100);
        
        // Add a subtle fade-in to all sections on load
        setTimeout(() => {
            document.querySelectorAll('.section').forEach((section, index) => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.transitionDelay = `${index * 0.1}s`;
            });
        }, 300);
    });
});

// ========================================
// Utility Functions (if needed)
// ========================================

// Function to create custom animations
function animate(element, properties, duration) {
    const start = performance.now();
    
    requestAnimationFrame(function animateFrame(time) {
        const progress = Math.min(1, (time - start) / duration);
        
        // Apply easing function for smooth animation
        const easeProgress = easeInOutCubic(progress);
        
        // Apply properties to element
        for (let prop in properties) {
            if (properties.hasOwnProperty(prop)) {
                if (typeof properties[prop] === 'string' && properties[prop].includes('px')) {
                    const startValue = parseFloat(getComputedStyle(element)[prop].replace('px', ''));
                    const endValue = parseFloat(properties[prop].replace('px', ''));
                    const currentValue = startValue + (endValue - startValue) * easeProgress;
                    element.style[prop] = `${currentValue}px`;
                } else {
                    element.style[prop] = properties[prop];
                }
            }
        }
        
        if (progress < 1) {
            requestAnimationFrame(animateFrame);
        }
    });
}

// Easing function for smoother animations
function easeInOutCubic(t) {
    return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
}