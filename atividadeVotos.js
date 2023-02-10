    let qtdPal= 0;
    let qtdCor = 0;
    let qtdSaoPau = 0;
    let qtdSan= 0;
    let qtdOutro= 0;
    let qtdVotos= 0;
    let text ="";




function palmeiras(){
    qtdPal++;
    qtdVotos++;
    
    text= "Você votou no Palmeiras"
    document.getElementById("tVotPal").innerHTML = qtdPal;
    document.getElementById("seuVoto").innerHTML = text;
    qtdVotos = qtdPal + qtdCor + qtdSaoPau + qtdSan + qtdOutro;
    document.getElementById("totVotos").innerHTML = qtdVotos;
}

function corinthians (){
    qtdCor++;
    qtdVotos++;
   
    text = "Você votou no Corinthians"
    document.getElementById("seuVoto").innerHTML = text;
    document.getElementById("tVotosCor").innerHTML = qtdCor;
    qtdVotos = qtdPal + qtdCor + qtdSaoPau + qtdSan + qtdOutro;
    document.getElementById("totVotos").innerHTML = qtdVotos;
}

function saoPaulo(){

    qtdSaoPau++;
    qtdVotos++;
    
    text= "Você votou no São Paulo"
    document.getElementById("tVotosSaoPaulo").innerHTML = qtdSaoPau;
    document.getElementById("seuVoto").innerHTML = text;
    qtdVotos = qtdPal + qtdCor + qtdSaoPau + qtdSan + qtdOutro;
    document.getElementById("totVotos").innerHTML = qtdVotos;
}

function santos(){

    qtdSan++;
    qtdVotos++;
    
    text= "Você votou no Santos"
    document.getElementById("tVotosSantos").innerHTML = qtdSan;
    document.getElementById("seuVoto").innerHTML = text;
    qtdVotos = qtdPal + qtdCor + qtdSaoPau + qtdSan + qtdOutro;
    document.getElementById("totVotos").innerHTML = qtdVotos;
}

function outros(){
    qtdOutro++;
    qtdVotos++;
     
    text= "Você votou em Outros"
    document.getElementById("tVotosOutros").innerHTML= qtdOutro;
    document.getElementById("seuVoto").innerHTML = text;
    qtdVotos = qtdPal + qtdCor + qtdSaoPau + qtdSan + qtdOutro;
    document.getElementById("totVotos").innerHTML = qtdVotos;

}



