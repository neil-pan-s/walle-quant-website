(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b34864e"],{"6fd1":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));n("caad"),n("a15b"),n("fb6a"),n("b680"),n("b64b"),n("d3b7"),n("07ac"),n("ac1f"),n("2532"),n("1276");var r=n("b85c"),a=(n("96cf"),n("1da1")),s=n("d4ec"),c=n("bee2"),i=n("ade3"),u=n("3662"),o=n("704f"),f=function(e){return new Promise((function(t){setTimeout(t,e)}))},h=function(){function e(){Object(s["a"])(this,e),Object(i["a"])(this,"intervel",void 0),Object(i["a"])(this,"isUseJsonp",!1),Object(i["a"])(this,"crawler",{sina:new o["d"],eastmoney:new o["b"]}),Object(i["a"])(this,"weights",{}),Object(i["a"])(this,"groups",{}),Object(i["a"])(this,"globals",{})}return Object(c["a"])(e,[{key:"captureIndexWeight",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,s,c,i,o,f,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="https://datainterface.eastmoney.com/EM_DataCenter/JS.aspx?type=SHSZZS&sty=SHSZZS&st=2&sr=-1&p=1&ps=500&js=var%20bSLQbtLZ={pages:(pc),data:[(x)]}&code=".concat(t),e.next=3,Object(u["a"])(n,null,document.querySelector("#scripts"));case 3:this.weights[t]={},a=Object(r["a"])(window.bSLQbtLZ.data);try{for(a.s();!(s=a.n()).done;)c=s.value,i=c.split(","),o=["00","30","12"].includes(i[0].slice(0,2))?"0.":"1.",f=o+i[0],h={code:f,name:i[1],weight:+i[12],change:+i[16]},this.weights[t][f]=h}catch(p){a.e(p)}finally{a.f()}return e.abrupt("return",Object.values(this.weights[t]));case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"captureGroupWeight",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,s,c,i,o,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,t.includes(".")&&(n=t.split(".")[1]),a="https://push2.eastmoney.com/api/qt/clist/get?cb=var%20bSLQbtLZ=&pn=1&pz=500&po=1&np=1&fltt=2&invt=2&fid=f20&fs=b:".concat(n,"+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45"),e.next=5,Object(u["a"])(a,null,document.querySelector("#scripts"));case 5:this.weights[t]={},s=Object(r["a"])(window.bSLQbtLZ.data.diff);try{for(s.s();!(c=s.n()).done;)i=c.value,o=+i.f20/5e11,f=i.f13+"."+i.f12,this.weights[t][f]={code:f,name:i.f14,weight:o,change:+i.f3}}catch(h){s.e(h)}finally{s.f()}return e.abrupt("return",Object.values(this.weights[t]));case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"captureWeight",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!["000016","000300","000905"].includes(t)){e.next=2;break}return e.abrupt("return",this.captureIndexWeight(t));case 2:return e.abrupt("return",this.captureGroupWeight(t));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"captureGroups",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,a,s,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://push2.eastmoney.com/api/qt/clist/get?cb=var%20bSLQbtLZ=&pn=1&pz=50&po=1&np=1&fltt=2&invt=2&fid=f20&fs=m:90+t:2+f:!50&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152,f124,f107,f104,f105,f140,f141,f207,f208,f209,f222",e.next=3,Object(u["a"])(t,null,document.querySelector("#scripts"));case 3:this.groups={},n=Object(r["a"])(window.bSLQbtLZ.data.diff);try{for(n.s();!(a=n.n()).done;)s=a.value,c=+s.f20/1e12,i=s.f13+"."+s.f12,this.groups[i]={code:i,name:s.f14,weight:c,change:+s.f3}}catch(o){n.e(o)}finally{n.f()}return e.abrupt("return",Object.values(this.groups));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"captureGlobals",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,n,a,s,c,i,o,f,h,p,l,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="sh000001,sz399001,sz399006,sh000688,gb_dji,gb_ixic,gb_inx,znb_VIX,hkHSI,znb_TWJQ,znb_NKY,znb_KOSPI,znb_UKX,znb_DAX,znb_CAC,znb_SX5E,znb_AS51,znb_GSPTSE,znb_XAX,znb_N100,znb_AEX,znb_BEL20,znb_IBOV,znb_IBEX,znb_INDEXCF,znb_MXX,znb_SBX,znb_SWI20,znb_IPSA,znb_JCI,znb_CASE,znb_FBMEMAS,znb_MAR,znb_VN30".split(","),n="https://hq.sinajs.cn/list=".concat(t.join(",")),e.next=4,Object(u["a"])(n,null,document.querySelector("#scripts"));case 4:a=[],s=Object(r["a"])(t);try{for(s.s();!(c=s.n()).done;){i=c.value;try{o=window["hq_str_".concat(i)].split(","),f=void 0,h=void 0,p=void 0,l=void 0,f=o[0],["gb_dji","gb_ixic","gb_inx"].includes(i)?(h=+o[1],p=+o[2]):["sh000001","sz399001","sz399006","sh000688"].includes(i)?(h=+o[3],l=+o[2],p=0===h?0:+((h-l)/l*100).toFixed(2)):"hkHSI"===i?(f=o[1],h=+o[6],p=+o[8]):(h=+o[1],p=+o[3]),b={code:i,name:f,price:h,change:p},this.globals[i]=b,a.push(b)}catch(g){}}}catch(w){s.e(w)}finally{s.f()}return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"hookOfWeight",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var s,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.weights[t]){e.next=3;break}return e.next=3,this.captureWeight(t);case 3:return s=Object.keys(this.weights[t]),e.next=6,this.crawler.eastmoney.startSse(s);case 6:return e.next=8,this.crawler.eastmoney.keepAlive();case 8:return e.abrupt("return",Object(a["a"])(regeneratorRuntime.mark((function e(){var a,i,u,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.crawler.eastmoney.stocks(s);case 2:a=e.sent,i=Object(r["a"])(a);try{for(i.s();!(u=i.n()).done;)o=u.value,o.weight=c.weights[t][o.code].weight,Object.assign(c.weights[t][o.code],o)}catch(f){i.e(f)}finally{i.f()}n(Object.values(c.weights[t]));case 6:case"end":return e.stop()}}),e)}))));case 9:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"hookOfGroup",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(Object.keys(this.groups).length){e.next=3;break}return e.next=3,this.captureGroups();case 3:return n=Object.keys(this.groups),e.next=6,this.crawler.eastmoney.startSse(n);case 6:return e.next=8,this.crawler.eastmoney.keepAlive();case 8:return e.abrupt("return",Object(a["a"])(regeneratorRuntime.mark((function e(){var a,c,i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.crawler.eastmoney.stocks(n);case 2:a=e.sent,c=Object(r["a"])(a);try{for(c.s();!(i=c.n()).done;)u=i.value,Object.assign(s.groups[u.code],u)}catch(o){c.e(o)}finally{c.f()}t(Object.values(s.groups));case 6:case"end":return e.stop()}}),e)}))));case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"hookOfGlobal",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(Object.keys(this.globals).length){e.next=3;break}return e.next=3,this.captureGlobals();case 3:return n=Object.keys(this.globals),e.next=6,this.crawler.sina.startWss(n);case 6:return e.abrupt("return",Object(a["a"])(regeneratorRuntime.mark((function e(){var a,c,i,u,o,f,h,p,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.crawler.sina.request(n);case 2:a=e.sent,c=Object(r["a"])(n),e.prev=4,c.s();case 6:if((i=c.n()).done){e.next=22;break}if(u=i.value,e.prev=8,a[u]){e.next=11;break}return e.abrupt("continue",20);case 11:o=a[u].split(","),f=void 0,h=void 0,p=void 0,l=void 0,f=o[0],["gb_dji","gb_ixic","gb_inx"].includes(u)?(h=+o[1],p=+o[2]):["sh000001","sz399001","sz399006"].includes(u)?(h=+o[3],l=+o[2],p=0===h?0:+((h-l)/l*100).toFixed(2)):"hkHSI"===u?(f=o[1],h=+o[6],p=+o[8]):(h=+o[1],p=+o[3]),s.globals[u]={code:u,name:f,price:h,change:p},e.next=20;break;case 18:e.prev=18,e.t0=e["catch"](8);case 20:e.next=6;break;case 22:e.next=27;break;case 24:e.prev=24,e.t1=e["catch"](4),c.e(e.t1);case 27:return e.prev=27,c.f(),e.finish(27);case 30:t(Object.values(s.globals));case 31:case"end":return e.stop()}}),e,null,[[4,24,27,30],[8,18]])}))));case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"start",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var r,s,c,i,u=this,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:function(){},e.prev=1,e.next=4,this.crawler.sina.stopWss();case 4:return e.next=6,this.crawler.eastmoney.stopSse();case 6:if(!this.isUseJsonp){e.next=11;break}c={group:function(){return u.captureGroups()},global:function(){return u.captureGlobals()},weight:function(){return u.captureWeight(n)}},s=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c[t]();case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=17;break;case 11:return i={group:function(){return u.hookOfGroup(r)},global:function(){return u.hookOfGlobal(r)},weight:function(){return u.hookOfWeight(n,r)}},e.next=14,i[t]();case 14:return s=e.sent,e.next=17,f(500);case 17:return e.next=19,s();case 19:clearInterval(this.intervel),this.intervel=setInterval(Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("."),s();case 2:case"end":return e.stop()}}),e)}))),5e3),e.next=26;break;case 23:e.prev=23,e.t0=e["catch"](1),console.warn("#Market# ",e.t0);case 26:case"end":return e.stop()}}),e,this,[[1,23]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"stop",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return clearInterval(this.intervel),e.next=3,this.crawler.sina.stopWss();case 3:return e.next=5,this.crawler.eastmoney.stopSse();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}();t["b"]=new h},b64b:function(e,t,n){var r=n("23e7"),a=n("7b0b"),s=n("df75"),c=n("d039"),i=c((function(){s(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(e){return s(a(e))}})}}]);