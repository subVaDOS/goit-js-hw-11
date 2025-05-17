// Імпорт бібліотеки axios для виконання HTTP-запитів
import axios from 'axios';

// const API_KEY = '50348782-72c1d2cf6f33e6e33f09bb691';
// const BASE_URL = 'https://pixabay.com/api/';

// /**
//  * Отримує масив зображень з Pixabay.
//  * @param {string} query - Пошукове слово
//  * @returns {Promise<Array>} - Масив об'єктів зображень (hits)
//  */
// export async function getImagesByQuery(query) {
//   const searchParams = new URLSearchParams({
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//   });

//   const url = `${BASE_URL}?${searchParams.toString()}`;

//   try {
//     const response = await axios.get(url);
//     return response.data.hits;
//   } catch (error) {
//     console.error('❌ Запит не вдався:', error.message);
//     throw error;
//   }
// }

// Базова адреса API Pixabay
const BASE_URL = 'https://pixabay.com/api/';
// API-ключ для доступу до Pixabay API
const API_KEY = '50348782-72c1d2cf6f33e6e33f09bb691';
// Базова адреса для всіх axios-запитів
axios.defaults.baseURL = BASE_URL;
// Заголовки для запитів
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};
//  GET-запит до кореневого шляху ('')
export async function getImagesByQuery(query) {
  const response = await axios.get('', { params: { q: query } });

  return response.data.hits; // Повертаємо масив зображень із відповіді (тільки hits)
}
