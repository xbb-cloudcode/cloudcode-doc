(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{365:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第一个云函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一个云函数"}},[t._v("#")]),t._v(" 第一个云函数")]),t._v(" "),s("ol",[s("li",[t._v("在cloudfunctions目录下新建一个云函数目录，名为add")]),t._v(" "),s("li",[t._v("在add目录下使用"),s("code",[t._v("npm init")]),t._v("初始化npm")]),t._v(" "),s("li",[t._v("在add目录下新建一个js文件，名为"),s("code",[t._v("index.js")])]),t._v(" "),s("li",[t._v("在"),s("code",[t._v("index.js")]),t._v("文件中编写如下内容")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// event用于接收事件参数，类型是个Buffer")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// event.args 用于接收传给云函数的参数，是个对象")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过callback将结果返回，第一个参数是Error，第二个参数是返回的结果")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),s("ul",[s("li",[t._v("event参数"),s("br"),t._v("\n用于传递参数。其是一个Buffer，可以将其转成JSON后使用。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户传入的参数")]),t._v("\n    userInfo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数调用者的用户信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("context参数"),s("br"),t._v("\ncontext参数主要包含一些函数的运行信息。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    requestId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本次调用请求的唯一ID，您可以把它记录下来在出现问题的时候方便查询")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前调用的函数的一些基本信息，例如函数名、函数入口、函数内存和超时时间。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("callback函数"),s("br"),t._v("\ncallback是由系统定义的函数，作为入口函数的入参用于返回调用函数的结果，标识函数执行结束。其签名是function(err, data)，与Node.js中使用的callback一样，它的第一个参数是error，第二个参数data。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果调用时error不为空，则函数返回HandledInvocationError，否则返回data的内容。")])]),t._v(" "),s("li",[s("p",[t._v("如果data是Buffer类型，则它的数据将直接被返回。")])]),t._v(" "),s("li",[s("p",[t._v("如果data是object，则会将其转换成JSON字符串返回。")])]),t._v(" "),s("li",[s("p",[t._v("如果data是其他类型将被转换成字符串返回。")])])])])]),t._v(" "),s("h2",{attrs:{id:"使用云函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用云函数"}},[t._v("#")]),t._v(" 使用云函数")]),t._v(" "),s("h4",{attrs:{id:"使用docker在本地调试云函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用docker在本地调试云函数"}},[t._v("#")]),t._v(" 使用Docker在本地调试云函数")]),t._v(" "),s("p",[t._v("在本地为了方便开发者调试，我们使用Docker模拟了线上的serverless环境，其中包含云函数、云数据库和云存储的运行环境。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker pull registry.cn-hangzhou.aliyuncs.com/musii/cc-serverless-sandbox:latest "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取镜像")]),t._v("\ndocker run -itd -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v(":3000 -v 云函数代码绝对路径:/var/fc/runtime/nodejs12/code registry.cn-hangzhou.aliyuncs.com/musii/cc-serverless-sandbox:latest "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行docker")]),t._v("\n")])])]),s("p",[t._v("在前端项目中指定"),s("code",[t._v("window.FC_ENV = 'dev'")]),t._v("即可使用本地的环境")]),t._v(" "),s("h4",{attrs:{id:"部署到云函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署到云函数"}},[t._v("#")]),t._v(" 部署到云函数")]),t._v(" "),s("p",[t._v("当本地调试完成后就可以部署到云函数上使用了，首先将云函数压缩(需要包含"),s("code",[t._v("node_modules")]),t._v("目录)成zip压缩包，在云叩平台上传即可。\n"),s("img",{attrs:{src:"/cloudcode-doc/images/deploy_function.png",alt:"deploy_function"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);