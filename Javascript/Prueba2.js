
console.log("---------------------------------------------IF-----------------------------------")
let n1=4;
let n2=5;

if (n1>n2 && n1>0) {
    console.log(`${n1} es mayor`)
}

else if(n1==n2){
    console.log(`${n1} y ${n2} son identicos`)
}

else{
    console.log(`${n2} es mayor`)
}

console.log("---------------------------------------WHILE------------------------------------")

let n3=0;
while (n3<=10) {
    n3=n3+1;
    console.log(n3);
}
console.log("Culmino el while",n3)

console.log("-----------------------------DO--WHILE------------------------------------")
let n4=0;
do{
    n4+=1;
    console.log(n4)
}while (n4<=10)
console.log("Aqui finaliza "+n4) 

console.log("--------------------------------FOR------------------------------")
let n5=0;
let k;
for (n5; n5<=10; n5++) {
    k=2*n5
    console.log(k)
}
console.log("Aqui termina el ciclo FOR")

console.log("-----------------------------SWITCH------------------------------------")
let n6=4;

switch (prompt("Clima")) {
    case "Lluviso":
        console.log("Invierno")
        break;
    case "Sol":
        console.log("Verano")
        break;
    case "Frio":
        console.log("Otoño")
        break;    
    default:
        console.log("Ni idea")
        break;
}

switch (prompt("Numero")) {
    case "1":
        console.log("El numero es 1")
        break;
        case 1:
            console.log("El numero es 1")
            break;
    case "2":
        console.log("El numero es 2")
        break;
    default:
        console.log("El numero es diferente")
        break;
}



