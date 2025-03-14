function Ej1(){
    let nombre;
    nombre=prompt("Ingrese su nombre");
    console.log(`Hola ${nombre}`);
}

function Ej2(){
    let num1, num2;
    num1=parseInt(prompt("Ingrese el primer numero"));
    num2=parseInt(prompt("Ingrese el segundo numero"));
    console.log(`Suma: ${num1+num2}
Resta: ${num1-num2}
Multiplicacion: ${num1*num2}
Division: ${num1/num2}`);
}

function Ej3(){
    let numero;
    numero=parseInt(prompt("Ingrese un numero"));
    if(numero%2==0){
        console.log('El numero es par');
    }
    else{
        console.log('El numero es impar');
    }
}

function Ej4(){
    let palabra=prompt("Ingrese una palabra");
    console.log(`La palabra contiene ${palabra.length} caracteres`);
}

function Ej5(){
    let palabra=prompt("Ingrese una palabra");
    let numero=parseInt(prompt("Ingrese un numero"));
    for (let i = 1; i <= numero; i++) {
        console.log(palabra);
        
    }
}

function Ej6(){
    let numero=parseInt(prompt("Ingrese un numero"));
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero}x${i}=${numero*i}`);
    }
}

function Ej7(){
    let numeroUsuario;
    let numeroRandom=Math.floor(Math.random()*10)+1;
    do {
        numeroUsuario=parseInt(prompt("Ingrese un numero para adivinar"));
    } while (numeroRandom!==numeroUsuario);
}

function Ej8(){
    let vocal=0;
    let palabra=prompt("Ingrese una palabra");
    let letras=palabra.split('');
    letras.forEach(letra => {
        letra=letra.toLowerCase();
        if(letra=='a'||letra=='e'||letra=='i'||letra=='o'||letra=='u'){
            vocal++;
        }
    });
    console.log(`La palabra tiene ${vocal} vocales`);
}

function Ej9(){
    let palabra=prompt("Ingrese una palabra");
    let letras=palabra.split('');
    letras=letras.reverse();
    let palabraReves=letras.join();
    palabraReves=palabraReves.replaceAll(',','');
    console.log(palabraReves);
}

function Ej10(){
    let palabra=prompt("Ingrese una palabra").toLowerCase();
    let letras=palabra.split('');
    letras=letras.reverse();
    let palabraReves=letras.join();
    palabraReves=palabraReves.replaceAll(',','');
    if(palabraReves==palabra){
        console.log('La palabra es un palindromo');
    }else{
        console.log('La palabra no es un palindromo');
    }
}