nombre = " lucas dalto" ;

frase = `soy ${nombre} y estoy caminando`;

document.write(frase)



backticks    ``
funciones flecha 
const saludar = nombre => document.write(frase)
los elementos se cuentan desde el 0 cero

-----------
function saludar() {
    return "todo okay";
    alert("hola")
}

Let saludo = saludar();

document.write(saludo)
--------------------
Let num1 = 32;
Let num2 = 12;

function suma(){
    Let res = num1 + num2;

    document.write(res);
}

suma()
--------------------------
function saludar(nombre) {
    Let frase = `¡Hola ${nombre}!¿Como estas?`;
    document.write(frase)
}

saludar("pedro")
---------------------

numero aleatorio del 1 al 100
numero = Math.random()*9999;
numero = numero.toString();
num = numero[0] + numero[1];
if (numero[1] == ".") {
    num = numero[0];
}
document.write(num);