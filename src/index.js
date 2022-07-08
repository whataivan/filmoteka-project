import { fetchTrends, fetchByName, fetchGenres } from './js/api/fetchApi';
import {
  paginationMarkup,
  firstPaginationCall,
  removePagination,
} from './js/pagination';
let findErr = document.querySelector('.form-text');

let obj1 = {};
let forLocalStor;
const urlImg = 'https://image.tmdb.org/t/p/w500';
const galleryItem = document.querySelector('.gallery');
const form = document.querySelector('.form');
fetchGenres().then(data => {
  data.genres.map(el => {
    obj1[el.id] = el.name;
    localStorage.setItem('genres', JSON.stringify(obj1));
  });
});

// (function spin() {
// galleryItem.innerHTML = '<div class="spinner-border"></div>';

//при загрузке сразу показать спиннеор, файнали использовать.

fetchTrends(JSON.parse(localStorage.getItem('page'))).then(res => {
  // if (localStorage.getItem('page')) {
  //   firstPaginationCall(res.total_pages, res.results);
  // } else {
  localStorage.setItem('response', JSON.stringify(res.results));
  markUpForGallery(res.results);
  paginationMarkup(res.page, res.total_pages);
  // }
});

form.addEventListener('submit', onSubmit);
// })();



function onSubmit(evt) {
  evt.preventDefault();
  const query = evt.currentTarget.name.value.trim();
  if (!query) {
    removePagination();
    findErr.classList.remove('visually-hidden');
    setTimeout(() => {
      findErr.classList.add('visually-hidden');
    }, 3000);
    return;
  }

  spin();
  function spin() {
    galleryItem.innerHTML =
      '<div class="spinner"><span class="spinner__animation"></span><span class="spinner__info"></span></div>';
    const spinEl = document.querySelector('.spinner');
    fetchByName(query)
      .then(res => {
        if (!res.results.length) {
          removePagination();
          findErr.classList.remove('visually-hidden');
          setTimeout(() => {
            findErr.classList.add('visually-hidden');
          }, 3000);

          evt.target.reset();
          return;
        }
        localStorage.setItem('response', JSON.stringify(res.results));
        markUpForGallery(res.results);

        paginationMarkup(res.page, res.total_pages, query);
      })
      .catch(err => {
        console.log(err);
      })

      .finally(() => spinEl.classList.add('visually-hidden'));
  }
}

function markUpForGallery(arr) {
  galleryItem.innerHTML = '';
  let a = arr.reduce(
    (acc, el) =>
      (acc += `<li id='${el.id}' class="gallery__item" >
      
          <img 
            class="gallery__img"
            src='${
              el.poster_path
                ? urlImg + el.poster_path
                : 'https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg'
            }'
            alt="${el.original_title}"
            
          />
          <div class="gallery-text">
            <p class="gallery-text__title">${el.original_title}</p>
            <div class="gallery-text__info">


              <p class="gallery-text__genre"> ${
                el.genre_ids.length
                  ? el.genre_ids.map(gen => {
                      return (gen = obj1[gen]);
                    }).length > 3
                    ? el.genre_ids
                        .map(gen => {
                          return (gen = ' ' + obj1[gen]);
                        })
                        .slice(0, 2) + ', Other '
                    : el.genre_ids.map(gen => {
                        return (gen = ' ' + obj1[gen]);
                      })
                  : 'no genres found'
              } | ${el.release_date.slice(0, 4)}</p>

                </div>
                </div>
                
                </li>`),

    ``
  );
  galleryItem.insertAdjacentHTML('beforeend', a);
  //<span class="gallery-text__rating">${el.vote_average}</span>
}

export { markUpForGallery };
