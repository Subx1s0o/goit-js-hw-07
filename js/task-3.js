const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
input.addEventListener("input", () => {
  span.textContent = input.value.trim() || "Anonymous";
});
