parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var t=document.querySelector("#start"),e=document.querySelector("#game"),n=document.querySelector("#game-time"),r=document.querySelector("#time"),o=document.querySelector("#time-header"),c=document.querySelector("#result-header"),a=document.querySelector("#result"),i=!1,u=0;function l(){i=!0,u=0,v(),b(t),n.setAttribute("disabled","true"),e.style.backgroundColor="rgba(255, 255, 255, 0.7)";var o=setInterval(function(){var t=parseFloat(r.textContent);t<=0?(clearInterval(o),d()):r.textContent=(t-.1).toFixed(1)},100);s()}function d(){i=!1,g(a),e.innerHTML="",n.removeAttribute("disabled"),b(o),f(c),f(t),e.style.backgroundColor="#999"}function s(){e.innerHTML="";var t=document.createElement("div"),n=m(30,100),r=e.getBoundingClientRect(),o=r.height-n,c=r.width-n;t.style.height=t.style.width="".concat(n,"px"),t.style.position="absolute",t.style.backgroundColor=y(),t.style.top="".concat(m(0,o),"px"),t.style.left="".concat(m(0,c),"px"),t.style.cursor="pointer",t.setAttribute("data-block","true"),e.insertAdjacentElement("afterbegin",t)}function m(t,e){return Math.floor(Math.random()*(e-t)+t)}function y(){return"rgb(".concat(m(0,255),", ").concat(m(0,255),", ").concat(m(0,255),")")}function f(t){t.classList.remove("hide")}function b(t){t.classList.add("hide")}function g(t){t.textContent=u.toString()}function v(){var t=parseInt(n.value);r.textContent=t.toFixed(1),f(o),b(c)}function h(t){if(!i)return!1;t.target.dataset.block&&(u++,s())}e.addEventListener("click",h),n.addEventListener("input",v),t.addEventListener("click",l);
},{}]},{},["Focm"], null)