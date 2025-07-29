function generatePixels(count) {
  const canvas = document.querySelector("#canvas");
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
  if (e.target.classList.contains("pixel")) paintPixel(e.target, "#000000");
});

function paintPixel(pixel, color) {
  pixel.style.backgroundColor = color;
}
