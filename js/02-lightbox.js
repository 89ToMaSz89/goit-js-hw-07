// import simpleLightbox from '/simplelightbox';
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

galleryItems.forEach(event => {

    const galleryHtml = `
        <li>
            <a class = "gallery__item" href = "${event.original}">
                <img 
                    class = "gallery__image" 
                    src = "${event.preview}"
                    alt = "${event.description}">
            </a>
        </li>`

    galleryList.insertAdjacentHTML('beforeend', galleryHtml);
});

const newGallery = new SimpleLightbox('.gallery a' , {
    captions: true,
    captionsData: 'alt',
    captionDelay: '250',
    captionPosition: 'bottom'
});




