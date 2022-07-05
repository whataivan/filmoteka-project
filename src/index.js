import { fetchTrends, fetchByName, fetchGenres } from './js/api/fetchApi';
let findErr = document.querySelector('.form-text');
let obj1 = {};
const urlImg = 'https://image.tmdb.org/t/p/w500';
fetchGenres().then(data => {
  data.genres.map(el => {
    obj1[el.id] = el.name;
  });
});

fetchTrends().then(res => markUpForGallery(res.results));

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const query = evt.currentTarget.name.value.trim();
  if (!query) {
    findErr.classList.remove('visually-hidden');
    return;
  }

  fetchByName(query)
    .then(res => {
      console.log(res);
      if (!res.results.length) {
        findErr.classList.remove('visually-hidden');
        setTimeout(() => {
          findErr.classList.add('visually-hidden');
        }, 3000);

        evt.target.reset();
        return;
      }
      markUpForGallery(res.results);
    })
    .catch(err => {
      console.log(err);
    });
}

const galleryItem = document.querySelector('.gallery');

function markUpForGallery(arr) {
  galleryItem.innerHTML = '';
  let a = arr.reduce(
    (acc, el) =>
      (acc += `<li class="gallery__item">


        <a class="gallery__link" href="#">
          <img id='${el.id}'
            class="gallery__img"
            src='${urlImg}${el.poster_path}'
            alt=""
            
          />
          <div class="gallery-text">
            <p class="gallery-text__title">${el.original_title}</p>
            <div class="gallery-text__info">

              <p class="gallery-text__genre"> ${
                el.genre_ids.map(gen => {
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
              } | ${el.release_date.slice(0, 4)}</p>

              
            </div>
          </div>
        </a>
        </li>`),
    ``
  );
  galleryItem.insertAdjacentHTML('beforeend', a);
  //<span class="gallery-text__rating">${el.vote_average}</span>
}
function markUpForLibrary(arr) {
  let a = arr.reduce(
    (acc, el) =>
      (acc += `<li class="gallery__item">
        <a class="gallery__link" href="#">
          <img
            class="gallery__img"
            src='${urlImg}${el.poster_path}'
            alt=""
            width = '280'
          />
          <div class="gallery-text">
            <p class="gallery-text__title">${el.original_title}</p>
            <div class="gallery-text__info">
              <p class="gallery-text__genre"> ${
                el.genre_ids.map(gen => {
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
              } | ${el.release_date.slice(0, 4)}</p>
        <span class="gallery-text__rating">${el.vote_average}</span>
            </div>
          </div>
        </a>
      </li>`),
    ''
  );
  galleryItem.insertAdjacentHTML('beforeend', a);
}

// console.log(fetchByName('batman', 1).then(res => console.log(res)));
