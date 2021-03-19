!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/shared"),require("@deriv/translations")):"function"==typeof define&&define.amd?define(["@deriv/shared","@deriv/translations"],r):"object"==typeof exports?exports["@deriv/account"]=r(require("@deriv/shared"),require("@deriv/translations")):e["@deriv/account"]=r(e["@deriv/shared"],e["@deriv/translations"])}(self,(function(e,r){return(()=>{"use strict";var t={"@deriv/shared":r=>{r.exports=e},"@deriv/translations":e=>{e.exports=r}},a={};function s(e){if(a[e])return a[e].exports;var r=a[e]={exports:{}};return t[e](r,r.exports,s),r.exports}s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var i={};return(()=>{s.d(i,{default:()=>d});var e=s("@deriv/translations"),r=s("@deriv/shared"),t=function(t){var a,s,i,o,d,l=t.account_settings,n=t.is_svg;return l?{address_line_1:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(a=l.address_line_1)&&void 0!==a?a:"",rules:[["req",(0,e.localize)("First line of address is required")],["address",(0,e.localize)("Address is not in a proper format")],["length",(0,e.localize)("This should not exceed {{max}} characters.",{max:70}),{max:70}],["po_box",(0,r.getErrorMessages)().po_box()]].filter((function(e){return n?0!==e.indexOf("po_box"):e}))},address_line_2:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(s=l.address_line_2)&&void 0!==s?s:"",rules:[["address",(0,e.localize)("Address is not in a proper format")],["length",(0,e.localize)("This should not exceed {{max}} characters.",{max:70}),{max:70}],["po_box",(0,r.getErrorMessages)().po_box()]].filter((function(e){return n?0!==e.indexOf("po_box"):e}))},address_city:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(i=l.address_city)&&void 0!==i?i:"",rules:[["req",(0,e.localize)("City is required")],["regular",(0,e.localize)("City field is not in a proper format"),{regex:/^[A-Za-z0-9\s'.-]{1,35}$/}]]},address_state:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(o=l.address_state)&&void 0!==o?o:"",rules:[["req",(0,e.localize)("State is required")],["regular",(0,e.localize)("State is not in a proper format"),{regex:/^[\w\s\W'.-;,]{0,60}$/}]]},address_postcode:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(d=l.address_postcode)&&void 0!==d?d:"",rules:[["length",(0,e.localize)("Please enter a {{field_name}} under {{max_number}} characters.",{field_name:(0,e.localize)("postal/ZIP code"),max_number:20,interpolation:{escapeValue:!1}}),{min:0,max:20}],["postcode",(0,r.getErrorMessages)().postcode()]]}}:{}},a=function(r,t){return"im"===t&&r.address_state.rules.shift(),/^(im|gb)$/.test(t)&&r.address_postcode.rules.splice(0,0,["req",(0,e.localize)("Postal/ZIP code is required")]),r},o=function(e,r){var t=r.real_account_signup_target;return t&&"svg"!==t||e.address_state.rules.shift(),e};const d=function(s,i){var d=s.upgrade_info,l=s.real_account_signup_target,n=s.residence,u=s.account_settings,c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],p="svg"===(null==d?void 0:d.can_upgrade_to),_=t({account_settings:u,is_svg:p});return{header:{active_title:c?(0,e.localize)("Where do you live?"):(0,e.localize)("Complete your address details"),title:c?(0,e.localize)("ADDRESS"):(0,e.localize)("Address")},body:i,form_value:(0,r.getDefaultFields)(l,_),props:{validate:(0,r.generateValidationFunction)(l,o(a(_,n),l)),is_svg:p},passthrough:["residence_list","is_fully_authenticated"],icon:"IcDashboardAddress"}}})(),i.default})()}));