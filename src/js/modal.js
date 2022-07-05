import { fetchTrends } from './api/fetchApi';

const list = document.querySelector('.gallery');

const isHidden = document.querySelector('.backdrop');
console.log(isHidden);
console.log(list);
list.addEventListener('click', onClick);

function onClick(event) {
  console.log(event);
  let elementForModal;
  if (event.target.classList.contains('gallery__img')) {
    console.log(event.target.id);
    fetchTrends().then(resp => {
      elementForModal = resp.results.find(
        el => String(el.id) === event.target.id
      );
      // createMarkUpModal(elementForModal)
    });
  }

  return;
}

function createMarkUpModal(obj) {
  console.log(obj);
  const urlImg = 'https://image.tmdb.org/t/p/w500';

  const markUp = `
    <div class="modal-group">
      <button data-modal-close class="modal-group__close-btn">X
        <object class="modal-group__close-object">
          <svg class="modal-group__close-icon" width="18" height="18">
            <use href="./images/symbol-defs.svg#icon-close-modal"></use>
          </svg>
        </object>
      </button>
      <div class="modal-group__img-wrapper">
        <img
          class="modal-group__img"
          src="${urlImg}${obj.poster_path}"
          alt="${obj.original_title}"
          width="280"
        />
      </div>
      <div class="modal-group__wrapper">
        <h2 class="modal-group__title">${obj.original_title}</h2>
        <table class="table">
          <tbody>
            <tr>
              <td class="table__title">Vote / Votes</td>
              <td class="table__text">
                <span class="gallery-text__rating table-text-orange">${obj.vote_average}</span>
                /
                <span class="table-text-grey">${obj.vote_count}</span>
              </td>
            </tr>

            <tr>
              <td class="table__title">Popularity</td>
              <td class="table__text">${obj.popularity}</td>
            </tr>
            <tr>
              <td class="table__title">Original Title</td>
              <td class="table__text">${obj.original_title}</td>
            </tr>
            <tr>
              <td class="table__title">Genre</td>
              <td class="table__text">ANY GENRES</td>
            </tr>
          </tbody>
        </table>

        <h3 class="modal-group__about-title">About</h3>
        <p class="modal-group__about-text">
        ${obj.overview}
        </p>
        <div class="modal-group__btns">
          <button class="watched-btn" type="submit">add to Watched</button>
          <button class="queue-btn" type="submit">add to queue</button>
        </div>
      </div>
    </div>`;

  isHidden.innerHTML = markUp;
}
