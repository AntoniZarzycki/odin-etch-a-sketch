function generatePixels(count) {
  const canvas = document.querySelector("#canvas");
  canvas.textContent = "";

  const size = canvas.offsetWidth / count;

  for (let i = 1; i <= count * count; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.width = `${size}px`;
    pixel.style.height = `${size}px`;
    canvas.appendChild(pixel);
  }
}

generatePixels(16);

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
  generatePixels(newSize);
}
