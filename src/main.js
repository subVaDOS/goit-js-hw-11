// Імпортуємо бібліотеку для показу повідомлень
import iziToast from 'izitoast';

// Імпортуємо стилі для iziToast
import 'izitoast/dist/css/iziToast.min.css';

// Імпортуємо функцію для отримання зображень з Pixabay
import { getImagesByQuery } from './js/pixabay-api';

// Імпортуємо допоміжні функції для роботи з галереєю і лоадером
import {
  createGallery, // функція для створення HTML-галереї
  showLoader, // функція для показу лоадера (завантаження)
  hideLoader, // функція для приховування лоадера
  clearGallery, // функція для очищення галереї
} from './js/render-functions';

// Знаходимо форму в DOM
const form = document.querySelector('.form');

// Знаходимо поле вводу (input) за атрибутом name
const input = document.querySelector('[name="search-text"]');

// Знаходимо контейнер галереї в DOM
const galleryElem = document.querySelector('.gallery');

// Знаходимо елемент лоадера в DOM
const loaderElem = document.querySelector('.loader');

// Додаємо обробник події для форми — при відправці викликається onSubmitForm
form.addEventListener('submit', onSubmitForm);

// Функція-обробник події форми
function onSubmitForm(event) {
  event.preventDefault(); // Скасовуємо стандартну поведінку форми (перезавантаження сторінки)

  const request = input.value.trim(); // Отримуємо введене значення та обрізаємо пробіли

  clearGallery(galleryElem); // Очищаємо галерею перед новим запитом
  showLoader(loaderElem); // Показуємо лоадер, поки йде запит

  if (!request) {
    // Якщо користувач нічого не ввів
    hideLoader(loaderElem); // Приховуємо лоадер
    return iziToast.error({
      // Показуємо повідомлення про помилку
      title: 'Caution',
      message: 'Please enter a search query.',
      position: 'topRight',
      timeout: 3000,
    });
  }

  // Викликаємо функцію для отримання зображень за запитом
  getImagesByQuery(request)
    .then(images => {
      createGallery(images, galleryElem); // Створюємо галерею зі зображень
    })
    .catch(error => {
      // Якщо сталася помилка або нічого не знайдено — виводимо повідомлення
      iziToast.error({
        title: 'Caution',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
      });
    })
    .finally(() => {
      hideLoader(loaderElem); // Ховаємо лоадер після завершення запиту
      form.reset(); // Очищаємо форму (скидаємо введене значення)
    });
}
