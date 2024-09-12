// Задача 1: Манипуляции с текстом

// 1. Создайте HTML-документ с заголовком `<h1>`, параграфом `<p>`, и кнопкой `<button>`.
// 2. Используя JavaScript, напишите код, который при нажатии на кнопку меняет текст заголовка на "Привет, мир!", а текст параграфа на "Вы успешно изменили текст!".

document.getElementById("button").addEventListener("click", function() {
document.getElementById("header").innerHTML = "Привет, мир!";
document.getElementById("paragraph").innerHTML = "Вы успешно изменили текст!";
});

// Задача 2: Добавление элементов

// 1. Создайте HTML-документ с пустым списком `<ul>`.
// 2. Используя JavaScript, напишите код, который добавляет три элемента `<li>` в этот список при загрузке страницы. Текст внутри каждого элемента списка должен быть "Элемент 1", "Элемент 2", "Элемент 3".

let List = document.getElementById("list");


for(let i = 0; i < 3; i++) {
    const element = document.createElement("li");
    element.textContent = `Элемент ${i + 1}`;
    element.classList.add("list-el");
    List.appendChild(element);
}

// Задача 3: Изменение стилей

// 1. Создайте HTML-документ с блоком `<div>`, у которого класс `"box"`, и кнопкой `<button>`.
// 2. В CSS задайте стиль для класса `"box"`, чтобы он был квадратом размером 100x100 пикселей и имел фон красного цвета.
// 3. Используя JavaScript, напишите код, который при нажатии на кнопку меняет цвет фона блока на синий и увеличивает его размер до 150x150 пикселей.

document.getElementById("btn").addEventListener('click', function() {
    const Box = document.querySelector('.box');
    Box.style.width = '150px';
    Box.style.height = '150px';
    Box.style.backgroundColor = 'blue';
});

// Задача 4: Работа с атрибутами

// 1. Создайте HTML-документ с изображением `<img>` и кнопкой `<button>`.
// 2. Используя JavaScript, напишите код, который при нажатии на кнопку меняет изображение на другое (например, заменяет URL в атрибуте `src`).

document.getElementById("btn-1").addEventListener("click", function() {
    var image = document.getElementById("image");
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg";
});

// Задача 5: Взаимодействие с формой

// 1. Создайте HTML-документ с формой, содержащей одно текстовое поле `<input type="text">` и кнопку `<button>`.
// 2. Напишите JavaScript-код, который при нажатии на кнопку считывает текст из поля и выводит его в виде нового элемента `<p>` под формой.

document.getElementById("in-btn").addEventListener("click", function() {
    event.preventDefault();
    var Input = document.getElementById("input-field");
    var outputDiv = document.getElementById("output");
    var paragraph = document.createElement("p");
    paragraph.textContent = Input.value;
    outputDiv.appendChild(paragraph);
})