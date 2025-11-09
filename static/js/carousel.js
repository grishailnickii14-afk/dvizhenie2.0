document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const overlayImage = document.getElementById("overlayImage");
  const closeBtn = document.getElementById("closeBtn");

  document.querySelectorAll(".image-container img").forEach(img => {
    img.addEventListener("click", () => {
      overlayImage.src = img.src;
      overlay.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => overlay.classList.add("hidden"));
  overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.classList.add("hidden");
  });
});
