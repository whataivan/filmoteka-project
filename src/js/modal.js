import { fetchTrends } from './api/fetchApi';

const list = document.querySelector('.gallery');
const modalContainer = document.querySelector('modal__container');
list.addEventListener('click', onClick);

function onClick(event) {
  if (event.target.classList.contains('gallery__img')) {
    console.log('its ok');
  }
  return;
}

function createMarkUpModal(arr) {
  const urlImg = 'https://image.tmdb.org/t/p/w500';

  const markUp = `<div class="backdrop is-hidden" data-modal>
    <div class="modal-group">
      <button data-modal-close class="modal-group__close-btn">
        <object class="modal-group__close-object">
          <svg class="modal-group__close-icon" width="18" height="18">
            <use href="./images/symbol-defs.svg#icon-close-modal"></use>
          </svg>
        </object>
      </button>
      <div class="modal-group__img-wrapper">
        <img
          class="modal-group__img"
          src="${urlImg}"
          alt=""
          width="280"
        />
      </div>
      <div class="modal-group__wrapper">
        <h2 class="modal-group__title">Once upon a time in Hollywood</h2>
        <table class="table">
          <tbody>
            <tr>
              <td class="table__title">Vote / Votes</td>
              <td class="table__text">
                <span class="gallery-text__rating table-text-orange">7.8</span>
                /
                <span class="table-text-grey">1260</span>
              </td>
            </tr>

            <tr>
              <td class="table__title">Popularity</td>
              <td class="table__text">100.2</td>
            </tr>
            <tr>
              <td class="table__title">Original Title</td>
              <td class="table__text">Once</td>
            </tr>
            <tr>
              <td class="table__title">Genre</td>
              <td class="table__text">Comedy</td>
            </tr>
          </tbody>
        </table>

        <h3 class="modal-group__about-title">About</h3>
        <p class="modal-group__about-text">
          Four of the West’s most infamous outlaws assemble to steal a huge
          stash of gold from the most corrupt settlement of the gold rush towns.
          But not all goes to plan one is killed and the other three escapes
          with bags of gold hide out in the abandoned gold mine where they
          happen across another gang of three – who themselves were planning to
          hit the very same bank! As tensions rise, things go from bad to worse
          as they realise the bags of gold are filled with lead... they’ve been
          double crossed – but by who and how?
        </p>
        <div class="modal-group__btns">
          <button class="watched-btn" type="submit">add to Watched</button>
          <button class="queue-btn" type="submit">add to queue</button>
        </div>
      </div>
    </div>
  </div>`;
}
fetchTrends().then(resp => console.log(resp.results));

// adult: false;
// backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg';
// genre_ids: (2)[(18, 80)];
// id: 278;
// original_language: 'en';
// original_title: 'The Shawshank Redemption';
// overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.';
// popularity: 69.804;
// poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg';
// release_date: '1994-09-23';
// title: 'The Shawshank Redemption';
// video: false;
// vote_average: 8.7;
// vote_count: 21713;
