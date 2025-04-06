
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved theme preference or use device preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.querySelector('.menu-icon');
  const xIcon = document.querySelector('.x-icon');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  if (menuToggle && mobileMenu) {
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
  }

  // Process steps accordion
  const collapsibleTriggers = document.querySelectorAll('.collapsible-trigger');
  
  collapsibleTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.parentElement.nextElementSibling.nextElementSibling;
      content.classList.toggle('open');
    });
  });

  // Material category toggle
  window.toggleCategory = function(id) {
    const content = document.getElementById(id);
    if (content) {
      content.classList.toggle('hidden');
    }
  };

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

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
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

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  const revealOnScroll = () => {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('revealed');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Check on load

  // Current year in footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Theme toggle functionality
  const themeToggleBtn = document.getElementById('themeToggle');
  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});
