function Fatorar(){
    var opcao=document.getElementById("opcao").value;

    var v1=parseInt(document.getElementById("v1").value);
    var v2=parseInt(document.getElementById("v2").value);

    var faixa=document.getElementById("faixa");

    switch(opcao){
        case "somar":
            somar(v1,v2);
            break;
        case "subtrair":
            subtrair(v1,v2);
            break;
        case "dividir":
            dividir(v1,v2);
            break;
        case "multiplicar":
            multiplicar(v1,v2);
            break;
        case "modulo":
            modulo(v1,v2);
            break;
        case "fatorar":
            fatorar(v1,v2);
            break;
        default:
            faixa.innerHTML="operação não vinculada";
            break;
    }
}

function somar(valor1,valor2){
    var faixa=document.getElementById("faixa");

    var soma=valor1+valor2;
    
    faixa.innerHTML=soma;
}
function subtrair(valor1,valor2){
    var faixa=document.getElementById("faixa");

    var subtração=valor1-valor2;

    faixa.innerHTML=subtração;
}
function dividir(valor1,valor2){
    var faixa=document.getElementById("faixa");

    var divisão=valor1/valor2;

    faixa.innerHTML=divisão;
    
}
function multiplicar(valor1,valor2){
    var faixa=document.getElementById("faixa");

    var multiplicação=valor1*valor2;

    faixa.innerHTML=multiplicação;
}
function modulo(valor1,valor2){
    var faixa=document.getElementById("faixa");
    var modulo=valor1%valor2;

    faixa.innerHTML=modulo;
}
function fatorar(valor1,valor2){
    var faixa=document.getElementById("faixa");
    aux=1
    for( n=valor1;n>0;n--){
        aux= aux*n;

    }
    for(i=valor2;i>0;i--){
        aux=aux*i
    }
    faixa.innerHTML=aux;

}