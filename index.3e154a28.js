function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return i[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("asUcn",(function(t,i){e(t.exports,"fetchTrends",(function(){return s})),e(t.exports,"fetchByName",(function(){return a})),e(t.exports,"fetchGenres",(function(){return l}));const n="fdee5313a0b876498560bfe4baaab806";function a(e,t=1){return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${n}&language=en-US&page=${t}&include_adult=false&query=${e}`).then((e=>e.json())).catch((e=>console.log(e)))}function s(e=1){return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${n}&page=${e}&language=en-US`).then((e=>e.json()))}function l(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=fdee5313a0b876498560bfe4baaab806").then((e=>e.json())).catch((e=>console.log(e)))}}));var s=a("asUcn");s=a("asUcn");let l=document.querySelector(".form-text"),o={};const r=document.querySelector(".gallery"),c=document.querySelector(".form");function d(e){r.innerHTML="";let t=e.reduce(((e,t)=>e+`<li id='${t.id}' class="gallery__item">\n      \n          <img \n            class="gallery__img"\n            src='${t.poster_path?"https://image.tmdb.org/t/p/w500"+t.poster_path:"https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg"}'\n            alt="${t.original_title}"\n            \n          />\n          <div class="gallery-text">\n            <p class="gallery-text__title">${t.original_title}</p>\n            <div class="gallery-text__info">\n\n\n              <p class="gallery-text__genre"> ${t.genre_ids.map((e=>o[e])).length>3?t.genre_ids.map((e=>" "+o[e])).slice(0,2)+", Other ":t.genre_ids.map((e=>" "+o[e]))} | ${t.release_date.slice(0,4)}</p>\n\n                </div>\n                </div>\n                \n                </li>`),"");r.insertAdjacentHTML("beforeend",t)}(0,s.fetchGenres)().then((e=>{e.genres.map((e=>{o[e.id]=e.name,localStorage.setItem("genres",JSON.stringify(o))}))})),(0,s.fetchTrends)().then((e=>{d(e.results),localStorage.setItem("response",JSON.stringify(e.results)),b(e.page,e.total_pages)})),c.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.name.value.trim();if(!t)return l.classList.remove("visually-hidden"),void setTimeout((()=>{l.classList.add("visually-hidden")}),3e3);(0,s.fetchByName)(t).then((i=>{if(!i.results.length)return l.classList.remove("visually-hidden"),setTimeout((()=>{l.classList.add("visually-hidden")}),3e3),void e.target.reset();localStorage.setItem("response",JSON.stringify(i.results)),d(i.results),b(i.page,i.total_pages,t)})).catch((e=>{console.log(e)}))}));const g=document.querySelector(".pagination__list"),p=document.querySelector(".pagination"),_=document.querySelector(".pagination__btn-prev"),u=document.querySelector(".pagination__btn-next");let m,f,h=null;function b(e,t,i=null){m=e,f=t,h=i,p.removeEventListener("click",v);let n="";if(m>=1&&(n+='<li class="pagination__item">1</li>'),2===m&&(n+='<li class="pagination__item">2</li>'),3===m&&(n+='<li class="pagination__item">2</li><li class="pagination__item">3</li>'),4===m&&(n+='<li class="pagination__item-hidden is-hidden"><span>...</span></li><li class="pagination__item">2</li><li class="pagination__item">3</li><li class="pagination__item">4</li>'),m>4&&(n+=`<li class="pagination__item-hidden"><span>...</span></li><li class="pagination__item">${m-2}</li><li class="pagination__item">${m-1}</li><li class="pagination__item">${m}</li>`),f-m>=4&&(n+=`<li class="pagination__item">${m+1}</li><li class="pagination__item">${m+2}</li><li class="pagination__item-hidden"><span>...</span></li>`),f-m==3&&(n+=`<li class="pagination__item">${m+1}</li><li class="pagination__item">${m+2}</li><li class="pagination__item-hidden is-hidden"><span>...</span></li>`),f-m==2&&(n+=`<li class="pagination__item">${m+1}</li>`),f-m==0)return g.innerHTML=n,y(),L(),S(),void p.addEventListener("click",v);n+=`<li class="pagination__item">${f}</li>`,g.innerHTML=n,y(),L(),S(),p.addEventListener("click",v)}function v(e){"BUTTON"===e.target.nodeName&&("prev"===e.target.dataset.btn&&(m-=1,$()),"next"===e.target.dataset.btn&&(m+=1,$())),"LI"!==e.target.nodeName||e.target.classList.contains("pagination__item-hidden")||String(m)!==e.target.textContent&&(m=e.target.textContent,$())}function y(){g.lastElementChild.classList.add("pagination-edge"),m>3&&g.firstElementChild.classList.add("pagination-edge"),f-m<3&&g.lastElementChild.classList.remove("pagination-edge")}function L(){document.querySelectorAll(".pagination__item").forEach((e=>{e.textContent===String(m)&&e.classList.add("pagination__currentPage")}))}function S(){1===m?(_.disabled=!0,_.classList.remove("pagination__btn"),_.classList.add("pagination__btn-Ldisabled")):(_.disabled=!1,_.classList.add("pagination__btn"),_.classList.remove("pagination__btn-Ldisabled")),m===f?(u.disabled=!0,u.classList.remove("pagination__btn"),u.classList.add("pagination__btn-Rdisabled")):(u.disabled=!1,u.classList.add("pagination__btn"),u.classList.remove("pagination__btn-Rdisabled"))}function $(){null===h?(p.removeEventListener("click",v),(0,s.fetchTrends)(m).then((e=>{d(e.results),localStorage.setItem("response",JSON.stringify(e.results)),b(e.page,e.total_pages)}))):(p.removeEventListener("click",v),(0,s.fetchByName)(h,m).then((e=>{d(e.results),localStorage.setItem("response",JSON.stringify(e.results)),b(e.page,e.total_pages,h)})))}
//# sourceMappingURL=index.3e154a28.js.map
