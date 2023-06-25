//Variables
let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionada = document.getElementById("precio");

//Funcion que carga la info del item seleccionado
function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "3px solid #e7705b";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo";

    precioSeleccionada.innerHTML = item.getElementsByTagName("span")[0].innerHTML;
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0; i < items.length; i++){
        items[i].style.border = "none";
    }
}
//Cierra el div max. y cierra los estilos anteriores
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0";
    seleccion.style.opacity = "0";
    quitarBordes();
    var items = document.querySelectorAll('.mostrador .fila .item');
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
}

//Afectar estilos de los banners de productos al hacerles click
var items = document.querySelectorAll('.mostrador .fila .item');
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
        for (var j = 0; j < items.length; j++) {
            items[j].classList.remove('active');
        }
        this.classList.add('active');
    });
}

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

//Scroll reveal
