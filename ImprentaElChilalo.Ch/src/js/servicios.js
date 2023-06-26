//Scroll reveal.
//ScrollReveal().reveal('.titulo');
ScrollReveal().reveal('.navbar');
ScrollReveal().reveal('.banner-servicios');
ScrollReveal().reveal('.tarjetas');
ScrollReveal().reveal('.contenido');

//Para mejor refresco de la página
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}