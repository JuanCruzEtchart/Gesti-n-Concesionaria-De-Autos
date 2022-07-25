/* Etapa 1
En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.

Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.

Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente. 

Etapa 2
Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.

Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior.

Etapa 3
Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.

¿Cómo lo resuelven?

Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.

Etapa 4 
Más funcionalidades
El cliente le pidió saber cuánto dinero generaron las ventas.

María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

Etapa 5
Total de ventas
Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!


Eatapa 6

Agregando funcionalidades
Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.

Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.

Una persona va a ser representada mediante un objeto literal de la siguiente forma:

{
nombre: “Juan”,
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.


Etapa 7

Agregando funcionalidades
Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.

La función debe de realizar los siguientes pasos:

1) Obtener los autos para la venta

2) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.

3) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?

*/

/*const autos = require("./autos.js");
let concesionaria = {
  buscarAuto: function (patentes) {
    let buscadorPatentes = autos.find(function (auto) {
      return patentes === auto.patente;
    });
    if (buscadorPatentes === undefined) {
      buscadorPatentes = null;
    }
    return buscadorPatentes;
  },
};

console.log(concesionaria.buscarAuto("APL12"));*/

//OTRA OPCIÓN PORQUE AL PLAYGROUND NO LE GUSTA EL FIND

const autos = require("./autos");
const concesionaria = {
  autos: autos,
  buscarAuto: function (patente) {
    let autoSalida = null;
    this.autos.forEach(function (auto) {
      if (auto.patente === patente) {
        autoSalida = auto;
      }
    });
    return autoSalida;
  },
  venderAuto: function (patente) {
    let buscar = this.buscarAuto(patente);
    buscar.vendido = true;
    return buscar; //la consigna no pide que retorne el auto modificado
  },
  autosParaLaVenta: function () {
    let autosParaVender = this.autos.filter(function (estado) {
      return estado.vendido === false;
    });
    return autosParaVender;
  },
  autosNuevos: function () {
    let autosParaLaVenta = this.autosParaLaVenta();
    let autos0km = autosParaLaVenta.filter(function (auto) {
      return auto.km < 100;
    });
    return autos0km;
  },
  listaDeVentas: function () {
    let precios = [];
    this.autos.forEach(function (auto) {
      if (auto.vendido === true) {
        precios.push(auto.precio);
      }
    });
    if (precios.length === 0) {
      return [];
    } else {
      return precios;
    }
  },
  totalDeVentas: function () {
    const listaDeVentas = this.listaDeVentas();
    let total = listaDeVentas.reduce(function (acum, total) {
      return acum + total;
    }, 0);
    return total;
  },
  puedeComprar: function (auto, persona) {
    return auto.precio <= persona.capacidadDePagoTotal && (auto.precio/persona.capacidadDePagoEnCuotas) <= auto.cuotas;
  },
  autosQuePuedeComprar: function(persona){
    let autosParaLaVenta = this.autosParaLaVenta();
    let autosQuePuedeComprar = autosParaLaVenta.filter(function(auto){
      return concesionaria.puedeComprar(auto, persona);
    })
    return autosQuePuedeComprar;
  }
};




let persona = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 20000,
  capacidadDePagoTotal: 180000,
};
//console.log(concesionaria.venderAuto("APL123"));
//console.log(concesionaria.venderAuto("JJK116"));
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());
console.log(concesionaria.autosQuePuedeComprar(persona));

/*const autos = require("./autos");
const concesionaria = {
   autos: autos,
   buscarAuto: function buscar(patente) {
      let autoSalida = null
      this.autos.forEach(auto => {
         if (auto.patente === patente) {
            autoSalida = auto
         }
      })
      return autoSalida
   }
}*/

//console.log(concesionaria.venderAuto("APL123"));
