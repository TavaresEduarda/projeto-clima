let cidadeInput = document.getElementById("cidadeinput");
let buscarButton = document.getElementById("buscarButton");

let cidadeEl = document.querySelector(".card-title");
let temperaturaEl = document.querySelector(".temp");
let umidadeEl = document.querySelector(".umidade");
let mensagemEl = document.querySelector(".mensagem");
let iconeEl = document.querySelector(".clima-icon");

buscarButton.addEventListener("click", buscarClima);

let API_KEY = "d35bfd4afdb2c5f167db19d1e1ae0275";

function buscarClima() {
    const cidade = cidadeInput.value;

    if (cidade === "") {
        alert("Digite uma cidade");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`;

    fetch(url)
        .then(response => response.json())
        .then(dados => {
            mostrarDados(dados);
        })
        .catch(() => {
            alert("Erro ao buscar a cidade");
        });
}

function mostrarDados(dados) {
    cidadeEl.textContent = dados.name;
    temperaturaEl.textContent = `${Math.round(dados.main.temp)}°C`;
    umidadeEl.textContent = `Umidade: ${dados.main.humidity}%`;

    const icone = dados.weather[0].icon;
    iconeEl.src = `https://openweathermap.org/img/wn/${icone}@2x.png`;

    if (dados.main.temp < 18) {
        mensagemEl.textContent = "Está frio! Leve um casaco 🧥";
    } else if (dados.main.temp < 25) {
        mensagemEl.textContent = "Clima agradável 🙂";
    } else {
        mensagemEl.textContent = "Está quente! Hidrate-se 🥵";
    }
}