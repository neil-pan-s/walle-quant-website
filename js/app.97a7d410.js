(function(e){function n(n){for(var r,c,o=n[0],i=n[1],f=n[2],l=0,d=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&d.push(u[c][0]),u[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(d.length)d.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var o=t[c];0!==u[o]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},u={app:0},a=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-013348a1":"917a254f","chunk-2d0c938a":"1eb5b52b","chunk-2d226519":"09c6199e","chunk-3a6c67a1":"fa50692a","chunk-26f85a6e":"c80f4a42","chunk-76d16c8c":"02f195b0","chunk-9ccb868a":"39c1b8c0","chunk-63e3bad4":"d113f49f","chunk-744fe039":"95c895c4","chunk-23b1cff7":"8db8bdb2","chunk-fc2ac256":"a5da7b8e"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-013348a1":1,"chunk-26f85a6e":1,"chunk-9ccb868a":1,"chunk-63e3bad4":1,"chunk-744fe039":1,"chunk-23b1cff7":1,"chunk-fc2ac256":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-013348a1":"65293d6e","chunk-2d0c938a":"31d6cfe0","chunk-2d226519":"31d6cfe0","chunk-3a6c67a1":"31d6cfe0","chunk-26f85a6e":"ae7cf3b6","chunk-76d16c8c":"31d6cfe0","chunk-9ccb868a":"2be3fa7f","chunk-63e3bad4":"b0a8d6ef","chunk-744fe039":"758d2739","chunk-23b1cff7":"53def3d6","chunk-fc2ac256":"91498916"}[e]+".css",u=i.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var f=a[o],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===u))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){f=d[o],l=f.getAttribute("data-href");if(l===r||l===u)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],h.parentNode.removeChild(h),t(a)},h.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){c[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=a);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var d=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}u[e]=void 0}};var h=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var h=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),c=(t("d3b7"),t("8c4f"));r["a"].use(c["a"]);var u=new c["a"]({routes:[{path:"/",component:function(){return t.e("chunk-2d0c938a").then(t.bind(null,"57e7"))},children:[{path:"matrix",alias:"",component:function(){return Promise.all([t.e("chunk-3a6c67a1"),t.e("chunk-76d16c8c"),t.e("chunk-9ccb868a")]).then(t.bind(null,"e843"))}},{path:"live",component:function(){return t.e("chunk-744fe039").then(t.bind(null,"3e7c"))}},{path:"work",component:function(){return t.e("chunk-2d226519").then(t.bind(null,"e7c4"))}}]},{path:"/clock",component:function(){return Promise.all([t.e("chunk-76d16c8c"),t.e("chunk-23b1cff7")]).then(t.bind(null,"e5c2"))}}]}),a=u,o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],f=(t("1f54"),t("1157")),l=t.n(f);window.$=l.a,window.jQuery=l.a;l.a;var d=function(){return t.e("chunk-63e3bad4").then(t.bind(null,"216c"))},h=function(){return t.e("chunk-fc2ac256").then(t.bind(null,"fd2d"))},p=function(){return t.e("chunk-013348a1").then(t.bind(null,"cccf"))},s=function(){return Promise.all([t.e("chunk-3a6c67a1"),t.e("chunk-26f85a6e")]).then(t.bind(null,"0292"))};r["a"].component("ui-nav",d),r["a"].component("ui-footer",h),r["a"].component("ui-player",p),r["a"].component("ui-chart",s);var b={name:"App"},k=b,m=(t("034f"),t("2877")),v=Object(m["a"])(k,o,i,!1,null,null,null),g=v.exports;r["a"].config.productionTip=!1;var y=new r["a"]({router:a,render:function(e){return e(g)}}).$mount("#app");n["default"]=y},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.97a7d410.js.map