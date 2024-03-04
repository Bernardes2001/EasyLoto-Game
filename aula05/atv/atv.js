// Função para gerar números aleatórios de 1 a 25
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 25) + 1;
}
 
// Função para criar um bloco com um número aleatório
function criarBloco() {
    var bloco = document.createElement("div");
    bloco.classList.add("bloco");
    bloco.textContent = gerarNumeroAleatorio();
    return bloco;
}
 
// Função para criar o grid com 15 blocos de números aleatórios
function criarGrid() {
    var gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = ""; // Limpa qualquer conteúdo anterior
 
    for (var i = 0; i < 15; i++) {
        var bloco = criarBloco();
        gridContainer.appendChild(bloco);
    }
}
 
// Adiciona um evento de clique ao botão "Gerar"
var gerarBtn = document.getElementById("gerarBtn");
gerarBtn.addEventListener("click", criarGrid);