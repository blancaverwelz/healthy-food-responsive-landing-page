const toggleMenu = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-menu')[0]


toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');

})