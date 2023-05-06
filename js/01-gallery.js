import { galleryItems } from './gallery-items.js';
// Change code below this line

//import * as basicLightbox from 'basiclightbox';

console.log(galleryItems);

// ********** CREATING OF NEW CODE HTML FOR GALLERY **********

const galleryList = document.querySelector('.gallery');

galleryItems.forEach(item => {
    const galleryHtml = `<div class = "gallery_item">
                            <a class = "gallery_link" href = "${item.original}">
                                <img
                                    class = "gallery_image"
                                    src = "${item.preview}"
                                    data-source = "${item.original}"
                                    alt = "${item.description}"
                                />
                            </a>
                        </div>`
    
    galleryList.insertAdjacentHTML("beforeend", galleryHtml);

});

// ********** GETTING ADRES URL OF LARGER IMAGE ****************

galleryList.addEventListener('click', (event) => {

    event.preventDefault(); 

   if(event.target.tagName === 'IMG'){
    const largeImageUrl = event.target.getAttribute("data-source");
    
    const windowModalImage = basicLightbox.create(      // Creating of window modal
        `<img src = "${largeImageUrl}">`
    );
    windowModalImage.show();

    document.addEventListener('keydown', (event) => {       // Closing the window modal after pressing of key "escape"
        if(event.key === 'Escape'){
            windowModalImage.close();
        }

    });
   }

});

