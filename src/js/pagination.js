import { fetchTrends, fetchByName } from './api/fetchApi';
import { markUpForGallery } from '/src/index';
const paginList = document.querySelector('.pagination__list');
const paginBlock = document.querySelector('.pagination');
const prevBtn = document.querySelector('.pagination__btn-prev');
const nextBtn = document.querySelector('.pagination__btn-next');
const PAGE = 'page';

let currentPage = Number(JSON.parse(localStorage.getItem(PAGE))) || 1;
let totalPages;
let searchName = null;

function changeCurrentPage(page) {
  localStorage.setItem(PAGE, JSON.stringify(page));
  currentPage = Number(JSON.parse(localStorage.getItem(PAGE)));
}

// function firstPaginationCall(pages, response) {
//   markUpForGallery(response);
//   paginationMarkup(currentPage, pages);
// }

function paginationMarkup(page, pages, name = null) {
  changeCurrentPage(page);
  totalPages = Number(pages);
  searchName = name;
  paginBlock.removeEventListener('click', onClickPagination);
  let markup = '';
  if (currentPage >= 1) {
    markup += `<li class="pagination__item">1</li>`;
  }
  if (currentPage === 2) {
    markup += '<li class="pagination__item">2</li>';
  }
  if (currentPage === 3) {
    markup +=
      '<li class="pagination__item">2</li><li class="pagination__item">3</li>';
  }
  if (currentPage === 4) {
    markup += `<li class="pagination__item-hidden is-hidden"><span>...</span></li><li class="pagination__item">2</li><li class="pagination__item">3</li><li class="pagination__item">4</li>`;
  }
  if (currentPage > 4) {
    markup += `<li class="pagination__item-hidden"><span>...</span></li><li class="pagination__item">${
      currentPage - 2
    }</li><li class="pagination__item">${
      currentPage - 1
    }</li><li class="pagination__item">${currentPage}</li>`;
  }
  if (totalPages - currentPage >= 4) {
    markup += `<li class="pagination__item">${
      currentPage + 1
    }</li><li class="pagination__item">${
      currentPage + 2
    }</li><li class="pagination__item-hidden"><span>...</span></li>`;
  }
  if (totalPages - currentPage === 3) {
    markup += `<li class="pagination__item">${
      currentPage + 1
    }</li><li class="pagination__item">${
      currentPage + 2
    }</li><li class="pagination__item-hidden is-hidden"><span>...</span></li>`;
  }
  if (totalPages - currentPage === 2) {
    markup += `<li class="pagination__item">${currentPage + 1}</li>`;
  }
  if (totalPages - currentPage === 0) {
    paginList.innerHTML = markup;
    addEdgeClass();
    addCurrentClassBtn();
    isEdgePage();
    paginBlock.addEventListener('click', onClickPagination);
    return;
  }
  markup += `<li class="pagination__item">${totalPages}</li>`;
  paginList.innerHTML = markup;
  addEdgeClass();
  addCurrentClassBtn();
  isEdgePage();
  paginBlock.addEventListener('click', onClickPagination);
}

function onClickPagination(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    if (evt.target.dataset.btn === 'prev') {
      changeCurrentPage(currentPage - 1);
      sendRequest();
    }
    if (evt.target.dataset.btn === 'next') {
      
      changeCurrentPage(currentPage + 1);
      sendRequest();
    }
  }
  if (
    evt.target.nodeName !== 'LI' ||
    evt.target.classList.contains('pagination__item-hidden')
  ) {
    return;
  }
  if (String(currentPage) === evt.target.textContent) {
    return;
  }
  changeCurrentPage(evt.target.textContent);
  sendRequest();
}

// paginationMarkup();

function addEdgeClass() {
  paginList.lastElementChild.classList.add('pagination-edge');
  if (currentPage > 3) {
    paginList.firstElementChild.classList.add('pagination-edge');
  }
  if (totalPages - currentPage < 3) {
    paginList.lastElementChild.classList.remove('pagination-edge');
  }
}

function addCurrentClassBtn() {
  const list = document.querySelectorAll('.pagination__item');
  list.forEach(el => {
    if (el.textContent === String(currentPage)) {
      el.classList.add('pagination__currentPage');
    }
  });
}

function isEdgePage() {
  if (currentPage === 1) {
    prevBtn.disabled = true;
    prevBtn.classList.remove('pagination__btn');
    prevBtn.classList.add('pagination__btn-Ldisabled');
  } else {
    prevBtn.disabled = false;
    prevBtn.classList.add('pagination__btn');
    prevBtn.classList.remove('pagination__btn-Ldisabled');
  }

  if (currentPage === totalPages) {
    nextBtn.disabled = true;
    nextBtn.classList.remove('pagination__btn');
    nextBtn.classList.add('pagination__btn-Rdisabled');
  } else {
    nextBtn.disabled = false;
    nextBtn.classList.add('pagination__btn');
    nextBtn.classList.remove('pagination__btn-Rdisabled');
  }
}

function sendRequest() {
  if (searchName === null) {
    paginBlock.removeEventListener('click', onClickPagination);
    fetchTrends(currentPage).then(res => {
      markUpForGallery(res.results);
      localStorage.setItem('response', JSON.stringify(res.results));
      paginationMarkup(res.page, res.total_pages);
    });
  } else {
    paginBlock.removeEventListener('click', onClickPagination);
    fetchByName(searchName, currentPage).then(res => {
      markUpForGallery(res.results);
      localStorage.setItem('response', JSON.stringify(res.results));
      paginationMarkup(res.page, res.total_pages, searchName);
    });
  }
}

function removePagination() {
  paginList.innerHTML = '';
}

export { paginationMarkup, firstPaginationCall, removePagination };
