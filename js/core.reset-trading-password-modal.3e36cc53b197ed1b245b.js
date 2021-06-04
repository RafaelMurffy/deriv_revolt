(self.webpackChunk=self.webpackChunk||[]).push([[864],{27305:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>v});var a=t(32735),s=t(60216),n=t.n(s),o=t(40841),i=t.n(o),l=t(44066),d=t(77395),c=t(57573),u=t(20374),p=t(75672),m=t(58468);function _(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],a=!0,s=!1,n=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(t.push(o.value),!r||t.length!==r);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(s)throw n}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return g(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function w(e,r,t,a,s,n,o){try{var i=e[n](o),l=i.value}catch(e){return void t(e)}i.done?r(l):Promise.resolve(l).then(a,s)}var f=function(e){var r=e.setDialogTitleFunc,t=e.toggleResetTradingPasswordModal,s=e.verification_code,n=e.is_dxtrade_allowed;return a.createElement("div",{className:"reset-trading-password"},a.createElement(l.Formik,{initialValues:{password:""},initialStatus:{reset_complete:!1,error_msg:"",error_code:""},validate:function(e){var r={};return(0,c.validLength)(e.password,{min:8,max:25})?(0,c.validPassword)(e.password)||(r.password=(0,c.getErrorMessages)().password()):r.password=(0,u.localize)("You should enter {{min_number}}-{{max_number}} characters.",{min_number:8,max_number:25}),r},onSubmit:function(e,t){t.setSubmitting(!0);var a={new_password:e.password,verification_code:s};m.WS.tradingPlatformPasswordReset(a).then(function(){var e,a=(e=regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.error?(console.error(a.error.message),t.setStatus({error_msg:a.error.message,error_code:a.error.code}),r(!0)):(t.resetForm({password:""}),t.setStatus({reset_complete:!0})),t.setSubmitting(!1);case 2:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(a,s){var n=e.apply(r,t);function o(e){w(n,a,s,o,i,"next",e)}function i(e){w(n,a,s,o,i,"throw",e)}o(void 0)}))});return function(e){return a.apply(this,arguments)}}())}},(function(e){var r=e.handleBlur,s=e.errors,o=e.values,p=e.touched,m=e.isSubmitting,_=e.handleChange,g=e.status;return a.createElement(l.Form,null,a.createElement(a.Fragment,null,g.error_msg&&a.createElement("div",{className:"reset-trading-password__error"},a.createElement(d.Icon,{icon:"IcMt5Expired",size:128}),a.createElement(d.Text,{as:"p",size:"xs",weight:"bold",align:"center",className:"reset-trading-password__lead"},g.error_msg),"InvalidToken"===g.error_code&&a.createElement(d.Text,{as:"p",color:"prominent",size:"xs",align:"center",className:"reset-trading-password__description--is-centered"},a.createElement(u.Localize,{i18n_default_text:"Please request a new password and check your email for the new token."})),a.createElement(d.Button,{className:"reset-trading-password__confirm-button",primary:!0,large:!0,onClick:function(){return t(!1)}},a.createElement(u.Localize,{i18n_default_text:"Ok"}))),g.reset_complete&&a.createElement("div",{className:"reset-trading-password__password-success"},a.createElement(d.Icon,{className:"reset-trading-password__icon",icon:"IcSuccessResetTradingPassword",size:128}),a.createElement(d.Text,{as:"p",weight:"bold",className:"reset-trading-password__heading"},a.createElement(u.Localize,{i18n_default_text:"Success"})),a.createElement(d.Text,{align:"center",as:"p",size:"xs",className:"reset-trading-password__subtext"},n?(0,u.localize)("You have a new trading password. Use this to log in to DMT5 and Deriv X."):(0,u.localize)("You have a new trading password. Use this to log in to DMT5.")),a.createElement(d.Button,{type:"button",onClick:function(){return t(!1)},primary:!0,large:!0},a.createElement(u.Localize,{i18n_default_text:"Done"}))),!g.error_msg&&!g.reset_complete&&a.createElement("div",{className:"reset-trading-password__set-password"},a.createElement(d.Text,{as:"p",weight:"bold",className:"reset-trading-password__heading"},a.createElement(u.Localize,{i18n_default_text:"Set new trading password"})),a.createElement("fieldset",{className:"reset-trading-password__input-field"},a.createElement(d.PasswordMeter,{input:o.password,has_error:!(!p.password||!s.password),custom_feedback_messages:(0,c.getErrorMessages)().password_warnings},a.createElement(d.PasswordInput,{autoComplete:"new-password",className:"reset-trading-password__password-field",name:"password",label:(0,u.localize)("Trading password"),onChange:_,onBlur:r,error:p.password&&s.password,value:o.password,"data-lpignore":"true",required:!0}))),a.createElement(d.Text,{as:"p",size:"xs",className:"reset-trading-password__hint"},g.error_msg?a.createElement(u.Localize,{i18n_default_text:"{{error_msg}}",values:{error_msg:g.error_msg}}):a.createElement(u.Localize,{i18n_default_text:"Strong passwords contain at least 8 characters, combine uppercase and lowercase letters, numbers, and symbols."})),a.createElement(d.Button,{className:i()("reset-trading-password__btn",{"reset-trading-password__btn--disabled":!o.password||s.password||m}),type:"submit",is_disabled:!o.password||!!s.password||m,primary:!0,large:!0},a.createElement(u.Localize,{i18n_default_text:"Confirm"})))))})))};f.propTypes={is_dxtrade_allowed:n().bool,setDialogTitleFunc:n().func,toggleResetTradingPasswordModal:n().func,verification_code:n().string};var b=function(e){var r=e.disableApp,t=e.enableApp,s=e.is_loading,n=e.is_visible,o=e.toggleResetTradingPasswordModal,i=e.verification_code,l=e.is_dxtrade_allowed,c=_(a.useState(""),2),p=c[0],m=c[1];return a.createElement(d.Dialog,{className:"reset-trading-password__dialog",disableApp:r,enableApp:t,has_close_icon:!!p,is_loading:s,is_visible:n,onConfirm:function(){return o(!1)},title:p},a.createElement(f,{toggleResetTradingPasswordModal:o,verification_code:i,setDialogTitleFunc:function(e){m(e?(0,u.localize)("Reset trading password"):"")},is_dxtrade_allowed:l}))};b.propTypes={disableApp:n().func,enableApp:n().func,is_loading:n().bool,is_visible:n().bool,is_dxtrade_allowed:n().bool,toggleResetTradingPasswordModal:n().func,verification_code:n().string};const v=(0,p.$j)((function(e){var r=e.ui,t=e.client;return{disableApp:r.disableApp,enableApp:r.enableApp,is_loading:r.is_loading,is_visible:r.is_reset_trading_password_modal_visible,toggleResetTradingPasswordModal:r.setResetTradingPasswordModalOpen,verification_code:t.verification_code.trading_platform_password_reset,is_dxtrade_allowed:t.is_dxtrade_allowed}}))(b)}}]);