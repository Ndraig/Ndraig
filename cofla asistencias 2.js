const sumar = (num1,num2) => {
    return parseInt(num1) + parseInt(num2);
 }

 const restar = (num1,num2) => {
    return parseInt(num1) + parseInt(num2);
 }

 const dividir = (num1,num2) => {
    return parseInt(num1) + parseInt(num2);
 }

 const miltiplicar = (num1,num2) => {
    return parseInt(num1) + parseInt(num2);
 }



 alert("¿que operacion deseas realizar?");
 operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");

 if (operacion == 1) {
     Let numero1 = prompt("primer numero para sumar");
     Let numero2 = prompt("segundo numero para sumar");
     resultado = suma(numero1,numero2);
     alert( `tu resultado es ${resultado}`);
 }

 else if (operacion == 2) {
    Let numero1 = prompt("primer numero para sumar");
    Let numero2 = prompt("segundo numero para sumar");
    resultado = restar(numero1,numero2)
    alert( `tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    Let numero1 = prompt("primer numero para sumar");
    Let numero2 = prompt("segundo numero para sumar");
    resultado = dividir(numero1,numero2)
    alert( `tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    Let numero1 = prompt("primer numero para sumar");
    Let numero2 = prompt("segundo numero para sumar");
    resultado = multiplicar(numero1,numero2)
    alert( `tu resultado es ${resultado}`);
}

