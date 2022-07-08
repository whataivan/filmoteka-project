import { markUpForLibrary } from './markUp/markUpforLibrary';
import { firstPaginationCall } from './paginationLib';
import markUpModalLib from './markUp/markupModalLibrary';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '300px',
  position: 'center-center',
  closeButton: false,
  cssAnimationStyle: 'zoom',
  success: {
    background: '#FF6B08',
    svgColor: '#32c682',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#32c682',
    buttonColor: '#fff',
    backOverlayColor: 'rgba(50,198,130,0.2)',
  },
});


const watched = document.querySelector('.library__button--watched');
const queue = document.querySelector('.library__button--queue');
let elementForModal;//елемент открытой картинки
onClickWatched(); //dont touch

let arrForQueue = [];
let arrForWatched = [];
if (localStorage.getItem('watched')) {
  arrForWatched = JSON.parse(localStorage.getItem('watched'));
}
if (localStorage.getItem('queue')) {
  arrForQueue = JSON.parse(localStorage.getItem('queue'));
}

const gallery = document.querySelector('.gallery');
const backdrop = document.querySelector('.backdrop');
//==================
let deleteBtn;
let addToQueue;
//=============================
gallery.addEventListener('click', onClick);
// function checkAddBtn() {
//   if (watched.classList.contains('active')) {
//    const res = JSON.parse(localStorage.getItem('watched')).some(el=>el.id===elementForModal.id)
//    console.log(res);
//    if (res) {
//     addToQueue.setAttribute('disabled', true)
//    }

//   } else if (queue.classList.contains('active')) {
//     checkDeleteBtn('queue');

//   }
// }

function onClick(event) {
  if (!event.target.closest('li')) {
    return;
  } else {
    
    let response = JSON.parse(localStorage.getItem('response'));
    backdrop.classList.remove('is-hidden');
    const currentId = event.target.closest('li').id;
    elementForModal = response.find(el => String(el.id) === currentId);
    

    if (watched.classList.contains('active')) {

      markUpModalLib(elementForModal, 'REMOVE FROM LIST', 'add to queue');
    } else {
      markUpModalLib(elementForModal, 'REMOVE FROM LIST', 'add to watched');
    }
    deleteBtn = document.querySelector('.delete-btn');
    addToQueue = document.querySelector('.queue-btn');
    deleteBtn.addEventListener('click', onClickDelete);
    addToQueue.addEventListener('click', onClickAddtBtn);
  }
}
function onClickDelete() {
  if (watched.classList.contains('active')) {
    checkDeleteBtn('watched');

  } else if (queue.classList.contains('active')) {
    checkDeleteBtn('queue');

  }

}
function onClickAddtBtn() {
  
  if (queue.classList.contains('active')) {
    let res = arrForWatched.filter(el => el.id !== elementForModal.id)
    arrForWatched = res
    arrForWatched.push(elementForModal)
    localStorage.setItem('watched', JSON.stringify(arrForWatched))
    addToQueue.setAttribute('disabled', true)
    addToQueue.classList.add('inactive')

  } else if (watched.classList.contains('active')) {
    let res = arrForQueue.filter(el => el.id !== elementForModal.id)
    arrForQueue = res
    arrForQueue.push(elementForModal)
    localStorage.setItem('queue', JSON.stringify(arrForQueue))
    addToQueue.setAttribute('disabled', true)
    addToQueue.classList.add('inactive')
  }
}

function checkDeleteBtn(name) {

  if (deleteBtn.textContent === 'REMOVE FROM LIST') {

    Notiflix.Notify.success('Film was removed');
    deleteBtn.classList.add('visually-hidden');
    let resFromStorage = JSON.parse(localStorage.getItem(name));

    let resToStorage = resFromStorage.filter(el => el.id !== elementForModal.id);

    localStorage.setItem(name, JSON.stringify(resToStorage));
    // return 'ADD';
    if (name === 'watched') {
      onClickWatched()
    } else if (name === 'queue') {
      onClickQueue()
    }
  }
  return;
}
watched.addEventListener('click', onClickWatched);
queue.addEventListener('click', onClickQueue);

function onClickWatched() {
  watched.classList.add('active');
  queue.classList.remove('active');
  const item = JSON.parse(localStorage.getItem('watched'));
  if (item) {
    markUpForLibrary(item);
    firstPaginationCall('watched');//dont touch==============

  } else {
    markUpForLibrary([]);
  }
}
function onClickQueue() {
  const item = JSON.parse(localStorage.getItem('queue'));
  queue.classList.add('active');
  watched.classList.remove('active');
  if (item) {
    markUpForLibrary(item);
    firstPaginationCall('queue');//dont touch===========
  } else {
    markUpForLibrary([]);
  }
}
