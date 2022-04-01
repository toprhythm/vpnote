(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{658:function(s,e,n){"use strict";n.r(e);var a=n(35),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_17-商品详情-基础布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_17-商品详情-基础布局"}},[s._v("#")]),s._v(" 17-商品详情-基础布局")]),s._v(" "),n("blockquote",[n("p",[s._v("目的：完成商品详情基础布局，路由配置，搭好页面架子。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://zhoushugang.gitee.io/erabbit-client-pc-document/assets/img/1610616714960.da2933e1.png",alt:"detail"}})]),s._v(" "),n("p",[s._v("大致步骤：")]),s._v(" "),n("ul",[n("li",[s._v("准备组件结构容器")]),s._v(" "),n("li",[s._v("提取商品推荐组件且使用")]),s._v(" "),n("li",[s._v("配置路由和组件")])]),s._v(" "),n("p",[s._v("落地代码：")]),s._v(" "),n("ul",[n("li",[s._v("页面组件：src/views/goods/index.vue")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("template>\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" <div class='xtx-goods-page'>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('   <div class="container">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 面包屑 --\x3e\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     <XtxBread>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('       <XtxBreadItem to="/">首页</XtxBreadItem>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('       <XtxBreadItem to="/">手机</XtxBreadItem>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('       <XtxBreadItem to="/">华为</XtxBreadItem>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('       <XtxBreadItem to="/">p30</XtxBreadItem>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     </XtxBread>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 商品信息 --\x3e\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <div class="goods-info"></div>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 商品推荐 --\x3e\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     <GoodsRelevant />\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 商品详情 --\x3e\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <div class="goods-footer">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('       <div class="goods-article">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("         \x3c!-- 商品+评价 --\x3e\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('         <div class="goods-tabs"></div>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("         \x3c!-- 注意事项 --\x3e\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('         <div class="goods-warn"></div>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       </div>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       \x3c!-- 24热榜+专题推荐 --\x3e\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('       <div class="goods-aside"></div>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     </div>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   </div>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" </div>\n")])]),n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("/template>\n")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("script>\n")])]),s._v("import GoodsRelevant from './components/goods-relevant'\nexport default {\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" name: 'XtxGoodsPage',\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" components: { , GoodsRelevant }\n")])]),s._v("}\n"),n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("/script>\n")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("style scoped lang='less'>\n")])]),s._v(".goods-info {\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" min-height: 600px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" background: #fff;\n")])]),s._v("}\n.goods-footer {\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" display: flex;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" margin-top: 20px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" .goods-article {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   width: 940px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   margin-right: 20px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" .goods-aside {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   width: 280px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   min-height: 1000px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])]),s._v("}\n.goods-tabs {\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" min-height: 600px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" background: #fff;\n")])]),s._v("}\n.goods-warn {\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" min-height: 600px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" background: #fff;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" margin-top: 20px;\n")])]),s._v("}\n"),n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("/style>\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br")])]),n("ul",[n("li",[s._v("商品推荐组件：src/views/goods/components/goods-relevant.vue")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("template>\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" <div class='goods-relevant'></div>\n")])]),n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("/template>\n")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("script>\n")])]),s._v("export default {\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" name: 'GoodsRelevant'\n")])]),s._v("}\n"),n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("/script>\n")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("style scoped lang='less'>\n")])]),s._v(".goods-relevant {\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" background: #fff;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" min-height: 460px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" margin-top: 20px;\n")])]),s._v("}\n"),n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("/style>\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("ul",[n("li",[s._v("路由配置：src/router/index.js")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("const Goods = () => import('@/views/goods/index')\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("children: [\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     { path: '/', component: Home },\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     { path: '/category/:id', component: TopCategory },\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     { path: '/category/sub/:id', component: SubCategory },\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("      { path: '/product/:id', component: Goods }\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ]\n")])]),s._v("···")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);