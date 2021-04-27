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


## getFormDataList(params)

> 显示消息提示

**参数**

Object paramssss

| 属性    | 类型            | 默认值 | 必填 | 说明               |
| ------- | --------------- | ------ | ---- | ------------------  |
| appId   | Number          | 无     | 是   | 表单对应的应用ID        |
| saasMark     | Number     | 无     | 是   | 表单对应的saasMark     |
| businessType | Number     | 无     | 否   | 表单对应的businessType |
| subBusinessType | Number  | 无     | 否   | 表单对应的subBusinessType       |
| formId | Number           | 无     | 是   |        表单对应的ID    |
| conditions | Array        | 无     | 否   | 显示时长，单位为毫秒，最大值为3000 |
| page | Number             | 无     | 是   |             页码               |
| pageSize | Number         | 无     | 是   |             每页数量            |


**返回值**

**Promise**

示例代码

```js
// 该函数可通过代码生成器自动生成
async function getFormData(page = 1) {
  return await sdk.getFormDataList({
    appId: 2034, 
    saasMark: 2, 
    businessType: 0, 
    subBusinessType: 0, 
    formId: 14342, 
    conditions: [], 
    page: page, 
    pageSize: 20
  })
}
// 返回数据格式：
{
  success: true,   // Boolean
  error: null,
  data: {
    allowEditAfterFinished: 1,
    businessType: 2401,
    paasFormDataESList: [], // 表单数据
    pageHelper: {
      currentPageNum: 1, // 当前页码
      hasLeft: false,
      hasRight: true,
      leftPageNums: [],
      pageSize: 20, // 每页的数据数量
      pageTotal: 228, // 总页数
      rightPageNums: [2, 3, 4, 5],
      rowsCount: 4548 // 数据总量
    }
  }
}
```