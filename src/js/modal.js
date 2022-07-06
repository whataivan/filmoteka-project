import { fetchByName, fetchTrends } from './api/fetchApi';
import {markUpForLibrary} from '../index'

const list = document.querySelector('.gallery');

const backdrop = document.querySelector('.backdrop');

let arrForQuene =[]
let elementForModal;


list.addEventListener('click', onClick);




function onClick(event) {

  
  
  // if (event.target.nodeName !== 'IMG') {
  //   return
  // } else {
    let response = JSON.parse(localStorage.getItem('response'))
    backdrop.classList.remove('is-hidden')
    elementForModal = response.find(
      el => String(el.id) === event.target.id
    )
    
    createMarkUpModal(elementForModal)
  //   return
  // }
  


}



function createMarkUpModal(obj) {
  const genres = JSON.parse(localStorage.getItem('genres'))
  

  const urlImg = 'https://image.tmdb.org/t/p/w500';

  const markUp = `
    <div class="modal-group">
      <button data-modal-close class="modal-group__close-btn">X
      <img src="../images/close.png" width=18 height =18/>
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
              <td class="table__text">${obj.genre_ids.map(gen => {
    return (gen = ' ' + genres[gen])
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

closeBtn.addEventListener('click', ()=>{
  backdrop.classList.add('is-hidden')
})
const addToWatched = document.querySelector('.watched-btn')
const addToQueue = document.querySelector('.queue-btn')
addToWatched.addEventListener('click', onClickWatched)
addToQueue.addEventListener('click', onClickQueue)
console.log(addToWatched);
console.log(addToQueue);
function onClickWatched(){
console.log('ClickWatched');
arrForQuene.push(elementForModal);
console.log(arrForQuene);
}

function onClickQueue(){
  console.log('ClickQ');
}


}
