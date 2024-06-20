import * as search from './js/pixabay-api';
import { renderGallery, clearRender } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const morePostsBtn = document.querySelector('.btn');
let userSearch;
let page = 1;
let limit = 15;
let size = {};
let totalPages;

form.addEventListener('submit', event => {
  event.preventDefault();
  const userSearchRequest = event.target.elements.search.value;
  if (userSearchRequest === '' || /^\s*$/.test(userSearchRequest)) {
    iziToast.error({
      title: 'Error',
      message: 'Empty request',
    });
    event.target.elements.search.value = '';
    return;
  }
  loader.classList.remove('hide');
  morePostsBtn.classList.add('hide');
  clearRender();
  page = 1;
  search
    .getData(userSearchRequest.trim(), page, limit)
    .then(posts => {
      checkAndRender(posts);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error,
      });
    });
  event.target.elements.search.value = '';
  userSearch = userSearchRequest.trim();
});

morePostsBtn.addEventListener('click', () => {
  if (page > totalPages) {
    morePostsBtn.classList.add('hide');
    return iziToast.error({
      position: 'topRight',
      message: "We're sorry, there are no more posts to load",
    });
  }

  page += 1;

  if (page > 1) {
    loader.classList.remove('hide');
    morePostsBtn.classList.add('hide');
    let galleryItemSize = document.querySelectorAll('.gallery-item');
    size = galleryItemSize[0].getBoundingClientRect();
    search
      .getData(userSearch, page, limit)
      .then(posts => {
        checkAndRender(posts);
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: error,
        });
      });
  }
});

function checkAndRender(posts) {
  if (posts.hits.length === 0 || posts.hits === 'undefined') {
    loader.classList.add('hide');
    return iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }

  renderGallery(posts).then(() => {
    if (size.height) {
      window.scrollBy({
        top: size.height * 3, // зробив спеціально на 3 рядка
        behavior: 'smooth',
      });
    }
    totalPages = Math.ceil(posts.totalHits / limit);
  });
  loader.classList.add('hide');
  morePostsBtn.classList.remove('hide');
}
