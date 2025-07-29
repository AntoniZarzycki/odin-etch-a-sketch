function generatePixels() {
  const canvas = document.querySelector("#canvas");
  canvas.textContent = "";

  const pixelSize = canvas.offsetWidth / canvasSize;

  for (let i = 1; i <= canvasSize * canvasSize; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.width = `${pixelSize}px`;
    pixel.style.height = `${pixelSize}px`;
    canvas.appendChild(pixel);
  }
}

let canvasSize = 16;
generatePixels(canvasSize);

document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("pixel")) paintPixel(e.target, color);
});

function paintPixel(pixel, color) {
  pixel.style.backgroundColor = color;
}

const colorPicker = document.querySelector("#color-picker");
let color = colorPicker.value;

colorPicker.addEventListener("input", (e) => (color = e.target.value));

const sizeSelector = document.querySelector("#size-selector");
sizeSelector.addEventListener("click", selectSize);

function selectSize() {
  let newSize = Math.floor(
    Number(prompt("Type a number between 1 and 50", "16"))
  );

  if (!newSize || newSize > 50 || newSize < 1) {
    alert("Wrong number! Please type a number between 1 and 50");
    return;
  }
  canvasSize = newSize;
  generatePixels();
}

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", generatePixels);
