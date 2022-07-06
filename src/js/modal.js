import { fetchByName, fetchTrends } from './api/fetchApi';

import { markUpForLibrary } from '../index';

import sprite from './../images/symbol-defs.svg';

const list = document.querySelector('.gallery');

const backdrop = document.querySelector('.backdrop');

let arrForWatched = [];
let arrForQueue = [];
let elementForModal;

list.addEventListener('click', onClick);

function onClick(event) {
  let elementForModal;

  if (!event.target.closest('li')) {
    return;
  } else {
    let response = JSON.parse(localStorage.getItem('response'));
    backdrop.classList.remove('is-hidden');
    const currentId = event.target.closest('li').id;
    elementForModal = response.find(el => String(el.id) === currentId);
    // console.log(elementForModal);
    arrForQueue.push(elementForModal);
    arrForWatched.push(elementForModal);
    createMarkUpModal(elementForModal);

    return;
  }
}

function createMarkUpModal(obj) {
  const genres = JSON.parse(localStorage.getItem('genres'));

  const urlImg = 'https://image.tmdb.org/t/p/w500';

  const markUp = `
    <div class="modal-group">
      <button data-modal-close class="modal-group__close-btn">
      <object class="modal-group__close-object">
          <svg class="modal-group__close-icon" width="28" height="28">
            <use href="${sprite}#icon-close-modal"></use>
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
                <span class="gallery-text__rating table-text-orange">${
                  obj.vote_average
                }</span>
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
              <td class="table__text">${obj.genre_ids.map(gen => {
                return (gen = ' ' + genres[gen]);
              })}</td>
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

  backdrop.innerHTML = markUp;
  const closeBtn = document.querySelector('.modal-group__close-btn');

  closeBtn.addEventListener('click', () => {
    backdrop.classList.add('is-hidden');

    
  });
  const addToWatched = document.querySelector('.watched-btn');
  const addToQueue = document.querySelector('.queue-btn');
  addToWatched.addEventListener('click', onClickWatched);
  addToQueue.addEventListener('click', onClickQueue);
  // console.log(addToWatched);
  // console.log(addToQueue);
  function onClickWatched() {
    localStorage.setItem('watched', JSON.stringify(arrForWatched));
  }

  function onClickQueue() {
    localStorage.setItem('queue', JSON.stringify(arrForQueue));
  }
}

export { onClick, createMarkUpModal };

///////// Ф-ція закриття по Escape/////

document.addEventListener('keydown', onEscape);

function onEscape(event) {
  if (event.keyCode === 27) {
    backdrop.classList.add('is-hidden');
  }
  document.removeEventListener('keydown', event);
}

///////// Ф-ція закриття модалки за кліком поза межами модалки/////

document.addEventListener('click', (e) => {
  if(e.target === backdrop) {
    backdrop.classList.add('is-hidden');
  }
  document.removeEventListener('click', e);
});
