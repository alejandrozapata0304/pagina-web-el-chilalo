var header = document.getElementById('Header')

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = '#ef7a15'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})