const elementoData = document.getElementById("data");

const dataAtual = new Date();

const opcoes = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
};

elementoData.textContent = dataAtual.toLocaleDateString("pt-BR", opcoes);
