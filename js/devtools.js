(function(t){function e(e){for(var r,s,a=e[0],c=e[1],l=e[2],f=0,p=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={devtools:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;i.push([3,"chunk-vendors"]),n()})({"28b2":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=(n("b0c0"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid",attrs:{id:"app"}},[e("div",{staticClass:"button-content"},t._l(t.tabList,(function(n,r){return e("div",{key:r,class:t.type==n.type?"checkButton":"button",on:{click:function(e){return t.checkTab(n.type)}}},[t._v(" "+t._s(n.name)+" ")])})),0),1==t.type?[e("div",{staticClass:"select-box"},[e("div",{staticClass:"king-content"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKey,expression:"searchKey"}],staticClass:"king-input",staticStyle:{width:"300px"},attrs:{type:"text",placeholder:"关键字检索"},domProps:{value:t.searchKey},on:{input:function(e){e.target.composing||(t.searchKey=e.target.value)}}}),e("div",{staticClass:"king-button",on:{click:function(e){return t.queryKey()}}},[t._v(" 查询 ")]),e("span",{staticClass:"tips",staticStyle:{"font-size":"14px"}},[t._v("共"+t._s(t.rowContent.length)+"个资源文件")]),e("span",{staticClass:"tips"},[t._v("注：点击蓝色区域链接即可跳转对应资源")])])]),1==t.type?e("div",{attrs:{id:"file-list"},on:{click:t.fileList}},t._l(t.rowContent,(function(n,r){return e("li",{key:r,staticStyle:{"list-style":"none"},attrs:{"data-file-type":n.type,"data-file-lang":n.codeLang}},[null!=n.url&&""!=n.url?e("div",{staticClass:"file-list-link-box"},[e("div",{staticClass:"isSq",on:{click:function(e){return t.isSq(n)}}},[t._v(" "+t._s(n.isShow?"▼":"▶")+" ")]),t._v(" 资源"+t._s(r+1)+"： "),e("a",{staticStyle:{color:"#ffffff"},attrs:{href:"javascript:;"},on:{click:function(e){return t.goUrl(n.url)}}},[t._v(" "+t._s(n.url))])]):t._e(),n.isShow?e("pre",[t._v(t._s(n.annotationCode))]):t._e()])})),0):t._e()]:t._e()],2)}),i=[],s=(n("4de4"),n("d3b7"),n("ac1f"),n("466d"),n("a15b"),n("4d63"),n("25f0"),n("5319"),n("159b"),n("1157")),a=n.n(s),c={name:"SuperSerachPlusTools",data:function(){return{searchKey:"",rowContent:[],type:1,tabList:[{name:"注释扫描",type:1},{name:"其他",type:2}]}},created:function(){this.init()},comments:function(){},methods:{checkTab:function(t){this.type=t},isSq:function(t){t.isShow=!t.isShow},queryKey:function(){this.searchKey},fileList:function(){var t=this;a()("#filterType,#filterLang").change((function(){var e=a()(this).children("option:selected").val(),n=a()(this).attr("id");t.state[n]=e;var r=a()("#file-list li");r.each((function(e){a()(this).attr("data-file-type")!==t.state["filterType"]&&"allType"!==t.state["filterType"]||a()(this).attr("data-file-lang")!==t.state["filterLang"]&&"allLang"!==t.state["filterLang"]?a()(this).hide():a()(this).show()}))})),a()("#file-list").on("click","a",(function(){t.openResource(a()(this).html())}))},goUrl:function(t){chrome.devtools.panels.openResource(t)},filterResourcesArr:function(t){console.table(t);var e=t.filter((function(t){if(("script"===t["type"]||"stylesheet"===t["type"]||"document"===t["type"])&&-1===t["url"].indexOf("chrome-extension")&&-1===t["url"].indexOf("file://"))return t}));return e},getResourcesAnnotationCode:function(t){var e=/<!--[^\!\[]*?(?<!\/\/)-->|\/\/.*(?:\r|\n|$)|(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/gm,n=t.match(e);return null===n?"":n.join("")},appendResourcesDom:function(t){var e=this.getResourcesAnnotationCode(t.content),n=new RegExp("[\\u4E00-\\u9FFF]+","g"),r=n.test(e)?"gb":"en";if(""!==e){var o={type:t.type,codeLang:r,url:t.url,annotationCode:e,isShow:!0};this.rowContent.push(o)}},htmlEncodeByRegExp:function(t){var e="";return 0==t.length?"":(e=t.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=e.replace(/ /g,"&nbsp;"),e=e.replace(/\'/g,"&#39;"),e=e.replace(/\"/g,"&quot;"),e)},getResources:function(){var t=this;chrome.devtools.inspectedWindow.getResources((function(e){var n=t.filterResourcesArr(e);n.forEach((function(e,n){e.getContent((function(n){var r=e;r["content"]=n,t.appendResourcesDom(r)}))}))}))},openResource:function(t){chrome.devtools.panels.openResource(t)},init:function(){this.getResources()}}},l=c,u=(n("cb69"),n("2877")),f=Object(u["a"])(l,o,i,!1,null,null,null),p=f.exports;new r["default"]({render:function(t){return t(p)}}).$mount("#app")},3:function(t,e,n){t.exports=n("28b2")},4290:function(t,e,n){},cb69:function(t,e,n){"use strict";n("4290")}});