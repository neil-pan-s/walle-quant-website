(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-efba629c","chunk-17bddeb7"],{1276:function(t,e,i){"use strict";var n=i("d784"),s=i("44e7"),l=i("825a"),r=i("1d80"),a=i("4840"),c=i("8aa5"),o=i("50c4"),h=i("14c3"),u=i("9263"),d=i("d039"),g=[].push,m=Math.min,f=4294967295,p=!d((function(){return!RegExp(f,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(r(this)),l=void 0===i?f:i>>>0;if(0===l)return[];if(void 0===t)return[n];if(!s(t))return e.call(n,t,l);var a,c,o,h=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,p=new RegExp(t.source,d+"g");while(a=u.call(p,n)){if(c=p.lastIndex,c>m&&(h.push(n.slice(m,a.index)),a.length>1&&a.index<n.length&&g.apply(h,a.slice(1)),o=a[0].length,m=c,h.length>=l))break;p.lastIndex===a.index&&p.lastIndex++}return m===n.length?!o&&p.test("")||h.push(""):h.push(n.slice(m)),h.length>l?h.slice(0,l):h}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var s=r(this),l=void 0==e?void 0:e[t];return void 0!==l?l.call(e,s,i):n.call(String(s),e,i)},function(t,s){var r=i(n,t,this,s,n!==e);if(r.done)return r.value;var u=l(t),d=String(this),g=a(u,RegExp),b=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(p?"y":"g"),k=new g(p?u:"^(?:"+u.source+")",v),w=void 0===s?f:s>>>0;if(0===w)return[];if(0===d.length)return null===h(k,d)?[d]:[];var x=0,C=0,y=[];while(C<d.length){k.lastIndex=p?C:0;var _,E=h(k,p?d:d.slice(C));if(null===E||(_=m(o(k.lastIndex+(p?0:C)),d.length))===x)C=c(d,C,b);else{if(y.push(d.slice(x,C)),y.length===w)return y;for(var I=1;I<=E.length-1;I++)if(y.push(E[I]),y.length===w)return y;C=x=_}}return y.push(d.slice(x)),y}]}),!p)},"44e7":function(t,e,i){var n=i("861d"),s=i("c6b6"),l=i("b622"),r=l("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==s(t))}},"58e3":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cube"},[t.stocks?1===t.stocks.length?i("div",{staticClass:"wrap"},[i("iframe",{staticClass:"element",attrs:{src:"/twist/#/cube/"+t.stocks[0]+"?levels="+t.levels,frameborder:"0",marginheight:"0",marginwidth:"0",scrolling:"no",width:"100%",height:"100%"}})]):t.stocks.length>=3?i("div",{staticClass:"wrap"},[i("iframe",{staticClass:"element",attrs:{src:"https://walle.neil-pan.com/stock/#/v/"+t.stocks[0],frameborder:"0",marginheight:"0",marginwidth:"0",scrolling:"no",width:"100%",height:"100%"}}),t.stocks[1]?i("iframe",{staticClass:"element",attrs:{src:"https://walle.neil-pan.com/stock/#/v/"+t.stocks[1],frameborder:"0",marginheight:"0",marginwidth:"0",scrolling:"no",width:"100%",height:"100%"}}):t._e(),t.stocks[2]?i("iframe",{staticClass:"element",attrs:{src:"https://walle.neil-pan.com/stock/#/v/"+t.stocks[2],frameborder:"0",marginheight:"0",marginwidth:"0",scrolling:"no",width:"100%",height:"100%"}}):t._e(),t.stocks[3]?i("iframe",{staticClass:"element",attrs:{src:"https://walle.neil-pan.com/stock/#/v/"+t.stocks[3],frameborder:"0",marginheight:"0",marginwidth:"0",scrolling:"no",width:"100%",height:"100%"}}):t._e(),t.stocks[4]?i("iframe",{staticClass:"element",attrs:{src:"https://walle.neil-pan.com/stock/#/v/"+t.stocks[4],frameborder:"0",marginheight:"0",marginwidth:"0",scrolling:"no",width:"100%",height:"100%"}}):t._e()]):t._e():i("div",{staticClass:"wrap default"},[i("matrix",{staticClass:"element matrix"}),i("global",{staticClass:"element global"})],1)])},s=[],l=(i("d3b7"),i("ac1f"),i("1276"),{components:{Matrix:function(){return Promise.all([i.e("chunk-2bcb5f2d"),i.e("chunk-48fd6f4a"),i.e("chunk-4b34864e"),i.e("chunk-a3b82e8c")]).then(i.bind(null,"e843"))},Global:function(){return Promise.all([i.e("chunk-2bcb5f2d"),i.e("chunk-48fd6f4a"),i.e("chunk-4b34864e"),i.e("chunk-4bddf628")]).then(i.bind(null,"0a1d"))}},data:function(){return{stocks:null,levels:"min1,min5,min30"}},mounted:function(){this.$route.params.symbol&&(this.stocks=this.$route.params.symbol.split(","),this.$route.query.levels&&(this.levels=this.$route.query.levels))}}),r=l,a=(i("5bd5"),i("2877")),c=Object(a["a"])(r,n,s,!1,null,"4448c70e",null);e["default"]=c.exports},"5bd5":function(t,e,i){"use strict";i("d5d9")},d5d9:function(t,e,i){}}]);