/**
 * SkillShift Demo Enhancements
 * Adds smooth scrolling, button interactions, and demo-friendly behavior
 */

(function() {
  'use strict';

  // Smooth scroll for all anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip empty anchors
        if (href === '#' || href === '#!') {
          e.preventDefault();
          return;
        }

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();
          
          const headerOffset = 80; // Account for fixed header if present
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Add highlight effect
          targetElement.style.transition = 'background-color 0.3s ease';
          const originalBg = window.getComputedStyle(targetElement).backgroundColor;
          targetElement.style.backgroundColor = 'rgba(77, 227, 200, 0.1)';
          
          setTimeout(() => {
            targetElement.style.backgroundColor = originalBg;
          }, 1000);
        }
      });
    });
  }

  // Add visual feedback to all buttons
  function initButtonFeedback() {
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  // Add scroll progress indicator
  function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, #4de3c8, #2ba6a0);
      z-index: 9999;
      transition: width 0.1s ease;
      width: 0%;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  // Add active state to navigation on scroll
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      // Update active links if navigation exists
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    });
  }

  // Add form validation feedback
  function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      const emailInputs = form.querySelectorAll('input[type="email"]');
      
      emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
          if (this.value && !this.validity.valid) {
            this.style.borderColor = '#dc3545';
            
            let errorMsg = this.nextElementSibling;
            if (!errorMsg || !errorMsg.classList.contains('error-message')) {
              errorMsg = document.createElement('span');
              errorMsg.classList.add('error-message');
              errorMsg.style.cssText = 'color: #dc3545; font-size: 0.875rem; margin-top: 0.25rem; display: block;';
              errorMsg.textContent = 'Please enter a valid email address';
              this.parentNode.insertBefore(errorMsg, this.nextSibling);
            }
          } else {
            this.style.borderColor = '';
            const errorMsg = this.nextElementSibling;
            if (errorMsg && errorMsg.classList.contains('error-message')) {
              errorMsg.remove();
            }
          }
        });
      });
    });
  }

  // Add analytics tracking simulation (for demo)
  function initAnalyticsTracking() {
    document.querySelectorAll('[data-track]').forEach(element => {
      element.addEventListener('click', function() {
        const trackingData = {
          action: this.getAttribute('data-track'),
          location: this.getAttribute('data-location') || 'unknown',
          element: this.tagName,
          text: this.textContent.trim().substring(0, 50)
        };
        
        console.log('📊 Analytics Event:', trackingData);
        
        // Show subtle feedback in console
        if (window.location.hostname === 'localhost' || window.location.hostname.includes('myshopify')) {
          console.log('%c✓ Tracking event logged', 'color: #4de3c8; font-weight: bold;');
        }
      });
    });
  }

  // Add loading animation for demo
  function initLoadingComplete() {
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
      
      // Fade in animations for elements
      const animatedElements = document.querySelectorAll('.card, .value-prop, .testimonial-card, .faq-item');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      animatedElements.forEach(el => observer.observe(el));
    });
  }

  // Initialize all enhancements
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initSmoothScroll();
        initButtonFeedback();
        initScrollProgress();
        initScrollSpy();
        initFormValidation();
        initAnalyticsTracking();
        initLoadingComplete();
      });
    } else {
      initSmoothScroll();
      initButtonFeedback();
      initScrollProgress();
      initScrollSpy();
      initFormValidation();
      initAnalyticsTracking();
      initLoadingComplete();
    }
  }

  // Run initialization
  init();

  // Add CSS for ripple effect
  const style = document.createElement('style');
  style.textContent = `
    .ripple {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple-animation 0.6s ease-out;
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }

    .btn {
      position: relative;
      overflow: hidden;
    }

    a.active {
      color: #4de3c8 !important;
      font-weight: 600;
    }

    body.loaded {
      animation: fadeIn 0.3s ease-in;
    }

    @keyframes fadeIn {
      from { opacity: 0.9; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  console.log('%c🚀 SkillShift Demo Mode Active', 'background: #0f2b4c; color: #4de3c8; padding: 8px 12px; border-radius: 4px; font-weight: bold;');
  console.log('%cAll interactive features enabled:', 'color: #4de3c8; font-weight: bold;');
  console.log('  ✓ Smooth anchor scrolling');
  console.log('  ✓ Button ripple effects');
  console.log('  ✓ Scroll progress indicator');
  console.log('  ✓ Section highlighting');
  console.log('  ✓ Form validation');
  console.log('  ✓ Analytics tracking (logged to console)');
  console.log('  ✓ Scroll-triggered animations');

})();
