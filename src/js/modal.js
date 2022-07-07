import { fetchByName, fetchTrends } from './api/fetchApi';

import { markUpForLibrary } from './markUp/markUpforLibrary'

import sprite from './../images/symbol-defs.svg';

const list = document.querySelector('.gallery');

const backdrop = document.querySelector('.backdrop');

let forLocalStorage
let arrForQueue = [];
let arrForWatched = []
if (localStorage.getItem('watched')) {
  arrForWatched = JSON.parse(localStorage.getItem('watched'))
}
if (localStorage.getItem('queue')) {
  arrForWatched = JSON.parse(localStorage.getItem('queue'))
}
let elementForModal;
let objFindItem;


list.addEventListener('click', onClick);
//при нажатии на карточку обект карточки пущится в массив
function onClick(event) {
  let elementForModal;

  if (!event.target.closest('li')) {
    return;
  } else {
    let response = JSON.parse(localStorage.getItem('response'));
    backdrop.classList.remove('is-hidden');
    const currentId = event.target.closest('li').id;
    elementForModal = response.find(el => String(el.id) === currentId);
   
    forLocalStorage = elementForModal

    createMarkUpModal(elementForModal);

  }
}


function createMarkUpModal(obj) {
  objFindItem = obj;
  // //////////////////////////////////////////////////////
  document.addEventListener('click', handleClick);
  document.addEventListener('keydown', onEscape);
  // ////////////////////////////////////////////////////
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
                <span class="gallery-text__rating table-text-orange">${obj.vote_average
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
          <button class="watched-btn" type="submit">ADD TO WATCHED</button>
          <button class="queue-btn" type="submit">ADD TO QUEUE</button>
        </div>
      </div>
    </div>`;

  backdrop.innerHTML = markUp;
  const closeBtn = document.querySelector('.modal-group__close-btn');

  closeBtn.addEventListener('click', () => {
    backdrop.classList.add('is-hidden');
    arrForLocalStorage = []
    // ///////////////////////////////////////////
    document.removeEventListener('click', handleClick);
    document.removeEventListener('keydown', onEscape);
    // ///////////////////////////////////////////////////
  });



  const addToWatched = document.querySelector('.watched-btn');
  const addToQueue = document.querySelector('.queue-btn');

  addToWatched.addEventListener('click', onClickWatched);
  addToQueue.addEventListener('click', onClickQueue);
 
  //проверка для вотчд==========================================
  let resFromLocalWatch = JSON.parse(localStorage.getItem('watched'))
  const finalRes = resFromLocalWatch.some(el =>
    el.id === objFindItem.id
  )
  if (finalRes) {
    addToWatched.textContent = 'REMOVE FROM WATCHED'
  } else {
    addToWatched.textContent = 'ADD TO WATCHED'
  }

  //================ //проверка для que
  let resFromLocalQueue = JSON.parse(localStorage.getItem('queue'))
  const finalResQ = resFromLocalQueue.some(el =>
    el.id === objFindItem.id
  )
  if (finalResQ) {
    addToQueue.textContent = 'REMOVE FROM QUEUE'
  } else {
    addToQueue.textContent = 'ADD TO QUEUE'
  }
  //====================================== END
  function checkWatched() {
   
    if (addToWatched.textContent === 'ADD TO WATCHED') {
      addToWatched.textContent = 'REMOVE FROM WATCHED'
      return 'ADD'
    } else {
      addToWatched.textContent = 'ADD TO WATCHED'
      return 'REMOVE'
    }
 
  }

  function checkQueue() {

    if (addToQueue.textContent === 'ADD TO QUEUE') {
      addToQueue.textContent = 'REMOVE FROM QUEUE'
      return 'ADD'
    } else {
      addToQueue.textContent = 'ADD TO QUEUE'
      return 'REMOVE'
    }

  }

  function onClickWatched() {
    // checkWatched()
    const resWatched = checkWatched()
    console.log(resWatched);
    if (resWatched === 'REMOVE') {
      console.log('rew');
      let resFromWatch = JSON.parse(localStorage.getItem('watched'))
      console.log(resFromWatch);
      let resToStorage = resFromWatch.filter(el => el.id !== objFindItem.id)
      console.log(resToStorage);
      localStorage.setItem('watched', JSON.stringify(resToStorage))
    
  
    } else {
      
      arrForWatched.push(forLocalStorage)
      localStorage.setItem('watched', JSON.stringify(arrForWatched))
      
    }
    
  }

  function onClickQueue() {
    const resq = checkQueue()
    if (resq === 'REMOVE') {
      // console.log('rew');
      let resFromQ = JSON.parse(localStorage.getItem('queue'))
      // console.log(resFromWatch);
      let resToStorage = resFromQ.filter(el => el.id !== objFindItem.id)
      // console.log(resToStorage);
      localStorage.setItem('queue', JSON.stringify(resToStorage))
    
  
    } else {
      
      arrForQueue.push(forLocalStorage)
      localStorage.setItem('queue', JSON.stringify(arrForQueue))
      
    }
  }
}

// export { onClick, createMarkUpModal };

///////// Ф-ція закриття по Escape/////

function onEscape(event) {
  if (event.keyCode === 27) {
    backdrop.classList.add('is-hidden');
    arrForLocalStorage = []
  }
}

///////// Ф-ція закриття модалки  handleClick за кліком поза межами модалки/////
function handleClick(event) {
  if (event.target === backdrop) {
    backdrop.classList.add('is-hidden');
    arrForLocalStorage = []
  }
}


