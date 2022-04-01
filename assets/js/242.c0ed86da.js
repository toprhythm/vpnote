(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{709:function(s,t,n){"use strict";n.r(t);var a=n(35),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_65-07-购物车页面-列表展示-本地"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_65-07-购物车页面-列表展示-本地"}},[s._v("#")]),s._v(" 65-07-购物车页面-列表展示-本地")]),s._v(" "),n("blockquote",[n("p",[s._v("目的：实现本地状态下的，购物车商品列表展示功能。")])]),s._v(" "),n("p",[s._v("大致步骤：")]),s._v(" "),n("ul",[n("li",[s._v("准备失效商品列表数据。已选择商品列表数据。已选择商品件数数据。需要支付的金额数据。")]),s._v(" "),n("li",[s._v("渲染模版")])]),s._v(" "),n("p",[s._v("落的代码：")]),s._v(" "),n("ul",[n("li",[s._v("准备数据 "),n("code",[s._v("src/store/module/cart.js")])])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ... getters 代码")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 无效商品列表")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("invalidList")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("state")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("item")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stock "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isEffective"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 选中商品列表")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectedList")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" getters")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" getters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("validList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("item")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selected"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 选中商品件数")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectedTotal")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" getters")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" getters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selectedList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("reduce")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 选中商品总金额")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectedAmount")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" getters")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" getters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selectedList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("reduce")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nowPrice "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否全选")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("isCheckAll")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" getters")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" getters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("validList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" getters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selectedList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" getters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("selectedList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("ul",[n("li",[s._v("渲染列表")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <div class="cart">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       <table>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("         <thead>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("           <tr>\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('              <th width="120"><XtxCheckbox :modelValue="$store.getters[\'cart/isCheckAll\']">全选</XtxCheckbox></th>\n')])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <th width="400">商品信息</th>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <th width="220">单价</th>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <th width="180">数量</th>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <th width="180">小计</th>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <th width="140">操作</th>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("           </tr>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("         </thead>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("         \x3c!-- 有效商品 --\x3e\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("         <tbody>\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('            <tr v-for="item in $store.getters[\'cart/validList\']" :key="item.skuId">\n')]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('              <td><XtxCheckbox :modelValue="item.selected" /></td>\n')])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("             <td>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('               <div class="goods">\n')])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('                  <RouterLink :to="`/product/${item.id}`">\n')]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('                    <img :src="item.picture" alt="">\n')])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("                 </RouterLink>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("                 <div>\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('                    <p class="name ellipsis">{{item.name}}</p>\n')])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("                   \x3c!-- 选择规格组件 --\x3e\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('                    <p class="attr">{{item.attrsText}}</p>\n')])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("                 </div>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("               </div>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("             </td>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <td class="tc">\n')])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("                <p>&yen;{{item.nowPrice}}</p>\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('                <p v-if="item.price-item.nowPrice>0">\n')])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("                 比加入时降价\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('                  <span class="red">&yen;{{item.price-item.nowPrice}}</span>\n')])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("               </p>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("             </td>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <td class="tc">\n')])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('                <XtxNumbox :modelValue="item.count" />\n')])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("             </td>\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('              <td class="tc"><p class="f16 red">&yen;{{item.nowPrice*100*item.count/100}}</p></td>\n')])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <td class="tc">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('               <p><a href="javascript:;">移入收藏夹</a></p>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('               <p><a class="green" href="javascript:;">删除</a></p>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('               <p><a href="javascript:;">找相似</a></p>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("             </td>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("           </tr>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("         </tbody>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("         \x3c!-- 无效商品 --\x3e\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("         <tbody v-if=\"$store.getters['cart/invalidList'].length>0\">\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('           <tr><td colspan="6"><h3 class="tit">失效商品</h3></td></tr>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('           <tr v-for="item in $store.getters[\'cart/validList\']" :key="item.skuId">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <td><XtxCheckbox style="color:#eee;" /></td>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("             <td>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('               <div class="goods">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('                 <RouterLink :to="`/product/${item.id}`">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('                   <img :src="item.picture" alt="">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("                 </RouterLink>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("                 <div>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('                   <p class="name ellipsis">{{item.name}}</p>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('                   <p class="attr">{{item.attrsText}}</p>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("                 </div>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("               </div>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("             </td>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <td class="tc"><p>&yen;{{item.nowPrice}}</p></td>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <td class="tc">{{item.count}}</td>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <td class="tc"><p>&yen;{{item.nowPrice*100*item.count/100}}</p></td>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('             <td class="tc">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('               <p><a class="green" href="javascript:;">删除</a></p>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('               <p><a href="javascript:;">找相似</a></p>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("             </td>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("           </tr>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("         </tbody>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       </table>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     </div>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     \x3c!-- 操作栏 --\x3e\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('     <div class="action">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('       <div class="batch">\n')])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("          <XtxCheckbox :modelValue=\"$store.getters['cart/isCheckAll']\">全选</XtxCheckbox>\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('         <a href="javascript:;">删除商品</a>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('         <a href="javascript:;">移入收藏夹</a>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('         <a href="javascript:;">清空失效商品</a>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       </div>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('       <div class="total">\n')])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("          共 {{$store.getters['cart/validTotal']}} 件商品，已选择 {{$store.getters['cart/selectedTotal']}} 件，商品合计：\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("          <span class=\"red\">¥{{$store.getters['cart/selectedAmount']}}</span>\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('         <XtxButton type="primary">下单结算</XtxButton>\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("       </div>\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     </div>\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);