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