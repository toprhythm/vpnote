(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{630:function(s,n,a){"use strict";a.r(n);var e=a(35),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_05-顶级类目-基础布局搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_05-顶级类目-基础布局搭建"}},[s._v("#")]),s._v(" 05-顶级类目-基础布局搭建")]),s._v(" "),a("blockquote",[a("p",[s._v("目的： 完成顶级分类的，面包屑+轮播图+所属全部子级分类展示。")])]),s._v(" "),a("ul",[a("li",[s._v("大致步骤：\n"),a("ul",[a("li",[s._v("准备基础结构，获取轮播图数据给组件使用")]),s._v(" "),a("li",[s._v("获取面包屑和所有分类数据给子级分类展示使用")])])])]),s._v(" "),a("p",[s._v("落的代码：")]),s._v(" "),a("ul",[a("li",[s._v("基本结构和轮播图渲染 src/views/category/index.vue")])]),s._v(" "),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("template>\n")])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(' <div class="top-category">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('   <div class="container">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 面包屑 --\x3e\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     <XtxBread>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('       <XtxBreadItem to="/">首页</XtxBreadItem>\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       <XtxBreadItem>空调</XtxBreadItem>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     </XtxBread>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 轮播图 --\x3e\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <XtxCarousel :sliders="sliders" style="height:500px" />\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 所有二级分类 --\x3e\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <div class="sub-list">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       <h3>全部分类</h3>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       <ul>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('         <li v-for="i in 8" :key="i">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('           <a href="javascript:;">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <img src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(9).png" >\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("             <p>空调</p>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           </a>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         </li>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       </ul>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     </div>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 不同分类商品 --\x3e\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   </div>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" </div>\n")])]),a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("/template>\n")]),a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("script>\n")])]),s._v("import { findBanner } from '@/api/home'\nexport default {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" name: 'TopCategory',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" setup () {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 轮播图\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const sliders = ref([])\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   findBanner().then(data => {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     sliders.value = data.result\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   })\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   return { sliders }  \n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])]),s._v("}\n"),a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("/script>\n")]),a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('style scoped lang="less">\n')])]),s._v(".top-category {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" h3 {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   font-size: 28px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   color: #666;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   font-weight: normal;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   text-align: center;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   line-height: 100px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" .sub-list {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   margin-top: 20px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   background-color: #fff;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ul {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     display: flex;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     padding: 0 32px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     flex-wrap: wrap;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     li {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       width: 168px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       height: 160px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       a {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         text-align: center;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         display: block;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         font-size: 16px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         img {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           width: 100px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           height: 100px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         p {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           line-height: 40px;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         &:hover {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           color: @xtxColor;\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])]),s._v("}\n"),a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("/style>\n")])])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br")])]),a("ul",[a("li",[s._v("从vuex获取分类数据，进行渲染。")])]),s._v(" "),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[s._v("import { useStore } from 'vuex'\nimport { useRoute } from 'vue-router'\nimport { computed, ref } from 'vue'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("// 面包屑+所有分类\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const store = useStore()\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const route = useRoute()\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const topCategory = computed(() => {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     let cate = {}\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     const item = store.state.category.list.find(item => {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       return item.id === route.params.id\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     })\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     if (item) cate = item\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     return cate\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   })\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   \n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   return {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     sliders,\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     topCategory,\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")])])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("template>\n")])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(' <div class="top-category">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('   <div class="container">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 面包屑 --\x3e\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     <XtxBread>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('       <XtxBreadItem to="/">首页</XtxBreadItem>\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       <XtxBreadItem>{{topCategory.name}}</XtxBreadItem>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     </XtxBread>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 轮播图 --\x3e\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <XtxCarousel :sliders="sliders" style="height:500px" />\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 所有二级分类 --\x3e\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <div class="sub-list">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       <h3>全部分类</h3>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       <ul>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('         <li v-for="item in topCategory.children" :key="item.id">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('           <a href="javascript:;">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <img :src="item.picture" >\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("             <p>{{item.name}}</p>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           </a>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         </li>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       </ul>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     </div>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 不同分类商品 --\x3e\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   </div>\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" </div>\n")])]),a("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("/template>\n")])])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);