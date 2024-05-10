function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let size = 30;
  let htmlString = "";

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    htmlString += `<div style="background-color: ${color}; width: ${size}px; height: ${size}px"></div>`;
    size += 10;
  }

  boxes.innerHTML = htmlString;
}

createBtn.addEventListener("click", () => {
  const val = parseInt(input.value);
  const atrMin = parseInt(input.getAttribute("min"));
  const atrMax = parseInt(input.getAttribute("max"));

  if (val >= atrMin && val <= atrMax) {
    createBoxes(input.value);
    input.value = "";
  }
});

function destroyBoxes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

destroyBtn.addEventListener("click", () => {
  destroyBoxes(boxes);
});
