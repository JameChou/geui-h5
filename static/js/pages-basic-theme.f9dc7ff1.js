(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basic-theme"],{"0093":function(t,e,n){var i=n("df6e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("f5db6892",i,!0,{sourceMap:!1,shadowMode:!1})},"102b":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理we，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.ui-title[data-v-e1aff3fc]{display:flex;align-items:center;justify-content:center;width:100%;color:var(--ui-text-regular);min-height:%?100?%;margin-top:%?15?%}.ui-title .title[data-v-e1aff3fc]{width:%?688?%;height:100%}.ui-title .title.border[data-v-e1aff3fc]{padding-bottom:%?25?%;border-bottom:var(--ui-bottom-border-regular)}.ui-title .category[data-v-e1aff3fc]{font-style:normal;font-weight:600;font-size:%?19.2?%;line-height:158%;letter-spacing:.15em;color:#00b670}.ui-title .title-body[data-v-e1aff3fc]{display:flex;flex-wrap:wrap;align-items:center;font-style:normal;font-weight:600;font-size:%?38.5?%;line-height:138%}.ui-title .title-body .content[data-v-e1aff3fc]{flex:1;margin-left:%?8?%}.ui-title .title-body .action[data-v-e1aff3fc]{font-style:normal;font-weight:400;font-size:%?30.8?%;line-height:150%;color:var(--ui-text-regular-3);display:flex;align-items:center}',""]),t.exports=e},"12a0":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={props:{datas:{type:Array,default:[]},value:{type:Number,default:-1}},data:function(){return{selectIndex:-1}},created:function(){this.selectIndex=this.value},methods:{chooseItem:function(t,e){this.selectIndex=e,this.$emit("choose-item",{item:t,index:e})}}};e.default=i},"24dc":function(t,e,n){"use strict";n.r(e);var i=n("80bb"),a=n("983b");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("7442");var c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"e2414018",null,!1,i["a"],void 0);e["default"]=s.exports},2793:function(t,e,n){"use strict";n.r(e);var i=n("de17"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"35f8":function(t,e,n){var i=n("102b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("670fb3d2",i,!0,{sourceMap:!1,shadowMode:!1})},3738:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={gePage:n("ec77").default,geNavbar:n("2d2f").default,geSelectList:n("24dc").default,geTitle:n("44ff").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ge-page",{attrs:{"no-tabs":!0,"background-image":t.backImage}},[n("ge-navbar",{attrs:{opacity:!0,title:"主题"}}),n("v-uni-view",{staticClass:"ui-container"},[n("ge-select-list",{attrs:{datas:t.selectList,value:t.initValue},on:{"choose-item":function(e){arguments[0]=e=t.$handleEvent(e),t.chooseItem.apply(void 0,arguments)}}}),n("ge-title",{attrs:{category:!0,"category-content":"BACKGROUND","title-content":"更换背景","title-icon":"radio-button",border:!0}}),n("v-uni-button",{staticClass:"ui-button block blue margin-top",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeBack.apply(void 0,arguments)}}},[t._v("点击切换背景图片")]),n("ge-title",{attrs:{category:!0,"category-content":"EXAMPLE","title-content":"适配的一些组件例子","title-icon":"radio-button",border:!0}}),n("v-uni-view",{staticClass:"ui-flex align-center ui-flex-wrap margin-top"},[n("v-uni-button",{staticClass:"ui-button blue shadow"},[t._v("Blue")]),n("v-uni-button",{staticClass:"ui-button gray shadow"},[t._v("Gray")]),n("v-uni-button",{staticClass:"ui-button primary shadow"},[t._v("Primary")])],1)],1)],1)},o=[]},3787:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{initValue:-1,selectList:[{title:"明亮模式",subTitle:"系统以白色为主色调"},{title:"黑暗模式",subTitle:"系统以黑色为主色调"}],backImage:""}},created:function(){this.initValue="light"!==this.system_theme?1:0},methods:{chooseItem:function(t){var e=0===t.index?"light":"dark";this.$store.commit("setTheme",e)},changeBack:function(){""===this.backImage?this.backImage='url("https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/pics/back2.jpg")':this.backImage=""}}}},"44ff":function(t,e,n){"use strict";n.r(e);var i=n("de6b"),a=n("2793");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("65ef");var c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"e1aff3fc",null,!1,i["a"],void 0);e["default"]=s.exports},"65ef":function(t,e,n){"use strict";var i=n("35f8"),a=n.n(i);a.a},"6b75d":function(t,e,n){"use strict";n.r(e);var i=n("3787"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},7442:function(t,e,n){"use strict";var i=n("0093"),a=n.n(i);a.a},"80bb":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"ui-select-list"},t._l(t.datas,(function(e,i){return n("v-uni-view",{staticClass:"title-section",class:t.selectIndex===i?"checked":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.chooseItem(e,i)}}},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),null!=e.subTitle&&""!==e.subTitle?n("v-uni-view",{staticClass:"sub-title"},[t._v(t._s(e.subTitle))]):t._e()],1)})),1)},a=[]},"983b":function(t,e,n){"use strict";n.r(e);var i=n("12a0"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},de17:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{action:{type:Boolean,default:!1},actionName:{type:String,default:"更多"},actionIcon:{type:String,default:"caret-right"},category:{type:Boolean,default:!1},categoryContent:{type:String,default:""},titleIcon:{type:String,default:""},titleContent:{type:String,default:""},border:{type:Boolean,default:!1}},methods:{actionClick:function(){this.$emit("action-click")}}};e.default=i},de6b:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"ui-title"},[n("v-uni-view",{staticClass:"title",class:t.border?"border":""},[t.category?n("v-uni-text",{staticClass:"category"},[t._v(t._s(t.categoryContent))]):t._e(),n("v-uni-view",{staticClass:"title-body"},[""!==t.titleIcon?n("v-uni-text",{staticClass:"ph",class:"ph-"+t.titleIcon}):t._e(),n("v-uni-text",{staticClass:"content"},[t._v(t._s(t.titleContent))]),t.action?n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.actionClick.apply(void 0,arguments)}}},[n("v-uni-text",[t._v(t._s(t.actionName))]),n("v-uni-text",{staticClass:"ph",class:"ph-"+t.actionIcon})],1):t._e()],1)],1)],1)},a=[]},df6e:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理we，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.ui-select-list[data-v-e2414018]{position:relative;display:flex;flex-direction:column;width:100%;gap:%?30?%;padding-top:%?30?%;padding-bottom:%?30?%}.ui-select-list .title-section[data-v-e2414018]{display:flex;min-width:%?625?%;height:%?138?%;border:none;background-color:rgba(67,118,254,.1);justify-content:center;flex-direction:column;border-radius:%?19?%;position:relative}.ui-select-list .title-section .title[data-v-e2414018]{font-size:%?38?%;font-style:normal;font-weight:600;line-height:138%;letter-spacing:%?0.3?%;width:100%;padding-left:%?30?%}.ui-select-list .title-section .title[data-v-e2414018]:after{font-family:Phosphor;content:"\\ea30";color:var(--ui-select-list-check-border);position:absolute;right:%?30?%;top:%?38?%;display:block;opacity:0}.ui-select-list .title-section .sub-title[data-v-e2414018]{font-size:%?27?%;font-style:normal;font-weight:400;line-height:142%;letter-spacing:%?0.3?%;width:100%;padding-left:%?30?%;color:var(--ui-select-list-subtitle-color)}.ui-select-list .title-section.checked[data-v-e2414018]{background-color:var(--ui-select-list-check-background);border:%?3.8?% solid var(--ui-select-list-check-border);transition:background-color .5s ease-in-out}.ui-select-list .title-section.checked .title[data-v-e2414018]:after{opacity:1;transition:opacity 1s ease-in-out}',""]),t.exports=e},e90b:function(t,e,n){"use strict";n.r(e);var i=n("3738"),a=n("6b75d");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"4bbb9052",null,!1,i["a"],void 0);e["default"]=s.exports}}]);