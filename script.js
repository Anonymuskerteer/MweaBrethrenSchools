(function(){
    emailjs.init("yB1yFqGMteONil0Qd");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_f56pqma', 'template_qyd3mzf', this)
        .then(function() {
            alert('Your message has been sent!');
        }, function(error) {
            console.log('FAILED...', error);
        });
});

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    if (index >= totalSlides) {
        carouselInner.style.transition = 'none';
        currentIndex = 0;
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
        setTimeout(() => {
            carouselInner.style.transition = 'transform 0.5s ease';
            nextSlide();
        }, 50);
    } else {
        currentIndex = index;
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setInterval(nextSlide, 5000);
});
