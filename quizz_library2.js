function verificarResposta() {
    var respostaElement = document.getElementById("resposta");
    var botaoVerificar = document.getElementById("botaoVerificar");
    var resultado = document.getElementById("resultado");
    var resposta = respostaElement.value;
    
    if(resposta.trim().toLowerCase() === "pavao") {
        tocarAudio();

        // Ocultar o input e o botão
        respostaElement.style.display = "none";
        botaoVerificar.style.display = "none";

        // Mostrar a resposta
        resultado.innerHTML = "Correto: " + resposta;
        
    } else {
        tocarAudio2();
        respostaElement.style.color = "red";
        //alert("Resposta incorreta. Tente novamente.");
    }
}

function tocarAudio() {
    var audio = new Audio('G:/My Drive/Programação/JavaScript/QuizzBeta004/certo.mp3');
    audio.play();
}

function tocarAudio2() {
    var audio = new Audio('G:/My Drive/Programação/JavaScript/QuizzBeta004/errou.mp3');
    audio.play();
}