import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import { renderGallery } from './render-functions';

export function getData(searchWord, ...rest) {
  let [loader, page, morePostsBtn, size = {}, limit] = [...rest];

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

  fetchUsers()
    .then(posts => {
      if (posts.hits.length === 0 || posts.hits === 'undefined') {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      renderGallery(posts).then(() => {
        if (size.height) {
          window.scrollBy({
            top: size.height * 2,
            behavior: 'smooth',
          });
        }
      });
      loader.classList.add('hide');
      morePostsBtn.classList.remove('hide');
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error,
      });
    });
}
