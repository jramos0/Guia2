class Empleado{
    empleado:string;
    salario:number;
    constructor (empleado:string, salario:number){
      this.empleado=empleado;
      this.salario=salario;
  
    };   
    getNombre():string{
        return this.empleado;
    }
} 

 let salfinal = new Empleado ("Juan",2500);
 //Impuestos hipoteticos no reales

 //Impuesto AFP
 let afp:number = 0.10;
  //impuesto a la renta
 let renta:number = 0.07;
  //impuesto de IVA
 let iva:number = 0.13;
 function salaritotal():number {
   let impafp = afp*salfinal.salario;
  let imprent = renta*salfinal.salario;
  let impiva = iva*salfinal.salario;
   return salfinal.salario-(impafp+imprent+impiva);
 }
    console.log(salfinal.getNombre());
    console.log("El Salario inicial es "+ salfinal.salario);
 console.log("El salario de "+ salfinal.getNombre() + " es " + salaritotal());