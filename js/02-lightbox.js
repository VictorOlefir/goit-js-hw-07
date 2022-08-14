import { galleryItems } from "./gallery-items.js";

const galleryOfImg = document.querySelector(".gallery");

const itemEl = galleryItems
  .map(
    (image) =>
      `<a class="gallery__item" href='${image.original}'>
        <img class="gallery__image" src='${image.preview}' alt='${image.description}' loading="lazy"> 
        </a>`
  )
  .join("");

galleryOfImg.insertAdjacentHTML("afterbegin", itemEl);

galleryOfImg.addEventListener("click", findImgAlt);
function findImgAlt(event) {
  return console.log(event.target.alt);
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});

lightbox.on("show.SimpleLightbox");

console.log(galleryItems);
