(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{507:function(t,s,a){"use strict";a.r(s);var n=a(35),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"fetch-axios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-axios"}},[t._v("#")]),t._v(" fetch-axios")]),t._v(" "),a("h2",{attrs:{id:"题意分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题意分析"}},[t._v("#")]),t._v(" 题意分析")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("fetch与axios的定位认识。fetch是浏览器提供的api, axios是社区封装的一个组件。")])]),t._v(" "),a("li",[a("p",[t._v("fetch是一个低层次的API,你可以把它考虑成原生的XHR,所以使用起来并不是那么舒服,需要进行封装。多年来,XMLHttpRequest一直是web开发者的亲密助手。无论是直接的,还是间接的,当我们谈及Ajax技术的时候,通常意思就是基于XMLHttpRequest的Ajax,它是一种能够有效改进页面通信的技术。Ajax的兴起是由于Google的Gmail所带动的,随后被广泛的应用到众多的Web产品(应用)中,可以认为,开发者已经默认将XMLHttpRequest作为了当前Web应用与远程资源进行通信的基础。而本文将要介绍的内容则是XMLHttpRequest的最新替代技术-Fetch API,它是W3C的正式标准,下面将会介绍Fetch API的相关知识,以及探讨它所能使用的场景和能解决的问题。")])]),t._v(" "),a("li",[a("p",[t._v("fetch优势")]),t._v(" "),a("ol",[a("li",[t._v("语法简洁,更加语义化")]),t._v(" "),a("li",[t._v("基于标准Promise 实现,支持async/await")]),t._v(" "),a("li",[t._v("更加底层,提供的API丰富(request, response)")]),t._v(" "),a("li",[t._v("脱离了XHR,是ES规范里新的实现方式")])])]),t._v(" "),a("li",[a("p",[t._v("fetch存在的问题")])]),t._v(" "),a("li",[a("p",[t._v("fetch是一个低层次的API,你可以把它考虑成原生的XHR,所以使用起来并不是那么舒服,需要进行封装。")]),t._v(" "),a("ol",[a("li",[t._v("fetch只对网络请求报错,对400,500都当做成功的请求,服务器返回400,500错误")]),t._v(" "),a("li",[t._v("fetch默认不会带cookie,需要添加配置项: fetch(url, [credentials: 'include'))")]),t._v(" "),a("li",[t._v("fetch不支持abort,不支持超时控制,使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行,造成了流量的浪费")]),t._v(" "),a("li",[t._v("fetch没有办法原生监测请求的进度,而XHR可以")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fetch('https://api.apiopen.top/getJoke', 'post') // 第二个参数：get，post")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.apiopen.top/getJoke'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data转json")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("myjson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" myjson "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印json(data)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("在我们上传大文件的时候，希望看到进度条（1，fetch不支持进度监测，2，axios支持进度监测）")])])]),t._v(" "),a("li",[a("p",[t._v("axios")])]),t._v(" "),a("li",[a("p",[t._v("axios是一个基于Promise 用于浏览器和nodejs的HTTP客户端,本质上也是对原生XHR的封装,只不过它是Promise的实现版本,符合最新的ES规范,它本身具有以下特征:")]),t._v(" "),a("ol",[a("li",[t._v("从浏览器中创建XMLHttpRequest")]),t._v(" "),a("li",[t._v("支持Promise API")]),t._v(" "),a("li",[t._v("客户端支持防止CSRF")]),t._v(" "),a("li",[t._v("提供了一些并发请求的接口(重要,方便了很多的操作)")]),t._v(" "),a("li",[t._v("从node.js创建http请求")]),t._v(" "),a("li",[t._v("拦截请求和响应")]),t._v(" "),a("li",[t._v("转换请求和响应数据")]),t._v(" "),a("li",[t._v("取消请求")]),t._v(" "),a("li",[t._v("自动转换JSON数据")])])]),t._v(" "),a("li",[a("p",[t._v("代码")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("params")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" error "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("ul",[a("li",[t._v("总结: axios既提供了并发的封装,也没有fetch的各种问题,而且体积也较小,当之无愧现在最应该选用的请求的方式。")]),t._v(" "),a("li",[t._v("axios底层 是XMLhttpRequest")]),t._v(" "),a("li",[t._v("fetch 和axios某种程度上讲不是一个层面比较")])]),t._v(" "),a("h2",{attrs:{id:"明确考察点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#明确考察点"}},[t._v("#")]),t._v(" 明确考察点")]),t._v(" "),a("ol",[a("li",[t._v("fetch是规范底层api")]),t._v(" "),a("li",[t._v("axios是封装")]),t._v(" "),a("li",[t._v("fetch和axios优缺点")])]),t._v(" "),a("h2",{attrs:{id:"回答思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回答思路"}},[t._v("#")]),t._v(" 回答思路")]),t._v(" "),a("ul",[a("li",[t._v("首先明确fetch和axios分别是个啥?然后阐述fetch和axios的优缺点")])]),t._v(" "),a("h2",{attrs:{id:"相关扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关扩展"}},[t._v("#")]),t._v(" 相关扩展")]),t._v(" "),a("ol",[a("li",[t._v("axios的github")]),t._v(" "),a("li",[t._v("axios的中文文档")]),t._v(" "),a("li",[t._v("fetch的api的mdn")])]),t._v(" "),a("h2",{attrs:{id:"题外话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题外话"}},[t._v("#")]),t._v(" 题外话")]),t._v(" "),a("ul",[a("li",[t._v("whatwg击败了w3c得到了html和dom的控制权")]),t._v(" "),a("li",[t._v("fecthapi是由whatwg创造的")])]),t._v(" "),a("h2",{attrs:{id:"回答话术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回答话术"}},[t._v("#")]),t._v(" 回答话术")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("fetch是一个底层的api浏览器原生支持的 axios是一个封装好的框架")])]),t._v(" "),a("li",[a("p",[t._v("axios")]),t._v(" "),a("ol",[a("li",[t._v("支持promise语法")]),t._v(" "),a("li",[t._v("支持自动解析json")]),t._v(" "),a("li",[t._v("支持中断请求")]),t._v(" "),a("li",[t._v("前后端发请求")]),t._v(" "),a("li",[t._v("支持浏览器和nodejs发请求")]),t._v(" "),a("li",[t._v("支持拦截请求")]),t._v(" "),a("li",[t._v("支持请求进度条监测")]),t._v(" "),a("li",[t._v("客户端防止csrf攻击")])])]),t._v(" "),a("li",[a("p",[t._v("fetch优点")]),t._v(" "),a("ol",[a("li",[t._v("浏览器级别原生支持的api")]),t._v(" "),a("li",[t._v("原生支持promise的api")]),t._v(" "),a("li",[t._v("语法简洁 符合es标准规范")]),t._v(" "),a("li",[t._v("是由whatwg组织提出的，现在是w3c规范")])])]),t._v(" "),a("li",[a("p",[t._v("fetch缺点")]),t._v(" "),a("ol",[a("li",[t._v("不支持文件上传进度条监测")]),t._v(" "),a("li",[t._v("使用不完美，需要封装")]),t._v(" "),a("li",[t._v("不支持请求中止")]),t._v(" "),a("li",[t._v("默认不带cookie")])])]),t._v(" "),a("li",[a("p",[t._v("fetch总之缺点是需要封装，优点：底层原生支持")])]),t._v(" "),a("li",[a("p",[t._v("axios总结就是封装的比较好")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);