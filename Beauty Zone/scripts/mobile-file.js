document.addEventListener('DOMContentLoaded', function() {
            const burgerButton = document.getElementById("burger_button");
            const closeButton = document.querySelector('.close-burger-button');
            const menu = document.getElementById("mobile-menu")

     burgerButton.addEventListener('click', function () {
         menu.classList.add('is-open')
            });

            closeButton.addEventListener('click', function() {
                menu.classList.remove('is-open');
            });
        });