(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-loading"],{"0589":function(n,t,e){"use strict";var a=e("2d09"),i=e.n(a);i.a},"2d09":function(n,t,e){var a=e("94b5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("717b3bab",a,!0,{sourceMap:!1,shadowMode:!1})},3013:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var a={gePage:e("ec77").default,geLottie:e("1961").default},i=function(){var n=this.$createElement,t=this._self._c||n;return t("ge-page",{attrs:{"no-tabs":!0,loading:!1,backgroundImage:"none"}},[t("v-uni-view",{staticClass:"loading-container"},[t("ge-lottie",{attrs:{canvasId:"animation1",data:this.animationData,width:"700rpx",height:"700rpx"}}),t("v-uni-view",{staticClass:"text-bold text-body-16"},[this._v("加载中...")])],1)],1)},o=[]},3882:function(n,t,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("c7eb")),o=a(e("1da1")),r={data:function(){return{animationData:null}},onLoad:function(){var n=this;return(0,o.default)((0,i.default)().mark((function t(){var e,a,o;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,uni.request({url:"https://mp-093771b9-58d4-4c63-982d-8d3dc351dede.cdn.bspapp.com/animation/animation_welcome.json"});case 2:e=t.sent,n.animationData=e.data,a=uni.getStorageSync("ge_onboarding_showed"),o=""===a?"/pages/template/onboarding":"/pages/index/index",setTimeout((function(){""===a?uni.navigateTo({url:o}):uni.switchTab({url:o})}),1e3);case 7:case"end":return t.stop()}}),t)})))()}};t.default=r},"735eb":function(n,t,e){"use strict";e.r(t);var a=e("3882"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},"94b5":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理we，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.loading-container[data-v-4c92c3e8]{position:relative;width:100%;height:100%;display:flex;align-items:center;flex-direction:column;justify-content:center}',""]),n.exports=t},"9e96":function(n,t,e){"use strict";e.r(t);var a=e("3013"),i=e("735eb");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("0589");var r=e("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"4c92c3e8",null,!1,a["a"],void 0);t["default"]=u.exports}}]);