// ==================== MOBILE MENU TOGGLE ====================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for styling
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==================== BACK TO TOP BUTTON ====================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== CONTACT FORM HANDLING ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    // Create WhatsApp message
    const whatsappMessage = `
*New Service Request from Website*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Service Type:* ${formData.service}
*Message:* ${formData.message}
    `.trim();
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/919043322123?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Show success message
    alert('Thank you! Redirecting to WhatsApp to send your request...');
    
    // Reset form
    contactForm.reset();
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.service-card, .specialized-card, .info-card, .stat-item, .areas-column'
);

animateElements.forEach(element => {
    observer.observe(element);
});

// ==================== ACTIVE NAV LINK ====================
const sections = document.querySelectorAll('section[id]');

function setActiveNavLink() {
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNavLink);

// ==================== PHONE NUMBER VALIDATION ====================
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function(e) {
    // Remove non-numeric characters
    let value = e.target.value.replace(/\D/g, '');
    
    // Limit to 10 digits
    if (value.length > 10) {
        value = value.slice(0, 10);
    }
    
    e.target.value = value;
});

// ==================== PREVENT FORM SPAM ====================
let formSubmitted = false;

contactForm.addEventListener('submit', function(e) {
    if (formSubmitted) {
        e.preventDefault();
        alert('Please wait before submitting again.');
        return false;
    }
    
    formSubmitted = true;
    
    // Reset after 30 seconds
    setTimeout(() => {
        formSubmitted = false;
    }, 30000);
});

// ==================== SERVICE SELECTOR CHANGE ====================
const serviceSelect = document.getElementById('service');

serviceSelect.addEventListener('change', function() {
    if (this.value === 'other') {
        const messageTextarea = document.getElementById('message');
        if (!messageTextarea.value) {
            messageTextarea.placeholder = 'Please describe your specific requirement in detail...';
        }
    }
});

// ==================== LAZY LOAD IMAGES ====================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==================== ENHANCE CALL BUTTONS ====================
const callButtons = document.querySelectorAll('a[href^="tel:"]');

callButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Track call button clicks (you can integrate with analytics here)
        console.log('Call button clicked');
    });
});

// ==================== ENHANCE WHATSAPP BUTTONS ====================
const whatsappButtons = document.querySelectorAll('a[href^="https://wa.me"]');

whatsappButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Track WhatsApp button clicks (you can integrate with analytics here)
        console.log('WhatsApp button clicked');
    });
});

// ==================== HANDLE EXTERNAL LINKS ====================
const externalLinks = document.querySelectorAll('a[href^="http"]');

externalLinks.forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(() => {
    setActiveNavLink();
}, 10));

// ==================== PAGE LOAD ANALYTICS ====================
window.addEventListener('load', () => {
    console.log('iFix website loaded successfully');
    console.log('Ready to serve customers!');
});

// ==================== HANDLE 404 IMAGES ====================
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Already handled by onerror in HTML, but this is a fallback
            console.log('Image failed to load:', this.src);
        });
    });
});

// ==================== ADD CURRENT YEAR TO COPYRIGHT ====================
const currentYear = new Date().getFullYear();
const copyrightElements = document.querySelectorAll('.footer-bottom p');
if (copyrightElements.length > 0) {
    copyrightElements[0].innerHTML = `&copy; ${currentYear} iFix. All Rights Reserved.`;
}

// ==================== CONSOLE MESSAGE ====================
console.log('%c🔧 iFix - Laptop Service Center', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%c📞 Call us: +91 90433 22123', 'color: #10b981; font-size: 14px;');
console.log('%c💻 Professional laptop repair and sales in Tambaram, Chennai', 'color: #6b7280; font-size: 12px;');
