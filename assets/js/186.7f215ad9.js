(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{648:function(e,s,n){"use strict";n.r(s);var r=n(35),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"_113-19-订单详情-取消订单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_113-19-订单详情-取消订单"}},[e._v("#")]),e._v(" 113-19-订单详情-取消订单")]),e._v(" "),n("blockquote",[n("p",[e._v("完成订单详情的取消订单")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('src/views/member/order/index.vue\n// 封装逻辑-取消订单\n+ export const useCancelOrder = () => {\nsrc/views/member/order/components/order-action.vue\nimport OrderCancel from \'./order-cancel\'\nimport { useCancelOrder } from \'../index\'\n  setup () {\n+    return { orderStatus, ...useCancelOrder() }\n  }\n    \x3c!-- 取消订单组件 --\x3e\n    <Teleport to="#dailog">\n      <OrderCancel ref="orderCancelCom" />\n    </Teleport>\n      <template v-if="order.orderState===1">\n        <XtxButton @click="$router.push(\'/member/pay?id=\'+order.id)" type="primary" size="small">立即付款</XtxButton>\n+       <XtxButton @click="onCancelOrder(order)" type="gray" size="small">取消订单</XtxButton>\n      </template>\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);