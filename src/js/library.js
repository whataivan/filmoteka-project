import { markUpForLibrary } from './markUp/markUpforLibrary';
import { firstPaginationCall } from './paginationLib';

const watched = document.querySelector('.library__button--watched');
const queue = document.querySelector('.library__button--queue');

onClickWatched()


watched.addEventListener('click', onClickWatched);
queue.addEventListener('click', onClickQueue);

function onClickWatched() {
  const item = JSON.parse(localStorage.getItem('watched'));
  if (item) {
    console.log(item);
  markUpForLibrary(item)
  firstPaginationCall('watched');
  } else {
    markUpForLibrary([])
  }
  
}



function onClickQueue() {
  const item = JSON.parse(localStorage.getItem('queue'));
  if (item) {
    
  markUpForLibrary(item)
  firstPaginationCall('queue');
  } else {
    markUpForLibrary([])
  }
  
  
}
