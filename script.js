document.addEventListener('DOMContentLoaded', function() {
    function contarNumerosConDelay() {
        let numeroActual = 1;

        function contarConDelay() {
            document.getElementById("numero").textContent = numeroActual;

            numeroActual++;

            if (numeroActual <= 10) {
                setTimeout(contarConDelay, 800);
            }
        }
        contarConDelay();
    }

    var myCarousel = document.getElementById('demo');
    var carousel = new bootstrap.Carousel(myCarousel);

    function actualizarNumero() {
        var numeroDeAnios = Math.floor(Math.random() * 50) + 1; 

        var numeroSpan = document.getElementById('numero');
        if (numeroSpan) {
            numeroSpan.textContent = numeroDeAnios;
        }
    }

    contarNumerosConDelay();
    myCarousel.addEventListener('slide.bs.carousel', actualizarNumero);
    actualizarNumero();
});


let numero = 10.345;
let numeroRedondeado = numero.toFixed(2); 


let numeroAleatorio = Math.random();


let fechaActual = new Date();
console.log(fechaActual);

document.addEventListener('DOMContentLoaded', function() {
    function obtenerFechaHoraActual() {
        var fechaHoraActual = new Date();

        var dia = fechaHoraActual.getDate();
        var mes = fechaHoraActual.getMonth() + 1; 
        var anio = fechaHoraActual.getFullYear();
        var horas = fechaHoraActual.getHours();
        var minutos = fechaHoraActual.getMinutes();
        var segundos = fechaHoraActual.getSeconds();

        var fechaHoraFormateada = `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;

        return fechaHoraFormateada;
    }

    var fechaHoraElemento = document.getElementById('fecha-hora-actual');

    setInterval(function() {
        var fechaHoraActual = obtenerFechaHoraActual();

        if (fechaHoraElemento) {
            fechaHoraElemento.textContent = fechaHoraActual;
        }
    }, 1000);
});

document.addEventListener('DOMContentLoaded', function() {

    var botonGenerarNumero = document.getElementById('VisitaFincasBut');

    function generarNumeroAleatorio() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function cambiarNumeroCadaDosSegundos() {
        var intervalo = setInterval(function() {
            var numeroGenerado = generarNumeroAleatorio();
            var tituloFincasElemento = document.querySelector('.resultadoFincas');
            tituloFincasElemento.textContent = "Número generado: " + numeroGenerado;
        }, 2000);
        setTimeout(function() {
            clearInterval(intervalo);
            var tituloFincasElemento = document.querySelector('.resultadoFincas');
            tituloFincasElemento.textContent = "Número generado: ";
        }, 5000);
    }

    
    botonGenerarNumero.addEventListener('click', function(event) {
        event.preventDefault(); 
        cambiarNumeroCadaDosSegundos(); 
    });
});

function determinarDia() {
    var numero = parseInt(document.getElementById("dia").value);
    var dia;

    switch(numero) {
        case 1:
            dia = "Domingo";
            break;
        case 2:
            dia = "Lunes";
            break;
        case 3:
            dia = "Martes";
            break;
        case 4:
            dia = "Miércoles";
            break;
        case 5:
            dia = "Jueves";
            break;
        case 6:
            dia = "Viernes";
            break;
        case 7:
            dia = "Sábado";
            break;
        default:
            dia = "Número no válido";
    }

    document.getElementById("resultado").innerText = dia;
}


function dividor() {
    var dividendo = parseInt(document.getElementById("dividendo").value);
    var divisor = parseInt(document.getElementById("divisor").value);
    var resultado;
    var mensaje = "Simples numeros pero si selecciones 2 y 3 cambia";

    try {
        if (divisor === 0) {
            throw "¡Error! División por cero no permitida.";
        }

        resultado = dividendo / divisor;

        if ((dividendo === 2 && divisor === 3) || (dividendo === 3 && divisor === 2)) {
            mensaje = "Ambos números son igual a 2 y 3 respectivamente";
        }

        document.getElementById("resultadoDivision").innerText = "El resultado de la división es: " + resultado;
        document.getElementById("NumerosIguales").innerText = mensaje;
    } catch (error) {
        document.getElementById("resultadoDivision").innerText = error;
    }
}


function calcularExponencial() {
    var base = parseInt(document.getElementById("numeroExponencial").value);
        var exponente = parseInt(document.getElementById("elevado").value);
        var resultado = 1;

        for (var i = 0; i < exponente; i++) {
            resultado *= base;
        }

        var mensaje = "El resultado es: " + resultado;

        if(resultado % 2 === 0){
            mensaje += " (es par)";
        } else {
            mensaje += " (es impar)";
        }

        document.getElementById("resultadoExponencial").innerText = "El resultado es: " + resultado;
        document.getElementsByClassName("parImpar").innerText = mensaje;
}

document.addEventListener('DOMContentLoaded', function() {
    var boton = document.querySelector('#boton');
  
    boton.addEventListener('click', function() {
      var mensaje = 'La Tierra explotará en 5 segundos';
  
      var popup = window.open('', 'PopupWindow', 'width=500,height=500');
      popup.document.write('<h1 style="color:red;">' + mensaje + '</h1>');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var parrafos = document.getElementsByTagName("p");
  
    boton.addEventListener('click', function() {
      var mensaje = 'La Tierra explotará en 5 segundos';
  
      var popup = window.open('', 'PopupWindow', 'width=500,height=500');
      popup.document.write('<h1 style="color:red;">' + mensaje + '</h1>');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var boton = document.querySelector('#botonTagName');
    var parrafos = document.getElementsByTagName("p");
    
    boton.addEventListener('click', function() {
      var mensaje = 'La Tierra explotará en 5 segundos';
  
      var popup = window.open('', 'PopupWindow', 'width=500,height=500');
      popup.document.write('<h1 style="color:red;">' + mensaje + '</h1>');
  
      for (var i = 0; i < parrafos.length; i++) {
        popup.document.write('<p>' + parrafos[i].textContent + '</p>');
      }
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var boton = document.querySelector('#botonImagenes');
    
    boton.addEventListener('click', function() {
      var coleccion = document.images; 
      
      var popup = window.open('', 'PopupWindow', 'width=600,height=400');
      popup.document.write('<h1>Imágenes en el Documento</h1>');
  
      for (var i = 0; i < coleccion.length; i++) {
        popup.document.write('<img src="' + coleccion[i].src + '" alt="' + coleccion[i].alt + '">');
      }
    });
  });


function mostrarArreglosTipados() {
    var colores = ["rojo", "verde", "azul"];

    for(var i=0; i<3; i++){
        alert(colores[i]); 
    }
}

function mostrarArreglos() {
    var numeros = new Int32Array(5);

    numeros[0] = 10;
    numeros[1] = 20;
    numeros[2] = 30;
    numeros[3] = 40;
    numeros[4] = 50;
    
    for(var i=0; i<3; i++){
        alert(numeros[i]); 
    }
}

let miString = "Bienvenido a la Tarea 5 de Daniela Mendez";
alert(miString);
