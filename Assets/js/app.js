"use strict"

var cont = 0;
var Limpiar = "";
 
document.getElementById("numeroMul").addEventListener("keypress",enter);

function enter(event){
    if (event.key == 'Enter') {
        document.getElementById("btn05").click();
    }
}

document.getElementById("btn05").addEventListener("click",MostrarMult);
document.getElementById("btn0507").addEventListener("click",function(){
    var tabla = document.getElementById("tabla").innerHTML.length;
    var numero2 = document.getElementById("numeroMul").value;

    if(numero2 || tabla != 0){
        document.getElementById('tabla').innerHTML = Limpiar;
        document.getElementById("titulo").innerHTML = Limpiar;
        document.getElementById("numeroMul").value = Limpiar;
    }else{
       alert("Campo vacio, ingresa un numero por favor"); 
    }    
});

function MostrarMult(){
    var numero= document.getElementById("numeroMul").value;
    var valor = 0;
    var tabla = document.getElementById("tabla").innerHTML.length;
    const multip = [];

    if(tabla != 0 && cont != numero && numero){
        alert("Un valor ya se esta mostrando, Limpialo e intenta otra vez");
        // cont += 1;
    }else{
        cont = 0;
        if(numero){
            document.getElementById("tabla").innerText = Limpiar;
            for (let index = 1; index < 11; index++) {
                valor = numero * index;
                multip[index] = "<table class='tables'><caption></caption><tr><td class='fila'> "+numero+" por "+index+" es igual a: "+valor+"</td></tr></table>";

                document.getElementById("tabla").innerHTML += multip[index];
            }
            cont += parseInt(numero);
            // console.log(multip.length);
            // console.log(numero);
            document.getElementById("titulo").innerText = "Tabla de Multiplicar del Numero: "+ numero;
        }else{
            alert("CAMPO VACIO, INGRESA UN NUMERO VALIDO POR FAVOR");
            // cont += 1;
            // innerHt += 1;
        }  
    }
    // console.log(number);
    // console.log(cont);     
}
// multip = [];
// console.log(multip.length);
