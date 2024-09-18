$(document).ready(function(){
    $('.book-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Form submission logic here
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar ul');
    navbar.classList.toggle('active');
}

