import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '';

axios.defaults.baseURL = BASE_URL;
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
