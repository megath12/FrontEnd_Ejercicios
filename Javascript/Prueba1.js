
console.log("Variables---------------------------------------------")
var num1= 4;
var num2= 12;
var numle= '4';
console.log("El numero uno es: "+num1+"\nEl numero dos es: "+num2)

console.log("Cadenas-----------------------------------------------")
var frase1="Esto es un ejemplo 1 ";
var frase2=' Esto es un ejemplo "2" ';
var frase4=`Buenas bueeeeenasss  tu numero es: ${num2}`;

console.log(frase1+frase2)
console.log(frase4)

console.log("Condicionales--------------------------------------")
console.log(num1>num2)
console.log(num2=numle)
console.log(num1==numle)
console.log(num1===numle)
console.log(num1!=num2)

console.log("-------------AND------------OR----------------------")
console.log(num1>3 && num2<100)
console.log(num1>100 || num2>100)

console.log("------------------Arreglos--------------------------")

let aston=[42,545,767,8,565,565,56,343,15,0,45];
console.log(aston[2])

aston.push(123)
aston.push(99)
console.log(aston)

let trav=["hola", "skyline", "cubo", "botella", "audifonos", "agua"];
console.log(trav[3]);
trav.push("beunaaaas");    
console.log(trav);

console.log(trav.length); 

console.log("-----------Objetos-----------------------------------")

let explorer={
    nombre: "nombre del explorer",
    email: "correo@innovaccion.com",
    registro: 122123231,
    mision: "Frontend",
    proyectos: ["abogabot, pasteleria, vacunacion"],
    ppersonal: {
        escolar: "escuela",
        profesional: "trabajo",
        peronal: "hobby"
    }
}

console.log(explorer)
console.log(explorer.email)

