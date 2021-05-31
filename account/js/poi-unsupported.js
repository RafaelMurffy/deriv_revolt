/*! For license information please see poi-unsupported.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,(function(e,t,n,r){return(()=>{var o={"./Components/icon-message-content/index.js":(e,t,n)=>{"use strict";n.d(t,{default:()=>m});var r=n("react"),o=n.n(r),s=n("../../../node_modules/prop-types/index.js"),a=n("../../../node_modules/classnames/index.js"),i=n.n(a),c=n("@deriv/components"),p=n("@deriv/shared");function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){var t=e.children,n=e.className,r=e.full_width,s=e.icon,a=e.icon_row,d=e.message,m=e.text;return o().createElement(c.Div100vhContainer,{className:i()("account-management__message-wrapper",{"account-management__message-wrapper-full-width":r}),is_disabled:(0,p.isDesktop)(),height_offset:"110px"},o().createElement("div",{className:i()("account-management__message-content",l({},"".concat(n,"__message-content"),n))},s&&o().createElement("div",{className:i()("account-management__message-icon",l({},"".concat(n,"__message-icon"),n))},s),a&&o().createElement("div",null,a),o().createElement(c.Text,{as:"div",color:"general",weight:"bold",size:"s",align:"center",className:i()("account-management__message",l({},"".concat(n,"__message"),n))},d),m&&o().createElement("div",{className:"account-management__text-container"},o().createElement(c.Text,{className:i()(l({},"".concat(n,"__text"),n)),as:"p",size:"xs",align:"center"},m)),t))};d.propTypes={children:s.PropTypes.oneOfType([s.PropTypes.object,s.PropTypes.array]),className:s.PropTypes.string,full_width:s.PropTypes.bool,icon:s.PropTypes.object,message:s.PropTypes.oneOfType([s.PropTypes.node,s.PropTypes.string,s.PropTypes.object]),text:s.PropTypes.string};const m=d},"../../../node_modules/classnames/index.js":(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===s)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,t,n)=>{"use strict";var r=n("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,s,a){if(a!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return n.PropTypes=n,n}},"../../../node_modules/prop-types/index.js":(e,t,n)=>{e.exports=n("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=n},react:e=>{"use strict";e.exports=r}},s={};function a(e){if(s[e])return s[e].exports;var t=s[e]={exports:{}};return o[e](t,t.exports,a),t.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";a.d(i,{default:()=>p});var e=a("react"),t=a.n(e),n=a("@deriv/translations"),r=a("@deriv/components"),o=a("@deriv/shared"),s=a("./Components/icon-message-content/index.js"),c=function(){var e=t().useContext(o.PlatformContext).is_dashboard;return t().createElement("div",{className:"poi-icon-row"},t().createElement("div",{className:"poi-icon-row__icon-container"},t().createElement(r.Icon,{icon:e?"IcIdentityCardDashboard":"IcIdentityCard",size:90}),t().createElement(r.Text,{color:"prominent",as:"p"},(0,n.localize)("Identity card")),t().createElement(r.Text,{line_height:"xs",color:"less-prominent",as:"p"},(0,n.localize)("Front and back"))),t().createElement("div",{className:"poi-icon-row__icon-container"},t().createElement(r.Icon,{icon:e?"IcDrivingLicenseDashboard":"IcDrivingLicense",size:90}),t().createElement(r.Text,{color:"prominent",as:"p"},(0,n.localize)("Driving license")),t().createElement(r.Text,{line_height:"xs",color:"less-prominent",as:"p"},(0,n.localize)("Front and back"))),t().createElement("div",{className:"poi-icon-row__icon-container"},t().createElement(r.Icon,{icon:e?"IcPassportDashboard":"IcPassport",size:90}),t().createElement(r.Text,{color:"prominent",as:"p"},(0,n.localize)("Passport")),t().createElement(r.Text,{line_height:"xs",color:"less-prominent",as:"p"},(0,n.localize)("Face photo page"))))};const p=function(){var e=t().useContext(o.PlatformContext).is_dashboard;return t().createElement(s.default,{message:(0,n.localize)("Verify your identity"),text:t().createElement(n.Localize,{i18n_default_text:"To continue trading with us, you need to send us a copy of any one of these government-issued photo ID documents via <0>LiveChat</0>.",components:[t().createElement("span",{key:0,className:"link link--orange",onClick:function(){return window.LC_API.open_chat_window()}})]}),className:e&&"dashboard",icon_row:t().createElement(c,null)})}})(),i.default})()}));