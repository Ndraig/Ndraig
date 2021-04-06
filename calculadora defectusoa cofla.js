class Calculadora {
    constructor(){
    }
    sumar(num1,num2) {
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1,num2) {
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1,num2) {
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1,num2) {
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num,exp) {
        return num**exp;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }

}
const calculadora = new Calculadora();
alert("¿Que operacion deseas realizar?");
Let operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación, 5: potenciación, 6: raiz cuadrada, 7: raiz cúbica");

if (operación == 1) {
    Let numero1 = prompt("primer numero para sumar");
    Let numero2 = prompt("segundo numero para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operación == 2) {
    Let numero1 = prompt("primer numero para restar");
    Let numero2 = prompt("segundo numero para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operación == 3) {
    Let numero1 = prompt("primer numero para dividir");
    Let numero2 = prompt("segundo numero para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
    }
else if (operación == 4) {
        Let numero1 = prompt("primer numero para multiplicar");
        Let numero2 = prompt("segundo numero para multiplicar");
        resultado = calculadora.multiplicar(numero1,numero2);
        alert(`tu resultado es ${resultado}`);
    }
    else if (operación == 5) {
        Let numero1 = prompt("numero a potenciar");
        Let numero2 = prompt("exponente");
        resultado = calculadora.potenciar(numero1,numero2);
        alert(`tu resultado es ${resultado}`);
    }
    else if (operación == 6) {
        Let numero1 = prompt("conocer la raiz cuadrada de:");
        resultado = calculadora.raizCuadrada(numero1);
        alert(`tu resultado es ${resultado}`);
    }else if (operación == 7) {
        Let numero1 = prompt("conocer la raiz cubica de:");
        resultado = calculadora.raizCubica(numero1);
        alert(`tu resultado es ${resultado}`);
    }
    else {
        alert("no se ha encontrado la operación");
    }