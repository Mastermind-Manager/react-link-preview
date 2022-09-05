"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),n=require("react-loading-skeleton");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),o=t(n);function i(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}i("/* common */\n.Container {\n  text-align: left;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 7px;\n  border: 1px solid #ccc;\n  color: black;\n  transition: 0.3s all ease;\n  height: fit-content; }\n  .Container:hover {\n    background-color: #fafafa;\n    cursor: pointer; }\n\n.Secondary {\n  color: #646464; }\n\n.LowerContainer {\n  padding: 10px; }\n\n.Title {\n  margin-top: 0;\n  margin-bottom: 10px; }\n\n.Image {\n  width: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 30vh; }\n\n.SiteDetails {\n  margin-top: 10px; }\n\n/* sm */\n@media (max-width: 640px) {\n  .Description {\n    display: none; } }\n\n/* md */\n@media (min-width: 641px) and (max-width: 768px) {\n  .Description {\n    display: none; } }\n");i(".skeleton-container {\n  border-radius: 7px;\n  border: 1px solid #eee; }\n\n.skeleton-lower-container {\n  padding: 10px; }\n");i("@keyframes react-loading-skeleton {\n    100% {\n        transform: translateX(100%);\n    }\n}\n\n.react-loading-skeleton {\n    --base-color: #ebebeb;\n    --highlight-color: #f5f5f5;\n    --animation-duration: 1.5s;\n    --animation-direction: normal;\n    --pseudo-element-display: block; /* Enable animation */\n\n    background-color: var(--base-color);\n\n    width: 100%;\n    border-radius: 0.25rem;\n    display: inline-flex;\n    line-height: 1;\n\n    position: relative;\n    overflow: hidden;\n    z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */\n}\n\n.react-loading-skeleton::after {\n    content: ' ';\n    display: var(--pseudo-element-display);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(\n        90deg,\n        var(--base-color),\n        var(--highlight-color),\n        var(--base-color)\n    );\n    transform: translateX(-100%);\n\n    animation-name: react-loading-skeleton;\n    animation-direction: var(--animation-direction);\n    animation-duration: var(--animation-duration);\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: infinite;\n}\n");var r=function(e){var n=e.width,t=void 0===n?"100%":n,i=e.imageHeight,r=void 0===i?"30vh":i,l=e.margin;return a.default.createElement("div",{className:"skeleton-container",style:{width:t,margin:l}},a.default.createElement(o.default,{width:t,height:r}),a.default.createElement("div",{className:"skeleton-lower-container"},a.default.createElement(o.default,{count:3})))};exports.LinkPreview=function(n){var t=n.url,o=n.className,i=void 0===o?"":o,l=n.width,d=n.height,c=n.descriptionLength,s=n.borderRadius,u=n.imageHeight,m=n.textAlign,f=n.margin,g=n.fallback,h=void 0===g?null:g,p=n.backgroundColor,v=void 0===p?"white":p,b=n.primaryTextColor,x=void 0===b?"black":b,k=n.secondaryTextColor,y=void 0===k?"rgb(100, 100, 100)":k,w=n.borderColor,N=void 0===w?"#ccc":w,E=n.showLoader,C=void 0===E||E,S=n.customLoader,T=void 0===S?null:S,I=n.openInNewTab,L=void 0===I||I,R=n.fetcher,D=n.fallbackImageSrc,j=void 0===D?"https://i.imgur.com/UeDNBNQ.jpeg":D,B=n.explicitImageSrc,U=void 0===B?null:B,_=n.showPlaceholderIfNoImage,A=void 0===_||_,H=n.onSuccess,P=void 0===H?function(e){}:H,q=e.useRef(!0),z=e.useState(),F=z[0],Q=z[1],X=e.useState(!0),M=X[0],O=X[1];if(e.useEffect((function(){return q.current=!0,O(!0),R?R(t).then((function(e){var n;q.current&&(!function(e){return!!e&&null!==e.title&&null!==e.description&&null!==e.image&&null!==e.siteName&&null!==e.hostname&&void 0!==e.title&&void 0!==e.description&&void 0!==e.image&&void 0!==e.siteName&&void 0!==e.hostname&&"null"!==e.image&&!e.image.startsWith("/")}(e)?(n=null,Q(null)):(n=e,Q(e)),P(n),O(!1))})).catch((function(e){console.error(e),console.error("No metadata could be found for the given URL."),q.current&&(P(null),Q(null),O(!1))})):fetch("https://rlp-proxy.nucleusapp.io/v2?url="+t).then((function(e){return e.json()})).then((function(e){q.current&&(Q(e.metadata),P(e.metadata),O(!1))})).catch((function(e){console.error(e),console.error("No metadata could be found for the given URL."),q.current&&(P(null),Q(null),O(!1))})),function(){q.current=!1}}),[t,R]),M&&C)return T?a.default.createElement(a.default.Fragment,null,T):a.default.createElement(r,{width:l,imageHeight:u,margin:f});if(!F)return a.default.createElement(a.default.Fragment,null,h);var W=F.image,G=F.description,J=F.title,K=F.siteName,V=F.hostname;return a.default.createElement("div",{"data-testid":"container",onClick:function(){var e=L?"_blank":"_self";window.open(t,e)},className:"Container "+i,style:{width:l,height:d,borderRadius:s,textAlign:m,margin:f,backgroundColor:v,borderColor:N}},(W||j)&&A&&a.default.createElement("div",{"data-testid":"image-container",style:{borderTopLeftRadius:s,borderTopRightRadius:s,backgroundImage:"url("+(U||W||j)+"), url("+j+")",height:u},className:"Image"}),a.default.createElement("div",{className:"LowerContainer"},a.default.createElement("h3",{"data-testid":"title",className:"Title",style:{color:x}},J),G&&a.default.createElement("span",{"data-testid":"desc",className:"Description Secondary",style:{color:y}},c&&G.length>c?G.slice(0,c)+"...":G),a.default.createElement("div",{className:"Secondary SiteDetails",style:{color:y}},K&&a.default.createElement("span",null,K," • "),a.default.createElement("span",null,V))))},exports.placeholderImg="https://i.imgur.com/UeDNBNQ.jpeg";
//# sourceMappingURL=index.js.map
