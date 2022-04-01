(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{702:function(s,t,n){"use strict";n.r(t);var a=n(35),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_02-加入购物车-本地"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02-加入购物车-本地"}},[s._v("#")]),s._v(" 02-加入购物车-本地")]),s._v(" "),n("blockquote",[n("p",[s._v("目的：完成商品详情的添加购物车操作，支持未登录状态。")])]),s._v(" "),n("p",[s._v("大致步骤：")]),s._v(" "),n("ul",[n("li",[s._v("约定本地存储的信息内容")]),s._v(" "),n("li",[s._v("编写mutaions添加购物车逻辑")]),s._v(" "),n("li",[s._v("编写actions进行添加操作")]),s._v(" "),n("li",[s._v("在商品详情页实现添加逻辑")])]),s._v(" "),n("p",[s._v("落地代码：")]),s._v(" "),n("ul",[n("li",[s._v("vuex中的修改数据，获取数据 "),n("code",[s._v("src/store/module/cart.js")])])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 本地：id skuId name picture price nowPrice count attrsText selected stock isEffective")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 线上：比上面多 isCollect 有用 discount 无用 两项项信息")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("mutations")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertCart")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" goods")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sameIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("findIndex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("item")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("skuId "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" goods"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("skuId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 逻辑：有相同的给goods累加数量，删除相同skuId的商品")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sameIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        goods"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sameIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" goods"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count\n        state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("splice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sameIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("unshift")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("goods"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("actions")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertCart")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" goods")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rootState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 已登录 TODO")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 未登录")]),s._v("\n          ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("commit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'insertCart'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" goods"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("ul",[n("li",[s._v("商品详情点击加入购物车 "),n("code",[s._v("src/views/goods/index.vue")])])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" setup () {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const goods = useGoods()\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // sku改变时候触发\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const changeSku = (sku) => {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     if (sku.skuId) {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       goods.value.price = sku.price\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       goods.value.oldPrice = sku.oldPrice\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       goods.value.inventory = sku.inventory\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("        currSku.value = sku\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     } else {\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("        currSku.value = null\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 选择的数量\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const num = ref(1)\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 加入购物车逻辑\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const currSku = ref(null)\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const instance = getCurrentInstance()\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const store = useStore()\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   const insertCart = () => {\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     if (!currSku.value) {\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       return instance.proxy.$message('请选择商品规格')\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     if (num.value > goods.inventory) {\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       return instance.proxy.$message('库存不足')\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     store.dispatch('cart/insertCart', {\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       id: goods.value.id,\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       skuId: currSku.value.skuId,\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       name: goods.value.name,\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       picture: goods.value.mainPictures[0],\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       price: currSku.value.price,\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       nowPrice: currSku.value.price,\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       count: num.value,\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       attrsText: currSku.value.specsText,\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       selected: true,\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       isEffective: true,\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       stock: currSku.value.inventory\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }).then(() => {\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       instance.proxy.$message('加入购物车成功', 'success')\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     })\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   return { goods, changeSku, num, insertCart }\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);