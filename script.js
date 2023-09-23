function verificarResposta() {
    var inputResposta = document.getElementById("resposta");
    var divRespostaCorreta = document.getElementById("respostaCorreta");
    var botaoVerificar = document.getElementById("botaoVerificar");
    var tituloPergunta = document.getElementById("tituloPergunta");
    var imagemResposta = document.getElementById("imagemResposta"); // Obtemos a referência da imagem
    
    var resposta = inputResposta.value;
    
    if(resposta.trim().toLowerCase() === "paris") {
        tocarAudio();
        divRespostaCorreta.innerHTML = "Certa Resposta!<br>" + resposta.toUpperCase();

        // Definimos a fonte da imagem e a tornamos visível
        imagemResposta.src = '/cupom.jpg';
        imagemResposta.style.display = "block";
        
        divRespostaCorreta.style.display = "block";
        botaoVerificar.style.display = "none";
        tituloPergunta.style.display = "none";
        inputResposta.style.display = "none";
    } else {
        alert("Resposta incorreta. Tente novamente.");
        divRespostaCorreta.style.display = "none";
    }
}

function tocarAudio() {
    var audio = new Audio('/certa.mp3');
    audio.play();
}