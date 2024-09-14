/* const container = document.getElementById("container");
const colors = ["#FF6600", "#FFEB00", "#161D6F", "#E85C0D"];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const sq = document.createElement("div");
  sq.classList.add("square");

  sq.addEventListener("mouseover", () => setColor(sq));

  sq.addEventListener("mouseout", () => removeColor(sq));

  container.appendChild(sq);
}

function removeColor(element) {
    element.style.background = "rgb(53, 51, 51)";
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
} */

// Задача 1: Изменение фона при наведении
// Создайте блок на странице, который изменяет цвет фона при наведении курсора мыши с использованием событий mouseover и mouseout. Когда мышь внутри блока — фон становится синим, когда уходит — фон возвращается к исходному цвету.


const box = document.getElementById("box");

box.addEventListener('mouseover', function() {
    box.style.backgroundColor = 'blue';
})

box.addEventListener('mouseout', function() {
    box.style.backgroundColor = 'azure';
})