import { fetchTrends, fetchByName, fetchGenres } from './js/api/fetchApi'
let obj1 = {}
fetchGenres().then(data => {
    // console.log(data);
    data.genres.map(el => {

        obj1[el.id] = el.name
    })



})

fetchTrends().then(res => markUpForGallery(res.results))

fetchByName('batman')
    .then(res => {




    })



const galleryItem = document.querySelector('.gallery')

function markUpForGallery(arr) {
   
    const urlImg ='https://image.tmdb.org/t/p/w500'
    let a = arr.reduce((acc, el) =>
        acc +=
        `<li class="gallery__item">
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
              <p class="gallery-text__genre"> ${el.genre_ids.map(gen => { return( gen = obj1[gen]) }).length>3?
              (el.genre_ids.map(gen => { return gen =' '+ obj1[gen] }).slice(0,2)+', Other '):el.genre_ids.map(gen => { return gen = ' '+ obj1[gen] })
              
            } | ${el.release_date.slice(0,4)}</p>
              
            </div>
          </div>
        </a>
      </li>`
    ,'')
    galleryItem.insertAdjacentHTML('beforeend', a)
//<span class="gallery-text__rating">${el.vote_average}</span>
}

// adult: false
// backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"
// genre_ids: (2) [18, 80]
// id: 278
// original_language: "en"
// original_title: "The Shawshank Redemption"
// overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope."
// popularity: 76.027
// poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
// release_date: "1994-09-23"
// title: "The Shawshank Redemption"
// video: false
// vote_average: 8.7
// vote_count: 21704



let obj = {
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
}