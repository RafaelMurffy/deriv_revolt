/*! For license information please see load-error-message.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e.react)}(self,(function(e,t,r){return(()=>{var n={"./Components/icon-message-content/index.js":(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var n=r("react"),a=r.n(n),s=r("../../../node_modules/classnames/index.js"),o=r.n(s),c=r("@deriv/components"),i=r("@deriv/shared");function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const d=function(e){var t=e.className,r=e.children,n=e.icon,s=e.icon_row,d=e.message,m=e.text;return a().createElement(c.Div100vhContainer,{className:"account-management__message-wrapper",is_disabled:(0,i.isDesktop)(),height_offset:"110px"},a().createElement("div",{className:o()("account-management__message-content",u({},"".concat(t,"__message-content"),t))},n&&a().createElement("div",{className:o()("account-management__message-icon",u({},"".concat(t,"__message-icon"),t))},n),s&&a().createElement("div",null,s),a().createElement("div",{className:o()("account-management__message",u({},"".concat(t,"__message"),t))},d),m&&a().createElement("div",{className:"account-management__text-container"},a().createElement(c.Text,{className:o()(u({},"".concat(t,"__text"),t)),as:"p",size:"xs",align:"center"},m)),r))}},"../../../node_modules/classnames/index.js":(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===s)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},react:e=>{"use strict";e.exports=r}},a={};function s(e){if(a[e])return a[e].exports;var t=a[e]={exports:{}};return n[e](t,t.exports,s),t.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};return(()=>{"use strict";s.d(o,{default:()=>a});var e=s("react"),t=s.n(e),r=s("@deriv/components"),n=s("./Components/icon-message-content/index.js");const a=function(e){var a=e.error_message;return t().createElement(n.default,{message:a,icon:t().createElement(r.Icon,{icon:"IcPoaLock",size:128})})}})(),o.default})()}));