(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06c5eb7a"],{"085a":function(e,t,n){},"11f9":function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=65)}({0:function(e,t,n){"use strict";function i(e,t,n,i,s,r,o,a){var c,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):s&&(c=a?function(){s.call(this,this.$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:l}}n.d(t,"a",(function(){return i}))},10:function(e,t){e.exports=n("52e5")},11:function(e,t){e.exports=n("2200")},12:function(e,t){e.exports=n("6461")},14:function(e,t){e.exports=n("7822")},17:function(e,t){e.exports=n("ddf6")},22:function(e,t){e.exports=n("c86c")},3:function(e,t){e.exports=n("6d2c")},4:function(e,t){e.exports=n("0ba1")},5:function(e,t){e.exports=n("70d4")},65:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.close,expression:"close"}],staticClass:"el-autocomplete",attrs:{"aria-haspopup":"listbox",role:"combobox","aria-expanded":e.suggestionVisible,"aria-owns":e.id}},[n("el-input",e._b({ref:"input",on:{input:e.handleInput,change:e.handleChange,focus:e.handleFocus,blur:e.handleBlur,clear:e.handleClear},nativeOn:{keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;t.preventDefault(),e.highlight(e.highlightedIndex-1)},function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;t.preventDefault(),e.highlight(e.highlightedIndex+1)},function(t){return!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleKeyEnter(t)},function(t){return!("button"in t)&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.close(t)}]}},"el-input",[e.$props,e.$attrs],!1),[e.$slots.prepend?n("template",{slot:"prepend"},[e._t("prepend")],2):e._e(),e.$slots.append?n("template",{slot:"append"},[e._t("append")],2):e._e(),e.$slots.prefix?n("template",{slot:"prefix"},[e._t("prefix")],2):e._e(),e.$slots.suffix?n("template",{slot:"suffix"},[e._t("suffix")],2):e._e()],2),n("el-autocomplete-suggestions",{ref:"suggestions",class:[e.popperClass?e.popperClass:""],attrs:{"visible-arrow":"","popper-options":e.popperOptions,"append-to-body":e.popperAppendToBody,placement:e.placement,id:e.id}},e._l(e.suggestions,(function(t,i){return n("li",{key:i,class:{highlighted:e.highlightedIndex===i},attrs:{id:e.id+"-item-"+i,role:"option","aria-selected":e.highlightedIndex===i},on:{click:function(n){e.select(t)}}},[e._t("default",[e._v("\n        "+e._s(t[e.valueKey])+"\n      ")],{item:t})],2)})),0)],1)},s=[];i._withStripped=!0;var r=n(17),o=n.n(r),a=n(10),c=n.n(a),l=n(12),u=n.n(l),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"el-zoom-in-top"},on:{"after-leave":e.doDestroy}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showPopper,expression:"showPopper"}],staticClass:"el-autocomplete-suggestion el-popper",class:{"is-loading":!e.parent.hideLoading&&e.parent.loading},style:{width:e.dropdownWidth},attrs:{role:"region"}},[n("el-scrollbar",{attrs:{tag:"ul","wrap-class":"el-autocomplete-suggestion__wrap","view-class":"el-autocomplete-suggestion__list"}},[!e.parent.hideLoading&&e.parent.loading?n("li",[n("i",{staticClass:"el-icon-loading"})]):e._t("default")],2)],1)])},d=[];p._withStripped=!0;var h=n(5),f=n.n(h),g=n(4),v=n.n(g),w=n(14),m=n.n(w),b={components:{ElScrollbar:m.a},mixins:[f.a,v.a],componentName:"ElAutocompleteSuggestions",data:function(){return{parent:this.$parent,dropdownWidth:""}},props:{options:{default:function(){return{gpuAcceleration:!1}}},id:String},methods:{select:function(e){this.dispatch("ElAutocomplete","item-click",e)}},updated:function(){var e=this;this.$nextTick((function(t){e.popperJS&&e.updatePopper()}))},mounted:function(){this.$parent.popperElm=this.popperElm=this.$el,this.referenceElm=this.$parent.$refs.input.$refs.input||this.$parent.$refs.input.$refs.textarea,this.referenceList=this.$el.querySelector(".el-autocomplete-suggestion__list"),this.referenceList.setAttribute("role","listbox"),this.referenceList.setAttribute("id",this.id)},created:function(){var e=this;this.$on("visible",(function(t,n){e.dropdownWidth=n+"px",e.showPopper=t}))}},k=b,_=n(0),y=Object(_["a"])(k,p,d,!1,null,null,null);y.options.__file="packages/autocomplete/src/autocomplete-suggestions.vue";var x=y.exports,$=n(11),S=n.n($),C=n(3),I=n(22),O=n.n(I),T={name:"ElAutocomplete",mixins:[v.a,O()("input"),S.a],inheritAttrs:!1,componentName:"ElAutocomplete",components:{ElInput:c.a,ElAutocompleteSuggestions:x},directives:{Clickoutside:u.a},props:{valueKey:{type:String,default:"value"},popperClass:String,popperOptions:Object,placeholder:String,clearable:{type:Boolean,default:!1},disabled:Boolean,name:String,size:String,value:String,maxlength:Number,minlength:Number,autofocus:Boolean,fetchSuggestions:Function,triggerOnFocus:{type:Boolean,default:!0},customItem:String,selectWhenUnmatched:{type:Boolean,default:!1},prefixIcon:String,suffixIcon:String,label:String,debounce:{type:Number,default:300},placement:{type:String,default:"bottom-start"},hideLoading:Boolean,popperAppendToBody:{type:Boolean,default:!0},highlightFirstItem:{type:Boolean,default:!1}},data:function(){return{activated:!1,suggestions:[],loading:!1,highlightedIndex:-1,suggestionDisabled:!1}},computed:{suggestionVisible:function(){var e=this.suggestions,t=Array.isArray(e)&&e.length>0;return(t||this.loading)&&this.activated},id:function(){return"el-autocomplete-"+Object(C["generateId"])()}},watch:{suggestionVisible:function(e){var t=this.getInput();t&&this.broadcast("ElAutocompleteSuggestions","visible",[e,t.offsetWidth])}},methods:{getMigratingConfig:function(){return{props:{"custom-item":"custom-item is removed, use scoped slot instead.",props:"props is removed, use value-key instead."}}},getData:function(e){var t=this;this.suggestionDisabled||(this.loading=!0,this.fetchSuggestions(e,(function(e){t.loading=!1,t.suggestionDisabled||(Array.isArray(e)?(t.suggestions=e,t.highlightedIndex=t.highlightFirstItem?0:-1):console.error("[Element Error][Autocomplete]autocomplete suggestions must be an array"))})))},handleInput:function(e){if(this.$emit("input",e),this.suggestionDisabled=!1,!this.triggerOnFocus&&!e)return this.suggestionDisabled=!0,void(this.suggestions=[]);this.debouncedGetData(e)},handleChange:function(e){this.$emit("change",e)},handleFocus:function(e){this.activated=!0,this.$emit("focus",e),this.triggerOnFocus&&this.debouncedGetData(this.value)},handleBlur:function(e){this.$emit("blur",e)},handleClear:function(){this.activated=!1,this.$emit("clear")},close:function(e){this.activated=!1},handleKeyEnter:function(e){var t=this;this.suggestionVisible&&this.highlightedIndex>=0&&this.highlightedIndex<this.suggestions.length?(e.preventDefault(),this.select(this.suggestions[this.highlightedIndex])):this.selectWhenUnmatched&&(this.$emit("select",{value:this.value}),this.$nextTick((function(e){t.suggestions=[],t.highlightedIndex=-1})))},select:function(e){var t=this;this.$emit("input",e[this.valueKey]),this.$emit("select",e),this.$nextTick((function(e){t.suggestions=[],t.highlightedIndex=-1}))},highlight:function(e){if(this.suggestionVisible&&!this.loading)if(e<0)this.highlightedIndex=-1;else{e>=this.suggestions.length&&(e=this.suggestions.length-1);var t=this.$refs.suggestions.$el.querySelector(".el-autocomplete-suggestion__wrap"),n=t.querySelectorAll(".el-autocomplete-suggestion__list li"),i=n[e],s=t.scrollTop,r=i.offsetTop;r+i.scrollHeight>s+t.clientHeight&&(t.scrollTop+=i.scrollHeight),r<s&&(t.scrollTop-=i.scrollHeight),this.highlightedIndex=e;var o=this.getInput();o.setAttribute("aria-activedescendant",this.id+"-item-"+this.highlightedIndex)}},getInput:function(){return this.$refs.input.getInput()}},mounted:function(){var e=this;this.debouncedGetData=o()(this.debounce,this.getData),this.$on("item-click",(function(t){e.select(t)}));var t=this.getInput();t.setAttribute("role","textbox"),t.setAttribute("aria-autocomplete","list"),t.setAttribute("aria-controls","id"),t.setAttribute("aria-activedescendant",this.id+"-item-"+this.highlightedIndex)},beforeDestroy:function(){this.$refs.suggestions.$destroy()}},E=T,A=Object(_["a"])(E,i,s,!1,null,null,null);A.options.__file="packages/autocomplete/src/autocomplete.vue";var j=A.exports;j.install=function(e){e.component(j.name,j)};t["default"]=j}})},"1e6d":function(e,t,n){"use strict";var i=n("933b"),s=n.n(i);s.a},"3fbd":function(e,t,n){"use strict";var i=n("085a"),s=n.n(i);s.a},"79ae":function(e,t,n){},"933b":function(e,t,n){},bad6:function(e,t){e.exports=function(e,t,n,i){var s,r=0;function o(){var o=this,a=Number(new Date)-r,c=arguments;function l(){r=Number(new Date),n.apply(o,c)}function u(){s=void 0}i&&!s&&l(),s&&clearTimeout(s),void 0===i&&a>e?l():!0!==t&&(s=setTimeout(i?u:l,void 0===i?e-a:e))}return"boolean"!==typeof t&&(i=n,n=t,t=void 0),o}},c86c:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return{methods:{focus:function(){this.$refs[e].focus()}}}}},d105:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"twist"},[e.twist.playback&&e.twist.playback.isInit?n("div",{staticClass:"playback-icon",attrs:{title:"行情回放"}},[e._v("●")]):e._e(),n("ul",{staticClass:"nav"},[e.ohlcv.close?n("ul",{staticClass:"info"},[n("li",{class:{red:e.ohlcv.close>=e.ohlcv.preclose,green:e.ohlcv.close<e.ohlcv.preclose}},[e._v(e._s(e.code.toUpperCase()))]),n("li",{class:{red:e.ohlcv.close>=e.ohlcv.preclose,green:e.ohlcv.close<e.ohlcv.preclose}},[e._v(e._s(e.ohlcv.name))]),n("li",{class:{red:e.ohlcv.close>=e.ohlcv.preclose,green:e.ohlcv.close<e.ohlcv.preclose}},[e._v(e._s((+e.ohlcv.close).toFixed(2)))]),n("li",{class:{red:e.ohlcv.close>=e.ohlcv.preclose,green:e.ohlcv.close<e.ohlcv.preclose}},[e._v(e._s(((e.ohlcv.close-e.ohlcv.preclose)/e.ohlcv.preclose*100).toFixed(2))+"%")])]):e._e(),n("li",{class:{selected:"sec5"===e.level},on:{click:function(t){return e.switchLevel("sec5")}}},[e._v(" 5S ")]),n("li",{class:{selected:"sec15"===e.level},on:{click:function(t){return e.switchLevel("sec15")}}},[e._v(" 15S ")]),n("li",{class:{selected:"sec30"===e.level},on:{click:function(t){return e.switchLevel("sec30")}}},[e._v(" 30S ")]),n("li",{class:{selected:"min1"===e.level},on:{click:function(t){return e.switchLevel("min1")}}},[e._v(" 1M ")]),n("li",{class:{selected:"min5"===e.level},on:{click:function(t){return e.switchLevel("min5")}}},[e._v(" 5M ")]),n("li",{class:{selected:"min15"===e.level},on:{click:function(t){return e.switchLevel("min15")}}},[e._v(" 15M ")]),n("li",{class:{selected:"min30"===e.level},on:{click:function(t){return e.switchLevel("min30")}}},[e._v(" 30M ")]),n("li",{class:{selected:"min60"===e.level},on:{click:function(t){return e.switchLevel("min60")}}},[e._v(" 1H ")]),n("li",{class:{selected:"min120"===e.level},on:{click:function(t){return e.switchLevel("min120")}}},[e._v(" 2H ")]),n("li",{class:{selected:"min240"===e.level},on:{click:function(t){return e.switchLevel("min240")}}},[e._v(" 4H ")]),n("li",{class:{selected:"day"===e.level},on:{click:function(t){return e.switchLevel("day")}}},[e._v(" DAY ")]),n("li",{class:{selected:"week"===e.level},on:{click:function(t){return e.switchLevel("week")}}},[e._v(" WEEK ")]),n("li",{class:{selected:"month"===e.level},on:{click:function(t){return e.switchLevel("month")}}},[e._v(" MONTH ")]),this.code?n("li",{on:{keydown:function(e){e.stopPropagation()}}},[n("el-autocomplete",{staticClass:"suggest inline-input",attrs:{"prefix-icon":"el-icon-search","fetch-suggestions":e.onQuerySuggest,placeholder:"","trigger-on-focus":!1},on:{select:e.onSelectSuggest},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return[n("div",{on:{click:function(t){return t.ctrlKey?(t.stopPropagation(),e.onSelectSuggestCtrl(i)):null}}},[e._v(e._s(i.value))])]}}],null,!1,2339109331),model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1):e._e()]),e.report?n("ul",{staticClass:"nav"},[n("ul",{staticClass:"info"},[n("li",{class:{red:e.report.change>0,green:e.report.change<=0}},[e._v(e._s(e.code.toUpperCase())+" "+e._s(e.level.toUpperCase()))]),n("li",{class:{red:e.report.change>0,green:e.report.change<=0}},[e._v("交易次数: "+e._s(e.report.time))]),n("li",{class:{red:e.report.change>0,green:e.report.change<=0}},[e._v("涨幅收益: "+e._s(e.report.change)+"% ")]),n("li",{class:{red:e.report.profit>0,green:e.report.profit<=0}},[e._v("点数收益: "+e._s(e.report.profit)+" ")]),n("li",{class:{red:e.report.winrate>0,green:e.report.winrate<=0}},[e._v("胜率: "+e._s(e.report.winrate)+"% ")]),n("li",{class:{red:e.report.earnrate>0,green:e.report.earnrate<=0}},[e._v("平均收益率: "+e._s(e.report.earnrate)+"% ")])])]):e._e(),n("ui-kchart",{ref:"kchart",staticClass:"ui-kchart",attrs:{"show-volume":e.isShowVolume}})],1)},s=[],r=(n("d6de"),n("8d0f"),n("68b8"),n("d86f"),n("8d0d"),n("beb4"),n("33ef"),n("868d"),n("11fd"),n("ef1f"),n("2aa5"),n("c78b"),n("f3b8"),n("32f5"),n("defa"),n("918c"),n("b151"),n("0b38")),o=n("cf28"),a=n("56d4"),c=n.n(a),l=(n("df26"),n("42c2")),u=(n("79ae"),n("148d"),n("11f9")),p=n.n(u),d=n("f9b5"),h=n("4f2b");h["default"].prototype.$ELEMENT={size:"mini",zIndex:3e3},h["default"].component(p.a.name,p.a);var f=window.top.__Walle_Devtools,g={data:function(){return{keywords:"",klines:[],twist:{},report:null,key:"",code:"",ohlcv:{},level:"min1",interval:null,isShowVolume:!1}},mounted:function(){var e=this;return Object(l["a"])(c.a.mark((function t(){var n,i,s,r,o;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$route.query,i=n.level,s=void 0===i?"min1":i,r=n.volume,o=n.interval,e.key=e.$route.query.key||"",e.code=e.$route.params.code||"sh000300",e.code.toLowerCase().startsWith("sh")||e.code.toLowerCase().startsWith("sz")||d["a"].isVip()){t.next=6;break}return d["a"].notification("加密货币&期货行情需开通VIP服务 请联系客服微信 one0press"),t.abrupt("return");case 6:if(e.level=s,o&&(e.interval=o),e.isShowVolume=!!r,e.ohlcv={},void 0===e.$route.query.backtest){t.next=14;break}return t.next=13,e.initBacktest();case 13:return t.abrupt("return");case 14:return t.next=16,e.init();case 16:return t.next=18,e.initPlayback();case 18:return t.next=20,e.initNotification();case 20:case"end":return t.stop()}}),t)})))()},destroyed:function(){this.twist.crawler&&this.twist.crawler.stop()},methods:{init:function(){var e=this;return Object(l["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.twist.crawler&&e.twist.crawler.stop(),e.twist=window.__Walle_Stock_Twist.create(e.code),t.next=4,e.twist.crawler.loop(e.interval,Object(l["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.twist.playback.isInit){t.next=2;break}return t.abrupt("return");case 2:e.updateChart({isZoom:!1});case 3:case"end":return t.stop()}}),t)}))));case 4:return t.next=6,e.twist.crawler.ohlcv((function(t){e.ohlcv=t}));case 6:setTimeout((function(){e.$nextTick((function(){return e.updateChart({isZoom:!0})}))}),1e3);case 7:case"end":return t.stop()}}),t)})))()},initPlayback:function(){var e=this;return Object(l["a"])(c.a.mark((function t(){var n,i;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(d["a"].isVip()){t.next=2;break}return t.abrupt("return");case 2:n=e.$route.query.offset||-240,i=e.$route.query.speed||1e3,e.twist.playback.reset({offset:n,speed:i}),e.twist.playback.hook("klines",Object(l["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.twist.crawler.kline(e.level));case 1:case"end":return t.stop()}}),t)})))),e.twist.playback.listen(),e.twist.playback.on("start",(function(t,n){e.twist.strategy.reset(),e.updateChart({klines:n,isZoom:!0})})),e.twist.playback.on("update",(function(t,n){return e.updateChart({klines:n,isZoom:!1})})),e.twist.playback.on("end",(function(){return e.updateChart({isZoom:!0})})),e.twist.playback.on("quit",(function(){e.twist.strategy.reset(),e.updateChart({isZoom:!0})}));case 11:case"end":return t.stop()}}),t)})))()},initBacktest:function(){var e=this;return Object(l["a"])(c.a.mark((function t(){var n,i,s,r,o;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(f){t.next=2;break}return t.abrupt("return");case 2:return n=e.$route.query.backtest||"default",i=e.$route.query.level||"min5",s=e.$route.query.direction||"up",r=window.__Walle_Stock_Twist.create(e.code),t.next=8,r.crawler.kline(i);case 8:return o=t.sent,t.next=11,r.backtest.run({klines:o,name:n});case 11:e.report=r.backtest.toReport(s),e.$refs.kchart&&e.$refs.kchart.update(o,r.backtest.toPoints(),!0);case 13:case"end":return t.stop()}}),t)})))()},initNotification:function(){var e=this;return Object(l["a"])(c.a.mark((function t(){var n;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(f){t.next=2;break}return t.abrupt("return");case 2:n=function(t,n){var i=n.type,s=(n.kline,n.tip);i="buy"===i?"B":"S";var r="TWIST TRADE NOTIFICATION",o="".concat(e.code.toUpperCase()," ").concat(e.ohlcv.name," ").concat((+e.ohlcv.close).toFixed(2)," ").concat(e.level.toUpperCase()," ").concat(i," ").concat(s);e.level.includes("sec")||(e.twist.notification.show(r,o),e.twist.playback.isInit||e.twist.notification.sendWxwork("",o))},e.twist.strategy.on("buy",(function(){return n.apply(void 0,arguments)})),e.twist.strategy.on("sell",(function(){return n.apply(void 0,arguments)}));case 5:case"end":return t.stop()}}),t)})))()},onQuerySuggest:function(e,t){return Object(l["a"])(c.a.mark((function n(){var i,s,r,a,l,u,p,d,h,f,g,v,w,m,b,k,_,y;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([window.__Walle_Stock_Twist.Crawler.huobi.suggest(e),window.__Walle_Stock_Twist.Crawler.okex.suggest(e),window.__Walle_Stock_Twist.Crawler.sina.suggest(e)]);case 2:for(i=n.sent,s=Object(o["a"])(i,3),r=s[0],s[1],a=s[2],l=[],u=!0,p=!1,d=void 0,n.prev=11,h=r[Symbol.iterator]();!(u=(f=h.next()).done);u=!0)g=f.value,v=g.symbol.replace("huobi-",""),l.push({value:g.name+" "+v.toUpperCase(),name:g.name,code:v});n.next=19;break;case 15:n.prev=15,n.t0=n["catch"](11),p=!0,d=n.t0;case 19:n.prev=19,n.prev=20,u||null==h["return"]||h["return"]();case 22:if(n.prev=22,!p){n.next=25;break}throw d;case 25:return n.finish(22);case 26:return n.finish(19);case 27:for(w=!0,m=!1,b=void 0,n.prev=30,k=a[Symbol.iterator]();!(w=(_=k.next()).done);w=!0)y=_.value,l.push({value:y.name+" "+y.code.toUpperCase(),name:y.name,code:y.code});n.next=38;break;case 34:n.prev=34,n.t1=n["catch"](30),m=!0,b=n.t1;case 38:n.prev=38,n.prev=39,w||null==k["return"]||k["return"]();case 41:if(n.prev=41,!m){n.next=44;break}throw b;case 44:return n.finish(41);case 45:return n.finish(38);case 46:t(l);case 47:case"end":return n.stop()}}),n,null,[[11,15,19,27],[20,,22,26],[30,34,38,46],[39,,41,45]])})))()},onSelectSuggest:function(e){var t=this;return Object(l["a"])(c.a.mark((function n(){var i;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.name,i=e.code,i.toLowerCase().startsWith("sh")||i.toLowerCase().startsWith("sz")||d["a"].isVip()){n.next=4;break}return d["a"].notification("加密货币&期货行情需开通VIP服务 请联系客服微信 one0press"),n.abrupt("return");case 4:return t.keywords="",t.code=i,t.$router.push({name:"twist",params:{code:i},query:t.$route.query}),n.next=9,t.twist.playback.quit();case 9:return n.next=11,t.init();case 11:return n.next=13,t.initPlayback();case 13:return n.next=15,t.initNotification();case 15:case"end":return n.stop()}}),n)})))()},onSelectSuggestCtrl:function(e){var t=this;return Object(l["a"])(c.a.mark((function n(){var i,s,r,o;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.name,i=e.code,t.keywords="",s=window.top.location.origin+window.top.location.pathname,r=t.$router.resolve({name:"twist",params:{code:i},query:t.$route.query}),o=r.href.slice(r.href.indexOf("#")),window.open(s+o);case 6:case"end":return n.stop()}}),n)})))()},switchLevel:function(e){!["sec5","sec15","sec30"].includes(e)||d["a"].isVip()?(this.level=e,this.twist.strategy.reset(),this.twist.playback.quit(),this.updateChart({isZoom:!0})):d["a"].notification("秒级别K线需开通VIP服务 请联系客服微信 one0press")},updateChart:function(e){var t=this;return Object(l["a"])(c.a.mark((function n(){var i,s,o,a,l,u,p,d,h,g;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e.klines,s=void 0===i?null:i,o=e.isZoom,a=void 0===o||o,s){n.next=5;break}return n.next=4,t.twist.crawler.kline(t.level);case 4:s=n.sent;case 5:if(s.length){n.next=9;break}return t.klines=[],t.$refs.kchart&&t.$refs.kchart.showLoading(),n.abrupt("return");case 9:s=s.slice(-5e3);try{l=a?t.twist.processor.parse(s):t.twist.processor.update(s),u=t.twist.processor.state(),t.twist.strategy.process(s,l,u),p=t.twist.processor.toPoints(),d=f?t.twist.processor.sequence():[],h=f?t.twist.processor.line():[],g=f?t.twist.strategy.toPoints(s):[],!t.klines.length&&s.length&&(a=!0),t.klines=s,t.$refs.kchart&&t.$refs.kchart.update(s,Object(r["a"])({},p,{pin:g,line:h,sequence:d}),a)}catch(c){!t.klines.length&&s.length&&(a=!0),t.klines=s,t.$refs.kchart&&t.$refs.kchart.update(s,null,a)}case 11:case"end":return n.stop()}}),n)})))()}}},v=g,w=(n("1e6d"),n("3fbd"),n("2be6")),m=Object(w["a"])(v,i,s,!1,null,"325af550",null);t["default"]=m.exports},ddf6:function(e,t,n){var i=n("bad6");e.exports=function(e,t,n){return void 0===n?i(e,t,!1):i(e,n,!1!==t)}}}]);