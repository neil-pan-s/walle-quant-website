(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3cffcb4"],{1276:function(t,e,r){"use strict";var n=r("d784"),a=r("44e7"),i=r("825a"),u=r("1d80"),o=r("4840"),c=r("8aa5"),s=r("50c4"),f=r("14c3"),l=r("9263"),h=r("d039"),p=[].push,v=Math.min,d=4294967295,y=!h((function(){return!RegExp(d,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(u(this)),i=void 0===r?d:r>>>0;if(0===i)return[];if(void 0===t)return[n];if(!a(t))return e.call(n,t,i);var o,c,s,f=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,y=new RegExp(t.source,h+"g");while(o=l.call(y,n)){if(c=y.lastIndex,c>v&&(f.push(n.slice(v,o.index)),o.length>1&&o.index<n.length&&p.apply(f,o.slice(1)),s=o[0].length,v=c,f.length>=i))break;y.lastIndex===o.index&&y.lastIndex++}return v===n.length?!s&&y.test("")||f.push(""):f.push(n.slice(v)),f.length>i?f.slice(0,i):f}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var a=u(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a,r):n.call(String(a),e,r)},function(t,a){var u=r(n,t,this,a,n!==e);if(u.done)return u.value;var l=i(t),h=String(this),p=o(l,RegExp),m=l.unicode,w=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(y?"y":"g"),g=new p(y?l:"^(?:"+l.source+")",w),b=void 0===a?d:a>>>0;if(0===b)return[];if(0===h.length)return null===f(g,h)?[h]:[];var k=0,x=0,O=[];while(x<h.length){g.lastIndex=y?x:0;var j,R=f(g,y?h:h.slice(x));if(null===R||(j=v(s(g.lastIndex+(y?0:x)),h.length))===k)x=c(h,x,m);else{if(O.push(h.slice(k,x)),O.length===b)return O;for(var E=1;E<=R.length-1;E++)if(O.push(R[E]),O.length===b)return O;x=k=j}}return O.push(h.slice(k)),O}]}),!y)},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,i,u){try{var o=t[i](u),c=o.value}catch(s){return void r(s)}o.done?e(c):Promise.resolve(c).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var u=t.apply(e,r);function o(t){n(u,a,i,o,c,"next",t)}function c(t){n(u,a,i,o,c,"throw",t)}o(void 0)}))}}},2532:function(t,e,r){"use strict";var n=r("23e7"),a=r("5a34"),i=r("1d80"),u=r("ab13");n({target:"String",proto:!0,forced:!u("includes")},{includes:function(t){return!!~String(i(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},3662:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7"),r("96cf");var n=r("1da1");function a(t,e){return i.apply(this,arguments)}function i(){return i=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=document.querySelector("#scripts"),n?n.innerHTML="":(n=document.createElement("div"),n.setAttribute("id","scripts"),document.body.appendChild(n)),t.abrupt("return",u(e,(function(){n.innerHTML="",r&&r()}),n));case 3:case"end":return t.stop()}}),t)}))),i.apply(this,arguments)}function u(t,e,r){return o.apply(this,arguments)}function o(){return o=Object(n["a"])(regeneratorRuntime.mark((function t(e,r,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){var i=document.createElement("script");i.type="text/javascript",i.src=e,i.onload=function(){t(),r&&r()},i.onerror=function(t){a(t)},(n||document.body).appendChild(i)})));case 1:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}},"44e7":function(t,e,r){var n=r("861d"),a=r("c6b6"),i=r("b622"),u=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[u])?!!e:"RegExp"==a(t))}},"47dc":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("d3b7");var n=r("b85c"),a=(r("96cf"),r("1da1")),i=r("d4ec"),u=r("bee2"),o=r("ade3"),c=function(){function t(e){Object(i["a"])(this,t),Object(o["a"])(this,"url",void 0),Object(o["a"])(this,"wss",void 0),Object(o["a"])(this,"callbacks",{open:[],message:[],close:[]}),Object(o["a"])(this,"retry",0),this.url=e}return Object(u["a"])(t,[{key:"start",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.url){t.next=2;break}return t.abrupt("return");case 2:this.wss=new WebSocket(this.url),this.wss.onopen=function(t){e.fire("open",t),e.retry=0},this.wss.onmessage=function(t){e.fire("message",t)},this.wss.onclose=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.fire("close",r),!(e.retry>=3)){t.next=4;break}return t.next=4,e.wait(e.retry/3*60*1e3);case 4:e.retry++,e.start();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.intervalOfPing=setInterval((function(){e.wss.send("")}),6e4);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"wait",value:function(t){return new Promise((function(e){setTimeout(e,t)}))}},{key:"fire",value:function(t){if(this.callbacks[t].length){for(var e=arguments.length,r=new Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];var i,u=Object(n["a"])(this.callbacks[t]);try{for(u.s();!(i=u.n()).done;){var o=i.value;o.apply(void 0,r)}}catch(c){u.e(c)}finally{u.f()}}}},{key:"on",value:function(t,e){this.callbacks[t].push(e)}},{key:"isRunning",value:function(){return this.wss&&1===+this.wss.readyState}},{key:"stop",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.url=null,this.callbacks={open:[],message:[],close:[]},this.intervalOfPing&&clearInterval(this.intervalOfPing),t.abrupt("return",this.wss&&this.wss.close());case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}()},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"704f":function(t,e,r){"use strict";r.d(e,"d",(function(){return v})),r.d(e,"b",(function(){return y})),r.d(e,"c",(function(){return b})),r.d(e,"a",(function(){return O}));r("caad"),r("a15b"),r("fb6a"),r("b680"),r("ac1f"),r("1276");function n(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function a(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,i=void 0;try{for(var u,o=t[Symbol.iterator]();!(n=(u=o.next()).done);n=!0)if(r.push(u.value),e&&r.length===e)break}catch(c){a=!0,i=c}finally{try{n||null==o["return"]||o["return"]()}finally{if(a)throw i}}return r}}var i=r("06c5");function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){return n(t)||a(t,e)||Object(i["a"])(t,e)||u()}var c=r("b85c"),s=(r("96cf"),r("1da1")),f=r("d4ec"),l=r("bee2"),h=r("ade3"),p=r("47dc"),v=function(){function t(){Object(f["a"])(this,t),Object(h["a"])(this,"wss",void 0),Object(h["a"])(this,"running",!1),Object(h["a"])(this,"cache",{})}return Object(l["a"])(t,[{key:"symbol",value:function(t){var e=t.slice(0,2);return["00","30","12"].includes(e)?"sz"+t:["60","68","11"].includes(e)?"sh"+t:t}},{key:"request",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r={},n=Object(c["a"])(e);try{for(n.s();!(a=n.n()).done;)i=a.value,r[i]=this.cache[i]}catch(u){n.e(u)}finally{n.f()}return t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"stocks",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,n,a,i,u,o,s,f,l,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=[],n=Object(c["a"])(e);try{for(n.s();!(a=n.n()).done;){i=a.value;try{u=this.cache[i].split(","),o=u[0],s=+u[2],f=+u[3],l=0===f?0:+((f-s)/s*100).toFixed(2),h={code:i,name:o,close:s,price:f,change:l},r.push(h)}catch(p){}}}catch(v){n.e(v)}finally{n.f()}return t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"startWss",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.length){t.next=2;break}return t.abrupt("return");case 2:return r="http:"===location.protocol?"ws://w.sinajs.cn/wskt":"wss://w.sinajs.cn/wskt",t.next=5,this.stopWss();case 5:this.wss=new p["a"](r+"?list="+e.join(",")),this.wss.on("message",(function(t){var e=t.data.split("="),r=o(e,2),a=r[0],i=r[1];n.cache[a]=i})),this.wss.start(),this.running=!0;case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"isRunning",value:function(){return this.running}},{key:"stopWss",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.wss){t.next=3;break}return t.next=3,this.wss.stop();case 3:this.wss=null,this.running=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),d=(r("99af"),r("d81d"),r("b0c0"),r("2532"),function(){function t(e){Object(f["a"])(this,t),Object(h["a"])(this,"url",void 0),Object(h["a"])(this,"sse",void 0),Object(h["a"])(this,"callbacks",{open:[],message:[],close:[]}),Object(h["a"])(this,"retry",0),this.url=e}return Object(l["a"])(t,[{key:"start",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.url){t.next=2;break}return t.abrupt("return");case 2:this.sse=new EventSource(this.url),this.sse.onopen=function(t){e.fire("open",t),e.retry=0},this.sse.onmessage=function(t){e.fire("message",t)},this.sse.onerror=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.fire("close",r),!(e.retry>=3)){t.next=4;break}return t.next=4,e.wait(e.retry/3*60*1e3);case 4:e.retry++,e.start();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"wait",value:function(t){return new Promise((function(e){setTimeout(e,t)}))}},{key:"fire",value:function(t){if(this.callbacks[t].length){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var a,i=Object(c["a"])(this.callbacks[t]);try{for(i.s();!(a=i.n()).done;){var u=a.value;u.apply(void 0,r)}}catch(o){i.e(o)}finally{i.f()}}}},{key:"on",value:function(t,e){this.callbacks[t].push(e)}},{key:"isRunning",value:function(){return this.sse&&1===+this.sse.readyState}},{key:"stop",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.url=null,this.callbacks={open:[],message:[],close:[]},t.abrupt("return",this.sse&&this.sse.close());case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}()),y=function(){function t(){Object(f["a"])(this,t),Object(h["a"])(this,"sse",void 0),Object(h["a"])(this,"running",!1),Object(h["a"])(this,"cache",{})}return Object(l["a"])(t,[{key:"symbol",value:function(t){if(t.includes("."))return t;var e=t.slice(0,2);return["00","30","12"].includes(e)?"0."+t:["60","68","11"].includes(e)?"1."+t:t}},{key:"request",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.map((function(t){return r.cache[t]})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"stocks",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,n,a,i,u,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=[],n=Object(c["a"])(e);try{for(n.s();!(a=n.n()).done;){i=a.value;try{u=this.cache[i],o={},s=u["f1"],o.code=i,o.name=u["f14"],o.price=+(+u["f2"]/Math.pow(10,s)).toFixed(2),o.close=+(+u["f2"]/Math.pow(10,s)).toFixed(2),o.change=+(+u["f3"]/100).toFixed(2),r.push(o)}catch(f){}}}catch(l){n.e(l)}finally{n.f()}return t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"startSse",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.length){t.next=2;break}return t.abrupt("return");case 2:return r="https://push2.eastmoney.com/api/qt/ulist/sse?invt=3&pi=0&pz=".concat(e.length,"&mpi=3000&secids=").concat(e.join(","),"&fields=f12,f13,f19,f14,f139,f148,f2,f4,f1,f3,f152,f5,f30,f31,f18,f32,f6,f8,f7,f10,f22,f9,f112,f100,f113,f45,f37"),t.next=5,this.stopSse();case 5:this.sse=new d(r),this.sse.on("message",(function(t){if(t.data){var e=JSON.parse(t.data);if(e.data){var r=e.data.diff;for(var a in r){var i=r[a],u=i["f13"]+"."+i["f12"];n.cache[u]?n.cache[u]=Object.assign(n.cache[u],i):n.cache[u]=i}}}})),this.sse.start(),this.running=!0;case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"isRunning",value:function(){return this.running}},{key:"stopSse",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.sse){t.next=3;break}return t.next=3,this.sse.stop();case 3:this.sse=null,this.running=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),m=r("3662");function w(t){return g.apply(this,arguments)}function g(){return g=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,n,a,i,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.type,n=e.url,a=e.data,i=e.dataType,u=void 0===i?"json":i,t.abrupt("return",new Promise((function(t,e){window.$.ajax({type:r,url:n,dataType:u,data:a,success:function(){t.apply(void 0,arguments)},error:function(){e.apply(void 0,arguments)}})})));case 2:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}var b=function(){function t(){Object(f["a"])(this,t)}return Object(l["a"])(t,[{key:"requestNetInFlow",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,n,a,i,u,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="https://push2his.eastmoney.com/api/qt/stock/fflow/daykline/get?lmt=0&klt=101&fields1=f1%2Cf2%2Cf3%2Cf7&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58%2Cf59%2Cf60%2Cf61%2Cf62%2Cf63%2Cf64%2Cf65&secid=".concat(e),t.next=3,w({type:"get",url:r});case 3:n=t.sent,a=[],i=Object(c["a"])(n.data.klines);try{for(i.s();!(u=i.n()).done;)o=u.value,s=o.split(","),a.push({time:s[0],value:+s[1]/1e8,small:+s[2]/1e8,medium:+s[3]/1e8,big:+s[4]/1e8,super:+s[5]/1e8})}catch(f){i.e(f)}finally{i.f()}return t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"requestSouthOutFlow",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,n,a,i,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="https://datacenter.eastmoney.com/securities/api/data/get?type=RPT_MUTUAL_NETINFLOW_DETAILS&sty=ALL&source=DataCenter&client=WAP&p=&ps=&sr=1&st=TRADE_DATE&filter=(DIRECTION_TYPE=%222%22)(TIME_TYPE=%224%22)&showTime=1",t.next=3,w({type:"get",url:e});case 3:r=t.sent,n=[],a=Object(c["a"])(r.result.data);try{for(a.s();!(i=a.n()).done;)u=i.value,n.push({time:u["TRADE_DATE"].slice(0,10),value:+u["NET_INFLOW_BOTH"]/100})}catch(o){a.e(o)}finally{a.f()}return t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"requestNorthInFlow",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,n,a,i,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="https://datacenter.eastmoney.com/securities/api/data/get?type=RPT_MUTUAL_NETINFLOW_DETAILS&sty=ALL&source=DataCenter&client=WAP&p=&ps=&sr=1&st=TRADE_DATE&filter=(DIRECTION_TYPE=%221%22)(TIME_TYPE=%224%22)&showTime=1",t.next=3,w({type:"get",url:e});case 3:r=t.sent,n=[],a=Object(c["a"])(r.result.data);try{for(a.s();!(i=a.n()).done;)u=i.value,n.push({time:u["TRADE_DATE"].slice(0,10),value:+u["NET_INFLOW_BOTH"]/100})}catch(o){a.e(o)}finally{a.f()}return t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"requestMargin",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,n,a,i,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="https://datacenter.eastmoney.com/api/data/get?type=RPTA_RZRQ_LSHJ&sty=ALL&source=WEB&st=dim_date&sr=-1&p=1&ps=500&filter=&pageNo=1",t.next=3,w({type:"get",url:e});case 3:r=t.sent,n=[],a=Object(c["a"])(r.result.data.reverse());try{for(a.s();!(i=a.n()).done;)u=i.value,n.push({time:u["DIM_DATE"].slice(0,10),rzrqye:+u["RZRQYE"]/1e8,rzye:+u["RZYE"]/1e8,rqye:+u["RQYE"]/1e8})}catch(o){a.e(o)}finally{a.f()}return t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"requestCurrency",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,n,a,i,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="https://datainterface.eastmoney.com/EM_DataCenter/JS.aspx?cb=_datatable7520656=&type=GJZB&sty=ZGZB&js=(%7Bdata%3A%5B(x)%5D%2Cpages%3A(pc)%7D)&p=1&ps=10000&mkt=11",t.next=3,Object(m["a"])(e,null,document.querySelector("#scripts"));case 3:r=[],n=Object(c["a"])(window._datatable7520656.data.reverse());try{for(n.s();!(a=n.n()).done;)i=a.value,u=i.split(","),r.push({time:u[0],m2:{value:+u[1],ratioY:+u[2],ratioM:+u[3]},m1:{value:+u[4],ratioY:+u[5],ratioM:+u[6]},m0:{value:+u[7],ratioY:+u[8],ratioM:+u[9]}})}catch(o){n.e(o)}finally{n.f()}return t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"request",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,n,a=this,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:"1.000300",n={netinflow:function(){return a.requestNetInFlow(r)},northinflow:function(){return a.requestNorthInFlow()},southoutflow:function(){return a.requestSouthOutFlow()},margin:function(){return a.requestMargin()},currency:function(){return a.requestCurrency()}},t.abrupt("return",n[e]());case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),k=r("c1df"),x=r.n(k),O=function(){function t(){Object(f["a"])(this,t)}return Object(l["a"])(t,[{key:"requestByWeek",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,n,a,i,u,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="http://www.chinamoney.com.cn/ags/ms/cm-u-bond-publish/TicketPutAndBackStatByWeek",r={startWeek:"2002-26",endWeek:x()().format("YYYY-ww"),pageSize:1e4,pageNo:1},t.next=4,w({type:"post",url:e,data:r});case 4:n=t.sent,a=[],i=Object(c["a"])(n.data.resultList.reverse());try{for(i.s();!(u=i.n()).done;)o=u.value,a.push({time:o.startDate,value:+o.netPutIn})}catch(s){i.e(s)}finally{i.f()}return t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"requestByMonth",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,n,a,i,u,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="http://www.chinamoney.com.cn/ags/ms/cm-u-bond-publish/TicketPutAndBackStatByMonth",r={startMonth:"2002-06",endMonth:x()().format("YYYY-MM"),pageSize:1e4,pageNo:1},t.next=4,w({type:"post",url:e,data:r});case 4:n=t.sent,a=[],i=Object(c["a"])(n.data.resultList.reverse());try{for(i.s();!(u=i.n()).done;)o=u.value,a.push({time:o.date,value:+o.netPutIn})}catch(s){i.e(s)}finally{i.f()}return t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"request",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"week",t.abrupt("return","week"===e?this.requestByWeek():this.requestByMonth());case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}()},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(I){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof y?e:y,i=Object.create(a.prototype),u=new _(n||[]);return i._invoke=R(t,r,u),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function y(){}function m(){}function w(){}var g={};g[i]=function(){return this};var b=Object.getPrototypeOf,k=b&&b(b(S([])));k&&k!==r&&n.call(k,i)&&(g=k);var x=w.prototype=y.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(a,i,u,o){var c=f(t[a],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,u,o)}),(function(t){r("throw",t,u,o)})):e.resolve(l).then((function(t){s.value=t,u(s)}),(function(t){return r("throw",t,u,o)}))}o(c.arg)}var a;function i(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function R(t,e,r){var n=l;return function(a,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===a)throw i;return A()}r.method=a,r.arg=i;while(1){var u=r.delegate;if(u){var o=E(u,r);if(o){if(o===d)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=f(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,u=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return u.next=u}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=x.constructor=w,w.constructor=m,m.displayName=c(w,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c(t,o,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(j.prototype),j.prototype[u]=function(){return this},t.AsyncIterator=j,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var u=new j(s(e,r,n,a),i);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},O(x),c(x,o,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return o.type="throw",o.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],o=u.completion;if("root"===u.tryLoc)return a("end");if(u.tryLoc<=this.prev){var c=n.call(u,"catchLoc"),s=n.call(u,"finallyLoc");if(c&&s){if(this.prev<u.catchLoc)return a(u.catchLoc,!0);if(this.prev<u.finallyLoc)return a(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return a(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return a(u.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},a15b:function(t,e,r){"use strict";var n=r("23e7"),a=r("44ad"),i=r("fc6a"),u=r("a640"),o=[].join,c=a!=Object,s=u("join",",");n({target:"Array",proto:!0,forced:c||!s},{join:function(t){return o.call(i(this),void 0===t?",":t)}})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,r){var n=r("b622"),a=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[a]=!1,"/./"[t](e)}catch(n){}}return!1}}}]);