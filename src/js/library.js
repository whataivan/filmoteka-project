import { markUpForLibrary } from './markUp/markUpforLibrary';

const watched = document.querySelector('.library__button--watched');
const queue = document.querySelector('.library__button--queue');

onClickWatched();

watched.addEventListener('click', onClickWatched);

function onClickWatched() {
  const item = JSON.parse(localStorage.getItem('watched'));
  markUpForLibrary(item);
}

queue.addEventListener('click', onClickQueue);
function onClickQueue() {
  const item = JSON.parse(localStorage.getItem('queue'));
  markUpForLibrary(item);
}
