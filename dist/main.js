!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);var s=()=>{((e,t="+7 (___) ___-__-__")=>{const i=document.querySelectorAll(e);function s(e){const i=e.keyCode,s=t,n=s.replace(/\D/g,""),o=this.value.replace(/\D/g,"");let l=0,r=s.replace(/[_\d]/g,e=>l<o.length?o.charAt(l++)||n.charAt(l):e);l=r.indexOf("_"),-1!==l&&(r=r.slice(0,l));let d=s.substr(0,this.value.length).replace(/_+/g,e=>"\\d{1,"+e.length+"}").replace(/[+()]/g,"\\$&");d=new RegExp("^"+d+"$"),(!d.test(this.value)||this.value.length<5||i>47&&i<58)&&(this.value=r),"blur"===e.type&&this.value.length<5&&(this.value="")}for(const e of i)e.addEventListener("input",s),e.addEventListener("focus",s),e.addEventListener("blur",s)})('input[name="phone"]');var e;e='input[name="name"]',document.querySelectorAll(e).forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^а-я\s]/gi,"")})});(()=>{const e=document.getElementById("totop");e.style.display="none",document.addEventListener("scroll",()=>{let t=document.documentElement.scrollTop;t>200?e.style.display="block":t<200&&(e.style.display="none")})})()};var n=()=>{document.querySelector(".fixed-gift")&&document.getElementById("gift")&&document.querySelector(".fixed-gift").addEventListener("click",()=>{document.querySelector(".fixed-gift").style.display="none",document.getElementById("gift").style.display="block"})};var o=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t,i=0;const s=()=>{e[i].style.display="none",i++,i>=e.length&&(i=0),((e,t)=>{e[t].style.display="flex"})(e,i)};((e=3e3)=>{t=setInterval(s,e)})()};var l=e=>{const t=document.getElementById(""+e);let i={};t.addEventListener("submit",(async function(e){e.preventDefault();let s=function(){let e=0,t=document.querySelector("._req");(function(e){e.parentElement.classList.remove("_error"),e.classList.remove("_error")})(t),!1===t.checked&&((i=t).parentElement.classList.add("_error"),i.classList.add("_error"),e++);var i;return e}();if(new FormData(t).forEach((e,t)=>{i[t]=e}),0===s){(await fetch("./server.php",{method:"POST",body:JSON.stringify(i)})).ok?t.reset():alert("Ошибка")}else alert("Дайте согласие на обработку")}))};var r=()=>{new class{constructor({main:e,wrap:t,next:i,prev:s,infinity:n=!1,position:o=0,slidersToShow:l=3,responsive:r=[]}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(i),this.prev=document.querySelector(s),this.slidersToShow=l,this.options={position:o,infinity:n,widthSlide:Math.floor(100/l)},this.responsive=r}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next&&this.controlSlider(),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("single-slider"),this.wrap.classList.add("single-slider__wrap");for(const e of this.slides)e.classList.add("single-slider__item");this.prev=document.querySelector(".single-slider__prev"),this.next=document.querySelector(".single-slider__next")}addStyle(){let e=document.getElementById("sliderCarousel-style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n              .single-slider {\n                  overflow: hidden !important;\n              }\n              .single-slider__wrap {\n                  transition: transform 0.5s !important;\n                  will-change: transfrom !important;\n              }\n              .single-slider__item {\n                  align-items: center;\n                  justify-content: center;\n                  flex: 0 0 ${this.options.widthSlide}% !important;\n              }\n          `,document.head.append(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidersToShow),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.slides.length-this.slidersToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidersToShow&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}responseInit(){const e=this.slidersToShow,t=this.responsive.map(e=>e.breakpoint),i=Math.max(...t),s=()=>{const s=document.documentElement.clientWidth;if(s<i)for(let e=0;e<t.length;e++)s<t[e]&&(this.slidersToShow=this.responsive[e].slidersToShow,this.options.widthSlide=Math.floor(100/this.slidersToShow),this.addStyle());else this.slidersToShow=e,this.options.widthSlide=Math.floor(100/this.slidersToShow),this.addStyle()};s(),window.addEventListener("resize",s)}}({main:".services-wrapper",wrap:".services-slider",slidersToShow:5,infinity:!0,responsive:[{breakpoint:1024,slidersToShow:3},{breakpoint:768,slidersToShow:2},{breakpoint:576,slidersToShow:1}]}).init()};var d=()=>{const e=document.querySelector(".gallery-slider"),t=document.querySelector(".gallery-lines"),i=e.querySelectorAll(".slide");let s,n,o=0;(()=>{for(let e=0;e<i.length;e++){let i=document.createElement("li");i.classList.add("line"),t.insertAdjacentElement("beforeend",i),e===o&&i.classList.add("line-active")}s=document.querySelectorAll(".line")})();const l=(e,t,i)=>{e[t].classList.remove(i)},r=(e,t,i)=>{e[t].classList.add(i)},d=()=>{l(i,o,"slide-active"),l(s,o,"line-active"),o++,o>=i.length&&(o=0),r(i,o,"slide-active"),r(s,o,"line-active")},a=(e=2500)=>{n=setInterval(d,e)};a(),e.addEventListener("click",e=>{e.preventDefault();const t=e.target;l(i,o,"slide-active"),l(s,o,"line-active"),t.matches("#arrow-right")?o++:t.matches("#arrow-left")?o--:t.matches(".line")&&s.forEach((e,i)=>{e===t&&(o=i)}),o>=i.length&&(o=0),o<0&&(o=i.length-1),r(i,o,"slide-active"),r(s,o,"line-active")}),e.addEventListener("mouseover",e=>{let t=e.target;(t.matches("#arrow-right")||t.matches("#arrow-left")||t.matches(".line"))&&clearInterval(n)}),e.addEventListener("mouseout",e=>{let t=e.target;(t.matches("#arrow-left")||t.matches("#arrow-right")||t.matches(".line"))&&a()})};var a=()=>{};(()=>{const e=document.getElementById("list-id"),t=document.getElementById("free_visit_form"),i=document.getElementById("callback_form"),s=e=>{"block"===e.style.display?e.style.display="none":e.style.display="block"},n=e=>{document.getElementById(""+e).addEventListener("click",t=>{let i=t.target;(i.matches(".close_icon")||!i.closest(".form-wrapper")||i.matches(".close-btn"))&&(document.getElementById(""+e).style.display="none",document.getElementById(""+e).querySelectorAll("input").forEach(e=>{e.value="",e.checked=!1}))})};n("free_visit_form"),n("callback_form"),document.getElementById("gift")&&n("gift"),n("thanks"),document.addEventListener("click",n=>{let o=n.target;o.closest(".clubs-list")&&s(e),o.closest(".clubs-list")||"block"!==e.style.display||s(e),o.closest(".free-visit")&&s(t),o.matches(".callback-btn")&&!o.matches("#callback-btn__footer")&&s(i)})})(),s(),n(),o(),l("form2"),r(),d(),a()}]);