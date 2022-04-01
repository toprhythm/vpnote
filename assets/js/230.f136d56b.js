(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{694:function(s,a,n){"use strict";n.r(a);var e=n(35),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_53-qq登录按钮处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_53-qq登录按钮处理"}},[s._v("#")]),s._v(" 53-qq登录按钮处理")]),s._v(" "),n("blockquote",[n("p",[s._v("目的：完成QQ登录按钮初始化")])]),s._v(" "),n("p",[s._v("第一步：参考文档：")]),s._v(" "),n("p",[s._v("准备工作： https://wiki.connect.qq.com/%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C_oauth2-0")]),s._v(" "),n("p",[s._v("QQ互联SDK\nhttps://wiki.connect.qq.com/js_sdk%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E#3..E8.87.AA.E5.AE.9A.E4.B9.89.E7.99.BB.E5.BD.95.E6.8C.89.E9.92.AE")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("总结一下：")])]),s._v(" "),n("li",[n("p",[s._v("有一个网站，且已备案。网站需要有QQ登录的逻辑（登录页面，回跳页面）。")])]),s._v(" "),n("li",[n("p",[s._v("然后在QQ互联上进行身份认证，审核通过。")])]),s._v(" "),n("li",[n("p",[s._v("然后在QQ互联上创建应用，应用需要域名，备案号，回调地址。审核通过。")])]),s._v(" "),n("li",[n("p",[s._v("得到：应用ID 应用key 回调地址。")])]),s._v(" "),n("li",[n("p",[s._v("才能完成QQ登录。（以上四个步骤，工作后大概率由后台或运维完成）")])]),s._v(" "),n("li",[n("p",[s._v("注意：id和uri都不能修改，否则无效。")])])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("# 测试用appid \n# 100556005\n# 测试用redirect_uri\n# http://www.corho.com:8080/#/login/callback\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("第二步：遇到问题：")]),s._v(" "),n("ul",[n("li",[s._v("由于域名是www.corho.com和localhost不一致无法回调页面，需要在本地修改hosts地址。")])]),s._v(" "),n("p",[s._v("windows")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("q1. 找到 C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("System32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("drivers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("etc 下hosts文件\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 在文件中加入  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1       www.corho.com\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". 保存即可。\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果提示没有权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 将hosts文件移到桌面，然后进行修改，确认保存。\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 将桌面hosts文件替换c盘文件\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("mac OS")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 打开命令行窗口\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 输入：sudo "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/hosts\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". 按下：i 键\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". 输入：127.0.0.1       www.corho.com\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(". 按下：esc\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(". 按下：shift + "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(". 输入：wq 回车即可\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("需要开启IP或域名访问webpack服务器权限，在vue.config.js中")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" // 这个是给webpack-dev-server开启可IP和域名访问权限。\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" chainWebpack: config => {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   config.devServer.disableHostCheck(true)\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" }\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("第三步：处理QQ登录按钮：")]),s._v(" "),n("li",[s._v("在index.html添加")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('script src="http://connect.qq.com/qc_jssdk.js" data-appid="100556005" data-redirecturi="http://www.corho.com:8080/#/login/callback"><\/script>\n')])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("在vue.config.js添加")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" # 这个是设置外部扩展，模块为qc变量名为QC，导入qc将不做打包。\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" configureWebpack: {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   externals: {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     qc: 'QC'\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   }\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" },\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[s._v("在 src/views/login.vue")])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("import QC from 'qc'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-arrow deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('span id="qqLoginBtn"></span>\n')])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // onMounted(() => {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   //   // 组件渲染完毕，使用QC生成QQ登录按钮\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   //   QC.Login({\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   //     btnId: 'qqLoginBtn'\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   //   })\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // })\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("看页面生成QQ登录按钮，点击后新窗口打开，登录成功也无法跳转到登录页面窗口。\n"),n("img",{attrs:{src:"https://zhoushugang.gitee.io/erabbit-client-pc-document/assets/img/1608282862740.f15b2069.png",alt:"123"}})])]),s._v(" "),n("li",[n("p",[s._v("通过审查元素，找到跳转连接，自己来控制")])])]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('         <a href="https://graph.qq.com/oauth2.0/authorize?client_id=100556005&response_type=token&scope=all&redirect_uri=http%3A%2F%2Fwww.corho.com%3A8080%2F%23%2Flogin%2Fcallback">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('           <img src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png" alt="">\n')]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("         </a>\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);