// Variável para armazenar os dados do quiz
let quizData;

// Função para carregar os dados do JSON
function loadData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            quizData = data;
            // Atualizar a pergunta na página com os dados carregados
            document.getElementById('pergunta').textContent = quizData.pergunta;
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
}

// Chamar a função loadData assim que o script for executado
loadData();

// Função para verificar a resposta
function verificarResposta() {
    var respostaElement = document.getElementById("resposta");
    var botaoVerificar = document.getElementById("botaoVerificar");
    var resultado = document.getElementById("resultado");
    var resposta = respostaElement.value;
    
    if(resposta.trim().toLowerCase() === quizData.resposta) {
        tocarAudio();
        // Ocultar o input e o botão
        respostaElement.style.display = "none";
        botaoVerificar.style.display = "none";
        // Mostrar a resposta
        resultado.innerHTML = "***" + resposta.toUpperCase();
        // Redefinir a cor da fonte do input para preto
        respostaElement.style.color = "black";        
    } else {
        tocarAudio2();
        alert("Resposta incorreta. Tente novamente.");
        // Alterar a cor da fonte do input para vermelho
        respostaElement.style.color = "red";
    }
}

function tocarAudio() {
    var audio = new Audio('G:/My Drive/Programação/JavaScript/QuizzBeta005/certo.mp3');
    audio.play();
}

function tocarAudio2() {
    var audio = new Audio('G:/My Drive/Programação/JavaScript/QuizzBeta005/errou.mp3');
    audio.play();
}