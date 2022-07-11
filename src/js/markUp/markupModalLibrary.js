import sprite from '../../images/symbol-defs.svg';

let objFindItem;

const backdrop = document.querySelector('.backdrop');

export default function markUpModalLib(obj, nameBtnFirst, nameBtnLast) {
  if (obj) {
    // //////////////////////////////////////////////////////
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', onEscape);
    // ////////////////////////////////////////////////////
    const genres = JSON.parse(localStorage.getItem('genres'));
    const urlImg = 'https://image.tmdb.org/t/p/w500';

    objFindItem = obj;

    //при нажатии на карточку обект карточки пущится в массив

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
            src="${
              obj.poster_path
                ? urlImg + obj.poster_path
                : 'https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg'
            }"
            alt="${obj.original_title}"
            
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
                <td class="table__text">${
                  obj.genre_ids.length > 0
                    ? obj.genre_ids.map(gen => {
                        return (gen = ' ' + genres[gen]);
                      })
                    : 'No genres found'
                }</td>
              </tr>
            </tbody>
          </table>
  
          <h3 class="modal-group__about-title">About</h3>
          <p class="modal-group__about-text">
          ${obj.overview?obj.overview:'No info'}
          </p>
          <div class="modal-group__btns">
            <button class="watched-btn delete-btn" type="submit" >${nameBtnFirst.toUpperCase()}</button>
            <button class="queue-btn" type="submit">${nameBtnLast.toUpperCase()}</button>
          </div>
        </div>
      </div>`;

    backdrop.innerHTML = markUp;

    const closeBtn = document.querySelector('.modal-group__close-btn');

    closeBtn.addEventListener('click', () => {
      backdrop.classList.add('is-hidden');
      // ///////////////////////////////////////////
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', onEscape);
      // ///////////////////////////////////////////////////
    });

    function onClickQueue() {
      const resq = checkQueue();
      if (resq === 'REMOVE') {
       
        let resFromQ = JSON.parse(localStorage.getItem('queue'));
        
        let resToStorage = resFromQ.filter(el => el.id !== objFindItem.id);
       
        localStorage.setItem('queue', JSON.stringify(resToStorage));
      } else {
        arrForQueue.push(forLocalStorage);
        localStorage.setItem('queue', JSON.stringify(arrForQueue));
      }
    }
  }
}

///////// Ф-ція закриття по Escape/////

function onEscape(event) {
  if (event.keyCode === 27) {
    backdrop.classList.add('is-hidden');
  }
}

///////// Ф-ція закриття модалки  handleClick за кліком поза межами модалки/////
function handleClick(event) {
  if (event.target.nodeName === 'DIV') {
    backdrop.classList.add('is-hidden');
  }
}
