!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequired7c6=a),a.register("iE7OH",(function(e,n){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var a={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)a[e[n]]=t[e[n]]},o=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var o={};function a(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return a(t[2])}return"/"}(),o[t]=e),e}})),a("iE7OH").register(JSON.parse('{"dxLsE":"index.611bf463.js","kxKJ3":"symbol-defs.748d6f7b.svg"}')),a("2PzaW"),a("fSCrk");var l;l=a("aNJCr").getBundleURL("dxLsE")+a("iE7OH").resolve("kxKJ3");var c,s,i=document.querySelector(".gallery"),d=document.querySelector(".backdrop"),u=[],g=[];i.addEventListener("click",(function(t){var n;if(t.target.closest("li")){var r=JSON.parse(localStorage.getItem("response"));d.classList.remove("is-hidden");var o=t.target.closest("li").id;return n=r.find((function(t){return String(t.id)===o})),g.push(n),u.push(n),function(t){c=t;var n=JSON.parse(localStorage.getItem("genres")),r="https://image.tmdb.org/t/p/w500",o='\n    <div class="modal-group">\n      <button data-modal-close class="modal-group__close-btn">\n      <object class="modal-group__close-object">\n          <svg class="modal-group__close-icon" width="28" height="28">\n            <use href="'.concat(e(l),'#icon-close-modal"></use>\n          </svg>\n        </object>\n      </button>\n      <div class="modal-group__img-wrapper">\n        <img\n          class="modal-group__img"\n          src="').concat(r).concat(t.poster_path,'"\n          alt="').concat(t.original_title,'"\n          width="280"\n        />\n      </div>\n      <div class="modal-group__wrapper">\n        <h2 class="modal-group__title">').concat(t.original_title,'</h2>\n        <table class="table">\n          <tbody>\n            <tr>\n              <td class="table__title">Vote / Votes</td>\n              <td class="table__text">\n                <span class="gallery-text__rating table-text-orange">').concat(t.vote_average,'</span>\n                /\n                <span class="table-text-grey">').concat(t.vote_count,'</span>\n              </td>\n            </tr>\n\n            <tr>\n              <td class="table__title">Popularity</td>\n              <td class="table__text">').concat(t.popularity,'</td>\n            </tr>\n            <tr>\n              <td class="table__title">Original Title</td>\n              <td class="table__text">').concat(t.original_title,'</td>\n            </tr>\n            <tr>\n              <td class="table__title">Genre</td>\n              <td class="table__text">').concat(t.genre_ids.map((function(t){return" "+n[t]})),'</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h3 class="modal-group__about-title">About</h3>\n        <p class="modal-group__about-text">\n        ').concat(t.overview,'\n        </p>\n        <div class="modal-group__btns">\n          <button class="watched-btn" type="submit">add to Watched</button>\n          <button class="queue-btn" type="submit">add to queue</button>\n        </div>\n      </div>\n    </div>');d.innerHTML=o,document.querySelector(".modal-group__close-btn").addEventListener("click",(function(){d.classList.add("is-hidden")}));var a=document.querySelector(".watched-btn");console.log(a);var s=document.querySelector(".queue-btn");function i(){localStorage.setItem("watched",JSON.stringify(u))}function p(){localStorage.setItem("queue",JSON.stringify(g))}a.addEventListener("click",i),s.addEventListener("click",p)}(n),void JSON.parse(localStorage.getItem("watched")).map((function(t){if(t.id===c.id)return console.log(s),s.textContent="Remove from watched"}))}return}))}();
//# sourceMappingURL=index.611bf463.js.map
