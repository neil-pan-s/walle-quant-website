(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0454cb50"],{"0669":function(e,t,n){"use strict";var i=n("8dc9"),r=n.n(i);r.a},"085a":function(e,t,n){},"11f9":function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=65)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,o,s,a){var c,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}n.d(t,"a",(function(){return i}))},10:function(e,t){e.exports=n("52e5")},11:function(e,t){e.exports=n("2200")},12:function(e,t){e.exports=n("6461")},14:function(e,t){e.exports=n("7822")},17:function(e,t){e.exports=n("ddf6")},22:function(e,t){e.exports=n("c86c")},3:function(e,t){e.exports=n("6d2c")},4:function(e,t){e.exports=n("0ba1")},5:function(e,t){e.exports=n("70d4")},65:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.close,expression:"close"}],staticClass:"el-autocomplete",attrs:{"aria-haspopup":"listbox",role:"combobox","aria-expanded":e.suggestionVisible,"aria-owns":e.id}},[n("el-input",e._b({ref:"input",on:{input:e.handleInput,change:e.handleChange,focus:e.handleFocus,blur:e.handleBlur,clear:e.handleClear},nativeOn:{keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;t.preventDefault(),e.highlight(e.highlightedIndex-1)},function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;t.preventDefault(),e.highlight(e.highlightedIndex+1)},function(t){return!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleKeyEnter(t)},function(t){return!("button"in t)&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.close(t)}]}},"el-input",[e.$props,e.$attrs],!1),[e.$slots.prepend?n("template",{slot:"prepend"},[e._t("prepend")],2):e._e(),e.$slots.append?n("template",{slot:"append"},[e._t("append")],2):e._e(),e.$slots.prefix?n("template",{slot:"prefix"},[e._t("prefix")],2):e._e(),e.$slots.suffix?n("template",{slot:"suffix"},[e._t("suffix")],2):e._e()],2),n("el-autocomplete-suggestions",{ref:"suggestions",class:[e.popperClass?e.popperClass:""],attrs:{"visible-arrow":"","popper-options":e.popperOptions,"append-to-body":e.popperAppendToBody,placement:e.placement,id:e.id}},e._l(e.suggestions,(function(t,i){return n("li",{key:i,class:{highlighted:e.highlightedIndex===i},attrs:{id:e.id+"-item-"+i,role:"option","aria-selected":e.highlightedIndex===i},on:{click:function(n){e.select(t)}}},[e._t("default",[e._v("\n        "+e._s(t[e.valueKey])+"\n      ")],{item:t})],2)})),0)],1)},r=[];i._withStripped=!0;var o=n(17),s=n.n(o),a=n(10),c=n.n(a),l=n(12),u=n.n(l),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"el-zoom-in-top"},on:{"after-leave":e.doDestroy}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showPopper,expression:"showPopper"}],staticClass:"el-autocomplete-suggestion el-popper",class:{"is-loading":!e.parent.hideLoading&&e.parent.loading},style:{width:e.dropdownWidth},attrs:{role:"region"}},[n("el-scrollbar",{attrs:{tag:"ul","wrap-class":"el-autocomplete-suggestion__wrap","view-class":"el-autocomplete-suggestion__list"}},[!e.parent.hideLoading&&e.parent.loading?n("li",[n("i",{staticClass:"el-icon-loading"})]):e._t("default")],2)],1)])},p=[];d._withStripped=!0;var h=n(5),f=n.n(h),v=n(4),m=n.n(v),g=n(14),w=n.n(g),b={components:{ElScrollbar:w.a},mixins:[f.a,m.a],componentName:"ElAutocompleteSuggestions",data:function(){return{parent:this.$parent,dropdownWidth:""}},props:{options:{default:function(){return{gpuAcceleration:!1}}},id:String},methods:{select:function(e){this.dispatch("ElAutocomplete","item-click",e)}},updated:function(){var e=this;this.$nextTick((function(t){e.popperJS&&e.updatePopper()}))},mounted:function(){this.$parent.popperElm=this.popperElm=this.$el,this.referenceElm=this.$parent.$refs.input.$refs.input||this.$parent.$refs.input.$refs.textarea,this.referenceList=this.$el.querySelector(".el-autocomplete-suggestion__list"),this.referenceList.setAttribute("role","listbox"),this.referenceList.setAttribute("id",this.id)},created:function(){var e=this;this.$on("visible",(function(t,n){e.dropdownWidth=n+"px",e.showPopper=t}))}},_=b,y=n(0),k=Object(y["a"])(_,d,p,!1,null,null,null);k.options.__file="packages/autocomplete/src/autocomplete-suggestions.vue";var x=k.exports,S=n(11),C=n.n(S),$=n(3),E=n(22),O=n.n(E),T={name:"ElAutocomplete",mixins:[m.a,O()("input"),C.a],inheritAttrs:!1,componentName:"ElAutocomplete",components:{ElInput:c.a,ElAutocompleteSuggestions:x},directives:{Clickoutside:u.a},props:{valueKey:{type:String,default:"value"},popperClass:String,popperOptions:Object,placeholder:String,clearable:{type:Boolean,default:!1},disabled:Boolean,name:String,size:String,value:String,maxlength:Number,minlength:Number,autofocus:Boolean,fetchSuggestions:Function,triggerOnFocus:{type:Boolean,default:!0},customItem:String,selectWhenUnmatched:{type:Boolean,default:!1},prefixIcon:String,suffixIcon:String,label:String,debounce:{type:Number,default:300},placement:{type:String,default:"bottom-start"},hideLoading:Boolean,popperAppendToBody:{type:Boolean,default:!0},highlightFirstItem:{type:Boolean,default:!1}},data:function(){return{activated:!1,suggestions:[],loading:!1,highlightedIndex:-1,suggestionDisabled:!1}},computed:{suggestionVisible:function(){var e=this.suggestions,t=Array.isArray(e)&&e.length>0;return(t||this.loading)&&this.activated},id:function(){return"el-autocomplete-"+Object($["generateId"])()}},watch:{suggestionVisible:function(e){var t=this.getInput();t&&this.broadcast("ElAutocompleteSuggestions","visible",[e,t.offsetWidth])}},methods:{getMigratingConfig:function(){return{props:{"custom-item":"custom-item is removed, use scoped slot instead.",props:"props is removed, use value-key instead."}}},getData:function(e){var t=this;this.suggestionDisabled||(this.loading=!0,this.fetchSuggestions(e,(function(e){t.loading=!1,t.suggestionDisabled||(Array.isArray(e)?(t.suggestions=e,t.highlightedIndex=t.highlightFirstItem?0:-1):console.error("[Element Error][Autocomplete]autocomplete suggestions must be an array"))})))},handleInput:function(e){if(this.$emit("input",e),this.suggestionDisabled=!1,!this.triggerOnFocus&&!e)return this.suggestionDisabled=!0,void(this.suggestions=[]);this.debouncedGetData(e)},handleChange:function(e){this.$emit("change",e)},handleFocus:function(e){this.activated=!0,this.$emit("focus",e),this.triggerOnFocus&&this.debouncedGetData(this.value)},handleBlur:function(e){this.$emit("blur",e)},handleClear:function(){this.activated=!1,this.$emit("clear")},close:function(e){this.activated=!1},handleKeyEnter:function(e){var t=this;this.suggestionVisible&&this.highlightedIndex>=0&&this.highlightedIndex<this.suggestions.length?(e.preventDefault(),this.select(this.suggestions[this.highlightedIndex])):this.selectWhenUnmatched&&(this.$emit("select",{value:this.value}),this.$nextTick((function(e){t.suggestions=[],t.highlightedIndex=-1})))},select:function(e){var t=this;this.$emit("input",e[this.valueKey]),this.$emit("select",e),this.$nextTick((function(e){t.suggestions=[],t.highlightedIndex=-1}))},highlight:function(e){if(this.suggestionVisible&&!this.loading)if(e<0)this.highlightedIndex=-1;else{e>=this.suggestions.length&&(e=this.suggestions.length-1);var t=this.$refs.suggestions.$el.querySelector(".el-autocomplete-suggestion__wrap"),n=t.querySelectorAll(".el-autocomplete-suggestion__list li"),i=n[e],r=t.scrollTop,o=i.offsetTop;o+i.scrollHeight>r+t.clientHeight&&(t.scrollTop+=i.scrollHeight),o<r&&(t.scrollTop-=i.scrollHeight),this.highlightedIndex=e;var s=this.getInput();s.setAttribute("aria-activedescendant",this.id+"-item-"+this.highlightedIndex)}},getInput:function(){return this.$refs.input.getInput()}},mounted:function(){var e=this;this.debouncedGetData=s()(this.debounce,this.getData),this.$on("item-click",(function(t){e.select(t)}));var t=this.getInput();t.setAttribute("role","textbox"),t.setAttribute("aria-autocomplete","list"),t.setAttribute("aria-controls","id"),t.setAttribute("aria-activedescendant",this.id+"-item-"+this.highlightedIndex)},beforeDestroy:function(){this.$refs.suggestions.$destroy()}},I=T,j=Object(y["a"])(I,i,r,!1,null,null,null);j.options.__file="packages/autocomplete/src/autocomplete.vue";var A=j.exports;A.install=function(e){e.component(A.name,A)};t["default"]=A}})},"2b43":function(e,t,n){"use strict";n("841a"),n("33ef"),n("11ed");var i=n("56d4"),r=n.n(i),o=(n("df26"),n("42c2")),s=(n("6770"),n("148d"),n("e3ca")),a=n.n(s),c=n("f5f2"),l=n("30c6"),u=n("ce37"),d=function(){function e(){Object(c["a"])(this,e),Object(u["a"])(this,"isLoaded",!1),Object(u["a"])(this,"follow",[]),Object(u["a"])(this,"histroy",[]),this.load()}return Object(l["a"])(e,[{key:"target",value:function(e){var t;return"follow"===e&&(t=this.follow),"histroy"===e&&(t=this.histroy),t}},{key:"find",value:function(e,t,n){var i=this.target(e);if(!i)return-1;for(var r=-1,o=0;o<i.length;o++)if(i[o].code===t){r=o;break}return r}},{key:"has",value:function(e,t,n){return-1!==this.find(e,t,n)}},{key:"insert",value:function(e,t,n){var i=this.target(e);if(i)if(n=n||t,"follow"===e&&i.length>50)a.a.info("关注标的不可超过50个标的");else{if("follow"===e){var r=this.find("follow",t,n);if(-1!==r)return;i.unshift({code:t,name:n})}if("histroy"===e){var o=this.find("histroy",t,n);-1===o||i.splice(o,1),i.unshift({code:t,name:n})}"histroy"===e&&i.length>50&&(i=i.slice(0,50)),this.save()}}},{key:"remove",value:function(e,t,n){var i=this.target(e);if(i){var r=this.find(e,t,n);-1!==r&&(i.splice(r,1),this.save())}}},{key:"load",value:function(){var e=Object(o["a"])(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=localStorage.getItem("TWIST_QUANT_WATCHLIST_DATA"),t&&(n=JSON.parse(t),this.follow=n.follow,this.histroy=n.histroy),this.isLoaded=!0;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"save",value:function(){var e=Object(o["a"])(r.a.mark((function e(){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",localStorage.setItem("TWIST_QUANT_WATCHLIST_DATA",JSON.stringify({follow:this.follow,histroy:this.histroy})));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}();t["a"]=new d},"3fbd":function(e,t,n){"use strict";var i=n("085a"),r=n.n(i);r.a},4303:function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=128)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,o,s,a){var c,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}n.d(t,"a",(function(){return i}))},11:function(e,t){e.exports=n("2200")},12:function(e,t){e.exports=n("6461")},128:function(e,t,n){"use strict";n.r(t);var i,r,o=n(12),s=n.n(o),a=n(4),c=n.n(a),l=n(11),u=n.n(l),d=n(13),p=n.n(d),h=n(35),f=n.n(h),v=n(3),m={name:"ElDropdown",componentName:"ElDropdown",mixins:[c.a,u.a],directives:{Clickoutside:s.a},components:{ElButton:p.a,ElButtonGroup:f.a},provide:function(){return{dropdown:this}},props:{trigger:{type:String,default:"hover"},type:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},placement:{type:String,default:"bottom-end"},visibleArrow:{default:!0},showTimeout:{type:Number,default:250},hideTimeout:{type:Number,default:150},tabindex:{type:Number,default:0}},data:function(){return{timeout:null,visible:!1,triggerElm:null,menuItems:null,menuItemsArray:null,dropdownElm:null,focusing:!1,listId:"dropdown-menu-"+Object(v["generateId"])()}},computed:{dropdownSize:function(){return this.size||(this.$ELEMENT||{}).size}},mounted:function(){this.$on("menu-item-click",this.handleMenuItemClick)},watch:{visible:function(e){this.broadcast("ElDropdownMenu","visible",e),this.$emit("visible-change",e)},focusing:function(e){var t=this.$el.querySelector(".el-dropdown-selfdefine");t&&(e?t.className+=" focusing":t.className=t.className.replace("focusing",""))}},methods:{getMigratingConfig:function(){return{props:{"menu-align":"menu-align is renamed to placement."}}},show:function(){var e=this;this.triggerElm.disabled||(clearTimeout(this.timeout),this.timeout=setTimeout((function(){e.visible=!0}),"click"===this.trigger?0:this.showTimeout))},hide:function(){var e=this;this.triggerElm.disabled||(this.removeTabindex(),this.tabindex>=0&&this.resetTabindex(this.triggerElm),clearTimeout(this.timeout),this.timeout=setTimeout((function(){e.visible=!1}),"click"===this.trigger?0:this.hideTimeout))},handleClick:function(){this.triggerElm.disabled||(this.visible?this.hide():this.show())},handleTriggerKeyDown:function(e){var t=e.keyCode;[38,40].indexOf(t)>-1?(this.removeTabindex(),this.resetTabindex(this.menuItems[0]),this.menuItems[0].focus(),e.preventDefault(),e.stopPropagation()):13===t?this.handleClick():[9,27].indexOf(t)>-1&&this.hide()},handleItemKeyDown:function(e){var t=e.keyCode,n=e.target,i=this.menuItemsArray.indexOf(n),r=this.menuItemsArray.length-1,o=void 0;[38,40].indexOf(t)>-1?(o=38===t?0!==i?i-1:0:i<r?i+1:r,this.removeTabindex(),this.resetTabindex(this.menuItems[o]),this.menuItems[o].focus(),e.preventDefault(),e.stopPropagation()):13===t?(this.triggerElmFocus(),n.click(),this.hideOnClick&&(this.visible=!1)):[9,27].indexOf(t)>-1&&(this.hide(),this.triggerElmFocus())},resetTabindex:function(e){this.removeTabindex(),e.setAttribute("tabindex","0")},removeTabindex:function(){this.triggerElm.setAttribute("tabindex","-1"),this.menuItemsArray.forEach((function(e){e.setAttribute("tabindex","-1")}))},initAria:function(){this.dropdownElm.setAttribute("id",this.listId),this.triggerElm.setAttribute("aria-haspopup","list"),this.triggerElm.setAttribute("aria-controls",this.listId),this.splitButton||(this.triggerElm.setAttribute("role","button"),this.triggerElm.setAttribute("tabindex",this.tabindex),this.triggerElm.setAttribute("class",(this.triggerElm.getAttribute("class")||"")+" el-dropdown-selfdefine"))},initEvent:function(){var e=this,t=this.trigger,n=this.show,i=this.hide,r=this.handleClick,o=this.splitButton,s=this.handleTriggerKeyDown,a=this.handleItemKeyDown;this.triggerElm=o?this.$refs.trigger.$el:this.$slots.default[0].elm;var c=this.dropdownElm;this.triggerElm.addEventListener("keydown",s),c.addEventListener("keydown",a,!0),o||(this.triggerElm.addEventListener("focus",(function(){e.focusing=!0})),this.triggerElm.addEventListener("blur",(function(){e.focusing=!1})),this.triggerElm.addEventListener("click",(function(){e.focusing=!1}))),"hover"===t?(this.triggerElm.addEventListener("mouseenter",n),this.triggerElm.addEventListener("mouseleave",i),c.addEventListener("mouseenter",n),c.addEventListener("mouseleave",i)):"click"===t&&this.triggerElm.addEventListener("click",r)},handleMenuItemClick:function(e,t){this.hideOnClick&&(this.visible=!1),this.$emit("command",e,t)},triggerElmFocus:function(){this.triggerElm.focus&&this.triggerElm.focus()},initDomOperation:function(){this.dropdownElm=this.popperElm,this.menuItems=this.dropdownElm.querySelectorAll("[tabindex='-1']"),this.menuItemsArray=[].slice.call(this.menuItems),this.initEvent(),this.initAria()}},render:function(e){var t=this,n=this.hide,i=this.splitButton,r=this.type,o=this.dropdownSize,s=function(e){t.$emit("click",e),n()},a=i?e("el-button-group",[e("el-button",{attrs:{type:r,size:o},nativeOn:{click:s}},[this.$slots.default]),e("el-button",{ref:"trigger",attrs:{type:r,size:o},class:"el-dropdown__caret-button"},[e("i",{class:"el-dropdown__icon el-icon-arrow-down"})])]):this.$slots.default;return e("div",{class:"el-dropdown",directives:[{name:"clickoutside",value:n}]},[a,this.$slots.dropdown])}},g=m,w=n(0),b=Object(w["a"])(g,i,r,!1,null,null,null);b.options.__file="packages/dropdown/src/dropdown.vue";var _=b.exports;_.install=function(e){e.component(_.name,_)};t["default"]=_},13:function(e,t){e.exports=n("1863")},3:function(e,t){e.exports=n("6d2c")},35:function(e,t){e.exports=n("80cb")},4:function(e,t){e.exports=n("0ba1")}})},"456f":function(e,t,n){},5809:function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=87)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,o,s,a){var c,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}n.d(t,"a",(function(){return i}))},4:function(e,t){e.exports=n("0ba1")},87:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"el-dropdown-menu__item",class:{"is-disabled":e.disabled,"el-dropdown-menu__item--divided":e.divided},attrs:{"aria-disabled":e.disabled,tabindex:e.disabled?null:-1},on:{click:e.handleClick}},[e.icon?n("i",{class:e.icon}):e._e(),e._t("default")],2)},r=[];i._withStripped=!0;var o=n(4),s=n.n(o),a={name:"ElDropdownItem",mixins:[s.a],props:{command:{},disabled:Boolean,divided:Boolean,icon:String},methods:{handleClick:function(e){this.dispatch("ElDropdown","menu-item-click",[this.command,this])}}},c=a,l=n(0),u=Object(l["a"])(c,i,r,!1,null,null,null);u.options.__file="packages/dropdown/src/dropdown-item.vue";var d=u.exports;d.install=function(e){e.component(d.name,d)};t["default"]=d}})},"79ae":function(e,t,n){},"841a":function(e,t,n){"use strict";var i=n("6b1d"),r=n("d054").find,o=n("ed2b"),s=n("ce71"),a="find",c=!0,l=s(a);a in[]&&Array(1)[a]((function(){c=!1})),i({target:"Array",proto:!0,forced:c||!l},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},8973:function(e,t,n){},"8dc9":function(e,t,n){},aeb2:function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=82)}({0:function(e,t,n){"use strict";function i(e,t,n,i,r,o,s,a){var c,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}n.d(t,"a",(function(){return i}))},5:function(e,t){e.exports=n("70d4")},82:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"el-zoom-in-top"},on:{"after-leave":e.doDestroy}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:e.showPopper,expression:"showPopper"}],staticClass:"el-dropdown-menu el-popper",class:[e.size&&"el-dropdown-menu--"+e.size]},[e._t("default")],2)])},r=[];i._withStripped=!0;var o=n(5),s=n.n(o),a={name:"ElDropdownMenu",componentName:"ElDropdownMenu",mixins:[s.a],props:{visibleArrow:{type:Boolean,default:!0},arrowOffset:{type:Number,default:0}},data:function(){return{size:this.dropdown.dropdownSize}},inject:["dropdown"],created:function(){var e=this;this.$on("updatePopper",(function(){e.showPopper&&e.updatePopper()})),this.$on("visible",(function(t){e.showPopper=t}))},mounted:function(){this.dropdown.popperElm=this.popperElm=this.$el,this.referenceElm=this.dropdown.$el,this.dropdown.initDomOperation()},watch:{"dropdown.placement":{immediate:!0,handler:function(e){this.currentPlacement=e}}}},c=a,l=n(0),u=Object(l["a"])(c,i,r,!1,null,null,null);u.options.__file="packages/dropdown/src/dropdown-menu.vue";var d=u.exports;d.install=function(e){e.component(d.name,d)};t["default"]=d}})},d105:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"twist"},[e.twist.playback&&e.twist.playback.isInit?n("div",{staticClass:"playback-icon",attrs:{title:"行情回放"}},[e._v("●")]):e._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowLink&&!e.isCube,expression:"isShowLink && !isCube"}],staticClass:"link"},[n("a",{attrs:{href:e.linkOf("#/"),target:"_blank"}},[e._v("壹缠")]),e._v(" | "),n("el-dropdown",[n("a",{staticClass:"el-dropdown-link"},[e._v(" 多周期"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{staticClass:"link-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(t){return e.onSelectCube("levels=min1,min5,min30")}}},[e._v("竖向三周期")]),n("el-dropdown-item",{nativeOn:{click:function(t){return e.onSelectCube("levels=min1,min5,min30,day")}}},[e._v("横向四周期")])],1)],1),e._v(" | "),n("a",{attrs:{href:e.linkOf("#/search"),target:"_blank"}},[e._v("买卖点选股器")])],1),n("ui-menu",{attrs:{visible:e.isShowDrawer,code:e.code},on:{"update:visible":function(t){e.isShowDrawer=t},switchTarget:e.switchTarget}}),n("ul",{staticClass:"nav"},[e.ohlcv.close?n("ul",{staticClass:"info"},[e.isCube?e._e():n("li",{staticClass:"drawer-icon",staticStyle:{cursor:"pointer"},attrs:{title:"账户和自选表"},on:{click:function(t){e.isShowDrawer=!e.isShowDrawer}}},[n("i",{staticClass:"el-icon-s-operation"})]),n("li",{class:{red:e.ohlcv.close>=e.ohlcv.preclose,green:e.ohlcv.close<e.ohlcv.preclose}},[e._v(e._s(e.code.toUpperCase()))]),n("li",{class:{red:e.ohlcv.close>=e.ohlcv.preclose,green:e.ohlcv.close<e.ohlcv.preclose}},[e._v(e._s(e.ohlcv.name))]),n("li",{class:{red:e.ohlcv.close>=e.ohlcv.preclose,green:e.ohlcv.close<e.ohlcv.preclose}},[e._v(e._s((+e.ohlcv.close).toFixed(2)))]),n("li",{class:{red:e.ohlcv.close>=e.ohlcv.preclose,green:e.ohlcv.close<e.ohlcv.preclose}},[e._v(e._s(((e.ohlcv.close-e.ohlcv.preclose)/e.ohlcv.preclose*100).toFixed(2))+"%")])]):e._e(),n("li",{class:{selected:"sec5"===e.level},on:{click:function(t){return e.switchLevel("sec5")}}},[e._v(" 5S ")]),n("li",{class:{selected:"sec15"===e.level},on:{click:function(t){return e.switchLevel("sec15")}}},[e._v(" 15S ")]),n("li",{class:{selected:"sec30"===e.level},on:{click:function(t){return e.switchLevel("sec30")}}},[e._v(" 30S ")]),n("li",{class:{selected:"min1"===e.level},on:{click:function(t){return e.switchLevel("min1")}}},[e._v(" 1M ")]),n("li",{class:{selected:"min5"===e.level},on:{click:function(t){return e.switchLevel("min5")}}},[e._v(" 5M ")]),n("li",{class:{selected:"min15"===e.level},on:{click:function(t){return e.switchLevel("min15")}}},[e._v(" 15M ")]),n("li",{class:{selected:"min30"===e.level},on:{click:function(t){return e.switchLevel("min30")}}},[e._v(" 30M ")]),n("li",{class:{selected:"min60"===e.level},on:{click:function(t){return e.switchLevel("min60")}}},[e._v(" 1H ")]),n("li",{class:{selected:"min120"===e.level},on:{click:function(t){return e.switchLevel("min120")}}},[e._v(" 2H ")]),n("li",{class:{selected:"min240"===e.level},on:{click:function(t){return e.switchLevel("min240")}}},[e._v(" 4H ")]),n("li",{class:{selected:"day"===e.level},on:{click:function(t){return e.switchLevel("day")}}},[e._v(" DAY ")]),n("li",{class:{selected:"week"===e.level},on:{click:function(t){return e.switchLevel("week")}}},[e._v(" WEEK ")]),n("li",{class:{selected:"month"===e.level},on:{click:function(t){return e.switchLevel("month")}}},[e._v(" MONTH ")]),this.code?n("li",{attrs:{title:"搜索标的"},on:{keydown:function(e){e.stopPropagation()},click:function(t){e.$refs.autocomplete&&e.$refs.autocomplete.focus()}}},[n("el-autocomplete",{ref:"autocomplete",staticClass:"suggest inline-input",attrs:{"prefix-icon":"el-icon-search","fetch-suggestions":e.onQuerySuggest,placeholder:"","trigger-on-focus":!1},on:{select:e.onSelectSuggest},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return[n("div",{on:{click:function(t){return t.ctrlKey?(t.stopPropagation(),e.onSelectSuggestCtrl(i)):null}}},[e._v(e._s(i.value))])]}}],null,!1,2339109331),model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1):e._e()]),e.report?n("ul",{staticClass:"nav"},[n("ul",{staticClass:"info"},[n("li",{class:{red:e.report.change>0,green:e.report.change<=0}},[e._v(e._s(e.code.toUpperCase())+" "+e._s(e.level.toUpperCase()))]),n("li",{class:{red:e.report.change>0,green:e.report.change<=0}},[e._v("交易次数: "+e._s(e.report.time))]),n("li",{class:{red:e.report.change>0,green:e.report.change<=0}},[e._v("涨幅收益: "+e._s(e.report.change)+"% ")]),n("li",{class:{red:e.report.profit>0,green:e.report.profit<=0}},[e._v("点数收益: "+e._s(e.report.profit)+" ")]),n("li",{class:{red:e.report.winrate>0,green:e.report.winrate<=0}},[e._v("胜率: "+e._s(e.report.winrate)+"% ")]),n("li",{class:{red:e.report.earnrate>0,green:e.report.earnrate<=0}},[e._v("平均收益率: "+e._s(e.report.earnrate)+"% ")])])]):e._e(),n("ui-kchart",{ref:"kchart",staticClass:"ui-kchart",attrs:{"show-volume":e.isShowVolume}})],1)},r=[],o=(n("d6de"),n("8d0f"),n("68b8"),n("d86f"),n("8d0d"),n("beb4"),n("33ef"),n("868d"),n("11fd"),n("ef1f"),n("2aa5"),n("c78b"),n("f3b8"),n("32f5"),n("defa"),n("918c"),n("b151"),n("0b38")),s=n("cf28"),a=n("56d4"),c=n.n(a),l=(n("df26"),n("42c2")),u=(n("f09a"),n("148d"),n("5809")),d=n.n(u),p=(n("456f"),n("aeb2")),h=n.n(p),f=(n("8973"),n("4303")),v=n.n(f),m=(n("79ae"),n("11f9")),g=n.n(m),w=n("f9b5"),b=n("2b43"),_=n("4f2b");_["default"].prototype.$ELEMENT={size:"mini",zIndex:3e3},_["default"].component(g.a.name,g.a),_["default"].component(v.a.name,v.a),_["default"].component(h.a.name,h.a),_["default"].component(d.a.name,d.a);var y=window.top.__Walle_Devtools,k={data:function(){return{keywords:"",klines:[],twist:{},report:null,key:"",code:"",ohlcv:{},level:"day",interval:null,isShowVolume:!1,isShowLink:!1,isShowDrawer:!1,isCube:!1}},mounted:function(){var e=this;return Object(l["a"])(c.a.mark((function t(){var n,i,r,o,s,a;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$route.query,i=n.level,r=void 0===i?"day":i,o=n.volume,s=n.interval,a=n.isCube,a&&(e.isCube=!0,w["a"].setSlient(!0)),e.key=e.$route.query.key||"",e.code=e.$route.params.code||"sh000300",e.code.toLowerCase().startsWith("sh")||e.code.toLowerCase().startsWith("sz")||w["a"].isVip()){t.next=7;break}return w["a"].notification("加密货币&期货&港美股行情 需开通VIP服务 请联系客服微信"),t.abrupt("return");case 7:if(e.level=r,s&&(e.interval=s),e.isShowVolume=!!o,e.ohlcv={},void 0===e.$route.query.backtest){t.next=15;break}return t.next=14,e.initBacktest();case 14:return t.abrupt("return");case 15:return t.next=17,e.init();case 17:return t.next=19,e.initPlayback();case 19:setTimeout((function(){e.isShowLink=!0}),3e3);case 20:case"end":return t.stop()}}),t)})))()},destroyed:function(){this.twist.crawler&&this.twist.crawler.stop()},methods:{init:function(){var e=this;return Object(l["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.twist.crawler&&e.twist.crawler.stop(),e.twist=window.__Walle_Stock_Twist.create(e.code,w["a"].vip()),t.next=4,e.twist.crawler.loop(e.interval,Object(l["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.twist.playback.isInit){t.next=2;break}return t.abrupt("return");case 2:e.updateChart({isZoom:!1});case 3:case"end":return t.stop()}}),t)}))));case 4:return t.next=6,e.twist.crawler.ohlcv((function(t){e.ohlcv=t}));case 6:setTimeout((function(){e.$nextTick((function(){return e.updateChart({isZoom:!0})}))}),1e3),setTimeout((function(){(e.ohlcv.code||e.ohlcv.close)&&b["a"].insert("histroy",e.code,e.ohlcv.name)}),3e3);case 8:case"end":return t.stop()}}),t)})))()},initPlayback:function(){var e=this;return Object(l["a"])(c.a.mark((function t(){var n,i;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(w["a"].isVip()){t.next=2;break}return t.abrupt("return");case 2:n=e.$route.query.offset||-240,i=e.$route.query.speed||1e3,e.twist.playback.reset({offset:n,speed:i}),e.twist.playback.hook("klines",Object(l["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.twist.crawler.kline(e.level));case 1:case"end":return t.stop()}}),t)})))),e.twist.playback.listen(),e.twist.playback.on("start",(function(t,n){e.twist.strategy.reset(),e.updateChart({klines:n,isZoom:!0})})),e.twist.playback.on("update",(function(t,n){return e.updateChart({klines:n,isZoom:!1})})),e.twist.playback.on("end",(function(){return e.updateChart({isZoom:!0})})),e.twist.playback.on("quit",(function(){e.twist.strategy.reset(),e.updateChart({isZoom:!0})}));case 11:case"end":return t.stop()}}),t)})))()},initBacktest:function(){var e=this;return Object(l["a"])(c.a.mark((function t(){var n,i,r,o,s;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(y){t.next=2;break}return t.abrupt("return");case 2:return n=e.$route.query.backtest||"default",i=e.$route.query.level||"min5",r=e.$route.query.direction||"up",o=window.__Walle_Stock_Twist.create(e.code),t.next=8,o.crawler.kline(i);case 8:return s=t.sent,t.next=11,o.backtest.run({klines:s,name:n});case 11:e.report=o.backtest.toReport(r),e.$refs.kchart&&e.$refs.kchart.update(s,o.backtest.toPoints(),!0);case 13:case"end":return t.stop()}}),t)})))()},notification:function(e){var t=this;return Object(l["a"])(c.a.mark((function n(){var i,r,o,s,a;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(y){n.next=2;break}return n.abrupt("return");case 2:if(e){n.next=4;break}return n.abrupt("return");case 4:if(i=e.type,e.kline,r=e.tip,o=e.trade,i="buy"===i?"B":"S",s="TWIST TRADE NOTIFICATION",a="".concat(t.code.toUpperCase()," ").concat(t.ohlcv.name," ").concat((+t.ohlcv.close).toFixed(2)," ").concat(t.level.toUpperCase()," ").concat(i," ").concat(o?o+"("+r+")":r),!t.twist.playback.isInit&&o&&window.__Walle_Stock_Twist.Notification.sendWxwork("",a),!t.level.includes("sec")||o){n.next=11;break}return n.abrupt("return");case 11:window.__Walle_Stock_Twist.Notification.show(s,a);case 12:case"end":return n.stop()}}),n)})))()},onQuerySuggest:function(e,t){return Object(l["a"])(c.a.mark((function n(){var i,r,o,a,l,u,d,p,h,f,v,m,g,w,b,_,y,k;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([window.__Walle_Stock_Twist.Crawler.huobi.suggest(e),window.__Walle_Stock_Twist.Crawler.okex.suggest(e),window.__Walle_Stock_Twist.Crawler.sina.suggest(e)]);case 2:for(i=n.sent,r=Object(s["a"])(i,3),o=r[0],r[1],a=r[2],l=[],u=!0,d=!1,p=void 0,n.prev=11,h=o[Symbol.iterator]();!(u=(f=h.next()).done);u=!0)v=f.value,m=v.symbol.replace("huobi-",""),l.push({value:v.name+" "+m.toUpperCase(),name:v.name,code:m});n.next=19;break;case 15:n.prev=15,n.t0=n["catch"](11),d=!0,p=n.t0;case 19:n.prev=19,n.prev=20,u||null==h["return"]||h["return"]();case 22:if(n.prev=22,!d){n.next=25;break}throw p;case 25:return n.finish(22);case 26:return n.finish(19);case 27:for(g=!0,w=!1,b=void 0,n.prev=30,_=a[Symbol.iterator]();!(g=(y=_.next()).done);g=!0)k=y.value,l.push({value:k.name+" "+k.code.toUpperCase(),name:k.name,code:k.code});n.next=38;break;case 34:n.prev=34,n.t1=n["catch"](30),w=!0,b=n.t1;case 38:n.prev=38,n.prev=39,g||null==_["return"]||_["return"]();case 41:if(n.prev=41,!w){n.next=44;break}throw b;case 44:return n.finish(41);case 45:return n.finish(38);case 46:t(l);case 47:case"end":return n.stop()}}),n,null,[[11,15,19,27],[20,,22,26],[30,34,38,46],[39,,41,45]])})))()},onSelectSuggest:function(e){var t=this;return Object(l["a"])(c.a.mark((function n(){var i;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.name,i=e.code,i.toLowerCase().startsWith("sh")||i.toLowerCase().startsWith("sz")||w["a"].isVip()){n.next=4;break}return w["a"].notification("加密货币&期货&港美股行情 需开通VIP服务 请联系客服微信"),n.abrupt("return");case 4:t.keywords="",t.switchTarget(i);case 6:case"end":return n.stop()}}),n)})))()},onSelectSuggestCtrl:function(e){var t=this;return Object(l["a"])(c.a.mark((function n(){var i,r,o,s;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.name,i=e.code,t.keywords="",r=window.top.location.origin+window.top.location.pathname,o=t.$router.resolve({name:"twist",params:{code:i},query:t.$route.query}),s=o.href.slice(o.href.indexOf("#")),window.open(r+s);case 6:case"end":return n.stop()}}),n)})))()},onSelectCube:function(e){var t=this;return Object(l["a"])(c.a.mark((function n(){var i;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(w["a"].isSVip()){n.next=3;break}return w["a"].notification("多周期行情 需开通SVIP服务 请联系客服微信"),n.abrupt("return");case 3:i=t.linkOf("#/cube/"+t.code,e),window.open(i);case 5:case"end":return n.stop()}}),n)})))()},switchTarget:function(e){var t=this;return Object(l["a"])(c.a.mark((function n(){return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.code!==e){n.next=2;break}return n.abrupt("return");case 2:return t.code=e,t.$router.replace({name:"twist",params:{code:e},query:t.$route.query}),window.dispatchEvent(new CustomEvent("hashchange")),n.next=7,t.twist.playback.quit();case 7:return n.next=9,t.init();case 9:return n.next=11,t.initPlayback();case 11:case"end":return n.stop()}}),n)})))()},switchLevel:function(e){!["sec5","sec15","sec30"].includes(e)||w["a"].isVip()?(this.level=e,this.twist.strategy.reset(),this.twist.playback.quit(),this.updateChart({isZoom:!0})):w["a"].notification("秒级别K线需开通VIP服务 请联系客服微信")},linkOf:function(e,t){var n=window.top.location.origin+window.top.location.pathname;return"#/"===e?n+e:(e&&(n+=e),this.$route.query.key&&(n+="?key="+this.$route.query.key),t&&(n.includes("?")?n+="&"+t:n+="?"+t),n)},updateChart:function(e){var t=this;return Object(l["a"])(c.a.mark((function n(){var i,r,s,a,l,u,d,p,h,f,v,m;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e.klines,r=void 0===i?null:i,s=e.isZoom,a=void 0===s||s,r){n.next=5;break}return n.next=4,t.twist.crawler.kline(t.level);case 4:r=n.sent;case 5:if(r.length){n.next=9;break}return t.klines=[],t.$refs.kchart&&t.$refs.kchart.showLoading(),n.abrupt("return");case 9:r=r.slice(-5e3),n.prev=10,l=a?t.twist.processor.parse(r):t.twist.processor.update(r),u=t.twist.processor.state(),d=t.twist.processor.pattern(),p=t.twist.strategy.process(r,l,u),t.twist.nest.process(t.code,t.level,u,d,p,r),t.notification(p),h=t.twist.processor.toPoints(),f=y?t.twist.processor.sequence():[],v=y?t.twist.processor.line():[],m=y?t.twist.strategy.toPoints(r):[],!t.klines.length&&r.length&&(a=!0),t.klines=r,t.$refs.kchart&&t.$refs.kchart.update(r,Object(o["a"])({},h,{pin:m,line:v,sequence:f}),a),n.next=33;break;case 26:n.prev=26,n.t0=n["catch"](10),!t.klines.length&&r.length&&(a=!0),t.klines=r,t.$refs.kchart&&t.$refs.kchart.update(r,null,a),n.next=33;break;case 33:case"end":return n.stop()}}),n,null,[[10,26]])})))()}}},x=k,S=(n("0669"),n("3fbd"),n("2be6")),C=Object(S["a"])(x,i,r,!1,null,"253c11f9",null);t["default"]=C.exports},f09a:function(e,t,n){}}]);