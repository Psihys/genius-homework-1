 document.addEventListener('DOMContentLoaded', function() {
            const callButton = document.querySelector('.header__call-button');
            const closeButton = document.querySelector('.close-button');
            const backdrop = document.getElementById("backdrop")

     callButton.addEventListener('click', function () {
         backdrop.classList.remove('is-hidden');
         backdrop.classList.add('backdrop')
            });

            closeButton.addEventListener('click', function() {
                backdrop.classList.add('hidden');
                 backdrop.classList.remove('backdrop')
            });
 });
        
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