document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const overlayImage = document.getElementById("overlayImage");
  const closeBtn = document.getElementById("closeBtn");

  const slider = document.querySelector(".slider");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const cards = document.querySelectorAll(".event-card");

  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 25; // ширина карточки + gap

  // Открытие изображения
  document.querySelectorAll(".event-card img").forEach((img) => {
    img.addEventListener("click", () => {
      overlayImage.src = img.src;
      overlay.classList.remove("hidden");
    });
  });

  // Закрытие кнопкой
  closeBtn.addEventListener("click", () => overlay.classList.add("hidden"));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.add("hidden");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") overlay.classList.add("hidden");
  });

  // Функция прокрутки
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  // Кнопки навигации
  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) currentIndex++;
    else currentIndex = 0; // зацикливание
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) currentIndex--;
    else currentIndex = cards.length - 1;
    updateSlider();
  });

  // Swipe на мобильных
  let startX = 0;
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    if (endX < startX - 50) nextBtn.click(); // свайп влево
    if (endX > startX + 50) prevBtn.click(); // свайп вправо
  });
});
