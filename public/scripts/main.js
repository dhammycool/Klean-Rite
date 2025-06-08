
document.addEventListener('DOMContentLoaded', function () {

   const faqs = document.querySelectorAll('.faq');

  faqs.forEach((faq) => {
    const btn = faq.querySelector('.faq-question');

    btn.addEventListener('click', () => {
 
      faqs.forEach(f => {
        if (f !== faq) f.classList.remove('open');
      });

      
      faq.classList.toggle('open');
    });
  });


  const counters = document.querySelectorAll('.counter');
const speed = 100; // Lower is faster

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 20); // Adjust speed of animation
    } else {
      counter.innerText = target; // Ensure it ends exactly on target
    }
  };

  // Optionally trigger when in view using IntersectionObserver
  updateCount();
});


  const slide = document.querySelector('.carousel-slide');
  const totalImages = document.querySelectorAll('.carousel-slide img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let counter = 0;
  

  function updateCarousel() {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    counter = (counter + 1) % totalImages.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + totalImages.length) % totalImages.length;
    updateCarousel();
  });

  setInterval(() => {
    counter = (counter + 1) % totalImages.length;
    updateCarousel();
  }, 5000)

 })
 
 