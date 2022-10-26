// Здравствуйте, решил осмелиться сделать работу на вебпаке, именно поэтому не успел сдать вовремя, делал себе шаблон проекта.
// Прошу отнестись с пониманием, и не заворачивать мою работу именно по этому поводу.
// Так же у меня есть небольшие проблемы с импортами, не знаю в чем дело, иногда хотелось кому - то отчикать
// что - небудь.К примеру, лодешь подключился вообще без проблем.Симпллайтбокс, выел мозг,
// и цсс все равно пришлось затягивать вручную.
// Плеер вообще капец, он тупо не хочет через нпм присоединяться, так же пришлось вручную затягивать джс.
// В общем, если я явано что - то делаю не то с импортами, просьба дать коментарий, потому что я так когда не будь
// поврежу свой ноут:) Спасибо за понимание и обратную связь!

import "../styles/01-gallery.scss";
import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from "./jsCopyToDist/gallery-items";
// Change code below this line

console.log(galleryItems);

function createGallery(galleryItems) {
  const gallery = [];

  galleryItems.forEach((element) => {
    const { preview, original, description } = element;
    const itemImg = document.createElement("img");
    itemImg.classList.add("gallery__image");
    itemImg.src = preview;
    itemImg.alt = description;

    const itemA = document.createElement("a");
    itemA.classList.add("gallery__link");
    itemA.href = original;
    itemA.append(itemImg);

    const itemLi = document.createElement("div");
    itemLi.classList.add("gallery__item");
    itemLi.append(itemA);

    gallery.push(itemLi);
  });
  return gallery;
}

const containerGallery = document.querySelector(".gallery");
containerGallery.append(...createGallery(galleryItems));
const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox");
