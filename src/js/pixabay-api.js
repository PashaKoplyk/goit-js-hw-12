import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54337212-655e7339b0825c0fa1c24fc71';

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return response.data;
}