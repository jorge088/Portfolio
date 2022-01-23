//Presentacion - efecto maquina de escribir
const typed =new Typed('.typed' , {
    // strings :['Bienvenido','Bienvenida'],
    stringsElement:'#welcome',
    typeSpeed:200,
    startDelay:1000,
    smartBackspace:true,
    backSpeed:200,
    backDelay:1000,
    loop:true
});
//Header - Efecto de cambio de color
window.addEventListener("scroll",function(){
    let header = document.querySelector("header");
    header.classList.toggle("abajo" , window.scrollY>100);
});

let animado=document.querySelectorAll(".animado");
window.addEventListener('scroll',function(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i=0;i<animado.length;i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 450 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarDerecha");
        }
    }
});
let animado2=document.querySelectorAll(".animado2");
window.addEventListener('scroll',function(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i=0;i<animado2.length;i++){
        let alturaAnimado = animado2[i].offsetTop;
        if(alturaAnimado - 450 < scrollTop){
            animado2[i].style.opacity = 1;
            animado2[i].classList.add("mostrarArriba");
        }
    }
});
let animado3=document.querySelectorAll(".animado3");
window.addEventListener('scroll',function(){
    let scrollTop = document.documentElement.scrollTop;
    for(let i=0;i<animado3.length;i++){
        let alturaAnimado = animado3[i].offsetTop;
        if(alturaAnimado - 450 < scrollTop){
            animado3[i].style.opacity = 1;
            animado3[i].classList.add("mostrarAbajo");
        }
    }
});