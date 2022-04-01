(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{661:function(s,e,n){"use strict";n.r(e);var a=n(35),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_20-商品详情-图片放大镜"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_20-商品详情-图片放大镜"}},[s._v("#")]),s._v(" 20-商品详情-图片放大镜")]),s._v(" "),n("blockquote",[n("p",[s._v("目的：实现图片放大镜功能")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://zhoushugang.gitee.io/erabbit-client-pc-document/assets/img/1610540980190.5138fd32.png",alt:"i1"}})]),s._v(" "),n("p",[s._v("大致步骤：")]),s._v(" "),n("ul",[n("li",[s._v("首先准备大图容器和遮罩容器")]),s._v(" "),n("li",[s._v("然后使用@vueuse/core的useMouseInElement方法获取基于元素的偏移量")]),s._v(" "),n("li",[s._v("计算出 遮罩容器定位与大容器北京定位 暴露出数据给模板使用")])]),s._v(" "),n("p",[s._v("落地代码：src/views/goods/components/goods-image.vue")]),s._v(" "),n("ul",[n("li",[s._v("准备大图容器")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("div class='goods-image'>\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('    <div class="large" :style="[{backgroundImage:`url(${images[currIndex]})`}]"></div>\n')])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('   <div class="middle">\n')])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v(".goods-image {\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" width: 480px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" height: 400px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" position: relative;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" display: flex;\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("  z-index: 500;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("  .large {\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    position: absolute;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    top: 0;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    left: 412px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    width: 400px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    height: 400px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    box-shadow: 0 0 10px rgba(0,0,0,0.1);\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    background-repeat: no-repeat;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    background-size: 800px 800px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    background-color: #f8f8f8;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("  }\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("ul",[n("li",[s._v("准备待移动的遮罩容器")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('div class="middle" ref="target">\n')])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <img :src="images[currIndex]" alt="">\n')])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('      <div class="layer"></div>\n')])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   </div>\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" .middle {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   width: 400px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   height: 400px;\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    position: relative;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    cursor: move;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    .layer {\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("      width: 200px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("      height: 200px;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("      background: rgba(0,0,0,.2);\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("      left: 0;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("      top: 0;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("      position: absolute;\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    }\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("ul",[n("li",[s._v("使用vueuse提供的API获取鼠标偏移量")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("import { reactive, ref, watch } from 'vue'\nimport { useMouseInElement } from '@vueuse/core'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("const usePreviewImg = () => {\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" const target = ref(null)\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" const show = ref(false)\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" // elementX 鼠标基于容器左上角X轴偏移\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" // elementY 鼠标基于容器左上角Y轴偏移\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" // isOutside 鼠标是否在模板容器外\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" const { elementX, elementY, isOutside } = useMouseInElement(target)\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" const position = reactive({ left: 0, top: 0 })\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" const bgPosition = reactive({ backgroundPositionX: 0, backgroundPositionY: 0 })\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" watch([elementX, elementY, isOutside], () => {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 控制X轴方向的定位 0-200 之间\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   if (elementX.value < 100) position.left = 0\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   else if (elementX.value > 300) position.left = 200\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   else position.left = elementX.value - 100\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 控制Y轴方向的定位 0-200 之间\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   if (elementY.value < 100) position.top = 0\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   else if (elementY.value > 300) position.top = 200\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   else position.top = elementY.value - 100\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 设置大背景的定位\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   bgPosition.backgroundPositionX = -position.left * 2 + 'px'\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   bgPosition.backgroundPositionY = -position.top * 2 + 'px'\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 设置遮罩容器的定位\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   position.left = position.left + 'px'\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   position.top = position.top + 'px'\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 设置是否显示预览大图\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   show.value = !isOutside.value\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" })\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" return { position, bgPosition, show, target }\n")])]),s._v("}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("ul",[n("li",[s._v("在setup中返回模板需要数据，并使用它")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("setup () {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const { currIndex, toggleImg } = useToggleImg()\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    const { position, bgPosition, show, target } = usePreviewImg()\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    return { currIndex, toggleImg, position, bgPosition, show, target }\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(' <div class="large" v-show="show" :style="[{backgroundImage:`url(${images[currIndex]})`},bgPosition]"></div>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('   <div class="middle" ref="target">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <img :src="images[currIndex]" alt="">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <div class="layer" v-show="show" :style="position"></div>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   </div>\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);