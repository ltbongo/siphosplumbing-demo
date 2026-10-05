(function(){
  'use strict';
  const navToggle=document.querySelector('.nav__toggle');
  const navMenu=document.getElementById('nav-menu');
  if(navToggle && navMenu){
    navToggle.addEventListener('click',function(){
      const isExpanded=this.getAttribute('aria-expanded')==='true';
      this.setAttribute('aria-expanded',String(!isExpanded));
      navMenu.classList.toggle('is-open');
    });
    navMenu.querySelectorAll('.nav__link').forEach(function(link){
      link.addEventListener('click',function(){
        navToggle.setAttribute('aria-expanded','false');
        navMenu.classList.remove('is-open');
      });
    });
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape' && navMenu.classList.contains('is-open')){
        navToggle.setAttribute('aria-expanded','false');
        navMenu.classList.remove('is-open');
        navToggle.focus();
      }
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click',function(e){
      const targetId=this.getAttribute('href');
      if(targetId==='#')return;
      const target=document.querySelector(targetId);
      if(target){
        e.preventDefault();
        const headerHeight=document.querySelector('.header').offsetHeight;
        const targetPosition=target.getBoundingClientRect().top+window.pageYOffset-headerHeight-20;
        window.scrollTo({top:targetPosition,behavior:'smooth'});
      }
    });
  });
  const form=document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name=form.querySelector('#name');
      const phone=form.querySelector('#phone');
      const consent=form.querySelector('#consent');
      let isValid=true;
      [name,phone].forEach(function(input){
        if(!input.value.trim()){input.classList.add('is-error');isValid=false;}else{input.classList.remove('is-error');}
      });
      if(!consent.checked){isValid=false;}
      if(isValid){
        alert('Thanks for your enquiry! This is a demo build — no data is sent.');
        form.reset();
      }else{
        const firstError=form.querySelector('.is-error');
        if(firstError)firstError.focus();
      }
    });
    form.querySelectorAll('.form-input').forEach(function(input){
      input.addEventListener('input',function(){this.classList.remove('is-error');});
    });
  }
  const header=document.querySelector('.header');
  if(header){
    window.addEventListener('scroll',function(){
      if(window.pageYOffset>10){header.style.boxShadow='0 1px 3px rgba(0,0,0,0.1)';}else{header.style.boxShadow='none';}
    },{passive:true});
  }
  // Intersection Observer reveals
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:0.15,rootMargin:'0px 0px -50px 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){observer.observe(el);});
  }
  // Counter animation
  if('IntersectionObserver' in window){
    const counters=document.querySelectorAll('[data-count]');
    const counterObserver=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          const el=entry.target;
          const target=parseFloat(el.getAttribute('data-count'));
          const isInt=Number.isInteger(target);
          const duration=1200;
          const start=performance.now();
          function step(now){
            const p=Math.min(1,(now-start)/duration);
            const eased=1-Math.pow(1-p,3);
            const val=target*eased;
            el.textContent=isInt?Math.floor(val)+'+':val.toFixed(1);
            if(p<1)requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        }
      });
    },{threshold:0.5});
    counters.forEach(function(c){counterObserver.observe(c);});
  }
})();
