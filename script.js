const button = document.querySelector('#button');
const dropdownMenu = document.querySelector('#dropdown');

button.addEventListener('click', function(e) {
    e.preventDefault();

    dropdownMenu.classList.toggle('hide');

});