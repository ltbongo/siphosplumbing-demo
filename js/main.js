/**
 * Sipho's Plumbing — Main JavaScript
 * Handles mobile nav toggle, smooth scroll, and form validation
 */

(function() {
  'use strict';

  // --- Mobile Navigation ---
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!isExpanded));
      navMenu.classList.toggle('is-open');
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav__link').forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        navToggle.focus();
      }
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Form validation ---
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const name = form.querySelector('#name');
      const phone = form.querySelector('#phone');
      const consent = form.querySelector('#consent');
      
      let isValid = true;
      
      [name, phone].forEach(function(input) {
        if (!input.value.trim()) {
          input.classList.add('is-error');
          isValid = false;
        } else {
          input.classList.remove('is-error');
        }
      });
      
      if (!consent.checked) {
        isValid = false;
      }
      
      if (isValid) {
        // Demo: show success message
        alert('Thanks for your enquiry! This is a demo build — in production this would submit to the contact form backend.');
        form.reset();
      } else {
        // Focus first invalid field
        const firstError = form.querySelector('.is-error');
        if (firstError) firstError.focus();
      }
    });

    // Remove error state on input
    form.querySelectorAll('.form-input').forEach(function(input) {
      input.addEventListener('input', function() {
        this.classList.remove('is-error');
      });
    });
  }

  // --- Header shadow on scroll ---
  const header = document.querySelector('.header');
  if (header) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 10) {
        header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }
})();
