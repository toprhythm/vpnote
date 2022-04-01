(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{500:function(s,a,n){"use strict";n.r(a);var t=n(35),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_11-浏览器缓存原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-浏览器缓存原理"}},[s._v("#")]),s._v(" 11:浏览器缓存原理")]),s._v(" "),n("h2",{attrs:{id:"_11-1-问题分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-问题分析"}},[s._v("#")]),s._v(" 11.1 问题分析")]),s._v(" "),n("ul",[n("li",[s._v("浏览器本身就有缓存功能有时候刷新代码没有生效网站优化等等问题")]),s._v(" "),n("li",[s._v("缓存:浏览器可能会把你上一次的代码存起来你再次访问就没有去拿新代码而是直接拿的缓存")])]),s._v(" "),n("h2",{attrs:{id:"_11-2-核心问题讲解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-核心问题讲解"}},[s._v("#")]),s._v(" 11.2 核心问题讲解")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("缓存:")]),s._v(" "),n("ol",[n("li",[s._v("浏览器缓存 可以通过后台设置响应头控制")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("浏览器是会有缓存的\n  分别是强制缓存和协商缓存 都可以通过后台设置响应头控制\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 强缓存:不会向服务器发送请求,直接从缓存中读取资源 每次访问本地缓存直接验证看是否过期强缓存可以通过设置两种HTTP Header实现: Expires过期时间和Cache-Control缓存控制。\n    Cache-Control: max-age"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" 缓存300秒\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 协商缓存"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Last-Modified / If-Modified-Since和Etag / If-None-Match"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  协商缓存命中,服务器会将这个请求返回,但是不会返回这个资源的数据而是告诉客户端可以直接从缓存\n\n  强制缓存优先于协商缓存进行,若强制缓存"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Expires和Cache-Control"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("生效则直接使用缓存,\n\n  若不生效则进行后台设置头 协商缓存"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Last-Modified / If-Modified-Since和Etag/ If-None-Match"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、浏览器在加载资源时,先根据这个资源的一些 http header 判断它是否强缓存,强缓存如果命中,浏览器直接从自己的缓存中读取资源,不会发请求到服务器。比如某个css文件,如果浏览器在加载它所在的网页时,这个css文件缓存配置命中了强缓存,浏览器就直接从缓存中加载这个css,连请求都不会发送到网页所在服务器。\n\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 当强缓存过期的时候,浏览器一定会发送一个请求到服务器,通过服务器端依据资源的另外一些http header验个资源是否命中协商缓存,如果协商缓存命中,服务器会将这个请求返回,但是不会返回这个资源的数据,而是告诉户端可以直接从缓存中加载这个资源,于是浏览器就又会从自己的缓存中去加载这个资源。\n\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("强缓存与协商缓存的共同点是:如果命中,都是从客户端缓存中加载资源,而不是从服务器加载资源数据"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("区别是:强缓存不发请求到服务器,协商缓存会发请求到服务器。\n\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". 当协商缓存也没有命中的时候,浏览器直接从服务器加载资源数据。\n\n  那么代表该请求的缓存失效,返回200,重新返回资源和缓存标识,\n\n  再存入浏览器缓存中"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("生效则返回304,继续使用缓存\n\n  强缓存不发请求到服务器直接拿缓存,协商缓存会发请求到服务器服务器告诉你去拿缓存就拿不拿缓存就拿新的代码。\n\n  网站怎么优化？\n    - 缓存"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("强缓存，协商缓存"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    - 精灵图\n    - 懒加载\n    - 节省http请求"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("防抖节流"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("服务器缓存")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("请求到服务器,所以资源是否更新,服务器肯定知道。大部分web服务器都默认开启协商缓存\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);