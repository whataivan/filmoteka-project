import { fetchTrends, fetchByName, fetchGenres } from './js/api/fetchApi';
let obj1 = {};
const urlImg = 'https://image.tmdb.org/t/p/w500';
fetchGenres().then(data => {
  data.genres.map(el => {
    obj1[el.id] = el.name;
  });
});

fetchTrends().then(res => markUpForGallery(res.results));

// fetchByName('batman').then(res => {});

const galleryItem = document.querySelector('.gallery');

function markUpForGallery(arr) {
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
console.log(fetchByName('batman').then(res => console.log(res)));
