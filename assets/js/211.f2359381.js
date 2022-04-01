(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{674:function(s,n,a){"use strict";a.r(n);var e=a(35),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_16-商品详情-同类推荐组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-商品详情-同类推荐组件"}},[s._v("#")]),s._v(" 16-商品详情-同类推荐组件")]),s._v(" "),a("blockquote",[a("p",[s._v("目的：实现商品的同类推荐与猜你喜欢展示功能。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://zhoushugang.gitee.io/erabbit-client-pc-document/assets/img/1614068706805.373c8315.png",alt:"123"}})]),s._v(" "),a("p",[s._v("大致功能需求：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("完成基础布局（头部），后期改造xtx-carousel.vue组件来展示商品效果。")])]),s._v(" "),a("li",[a("p",[s._v("然后可以通过是否传入商品ID来区别同类推荐和猜你喜欢。\n落的代码开始：")])]),s._v(" "),a("li",[a("p",[s._v("基础布局 src/views/goods/components/goods-relevant.vue")])])]),s._v(" "),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("template>\n")])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(' <div class="goods-relevant">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('   <div class="header">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <i class="icon" />\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <span class="title">同类商品推荐</span>\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   </div>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   \x3c!-- 此处使用改造后的xtx-carousel.vue --\x3e\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" </div>\n")])]),a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("/template>\n")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("script>\n")])]),s._v("export default {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" // 同类推荐，猜你喜欢\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" name: 'GoodsRelevant'\n")])]),s._v("}\n"),a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("/script>\n")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("style scoped lang='less'>\n")])]),s._v(".goods-relevant {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" background: #fff;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" min-height: 460px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" margin-top: 20px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" .header {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   height: 80px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   line-height: 80px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   padding: 0 20px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   .title {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     font-size: 20px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     padding-left: 10px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   .icon {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     width: 16px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     height: 16px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     display: inline-block;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     border-top: 4px solid @xtxColor;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     border-right: 4px solid @xtxColor;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     box-sizing: border-box;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     position: relative;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     transform: rotate(45deg);\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     &::before {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('       content: "";\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       width: 10px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       height: 10px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       position: absolute;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       left: 0;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       top: 2px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       background: lighten(@xtxColor, 40%);\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])]),s._v("}\n"),a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("/style>\n")])])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br")])]),a("ul",[a("li",[s._v("获取数据传入xtx-carousel.vue组件")]),s._v(" "),a("li",[s._v("src/views/goods/index.vue 传ID")])]),s._v(" "),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 商品推荐 --\x3e\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <GoodsRelevant :goodsId="goods.id"/>\n')])])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("src/api/goods.js 定义获取数据的API")])]),s._v(" "),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[s._v("\n/**\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("* 获取商品同类推荐-未传入ID为猜喜欢\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("* @param {String} id - 商品ID\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("* @param {Number} limit - 获取条数\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("*/\n")])]),s._v("export const findRelGoods = (id, limit = 16) => {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" return request('/goods/relevant', 'get', { id, limit })\n")])]),s._v("}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("src/views/goods/components/goods-relevant.vue 获取数据")])]),s._v(" "),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('  <div class="header">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <i class="icon" />\n')])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("      <span class=\"title\">{{goodsId?'同类商品推荐':'猜你喜欢'}}</span>\n")])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   </div>\n")])])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("script>\n")])]),s._v("import { findRelGoods } from '@/api/goods'\nimport { ref } from 'vue'\n// 得到需要的数据\nconst useRelGoodsData = (id) => {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" const sliders = ref([])\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" findRelGoods(id).then(data => {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 每页4条\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const size = 4\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const total = Math.ceil(data.result.length / size)\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   for (let i = 0; i < total; i++) {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     sliders.value.push(data.result.slice(i * size, (i + 1) * size))\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" })\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" return sliders\n")])]),s._v("}\nexport default {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" // 同类推荐，猜你喜欢\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" name: 'GoodsRelevant',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" props: {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   goodsId: {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     type: String,\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     default: undefined\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" },\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" setup (props) {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const sliders = useRelGoodsData(props.goodsId)\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   return { sliders }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])]),s._v("}\n"),a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("/script>\n")])])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" \x3c!-- 此处使用改造后的xtx-carousel.vue --\x3e\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('   <XtxCarousel :sliders="sliders" style="height:380px" auto-play />\n')])])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("改造xtx-carousel.vue组件 src/components/library/xtx-carousel.vue")])]),s._v(" "),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('        <RouterLink v-if="item.hrefUrl" :to="item.hrefUrl">\n')])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('         <img :src="item.imgUrl" alt="">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       </RouterLink>\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('        <div v-else class="slider">\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('          <RouterLink v-for="goods in item" :key="goods.id" :to="`/product/${goods.id}`">\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('            <img :src="goods.picture" alt="">\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('            <p class="name ellipsis">{{goods.name}}</p>\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('            <p class="price">&yen;{{goods.price}}</p>\n')]),a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("          </RouterLink>\n")])])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[s._v("// 轮播商品\n.slider {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" display: flex;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" justify-content: space-around;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" padding: 0 40px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" > a {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   width: 240px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   text-align: center;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   img {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     padding: 20px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     width: 230px!important;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     height: 230px!important;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   .name {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     font-size: 16px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     color: #666;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     padding: 0 40px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   .price {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     font-size: 16px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     color: @priceColor;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     margin-top: 15px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])]),s._v("}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("ul",[a("li",[s._v("覆盖xtx-carousel.vue的样式在 src/views/goods/components/goods-relevant.vue")])]),s._v(" "),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[s._v(":deep(.xtx-carousel) {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" height: 380px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" .carousel {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   &-indicator {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     bottom: 30px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     span {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       &.active {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         background: @xtxColor;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   &-btn {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     top: 110px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     opacity: 1;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     background: rgba(0,0,0,0);\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     color: #ddd;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     i {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       font-size: 30px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])]),s._v("}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("ul",[a("li",[s._v("注意：vue3.0使用深度作用选择器写法 :deep(选择器)")])])])}),[],!1,null,null,null);n.default=t.exports}}]);