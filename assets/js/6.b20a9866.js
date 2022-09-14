(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{391:function(t,s,a){t.exports=a.p+"assets/img/img_7.3c451177.png"},392:function(t,s,a){t.exports=a.p+"assets/img/img_8.20680fa1.png"},393:function(t,s,a){t.exports=a.p+"assets/img/img_9.05af8c86.png"},421:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"鉴权相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#鉴权相关"}},[t._v("#")]),t._v(" 鉴权相关")]),t._v(" "),n("p",[t._v("当您遇到嵌入式系统类的需求场景式，可以使用云叩插件体系进行集成，把系统集成至销帮帮。\n此时您如果需要考虑免登录、鉴权等问题，则可参考此文档提供的方案：")]),t._v(" "),n("h3",{attrs:{id:"整体架构及流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#整体架构及流程"}},[t._v("#")]),t._v(" 整体架构及流程")]),t._v(" "),n("p",[n("img",{attrs:{src:a(391),alt:"img_7.png"}})]),t._v(" "),n("h3",{attrs:{id:"云叩和第三方系统侧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#云叩和第三方系统侧"}},[t._v("#")]),t._v(" 云叩和第三方系统侧")]),t._v(" "),n("p",[t._v("您通过云叩平台集成三方系统至销帮帮，可以安装 SDK 完成和销帮帮之间的通信以及必要信息的获取，如 userId/corpid 等。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 安装 sdk 至您的项目")]),t._v("\nnpm i xbb"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sdk "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或使用 script 导入")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/xbb-sdk/index.js"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在您的程序入口处")]),t._v("\nxbb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ready")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  xbb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data返回的数据如下")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// companyName: "云叩学院" // 公司名称')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// corpid: "ding012d1a0065f8b378ffe93478753d9884" // 公司id')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// roleIds: "|1|5|"  // 角色权限 id')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// userId: "1060661526-1904315290"  // 用户 id')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// userName: "Han 谭景琳  // 用户名称')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进行合法性鉴权")]),t._v("\n    xbb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("auth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回为 true 的情况下 代表此用户已经通过销帮帮的鉴权，且用户信息有效。接下来进行第三方系统鉴权即可")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("需要注意上方我们调用了"),n("code",[t._v("xbb.cloud.auth")]),t._v("这个方法，使用这个方法的主要目的就是防止伪造 "),n("code",[t._v("corpid")]),t._v(" 和 "),n("code",[t._v("userId")]),t._v("，通过云鉴权可以确保当前项目拿到的"),n("code",[t._v("corpid")]),t._v("和"),n("code",[t._v("userId")]),t._v("是合法的。\n随后您可以在 "),n("code",[t._v("auth")]),t._v(" 回调中根据对应平台方式获取与您系统唯一关联性的用户身份凭证，通常我们会使用手机号作为用户凭证")]),t._v(" "),n("ul",[n("li",[t._v("钉钉环境内销帮帮不会存留用户手机号，但您可以通过 corpid 和 userId 结合您企业开发者身份去钉钉调用")]),t._v(" "),n("li",[t._v("企微可以通过和钉钉平台类似的方式，通过 corpid 和 userId 前往企微相关接口查找，此外，企微也支持您直接通过 "),n("code",[t._v("corpid")]),t._v(" 和 "),n("code",[t._v("userid")]),t._v("查询"),n("a",{attrs:{href:"https://appfapi.xbongbong.com/#/apitest?anchor=%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("用户列表接口"),n("OutboundLink")],1),t._v("，获取用户在销帮帮内绑定的手机号。")]),t._v(" "),n("li",[t._v("飞书平台通过 "),n("code",[t._v("corpid")]),t._v(" 和 "),n("code",[t._v("userid")]),t._v("查询"),n("a",{attrs:{href:"https://appfapi.xbongbong.com/#/apitest?anchor=%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("用户列表接口"),n("OutboundLink")],1),t._v("，获取用户在销帮帮内绑定的手机号。")]),t._v(" "),n("li",[t._v("独立版通过 "),n("code",[t._v("corpid")]),t._v(" 和 "),n("code",[t._v("userid")]),t._v("查询"),n("a",{attrs:{href:"https://appfapi.xbongbong.com/#/apitest?anchor=%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("用户列表接口"),n("OutboundLink")],1),t._v("，获取用户在销帮帮内绑定的手机号。")])]),t._v(" "),n("h3",{attrs:{id:"如何绑定手机号以及通过-api-查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何绑定手机号以及通过-api-查询"}},[t._v("#")]),t._v(" 如何绑定手机号以及通过 API 查询")]),t._v(" "),n("p",[t._v("绑定手机号可在销帮帮登录后右上角用户名称-点击-账号设置-绑定完成手机号绑定。\n"),n("img",{attrs:{src:a(392),alt:"img_8.png"}}),t._v("\n绑定完成后，通过"),n("code",[t._v("https://appapi.xbongbong.com/pro/v2/api/user/list")]),t._v("接口获取：\n"),n("img",{attrs:{src:a(393),alt:"img_9.png"}}),t._v("\n读取到手机号以后可使用手机号作为您查找您系统内用户的条件，完善您系统的鉴权业务逻辑即可。")]),t._v(" "),n("p",[t._v("此外，销帮帮会尽快上线 SSO、OAuth 等三方鉴权和单点登录的方案，届时可以通过更方便的方式直接授权登录。")])])}),[],!1,null,null,null);s.default=r.exports}}]);