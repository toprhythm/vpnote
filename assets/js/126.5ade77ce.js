(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{588:function(s,n,a){"use strict";a.r(n);var e=a(35),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"chapter11-google-analytics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter11-google-analytics"}},[s._v("#")]),s._v(" chapter11_google_analytics")]),s._v(" "),a("h2",{attrs:{id:"_01-前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-前提条件"}},[s._v("#")]),s._v(" 01-前提条件")]),s._v(" "),a("ul",[a("li",[s._v("有vpn")]),s._v(" "),a("li",[s._v("账号注册，登录")]),s._v(" "),a("li",[s._v("插件媒体资源")]),s._v(" "),a("li",[s._v("安装vue插件")])]),s._v(" "),a("h2",{attrs:{id:"_02-注册配置go统计服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-注册配置go统计服务"}},[s._v("#")]),s._v(" 02-注册配置go统计服务")]),s._v(" "),a("ul",[a("li",[s._v("谷歌搜索analytics.google.com/analytics/web/#/")]),s._v(" "),a("li",[s._v("创建了一个账户名：zhengwenqin582@gmail.com")]),s._v(" "),a("li",[s._v("创建了一个媒体资源名: vpnote_media")]),s._v(" "),a("li",[s._v("选择了企业人数和企业类型：1~10人，资料查询")]),s._v(" "),a("li",[s._v("勾选了3款协议，点击确定，成功创建")]),s._v(" "),a("li",[s._v("由于发生了前端改版，不可同日而语，")]),s._v(" "),a("li",[s._v("我们是添加数据流，点击网站")]),s._v(" "),a("li",[s._v("网站网址: note.yunzoukj.com，点击左边下拉框，我们必须选择http")]),s._v(" "),a("li",[s._v("数据流名称：yunzoukjcom_vuepress")]),s._v(" "),a("li",[s._v("点击确定，得到结果：衡量 ID：G-CC1NESJ33；数据流id：3136388909；")])]),s._v(" "),a("h2",{attrs:{id:"_03-安装插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_03-安装插件"}},[s._v("#")]),s._v(" 03-安装插件")]),s._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D @vuepress/plugin-google-analytics\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("div",{staticClass:"language-diff line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[s._v("const moment = require('moment');\n\nmodule.exports = {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" // toprhythm.github.io/vpnote\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(' // base: "/vpnote/",\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" // 插件列表\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" plugins: [\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 文章上一次更新时间插件\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   [\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     '@vuepress/last-updated',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       transformer: (timestamp, /* lang */) => {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         // 手动修改为中文模式\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('         moment.locale(/* lang */"zh-cn")\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('         return moment(timestamp).format("LLLL")\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // pwa插件\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   [\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     '@vuepress/pwa', {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       serviceWorker: true,\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       updatePopup: {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('         message: "发现新内容可用",\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('         buttonText: "刷新"\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // vssue插件\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   [\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     '@vssue/vuepress-plugin-vssue', {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       // 设置 `platform` 而不是 `api`\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       platform: 'github-v4',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" \n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       // 其他的 Vssue 配置\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       owner: 'toprhythm',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       repo: 'vpnote',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       clientId: '8c16a5450e32b84e9d7d',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       clientSecret: 'b2c3346c401b13d9fe81dfff25261020b5709734',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       autoCreateIssue: true\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // back-to-top插件\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   [\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     '@vuepress/back-to-top', true\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ],\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("    // 谷歌统计服务插件\n")])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   [\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     '@vuepress/google-analytics',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       'ga': 'G-CC1NESJ33M' // UA-00000000-0\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("    ]\n")])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" ],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" // 站点seo标题\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(' title: "云奏手记",\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" // 站点seo描述\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(' description: "云奏手记-大前端",\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" // 站点seo头head\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" head: [\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("    // google-analytics\n")])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ['script', {}, `\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           var _hmt = _hmt || [];\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           (function() {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           // 引入谷歌,不需要可删除这段\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('           var hm1 = document.createElement("script");\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('           hm1.src = "https://www.googletagmanager.com/gtag/js?id=G-CC1NESJ33M";\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('           var s1 = document.getElementsByTagName("script")[0]; \n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           s1.parentNode.insertBefore(hm1, s1);\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("            })();\n")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           // 谷歌加载,不需要可删除\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           window.dataLayer = window.dataLayer || [];\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           function gtag(){dataLayer.push(arguments);}\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           gtag('js', new Date());\n")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("           gtag('config', 'G-CC1NESJ33M');\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("        `],\n")])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // favicon.ico\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ['link', { name: 'icon', content: '/favicon.ico' }],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('   // <meta name="author" content="云奏">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ['meta', { name: 'author', content: '云奏' }],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v('   // <meta name="keywords" content="大前端，手记">\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ['meta', { name: 'keywords', content: '大前端，手记' }],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // manfest.json\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ['link', { rel: 'manifest', href: '/manifest.json' }],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ['meta', { name: 'theme-color', content: '#3eaf7c' }],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ['meta', { name: 'msapplication-TileColor', content: '#000000' }]\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" ],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" themeConfig: {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 最后更新时间\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   lastUpdated: '更新时间', \n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 左上角logo\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   logo: '/assets/img/hero.png',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 导航栏nav\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   nav: [\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       text: '大前端',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       items: [\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         { text: 'ps', link: '/zh_CN/ps/module01_start/chap01_setup.md' },\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         { text: 'js高级', link: '/zh_CN/js_advance/module01_start/chap01_setup.md' },\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         { text: 'js数据结构和算法', link: '/zh_CN/js_data_ai/module01_start/chap01_setup.md' },\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         { text: 'vue2源码分析', link: '/zh_CN/vue2_src_parse/module01_start/chap01_setup.md' },\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       ]\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // 全局设置侧边栏\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   sidebar: [\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     {\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       title: 'GlobalAutoSideBar:js_advance',   // 必要的\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       path: '/zh_CN/js_advance/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       collapsable: false, // 可选的, 默认值是 true,\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       sidebarDepth: 2,    // 可选的, 默认值是 1,可以显示h3的深度\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       children: [\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         '/zh_CN/js_advance/module01_start/chap01_setup',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("         '/zh_CN/js_advance/module01_start/chap02_show',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("       ]\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("     }\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ]\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])]),s._v("}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br")])]),a("ul",[a("li",[s._v("npm run docs:dev")]),s._v(" "),a("li",[s._v("npm run docs:deploy")]),s._v(" "),a("li",[s._v("等几分钟，一直刷新自己的站点即可")]),s._v(" "),a("li",[s._v("用这个网址查看统计数据：")]),s._v(" "),a("li",[s._v("https://analytics.google.com/analytics/web/#/p298712079/realtime/overview?params=_u..nav%3Dmaui&collectionId=life-cycle")])])])}),[],!1,null,null,null);n.default=t.exports}}]);