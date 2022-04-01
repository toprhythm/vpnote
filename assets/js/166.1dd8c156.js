(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{631:function(s,t,n){"use strict";n.r(t);var a=n(35),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"顶级类目-批量注册组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#顶级类目-批量注册组件"}},[s._v("#")]),s._v(" 顶级类目-批量注册组件")]),s._v(" "),n("blockquote",[n("p",[s._v("目的： 自动的批量注册组件。")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("大致步骤：")])]),s._v(" "),n("li",[n("p",[s._v("使用 require 提供的函数 context 加载某一个目录下的所有 .vue 后缀的文件。")])]),s._v(" "),n("li",[n("p",[s._v("然后 context 函数会返回一个导入函数 importFn")]),s._v(" "),n("ul",[n("li",[s._v("它又一个属性 keys() 获取所有的文件路径")])])]),s._v(" "),n("li",[n("p",[s._v("通过文件路径数组，通过遍历数组，再使用 importFn 根据路径导入组件对象")])]),s._v(" "),n("li",[n("p",[s._v("遍历的同时进行全局注册即可")])])]),s._v(" "),n("p",[s._v("落的代码：")]),s._v(" "),n("ul",[n("li",[s._v("src/components/library/index.js")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import XtxSkeleton from './xtx-skeleton.vue'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import XtxCarousel from './xtx-carousel.vue'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import XtxMore from './xtx-more.vue'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import XtxBread from './xtx-bread.vue'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import XtxBreadItem from './xtx-bread-item.vue'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入library文件夹下的所有组件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 批量导入需要使用一个函数 require.context(dir,deep,matching)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 参数：1. 目录  2. 是否加载子目录  3. 加载的正则匹配")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" importFn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("context")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.vue$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.dir(importFn.keys()) 文件名称数组")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.component(XtxSkeleton.name, XtxSkeleton)")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.component(XtxCarousel.name, XtxCarousel)")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.component(XtxMore.name, XtxMore)")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.component(XtxBread.name, XtxBread)")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.component(XtxBreadItem.name, XtxBreadItem)")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 批量注册全局组件")]),s._v("\n    importFn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("keys")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("key")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入组件")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" component "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("importFn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("default\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注册组件")]),s._v("\n      app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义指令")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineDirective")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("defineDirective")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 图片懒加载指令 v-lazyload")]),s._v("\n  app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("directive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lazyload'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue2.0 inserted函数，元素渲染后")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue3.0 mounted函数，元素渲染后")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mounted")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" binding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 元素插入后才能获取到dom元素，才能使用 intersectionobserve进行监听进入可视区")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// el 是图片元素  binding.value 图片地址")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" observe "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IntersectionObserver")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" isIntersecting "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isIntersecting"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" binding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取消观察")]),s._v("\n          observe"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("unobserve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("threshold")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 进行观察")]),s._v("\n      observe"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("observe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br")])]),n("p",[s._v("总结，知识点：")]),s._v(" "),n("ul",[n("li",[s._v("require.context() 是webpack提供的一个自动导入的API\n"),n("ul",[n("li",[s._v("参数1：加载的文件目录")]),s._v(" "),n("li",[s._v("参数2：是否加载子目录")]),s._v(" "),n("li",[s._v("参数3：正则，匹配文件")]),s._v(" "),n("li",[s._v("返回值：导入函数 fn\n"),n("ul",[n("li",[s._v("keys() 获取读取到的所有文件列表")])])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);