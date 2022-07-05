const paginList = document.querySelector('.pagination__list');
const paginBlock = document.querySelector('.pagination');

let currentPage = 10;
let totalPages = 10;
function paginationMarkup() {
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
    paginBlock.addEventListener('click', onClickPagination);
    if (totalPages > 5) {
      addEdgeClass();
      addCurrentClassBtn();
    }
    return;
  }
  markup += `<li class="pagination__item">${totalPages}</li>`;
  paginList.innerHTML = markup;
  paginBlock.addEventListener('click', onClickPagination);
  if (totalPages > 5) {
    addEdgeClass();
    addCurrentClassBtn();
  }
}
function onClickPagination(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    if (evt.target.dataset.btn === 'prev') {
      cons(currentPage - 1);
    }
    if (evt.target.dataset.btn === 'next') {
      cons(currentPage + 1);
    }
  }
  if (
    evt.target.nodeName !== 'LI' ||
    evt.target.classList.contains('pagination__item-hidden')
  ) {
    return;
  }
  cons(evt.target.textContent);
}

paginationMarkup();

function cons(page) {
  console.log('console page', page);
}
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
  console.log('~ paginList', paginList);
  //  paginList.children
  //   console.log('~ paginList.children', paginList.children);
  const list = paginList.document.querySelectorAll('li');
  console.log('~ list', list);
}
