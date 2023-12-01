/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateRandomCard() {
    let figures = ["heart", "diamond", "club", "spade"];
    let numbers = ["J", "Q", "K", "A"];

    for (let i = 2; i <= 10; i++) {
      numbers.push(i.toString());
    }

    let figuresList = Math.floor(Math.random() * figures.length);
    let numbersList = Math.floor(Math.random() * numbers.length);

    let figure = figures[figuresList];
    let number = numbers[numbersList];

    return { figure, number };
  }

  function loadCard() {
    let card = generateRandomCard();
    let cardElements = document.getElementById("card");

    cardElements.classList.remove("heart", "diamond", "club", "spade");

    cardElements.classList.add(card.figure);

    cardElements.textContent = card.number;
  }

  function applySize() {
    let width = document.getElementById("widthInput").value;
    let height = document.getElementById("heightInput").value;

    if (width && height) {
      let cardElements = document.getElementById("card");
      cardElements.style.width = `${width}px`;
      cardElements.style.height = `${height}px`;

      let scaleFactorX = parseFloat(width) / 300;
      let scaleFactorY = parseFloat(height) / 450;

      cardElements.style.fontSize = `${scaleFactorX * 150}px`;
      cardElements.style.setProperty("--symbol-size", `${scaleFactorX * 5}rem`);
      cardElements.style.setProperty("--symbol-size", `${scaleFactorY * 5}rem`);

      loadCard();
    }
  }

  loadCard();

  let btn = document.querySelector(".btn");
  btn.addEventListener("click", loadCard);

  let sizeBtn = document.querySelector(".size-btn");
  sizeBtn.addEventListener("click", applySize);

  setInterval(loadCard, 5000);
};
