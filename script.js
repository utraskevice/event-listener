// First button
const date = document.getElementById("firstBtn");
const dateText = document.getElementById("firstText");

date.addEventListener("click", displayDate);

function displayDate() {
  dateText.innerHTML = Date();
}

// Second button

const mouse = document.querySelector("#secondBtn");
const mouseText = document.querySelector("#secondText");

mouse.addEventListener("mouseover", firstFunction);
mouse.addEventListener("click", secondFunction);
mouse.addEventListener("mouseout", thirdFunction);

function firstFunction() {
  mouseText.innerHTML += "Mouse over! <br/>";
}

function secondFunction() {
  mouseText.innerHTML += "Clicked! <br/>";
}

function thirdFunction() {
  mouseText.innerHTML += "Mouse out! <br/>";
}

// First input

const firstInput = document.querySelector("input");
const myText = document.getElementById("thirdText");

firstInput.addEventListener("input", updateValue);

function updateValue(e) {
  myText.textContent = e.target.value;
}

// Second input

const secondInput = document.getElementById("secondInput");

secondInput.addEventListener("keydown", (event) => {
  alert("Write your text!");
});
