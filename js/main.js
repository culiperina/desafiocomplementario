//Declaro mis productos y precios (por ahora solo utlizo producto1, producto2 y producto3)
var producto1 ="Curso Básico";
var producto2 = "Curso Intermedio";
var producto3= "Curso Avanzado";
var envio1= "Envío dentro de CABA";
var envio2= "Envío resto del país";
var envio3= "Retirar en showroom";

var precio1= 250;
var precio2= 450;
var precio3= 1000;
var precioenvio1= 200;
var precioenvio2= 400;
var precioenvio3=0;

var total= 0;
var totalenvio= 0;

// Solicito que ingrese el producto que quiere
var compra= parseInt(prompt ("Ingresá qué producto querés comprar: \n 1. Curso Básico $250 \n 2. Curso Intermedio $450 \n 3. Curso Avanzado $1000"));

const funcioncompra = (compraseleccionada) => {
switch (compraseleccionada) {
  case 1:
    alert ("Excelente elección! Agregaste " + producto1 + " al carrito.");
    total = total + precio1;

  break;
  case 2:
    alert ("Excelente elección! Agregaste " + producto2 + " al carrito.");
    total = total+ precio2;

    break;
    case 3:
      alert ("Excelente elección! Agregaste " + producto3 + " al carrito.");
    total = total + precio3;
      break;
      default:
        alert ("No seleccionaste ningún producto");
        break;
}
}

while (compra<=3 && compra>0){
funcioncompra(compra);
compra= parseInt(prompt ("Ingresá qué producto querés comprar: \n 1. Curso Básico $250 \n 2. Curso Intermedio $450 \n 3. Curso Avanzado $1000 \n 4. Finalizar compra envío"));
 }  
alert("El total es $"+ total+" "+ "Recordá que falta sumar el envío.");

// Solicito que ingrese el envio
var envio= parseInt(prompt ("Ingresá el envío: \n 1. Envío a CABA $200 \n 2. Envío resto del país $400 \n 3. Retirar producto en showroom $0"));

const funcionenvio = (envioseleccionado) => {
switch (envioseleccionado) {
  case 1:
    alert ("Agregaste " + envio1 + " al carrito.");
    totalenvio = total + envio1;

  break;
  case 2:
    alert ("Agregaste " + envio2 + " al carrito.");
    totalenvio = total + envio2;


    break;
    case 3:
      alert ("Agregaste " + envio3 + " al carrito.");
      totalenvio = total + envio3;
      break;
      default:
        alert ("Seleccioná un envío");
        break;
}
}

 alert ("El total es $"+ (totalenvio)  +"Gracias por tu compra!")

