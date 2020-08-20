class calculadora {
    numero1:number;
    numero2:number;
     /*calcularsalario():number{
      return this.diagonalHorizontal*this.diagonalVertical;
    };*/
    constructor (numero1:number, numero2:number){
      this.numero1=numero1;
      this.numero2=numero2;  
    };   

}

let valores = new calculadora(3,2);

function suma():number {
    let n1:number = valores.numero1;
    let n2:number = valores.numero2;
    return n1+n2;
  }
  function resta():number {
    let n1:number = valores.numero1;
    let n2:number = valores.numero2;
    return n1-n2;
  }
  function producto():number {
    let n1:number = valores.numero1;
    let n2:number = valores.numero2;
    return n1*n2;
  }
  function division():number {
    let n1:number = valores.numero1;
    let n2:number = valores.numero2;
    return n1/n2;
  }
  console.log("La suma de " + valores.numero1 + " + " + valores.numero2 + " = " + suma());
  console.log("La resta de " + valores.numero1 + " - " + valores.numero2 + " = " + resta());
  console.log("La multiplicacion de " + valores.numero1 + " * " + valores.numero2 + " = " + producto());
  console.log("La resta de " + valores.numero1 + " / " + valores.numero2 + " = " + division());

  document.writeln("La suma de " + valores.numero1 + " + " + valores.numero2 + " = " + suma());
  document.writeln("La resta de " + valores.numero1 + " - " + valores.numero2 + " = " + resta());
  document.writeln("La multiplicacion de " + valores.numero1 + " * " + valores.numero2 + " = " + producto());
  document.writeln("La resta de " + valores.numero1 + " / " + valores.numero2 + " = " + division());