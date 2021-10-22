"use strict"

var numeroSum;
var numeroSum2;
var valorS = 0;
var Limpiar = "";

document.getElementById("numeroSum").addEventListener("keypress",enter,false);
document.getElementById("numeroSum2").addEventListener("keypress",enter,false);


function enter(event){
    if (event.key == 'Enter') {
        document.getElementById("btn").click();
    }
}

document.getElementById("btn").addEventListener("click",Mostrar,false);
document.getElementById("btnLimp").addEventListener("click",function(){
    var resultado = document.getElementById("resultado").innerHTML.length;
    if(numeroSum && numeroSum2){
        document.getElementById("resultado").innerHTML = Limpiar;
    }else{
       alert("Campos vacios, ingresa numeros validos por favor") 
    }    
});


function Mostrar(){
    numeroSum = document.getElementById("numeroSum").value;
    numeroSum2 = document.getElementById("numeroSum2").value;
    if(numeroSum && numeroSum2){
        valorS = parseInt(numeroSum) + parseInt(numeroSum2);
        document.getElementById("resultado").innerHTML = "La suma de "+numeroSum+" mas "+numeroSum2+" es igual a "+valorS;
    }   
    else
    {
        // document.getElementById("resultado").innerHTML = "";
        alert("HAY UNO O DOS CAMPOS VACIOS!, INGRESA NUMEROS VALIDOS.");
    } 
       
}    






