!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequired7c6=a),a.register("iE7OH",(function(e,n){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var a={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)a[e[n]]=t[e[n]]},o=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var o={};function a(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return a(t[2])}return"/"}(),o[t]=e),e}})),a("iE7OH").register(JSON.parse('{"dxLsE":"index.a0af6d77.js","kxKJ3":"symbol-defs.ce986458.svg","4DP8a":"library.7f2349f4.js"}')),a("2PzaW"),a("5GYIm");var i,s=a("iU1Pc");i=a("aNJCr").getBundleURL("dxLsE")+a("iE7OH").resolve("kxKJ3"),e(s).Notify.init({width:"300px",position:"top-left",closeButton:!1,cssAnimationStyle:"from-right",timeout:1200,success:{background:"#50c184"},info:{background:"#FF6B08"}});var c,l,u=document.querySelector(".gallery"),d=document.querySelector(".backdrop"),g=[],f=[];function p(t){27===t.keyCode&&d.classList.add("is-hidden")}function m(t){t.target===d&&d.classList.add("is-hidden")}localStorage.getItem("watched")&&(f=JSON.parse(localStorage.getItem("watched"))),localStorage.getItem("queue")&&(g=JSON.parse(localStorage.getItem("queue"))),u.addEventListener("click",(function(t){var n;if(!t.target.closest("li"))return;var r=JSON.parse(localStorage.getItem("response"));d.classList.remove("is-hidden");var o=t.target.closest("li").id;n=r.find((function(t){return String(t.id)===o})),c=n,function(t){l=t,document.addEventListener("click",m),document.addEventListener("keydown",p);var n=JSON.parse(localStorage.getItem("genres")),r="https://image.tmdb.org/t/p/w500",o='\n    <div class="modal-group">\n      <button data-modal-close class="modal-group__close-btn">\n      <object class="modal-group__close-object">\n          <svg class="modal-group__close-icon" width="28" height="28">\n            <use href="'.concat(e(i),'#icon-close-modal"></use>\n          </svg>\n        </object>\n      </button>\n      <div class="modal-group__img-wrapper">\n        <img\n          class="modal-group__img"\n          src="').concat(t.poster_path?r+t.poster_path:"https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg",'"\n          alt="').concat(t.original_title,'"\n          \n        />\n      </div>\n      <div class="modal-group__wrapper">\n        <h2 class="modal-group__title">').concat(t.original_title,'</h2>\n        <table class="table">\n          <tbody>\n            <tr>\n              <td class="table__title">Vote / Votes</td>\n              <td class="table__text">\n                <span class="gallery-text__rating table-text-orange">').concat(t.vote_average,'</span>\n                /\n                <span class="table-text-grey">').concat(t.vote_count,'</span>\n              </td>\n            </tr>\n\n            <tr>\n              <td class="table__title">Popularity</td>\n              <td class="table__text">').concat(t.popularity,'</td>\n            </tr>\n            <tr>\n              <td class="table__title">Original Title</td>\n              <td class="table__text">').concat(t.original_title,'</td>\n            </tr>\n            <tr>\n              <td class="table__title">Genre</td>\n              <td class="table__text">').concat(t.genre_ids.length>0?t.genre_ids.map((function(t){return" "+n[t]})):"No genres found",'</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h3 class="modal-group__about-title">About</h3>\n        <p class="modal-group__about-text">\n        ').concat(t.overview,'\n        </p>\n        <div class="modal-group__btns">\n          <button class="watched-btn" type="submit">ADD TO WATCHED</button>\n          <button class="queue-btn" type="submit">ADD TO QUEUE</button>\n        </div>\n      </div>\n    </div>');d.innerHTML=o,document.querySelector(".modal-group__close-btn").addEventListener("click",(function(){d.classList.add("is-hidden"),document.removeEventListener("click",m),document.removeEventListener("keydown",p)}));var a=document.querySelector(".watched-btn"),u=document.querySelector(".queue-btn");a.addEventListener("click",O),u.addEventListener("click",S);var v=JSON.parse(localStorage.getItem("watched"));if(v){var _=v.some((function(t){return t.id===l.id}));a.textContent=_?"REMOVE FROM WATCHED":"ADD TO WATCHED"}var b=JSON.parse(localStorage.getItem("queue"));if(b){var E=b.some((function(t){return t.id===l.id}));u.textContent=E?"REMOVE FROM QUEUE":"ADD TO QUEUE"}function h(){return"ADD TO WATCHED"===a.textContent?(e(s).Notify.success("Film was added to your library"),a.textContent="REMOVE FROM WATCHED","ADD"):(a.textContent="ADD TO WATCHED",e(s).Notify.info("Film was removed from your library"),"REMOVE")}function y(){return"ADD TO QUEUE"===u.textContent?(e(s).Notify.success("Film was added to your queue"),u.textContent="REMOVE FROM QUEUE","ADD"):(u.textContent="ADD TO QUEUE",e(s).Notify.info("Film was removed from your queue"),"REMOVE")}function O(){if("REMOVE"===h()){var t=JSON.parse(localStorage.getItem("watched")).filter((function(t){return t.id!==l.id}));localStorage.setItem("watched",JSON.stringify(t))}else{var e=f.filter((function(t){return t.id!==c.id}));(f=e).push(c),localStorage.setItem("watched",JSON.stringify(f))}}function S(){if("REMOVE"===y()){var t=JSON.parse(localStorage.getItem("queue")).filter((function(t){return t.id!==l.id}));localStorage.setItem("queue",JSON.stringify(t))}else{var e=g.filter((function(t){return t.id!==c.id}));(g=e).push(c),localStorage.setItem("queue",JSON.stringify(g))}}}(n)}))}();
//# sourceMappingURL=index.a0af6d77.js.map