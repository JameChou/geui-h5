(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-index~pages-basic-animation~pages-basic-button~pages-basic-color~pages-basic-fonts~pages~c2a3ffa0"],{"00e9":function(t,a,i){"use strict";var e=i("bf0e"),n=i.n(e);n.a},"00e94":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理we，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.loading-body[data-v-0c56c074]{width:100%;height:100%;position:fixed;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:6;background-color:var(--ui-bg-glass);-webkit-backdrop-filter:blur(%?19.8?%);backdrop-filter:blur(%?19.8?%)}',""]),t.exports=a},1641:function(t,a,i){"use strict";i.r(a);var e=i("5b30"),n=i.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"2afa":function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var e={geTabbar:i("6fe3").default,geToast:i("d8f2").default},n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"ui-page",class:"theme-"+t.system_theme,style:[{"background-image":""===t.backgroundImage?"":t.backgroundImage}]},[t.isLoading?t._e():i("v-uni-view",{staticClass:"ui-page-back"}),i("v-uni-view",{staticClass:"ui-page-body",class:""===t.target?"":"bg-mask-50",style:[{paddingBottom:t.noTabs?"10rpx":t.paddingBottomHeight+"px"}]},[t._t("default"),t.noTabs?t._e():i("ge-tabbar",{attrs:{transparent:t.tabTransparent,active:t.tabActive,items:t.tabs},on:{"tap-tabbar":function(a){arguments[0]=a=t.$handleEvent(a),t.tapTabbar.apply(void 0,arguments)}}}),t.isLoading?i("v-uni-view",{staticClass:"loading-body"},[i("v-uni-view",{staticClass:"ph ph-arrow-clockwise ui-icon-spin header-34"}),i("v-uni-view",[t._v("加载中")])],1):t._e(),t._t("sheet")],2),i("ge-toast",{attrs:{name:"system_dialog",title:null==t.toast.title?"":t.toast.title,"sub-title":null==t.toast.subTitle?"":t.toast.subTitle,"toast-style":null==t.toast.toastStyle?"info":t.toast.toastStyle,icon:null==t.toast.icon?"":t.toast.icon,duration:null==t.toast.duration?0:t.toast.duration,mask:t.toast.mask,"is-loading":t.toast.isLoading},on:{success:function(a){arguments[0]=a=t.$handleEvent(a),function(a){return t.toast.success(a)}.apply(void 0,arguments)}}})],1)},o=[]},"2f5a":function(t,a,i){var e=i("aed95");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("2ee135bc",e,!0,{sourceMap:!1,shadowMode:!1})},"3ccd":function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"ui-tab-bottom"},[i("v-uni-view",{staticClass:"ui-tabbar",class:t.transparent?"bg-transparent":""},t._l(t.items,(function(a,e){return i("v-uni-view",{key:e,staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tapItem(a,e)}}},["icon"===a.type?i("v-uni-view",{class:t.activeIndex===e?"active":""},[i("v-uni-view",{staticClass:"tab-icon",class:a.icon},[a.notification?i("v-uni-view",{staticClass:"badge"}):t._e()],1),i("v-uni-view",{staticClass:"action-text"},[t._v(t._s(a.name))])],1):t._e(),"button"===a.type?i("v-uni-view",[i("v-uni-button",{staticClass:"tab-button ui-button blue round",class:a.icon})],1):t._e()],1)})),1)],1)},n=[]},"5b30":function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("a9e3");var e={props:{title:{type:String,default:""},subTitle:{type:String,default:""},toastStyle:{type:String,default:"info"},icon:{type:String,default:""},duration:{type:Number,default:1500},mask:{type:[Boolean,String],default:!1},isLoading:{type:[Boolean,String],default:!1}},watch:{title:{handler:function(t){var a=this;t&&!this.isLoading&&setTimeout((function(){a.hide()}),this.duration)}}},computed:{system_navbar_height:function(){return this.$store.getters.system_navbar_height}},methods:{hide:function(){this.$store.commit("setToast",{title:"",subTitle:"",icon:"",toastStyle:"info",duration:1500,mask:!1,isLoading:!1,success:function(){}})}}};a.default=e},"6b5e":function(t,a,i){"use strict";i.r(a);var e=i("a94a"),n=i.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"6fe3":function(t,a,i){"use strict";i.r(a);var e=i("3ccd"),n=i("6b5e");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("00e9");var s=i("f0c5"),r=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"4a18f0d8",null,!1,e["a"],void 0);a["default"]=r.exports},9441:function(t,a,i){"use strict";var e=i("99f3"),n=i.n(e);n.a},"99ba":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理we，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.ui-tab-bottom[data-v-4a18f0d8]{position:fixed;width:100%;bottom:0;z-index:2}.ui-tabbar[data-v-4a18f0d8]{display:flex;align-items:top;justify-content:space-around;background-color:var(--ui-tabbar-bg-primary);-webkit-backdrop-filter:blur(%?36.7?%);backdrop-filter:blur(%?36.7?%);min-height:%?140?%;z-index:2!important;padding-top:%?25?%}.ui-tabbar.bg-transparent[data-v-4a18f0d8]{background-color:initial}.ui-tabbar .item[data-v-4a18f0d8]{color:var(--ui-tabbar-text-color)}.ui-tabbar .item :first-child[class*="ph-"][data-v-4a18f0d8]{text-align:center;justify-content:center;display:flex;font-size:%?44?%}.ui-tabbar .item .action-text[data-v-4a18f0d8]{position:relative;bottom:%?9?%;font-size:%?23?%;font-weight:400;margin-top:%?10?%}.ui-tabbar .item .active[data-v-4a18f0d8]{color:var(--ui-tabbar-active-color);transition:color .5s ease-in-out}.ui-tabbar .item .tab-icon[data-v-4a18f0d8]{position:relative}.ui-tabbar .item .badge[data-v-4a18f0d8]{width:%?15?%;height:%?15?%;position:relative;top:%?0?%;right:%?0?%;background:#e55539;border:%?4?% solid #fff;box-shadow:0 %?4?% %?11.5?% rgba(0,0,0,.2);-webkit-backdrop-filter:blur(%?19.2?%);backdrop-filter:blur(%?19.2?%);border-radius:99px}.ui-tabbar .item .tab-button[data-v-4a18f0d8]{display:flex;align-items:center;justify-content:center;width:%?119?%}',""]),t.exports=a},"99f3":function(t,a,i){var e=i("00e94");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("3a8868bc",e,!0,{sourceMap:!1,shadowMode:!1})},a4c7:function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"ui-toast-box",class:[""!==t.title?"show":"hide",{"bg-mask-80":t.mask||"80"===t.mask},{"bg-mask-20":"20"===t.mask},{"bg-mask-40":"40"===t.mask}],style:{top:t.system_navbar_height+"px"}},[i("v-uni-view",{staticClass:"toast-box-bg"}),i("v-uni-view",{staticClass:"ui-toast",class:[{"":"info"===t.toastStyle},{"toast-neutral-blue":"blue-info"===t.toastStyle},{"toast-warning":"warning"===t.toastStyle},{"toast-success":"success"===t.toastStyle},{"toast-error":"error"===t.toastStyle}],staticStyle:{"z-index":"5"}},[i("v-uni-view",{staticClass:"toast-icon"},[i("v-uni-text",{staticClass:"ph",class:[{icon:""!==t.icon},{"ph-info":""===t.icon&&"info"===t.toastStyle},{"ph-bell-slash":""===t.icon&&"blue-info"===t.toastStyle},{"ph-warning":""===t.icon&&"warning"===t.toastStyle},{"ph-checks":""===t.icon&&"success"===t.toastStyle},{"ph-prohibit":""===t.icon&&"error"===t.toastStyle}]})],1),i("v-uni-view",{staticClass:"toast-content"},[i("v-uni-view",{staticClass:"toast-title"},[t._v(t._s(t.title))]),""!==t.subTitle?i("v-uni-view",{staticClass:"toast-subtitle"},[t._v(t._s(t.subTitle))]):t._e()],1),i("v-uni-view",{staticClass:"toast-op",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hide.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"ph ph-x"})],1)],1)],1)},n=[]},a94a:function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("a9e3");var e={props:{items:{type:Array,default:function(){return[]}},active:{type:Number,default:0},transparent:{type:Boolean,default:!1}},mounted:function(){this.activeIndex=this.active},data:function(){return{activeIndex:0}},methods:{tapItem:function(t,a){"switch"===t.click?uni.switchTab({url:t.url}):"new"===t.click?uni.navigateTo({url:t.url}):this.$emit("tap-tabbar",{item:t,index:a})}}};a.default=e},abf3:function(t,a,i){"use strict";i.r(a);var e=i("ee94"),n=i.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},aed95:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理we，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.ui-toast-box[data-v-75f965b2]{position:fixed;top:0;right:0;bottom:0;left:0;padding-left:%?30?%;padding-right:%?30?%;max-height:%?123?%}.ui-toast-box .toast-box-bg[data-v-75f965b2]{position:fixed;left:%?30?%;z-index:-1;height:%?123?%;background-color:var(--ui-bg-pure-primary);width:calc(100% - %?60?%);border-radius:%?23?%}.ui-toast-box.show[data-v-75f965b2]{overflow-x:hidden;overflow-y:auto;transition:.5s ease-out;opacity:1;z-index:5}.ui-toast-box.hide[data-v-75f965b2]{opacity:0;transition:.5s ease-out;z-index:-2}.ui-toast[data-v-75f965b2]{height:%?123?%;width:100%;display:flex;background-color:var(--ui-toast-netural-bg);align-items:center;position:relative;border-radius:%?23?%}.ui-toast.toast-neutral-blue[data-v-75f965b2]{background-color:var(--ui-toast-blue-bg)}.ui-toast.toast-neutral-blue .toast-icon[data-v-75f965b2]{color:#4376fe}.ui-toast.toast-success[data-v-75f965b2]{background-color:var(--ui-toast-success-bg)}.ui-toast.toast-success .toast-icon[data-v-75f965b2]{color:#00b670}.ui-toast.toast-warning[data-v-75f965b2]{background-color:var(--ui-toast-warning-bg)}.ui-toast.toast-warning .toast-icon[data-v-75f965b2]{color:#fe8e0b}.ui-toast.toast-error[data-v-75f965b2]{background-color:var(--ui-toast-error-bg)}.ui-toast.toast-error .toast-icon[data-v-75f965b2]{color:#e55539}.ui-toast .toast-icon[data-v-75f965b2]{width:%?77?%;height:%?77?%;background-color:var(--ui-toast-icon-bg);border-radius:%?19?%;display:flex;align-items:center;justify-content:center;color:var(--ui-text-regular-3);font-size:%?45?%;position:relative;margin-left:%?23?%}.ui-toast .toast-op[data-v-75f965b2]{font-size:%?40?%;color:var(--ui-text-regular-2);position:absolute;right:%?48?%}.ui-toast .toast-content[data-v-75f965b2]{position:relative;padding-left:%?23?%}.ui-toast .toast-content .toast-title[data-v-75f965b2]{font-style:normal;font-weight:600;font-size:%?30.8?%;line-height:150%}.ui-toast .toast-content .toast-subtitle[data-v-75f965b2]{ont-style:normal;font-weight:400;font-size:%?27?%;line-height:142%;color:var(--ui-text-regular-2)}',""]),t.exports=a},bf0e:function(t,a,i){var e=i("99ba");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("c5d3d20a",e,!0,{sourceMap:!1,shadowMode:!1})},d212:function(t,a,i){"use strict";var e=i("2f5a"),n=i.n(e);n.a},d8f2:function(t,a,i){"use strict";i.r(a);var e=i("a4c7"),n=i("1641");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("d212");var s=i("f0c5"),r=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"75f965b2",null,!1,e["a"],void 0);a["default"]=r.exports},ec77:function(t,a,i){"use strict";i.r(a);var e=i("2afa"),n=i("abf3");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("9441");var s=i("f0c5"),r=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"0c56c074",null,!1,e["a"],void 0);a["default"]=r.exports},ee94:function(t,a,i){"use strict";i("7a82");var e=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("5530"));i("a9e3");var o=i("26cb"),s={props:{tabs:{type:Array,default:function(){return[]}},theme:{type:String,default:"light"},noTabs:{type:Boolean,default:!0},tabActive:{type:Number,default:0},loading:{type:[String,Boolean],default:"auto"},backgroundImage:{type:String,default:""},tabTransparent:{type:Boolean,default:!1}},data:function(){return{paddingBottomHeight:62,isLoading:!1}},computed:(0,n.default)({},(0,o.mapState)({toast:function(t){return t.modal.toast},target:function(t){return t.modal.target}})),created:function(){this.noTabs?this.paddingBottomHeight=this.paddingBottomHeight-20:this.paddingBottomHeight=this.paddingBottomHeight+20,this.isLoading=!1!==this.loading},mounted:function(){var t=this;setTimeout((function(){"auto"===t.loading&&(t.isLoading=!1)}),800)},methods:{tapTabbar:function(t){this.$emit("tap-tabbar",t)}}};a.default=s}}]);