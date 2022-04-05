

const cuadrado=function(x){
    return x*x;
}

let h=8;
let g=cuadrado(h);
console.log(g);

const ruido=function(){
    console.log("Esto es ruido");
}

ruido();


const potencia=function(ba,ex){
    let io=1
    let aux=1;
    for (io; io<=ex; io++) {
        aux=aux*ba
    }
    return aux;
}



let ty=prompt("Escribe la base")
let tu=prompt("Escribe la potencia")
console.log(potencia(ty,tu))


console.log(suma(4,11))

function suma(x,y){
    return x+y;
}

const resta = (x,y) =>{
    return x-y;
}
console.log(resta(34,53))

const multi=(x,y)=>{
    return x*y;
}
console.log(multi(5,7))

const nombra=(x)=>{
    console.log("Bienvenido"+x)
}

nombra(" André")

//                              ARROW FUNCTION
const sumul=(x,y,z) =>{
    return (x+y)*z
}
console.log(sumul(2,3,4))

//                              FUNCTION DIRECTA
function prro(x,y,z){
    return (x+y)*z
}
console.log(prro(1,2,3))

//                              FUNCTION ()                    
const aston=function(x,y,z){
    return (x+y)*z
}
console.log(aston(8,4,5))


console.log("----------------------Excepciones----------------------")

function preguntaDireccion(pregunta) {
    let result = prompt(pregunta);
    if (result.toLowerCase() == "izquierda") return "I";
    if (result.toLowerCase() == "derecha") return "D";
    throw new Error("Dirección inválida: " + result);
  }
  
  function mirar() {
    if (preguntaDireccion("A que lado?") == "I") {
      return "una casa";
    } else {
      return "2 osos hambrientos";
    }
  }
  
  try {
    console.log("Mira a ", mirar());
  } catch (error) {
    console.log("Hubo un error: " + error);
  }
  

