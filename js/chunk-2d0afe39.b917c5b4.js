(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afe39"],{"0ff3":function(e,t,r){"use strict";r.d(t,"c",(function(){return b})),r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return k}));r("a15b"),r("fb6a"),r("d3b7"),r("ac1f"),r("1276");var n=r("b85c");function a(e){if(Array.isArray(e))return e}r("a4d3"),r("e01a"),r("d28b"),r("3ca3"),r("ddb0");function u(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,u=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done);n=!0)if(r.push(s.value),t&&r.length===t)break}catch(c){a=!0,u=c}finally{try{n||null==i["return"]||i["return"]()}finally{if(a)throw u}}return r}}var s=r("06c5");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){return a(e)||u(e,t)||Object(s["a"])(e,t)||i()}r("96cf");var o=r("d4ec"),l=r("bee2"),p=r("ade3"),f=r("1da1"),h=r("3662"),w=function(){function e(t){Object(o["a"])(this,e),Object(p["a"])(this,"url",void 0),Object(p["a"])(this,"wss",void 0),Object(p["a"])(this,"callbacks",{open:[],message:[],close:[]}),Object(p["a"])(this,"retry",0),this.url=t}return Object(l["a"])(e,[{key:"start",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.url){e.next=2;break}return e.abrupt("return");case 2:this.wss=new WebSocket(this.url),this.wss.onopen=function(e){t.fire("open",e),t.retry=0},this.wss.onmessage=function(e){t.fire("message",e)},this.wss.onclose=function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.fire("close",r),!(t.retry>=3)){e.next=4;break}return e.next=4,t.wait(t.retry/3*60*1e3);case 4:t.retry++,t.start();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.intervalOfPing=setInterval((function(){t.wss.send("")}),6e4);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"wait",value:function(e){return new Promise((function(t){setTimeout(t,e)}))}},{key:"fire",value:function(e){if(this.callbacks[e].length){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var u,s=Object(n["a"])(this.callbacks[e]);try{for(s.s();!(u=s.n()).done;){var i=u.value;i.apply(void 0,r)}}catch(c){s.e(c)}finally{s.f()}}}},{key:"on",value:function(e,t){this.callbacks[e].push(t)}},{key:"isRunning",value:function(){return this.wss&&1===+this.wss.readyState}},{key:"stop",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.url=null,this.callbacks={open:[],message:[],close:[]},this.intervalOfPing&&clearInterval(this.intervalOfPing),e.abrupt("return",this.wss&&this.wss.close());case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),y=r("c1df"),v=r.n(y);function m(e){return d.apply(this,arguments)}function d(){return d=Object(f["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.type,n=t.url,a=t.data,e.abrupt("return",new Promise((function(e,t){window.$.ajax({type:r,url:n,dataType:"json",data:a,success:function(){e.apply(void 0,arguments)},error:function(){t.apply(void 0,arguments)}})})));case 2:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}var b=function(){function e(){Object(o["a"])(this,e),Object(p["a"])(this,"wss",void 0),Object(p["a"])(this,"running",!1),Object(p["a"])(this,"type","wss")}return Object(l["a"])(e,[{key:"use",value:function(e){this.type=e}},{key:"jsonp",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="https://hq.sinajs.cn/list=".concat(t.join(",")),e.next=3,Object(h["a"])(r,null,document.querySelector("#scripts"));case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"request",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("wss"!==this.type){e.next=6;break}if(this.isRunning()){e.next=4;break}return e.next=4,this.startWss(t);case 4:e.next=8;break;case 6:return e.next=8,this.jsonp(t);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"startWss",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.length){e.next=2;break}return e.abrupt("return");case 2:return r="http:"===location.protocol?"ws://w.sinajs.cn/wskt":"wss://w.sinajs.cn/wskt",e.next=5,this.stopWss();case 5:return e.next=7,this.jsonp(t);case 7:this.wss=new w(r+"?list="+t.join(",")),this.wss.on("message",(function(e){var t=e.data.split("="),r=c(t,2),n=r[0],a=r[1];window["hq_str_".concat(n)]=a})),this.wss.start(),this.running=!0;case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"isRunning",value:function(){return this.running}},{key:"stopWss",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.wss){e.next=3;break}return e.next=3,this.wss.stop();case 3:this.wss=null,this.running=!1;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),g=function(){function e(){Object(o["a"])(this,e)}return Object(l["a"])(e,[{key:"requestByWeek",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r,a,u,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="http://www.chinamoney.com.cn/ags/ms/cm-u-bond-publish/TicketPutAndBackStatByWeek",r={startWeek:"2002-26",endWeek:v()().format("YYYY-ww"),pageSize:1e4,pageNo:1},e.next=4,m({type:"post",url:t,data:r});case 4:a=e.sent,u=[],s=Object(n["a"])(a.data.resultList.reverse());try{for(s.s();!(i=s.n()).done;)c=i.value,u.push({time:c.startDate,value:+c.netPutIn})}catch(o){s.e(o)}finally{s.f()}return e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"requestByMonth",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r,a,u,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="http://www.chinamoney.com.cn/ags/ms/cm-u-bond-publish/TicketPutAndBackStatByMonth",r={startMonth:"2002-06",endMonth:v()().format("YYYY-MM"),pageSize:1e4,pageNo:1},e.next=4,m({type:"post",url:t,data:r});case 4:a=e.sent,u=[],s=Object(n["a"])(a.data.resultList.reverse());try{for(s.s();!(i=s.n()).done;)c=i.value,u.push({time:c.date,value:+c.netPutIn})}catch(o){s.e(o)}finally{s.f()}return e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"request",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"week",e.abrupt("return","week"===t?this.requestByWeek():this.requestByMonth());case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),k=function(){function e(){Object(o["a"])(this,e)}return Object(l["a"])(e,[{key:"requestNetInFlow",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var r,a,u,s,i,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="https://push2his.eastmoney.com/api/qt/stock/fflow/daykline/get?lmt=0&klt=101&fields1=f1%2Cf2%2Cf3%2Cf7&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58%2Cf59%2Cf60%2Cf61%2Cf62%2Cf63%2Cf64%2Cf65&secid=".concat(t),e.next=3,m({type:"get",url:r});case 3:a=e.sent,u=[],s=Object(n["a"])(a.data.klines);try{for(s.s();!(i=s.n()).done;)c=i.value,o=c.split(","),u.push({time:o[0],value:+o[1]/1e8,small:+o[2]/1e8,medium:+o[3]/1e8,big:+o[4]/1e8,super:+o[5]/1e8})}catch(l){s.e(l)}finally{s.f()}return e.abrupt("return",u);case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"requestSouthOutFlow",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r,a,u,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://datacenter.eastmoney.com/securities/api/data/get?type=RPT_MUTUAL_NETINFLOW_DETAILS&sty=ALL&source=DataCenter&client=WAP&p=&ps=&sr=1&st=TRADE_DATE&filter=(DIRECTION_TYPE=%222%22)(TIME_TYPE=%224%22)&showTime=1",e.next=3,m({type:"get",url:t});case 3:r=e.sent,a=[],u=Object(n["a"])(r.result.data);try{for(u.s();!(s=u.n()).done;)i=s.value,a.push({time:i["TRADE_DATE"].slice(0,10),value:+i["NET_INFLOW_BOTH"]/100})}catch(c){u.e(c)}finally{u.f()}return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"requestNorthInFlow",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r,a,u,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://datacenter.eastmoney.com/securities/api/data/get?type=RPT_MUTUAL_NETINFLOW_DETAILS&sty=ALL&source=DataCenter&client=WAP&p=&ps=&sr=1&st=TRADE_DATE&filter=(DIRECTION_TYPE=%221%22)(TIME_TYPE=%224%22)&showTime=1",e.next=3,m({type:"get",url:t});case 3:r=e.sent,a=[],u=Object(n["a"])(r.result.data);try{for(u.s();!(s=u.n()).done;)i=s.value,a.push({time:i["TRADE_DATE"].slice(0,10),value:+i["NET_INFLOW_BOTH"]/100})}catch(c){u.e(c)}finally{u.f()}return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"requestMargin",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r,a,u,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://datacenter.eastmoney.com/api/data/get?type=RPTA_RZRQ_LSHJ&sty=ALL&source=WEB&st=dim_date&sr=-1&p=1&ps=500&filter=&pageNo=1",e.next=3,m({type:"get",url:t});case 3:r=e.sent,a=[],u=Object(n["a"])(r.result.data.reverse());try{for(u.s();!(s=u.n()).done;)i=s.value,a.push({time:i["DIM_DATE"].slice(0,10),rzrqye:+i["RZRQYE"]/1e8,rzye:+i["RZYE"]/1e8,rqye:+i["RQYE"]/1e8})}catch(c){u.e(c)}finally{u.f()}return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"requestCurrency",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r,a,u,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://datainterface.eastmoney.com/EM_DataCenter/JS.aspx?cb=_datatable7520656=&type=GJZB&sty=ZGZB&js=(%7Bdata%3A%5B(x)%5D%2Cpages%3A(pc)%7D)&p=1&ps=10000&mkt=11",e.next=3,Object(h["a"])(t,null,document.querySelector("#scripts"));case 3:r=[],a=Object(n["a"])(window._datatable7520656.data.reverse());try{for(a.s();!(u=a.n()).done;)s=u.value,i=s.split(","),r.push({time:i[0],m2:{value:+i[1],ratioY:+i[2],ratioM:+i[3]},m1:{value:+i[4],ratioY:+i[5],ratioM:+i[6]},m0:{value:+i[7],ratioY:+i[8],ratioM:+i[9]}})}catch(c){a.e(c)}finally{a.f()}return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"request",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var r,n,a=this,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"1.000300",n={netinflow:function(){return a.requestNetInFlow(r)},northinflow:function(){return a.requestNorthInFlow()},southoutflow:function(){return a.requestSouthOutFlow()},margin:function(){return a.requestMargin()},currency:function(){return a.requestCurrency()}},e.abrupt("return",n[t]());case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}()}}]);