"use strict"

var numeroMult;
var numeroMult2;
var valorS = 0;

document.getElementById("numeroMul").addEventListener("keypress",enter,false);
document.getElementById("numeroMul2").addEventListener("keypress",enter,false);


function enter(event){
    if (event.key == 'Enter') {
        document.getElementById("btnMul").click();
    }
}

document.getElementById("btnMul").addEventListener("click",Mostrar,false);
document.getElementById("btnMul05").addEventListener("click",function(){
    var resultado = document.getElementById("resultado").innerHTML.length;
    if(numeroMult && numeroMult2 ){
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("numeroMul").value = "";
        document.getElementById("numeroMul2").value = "";
    }else{
       alert("Campos vacios, ingresa numeros validos por favor") 
    }    
});

function Mostrar(){
    numeroMult = document.getElementById("numeroMul").value;
    numeroMult2 = document.getElementById("numeroMul2").value;
    if(numeroMult && numeroMult2){
        valorS = parseInt(numeroMult) * parseInt(numeroMult2);
        document.getElementById("resultado").innerHTML = " = "+valorS;
    }   
    else
    {
        // document.getElementById("resultado").innerHTML = "";
        alert("HAY UNO O DOS CAMPOS VACIOS!, INGRESA NUMEROS VALIDOS.");
    } 
       
}    






