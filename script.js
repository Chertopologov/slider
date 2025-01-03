document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-arrow.prev');
    const nextButton = document.querySelector('.slider-arrow.next');
    const dotsContainer = document.querySelector('.slider-dots');
    const dots = document.querySelectorAll('.slider-dot');
     const sliderNav = document.querySelector('.slider-nav');


    let currentSlide = 0;
    let navLinks = [];


     function setActive(elements, index){
         elements.forEach((element, i) => {
             element.classList.toggle('active', i === index);
         });
     }


    function updateSlider() {
        setActive(slides, currentSlide)
        setActive(dots, currentSlide);
         updateNavLinks();
    }


   function updateNavLinks() {
        const activeSlide = slides[currentSlide];
        navLinks = Array.from(sliderNav.querySelectorAll('a'));
        navLinks.forEach((link, index) => {
            link.setAttribute('data-slide', currentSlide);
             link.classList.toggle('active',index === 0)
         });
    }


    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
    }

    function handleClick(event) {
        if (event.target.closest('.slider-dot')) {
            const dot = event.target.closest('.slider-dot');
             const slideIndex = parseInt(dot.getAttribute('data-slide'));
              goToSlide(slideIndex);
        } else if (event.target.closest('.slider-nav a')) {
            event.preventDefault();
            const link = event.target.closest('.slider-nav a');
             const slideIndex = parseInt(link.getAttribute('data-slide'));
              goToSlide(slideIndex);
       }
    }


    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }


    dotsContainer.addEventListener('click', handleClick);
    sliderNav.addEventListener('click', handleClick);
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    updateSlider();
});