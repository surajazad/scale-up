(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{GgTj:function(e,t,n){"use strict";var r,o=n("1OyB"),a=n("vuIU"),i=n("Ji7U"),l=n("md7G"),c=n("foSv"),u=n("q1tI"),d=n.n(u);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?y(e):t}function w(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(r||(r={}));var A=r,O=function e(t){var n=this,r=t.expanded,o=void 0===r?[]:r,a=t.allowMultipleExpanded,i=void 0!==a&&a,l=t.allowZeroExpanded,c=void 0!==l&&l;s(this,e),m(this,"expanded",void 0),m(this,"allowMultipleExpanded",void 0),m(this,"allowZeroExpanded",void 0),m(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(w(n.expanded),[e]):[e]})})),m(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),m(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),m(this,"getPanelAttributes",(function(e){var t=n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!t:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!t||void 0}})),m(this,"getHeadingAttributes",(function(e){return{role:"heading"}})),m(this,"getButtonAttributes",(function(e){var t=n.isItemExpanded(e),r=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":r,"aria-expanded":t,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),m(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),m(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),m(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=o,this.allowMultipleExpanded=i,this.allowZeroExpanded=c},I=Object(u.createContext)(null),j=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return m(y(n=x(this,(e=v(t)).call.apply(e,[this].concat(o)))),"state",new O({expanded:n.props.preExpanded,allowMultipleExpanded:n.props.allowMultipleExpanded,allowZeroExpanded:n.props.allowZeroExpanded})),m(y(n),"toggleExpanded",(function(e){n.setState((function(t){return t.toggleExpanded(e)}),(function(){n.props.onChange&&n.props.onChange(n.state.expanded)}))})),m(y(n),"isItemDisabled",(function(e){return n.state.isItemDisabled(e)})),m(y(n),"isItemExpanded",(function(e){return n.state.isItemExpanded(e)})),m(y(n),"getPanelAttributes",(function(e){return n.state.getPanelAttributes(e)})),m(y(n),"getHeadingAttributes",(function(e){return n.state.getHeadingAttributes(e)})),m(y(n),"getButtonAttributes",(function(e){return n.state.getButtonAttributes(e)})),n}return g(t,e),f(t,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return Object(u.createElement)(I.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),t}(u.PureComponent);m(j,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var P=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return m(y(n=x(this,(e=v(t)).call.apply(e,[this].concat(o)))),"renderChildren",(function(e){return e?n.props.children(e):null})),n}return g(t,e),f(t,[{key:"render",value:function(){return Object(u.createElement)(I.Consumer,null,this.renderChildren)}}]),t}(u.PureComponent),C=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return m(y(n=x(this,(e=v(t)).call.apply(e,[this].concat(o)))),"renderAccordion",(function(e){var t=n.props,r=(t.preExpanded,t.allowMultipleExpanded,t.allowZeroExpanded,t.onChange,E(t,["preExpanded","allowMultipleExpanded","allowZeroExpanded","onChange"]));return Object(u.createElement)("div",h({"data-accordion-component":"Accordion"},r))})),n}return g(t,e),f(t,[{key:"render",value:function(){return Object(u.createElement)(j,{preExpanded:this.props.preExpanded,allowMultipleExpanded:this.props.allowMultipleExpanded,allowZeroExpanded:this.props.allowZeroExpanded,onChange:this.props.onChange},Object(u.createElement)(P,null,this.renderAccordion))}}]),t}(u.Component);m(C,"defaultProps",{allowMultipleExpanded:void 0,allowZeroExpanded:void 0,onChange:void 0,className:"accordion",children:void 0}),m(C,"displayName",A.Accordion);var _=0;function k(){var e=_;return _+=1,e}var D=Object(u.createContext)(null),N=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return m(y(n=x(this,(e=v(t)).call.apply(e,[this].concat(o)))),"toggleExpanded",(function(){n.props.accordionContext.toggleExpanded(n.props.uuid)})),m(y(n),"renderChildren",(function(e){var t=n.props.uuid,r=e.isItemExpanded(t),o=e.isItemDisabled(t),a=e.getPanelAttributes(t),i=e.getHeadingAttributes(t),l=e.getButtonAttributes(t);return Object(u.createElement)(D.Provider,{value:{uuid:t,expanded:r,disabled:o,toggleExpanded:n.toggleExpanded,panelAttributes:a,headingAttributes:i,buttonAttributes:l},children:n.props.children})})),n}return g(t,e),f(t,[{key:"render",value:function(){return Object(u.createElement)(P,null,this.renderChildren)}}]),t}(u.Component),M=function(e){return Object(u.createElement)(P,null,(function(t){return Object(u.createElement)(N,h({},e,{accordionContext:t}))}))},B=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return m(y(n=x(this,(e=v(t)).call.apply(e,[this].concat(o)))),"renderChildren",(function(e){return e?n.props.children(e):null})),n}return g(t,e),f(t,[{key:"render",value:function(){return Object(u.createElement)(D.Consumer,null,this.renderChildren)}}]),t}(u.PureComponent),Z=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return m(y(n=x(this,(e=v(t)).call.apply(e,[this].concat(o)))),"instanceUuid",k()),n}return g(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.uuid,n=void 0===t?this.instanceUuid:t,r=E(e,["uuid"]);return Object(u.createElement)(M,{uuid:n},Object(u.createElement)("div",h({"data-accordion-component":"AccordionItem"},r)))}}]),t}(u.Component);function q(e){var t=function e(t){return t&&(t.matches('[data-accordion-component="Accordion"]')?t:e(t.parentElement))}(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}function H(e){var t=(q(e)||[])[0];t&&t.focus()}function S(e){var t=q(e)||[],n=t[t.length-1];n&&n.focus()}function T(e){var t=q(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}function L(e){var t=q(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}m(Z,"defaultProps",{className:"accordion__item"}),m(Z,"displayName",A.AccordionItem);var R="40",U="35",J="13",K="36",V="37",W="39",F="32",G="38",Q=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return m(y(n=x(this,(e=v(t)).call.apply(e,[this].concat(o)))),"handleKeyPress",(function(e){var t=e.which.toString();if(t!==J&&t!==F||(e.preventDefault(),n.props.toggleExpanded()),e.target instanceof HTMLElement)switch(t){case K:e.preventDefault(),H(e.target);break;case U:e.preventDefault(),S(e.target);break;case V:case G:e.preventDefault(),L(e.target);break;case W:case R:e.preventDefault(),T(e.target)}})),n}return g(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.toggleExpanded,n=E(e,["toggleExpanded"]);return Object(u.createElement)("div",h({},n,{onClick:t,onKeyDown:this.handleKeyPress,"data-accordion-component":"AccordionItemButton"}))}}]),t}(u.PureComponent);m(Q,"defaultProps",{className:"accordion__button"});var z=function(e){return Object(u.createElement)(B,null,(function(t){var n=t.toggleExpanded,r=t.buttonAttributes;return Object(u.createElement)(Q,h({toggleExpanded:n},e,r))}))};z.displayName=A.AccordionItemButton;var X=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return m(y(n=x(this,(e=v(t)).call.apply(e,[this].concat(o)))),"ref",void 0),m(y(n),"setRef",(function(e){n.ref=e})),n}return g(t,e),f(t,[{key:"componentDidUpdate",value:function(){t.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){t.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(u.createElement)("div",h({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),t}(u.PureComponent);m(X,"defaultProps",{className:"accordion__heading","aria-level":3});var Y=function(e){return Object(u.createElement)(B,null,(function(t){var n=t.headingAttributes;return Object(u.createElement)(X,h({},e,n))}))};Y.displayName=A.AccordionItemHeading;var $=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return m(y(n=x(this,(e=v(t)).call.apply(e,[this].concat(o)))),"renderChildren",(function(e){var t=e.panelAttributes;return Object(u.createElement)("div",h({"data-accordion-component":"AccordionItemPanel"},n.props,t))})),n}return g(t,e),f(t,[{key:"render",value:function(){return Object(u.createElement)(B,null,this.renderChildren)}}]),t}(u.Component);m($,"defaultProps",{className:"accordion__panel"}),m($,"displayName",A.AccordionItemPanel);u.Component;var ee=d.a.createElement;function te(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var ne=function(e){Object(i.a)(r,e);var t=te(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return ee("section",{className:"faq-section"},ee("div",{className:"container"},ee("div",{className:"section-title"},ee("h2",null,"Frequently ",ee("span",null,"Asked")," Questions"),ee("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."),ee("div",{className:"bar"})),ee("div",{className:"row align-items-center"},ee("div",{className:"col-lg-6"},ee("div",{className:"faq-accordion"},ee(C,null,ee(Z,null,ee(Y,null,ee(z,null,"What access do I have on the free plan?")),ee($,null,ee("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),ee(Z,null,ee(Y,null,ee(z,null,"What access do I have on a free trial?")),ee($,null,ee("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),ee(Z,null,ee(Y,null,ee(z,null,"Does the price go up as my team gets larger?")),ee($,null,ee("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),ee(Z,null,ee(Y,null,ee(z,null,"How can I cancel my subscription?")),ee($,null,ee("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),ee(Z,null,ee(Y,null,ee(z,null,"Can I pay via an Invoice?")),ee($,null,ee("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))))),ee("div",{className:"col-lg-6"},ee("div",{className:"faq-image"},ee("img",{src:n("u3Ed"),alt:"image"}))))))}}]),r}(u.Component);t.a=ne},u3Ed:function(e,t){e.exports="/_next/static/images/faq-e13ac86c68a54ece5a00a5bd6263c782.png"}}]);