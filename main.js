let anio = Number (prompt("Ingrese el año de su vehículo"));

let modelo;

let tipoVehiculo = Number (prompt("Ingrese el número correspondiente según su vehículo: 1 Auto 2 Moto 3 Camioneta 4 Camión"));

let base;


function TipoDeVehiculo(tipo, baseimponible) {
    this.tipo = tipo;
    this.baseimponible = Number(baseimponible);
}

let vehiculoAuto = new TipoDeVehiculo("Auto", 1000)

let vehiculoMoto = new TipoDeVehiculo("Moto", 800)

let vehiculoCamioneta = new TipoDeVehiculo("Camioneta", 1200)

let vehiculoCamion = new TipoDeVehiculo("Camion", 1500)

let tiposdeVehiculo = [vehiculoAuto, vehiculoMoto, vehiculoCamioneta, vehiculoCamion]

console.log("------ Tipos de vehículos ------")

tiposdeVehiculo.forEach( function (item){
    console.log (item) 
})

function costoModelo () {

    if(anio<2000 && anio>=1990) {
            modelo = 2000
            console.log ("Prima por modelo " + "$" + modelo )       
    }else if (anio>=2000 && anio<=2010){ 
            modelo = 2500
            console.log ("Prima por modelo " + "$" + modelo )
    }else if (anio>2010 && anio<=2020){ 
        modelo = 3000
        console.log ("Prima por modelo " + "$" + modelo )
    }else if (anio>2020){ 
        modelo = 3500
        console.log ("Prima por modelo " + "$" + modelo )
    }else { 
        alert ("El año ingresado no es válido")

    }

}

costoModelo (); 

function costoTipoVehiculo () {
   
    if(tipoVehiculo==1) {
        base = Number (vehiculoAuto.baseimponible)
        console.log ("Prima por tipo de vehículo " + "$" + base ) 
    }else if (tipoVehiculo==2){ 
        base = Number (vehiculoMoto.baseimponible)
        console.log ("Prima por tipo de vehículo " + "$" + base )
    }else if (tipoVehiculo==3){ 
        base = Number (vehiculoCamioneta.baseimponible)
        console.log ("Prima por tipo de vehículo " + "$" + base )
    }else if (tipoVehiculo==4){ 
        base = Number (vehiculoCamion.baseimponible)
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

let cuotaSeguro = seguro / cuotas;1



console.log ( "Prima total " + "$" + prima)
console.log ( "Impuestos " + "$" + impuestos)
console.log ( "Costo total del seguro " + "$" + seguro)
console.log ( "Costo por cuota " + "$" + cuotaSeguro) 
 

 while(seguro>=4500){
    console.log ("Si desea abonar el total del seguro de contado efectivo tendra 10% de descuento");
    break; 
 }

 if (seguro>=1) {alert ("El costo total del seguro es "+ "$" + seguro)}