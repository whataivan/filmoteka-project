export { fetchTrends, fetchByName, fetchGenres, fetchVideo };
const key = 'fdee5313a0b876498560bfe4baaab806';
function fetchByName(name, page = 1) {
  const url = `https://api.themoviedb.org/3/search/movie?`;

  return fetch(
    `${url}api_key=${key}&language=en-US&page=${page}&include_adult=false&query=${name}`
  )
    .then(res => res.json())
    .catch(err => console.log(err));
}

function fetchTrends(page = 1) {
  if (!page) {
    page = 1;
  }

  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&page=${page}&language=en-US`
  ).then(res => res.json());
  // .then(res=>console.log(res)).catch(err=>console.log(err))
}

// https://api.themoviedb.org/3/search/movie?${key}&query=${name}&page=1&include_adult=false
function fetchGenres() {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=fdee5313a0b876498560bfe4baaab806`
  )
    .then(res => res.json())
    .catch(err => console.log(err));
}

function fetchVideo(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos&api_key=fdee5313a0b876498560bfe4baaab806&include_adult=false`
  ).then(res => res.json());
}
