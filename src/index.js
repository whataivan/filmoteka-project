import { fetchTrends, fetchByName, fetchGenres } from './js/api/fetchApi';
let findErr = document.querySelector('.form-text')
let obj1 = {};
let forLocalStor ;
const urlImg = 'https://image.tmdb.org/t/p/w500';
fetchGenres().then(data => {
  console.log(data);
  data.genres.map(el => {
    
    obj1[el.id] = el.name;
    localStorage.setItem('genres', JSON.stringify(obj1))
  });
});

fetchTrends().then(res =>{ markUpForGallery(res.results)
  localStorage.setItem('response', JSON.stringify(res.results) ) 
  });
  
const form = document.querySelector('.form')
form.addEventListener('submit', onSubmit)


function onSubmit(evt) {
  evt.preventDefault()
  const query = evt.currentTarget.name.value.trim()
  if (!query) {
    findErr.classList.remove('visually-hidden')
    return
  }

  fetchByName(query).then(res => {
    
    if (!res.results.length) {
      findErr.classList.remove('visually-hidden') 
      setTimeout(() => {
        findErr.classList.add('visually-hidden');
      }, 3000)
    
      evt.target.reset()
      return
    }
    localStorage.setItem('response', JSON.stringify(res.results)) 
    markUpForGallery(res.results)
    
  }).catch((err) =>{
    console.log(err) 
    
})

}

const galleryItem = document.querySelector('.gallery');

function markUpForGallery(arr) {


  galleryItem.innerHTML = ''
  let a = arr.reduce(
    (acc, el) =>
    (acc += `<li class="gallery__item">


        <a class="gallery__link" href="#">
          <img id='${el.id}'
            class="gallery__img"
            src='${el.poster_path?urlImg+el.poster_path:'https://cdn5.vectorstock.com/i/1000x1000/73/49/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg'}'
            alt="${el.original_title}"
            
          />
          <div class="gallery-text">
            <p class="gallery-text__title">${el.original_title}</p>
            <div class="gallery-text__info">

              <p class="gallery-text__genre"> ${el.genre_ids.map(gen => {
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
              <p class="gallery-text__genre"> ${el.genre_ids.map(gen => {
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


