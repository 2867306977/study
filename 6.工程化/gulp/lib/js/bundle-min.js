!function n(o,u,f){function i(r,e){if(!u[r]){if(!o[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(c)return c(r,!0);throw new Error("Cannot find module '"+r+"'")}t=u[r]={exports:{}};o[r][0].call(t.exports,function(e){var t=o[r][1][e];return i(t||e)},t,t.exports,n,o,u,f)}return u[r].exports}for(var c="function"==typeof require&&require,e=0;e<f.length;e++)i(f[e]);return i}({1:[function(e,t,r){"use strict";function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!=typeof e)return{default:e};t=i(t);if(t&&t.has(e))return t.get(e);var r,n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(r in e){var u;"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&((u=o?Object.getOwnPropertyDescriptor(e,r):null)&&(u.get||u.set)?Object.defineProperty(n,r,u):n[r]=e[r])}n.default=e,t&&t.set(e,n);return n}(e("./module1"));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}console.log(e.default),(0,e.fn)()},{"./module1":2}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.fn=function(){console.log(1)},r.default=void 0;r.default=2},{}]},{},[1]);