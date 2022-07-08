const urlImg = 'https://image.tmdb.org/t/p/w500';
let obj1 = JSON.parse(localStorage.getItem('genres'));
const gallery = document.querySelector('.gallery');

export function markUpForLibrary(arr) {
  if (arr.length===0) {
    gallery.innerHTML =''
  }
  let markUp = arr.reduce(
    (acc, el) =>
      (acc += `<li id="${el.id}" class="gallery__item">
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
  gallery.innerHTML = markUp;
}
