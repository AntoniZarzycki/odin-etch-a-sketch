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
  }
});

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
