const swiper = new Swiper('.my-swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        waitForTransition: false,
    },
    allowTouchMove: false,
    grabCursor: false,
    resistance: false,
    resistanceRatio: 0,
    preventInteractionOnTransition: true,
    simulateTouch: false,
    touchRatio: 0,
    noSwiping: true,
    noSwipingClass: 'swiper-slide',
});

