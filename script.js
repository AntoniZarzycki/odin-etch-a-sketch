function generatePixels(count) {
  const canvas = document.querySelector("#canvas");
  const size = canvas.offsetWidth / count;

  for (let i = 1; i <= count * count; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.setAttribute("style", `width: ${size}px; height: ${size}px;`);
    canvas.appendChild(pixel);
  }
}

generatePixels(16);

document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("pixel")) console.log(e);
});
