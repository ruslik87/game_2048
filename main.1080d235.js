parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,n){return a(e)||o(e,n)||r(e,n)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}function a(e){if(Array.isArray(e))return e}var i,c,s,l,u=document.querySelector(".game-field"),f=document.querySelectorAll(".field-row"),d=document.querySelector("button"),h=document.querySelector(".game-score"),v=document.querySelector(".game-high-score"),g=document.querySelector(".message-win"),m=document.querySelector(".message-start"),y=document.querySelector(".message-lose"),S="highScore",b="gameState",p=localStorage.getItem(S),T=localStorage.getItem(b),w={0:[0,0,0,0],1:[0,0,0,0],2:[0,0,0,0],3:[0,0,0,0]};if(p&&(v.innerText=p),T){var x=JSON.parse(T),L=e(x,2),A=L[0],k=L[1];w=A,h.innerText=k,M(),O()}function q(e){J(e),R(),N(),E()}function E(){var e=+h.innerText,t=+v.innerText,r=[w,e];e>t&&(v.innerText=h.innerText,localStorage.setItem(S,e)),localStorage.setItem(b,JSON.stringify(r))}function I(){for(var e in w)for(var t=0;t<w[e].length;t++)w[e][t]=0;g.hidden=!0,y.hidden=!0,h.innerText=0,O()}function M(){d.classList="button restart",d.innerText="Restart",m.hidden=!0}function O(){var e=function(e){w[e].forEach(function(t,r){var n=f[e].children[r];t>0?(n.innerText=t,n.classList="field-cell",n.classList.add("field-cell--".concat(t))):(n.innerText="",n.classList="field-cell")})};for(var t in w)e(t)}function j(e){return e.filter(function(e){return 0!==e})}function D(e){h.innerText=+h.innerText+e}function J(e){var t=function(t){for(var r=w[t],n=[],o=void 0,a=function(a){switch(e){case"left":a?o=j(r):w[t]=o;break;case"right":a?o=j(r).reverse():w[t]=o.reverse();break;case"up":if(a)o=j(n);else for(var i=0;i<w[t].length;i++)w[i][t]=o[i];break;case"down":if(a)o=j(n).reverse();else{o=o.reverse();for(var c=0;c<w[t].length;c++)w[c][t]=o[c]}}},i=0;i<w[t].length;i++)n.push(w[i][t]);a(!0);for(var c=0;c<o.length-1;c++)o[c]===o[c+1]&&(D(o[c]),o[c]*=2,o[c+1]=0);for(o=j(o);o.length<4;)o.push(0);a(!1)};for(var r in w)t(r)}function N(){var e=0;for(var t in w)w[t].forEach(function(t){0===t&&e++});var r=Math.ceil(10*Math.random()),n=Math.floor(Math.random()*e),o=0;for(var a in w)for(var i=0;i<w[a].length;i++)0===w[a][i]&&(o===n&&(w[a][i]=1===r?4:2),o++);O()}function R(){for(var e in w)w[e].includes(2048)&&(g.hidden=!1);var t=!0;for(var r in w){w[r].includes(0)&&(t=!1);for(var n=0;n<w[r].length-1;n++){var o=w[r][n],a=w[r][n+1],i=w[n][r],c=w[n+1][r];o!==a&&i!==c||(t=!1)}}t&&(y.hidden=!1)}d.addEventListener("click",function(e){e.target.classList.contains("start")?M():I(),N(),N(),E()}),u.addEventListener("touchstart",function(e){e.preventDefault(),i=e.changedTouches[0].clientX,c=e.changedTouches[0].clientY}),u.addEventListener("touchend",function(e){if(d.classList.contains("restart")){s=e.changedTouches[0].clientX,l=e.changedTouches[0].clientY;var t=i-s,r=c-l;return t>50&&t>r?q("left"):t<-50&&t<r?q("right"):r>50?q("up"):r<-50?q("down"):void 0}}),document.addEventListener("keyup",function(e){if(d.classList.contains("restart"))switch(e.key){case"ArrowLeft":q("left");break;case"ArrowRight":q("right");break;case"ArrowUp":q("up");break;case"ArrowDown":q("down")}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.1080d235.js.map