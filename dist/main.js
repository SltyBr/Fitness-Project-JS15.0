!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{((e,t="+7 (___) ___-__-__")=>{const n=document.querySelectorAll(e);function r(e){const n=e.keyCode,r=t,l=r.replace(/\D/g,""),o=this.value.replace(/\D/g,"");let c=0,s=r.replace(/[_\d]/g,e=>c<o.length?o.charAt(c++)||l.charAt(c):e);c=s.indexOf("_"),-1!==c&&(s=s.slice(0,c));let a=r.substr(0,this.value.length).replace(/_+/g,e=>"\\d{1,"+e.length+"}").replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"===e.type&&this.value.length<5&&(this.value="")}for(const e of n)e.addEventListener("input",r),e.addEventListener("focus",r),e.addEventListener("blur",r)})('input[name="phone"]');var e;e='input[name="name"]',document.querySelectorAll(e).forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^а-я\s]/gi,"")})})};var l=()=>{};var o=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t,n=0;const r=()=>{e[n].style.display="none",n++,n>=e.length&&(n=0),((e,t)=>{e[t].style.display="flex"})(e,n)};((e=5e3)=>{t=setInterval(r,e)})()};var c=()=>{document.querySelectorAll("form").forEach(e=>{e.addEventListener("submit",n=>{n.preventDefault();let r={};new FormData(e).forEach((e,t)=>{r[t]=e}),t(r).then(e=>{if(200!==e.status)throw new Error("status network not 200.")}).catch(e=>{console.error(e)})});const t=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})};(()=>{const e=document.getElementById("list-id"),t=document.getElementById("free_visit_form"),n=document.getElementById("callback_form"),r=e=>{"block"===e.style.display?e.style.display="none":e.style.display="block"};document.addEventListener("click",l=>{let o=l.target;o.closest(".clubs-list")&&r(e),o.closest(".clubs-list")||"block"!==e.style.display||r(e),o.closest(".free-visit")&&r(t),o.matches(".callback-btn")&&!o.matches("#callback-btn__footer")&&r(n)})})(),r(),l(),o(),c()}]);