(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-title"],{"102b":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理we，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.ui-title[data-v-e1aff3fc]{display:flex;align-items:center;justify-content:center;width:100%;color:var(--ui-text-regular);min-height:%?100?%;margin-top:%?15?%}.ui-title .title[data-v-e1aff3fc]{width:%?688?%;height:100%}.ui-title .title.border[data-v-e1aff3fc]{padding-bottom:%?25?%;border-bottom:var(--ui-bottom-border-regular)}.ui-title .category[data-v-e1aff3fc]{font-style:normal;font-weight:600;font-size:%?19.2?%;line-height:158%;letter-spacing:.15em;color:#00b670}.ui-title .title-body[data-v-e1aff3fc]{display:flex;flex-wrap:wrap;align-items:center;font-style:normal;font-weight:600;font-size:%?38.5?%;line-height:138%}.ui-title .title-body .content[data-v-e1aff3fc]{flex:1;margin-left:%?8?%}.ui-title .title-body .action[data-v-e1aff3fc]{font-style:normal;font-weight:400;font-size:%?30.8?%;line-height:150%;color:var(--ui-text-regular-3);display:flex;align-items:center}',""]),t.exports=e},"1ef6":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={methods:{tapAction:function(){this.$uiModal.warning("警告","点击了title的更多操作",3e3)}}}},2793:function(t,e,n){"use strict";n.r(e);var i=n("de17"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"35f8":function(t,e,n){var i=n("102b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("670fb3d2",i,!0,{sourceMap:!1,shadowMode:!1})},"44ff":function(t,e,n){"use strict";n.r(e);var i=n("de6b"),a=n("2793");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("65ef");var c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"e1aff3fc",null,!1,i["a"],void 0);e["default"]=r.exports},4817:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={gePage:n("ec77").default,geNavbar:n("2d2f").default,geTitle:n("44ff").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ge-page",{attrs:{"no-tabs":!0}},[n("ge-navbar",{attrs:{opacity:!0,title:"标题"}}),n("v-uni-view",{staticClass:"ui-container"},[n("ge-title",{attrs:{"title-content":"普通标题","title-icon":""}}),n("ge-title",{attrs:{"title-content":"有图标的标题","title-icon":"rocket"}}),n("ge-title",{attrs:{"title-content":"带标签的标题","title-icon":"share-network",category:!0,"category-content":"这是标签"}}),n("ge-title",{attrs:{"title-content":"显示下边框分隔线",border:!0,"title-icon":"arrows-in-line-vertical",category:!0,"category-content":"这是标签"}}),n("ge-title",{attrs:{"title-content":"有操作按钮",border:!0,"title-icon":"radio-button",category:!0,"category-content":"这是标签",action:!0,actionName:"更多(click)"},on:{"action-click":function(e){arguments[0]=e=t.$handleEvent(e),t.tapAction.apply(void 0,arguments)}}})],1)],1)},o=[]},"65ef":function(t,e,n){"use strict";var i=n("35f8"),a=n.n(i);a.a},b184:function(t,e,n){"use strict";n.r(e);var i=n("1ef6"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},dde1:function(t,e,n){"use strict";n.r(e);var i=n("4817"),a=n("b184");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=r.exports},de17:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{action:{type:Boolean,default:!1},actionName:{type:String,default:"更多"},actionIcon:{type:String,default:"caret-right"},category:{type:Boolean,default:!1},categoryContent:{type:String,default:""},titleIcon:{type:String,default:""},titleContent:{type:String,default:""},border:{type:Boolean,default:!1}},methods:{actionClick:function(){this.$emit("action-click")}}};e.default=i},de6b:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"ui-title"},[n("v-uni-view",{staticClass:"title",class:t.border?"border":""},[t.category?n("v-uni-text",{staticClass:"category"},[t._v(t._s(t.categoryContent))]):t._e(),n("v-uni-view",{staticClass:"title-body"},[""!==t.titleIcon?n("v-uni-text",{staticClass:"ph",class:"ph-"+t.titleIcon}):t._e(),n("v-uni-text",{staticClass:"content"},[t._v(t._s(t.titleContent))]),t.action?n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.actionClick.apply(void 0,arguments)}}},[n("v-uni-text",[t._v(t._s(t.actionName))]),n("v-uni-text",{staticClass:"ph",class:"ph-"+t.actionIcon})],1):t._e()],1)],1)],1)},a=[]}}]);