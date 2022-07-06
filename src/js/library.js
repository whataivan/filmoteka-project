import { markUpForLibrary } from './markUp/markUpforLibrary';
import { firstPaginationCall } from './paginationLib';

const watched = document.querySelector('.library__button--watched');
const queue = document.querySelector('.library__button--queue');

onClickWatched();
// firstPaginationCall('watched');
watched.addEventListener('click', onClickWatched);

function onClickWatched() {
  const item = JSON.parse(localStorage.getItem('watched'));
  // markUpForLibrary(item);
  firstPaginationCall('watched');
}

queue.addEventListener('click', onClickQueue);

function onClickQueue() {
  const item = JSON.parse(localStorage.getItem('queue'));
  // markUpForLibrary(item);
  firstPaginationCall('queue');
}
