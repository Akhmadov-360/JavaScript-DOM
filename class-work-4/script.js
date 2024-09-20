// const output = document.getElementById("output");

// document.addEventListener("keyup", (event) => {
//   output.textContent = `Keyup Start ${event.key}`;
//   console.log(event.key);
// });

// document.addEventListener("keydown", (event) => {
//   output.textContent = `Keydown Start ${event.key}`;
//   console.log(event.key);
// });

const box = document.getElementById("box");
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  /* switch (event.key) {
    case "ArrowUp":
      y -= 10;
      break;
    case "ArrowDown":
      y += 10;
      break;
    case "ArrowLeft":
      x -= 10;
      break;
    case "ArrowRight":
      x += 10;
      break;
  } */

  if(event.key == "ArrowUp") {
    y -= 20;
  } else if (event.key == "ArrowDown") {
    y += 20;
  } else if (event.key == "ArrowLeft") {
    x -= 20;
  } else if (event.key == "ArrowRight") {
    x += 20;
  }
  
  box.style.transform = `translate(${x}px, ${y}px)`;
});
