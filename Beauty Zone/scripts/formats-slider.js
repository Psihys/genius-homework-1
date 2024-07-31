const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        760: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    pagination: {
        el: '.pagination',
    },
    navigation: {
        nextEl: '.arrowes-button-2',
        prevEl: '.arrowes-button-1'
    }
});
