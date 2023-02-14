// init 16x16 grid on container div
const containerGrid = document.querySelector(".grid-container");
const button = document.querySelector("#new");

let input = 16;

createBox(input * input, containerGrid);

button.addEventListener("click", () => {
  input = getInput();
  cleanDiv();
  createBox(input * input, containerGrid);
});

function cleanDiv(){
    containerGrid.innerHTML = '';
}

function getInput() {
  let input = prompt("Please enter desired size of grid: ");
  if (isNaN(input)) {
    alert("You have entered an incorrect input. Please try again.");
  } else if (input > 100 || input < 1) {
    alert("Please enter a number within 1-100!");
  }
  return input;
}

function createBox(num, container) {
  for (let i = 0; i < num; i++) {
    let box = document.createElement("div");
    box.setAttribute("style", "border: 1px solid black;");
    box.setAttribute("class", "grid-item");

    container.appendChild(box);
  }
  container.setAttribute(
    "style",
    `grid-template-columns: repeat(${input}, auto);`
  );

  const boxes = document.querySelectorAll(".grid-item");
  Array.from(boxes).forEach(function (e) {
    e.addEventListener("mouseover", () => {
      e.setAttribute("style", `background-color: ${randomColor()};`);
    });
  });
}

function randomColor(){
    let r, g, b;
    r = Math.floor(Math.random() * 255)+ 1;
    g = Math.floor(Math.random() * 255)+ 1;  
    b = Math.floor(Math.random() * 255)+ 1;  
    return `rgb(${r}, ${g}, ${b})`;
};