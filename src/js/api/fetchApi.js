export {fetchTrends, fetchByName, fetchGenres}
const key = 'fdee5313a0b876498560bfe4baaab806'


function fetchTrends(page=1){
    
   const url = 'https://developers.themoviedb.org/3/trending/get-trending'
   
   return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`)
   .then((res)=>res.json()) 
// .then(res=>console.log(res)).catch(err=>console.log(err))
   
   }
   
   
   function fetchByName(name, page=1){
   
    
   const url = `https://api.themoviedb.org/3/search/movie?api_key=fdee5313a0b876498560bfe4baaab806&query=batman&page=1&include_adult=false`
     return fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=fdee5313a0b876498560bfe4baaab806`)
     .then((res)=>res.json()).catch(err=>console.log(err))
        
   }
   // https://api.themoviedb.org/3/search/movie?${key}&query=${name}&page=1&include_adult=false
   function fetchGenres(){
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=fdee5313a0b876498560bfe4baaab806`)
    .then((res)=>res.json()).catch(err=>console.log(err))
   }