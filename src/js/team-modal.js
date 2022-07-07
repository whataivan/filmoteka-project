const openBtn = document.querySelector('.button-open');
const backdrop = document.querySelector('.backdrop-team');
const closeBtn = document.querySelector('.modal-group__close-btn');

openBtn.addEventListener('click', onClick);
closeBtn.addEventListener('click', forClose);

function onClick(a) {
  console.log(a);
  backdrop.classList.remove('backdrop-hidden');
}

function forClose(a) {
  console.log(a);
  backdrop.classList.add('backdrop-hidden');
}
