(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23b1cff7"],{"057f":function(t,e,i){var n=i("fc6a"),s=i("241c").f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return s(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==r.call(t)?o(t):s(n(t))}},"159b":function(t,e,i){var n=i("da84"),s=i("fdbc"),r=i("17c2"),a=i("9112");for(var o in s){var c=n[o],u=c&&c.prototype;if(u&&u.forEach!==r)try{a(u,"forEach",r)}catch(l){u.forEach=r}}},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,s=i("a640"),r=i("ae40"),a=s("forEach"),o=r("forEach");t.exports=a&&o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"25f0":function(t,e,i){"use strict";var n=i("6eeb"),s=i("825a"),r=i("d039"),a=i("ad6d"),o="toString",c=RegExp.prototype,u=c[o],l=r((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=o;(l||f)&&n(RegExp.prototype,o,(function(){var t=s(this),e=String(t.source),i=t.flags,n=String(void 0===i&&t instanceof RegExp&&!("flags"in c)?a.call(t):i);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,i){"use strict";var n=i("6547").charAt,s=i("69f3"),r=i("7dd0"),a="String Iterator",o=s.set,c=s.getterFor(a);r(String,"String",(function(t){o(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),i=e.string,s=e.index;return s>=i.length?{value:void 0,done:!0}:(t=n(i,s),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,i){"use strict";var n=i("23e7"),s=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"466d":function(t,e,i){"use strict";var n=i("d784"),s=i("825a"),r=i("50c4"),a=i("1d80"),o=i("8aa5"),c=i("14c3");n("match",1,(function(t,e,i){return[function(e){var i=a(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,i):new RegExp(e)[t](String(i))},function(t){var n=i(e,t,this);if(n.done)return n.value;var a=s(t),u=String(this);if(!a.global)return c(a,u);var l=a.unicode;a.lastIndex=0;var f,h=[],d=0;while(null!==(f=c(a,u))){var g=String(f[0]);h[d]=g,""===g&&(a.lastIndex=o(u,r(a.lastIndex),l)),d++}return 0===d?null:h}]}))},6547:function(t,e,i){var n=i("a691"),s=i("1d80"),r=function(t){return function(e,i){var r,a,o=String(s(e)),c=n(i),u=o.length;return c<0||c>=u?t?"":void 0:(r=o.charCodeAt(c),r<55296||r>56319||c+1===u||(a=o.charCodeAt(c+1))<56320||a>57343?t?o.charAt(c):r:t?o.slice(c,c+2):a-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"65f0":function(t,e,i){var n=i("861d"),s=i("e8b5"),r=i("b622"),a=r("species");t.exports=function(t,e){var i;return s(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!s(i.prototype)?n(i)&&(i=i[a],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"6b6e":function(t,e,i){},"6f5b":function(t,e,i){"use strict";i("6b6e")},"746f":function(t,e,i){var n=i("428f"),s=i("5135"),r=i("e538"),a=i("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});s(e,t)||a(e,t,{value:r.f(t)})}},"7db0":function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").find,r=i("44d2"),a=i("ae40"),o="find",c=!0,u=a(o);o in[]&&Array(1)[o]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!u},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(o)},"8f77":function(t,e,i){},"93bf":function(t,e,i){
/*!
* screenfull
* v5.0.2 - 2020-02-13
* (c) Sindre Sorhus; MIT License
*/
(function(){"use strict";var e="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},i=t.exports,n=function(){for(var t,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,s=i.length,r={};n<s;n++)if(t=i[n],t&&t[1]in e){for(n=0;n<t.length;n++)r[i[0][n]]=t[n];return r}return!1}(),s={change:n.fullscreenchange,error:n.fullscreenerror},r={request:function(t){return new Promise(function(i,s){var r=function(){this.off("change",r),i()}.bind(this);this.on("change",r),t=t||e.documentElement;var a=t[n.requestFullscreen]();a instanceof Promise&&a.then(r).catch(s)}.bind(this))},exit:function(){return new Promise(function(t,i){if(this.isFullscreen){var s=function(){this.off("change",s),t()}.bind(this);this.on("change",s);var r=e[n.exitFullscreen]();r instanceof Promise&&r.then(s).catch(i)}else t()}.bind(this))},toggle:function(t){return this.isFullscreen?this.exit():this.request(t)},onchange:function(t){this.on("change",t)},onerror:function(t){this.on("error",t)},on:function(t,i){var n=s[t];n&&e.addEventListener(n,i,!1)},off:function(t,i){var n=s[t];n&&e.removeEventListener(n,i,!1)},raw:n};n?(Object.defineProperties(r,{isFullscreen:{get:function(){return Boolean(e[n.fullscreenElement])}},element:{enumerable:!0,get:function(){return e[n.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(e[n.fullscreenEnabled])}}}),i?t.exports=r:window.screenfull=r):i?t.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}})()},a4d3:function(t,e,i){"use strict";var n=i("23e7"),s=i("da84"),r=i("d066"),a=i("c430"),o=i("83ab"),c=i("4930"),u=i("fdbf"),l=i("d039"),f=i("5135"),h=i("e8b5"),d=i("861d"),g=i("825a"),m=i("7b0b"),p=i("fc6a"),v=i("c04e"),y=i("5c6c"),b=i("7c73"),L=i("df75"),S=i("241c"),w=i("057f"),k=i("7418"),D=i("06cf"),F=i("9bf2"),C=i("d1e7"),T=i("9112"),M=i("6eeb"),x=i("5692"),j=i("f772"),E=i("d012"),O=i("90e3"),A=i("b622"),$=i("e538"),_=i("746f"),I=i("d44e"),H=i("69f3"),P=i("b727").forEach,Q=j("hidden"),R="Symbol",z="prototype",B=A("toPrimitive"),N=H.set,q=H.getterFor(R),G=Object[z],J=s.Symbol,V=r("JSON","stringify"),U=D.f,W=F.f,K=w.f,Y=C.f,Z=x("symbols"),X=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),it=x("wks"),nt=s.QObject,st=!nt||!nt[z]||!nt[z].findChild,rt=o&&l((function(){return 7!=b(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,i){var n=U(G,e);n&&delete G[e],W(t,e,i),n&&t!==G&&W(G,e,n)}:W,at=function(t,e){var i=Z[t]=b(J[z]);return N(i,{type:R,tag:t,description:e}),o||(i.description=e),i},ot=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof J},ct=function(t,e,i){t===G&&ct(X,e,i),g(t);var n=v(e,!0);return g(i),f(Z,n)?(i.enumerable?(f(t,Q)&&t[Q][n]&&(t[Q][n]=!1),i=b(i,{enumerable:y(0,!1)})):(f(t,Q)||W(t,Q,y(1,{})),t[Q][n]=!0),rt(t,n,i)):W(t,n,i)},ut=function(t,e){g(t);var i=p(e),n=L(i).concat(gt(i));return P(n,(function(e){o&&!ft.call(i,e)||ct(t,e,i[e])})),t},lt=function(t,e){return void 0===e?b(t):ut(b(t),e)},ft=function(t){var e=v(t,!0),i=Y.call(this,e);return!(this===G&&f(Z,e)&&!f(X,e))&&(!(i||!f(this,e)||!f(Z,e)||f(this,Q)&&this[Q][e])||i)},ht=function(t,e){var i=p(t),n=v(e,!0);if(i!==G||!f(Z,n)||f(X,n)){var s=U(i,n);return!s||!f(Z,n)||f(i,Q)&&i[Q][n]||(s.enumerable=!0),s}},dt=function(t){var e=K(p(t)),i=[];return P(e,(function(t){f(Z,t)||f(E,t)||i.push(t)})),i},gt=function(t){var e=t===G,i=K(e?X:p(t)),n=[];return P(i,(function(t){!f(Z,t)||e&&!f(G,t)||n.push(Z[t])})),n};if(c||(J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=O(t),i=function(t){this===G&&i.call(X,t),f(this,Q)&&f(this[Q],e)&&(this[Q][e]=!1),rt(this,e,y(1,t))};return o&&st&&rt(G,e,{configurable:!0,set:i}),at(e,t)},M(J[z],"toString",(function(){return q(this).tag})),M(J,"withoutSetter",(function(t){return at(O(t),t)})),C.f=ft,F.f=ct,D.f=ht,S.f=w.f=dt,k.f=gt,$.f=function(t){return at(A(t),t)},o&&(W(J[z],"description",{configurable:!0,get:function(){return q(this).description}}),a||M(G,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:J}),P(L(it),(function(t){_(t)})),n({target:R,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var i=J(e);return tt[e]=i,et[i]=e,i},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!o},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ht}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:l((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(m(t))}}),V){var mt=!c||l((function(){var t=J();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}));n({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,i){var n,s=[t],r=1;while(arguments.length>r)s.push(arguments[r++]);if(n=e,(d(e)||void 0!==t)&&!ot(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ot(e))return e}),s[1]=e,V.apply(null,s)}})}J[z][B]||T(J[z],B,J[z].valueOf),I(J,R),E[Q]=!0},ad6d:function(t,e,i){"use strict";var n=i("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,i){var n=i("83ab"),s=i("d039"),r=i("5135"),a=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(r(o,t))return o[t];e||(e={});var i=[][t],u=!!r(e,"ACCESSORS")&&e.ACCESSORS,l=r(e,0)?e[0]:c,f=r(e,1)?e[1]:void 0;return o[t]=!!i&&!s((function(){if(u&&!n)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:c}):t[1]=1,i.call(t,l,f)}))}},b727:function(t,e,i){var n=i("0366"),s=i("44ad"),r=i("7b0b"),a=i("50c4"),o=i("65f0"),c=[].push,u=function(t){var e=1==t,i=2==t,u=3==t,l=4==t,f=6==t,h=7==t,d=5==t||f;return function(g,m,p,v){for(var y,b,L=r(g),S=s(L),w=n(m,p,3),k=a(S.length),D=0,F=v||o,C=e?F(g,k):i||h?F(g,0):void 0;k>D;D++)if((d||D in S)&&(y=S[D],b=w(y,D,L),t))if(e)C[D]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return D;case 2:c.call(C,y)}else switch(t){case 4:return!1;case 7:c.call(C,y)}return f?-1:u||l?l:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},d28b:function(t,e,i){var n=i("746f");n("iterator")},ddb0:function(t,e,i){var n=i("da84"),s=i("fdbc"),r=i("e260"),a=i("9112"),o=i("b622"),c=o("iterator"),u=o("toStringTag"),l=r.values;for(var f in s){var h=n[f],d=h&&h.prototype;if(d){if(d[c]!==l)try{a(d,c,l)}catch(m){d[c]=l}if(d[u]||a(d,u,f),s[f])for(var g in r)if(d[g]!==r[g])try{a(d,g,r[g])}catch(m){d[g]=r[g]}}}},e01a:function(t,e,i){"use strict";var n=i("23e7"),s=i("83ab"),r=i("da84"),a=i("5135"),o=i("861d"),c=i("9bf2").f,u=i("e893"),l=r.Symbol;if(s&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(h,l);var d=h.prototype=l.prototype;d.constructor=h;var g=d.toString,m="Symbol(test)"==String(l("test")),p=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=g.call(t);if(a(f,t))return"";var i=m?e.slice(7,-1):e.replace(p,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:h})}},e538:function(t,e,i){var n=i("b622");e.f=n},e5c2:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"clock"},[t._m(0),t._m(1),i("ul",{staticClass:"nav"},[i("li",{attrs:{target:"sh000001"},on:{click:function(e){t.target="sh000001"}}},[t._v(" SH000001 ")]),i("li",{attrs:{target:"usr_$dji"},on:{click:function(e){t.target="usr_$dji"}}},[t._v(" DJIA ")]),i("li",{attrs:{target:"hf_CHA50CFD"},on:{click:function(e){t.target="hf_CHA50CFD"}}},[t._v(" A50 ")])]),t._m(2),i("div",{attrs:{id:"screenfull"}}),i("div",{attrs:{id:"scripts"}})])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"integer"}),i("div",{staticClass:"flip-clock-dot"}),i("div",{staticClass:"decimal"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"nav indicator"},[i("li",{staticClass:"select"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"copyright"}},[i("a",{attrs:{href:"http://neil-pan.com",target:"_blank"}},[t._v("NEIL PAN")])])}],r=(i("b680"),i("ac1f"),i("1276"),i("96cf"),i("1da1"));i("7db0"),i("4160"),i("a15b"),i("d3b7"),i("25f0"),i("466d"),i("159b"),i("a4d3"),i("e01a"),i("d28b"),i("3ca3"),i("ddb0");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}var o,c=function(){};c.extend=function(t,e){var i=c.prototype.extend;c._prototyping=!0;var n=new this;i.call(n,t),n.base=function(){},delete c._prototyping;var s=n.constructor,r=n.constructor=function(){if(!c._prototyping)if(this._constructing||this.constructor==r)this._constructing=!0,s.apply(this,arguments),delete this._constructing;else if(null!==arguments[0])return(arguments[0].extend||i).call(arguments[0],n)};return r.ancestor=this,r.extend=this.extend,r.forEach=this.forEach,r.implement=this.implement,r.prototype=n,r.toString=this.toString,r.valueOf=function(t){return"object"==t?r:s.valueOf()},i.call(r,e),"function"==typeof r.init&&r.init(),r},c.prototype={extend:function(t,e){if(arguments.length>1){var i=this[t];if(i&&"function"==typeof e&&(!i.valueOf||i.valueOf()!=e.valueOf())&&/\bbase\b/.test(e)){var n=e.valueOf();e=function(){var t=this.base||c.prototype.base;this.base=i;var e=n.apply(this,arguments);return this.base=t,e},e.valueOf=function(t){return"object"==t?e:n},e.toString=c.toString}this[t]=e}else if(t){var s=c.prototype.extend;c._prototyping||"function"==typeof this||(s=this.extend||s);var r={toSource:null},a=["constructor","toString","valueOf"],o=c._prototyping?0:1;while(u=a[o++])t[u]!=r[u]&&s.call(this,u,t[u]);for(var u in t)r[u]||s.call(this,u,t[u])}return this}},c=c.extend({constructor:function(){this.extend(arguments[0])}},{ancestor:Object,version:"1.1",forEach:function(t,e,i){for(var n in t)void 0===this.prototype[n]&&e.call(i,t[n],n,t)},implement:function(){for(var t=0;t<arguments.length;t++)"function"==typeof arguments[t]?arguments[t](this.prototype):this.prototype.extend(arguments[t]);return this},toString:function(){return String(this.valueOf())}}),
/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
function(t){o=function(t,e,i){return e instanceof Object&&e instanceof Date===!1&&(i=e,e=0),new o.Factory(t,e,i)},o.Lang={},o.Base=c.extend({buildDate:"2014-10-06",version:"0.7.5",constructor:function(e,i){"object"!==a(e)&&(e={}),"object"!==a(i)&&(i={}),this.setOptions(t.extend(!0,{},e,i))},callback:function(t){if("function"===typeof t){for(var e=[],i=1;i<=arguments.length;i++)arguments[i]&&e.push(arguments[i]);t.apply(this,e)}},log:function(t){window.console&&console.log&&console.log(t)},getOption:function(t){return!!this[t]&&this[t]},getOptions:function(){return this},setOption:function(t,e){this[t]=e},setOptions:function(t){for(var e in t)"undefined"!==typeof t[e]&&this.setOption(e,t[e])}})}(jQuery),
/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
function(t){o.Face=o.Base.extend({autoStart:!0,dividers:[],factory:!1,lists:[],constructor:function(t,e){this.dividers=[],this.lists=[],this.base(e),this.factory=t},build:function(){this.autoStart&&this.start()},createDivider:function(e,i,n){"boolean"!=typeof i&&i||(n=i,i=e);var s=['<span class="'+this.factory.classes.dot+' top"></span>','<span class="'+this.factory.classes.dot+' bottom"></span>'].join("");n&&(s=""),e=this.factory.localize(e);var r=['<span class="'+this.factory.classes.divider+" "+(i||"").toLowerCase()+'">','<span class="'+this.factory.classes.label+'">'+(e||"")+"</span>",s,"</span>"],a=t(r.join(""));return this.dividers.push(a),a},createList:function(t,e){"object"===a(t)&&(e=t,t=0);var i=new o.List(this.factory,t,e);return this.lists.push(i),i},reset:function(){this.factory.time=new o.Time(this.factor,this.factory.original?Math.round(this.factory.original):0,{minimumDigits:this.factory.minimumDigits}),this.flip(this.factory.original,!1)},appendDigitToClock:function(t){t.$el.append(!1)},addDigit:function(t){var e=this.createList(t,{classes:{active:this.factory.classes.active,before:this.factory.classes.before,flip:this.factory.classes.flip}});this.appendDigitToClock(e)},start:function(){},stop:function(){},autoIncrement:function(){this.factory.countdown?this.decrement():this.increment()},increment:function(){this.factory.time.addSecond()},decrement:function(){0==this.factory.time.getTimeSeconds()?this.factory.stop():this.factory.time.subSecond()},flip:function(e,i){var n=this;t.each(e,(function(t,e){var s=n.lists[t];s?(i||e==s.digit||s.play(),s.select(e)):n.addDigit(e)}))}})}(jQuery),
/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
function(t){o.Factory=o.Base.extend({animationRate:1e3,autoStart:!0,callbacks:{destroy:!1,create:!1,init:!1,interval:!1,start:!1,stop:!1,reset:!1},classes:{active:"flip-clock-active",before:"flip-clock-before",divider:"flip-clock-divider",dot:"flip-clock-dot",label:"flip-clock-label",flip:"flip",play:"play",wrapper:"flip-clock-wrapper"},clockFace:"HourlyCounter",countdown:!1,defaultClockFace:"HourlyCounter",defaultLanguage:"english",$el:!1,face:!0,lang:!1,language:"english",minimumDigits:0,original:!1,running:!1,time:!1,timer:!1,$wrapper:!1,constructor:function(e,i,n){n||(n={}),this.lists=[],this.running=!1,this.base(n),this.$el=t(e).addClass(this.classes.wrapper),this.$wrapper=this.$el,this.original=i instanceof Date?i:i?Math.round(i):0,this.time=new o.Time(this,this.original,{minimumDigits:this.minimumDigits,animationRate:this.animationRate}),this.timer=new o.Timer(this,n),this.loadLanguage(this.language),this.loadClockFace(this.clockFace,n),this.autoStart&&this.start()},loadClockFace:function(t,e){var i,n="Face",s=!1;return t=t.ucfirst()+n,this.face.stop&&(this.stop(),s=!0),this.$el.html(""),this.time.minimumDigits=this.minimumDigits,i=o[t]?new o[t](this,e):new o[this.defaultClockFace+n](this,e),i.build(),this.face=i,s&&this.start(),this.face},loadLanguage:function(t){var e;return e=o.Lang[t.ucfirst()]?o.Lang[t.ucfirst()]:o.Lang[t]?o.Lang[t]:o.Lang[this.defaultLanguage],this.lang=e},localize:function(t,e){var i=this.lang;if(!t)return null;var n=t.toLowerCase();return"object"==a(e)&&(i=e),i&&i[n]?i[n]:t},start:function(t){var e=this;e.running||e.countdown&&!(e.countdown&&e.time.time>0)?e.log("Trying to start timer when countdown already at 0"):(e.face.start(e.time),e.timer.start((function(){e.flip(),"function"===typeof t&&t()})))},stop:function(t){for(var e in this.face.stop(),this.timer.stop(t),this.lists)this.lists.hasOwnProperty(e)&&this.lists[e].stop()},reset:function(t){this.timer.reset(t),this.face.reset()},setTime:function(t){this.time.time=t,this.flip(!0)},getTime:function(t){return this.time},setCountdown:function(t){var e=this.running;this.countdown=!!t,e&&(this.stop(),this.start())},flip:function(t){this.face.flip(!1,t)}})}(jQuery),
/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
function(t){o.List=o.Base.extend({digit:0,classes:{active:"flip-clock-active",before:"flip-clock-before",flip:"flip"},factory:!1,$el:!1,$obj:!1,items:[],lastDigit:0,constructor:function(t,e,i){this.factory=t,this.digit=e,this.lastDigit=e,this.$el=this.createList(),this.$obj=this.$el,e>0&&this.select(e),this.factory.$el.append(this.$el)},select:function(t){if("undefined"===typeof t?t=this.digit:this.digit=t,this.digit!=this.lastDigit){var e=this.$el.find("."+this.classes.before).removeClass(this.classes.before);this.$el.find("."+this.classes.active).removeClass(this.classes.active).addClass(this.classes.before),this.appendListItem(this.classes.active,this.digit),e.remove(),this.lastDigit=this.digit}},play:function(){this.$el.addClass(this.factory.classes.play)},stop:function(){var t=this;setTimeout((function(){t.$el.removeClass(t.factory.classes.play)}),this.factory.timer.interval)},createListItem:function(t,e){return['<li class="'+(t||"")+'">','<a href="#">','<div class="up">','<div class="shadow"></div>','<div class="inn">'+(e||"")+"</div>","</div>",'<div class="down">','<div class="shadow"></div>','<div class="inn">'+(e||"")+"</div>","</div>","</a>","</li>"].join("")},appendListItem:function(t,e){var i=this.createListItem(t,e);this.$el.append(i)},createList:function(){var e=this.getPrevDigit()?this.getPrevDigit():this.digit,i=t(['<ul class="'+this.classes.flip+" "+(this.factory.running?this.factory.classes.play:"")+'">',this.createListItem(this.classes.before,e),this.createListItem(this.classes.active,this.digit),"</ul>"].join(""));return i},getNextDigit:function(){return 9==this.digit?0:this.digit+1},getPrevDigit:function(){return 0==this.digit?9:this.digit-1}})}(jQuery),
/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
function(t){String.prototype.ucfirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1)},t.fn.FlipClock=function(e,i){return new o(t(this),e,i)},t.fn.flipClock=function(e,i){return t.fn.FlipClock(e,i)}}(jQuery),
/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
function(t){o.Time=o.Base.extend({time:0,factory:!1,minimumDigits:0,constructor:function(t,e,i){"object"!=a(i)&&(i={}),i.minimumDigits||(i.minimumDigits=t.minimumDigits),this.base(i),this.factory=t,e&&(this.time=e)},convertDigitsToArray:function(t){var e=[];t=t.toString();for(var i=0;i<t.length;i++)t[i].match(/^\d*$/g)&&e.push(t[i]);return e},digit:function(t){var e=this.toString(),i=e.length;return!!e[i-t]&&e[i-t]},digitize:function(e){var i=[];if(t.each(e,(function(t,e){e=e.toString(),1==e.length&&(e="0"+e);for(var n=0;n<e.length;n++)i.push(e.charAt(n))})),i.length>this.minimumDigits&&(this.minimumDigits=i.length),this.minimumDigits>i.length)for(var n=i.length;n<this.minimumDigits;n++)i.unshift("0");return i},getDateObject:function(){return this.time instanceof Date?this.time:new Date((new Date).getTime()+1e3*this.getTimeSeconds())},getDayCounter:function(t){var e=[this.getDays(),this.getHours(!0),this.getMinutes(!0)];return t&&e.push(this.getSeconds(!0)),this.digitize(e)},getDays:function(t){var e=this.getTimeSeconds()/60/60/24;return t&&(e%=7),Math.floor(e)},getHourCounter:function(){var t=this.digitize([this.getHours(),this.getMinutes(!0),this.getSeconds(!0)]);return t},getHourly:function(){return this.getHourCounter()},getHours:function(t){var e=this.getTimeSeconds()/60/60;return t&&(e%=24),Math.floor(e)},getMilitaryTime:function(t,e){"undefined"===typeof e&&(e=!0),t||(t=this.getDateObject());var i=[t.getHours(),t.getMinutes()];return!0===e&&i.push(t.getSeconds()),this.digitize(i)},getMinutes:function(t){var e=this.getTimeSeconds()/60;return t&&(e%=60),Math.floor(e)},getMinuteCounter:function(){var t=this.digitize([this.getMinutes(),this.getSeconds(!0)]);return t},getTimeSeconds:function(t){return t||(t=new Date),this.time instanceof Date?this.factory.countdown?Math.max(this.time.getTime()/1e3-t.getTime()/1e3,0):t.getTime()/1e3-this.time.getTime()/1e3:this.time},getTime:function(t,e){"undefined"===typeof e&&(e=!0),t||(t=this.getDateObject()),console.log(t);var i=t.getHours(),n=[i>12?i-12:0===i?12:i,t.getMinutes()];return!0===e&&n.push(t.getSeconds()),this.digitize(n)},getSeconds:function(t){var e=this.getTimeSeconds();return t&&(60==e?e=0:e%=60),Math.ceil(e)},getWeeks:function(t){var e=this.getTimeSeconds()/60/60/24/7;return t&&(e%=52),Math.floor(e)},removeLeadingZeros:function(e,i){var n=0,s=[];return t.each(i,(function(t,r){t<e?n+=parseInt(i[t],10):s.push(i[t])})),0===n?s:i},addSeconds:function(t){this.time instanceof Date?this.time.setSeconds(this.time.getSeconds()+t):this.time+=t},addSecond:function(){this.addSeconds(1)},subSeconds:function(t){this.time instanceof Date?this.time.setSeconds(this.time.getSeconds()-t):this.time-=t},subSecond:function(){this.subSeconds(1)},toString:function(){return this.getTimeSeconds().toString()}})}(jQuery),
/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
function(t){o.Timer=o.Base.extend({callbacks:{destroy:!1,create:!1,init:!1,interval:!1,start:!1,stop:!1,reset:!1},count:0,factory:!1,interval:1e3,animationRate:1e3,constructor:function(t,e){this.base(e),this.factory=t,this.callback(this.callbacks.init),this.callback(this.callbacks.create)},getElapsed:function(){return this.count*this.interval},getElapsedTime:function(){return new Date(this.time+this.getElapsed())},reset:function(t){clearInterval(this.timer),this.count=0,this._setInterval(t),this.callback(this.callbacks.reset)},start:function(t){this.factory.running=!0,this._createTimer(t),this.callback(this.callbacks.start)},stop:function(t){this.factory.running=!1,this._clearInterval(t),this.callback(this.callbacks.stop),this.callback(t)},_clearInterval:function(){clearInterval(this.timer)},_createTimer:function(t){this._setInterval(t)},_destroyTimer:function(t){this._clearInterval(),this.timer=!1,this.callback(t),this.callback(this.callbacks.destroy)},_interval:function(t){this.callback(this.callbacks.interval),this.callback(t),this.count++},_setInterval:function(t){var e=this;e._interval(t),e.timer=setInterval((function(){e._interval(t)}),this.interval)}})}(jQuery),function(t){o.TwentyFourHourClockFace=o.Face.extend({constructor:function(t,e){this.base(t,e)},build:function(e){var i=this,n=this.factory.$el.find("ul");this.factory.time.time||(this.factory.original=new Date,this.factory.time=new o.Time(this.factory,this.factory.original));e=e||this.factory.time.getMilitaryTime(!1,this.showSeconds);e.length>n.length&&t.each(e,(function(t,e){i.createList(e)})),this.createDivider(),this.createDivider(),t(this.dividers[0]).insertBefore(this.lists[this.lists.length-2].$el),t(this.dividers[1]).insertBefore(this.lists[this.lists.length-4].$el),this.base()},flip:function(t,e){this.autoIncrement(),t=t||this.factory.time.getMilitaryTime(!1,this.showSeconds),this.base(t,e)}})}(jQuery),function(t){o.CounterFace=o.Face.extend({shouldAutoIncrement:!1,constructor:function(t,e){"object"!=a(e)&&(e={}),t.autoStart=!!e.autoStart,e.autoStart&&(this.shouldAutoIncrement=!0),t.increment=function(){t.countdown=!1,t.setTime(t.getTime().getTimeSeconds()+1)},t.decrement=function(){t.countdown=!0;var e=t.getTime().getTimeSeconds();e>0&&t.setTime(e-1)},t.setValue=function(e){t.setTime(e)},t.setCounter=function(e){t.setTime(e)},this.base(t,e)},build:function(){var e=this,i=this.factory.$el.find("ul"),n=this.factory.getTime().digitize([this.factory.getTime().time]);n.length>i.length&&t.each(n,(function(t,i){var n=e.createList(i);n.select(i)})),t.each(this.lists,(function(t,e){e.play()})),this.base()},flip:function(t,e){this.shouldAutoIncrement&&this.autoIncrement(),t||(t=this.factory.getTime().digitize([this.factory.getTime().time])),this.base(t,e)},reset:function(){this.factory.time=new o.Time(this.factory,this.factory.original?Math.round(this.factory.original):0),this.flip()}})}(jQuery),function(t){o.DailyCounterFace=o.Face.extend({showSeconds:!0,constructor:function(t,e){this.base(t,e)},build:function(e){var i=this,n=this.factory.$el.find("ul"),s=0;e=e||this.factory.time.getDayCounter(this.showSeconds),e.length>n.length&&t.each(e,(function(t,e){i.createList(e)})),this.showSeconds?t(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length-2].$el):s=2,t(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length-4+s].$el),t(this.createDivider("Hours")).insertBefore(this.lists[this.lists.length-6+s].$el),t(this.createDivider("Days",!0)).insertBefore(this.lists[0].$el),this.base()},flip:function(t,e){t||(t=this.factory.time.getDayCounter(this.showSeconds)),this.autoIncrement(),this.base(t,e)}})}(jQuery),function(t){o.HourlyCounterFace=o.Face.extend({constructor:function(t,e){this.base(t,e)},build:function(e,i){var n=this,s=this.factory.$el.find("ul");i=i||this.factory.time.getHourCounter(),i.length>s.length&&t.each(i,(function(t,e){n.createList(e)})),t(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length-2].$el),t(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length-4].$el),e||t(this.createDivider("Hours",!0)).insertBefore(this.lists[0].$el),this.base()},flip:function(t,e){t||(t=this.factory.time.getHourCounter()),this.autoIncrement(),this.base(t,e)},appendDigitToClock:function(t){this.base(t),this.dividers[0].insertAfter(this.dividers[0].next())}})}(jQuery),function(t){o.MinuteCounterFace=o.HourlyCounterFace.extend({clearExcessDigits:!1,constructor:function(t,e){this.base(t,e)},build:function(){this.base(!0,this.factory.time.getMinuteCounter())},flip:function(t,e){t||(t=this.factory.time.getMinuteCounter()),this.base(t,e)}})}(jQuery),function(t){o.TwelveHourClockFace=o.TwentyFourHourClockFace.extend({meridium:!1,meridiumText:"AM",build:function(){var e=this.factory.time.getTime(!1,this.showSeconds);this.base(e),this.meridiumText=this.getMeridium(),this.meridium=t(['<ul class="flip-clock-meridium">',"<li>",'<a href="#">'+this.meridiumText+"</a>","</li>","</ul>"].join("")),this.meridium.insertAfter(this.lists[this.lists.length-1].$el)},flip:function(t,e){this.meridiumText!=this.getMeridium()&&(this.meridiumText=this.getMeridium(),this.meridium.find("a").html(this.meridiumText)),this.base(this.factory.time.getTime(!1,this.showSeconds),e)},getMeridium:function(){return(new Date).getHours()>=12?"PM":"AM"},isPM:function(){return"PM"==this.getMeridium()},isAM:function(){return"AM"==this.getMeridium()}})}(jQuery),function(t){o.Lang.Arabic={years:"سنوات",months:"شهور",days:"أيام",hours:"ساعات",minutes:"دقائق",seconds:"ثواني"},o.Lang["ar"]=o.Lang.Arabic,o.Lang["ar-ar"]=o.Lang.Arabic,o.Lang["arabic"]=o.Lang.Arabic}(jQuery),function(t){o.Lang.Danish={years:"År",months:"Måneder",days:"Dage",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},o.Lang["da"]=o.Lang.Danish,o.Lang["da-dk"]=o.Lang.Danish,o.Lang["danish"]=o.Lang.Danish}(jQuery),function(t){o.Lang.German={years:"Jahre",months:"Monate",days:"Tage",hours:"Stunden",minutes:"Minuten",seconds:"Sekunden"},o.Lang["de"]=o.Lang.German,o.Lang["de-de"]=o.Lang.German,o.Lang["german"]=o.Lang.German}(jQuery),function(t){o.Lang.English={years:"Years",months:"Months",days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},o.Lang["en"]=o.Lang.English,o.Lang["en-us"]=o.Lang.English,o.Lang["english"]=o.Lang.English}(jQuery),function(t){o.Lang.Spanish={years:"A&#241;os",months:"Meses",days:"D&#237;as",hours:"Horas",minutes:"Minutos",seconds:"Segundo"},o.Lang["es"]=o.Lang.Spanish,o.Lang["es-es"]=o.Lang.Spanish,o.Lang["spanish"]=o.Lang.Spanish}(jQuery),function(t){o.Lang.Finnish={years:"Vuotta",months:"Kuukautta",days:"Päivää",hours:"Tuntia",minutes:"Minuuttia",seconds:"Sekuntia"},o.Lang["fi"]=o.Lang.Finnish,o.Lang["fi-fi"]=o.Lang.Finnish,o.Lang["finnish"]=o.Lang.Finnish}(jQuery),function(t){o.Lang.French={years:"Ans",months:"Mois",days:"Jours",hours:"Heures",minutes:"Minutes",seconds:"Secondes"},o.Lang["fr"]=o.Lang.French,o.Lang["fr-ca"]=o.Lang.French,o.Lang["french"]=o.Lang.French}(jQuery),function(t){o.Lang.Italian={years:"Anni",months:"Mesi",days:"Giorni",hours:"Ore",minutes:"Minuti",seconds:"Secondi"},o.Lang["it"]=o.Lang.Italian,o.Lang["it-it"]=o.Lang.Italian,o.Lang["italian"]=o.Lang.Italian}(jQuery),function(t){o.Lang.Latvian={years:"Gadi",months:"Mēneši",days:"Dienas",hours:"Stundas",minutes:"Minūtes",seconds:"Sekundes"},o.Lang["lv"]=o.Lang.Latvian,o.Lang["lv-lv"]=o.Lang.Latvian,o.Lang["latvian"]=o.Lang.Latvian}(jQuery),function(t){o.Lang.Dutch={years:"Jaren",months:"Maanden",days:"Dagen",hours:"Uren",minutes:"Minuten",seconds:"Seconden"},o.Lang["nl"]=o.Lang.Dutch,o.Lang["nl-be"]=o.Lang.Dutch,o.Lang["dutch"]=o.Lang.Dutch}(jQuery),function(t){o.Lang.Norwegian={years:"År",months:"Måneder",days:"Dager",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},o.Lang["no"]=o.Lang.Norwegian,o.Lang["nb"]=o.Lang.Norwegian,o.Lang["no-nb"]=o.Lang.Norwegian,o.Lang["norwegian"]=o.Lang.Norwegian}(jQuery),function(t){o.Lang.Portuguese={years:"Anos",months:"Meses",days:"Dias",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},o.Lang["pt"]=o.Lang.Portuguese,o.Lang["pt-br"]=o.Lang.Portuguese,o.Lang["portuguese"]=o.Lang.Portuguese}(jQuery),function(t){o.Lang.Russian={years:"лет",months:"месяцев",days:"дней",hours:"часов",minutes:"минут",seconds:"секунд"},o.Lang["ru"]=o.Lang.Russian,o.Lang["ru-ru"]=o.Lang.Russian,o.Lang["russian"]=o.Lang.Russian}(jQuery),function(t){o.Lang.Swedish={years:"År",months:"Månader",days:"Dagar",hours:"Timmar",minutes:"Minuter",seconds:"Sekunder"},o.Lang["sv"]=o.Lang.Swedish,o.Lang["sv-se"]=o.Lang.Swedish,o.Lang["swedish"]=o.Lang.Swedish}(jQuery);var u=o,l=(i("8f77"),i("93bf")),f=i.n(l),h=i("3662"),d={data:function(){return{target:"sh000001",interval:-1}},mounted:function(){var t=this;this.target=this.$route.query.target||"sh000001";var e=window.$,i={usr_$dji:"DJIA",hf_CHA50CFD:"A50"},n=new u(e(".integer"),"0000",{clockFace:"Counter",minimumDigits:4}),s=new u(e(".decimal"),"00",{clockFace:"Counter"});e(".clock").ready((function(){e("#screenfull").click((function(){f.a.isEnabled&&f.a.toggle(e("body")[0])})),e(".nav li").click((function(){n=new u(e(".integer"),"0000",{clockFace:"Counter",minimumDigits:4}),s=new u(e(".decimal"),"00",{clockFace:"Counter"}),e(".nav .select").html('<span style="color: #FFF;">'.concat((i[t.target]||t.target).toUpperCase(),"</span>"))})),e(".nav .select").html('<span style="color: #FFF;">'.concat((i[t.target]||t.target).toUpperCase(),"</span>")),t.interval=setInterval(Object(r["a"])(regeneratorRuntime.mark((function i(){var r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:e("#scripts").empty(),r="https://hq.sinajs.cn/list=".concat(t.target),Object(h["a"])(r,(function(){try{var i=window["hq_str_".concat(t.target)];if(!i)return;var r=0,a=0,o=0,c=0,u=i.split(",");"usr_$dji"===t.target?(a=+u[26],r=+u[1],o=+u[1].split(".")[0],c=+(+u[1]).toFixed(2).split(".")[1],e(".flip-clock-wrapper").css("zoom","2.5")):"hf_CHA50CFD"===t.target?(a=+u[7],r=+u[0],o=+u[0].split(".")[0],c=+(+u[0]).toFixed(2).split(".")[1],e(".flip-clock-wrapper").css("zoom","2.5")):(a=+u[2],r=+u[3],o=+u[3].split(".")[0],c=+(+u[3]).toFixed(2).split(".")[1],e(".flip-clock-wrapper").css("zoom","3.0")),n.setTime("".concat(o)),s.setTime("".concat(c)),r>a?e(".flip-clock-wrapper ul li a div div.inn").css("color","#FFA4A4"):r<a?e(".flip-clock-wrapper ul li a div div.inn").css("color","#89E7B3"):e(".flip-clock-wrapper ul li a div div.inn").css("color","#FFFFFF")}catch(l){}}),document.querySelector("#scripts"));case 3:case"end":return i.stop()}}),i)}))),3e3)}))},destroyed:function(){clearInterval(this.interval)}},g=d,m=(i("6f5b"),i("2877")),p=Object(m["a"])(g,n,s,!1,null,"6df40d8c",null);e["default"]=p.exports},e8b5:function(t,e,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-23b1cff7.8db8bdb2.js.map