import { Bruno } from "../src/models/Bruno.js";

/* 
CRÉDITOS A IMAGEM DE RESPOSTA DO BRUNO: nikkithecryptid | @StarrBeast

https://mobile.twitter.com/StarrBeast/status/1471716418068619268
*/

const musica = document.querySelector(".insiraPergunta__musica");
const musicaMP3= document.getElementById("musica");

musica.addEventListener("click",function(){

    
    if (musicaMP3.paused) {
        musicaMP3.play();
        musica.src = "./src/img/botaoPlay.png";
    } else {
        musicaMP3.pause(); 
        musica.src = "./src/img/botaoMutado.png";
    }
})

const pergunta = document.getElementById("pergunta");

const botaoDestino = document.getElementById("botaoDestino");
botaoDestino.addEventListener("click", Bruno.prever);

document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        Bruno.prever();
    }
});