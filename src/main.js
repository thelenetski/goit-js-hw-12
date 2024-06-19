import * as search from './js/pixabay-api';
import { clearRender } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const morePostsBtn = document.querySelector('.btn');
let userSearch;
let page = 1;
let limit = 15;
let size = 0;

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
  search.getData(userSearchRequest.trim(), loader, page, morePostsBtn, limit);
  event.target.elements.search.value = '';
  userSearch = userSearchRequest.trim();
});

morePostsBtn.addEventListener('click', () => {
  const totalPages = Math.ceil(100 / limit);

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
    search.getData(userSearch, loader, page, morePostsBtn, size, limit);
  }
});
