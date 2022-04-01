(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{659:function(s,e,n){"use strict";n.r(e);var a=n(35),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_18-商品详情-渲染面包屑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_18-商品详情-渲染面包屑"}},[s._v("#")]),s._v(" 18-商品详情-渲染面包屑")]),s._v(" "),n("blockquote",[n("p",[s._v("目的：获取数据，渲染面包屑。")])]),s._v(" "),n("p",[s._v("大致步骤：")]),s._v(" "),n("ul",[n("li",[s._v("定义获取商品详情API函数")]),s._v(" "),n("li",[s._v("在组件setup中获取商品详情数据")]),s._v(" "),n("li",[s._v("定义一个useXxx函数处理数据")])]),s._v(" "),n("p",[s._v("落地代码：")]),s._v(" "),n("ul",[n("li",[s._v("API函数 src/api/product.js")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("import request from '@/utils/request'\n\n/**\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("* 获取商品详情\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("* @param {String} id - 商品ID\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("*/\n")])]),s._v("export const findGoods = (id) => {\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" return request('/goods', 'get', { id })\n")])]),s._v("}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("ul",[n("li",[s._v("useGoods函数 src/views/goods/index.vue 在setup中使用")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("import GoodsRelevant from './components/goods-relevant'\nimport { nextTick, ref, watch } from 'vue'\nimport { findGoods } from '@/api/product'\nimport { useRoute } from 'vue-router'\nexport default {\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" name: 'XtxGoodsPage',\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" components: { GoodsRelevant },\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" setup () {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const goods = useGoods()\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   return { goods }\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])]),s._v("}\n// 获取商品详情\nconst useGoods = () => {\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" // 出现路由地址商品ID发生变化，但是不会重新初始化组件\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" const goods = ref(null)\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" const route = useRoute()\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" watch(() => route.params.id, (newVal) => {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   if (newVal && `/product/${newVal}` === route.path) {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     findGoods(route.params.id).then(data => {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       // 让商品数据为null让后使用v-if的组件可以重新销毁和创建\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       goods.value = null\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       nextTick(() => {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("         goods.value = data.result\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       })\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     })\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }, { immediate: true })\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" return goods\n")])]),s._v("}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("ul",[n("li",[s._v("防止报错，加载完成goods再显示所有内容")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("div class='xtx-goods-page' v-if=\"goods\">\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("渲染面包屑")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("!-- 面包屑 --\x3e\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     <XtxBread>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('       <XtxBreadItem to="/">首页</XtxBreadItem>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       <XtxBreadItem :to=\"'/category/'+goods.categories[0].id\">{{goods.categories[0].name}}</XtxBreadItem>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       <XtxBreadItem :to=\"'/category/sub/'+goods.categories[1].id\">{{goods.categories[1].name}}</XtxBreadItem>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       <XtxBreadItem>{{goods.name}}</XtxBreadItem>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     </XtxBread>\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);