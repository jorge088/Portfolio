// function escribir(){
//     for(let i=0 ;i<=10;i++){
//         document.write("<h1 style='color:red';> HOLA MUNDO</h2>");
//         if(i==5){
//             break;
//         }
//     }
// }
// escribir();

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


var prese = document.createElement("p");
var texto = document.createTextNode("NUEVO TEXTO");
prese.appendChild(texto);
prese.setAttribute("style","color:red;font-size:40px;text-align:center;")

var padre = document.getElementById('presentacion').parentNode;
padre.appendChild(prese);
document.write(prese.innerHTML);
console.log(prese.innerHTML);