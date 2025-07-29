document.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "clear":
      generatePixels();
      break;
    case "size-selector":
      selectSize();
      break;
    case "randomize":
      randomize();
      break;
    case "mode":
      changeMode();
      break;
  }
});

function generatePixels() {
  const canvas = document.querySelector("#canvas");
  canvas.textContent = "";

  canvas.style.gridTemplate = `repeat(${canvasSize}, 1fr) / repeat(${canvasSize}, 1fr)`;

  for (let i = 1; i <= canvasSize * canvasSize; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
  }
}

let canvasSize = 16;
generatePixels(canvasSize);

document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("pixel")) paintPixel(e.target, color);
});

function paintPixel(pixel, color) {
  if (mode === "click" && !mouseDown) return;

  if (randomColors) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    pixel.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  } else {
    pixel.style.backgroundColor = color;
  }
}

const colorPicker = document.querySelector("#color-picker");
let color = colorPicker.value;

colorPicker.addEventListener("input", (e) => (color = e.target.value));

const sizeSlider = document.querySelector("#size-slider");
sizeSlider.addEventListener("input", selectSize);
sizeSlider.value = canvasSize;

function selectSize(e) {
  canvasSize = e.target.value;
  const sizeLabel = document.querySelector("#size-label");
  sizeLabel.textContent = `Canvas size: ${canvasSize}x${canvasSize}`;
  generatePixels();
}

let randomColors = false;
function randomize() {
  const randomizeButton = document.querySelector("#randomize");

  if (randomColors) {
    randomizeButton.textContent = "Randomize colors: ❌";
    randomColors = false;
  } else {
    randomizeButton.textContent = "Randomize colors: ☑️";
    randomColors = true;
  }
}

let mode = "hover";
function changeMode() {
  const modeSelector = document.querySelector("#mode");
  if (mode === "hover") {
    mode = "click";
    modeSelector.textContent = "Mode: Click";
  } else {
    mode = "hover";
    modeSelector.textContent = "Mode: Hover";
  }
}

let mouseDown = false;
document.addEventListener("mousedown", () => (mouseDown = true));
document.addEventListener("mouseup", () => (mouseDown = false));
