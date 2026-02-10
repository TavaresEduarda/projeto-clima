# 🌦️ Dashboard de Clima

Projeto front-end desenvolvido como desafio acadêmico para consumo de API de clima, exibindo informações meteorológicas e sugestões de vestimenta com base na temperatura atual.

---

## 📌 Descrição do Projeto

O Dashboard de Clima permite que o usuário digite o nome de uma cidade e visualize:

* Nome da cidade
* Temperatura atual
* Umidade do ar
* Ícone representando a condição climática
* Mensagem dinâmica com sugestão de roupas ou cuidados

O projeto foi pensado para uso no Brasil, com **interface em português**, mas seguindo **padrão profissional de código em inglês**.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **Bootstrap 5** (layout responsivo)
* **Open-Meteo API** (dados climáticos)

---

## 🌐 APIs Utilizadas

O projeto utiliza duas APIs públicas da **Open-Meteo**, que não exigem chave de acesso (API Key).

### 📍 1. Geocoding API

Responsável por converter o nome da cidade em latitude e longitude.

**Endpoint:**

```
https://geocoding-api.open-meteo.com/v1/search
```

**Parâmetros usados:**

* `name`: nome da cidade
* `count`: quantidade de resultados
* `language`: idioma da resposta

---

### ☁️ 2. Forecast / Weather API

Responsável por retornar os dados climáticos da localização.

**Endpoint:**

```
https://api.open-meteo.com/v1/forecast
```

**Parâmetros usados:**

* `latitude`
* `longitude`
* `current_weather=true`
* `hourly=relativehumidity_2m`

---

## 🔄 Fluxo de Funcionamento

1. O usuário digita o nome da cidade
2. A Geocoding API retorna latitude e longitude
3. A Forecast API retorna os dados de clima
4. O JavaScript processa as informações
5. Os dados são exibidos dinamicamente no card

---

## 📱 Responsividade

O layout é **mobile-first** e totalmente responsivo, adaptando-se a diferentes tamanhos de tela graças ao uso do Bootstrap.

---

## ▶️ Como Executar o Projeto

1. Clone o repositório:

2. Abra o arquivo `index.html` no navegador

Não é necessário instalar dependências ou configurar API Key.

---

## 🎯 Objetivo Acadêmico

Projeto desenvolvido para praticar:

* Consumo de APIs externas
* Manipulação do DOM com JavaScript
* Uso de `fetch` e tratamento de respostas JSON
* Lógica condicional
* Responsividade e boas práticas de front-end

---

## 👩‍💻 Autora

**Eduarda**
Projeto acadêmico — Front-end Development

---


