(function(t){function e(e){for(var s,a,i=e[0],l=e[1],u=e[2],m=0,p=[];m<i.length;m++)a=i[m],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],s=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var s={},n={app:0},o=[];function a(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=s,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(r,s,function(e){return t[e]}.bind(null,s));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/fibonacci_counter/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"container",attrs:{id:"app"}},[r("h1",[t._v("Fibonacci calculator")]),r("form",{staticClass:"card",on:{submit:function(e){return e.preventDefault(),t.calculateSeries(e)}}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-sm-4 col-md-2"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Max Numbers")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.maxNumbers,expression:"maxNumbers"}],staticClass:"form-control text-center",attrs:{type:"number"},domProps:{value:t.maxNumbers},on:{input:function(e){e.target.composing||(t.maxNumbers=e.target.value)}}})])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4 text-left"},[r("legend",[t._v("Recursive method")]),r("div",{staticClass:"form-group"},[r("label",[t._v("Time")]),r("div",{staticClass:"form-control-plaintext text-left",attrs:{type:"text"},domProps:{textContent:t._s(t.results.recursive.time+" ms")}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Numbers")]),r("textarea",{staticClass:"form-control text-left",attrs:{type:"text",readonly:"",rows:"5"},domProps:{textContent:t._s(t.results.recursive.numbers.join(", "))}})])]),r("div",{staticClass:"col-sm-4 text-left"},[r("legend",[t._v("For i method")]),r("div",{staticClass:"form-group"},[r("label",[t._v("Time")]),r("div",{staticClass:"form-control-plaintext text-left",attrs:{type:"text"},domProps:{textContent:t._s(t.results.for.time+" ms")}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Numbers")]),r("textarea",{staticClass:"form-control text-left",attrs:{type:"text",readonly:"",rows:"5"},domProps:{textContent:t._s(t.results.for.numbers.join(", "))}})])]),r("div",{staticClass:"col-sm-4 text-left"},[r("legend",[t._v("Map method")]),r("div",{staticClass:"form-group"},[r("label",[t._v("Time")]),r("div",{staticClass:"form-control-plaintext text-left",attrs:{type:"text"},domProps:{textContent:t._s(t.results.map.time+" ms")}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Numbers")]),r("textarea",{staticClass:"form-control text-left",attrs:{type:"text",readonly:"",rows:"5"},domProps:{textContent:t._s(t.results.map.numbers.join(", "))}})])])]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Calculate")])])])])},o=[];r("d81d");function a(t){for(var e=performance.now(),r=arguments.length,s=new Array(r>1?r-1:0),n=1;n<r;n++)s[n-1]=arguments[n];var o=t.apply(void 0,s),a=performance.now();return{time:a-e,result:o}}var i=r("2909");function l(t){if(1===t)return[0,1];var e=l(t-1);return e.push(e[e.length-1]+e[e.length-2]),e}function u(t){for(var e=[],r=0;r<=+t;r++)e[r]=r<2?r:e[r-2]+e[r-1];return e}function c(t){var e=Object(i["a"])(Array(+t+1));return e.map((function(t,e,r){t=e<2?e:r[e-2]+r[e-1],r[e]=t})),e}var m={name:"App",data:function(){return{maxNumbers:1e3,results:{recursive:{time:0,numbers:[]},for:{time:0,numbers:[]},map:{time:0,numbers:[]}}}},methods:{calculateSeries:function(){var t=a(l,this.maxNumbers),e=a(u,this.maxNumbers),r=a(c,this.maxNumbers);this.results.recursive={time:t.time,numbers:t.result},this.results.for={time:e.time,numbers:e.result},this.results.map={time:r.time,numbers:r.result}}}},p=m,f=(r("5c0b"),r("2877")),d=Object(f["a"])(p,n,o,!1,null,null,null),v=d.exports;r("4989");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var s=r("9c0c"),n=r.n(s);n.a},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.58368b40.js.map