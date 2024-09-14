// Задача 1: Отображение координат
//На странице создайте пустой `div` блок, который будет отображать координаты мыши.

// При движении мыши по странице (`mousemove`), выводите текущие координаты курсора в этот `div` (например, `X: 100, Y: 150`).

let box = document.getElementById("coordinate");

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    box.textContent = `X: ${x}, Y: ${y}`;
});

// Задание 2: Анимация элемента

// Создайте квадратный блок, который будет следовать за курсором при его движении.

// 1. **HTML и CSS**:
// - Создайте блок с фиксированными размерами и цветом.
// 2. **JavaScript**:
// - Используйте `onmousemove`, чтобы обновлять положение блока на основе позиции курсора.

let MovingBox = document.getElementById("box");

document.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;
    MovingBox.style.transform = `translate(${x}px, ${y}px)`;
});