var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var l={id:t,exports:{}};return e[t]=l,o.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},t.parcelRequired7c6=o),o("asUcn");const l=document.querySelector(".gallery"),a=document.querySelector(".backdrop");l.addEventListener("click",(function(t){let e,n=JSON.parse(localStorage.getItem("response"));a.classList.remove("is-hidden"),e=n.find((e=>String(e.id)===t.target.id)),console.log(e),function(t){const e=JSON.parse(localStorage.getItem("genres"));console.log(e);const n=`\n    <div class="modal-group">\n      <button data-modal-close class="modal-group__close-btn">X\n        <object class="modal-group__close-object">\n          <svg class="modal-group__close-icon" width="18" height="18">\n            <use href="./images/symbol-defs.svg#icon-close-modal"></use>\n          </svg>\n        </object>\n      </button>\n      <div class="modal-group__img-wrapper">\n        <img\n          class="modal-group__img"\n          src="https://image.tmdb.org/t/p/w500${t.poster_path}"\n          alt="${t.original_title}"\n          width="280"\n        />\n      </div>\n      <div class="modal-group__wrapper">\n        <h2 class="modal-group__title">${t.original_title}</h2>\n        <table class="table">\n          <tbody>\n            <tr>\n              <td class="table__title">Vote / Votes</td>\n              <td class="table__text">\n                <span class="gallery-text__rating table-text-orange">${t.vote_average}</span>\n                /\n                <span class="table-text-grey">${t.vote_count}</span>\n              </td>\n            </tr>\n\n            <tr>\n              <td class="table__title">Popularity</td>\n              <td class="table__text">${t.popularity}</td>\n            </tr>\n            <tr>\n              <td class="table__title">Original Title</td>\n              <td class="table__text">${t.original_title}</td>\n            </tr>\n            <tr>\n              <td class="table__title">Genre</td>\n              <td class="table__text">${t.genre_ids.map((t=>" "+e[t]))}</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h3 class="modal-group__about-title">About</h3>\n        <p class="modal-group__about-text">\n        ${t.overview}\n        </p>\n        <div class="modal-group__btns">\n          <button class="watched-btn" type="submit">add to Watched</button>\n          <button class="queue-btn" type="submit">add to queue</button>\n        </div>\n      </div>\n    </div>`;a.innerHTML=n}(e)}));const s=document.querySelector(".modal-group__close-btn");console.log(s),s.addEventListener("click",(function(t){a.classList.add("is-hidden")}));
//# sourceMappingURL=index.a7704aea.js.map
