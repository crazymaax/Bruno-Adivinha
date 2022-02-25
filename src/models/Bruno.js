export class Bruno {
    constructor(pergunta){
        this._pergunta = pergunta;
    }
    
    static _destino = ["Sim!", "Não", "Talvez..."];

    get pergunta(){
        return this._pergunta;
    }

    set pergunta(novaPergunta){
        this._pergunta = novaPergunta;
    }

    static mainContainer = document.querySelector("main");

    static prever(){

        if(pergunta.value.endsWith("?")){
            const novaPergunta = new Bruno(pergunta.value);

        Bruno.mainContainer.innerHTML=`
            <div class="insiraPergunta">
        
                <figure class="insiraPergunta__imagem--prevendo">
                    <img src="./src/img/resposta.gif" alt="Prevendo">
                    <figcaption>Prevendo</figcaption>
                </figure>
        
            </div>
        `

        setTimeout(function (){
            Bruno.resposta(novaPergunta);
        }, 5000);

        }else{
            const insiraPergunta = document.querySelector(".insiraPergunta");
            
            if(insiraPergunta.childElementCount === 5){

                const erro = document.createElement("p");
                    
                erro.classList.add("insiraPergunta__erro");
                erro.innerText = "Por favor, faça uma pergunta!";
    
                insiraPergunta.appendChild(erro);

            }
        }
    }
    
    static resposta(pergunta){
        const valor = Bruno.destino();
        const resposta = Bruno._destino[valor - 1];

        Bruno.mainContainer.innerHTML = `

        <div class="insiraPergunta">

        <figure class="insiraPergunta__imagem">
            <img src="./src/img/Disney's_Encanto_logo.png" alt="Logo de Encanto">
            <figcaption>Logo de Encanto</figcaption>
        </figure>

        <img src="./src/img/botaoMutado.png" class="insiraPergunta__musica" alt="Botão para iniciar música">

        <p class="textoPergunta">${pergunta._pergunta}</p>
            
            <div class="resposta">
            
                <figure class="resposta__bruno">
                    <img src="./src/img/bruno.png" alt="Bruno">
                    <figcaption>Bruno</figcaption>
                </figure>

                <figure class="resposta__balao">
                    <img src="./src/img/balao.png" alt="Balão de Resposta">
                    <figcaption>Balão de Resposta</figcaption>
                </figure>

                <p class="textoResposta">${resposta}</p>

            </div>
            
        </div>

            <button class="reiniciar">Outra vez!</button>
        `


        const respostaTexto = document.querySelector(".textoResposta");

        const largura = window.screen.width;

        if(largura >= 2560){

            if(valor === 3){
                respostaTexto.style.left = "70%";
            }
            
        }else if(largura >= 1440){

            if(valor === 3){
                respostaTexto.style.left = "48%";
            }
        
        }else if(largura >= 1024){

            if(valor === 3){
                respostaTexto.style.left = "56%";
            }
        
        }else if(largura >= 768){

            if(valor === 3){
                respostaTexto.style.left = "61%";
            }

        }else{

            if(valor === 3){
                respostaTexto.style.left = "23%";
            }
        }

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

        const botaoReiniciar = document.querySelector(".reiniciar");
        botaoReiniciar.addEventListener("click", Bruno.reiniciar);
    }

    static destino(){
        const maxValor = Bruno._destino.length;
        const valor =  Math.floor(Math.random() * (maxValor - 1 + 1)) + 1;

        return valor;
    }

    static reiniciar(){

        Bruno.mainContainer.innerHTML = `
        
        <div class="insiraPergunta">
            <figure class="insiraPergunta__imagem">
                <img src="./src/img/Disney's_Encanto_logo.png" alt="Logo de Encanto">
                <figcaption>Logo de Encanto</figcaption>
            </figure>

            <img src="./src/img/botaoMutado.png" class="insiraPergunta__musica" alt="Botão para iniciar música">

            <h1 class="insiraPergunta__titulo">Bruno ira adivinhar seu futuro!</h1>

            <input type="text" name="pergunta" id="pergunta" placeholder="Digite sua pergunta">
            <button id="botaoDestino">Trace seu destino!</button>
        </div>
        `

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

    const botaoDestino = document.getElementById("botaoDestino");
    botaoDestino.addEventListener("click", Bruno.prever);

    }
}
