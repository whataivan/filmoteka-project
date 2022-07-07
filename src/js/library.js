import { markUpForLibrary } from './markUp/markUpforLibrary';
import { firstPaginationCall } from './paginationLib';
import markUpModalLib from './markUp/markupModalLibrary'

const watched = document.querySelector('.library__button--watched');
const queue = document.querySelector('.library__button--queue');

onClickWatched()//dont touch

let arrForQueue = [];
let arrForWatched = []
if (localStorage.getItem('watched')) {
  arrForWatched = JSON.parse(localStorage.getItem('watched'))
}
if (localStorage.getItem('queue')) {
  arrForQueue = JSON.parse(localStorage.getItem('queue'))
}
arrForWatched = JSON.parse(localStorage.getItem('watched'))
arrForQueue = JSON.parse(localStorage.getItem('queue'))

const gallery = document.querySelector('.gallery')
const backdrop = document.querySelector('.backdrop')
//==================
let deleteBtn;
let addToQueue;


    //=============================
gallery.addEventListener('click', onClick);

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
    if (watched.classList.contains('active')) {
      markUpModalLib(elementForModal, 'DELETE', 'add to queue');
    } else {
      markUpModalLib(elementForModal, 'DELETE', 'add to watched');
    }
    deleteBtn = document.querySelector('.delete-btn');
 addToQueue = document.querySelector('.queue-btn');
deleteBtn.addEventListener('click', onClickDelete)
addToQueue.addEventListener('click', onClickAddtBtn)

  }
}
function  onClickDelete(){
  console.log('dsfevsdf');
   checkDeleteBtn()
}
function onClickAddtBtn(){
  console.log('dsfevsdf');
}

function checkDeleteBtn() {
  
  if (deleteBtn.textContent === 'DELETE') {
    deleteBtn.textContent = 'DONE!'
    return 'ADD'
  }
    // return 'REMOVE'
  // }
}
// if (deleteBtn.textContent === 'ADD TO QUEUE') {
//   deleteBtn.textContent = 'REMOVE FROM QUEUE'
//   return 'ADD'
// } else {
//   deleteBtn.textContent = 'ADD TO QUEUE'
//   return 'REMOVE'
// }


watched.addEventListener('click', onClickWatched);
queue.addEventListener('click', onClickQueue);

function onClickWatched() {
  queue.classList.remove('active')
  const item = JSON.parse(localStorage.getItem('watched'));
  if (item){
    markUpForLibrary(item)
    firstPaginationCall('watched');
  } else {
    markUpForLibrary([])
  }
}
function onClickQueue() {
  const item = JSON.parse(localStorage.getItem('queue'));
  queue.classList.add('active')
  watched.classList.remove('active')
  if (item) {

    markUpForLibrary(item)
    firstPaginationCall('queue');
  } else {
    markUpForLibrary([])
  }

}

