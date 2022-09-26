let anio = Number (prompt("Ingrese el año de su vehículo"));

let modelo;

let tipoVehiculo = Number (prompt("Ingrese 1 si su vehículo es auto o 2 si es camioneta"));

let base;



function costoModelo () {

    if(anio<=2000) {
            modelo = 2000
            console.log ("Prima por modelo " + "$" + modelo )
            
    }else{ 
            modelo = 3000
            console.log ("Prima por modelo " + "$" + modelo )
    }

}

costoModelo (); 

function costoTipoVehiculo () {
   
    if(tipoVehiculo==1) {
        base = 2500
        console.log ("Prima por tipo de vehículo " + "$" + base )
    }else if (tipoVehiculo==2){ 
        base = 3500
        console.log ("Prima por tipo de vehículo " + "$" + base )
    }else{ 
        alert ("Seleccione la opción correcta")

    }
} 

costoTipoVehiculo ();

let prima = base + modelo;
 
let impuestos = prima * 0.21;

let seguro = prima + impuestos;

let cuotas = 6

let cuotaSeguro = seguro / cuotas;

console.log ( "Prima total " + "$" + prima)
console.log ( "Impuestos " + "$" + impuestos)
console.log ( "Costo total del seguro " + "$" + seguro)
console.log ( "Costo por cuota " + "$" + cuotaSeguro) 
 

 while(seguro>=6000){
    console.log ("Si desea abonar el total del seguro de contado efectivo tendra 10% de descuento");
    break; 
 }

 if (seguro>=1) {alert ("El costo total del seguro es "+ "$" + seguro)}