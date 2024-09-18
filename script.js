$(document).ready(function(){
    $('.book-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,   // Pause slider on hover
        pauseOnFocus: true,   // Pause slider when an element inside gains focus
        speed: 800,           // Increase the transition speed
        fade: false,          // Can be changed to `true` for a fade effect between slides
        cssEase: 'cubic-bezier(0.25, 1, 0.5, 1)',  // Smooth easing
        variableWidth: true,  // Dynamically adjust slide width
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,  // Show 2 slides for medium devices
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,  // 2 slides for smaller tablets
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,  // Single slide for mobile devices
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Form submission event listener (unchanged)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Form submission logic here
});
