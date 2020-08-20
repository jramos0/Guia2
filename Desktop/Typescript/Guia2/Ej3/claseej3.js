"use strict";
var Empleado = /** @class */ (function () {
    function Empleado(empleado, salario) {
        this.empleado = empleado;
        this.salario = salario;
    }
    ;
    Empleado.prototype.getNombre = function () {
        return this.empleado;
    };
    return Empleado;
}());
var salfinal = new Empleado("Juan", 2500);
//Impuestos hipoteticos no reales
//Impuesto AFP
var afp = 0.10;
//impuesto a la renta
var renta = 0.07;
//impuesto de IVA
var iva = 0.13;
function salaritotal() {
    var impafp = afp * salfinal.salario;
    var imprent = renta * salfinal.salario;
    var impiva = iva * salfinal.salario;
    return salfinal.salario - (impafp + imprent + impiva);
}
console.log(salfinal.getNombre());
console.log("El Salario inicial es " + salfinal.salario);
console.log("El salario de " + salfinal.getNombre() + " es " + salaritotal());
