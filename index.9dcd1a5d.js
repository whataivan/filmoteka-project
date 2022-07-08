!function(){function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){i[e]=n},n.parcelRequired7c6=a),a.register("2PzaW",(function(n,t){e(n.exports,"fetchTrends",(function(){return s})),e(n.exports,"fetchByName",(function(){return a})),e(n.exports,"fetchGenres",(function(){return l}));var i="fdee5313a0b876498560bfe4baaab806";function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t="https://api.themoviedb.org/3/search/movie?";return fetch("".concat(t,"api_key=").concat(i,"&language=en-US&page=").concat(n,"&include_adult=false&query=").concat(e)).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i,"&page=").concat(e,"&language=en-US")).then((function(e){return e.json()}))}function l(){return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=fdee5313a0b876498560bfe4baaab806").then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}}));var s=a("2PzaW"),l=(s=a("2PzaW"),document.querySelector(".form-text")),o={},r=document.querySelector(".gallery"),c=document.querySelector(".form");function d(e){r.innerHTML="";var n=e.reduce((function(e,n){return e+"<li id='".concat(n.id,'\' class="gallery__item" >\n      \n          <img \n            class="gallery__img"\n            src=\'').concat(n.poster_path?"https://image.tmdb.org/t/p/w500"+n.poster_path:"https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg","'\n            alt=\"").concat(n.original_title,'"\n            \n          />\n          <div class="gallery-text">\n            <p class="gallery-text__title">').concat(n.original_title,'</p>\n            <div class="gallery-text__info">\n\n\n              <p class="gallery-text__genre"> ').concat(n.genre_ids.length?n.genre_ids.map((function(e){return o[e]})).length>3?n.genre_ids.map((function(e){return" "+o[e]})).slice(0,2)+", Other ":n.genre_ids.map((function(e){return" "+o[e]})):"no genres found"," | ").concat(n.release_date.slice(0,4),"</p>\n\n                </div>\n                </div>\n                \n                </li>")}),"");r.insertAdjacentHTML("beforeend",n)}(0,s.fetchGenres)().then((function(e){e.genres.map((function(e){o[e.id]=e.name,localStorage.setItem("genres",JSON.stringify(o))}))})),r.innerHTML='<div class="spinner"><span class="spinner__animation"></span><span class="spinner__info"></span></div>',(0,s.fetchTrends)().then((function(e){var n;localStorage.getItem("page")?(n=e.total_pages,d(JSON.parse(localStorage.getItem("response"))),y(h,n)):(localStorage.setItem("response",JSON.stringify(e.results)),d(e.results),y(e.page,e.total_pages))})),c.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.name.value.trim();if(!n)return O(),l.classList.remove("visually-hidden"),void setTimeout((function(){l.classList.add("visually-hidden")}),3e3);!function(){r.innerHTML='<div class="spinner"><span class="spinner__animation"></span><span class="spinner__info"></span></div>';var t=document.querySelector(".spinner");(0,s.fetchByName)(n).then((function(t){if(!t.results.length)return O(),l.classList.remove("visually-hidden"),setTimeout((function(){l.classList.add("visually-hidden")}),3e3),void e.target.reset();localStorage.setItem("response",JSON.stringify(t.results)),d(t.results),y(t.page,t.total_pages,n)})).catch((function(e){console.log(e)})).finally((function(){return t.classList.add("visually-hidden")}))}()}));var g,u=document.querySelector(".pagination__list"),p=document.querySelector(".pagination"),_=document.querySelector(".pagination__btn-prev"),f=document.querySelector(".pagination__btn-next"),m="page",h=Number(JSON.parse(localStorage.getItem(m)))||1,v=null;function b(e){localStorage.setItem(m,JSON.stringify(e)),h=Number(JSON.parse(localStorage.getItem(m)))}function y(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;b(e),g=Number(n),v=t,p.removeEventListener("click",L);var i="";if(h>=1&&(i+='<li class="pagination__item">1</li>'),2===h&&(i+='<li class="pagination__item">2</li>'),3===h&&(i+='<li class="pagination__item">2</li><li class="pagination__item">3</li>'),4===h&&(i+='<li class="pagination__item-hidden is-hidden"><span>...</span></li><li class="pagination__item">2</li><li class="pagination__item">3</li><li class="pagination__item">4</li>'),h>4&&(i+='<li class="pagination__item-hidden"><span>...</span></li><li class="pagination__item">'.concat(h-2,'</li><li class="pagination__item">').concat(h-1,'</li><li class="pagination__item">').concat(h,"</li>")),g-h>=4&&(i+='<li class="pagination__item">'.concat(h+1,'</li><li class="pagination__item">').concat(h+2,'</li><li class="pagination__item-hidden"><span>...</span></li>')),g-h==3&&(i+='<li class="pagination__item">'.concat(h+1,'</li><li class="pagination__item">').concat(h+2,'</li><li class="pagination__item-hidden is-hidden"><span>...</span></li>')),g-h==2&&(i+='<li class="pagination__item">'.concat(h+1,"</li>")),g-h==0)return u.innerHTML=i,S(),N(),x(),void p.addEventListener("click",L);i+='<li class="pagination__item">'.concat(g,"</li>"),u.innerHTML=i,S(),N(),x(),p.addEventListener("click",L)}function L(e){"BUTTON"===e.target.nodeName&&("prev"===e.target.dataset.btn&&(b(h-1),T()),"next"===e.target.dataset.btn&&(console.log("~ currentPage",h),b(h+1),T())),"LI"!==e.target.nodeName||e.target.classList.contains("pagination__item-hidden")||String(h)!==e.target.textContent&&(b(e.target.textContent),T())}function S(){u.lastElementChild.classList.add("pagination-edge"),h>3&&u.firstElementChild.classList.add("pagination-edge"),g-h<3&&u.lastElementChild.classList.remove("pagination-edge")}function N(){document.querySelectorAll(".pagination__item").forEach((function(e){e.textContent===String(h)&&e.classList.add("pagination__currentPage")}))}function x(){1===h?(_.disabled=!0,_.classList.remove("pagination__btn"),_.classList.add("pagination__btn-Ldisabled")):(_.disabled=!1,_.classList.add("pagination__btn"),_.classList.remove("pagination__btn-Ldisabled")),h===g?(f.disabled=!0,f.classList.remove("pagination__btn"),f.classList.add("pagination__btn-Rdisabled")):(f.disabled=!1,f.classList.add("pagination__btn"),f.classList.remove("pagination__btn-Rdisabled"))}function T(){null===v?(p.removeEventListener("click",L),(0,s.fetchTrends)(h).then((function(e){d(e.results),localStorage.setItem("response",JSON.stringify(e.results)),y(e.page,e.total_pages)}))):(p.removeEventListener("click",L),(0,s.fetchByName)(v,h).then((function(e){d(e.results),localStorage.setItem("response",JSON.stringify(e.results)),y(e.page,e.total_pages,v)})))}function O(){p.innerHTML=""}}();
//# sourceMappingURL=index.9dcd1a5d.js.map
