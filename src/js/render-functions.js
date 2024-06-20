import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let galleryBoxes = 'firstload';

export async function renderGallery(data) {
  const renderBox = document.querySelector('.gallery');

  const postsArray = data.hits;

  let galleryBox = '';

  postsArray.forEach(item => {
    galleryBox += `
    <li class="gallery-item">
      <a class="gallery-link" href="${item.largeImageURL}">
        <img
          class="gallery-image"
          src="${item.webformatURL}"
          alt="${item.tags}"
          title="${item.tags}"
        />
      
      <ul>
        <li><h5>Likes</h5><span>${item.likes}</span></li>
        <li><h5>Views</h5><span>${item.views}</span></li>
        <li><h5>Comments</h5><span>${item.comments}</span></li>
        <li><h5>Downloads</h5><span>${item.downloads}</span></li>
      </ul>
      </a>
    </li>
  `;
  });
  renderBox.insertAdjacentHTML('beforeend', galleryBox);

  if (galleryBoxes !== 'firstload') galleryBoxes.destroy();
  galleryBoxes = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
  });
}

export function clearRender() {
  const renderBox = document.querySelector('.gallery');
  renderBox.innerHTML = '';
}
