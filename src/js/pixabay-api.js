// Імпорт бібліотеки axios для виконання HTTP-запитів
import axios from 'axios';
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

export async function getImagesByQuery(query) {
  const response = await axios.get('', { params: { q: query } });
  return response.data.hits;
}
