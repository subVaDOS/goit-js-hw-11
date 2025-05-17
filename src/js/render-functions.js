// Імпортуємо бібліотеку SimpleLightbox для модального перегляду зображень
import SimpleLightbox from 'simplelightbox';

// Імпортуємо стилі бібліотеки SimpleLightbox
import 'simplelightbox/dist/simple-lightbox.min.css';

// Створюємо новий екземпляр lightbox для всіх посилань у галереї
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Підписи зображень беруться з атрибута alt
  captionDelay: 200, // Затримка 200 мс перед показом підпису
});
// Експорт функції створення галереї
export function createGallery(images, galleryElem) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        type,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item js-gallery-item">
  <a class="gallery-link js-gallery-link" href="${largeImageURL}">
    <div class="image-wrapper">
      <img
        class="gallery-image js-gallery-image"
        src="${webformatURL}"
        data-source="${type}"
        alt="${tags}"
      />
    </div>
  
  <div>
    <ul class="wrapper-box">
      <li class="list-item">
        <p class="value-title">Likes</p>
        <p class="label" data-likes>${likes}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Views</p>
        <p class="label" data-views>${views}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Comments</p>
        <p class="label" data-comments>${comments}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Downloads</p>
        <p class="label" data-downloads>${downloads}</p>
      </li>
    </ul>
  </div>
  </a>
</li>`
    )
    .join('');

  // Додаємо HTML до елемента галереї
  galleryElem.insertAdjacentHTML('beforeend', markup);
  // Оновлюємо lightbox, щоб підхопив нові елементи
  lightbox.refresh();
}

// Експортуємо функцію очищення галереї
export function clearGallery(galleryElem) {
  // Очищаємо вміст елемента галереї
  galleryElem.innerHTML = '';
}
// Експортуємо функцію показу лоадера
export function showLoader(loaderElem) {
  // Видаляємо клас, що приховує лоадер
  loaderElem.classList.remove('is-hidden');
}
// Експортуємо функцію приховування лоадера
export function hideLoader(loaderElem) {
  // Додаємо клас, що приховує лоадер
  loaderElem.classList.add('is-hidden');
}
