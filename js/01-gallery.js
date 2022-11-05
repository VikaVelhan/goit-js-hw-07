import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryListEl = document.querySelector(".gallery");
const markup = galleryItems
  .map((img) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`;
  })
  .join("");
galleryListEl.innerHTML = markup;
galleryListEl.addEventListener("click", onOpenModal);
function onOpenModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onCloseModal);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onCloseModal);
      },
    }
  );
  function onCloseModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
}
