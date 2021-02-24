/*! For license information please see poa-unverified.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,(function(e,t,r,n){return(()=>{var a={"./Components/icon-message-content/index.js":(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var n=r("react"),a=r.n(n),s=r("../../../node_modules/classnames/index.js"),o=r.n(s),i=r("@deriv/components"),c=r("@deriv/shared");function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=function(e){var t=e.className,r=e.children,n=e.icon,s=e.icon_row,u=e.message,l=e.text;return a().createElement(i.Div100vhContainer,{className:"account-management__message-wrapper",is_disabled:(0,c.isDesktop)(),height_offset:"110px"},a().createElement("div",{className:o()("account-management__message-content",d({},"".concat(t,"__message-content"),t))},n&&a().createElement("div",{className:o()("account-management__message-icon",d({},"".concat(t,"__message-icon"),t))},n),s&&a().createElement("div",null,s),a().createElement("div",{className:o()("account-management__message",d({},"".concat(t,"__message"),t))},u),l&&a().createElement("div",{className:"account-management__text-container"},a().createElement(i.Text,{className:o()(d({},"".concat(t,"__text"),t)),as:"p",size:"xs",align:"center"},l)),r))}},"./Components/poa-unverified/index.js":(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var n=r("@deriv/components"),a=r("@deriv/translations"),s=r("react"),o=r.n(s),i=r("./Components/icon-message-content/index.js");const c=function(){return o().createElement(i.default,{message:(0,a.localize)("We could not verify your proof of address"),text:o().createElement(a.Localize,{i18n_default_text:"Please check your email for details."}),icon:o().createElement(n.Icon,{icon:"IcPoaError",size:128})})}},"../../../node_modules/classnames/index.js":(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===s)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=r},react:e=>{"use strict";e.exports=n}},s={};function o(e){if(s[e])return s[e].exports;var t=s[e]={exports:{}};return a[e](t,t.exports,o),t.exports}return o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o("./Components/poa-unverified/index.js")})().default}));