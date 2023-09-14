import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainerElement = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
galleryContainerElement.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(item) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery__link">
            <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"          
            alt="${description}"
        />
        </a>
        </li>
    </ul>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
});