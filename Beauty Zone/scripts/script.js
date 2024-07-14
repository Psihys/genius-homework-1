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