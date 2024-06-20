import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

export async function getData(searchWord, page, limit) {
  const searchParams = new URLSearchParams({
    key: '44412279-8977454442245f14893e5bf31',
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page,
  });
  const fetchUsers = async () => {
    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams}`
    );
    return response.data;
  };

  return fetchUsers();
}
