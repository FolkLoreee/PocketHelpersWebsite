(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{190:function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},194:function(t,n,e){t.exports=e.p+"img/5d8b8fa.png"},195:function(t,n,e){t.exports=e.p+"img/0f92b4b.png"},196:function(t,n,e){t.exports=e.p+"img/6c432a9.png"},198:function(t,n,e){t.exports=e.p+"img/dfd717c.png"},199:function(t,n,e){var content=e(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("7e010449",content,!0,{sourceMap:!1})},214:function(t,n,e){"use strict";var o=e(199);e.n(o).a},215:function(t,n,e){var o=e(50),r=e(190),c=e(198);n=o(!1);var l=r(c);n.push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}.fscreenstage{width:100vw;height:100vh;background-repeat:no-repeat;background-size:cover;background-image:url("+l+")}.stagenav{position:fixed;bottom:0}.stageBtn{bottom:37.5vh}.stageBtn,.stageBtn2{position:absolute;color:#ffb6c1;left:26vw;width:9vw;height:5vh}.stageBtn2{bottom:45vh}.navbtn{width:7.5vw;height:7.5vh}",""]),t.exports=n},225:function(t,n,e){"use strict";e.r(n);var o={components:{},data:function(){return{isShown:!0}}},r=(e(214),e(42)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"fscreenstage"},[o("div",[t.isShown?o("b-alert",{attrs:{id:"oneAlert",variant:"success",show:""}},[o("p",[t._v(" You have one note to write ")]),t._v(" "),o("b-button",{attrs:{variant:"primary"},on:{click:function(n){return t.$bvToast.show("example-toast")}}},[t._v(" Write ")])],1):t._e(),t._v(" "),o("b-toast",{attrs:{"auto-hide-delay":"1000",id:"note-toast",title:"Note to PwD",static:""}},[t._v("\nNote sent!\n")]),t._v(" "),o("b-toast",{attrs:{id:"example-toast",title:"Note to PwD",static:"","no-auto-hide":""}},[o("b-form-input",{attrs:{placeholder:"Enter your text..."}}),t._v(" "),o("b-button",{attrs:{variant:"primary"},on:{click:function(n){t.$bvToast.show("note-toast"),t.$bvToast.hide("example-toast"),t.isShown=!t.isShown}}},[t._v("\n    Send\n")])],1),t._v(" "),o("b-navbar",{staticClass:"stagenav",attrs:{toggleable:"lg",type:"light",variant:"warning"}},[o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{staticClass:"ml-auto"},[o("b-nav-item",{attrs:{to:"/memory",nuxt:""}},[o("img",{staticClass:"navbtn",attrs:{src:e(194)}})]),t._v(" "),o("b-nav-item",{attrs:{to:"/character",nuxt:""}},[o("img",{staticClass:"navbtn",attrs:{src:e(195)}})]),t._v(" "),o("b-nav-item",{attrs:{to:"/units",nuxt:""}},[o("img",{staticClass:"navbtn",attrs:{src:e(196)}})])],1)],1)],1)],1),t._v(" "),o("b-button",{staticClass:"stageBtn",attrs:{to:"/gameplay",nuxt:""}},[t._v("\n  Stage 1\n")]),t._v(" "),o("b-button",{staticClass:"stageBtn2",attrs:{to:"/gameplay",nuxt:""}},[t._v("\n  Stage 2\n")])],1)}),[],!1,null,null,null);n.default=component.exports}}]);