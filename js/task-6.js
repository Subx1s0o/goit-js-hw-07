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
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = size + "px";
    box.style.height = size + "px";
    size += 10;
    boxes.appendChild(box);
  }
}

createBtn.addEventListener("click", () => {
  const val = parseInt(input.value);
  const atrMin = parseInt(input.getAttribute("min"));
  const atrMax = parseInt(input.getAttribute("max"));

  if (val >= atrMin && val <= atrMax) {
    createBoxes(input.value);
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
