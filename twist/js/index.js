(function(e){function t(t){for(var r,o,c=t[0],u=t[1],d=t[2],l=0,s=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&s.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);h&&h(t);while(s.length)s.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={index:0},i={index:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-5415ee57":1,"chunk-42c8076b":1,"chunk-574324c8":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+".css",i=u.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var d=a[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===r||l===i))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){d=s[c],l=d.getAttribute("data-href");if(l===r||l===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],h.parentNode.removeChild(h),n(a)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var s=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}i[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var h=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("1d50")},"1d50":function(e,t,n){"use strict";n.r(t);n("ef1f"),n("9531"),n("26d3"),n("2007"),n("41ab"),n("8d0d"),n("52f9"),n("d48b"),n("2aa5"),n("32f5");var r=n("f5f2"),o=n("30c6"),i=n("ce37"),a=function(){function e(t){Object(r["a"])(this,e),Object(i["a"])(this,"iframe",void 0),this.baseUrl=t||location.origin+location.pathname}return Object(o["a"])(e,[{key:"createSandbox",value:function(){var e=document.createElement("iframe");e.setAttribute("id","walle-sandbox"),e.setAttribute("src","about:blank"),e.setAttribute("frameborder","0");var t=document.createElement("style");return t.innerText="\n      * {\n        margin: 0;\n        padding: 0;\n      }\n\n      html,body {\n        width: 100%;\n        height: 100%;\n      }\n\n      iframe {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n    ".replace(/[\r\n ]/g,""),e.setAttribute("ref","walle-sandbox"),t.setAttribute("ref","walle-sandbox"),document.head.appendChild(t),document.body.appendChild(e),e}},{key:"isSandbox",value:function(){return"about:"===location.protocol}},{key:"clone",value:function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=0,o=Object.values(e.children);r<o.length;r++){var i=o[r];n(i)&&("SCRIPT"===i.nodeName?this.injectScript(i.getAttribute("src")):t.appendChild(i.cloneNode(!0)))}}},{key:"clear",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=e.children.length-1;n>=0;n--){var r=e.children[n];t(r)&&e.removeChild(r)}}},{key:"injectScript",value:function(e){var t=document.createElement("script");t.type="text/javascript",t.src=e,this.iframe.contentWindow.document.body.appendChild(t)}},{key:"bindTitleChange",value:function(){Object.defineProperty(this.iframe.contentWindow.document,"title",{get:function(){return""},set:function(e){document.title=e}})}},{key:"bindHashChange",value:function(){var e=this;window.onhashchange=function(){e.iframe.contentWindow.location.hash=window.location.hash},this.iframe.contentWindow.onhashchange=function(){window.location.hash=e.iframe.contentWindow.location.hash},this.iframe.contentWindow.location.hash=window.location.hash}},{key:"bindBaseUrl",value:function(){var e=document.createElement("base");e.setAttribute("href",this.baseUrl),this.iframe.contentWindow.document.head.appendChild(e)}},{key:"mount",value:function(){return this.isSandbox()||(this.iframe=this.createSandbox(),this.bindBaseUrl(),this.bindTitleChange(),this.bindHashChange(),this.clone(document.head,this.iframe.contentWindow.document.head,(function(e){return"walle-sandbox"!==e.getAttribute("ref")})),this.clone(document.body,this.iframe.contentWindow.document.body,(function(e){return"walle-sandbox"!==e.getAttribute("ref")})),this.clear(document.head,(function(e){var t="walle-sandbox"===e.getAttribute("ref"),n=["TITLE","META","LINK"].includes(e.nodeName);return!t&&!n})),this.clear(document.body,(function(e){return"walle-sandbox"!==e.getAttribute("ref")}))),this}}]),e}(),c=(new a).mount("walle-app");c.isSandbox()&&n.e("chunk-5415ee57").then(n.bind(null,"df86"))}});