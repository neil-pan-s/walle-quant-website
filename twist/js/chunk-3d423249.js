(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d423249"],{"0c9c":function(e,t,c){},"51d8":function(e,t,c){"use strict";c.r(t);var n=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"twist"},[e.klines.length?c("ul",[c("li",{class:{red:e.ohlcv.close>=e.ohlcv.preclose,green:e.ohlcv.close<e.ohlcv.preclose}},[e._v(e._s(e.code.toUpperCase()))]),c("li",{class:{red:e.ohlcv.close>=e.ohlcv.preclose,green:e.ohlcv.close<e.ohlcv.preclose}},[e._v(e._s(e.ohlcv.close))]),c("li",{class:{selected:"min1"===e.level},on:{click:function(t){return e.switchLevel("min1")}}},[e._v(" 1F ")]),c("li",{class:{selected:"min5"===e.level},on:{click:function(t){return e.switchLevel("min5")}}},[e._v(" 5F ")]),c("li",{class:{selected:"min15"===e.level},on:{click:function(t){return e.switchLevel("min15")}}},[e._v(" 15F ")]),c("li",{class:{selected:"min30"===e.level},on:{click:function(t){return e.switchLevel("min30")}}},[e._v(" 30F ")]),c("li",{class:{selected:"min60"===e.level},on:{click:function(t){return e.switchLevel("min60")}}},[e._v(" 1H ")]),c("li",{class:{selected:"min120"===e.level},on:{click:function(t){return e.switchLevel("min120")}}},[e._v(" 2H ")]),c("li",{class:{selected:"min240"===e.level},on:{click:function(t){return e.switchLevel("min240")}}},[e._v(" 4H ")]),c("li",{class:{selected:"day"===e.level},on:{click:function(t){return e.switchLevel("day")}}},[e._v(" DAY ")]),c("li",{class:{selected:"week"===e.level},on:{click:function(t){return e.switchLevel("week")}}},[e._v(" WEEK ")]),c("li",{class:{selected:"month"===e.level},on:{click:function(t){return e.switchLevel("month")}}},[e._v(" MONTH ")])]):e._e(),c("ui-kchart",{ref:"kchart",staticClass:"ui-kchart",attrs:{"show-volume":e.isShowVolume,klines:e.klines,twist:e.twist}})],1)},l=[],s=(c("b151"),c("56d4")),i=c.n(s),r=(c("df26"),c("42c2")),o={data:function(){return{klines:[],twist:{},code:"",ohlcv:{},level:"min1",interval:null,isShowVolume:!1}},mounted:function(){var e=this;return Object(r["a"])(i.a.mark((function t(){var c,n,l,s,o,a;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=e.$route.query,n=c.level,l=void 0===n?"min1":n,s=c.volume,o=c.interval,a=e.$route.query.code||e.$route.params.code||"",e.code=a,e.level=l,o&&(e.interval=o),e.isShowVolume=!!s,t.next=8,window.__Walle_Stock_Twist.crawler.create(e.code);case 8:e.crawler=t.sent,e.crawler.loop(e.interval,Object(r["a"])(i.a.mark((function t(){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.updateChart(!1);case 1:case"end":return t.stop()}}),t)})))),setTimeout((function(){e.$nextTick((function(){return e.updateChart()}))}),1e3),setInterval(Object(r["a"])(i.a.mark((function t(){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.crawler.wss){t.next=4;break}return t.next=3,e.crawler.wss.ohlcv(e.code);case 3:e.ohlcv=t.sent;case 4:case"end":return t.stop()}}),t)}))),5e3);case 12:case"end":return t.stop()}}),t)})))()},destroyed:function(){this.crawler.stop()},methods:{switchLevel:function(e){this.level=e,this.updateChart()},updateChart:function(){var e=arguments,t=this;return Object(r["a"])(i.a.mark((function c(){var n;return i.a.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return n=!(e.length>0&&void 0!==e[0])||e[0],c.next=3,t.crawler[t.level]();case 3:t.klines=c.sent,t.twist=n?window.__Walle_Stock_Twist.processor.parse(t.klines):window.__Walle_Stock_Twist.processor.update(t.klines),t.$refs.kchart.update(t.klines,t.twist,n);case 6:case"end":return c.stop()}}),c)})))()}}},a=o,u=(c("696f"),c("2be6")),v=Object(u["a"])(a,n,l,!1,null,"5ea18dfc",null);t["default"]=v.exports},"696f":function(e,t,c){"use strict";var n=c("0c9c"),l=c.n(n);l.a}}]);