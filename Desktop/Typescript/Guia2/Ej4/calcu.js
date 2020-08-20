"use strict";
var calculadora = /** @class */ (function () {
    /*calcularsalario():number{
     return this.diagonalHorizontal*this.diagonalVertical;
   };*/
    function calculadora(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    ;
    return calculadora;
}());
var valores = new calculadora(3, 2);
function suma() {
    var n1 = valores.numero1;
    var n2 = valores.numero2;
    return n1 + n2;
}
function resta() {
    var n1 = valores.numero1;
    var n2 = valores.numero2;
    return n1 - n2;
}
function producto() {
    var n1 = valores.numero1;
    var n2 = valores.numero2;
    return n1 * n2;
}
function division() {
    var n1 = valores.numero1;
    var n2 = valores.numero2;
    return n1 / n2;
}
console.log("La suma de " + valores.numero1 + " + " + valores.numero2 + " = " + suma());
console.log("La resta de " + valores.numero1 + " - " + valores.numero2 + " = " + resta());
console.log("La multiplicacion de " + valores.numero1 + " * " + valores.numero2 + " = " + producto());
console.log("La resta de " + valores.numero1 + " / " + valores.numero2 + " = " + division());
document.writeln("La suma de " + valores.numero1 + " + " + valores.numero2 + " = " + suma());
document.writeln("La resta de " + valores.numero1 + " - " + valores.numero2 + " = " + resta());
document.writeln("La multiplicacion de " + valores.numero1 + " * " + valores.numero2 + " = " + producto());
document.writeln("La resta de " + valores.numero1 + " / " + valores.numero2 + " = " + division());
