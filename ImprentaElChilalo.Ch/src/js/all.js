//Para cambiar efectos del navegador(background, letras de enlaces e imagen).
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var logo = document.querySelector('.logo');
    if (window.scrollY > 120) {
        navbar.classList.add('scrolled');
        logo.src = 'media/Logo con letra negra (1).png';
    } else {
        navbar.classList.remove('scrolled');
        logo.src = 'media/Logo con letra blanca (1).png';
    }
});
