const form = document.querySelector('#registro')

const year = document.querySelector('#año')

const tipoVehiculo = document.querySelector('#tipoVehiculo')

const cobertura = document.querySelector('#cobertura')

let modelo;

let base;

let anio;

let vehiculo;

let plan;

let imponiblePlan;

function TipoDeVehiculo(tipo, baseimponible) {
    this.tipo = tipo;
    this.baseimponible = Number(baseimponible);
}

let vehiculoMoto = new TipoDeVehiculo("Moto", 800)

let vehiculoAuto = new TipoDeVehiculo("Auto", 1000)

let vehiculoCamioneta = new TipoDeVehiculo("Camioneta", 1200)

let vehiculoCamion = new TipoDeVehiculo("Camion", 1500)

let tiposdeVehiculo = [vehiculoMoto, vehiculoAuto, vehiculoCamioneta, vehiculoCamion]


form.addEventListener('submit', (evt)=> {
    event.preventDefault()
    anio = year.value
    vehiculo = tipoVehiculo.value
    plan = cobertura.value

    if(anio<2000 && anio>=1990) {
        modelo = 2000     
    }else if (anio>=2000 && anio<=2010){ 
        modelo = 2500
    }else if (anio>2010 && anio<=2020){ 
    modelo = 3000
    }else if (anio>2020 && anio<=2022){ 
    modelo = 3500
    }else { alert ("El año ingresado no es válido. Si su vehículo es anterior al año 1990 no podemos ofrecerle cobertura.")}
     if(vehiculo==1) {
        base = Number (tiposdeVehiculo[0].baseimponible)
    }else if (vehiculo==2){ 
        base = Number (tiposdeVehiculo[1].baseimponible)
    }else if (vehiculo==3){ 
        base = Number (tiposdeVehiculo[2].baseimponible)
    }else if (vehiculo==4){ 
        base = Number (tiposdeVehiculo[3].baseimponible)
    }
    if(plan==1) {
        imponiblePlan = 1500 
    }else if (plan==2){ 
        imponiblePlan = 2500
    }else if (plan==3){ 
        imponiblePlan = 4000
    }
    let prima = base + modelo + imponiblePlan;
 
    let impuestos = prima * 0.21;

    let seguro = prima + impuestos;

    let cuotas = 6

    let cuotaSeguro = seguro / cuotas;

    localStorage.setItem('datos', JSON.stringify({costoSeguro: seguro}))
    let datosStorage = localStorage.getItem('datos')
    let totalSeguro = JSON.parse(datosStorage)
    
    document.body.innerHTML+=`
    <h3> Cotización:</h3>
    </div>
    <p> Prima total $${prima}</p>
    <p> Impuestos $${impuestos}</p>
    <p> Costo total del seguro $${totalSeguro.costoSeguro}</p>
    <p> Costo por cuota $${cuotaSeguro}</p>
    <p>Si desea abonar el total del seguro de contado efectivo tendra 10% de descuento.</p>
    </div>`
    
})


