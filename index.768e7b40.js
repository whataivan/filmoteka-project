!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,o.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){n[t]=e},t.parcelRequired7c6=o),o("2PzaW");var a=document.querySelector(".gallery"),l=document.querySelector(".backdrop");a.addEventListener("click",(function(t){var e,n=JSON.parse(localStorage.getItem("response"));l.classList.remove("is-hidden"),e=n.find((function(e){return String(e.id)===t.target.id})),console.log(e),function(t){var e=JSON.parse(localStorage.getItem("genres"));console.log(e);var n='\n    <div class="modal-group">\n      <button data-modal-close class="modal-group__close-btn">X\n        <object class="modal-group__close-object">\n          <svg class="modal-group__close-icon" width="18" height="18">\n            <use href="./images/symbol-defs.svg#icon-close-modal"></use>\n          </svg>\n        </object>\n      </button>\n      <div class="modal-group__img-wrapper">\n        <img\n          class="modal-group__img"\n          src="'.concat("https://image.tmdb.org/t/p/w500").concat(t.poster_path,'"\n          alt="').concat(t.original_title,'"\n          width="280"\n        />\n      </div>\n      <div class="modal-group__wrapper">\n        <h2 class="modal-group__title">').concat(t.original_title,'</h2>\n        <table class="table">\n          <tbody>\n            <tr>\n              <td class="table__title">Vote / Votes</td>\n              <td class="table__text">\n                <span class="gallery-text__rating table-text-orange">').concat(t.vote_average,'</span>\n                /\n                <span class="table-text-grey">').concat(t.vote_count,'</span>\n              </td>\n            </tr>\n\n            <tr>\n              <td class="table__title">Popularity</td>\n              <td class="table__text">').concat(t.popularity,'</td>\n            </tr>\n            <tr>\n              <td class="table__title">Original Title</td>\n              <td class="table__text">').concat(t.original_title,'</td>\n            </tr>\n            <tr>\n              <td class="table__title">Genre</td>\n              <td class="table__text">').concat(t.genre_ids.map((function(t){return" "+e[t]})),'</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h3 class="modal-group__about-title">About</h3>\n        <p class="modal-group__about-text">\n        ').concat(t.overview,'\n        </p>\n        <div class="modal-group__btns">\n          <button class="watched-btn" type="submit">add to Watched</button>\n          <button class="queue-btn" type="submit">add to queue</button>\n        </div>\n      </div>\n    </div>');l.innerHTML=n}(e)}));var s=document.querySelector(".modal-group__close-btn");console.log(s),s.addEventListener("click",(function(t){l.classList.add("is-hidden")}))}();
//# sourceMappingURL=index.768e7b40.js.map
