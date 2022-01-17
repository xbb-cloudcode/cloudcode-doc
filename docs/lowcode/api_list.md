# API列表

> 默认容器中已经注入SDK，可直接通过sdk.xxx调用低代码的sdk。xbb.xxx可调用云叩的sdk

## getValue(fieldId)

> 获取表单字段值

**参数**

fieldId 字段唯一id

- 当fieldId为`*`时，获取整个表单的所有字段值
- 当fieldId为`子表单id`时，获取子表单所有数据
- 当fieldId为`子表单id.列id`时，获取子表单指定列的所有数据列表
- 当fieldId为`子表单id.0.列id`时，获取子表单第1条数据的指定列的数据

**返回值**

**Promise value  字段值**

基本示例

<<< codes/lowcode/getValue.js

## setValue(fieldId, value)

> 设置表单字段值

**参数**

fieldId 字段唯一id

value 字段值

**返回值**

**Promise**

基本示例

<<< codes/lowcode/setValue.js


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

<<< codes/lowcode/setSubformValue.js



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
| menuId   | Number          | 无     | 是   | 表单对应的菜单ID        |
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


## getDataId()

> 获取当前正在编辑的数据id

**参数**

无

**返回值**

**Promise**

示例代码

```js
// 该函数可通过代码生成器自动生成
export async function test () {
  const res = sdk.getDataId()
}
// res 数据格式：
res = {
  success: true,   // Boolean
  value: 'dataId'  // 字段的值 String/Number/Object
}
```

## getUserInfo()
> 获取当前销帮帮的用户信息

**参数**

无

**返回值**

```json
{
  "userId": "1060661526-1904315290", // 用户 ID
  "corpid": "ding012d1a0065f8b378ffe93478753d9884", // 公司 ID
  "xbbAccessToken": "*****************************", // 销帮帮用户信息身份凭证，此内容仅二方可使用
  "roleIds": "|1|5|", // 角色ID 存在多个角色 使用|分隔
  "env": "prod", // 当前销帮帮运行环境
  "companyName": "云叩学院", // 公司名称
  "userName": "Han 谭景琳", // 用户名称
  "lang": "zh_CN" // 当前销帮帮运行使用的国际化
}
```
示例代码
```js
const user = await sdk.getUserInfo()
console.log(user)
```

## validateForm()
> 支持触发表单校验

> 最低使用版本：销帮帮 V4.46.0

**参数**

无

**返回值**
```json
{
  "success": true, // 注意 这个 success 标识是标识低代码是否执行成功 并不是表单校验的结果
  "error": null,
  "validateSuccess": false, // 表单校验的结果
  "data": { // 此时表单的所有数据，注意只有表单校验成功此项才会有值
    "text_1": "",
    "text_2": "",
    "creatorId": {
    },
    "addTime": ,
    "serialNo": ""
  }
}
```


## approveProcess()
> 支持在审批中直接触发审批流操作：同意、拒绝、暂存、回退等

> 最低使用版本：销帮帮 V4.46.0

**参数**

String 直接传入操作

**返回值**

无

实例代码
```js
export function validateAndSubmit() {
  sdk.approveProcess('回退')
}
```
approveProcess接受一个参数，直接传入审批界面界面上的按钮文字（销帮帮在接收到指令以后是通过汉字去匹配对应操作的）
即可完成对应操作。