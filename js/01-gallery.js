import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryOfImg = document.querySelector(".gallery");

// Создание галереии
const itemEl = galleryItems
  .map(
    (image) => `<a class="gallery__link" href='${image.original}'
        <li><img src='${image.preview}' data-source='${image.original}' alt='${image.description}' loading="lazy" class="gallery__image" > </li></a>`
  )
  .join("");
galleryOfImg.insertAdjacentHTML("afterbegin", itemEl);

galleryOfImg.addEventListener("click", onImgClick);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const originalImg = event.target.dataset.source;

  const lightboxEscConfig = {
    onShow: () => {
      document.addEventListener("keydown", onEscKeyPress);
    },
    onClose: () => {
      document.removeEventListener("keydown", onEscKeyPress);
    },
  };

  const instance = basicLightbox.create(
    `
    <img
        class = "allery__image"
        src = '${originalImg}'
        data-source = ${galleryOfImg.original}
        alt= ${galleryOfImg.description}
        width = 800
        height = 600
    >`,
    lightboxEscConfig
  );
  instance.show();

  function onEscKeyPress(event) {
    if (event.code === "Escape" && instance.visible()) {
      instance.close();
    }
  }
}

console.log(galleryItems);
