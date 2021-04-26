(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{374:function(a,t,s){"use strict";s.r(t);var r=s(45),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"代码实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实践"}},[a._v("#")]),a._v(" 代码实践")]),a._v(" "),s("h2",{attrs:{id:"解决问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决问题"}},[a._v("#")]),a._v(" 解决问题")]),a._v(" "),s("p",[a._v("在低代码之前，客户提出一个需求，实现斯里兰卡卢布根据实时汇率将金额转换成美元的需求。对于这个需求，销帮帮CRM是无法完成的，或者说是不会为某一个单一的客户去实现一个特殊的需求而影响到销帮帮CRM系统。\n但是在低代码实现之后，我们可以通过低代码为用户完成这个个性化的需求。")]),a._v(" "),s("h2",{attrs:{id:"表单设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单设计"}},[a._v("#")]),a._v(" 表单设计")]),a._v(" "),s("p",[a._v("低代主要是对表单字段和表单事件的操作，所以我们需要先设计一个表单，")]),a._v(" "),s("p",[s("img",{attrs:{src:"/cloudcode-doc/images/lowcode_form.jpg",alt:"斯里兰卡卢布汇率转换表单"}})]),a._v(" "),s("p",[a._v("表单中，有斯里兰卡卢比的金额数字字段，币种选择的单选按钮字段，显示各币种汇率的子表单字段，最后有根据汇率转换出金额的汇率结算数字字段。")]),a._v(" "),s("h2",{attrs:{id:"代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[a._v("#")]),a._v(" 代码实现")]),a._v(" "),s("p",[a._v("表单设计完成后，我们就需要一步步的实现一个定制化的需求，以下我们一步步分析，最后实现该功能。")]),a._v(" "),s("h3",{attrs:{id:"汇率写入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#汇率写入"}},[a._v("#")]),a._v(" 汇率写入")]),a._v(" "),s("p",[a._v("首先我们需要实时的获取斯里兰卡卢比转换个金额的汇率，并将汇率的值回写到子表单中")]),a._v(" "),s("p",[a._v("那么斯里兰卡卢比对各国的汇率是需要实时获取的，此时我们就需要后端的支持，我们可以写一段 mock 数据来模拟真实的后端请求。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/cloudcode-doc/images/lowcode_example_1.jpg",alt:"示例步骤—1"}})]),a._v(" "),s("p",[a._v("那么表单的效果就是在表单展示后，会将对应汇率的值写到子表单中")]),a._v(" "),s("h3",{attrs:{id:"计算汇率函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算汇率函数"}},[a._v("#")]),a._v(" 计算汇率函数")]),a._v(" "),s("p",[a._v("表单展示后，低代码对应的汇率填写的事件函数就被被触发，接下来我们就需要获取需要计算的一些值，其中我们就需要回去用户填写的斯里兰卡卢比的金额数字，以及想要转换的币种")]),a._v(" "),s("p",[a._v("那么我们继续写下面的代码")]),a._v(" "),s("p",[s("img",{attrs:{src:"/cloudcode-doc/images/lowcode_example_4.jpg",alt:"示例步骤—2"}})]),a._v(" "),s("h3",{attrs:{id:"实现效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现效果"}},[a._v("#")]),a._v(" 实现效果")]),a._v(" "),s("p",[a._v("上述的代码 我们完成低代码实时获取汇率，并根据斯里兰卡卢比动态计算目标金额的代码逻辑。\n那么接下来我们就算让这段代码生效，于表单设置低代码类似，我们选择字段并设置低代码生效的时机。汇率的计算是在用户填写了金额或者切换了转换的目标币种后进行计算的\n所以我们为这两个字段设置上述的低代码，以设置斯里兰卡卢比字段为例：")]),a._v(" "),s("p",[s("img",{attrs:{src:"/cloudcode-doc/images/lowcode_example_3.jpg",alt:"示例步骤—3"}})]),a._v(" "),s("p",[a._v("由此我们完成本次定制化需求，斯里兰卡卢比的汇率转换。")]),a._v(" "),s("h3",{attrs:{id:"效果展示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效果展示"}},[a._v("#")]),a._v(" 效果展示")]),a._v(" "),s("p",[s("img",{attrs:{src:"/cloudcode-doc/images/lowcode_example_5.gif",alt:"示例步骤—4"}})]),a._v(" "),s("h2",{attrs:{id:"提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[a._v("#")]),a._v(" 提示")]),a._v(" "),s("p",[s("strong",[a._v("低代码具有需要具备一定的开发能力，并且，低代码的权限高于系统的定义的一些限制（当系统本身的逻辑执行完成后才会执行低代码的逻辑），所以请合理正确的使用低代码功能，使用者请具备一定的JavaScript语言的开发能力。否则，会导致表单数据错误的表现。有问题时请积极联系销帮帮CRM官方人员。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);