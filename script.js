
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.querySelector('.menu-icon');
  const xIcon = document.querySelector('.x-icon');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    xIcon.classList.toggle('hidden');
  });
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      xIcon.classList.add('hidden');
    });
  });

  // Process steps accordion
  const collapsibleTriggers = document.querySelectorAll('.collapsible-trigger');
  
  collapsibleTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.parentElement.nextElementSibling.nextElementSibling;
      content.classList.toggle('open');
    });
  });

  // Material category toggle
  function toggleCategory(id) {
    const content = document.getElementById(id);
    if (content) {
      content.classList.toggle('hidden');
    }
  }
  
  // Make toggleCategory available globally
  window.toggleCategory = toggleCategory;

  // Carousel functionality
  const carousel = document.querySelector('.carousel-content');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  const items = document.querySelectorAll('.carousel-item');
  
  if (carousel && prevButton && nextButton) {
    let currentIndex = 0;
    const itemWidth = carousel.offsetWidth;
    
    nextButton.addEventListener('click', () => {
      if (currentIndex < items.length - 1) {
        currentIndex++;
        carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
      } else {
        currentIndex = 0;
        carousel.style.transform = `translateX(0)`;
      }
    });
    
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
      } else {
        currentIndex = items.length - 1;
        carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
      }
    });
  }

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Typically you would send the form data to a server here
      // For this static HTML version, we'll just simulate a successful submission
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      
      console.log('Form submitted:', { name, email, phone, message });
      
      // Show a simple alert (in a real implementation, you would use a nicer notification)
      alert('Consultation request submitted! We will contact you shortly.');
      
      // Reset the form
      contactForm.reset();
    });
  }

  // Current year in footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
