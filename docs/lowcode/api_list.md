# API列表

> 默认容器中已经注入SDK，可直接通过sdk.xxx调用低代码的sdk。xbb.xxx可调用云叩的sdk

## getValue(fieldId)

> 获取表单字段值

**参数**

fieldId 字段唯一id

**返回值**

**Promise value  字段值**

基本示例

```js
export function exampleGetValue () {
  sdk.getValue('text_1').then(res => {
    doSomeThings(res)
  })
}
// res 数据格式：
res = {
  success: true,   // Boolean
  value: 'value',  // 字段的值 String/Number/Object
  error: null      // 方法调用报错信息，未报错时为 null
}
```

## setValue(fieldId, value)

> 设置表单字段值

**参数**

fieldId 字段唯一id

value 字段值

**返回值**

**Promise**

基本示例

```js
export function exampleSetValue () {
  sdk.setValue('text_1', 'value').then(res => {
    doSomeThings(res)
  })
}
// res 数据格式：
res = {
  success: true,   // Boolean
  error: null      // 方法调用报错信息，未报错时为 null
}
```



## setSubformValue(params)

> 设置子表单字段值

**参数**

Object params

| 属性    | 类型            | 默认值 | 必填 | 说明               |
| ------- | --------------- | ------ | ---- | ------------------ |
| formId  | String          | 无     | 是   | 子表单id             |
| row     | Number          | 无     | 是   | 设置第几条数据的值 |
| fieldId | String          | 无     | 是   | 子表单字段的唯一id |
| value   | Strig \| Number | 无     | 是   | 设置的值           |

**返回值**

**Promise**

基本示例

```js
export function exampleSetSubformValue () {
  sdk.setSubformValue({
    formId: 'subForm_1',
    row: 0,
    fieldId: 'num_1',
    value: 0.0337999
  }).then(res => {
    doSomeThings(res)
  })
}
// res 数据格式：
res = {
  success: true,   // Boolean
  error: null      // 方法调用报错信息，未报错时为 null
}
```



## getSubformValue(params)

> 获取子表单字段值

**参数**

Object params

| 属性    | 类型   | 默认值 | 必填 | 说明               |
| ------- | ------ | ------ | ---- | ------------------ |
| formId  | String | 无     | 是   | 表单id             |
| row     | Number | 无     | 是   | 获取第几条数据的值 |
| fieldId | String | 无     | 是   | 子表单字段的唯一id |

**返回值**

**Promise value 字段值**

示例代码

```js
export function exampleGetSubformValue () {
  sdk.getSubformValue({
        formId: 'subForm_1',
        row: 0,
        fieldId: 'text_1',
    }).then(res => {
    doSomeThings(res)
  })
}
// res 数据格式：
res = {
  success: true,   // Boolean
  value: 'value',  // String/Number
  error: null      // 方法调用报错信息，未报错时为 null
}
```



## addSubformRow(formId)

> 新建一条子表单空数据

**参数**

formId 子表单唯一id

**返回值**

**Promise**

示例代码

```js
export function exampleAddSubformRow () {
  sdk.addSubformRow('subForm_1').then(res => {
    doSomeThings(res)
  })
}
// res 数据格式：
res = {
  success: true,   // Boolean
  error: null      // 方法调用报错信息，未报错时为 null
}
```



## disableField(fieldId)

> 设置字段为不可编辑

**参数**

fieldId 字段唯一id

**返回值**

**Promise**

示例代码

```js
export function exampleDisableField () {
  sdk.disableField('text_1').then(res => {
    doSomeThings(res)
  })
}
// res 数据格式：
res = {
  success: true,   // Boolean
  error: null      // 方法调用报错信息，未报错时为 null
}
```



## enableField(fieldId)

> 设置字段为可编辑

**参数**

fieldId 字段唯一id

**返回值**

**Promise**

示例代码

```js
export function exampleEnableField() {
  sdk.enableField('text_1').then(res => {
    doSomeThings(res)
  })
}
// res 数据格式：
res = {
  success: true,   // Boolean
  error: null      // 方法调用报错信息，未报错时为 null
}
```


## showToast(info)

> 显示消息提示

**参数**

Object info

| 属性    | 类型            | 默认值 | 必填 | 说明               |
| ------- | --------------- | ------ | ---- | ------------------ |
| type  | String          | 无     | 是   | 提示类型: success/warning/info/error     |
| content     | String          | 无     | 否   | 消息内容 |
| time | Number          | 无     | 否   | 显示时长，单位为毫秒，最大值为3000 |

**返回值**

**Promise**

示例代码

```js
export function examplShowToast() {
  sdk.showToast({
    type: 'success',
    content: '这是内容',
    time: 3000
  }).then(res => {
    doSomeThings(res)
  })
}
// res 数据格式：
res = {
  success: true   // Boolean
}
```


# 代码实践

## 解决问题

在低代码之前，客户提出一个需求，实现斯里兰卡卢布根据实时汇率将金额转换成美元的需求。对于这个需求，销帮帮CRM是无法完成的，或者说是不会为某一个单一的客户去实现一个特殊的需求而影响到销帮帮CRM系统。
但是在低代码实现之后，我们可以通过低代码为用户完成这个个性化的需求。

## 表单设计

低代主要是对表单字段和表单事件的操作，所以我们需要先设计一个表单，

![斯里兰卡卢布汇率转换表单](/images/lowcode_form.jpg)

表单中，有斯里兰卡卢比的金额数字字段，币种选择的单选按钮字段，显示各币种汇率的子表单字段，最后有根据汇率转换出金额的汇率结算数字字段。

## 代码实现

表单设计完成后，我们就需要一步步的实现一个定制化的需求，以下我们一步步分析，最后实现该功能。

### 汇率写入

首先我们需要实时的获取斯里兰卡卢比转换个金额的汇率，并将汇率的值回写到子表单中

那么斯里兰卡卢比对各国的汇率是需要实时获取的，此时我们就需要后端的支持，我们可以写一段 mock 数据来模拟真实的后端请求。

![示例步骤—1](/images/lowcode_example_1.jpg)

那么表单的效果就是在表单展示后，会将对应汇率的值写到子表单中


### 计算汇率函数

表单展示后，低代码对应的汇率填写的事件函数就被被触发，接下来我们就需要获取需要计算的一些值，其中我们就需要回去用户填写的斯里兰卡卢比的金额数字，以及想要转换的币种

那么我们继续写下面的代码

![示例步骤—2](/images/lowcode_example_4.jpg)

### 实现效果

上述的代码 我们完成低代码实时获取汇率，并根据斯里兰卡卢比动态计算目标金额的代码逻辑。
那么接下来我们就算让这段代码生效，于表单设置低代码类似，我们选择字段并设置低代码生效的时机。汇率的计算是在用户填写了金额或者切换了转换的目标币种后进行计算的
所以我们为这两个字段设置上述的低代码，以设置斯里兰卡卢比字段为例：

![示例步骤—3](/images/lowcode_example_3.jpg)

由此我们完成本次定制化需求，斯里兰卡卢比的汇率转换。

### 效果展示

![示例步骤—4](/images/lowcode_example_5.gif)

## 提示

**低代码具有需要具备一定的开发能力，并且，低代码的权限高于系统的定义的一些限制（当系统本身的逻辑执行完成后才会执行低代码的逻辑），所以请合理正确的使用低代码功能，使用者请具备一定的JavaScript语言的开发能力。否则，会导致表单数据错误的表现。有问题时请积极联系销帮帮CRM官方人员。**


