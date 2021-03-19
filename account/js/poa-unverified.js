/*! For license information please see poa-unverified.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,(function(e,t,r,n){return(()=>{var a={"./Components/icon-message-content/index.js":(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r("react"),a=r.n(n),s=r("../../../node_modules/classnames/index.js"),o=r.n(s),c=r("@deriv/components"),i=r("@deriv/shared");function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l=function(e){var t=e.className,r=e.children,n=e.icon,s=e.icon_row,l=e.message,u=e.text;return a().createElement(c.Div100vhContainer,{className:"account-management__message-wrapper",is_disabled:(0,i.isDesktop)(),height_offset:"110px"},a().createElement("div",{className:o()("account-management__message-content",d({},"".concat(t,"__message-content"),t))},n&&a().createElement("div",{className:o()("account-management__message-icon",d({},"".concat(t,"__message-icon"),t))},n),s&&a().createElement("div",null,s),a().createElement("div",{className:o()("account-management__message",d({},"".concat(t,"__message"),t))},l),u&&a().createElement("div",{className:"account-management__text-container"},a().createElement(c.Text,{className:o()(d({},"".concat(t,"__text"),t)),as:"p",size:"xs",align:"center"},u)),r))}},"../../../node_modules/classnames/index.js":(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===s)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=r},react:e=>{"use strict";e.exports=n}},s={};function o(e){if(s[e])return s[e].exports;var t=s[e]={exports:{}};return a[e](t,t.exports,o),t.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var c={};return(()=>{"use strict";o.d(c,{default:()=>s});var e=o("@deriv/components"),t=o("@deriv/translations"),r=o("react"),n=o.n(r),a=o("./Components/icon-message-content/index.js");const s=function(){return n().createElement(a.default,{message:(0,t.localize)("We could not verify your proof of address"),text:n().createElement(t.Localize,{i18n_default_text:"Please check your email for details."}),icon:n().createElement(e.Icon,{icon:"IcPoaError",size:128})})}})(),c.default})()}));