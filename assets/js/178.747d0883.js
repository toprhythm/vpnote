(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{642:function(s,n,e){"use strict";e.r(n);var a=e(35),r=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_106-12-订单管理-删除订单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_106-12-订单管理-删除订单"}},[s._v("#")]),s._v(" 106-12-订单管理-删除订单")]),s._v(" "),e("blockquote",[e("p",[s._v("目的：完成删除订单操作")])]),s._v(" "),e("p",[s._v("大致步骤：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("order-item")]),s._v(" 组件触发自定义时间通知父组件")]),s._v(" "),e("li",[s._v("再父组件实现删除逻辑，需要提前定义API函数")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("src/api/order.js\n/**\n * 删除订单\n * @param {Array<string>} ids - 删除订单，id集合\n * @returns\n */\nexport const delteOrder = (ids) => {\n  return request('/member/order', 'delete', { ids })\n}\nsrc/views/member/order/components/order-item.vue\n      </span>\n      \x3c!-- 已完成 已取消 --\x3e\n+      <a @click=\"$emit('on-delete-order')\" v-if=\"[5,6].includes(order.orderState)\" href=\"javascript:;\" class=\"del\">删除</a>\n    </div>\n  // 组件本身触发的自定义事件可以在这里申明\n+  emits: ['on-cancel-order', 'on-delete-order'],\nsrc/views/member/order/index.vue\n      <OrderItem\n        v-for=\"item in orderList\"\n        :key=\"item.id\"\n        :order=\"item\"\n        @on-cancel-order=\"onCancelOrder(item)\"\n+        @on-delete-order=\"onDeleteOrder(item)\"\n      />\nimport { reactive, ref, watch } from 'vue'\nimport { orderStatus } from '@/api/constants'\nimport { delteOrder, findOrderList } from '@/api/order'\nimport OrderItem from './components/order-item'\nimport OrderCancel from './components/order-cancel'\nimport Confirm from '@/components/library/Confirm'\nimport Message from '@/components/library/Message'\nexport default {\n  name: 'MemberOrderPage',\n  components: {\n    OrderItem,\n    OrderCancel\n  },\n  setup () {\n    const activeName = ref('all')\n    const tabClick = (tab) => {\n      // 此时：tab.index 就是订单的状态\n      requestParams.orderState = tab.index\n      requestParams.page = 1\n    }\n    // 筛选条件\n    const requestParams = reactive({\n      page: 1,\n      pageSize: 5,\n      orderState: 0\n    })\n    // 发请求获取数据\n    const orderList = ref([])\n    const loading = ref(false)\n    const total = ref(0)\n    // 使用侦听器，监听 requestParams 的改变\n+   const findOrderListFn = () => {\n+     loading.value = true\n+     findOrderList(requestParams).then(data => {\n+       orderList.value = data.result.items\n+       total.value = data.result.counts\n+       loading.value = false\n+     })\n+   }\n    watch(requestParams, () => {\n+      findOrderListFn()\n    }, { immediate: true })\n\n    // 分页事件\n    const changePager = (np) => {\n      requestParams.page = np\n    }\n\n+    // 删除订单\n+    const onDeleteOrder = (item) => {\n+      Confirm({ text: '您确认删除该条订单吗？' }).then(() => {\n+        delteOrder([item.id]).then(() => {\n+          Message({ text: '删除订单成功', type: 'success' })\n+          findOrderListFn()\n+        })\n+      }).catch(e => {})\n+    }\n\n    return {\n      activeName,\n      orderStatus,\n      tabClick,\n      requestParams,\n      orderList,\n      loading,\n      total,\n      changePager,\n+      onDeleteOrder,\n      ...useCancelOrder()\n    }\n  }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br"),e("span",{staticClass:"line-number"},[s._v("96")]),e("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);