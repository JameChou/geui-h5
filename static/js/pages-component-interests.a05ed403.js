(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-interests"],{"01b6":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return d})),i.d(e,"a",(function(){return n}));var n={gePage:i("ec77").default,geNavbar:i("2d2f").default,geCardGrid:i("ccbc").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ge-page",{attrs:{"no-tabs":!0}},[i("ge-navbar",{attrs:{opactiy:!0,title:"兴趣"}}),i("v-uni-view",{staticClass:"ui-container"},[i("ge-card-grid",{attrs:{items:t.items},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem.apply(void 0,arguments)}}})],1)],1)},d=[]},"320f":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"ui-card-grid"},t._l(t.items,(function(e,n){return i("v-uni-view",{staticClass:"grid-card-item",attrs:{index:n},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.click(e,n)}}},[i("v-uni-image",{attrs:{src:e.image,mode:t.getMode(e)}}),i("v-uni-view",{staticClass:"card-content"},[i("v-uni-view",{staticClass:"card-title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"card-sub"},[t._v(t._s(e.subTitle))])],1)],1)})),1)},a=[]},"45fa":function(t,e,i){"use strict";i.r(e);var n=i("5a74"),a=i.n(n);for(var d in n)["default"].indexOf(d)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(d);e["default"]=a.a},"5a74":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"GeCardGrid",props:{items:{type:Array,default:function(){return[]}}},methods:{click:function(t,e){this.$emit("click",{item:t,index:e})},getMode:function(t){return null==t.mode?"aspectFill":t.mode}}};e.default=n},6595:function(t,e,i){var n=i("e369");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("35600b57",n,!0,{sourceMap:!1,shadowMode:!1})},"6d8f":function(t,e,i){"use strict";i.r(e);var n=i("b1fb"),a=i.n(n);for(var d in n)["default"].indexOf(d)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(d);e["default"]=a.a},"8e2f":function(t,e,i){"use strict";var n=i("6595"),a=i.n(n);a.a},b1fb:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{items:[{image:"https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/dog-avatar.jpeg",title:"萌宠",subTitle:"800已关注"},{image:"https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/food5.jpeg",title:"美食&烹饪",subTitle:"嘿嘿美食哦"},{image:"https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/basketball.jpeg",title:"篮球&体育",subTitle:"800已关注",mode:"aspectFit"},{image:"https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/design.jpeg",title:"工业设计&手办&手绘",subTitle:"800已关注"}]}},methods:{clickItem:function(t){console.log("点击了interest->".concat(t))}}};e.default=n},c0bd:function(t,e,i){"use strict";i.r(e);var n=i("01b6"),a=i("6d8f");for(var d in a)["default"].indexOf(d)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(d);var c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"b2c85dbe",null,!1,n["a"],void 0);e["default"]=r.exports},ccbc:function(t,e,i){"use strict";i.r(e);var n=i("320f"),a=i("45fa");for(var d in a)["default"].indexOf(d)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(d);i("8e2f");var c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"33b9be29",null,!1,n["a"],void 0);e["default"]=r.exports},e369:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理we，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.ui-card-grid[data-v-33b9be29]{display:grid;position:relative;grid-template-columns:auto auto;-webkit-column-gap:%?15?%;column-gap:%?15?%;row-gap:%?15?%}.ui-card-grid .grid-card-item[data-v-33b9be29]{width:%?337?%;height:%?337?%;position:relative}.ui-card-grid .grid-card-item img[data-v-33b9be29],\n.ui-card-grid .grid-card-item uni-image[data-v-33b9be29]{width:%?337?%;height:%?337?%;border-radius:%?11?%}.ui-card-grid .grid-card-item .card-content[data-v-33b9be29]{left:%?11?%;bottom:%?5?%;position:absolute}.ui-card-grid .grid-card-item .card-content .card-title[data-v-33b9be29]{font-style:normal;font-weight:600;font-size:%?38.4?%;line-height:138%;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:%?330?%;display:block}.ui-card-grid .grid-card-item .card-content .card-sub[data-v-33b9be29]{font-style:normal;font-weight:400;font-size:%?23?%;line-height:130%;color:var(--ui-text-regular-3);width:%?330?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}',""]),t.exports=e}}]);