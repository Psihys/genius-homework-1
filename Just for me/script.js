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
        clickable: true,
        bulletClass: 'pagination__button',
        bulletActiveClass: 'pagination__button--active' // Optional: Add a class for active bullet styling
    },
    navigation: {
        nextEl: '.arrowes-button-1',
        prevEl: '.arrowes-button-2'
    }
});
