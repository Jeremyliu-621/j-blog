const image = document.querySelector(".cat-image");

image.addEventListener("click", () => {
  confetti({
    particleCount: 200,
    spread: 80,
    origin: { y: 0.6 },
  });
});
