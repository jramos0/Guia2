"use strict";
var Rombo = /** @class */ (function () {
    function Rombo(diagonalVertical, diagonalHorizontal) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
    Rombo.prototype.calcularArea = function () {
        return this.diagonalHorizontal * this.diagonalVertical;
    };
    ;
    ;
    return Rombo;
}());
var area = new Rombo(8, 2);
console.log("El area es " + area.calcularArea());
