!function(e){var t={};function o(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=()=>{((e,t="+7 (___) ___-__-__")=>{const o=document.querySelectorAll(e);function n(e){const o=e.keyCode,n=t,s=n.replace(/\D/g,""),i=this.value.replace(/\D/g,"");let r=0,l=n.replace(/[_\d]/g,e=>r<i.length?i.charAt(r++)||s.charAt(r):e);r=l.indexOf("_"),-1!==r&&(l=l.slice(0,r));let c=n.substr(0,this.value.length).replace(/_+/g,e=>"\\d{1,"+e.length+"}").replace(/[+()]/g,"\\$&");c=new RegExp("^"+c+"$"),(!c.test(this.value)||this.value.length<5||o>47&&o<58)&&(this.value=l),"blur"===e.type&&this.value.length<5&&(this.value="")}for(const e of o)e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("blur",n)})('input[name="phone"]');var e;e='input[name="name"]',document.querySelectorAll(e).forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^а-я\s]/gi,"")})});(()=>{const e=document.getElementById("totop");e.style.display="none",document.addEventListener("scroll",()=>{let t=document.documentElement.scrollTop;t>200?e.style.display="block":t<200&&(e.style.display="none")})})()};var s=()=>{document.querySelector(".fixed-gift")&&document.getElementById("gift")&&document.querySelector(".fixed-gift").addEventListener("click",()=>{document.querySelector(".fixed-gift").style.display="none",document.getElementById("gift").style.display="block"})};var i=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t,o=0;const n=()=>{e[o].style.display="none",o++,o>=e.length&&(o=0),((e,t)=>{e[t].style.display="flex"})(e,o)};((e=3e3)=>{t=setInterval(n,e)})()};var r=(e,t)=>{const o=document.getElementById(""+e),n=document.getElementById("thanks"),s=o.querySelector("#footer_leto_mozaika"),i=o.querySelector("#footer_leto_mozaika"),r=(e,t="red")=>{let o=document.createElement("div");return o.style.cssText=`font-size: 1.2rem; color: ${t}; text-align: center`,o.textContent=e,o},l=r("Заполните все поля"),c=r("Выберите клуб"),d=r("Ожидайте несколько секунд","#3afa20"),a=r("Что-то пошло не так, попробуйте ещё раз"),u=e=>{setTimeout((function(){e.remove()}),1500)};let m={};if(o.querySelector(".personal-data")){const e=o.querySelector(".personal-data");e.querySelector('input[type="checkbox"]').classList.add("_req"),e.querySelector("label").classList.add("checkbox__label"),e.querySelector('input[type="checkbox"]').addEventListener("click",()=>{o.querySelector(".personal-data").classList.remove("_error")})}function h(){let e,t=0;var n;return o.querySelector("._req")&&(e=o.querySelector("._req"),(n=e).parentElement.classList.remove("_error"),n.classList.remove("_error"),!1===e.checked&&(!function(e){e.parentElement.classList.add("_error"),e.classList.add("_error")}(e),t++)),s&&i&&(s.checked||i.checked||t++),t}o.addEventListener("submit",(async function(e){e.preventDefault();let r=h();h()||(o.append(d),u(d));if(new FormData(o).forEach((e,t)=>{m[t]=e}),0===r){(await fetch("./server.php",{method:"POST",body:JSON.stringify(m)})).ok?(n.style.display="block",document.getElementById(""+t)&&(document.getElementById(""+t).style.display="none"),o.reset()):(o.append(a),u(a))}else s&&i?s.checked||i.checked||(o.append(c),u(c)):(o.append(l),u(l))}))};var l=()=>{new class{constructor({main:e,wrap:t,next:o,prev:n,infinity:s=!1,position:i=0,slidersToShow:r=3,responsive:l=[]}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(o),this.prev=document.querySelector(n),this.slidersToShow=r,this.options={position:i,infinity:s,widthSlide:Math.floor(100/r)},this.responsive=l}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next&&this.controlSlider(),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("single-slider"),this.wrap.classList.add("single-slider__wrap");for(const e of this.slides)e.classList.add("single-slider__item");this.prev=document.querySelector(".single-slider__prev"),this.next=document.querySelector(".single-slider__next")}addStyle(){let e=document.getElementById("sliderCarousel-style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n              .single-slider {\n                  overflow: hidden !important;\n              }\n              .single-slider__wrap {\n                  transition: transform 0.5s !important;\n                  will-change: transfrom !important;\n              }\n              .single-slider__item {\n                  align-items: center;\n                  justify-content: center;\n                  flex: 0 0 ${this.options.widthSlide}% !important;\n              }\n          `,document.head.append(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidersToShow),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.slides.length-this.slidersToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidersToShow&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}responseInit(){const e=this.slidersToShow,t=this.responsive.map(e=>e.breakpoint),o=Math.max(...t),n=()=>{const n=document.documentElement.clientWidth;if(n<o)for(let e=0;e<t.length;e++)n<t[e]&&(this.slidersToShow=this.responsive[e].slidersToShow,this.options.widthSlide=Math.floor(100/this.slidersToShow),this.addStyle());else this.slidersToShow=e,this.options.widthSlide=Math.floor(100/this.slidersToShow),this.addStyle()};n(),window.addEventListener("resize",n)}}({main:".services-wrapper",wrap:".services-slider",slidersToShow:5,infinity:!0,responsive:[{breakpoint:1024,slidersToShow:3},{breakpoint:768,slidersToShow:2},{breakpoint:576,slidersToShow:1}]}).init()};var c=()=>{const e=document.querySelector(".gallery-slider"),t=document.querySelector(".gallery-lines"),o=e.querySelectorAll(".slide");let n,s,i=0;(()=>{for(let e=0;e<o.length;e++){let o=document.createElement("li");o.classList.add("line"),t.insertAdjacentElement("beforeend",o),e===i&&o.classList.add("line-active")}n=document.querySelectorAll(".line")})();const r=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},c=()=>{r(o,i,"slide-active"),r(n,i,"line-active"),i++,i>=o.length&&(i=0),l(o,i,"slide-active"),l(n,i,"line-active")},d=(e=2500)=>{s=setInterval(c,e)};d(),e.addEventListener("click",e=>{e.preventDefault();const t=e.target;r(o,i,"slide-active"),r(n,i,"line-active"),t.matches("#arrow-right")?i++:t.matches("#arrow-left")?i--:t.matches(".line")&&n.forEach((e,o)=>{e===t&&(i=o)}),i>=o.length&&(i=0),i<0&&(i=o.length-1),l(o,i,"slide-active"),l(n,i,"line-active")}),e.addEventListener("mouseover",e=>{let t=e.target;(t.matches("#arrow-right")||t.matches("#arrow-left")||t.matches(".line"))&&clearInterval(s)}),e.addEventListener("mouseout",e=>{let t=e.target;(t.matches("#arrow-left")||t.matches("#arrow-right")||t.matches(".line"))&&d()})};var d=()=>{if(document.getElementById("price-total")){const e=document.getElementById("card_order"),t=document.querySelector(".time"),o=document.getElementById("card_leto_mozaika"),n=document.getElementById("card_leto_schelkovo"),s=document.getElementById("price-total"),i=t.querySelectorAll('input[type="radio"]'),r=[1999,9900,13900,19900],l=[2999,14900,21900,24900],c={};let d=0;const a=()=>{o.checked?i.forEach((e,t)=>{c[e.value]=r[t]}):n.checked&&i.forEach((e,t)=>{c[e.value]=l[t]})};a();const u=()=>{i.forEach(e=>{if(e.checked)for(let t in c)t==e.value&&(d=c[t],s.textContent=d)})};u();const m=()=>{"ТЕЛО2020"===e.querySelector("#promocode").value?(d=Math.ceil(.7*d),s.textContent=d,e.querySelector("#promocode").style.border="3px solid green",e.querySelector("#promocode").disabled=!0):e.querySelector("#promocode").value&&(e.querySelector("#promocode").style.border="3px solid red")};e.addEventListener("change",e=>{let t=e.target;t.matches('input[type="radio"]')&&(a(),u(),m()),t.matches("#promocode")&&m()})}};var a=()=>{const e=document.querySelector(".top-menu"),t=document.querySelector(".popup-menu");window.addEventListener("scroll",()=>{let t=document.documentElement.scrollWidth,o=document.documentElement.scrollTop;t<769&&o>150?e.style.position="fixed":e.removeAttribute("style")});t.addEventListener("click",e=>{let o=e.target;o.matches("#close-menu-id")&&(t.style.display="none"),o.closest(".scroll>a")&&(console.log(o),t.style.display="none")})};(()=>{const e=document.getElementById("list-id"),t=document.getElementById("free_visit_form"),o=document.querySelector(".popup-menu"),n=document.getElementById("callback_form"),s=(e,t="block")=>{e.style.display===""+t?e.style.display="none":e.style.display=""+t},i=e=>{document.getElementById(""+e).addEventListener("click",t=>{let o=t.target;(o.matches(".close_icon")||!o.closest(".form-wrapper")||o.matches(".close-btn"))&&(document.getElementById(""+e).style.display="none",document.getElementById(""+e).querySelectorAll("input").forEach(t=>{t.value="",t.checked=!1,document.getElementById(""+e).querySelector(".personal-data").classList.remove("_error")}))})};i("free_visit_form"),i("callback_form"),document.getElementById("gift")&&i("gift"),i("thanks"),document.addEventListener("click",i=>{let r=i.target;r.closest(".clubs-list")&&s(e),r.closest(".clubs-list")||"block"!==e.style.display||s(e),r.closest(".free-visit")&&s(t),r.matches(".callback-btn")&&!r.matches("#callback-btn__footer")&&s(n),r.matches("#menu-button-id")&&s(o,"flex")})})(),n(),s(),i(),r("form2","free_visit_form"),r("form1","callback_form"),r("banner-form"),r("card_order"),r("footer_form"),l(),c(),d(),a()}]);