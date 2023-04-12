---
sidebarDepth: 2
---

# API列表

## 获取表单字段值
### sdk.getValue(fieldId) <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

| 名称      | 类型     | 描述     |
|---------|--------|--------|
| fieldId | string | 表单字段id |


- 当fieldId为`*`时，获取整个表单的所有字段值
- 当fieldId为`子表单id`时，获取子表单所有数据
- 当fieldId为`子表单id.列id`时，获取子表单指定列的所有数据列表
- 当fieldId为`子表单id.0.列id`时，获取子表单第**1**条数据的指定列的数据

**返回值**

`Promise<value>`  字段值

基本示例

```js
export async function exampleGetValue () {
  const res = await sdk.getValue('text_1');
  console.log(res)
}
// res 数据格式：
res = {
  success: true,   // Boolean
  value: 'value',  // 字段的值 String/Number/Object
  error: null      // 方法调用报错信息，未报错时为 null
}
```

## 设置表单字段值
### sdk.setValue(fieldId, value)  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

| 名称      | 类型     | 描述     |
|---------|--------|--------|
| fieldId | string | 表单字段id |
| value   | any    | 表单字段值  |

**返回值**

`Promise`

基本示例

```js
export async function exampleSetValue () {
  const res = await sdk.setValue('text_1', 'value');
  console.log(res)
}
// res 数据格式：
res = {
  success: true,   // Boolean
  error: null      // 方法调用报错信息，未报错时为 null
}
```


## 获取表单字段配置信息
### sdk.getFieldInfo(fieldId) <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

| 名称      | 类型     | 描述     |
|---------|--------|--------|
| fieldId | string | 表单字段id |

**返回值**

`Promise`

基本示例

```js
export async function exampleGetFieldInfo () {
  const res = await sdk.getFieldInfo('text_1');
  console.log(res)
}
// res 数据格式：
res = {
  success: true,   // Boolean
  error: null,
  fieldInfo: {...fieldInfo}     // 表单字段配置信息Object
}
```


## 设置子表单字段值
### sdk.setSubformValue(params)  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

`[Object params]`

| 属性      | 类型     | 默认值 | 必填  | 说明         |
|---------|--------|-----|-----|------------|
| formId  | String | 无   | 是   | 子表单id      |
| row     | Number | 无   | 是   | 设置第几条数据的值  |
| fieldId | String | 无   | 是   | 子表单字段的唯一id |
| value   | any    | 无   | 是   | 设置的值       |

**返回值**

`Promise`

基本示例

```js
export async function exampleSetSubformValue () {
  const res = await sdk.setSubformValue({
    formId: 'subForm_1',
    row: 0,
    fieldId: 'num_1',
    value: 0.0337999
  })
  console.log(res);
}
// res 数据格式：
res = {
  success: true,   // Boolean
  error: null      // 方法调用报错信息，未报错时为 null
}
```


## 获取子表单字段值
### sdk.getSubformValue(params)  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

`[Object params]`

| 属性      | 类型     | 默认值 | 必填  | 说明         |
|---------|--------|-----|-----|------------|
| formId  | String | 无   | 是   | 表单id       |
| row     | Number | 无   | 是   | 获取第几条数据的值  |
| fieldId | String | 无   | 是   | 子表单字段的唯一id |

**返回值**

`Promise<value>` 字段值

示例代码

```js
export async function exampleGetSubformValue () {
  const res = await sdk.getSubformValue({
    formId: 'subForm_1', 
    row: 0, 
    fieldId: 'text_1',
  })
  console.log(res);
}
// res 数据格式：
res = {
  success: true,   // Boolean
  value: 'value',  // String/Number
  error: null      // 方法调用报错信息，未报错时为 null
}
```


## 新建一条子表单空数据
### sdk.addSubformRow(formId)  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| formId | string | 子表单唯一id |

**返回值**

`Promise`

示例代码

```js
export async function exampleAddSubformRow () {
  const res = await sdk.addSubformRow('subForm_1');
  console.log(res);
}
// res 数据格式：
res = {
  success: true,   // Boolean
  error: null      // 方法调用报错信息，未报错时为 null
}
```

## 删除一条子表单
### sdk.deleteSubFormRow()  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

| 名称     | 类型     | 描述      |
|--------|--------|---------|
| formId | string | 子表单唯一id |
| index | number | 要删除的行号 |

**返回值**

`Promise`

示例代码

```js
export async function exampleAddSubformRow () {
  const res = await sdk.deleteSubFormRow({
    formId: 'subForm_1', // 子表单唯一id
    index: 0 // 要删除的行号
  });
  console.log(res)
}
// res 数据格式：
res = {
  success: true,   // Boolean
  error: null      // 方法调用报错信息，未报错时为 null
}
```


## 设置字段为不可编辑
### sdk.disableField(fieldId)  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| fieldId | string | 字段唯一id |

**返回值**

`Promise`

示例代码

```js
export async function exampleDisableField () {
  const res = await sdk.disableField('text_1');
  console.log(res)
}
// res 数据格式：
res = {
  success: true,   // Boolean
  error: null      // 方法调用报错信息，未报错时为 null
}
```


## 设置字段为可编辑
### sdk.enableField(fieldId)  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| fieldId | string | 字段唯一id |

**返回值**

`Promise`

示例代码

```js
export async function exampleEnableField() {
  const res = await sdk.enableField('text_1');
  console.log(res)
}
// res 数据格式：
res = {
  success: true,   // Boolean
  error: null      // 方法调用报错信息，未报错时为 null
}
```

## 显示消息提示
### sdk.showToast(info)  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

`[Object info]`

| 属性      | 类型     | 默认值 | 必填  | 说明                               |
|---------|--------|-----|-----|----------------------------------|
| type    | String | 无   | 是   | 提示类型: success/warning/info/error |
| content | String | 无   | 否   | 消息内容(支持换行 使用\<br\>标签换行)                           |
| time    | Number | 无   | 否   | 显示时长，单位为毫秒，最大值为3000              |

**返回值**

`Promise`

示例代码

```js
export async function examplShowToast() {
  const res = await sdk.showToast({
    type: 'success',
    content: '这是内容',
    time: 3000
  })
  console.log(res)
}
// res 数据格式：
res = {
  success: true   // Boolean
}
```

## 显示alert弹窗
### sdk.alert(info)  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

`[Object info]`

| 属性      | 类型     | 默认值 | 必填  | 说明                               |
|---------|--------|-----|-----|----------------------------------|
| content    | String | 无   | 否   | alert的内容 |
| title      | String | 无   | 否   | alert的标题                             |
| confirmButtonText       | String | 确认   | 否   | 确认按钮的文字              |

**返回值**

`Promise`

示例代码

```js
export async function examplAlert() {
  const res = await sdk.alert({
    title: 'alert标题',
    content: 'alert内容',
    confirmButtonText: '确认'
  });
  console.log(res)
}
// res 数据格式：
res = {
  confirm: true 或 false,// true说明用户点击了确认按钮 false则点击了关闭按钮
  success: true   // Boolean
}
```

## 显示confirm弹窗
### sdk.confirm(info)  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

`[Object info]`

| 属性      | 类型     | 默认值 | 必填  | 说明                               | 可选值 |
|---------|--------|-----|-----|----------------------------------|---------------------------|
| content    | String | 无   | 否   | confirm的内容 | — |
| title      | String | 无   | 否   | confirm的标题                             | — |
| confirmButtonText       | String | 确认   | 否   | 确认按钮的文字              | — |
| cancelButtonText        | String | 取消   | 否   | 取消按钮的文字              | — |
| type       | String |  warning  | 否   | 消息类型，用于显示图标              | success / info / warning / error |

**返回值**

`Promise`

示例代码

```js
export async function examplConfirm() {
  const res = await sdk.confirm({
    title: 'confirm标题',
    content: 'confirm内容',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  });
  console.log(res)
}
// res 数据格式：
res = {
  confirm: true 或 false,// true说明用户点击了确认按钮 false则点击了关闭按钮
  success: true   // Boolean
}
```

## 显示prompt弹窗
### sdk.prompt(info)  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

`[Object info]`

| 属性      | 类型     | 默认值 | 必填  | 说明                               | 可选值 |
|---------|--------|-----|-----|----------------------------------|---------------------------|
| content    | String | 无   | 否   | prompt的内容 | — |
| title      | String | 无   | 否   | prompt的标题                             | — |
| confirmButtonText       | String | 确认   | 否   | 确认按钮的文字              | — |
| cancelButtonText        | String | 取消   | 否   | 取消按钮的文字              | — |

**返回值**

`Promise`

示例代码

```js
export async function examplPrompt() {
  const res = await sdk.prompt({
    title: 'prompt标题',
    content: 'prompt内容',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
  });
  console.log(res)
}
// res 数据格式：
res = {
  value: 'value', // 用户输入的值 String类型
  confirm: true 或 false, // true说明用户点击了确认按钮 false则点击了关闭按钮
  success: true   // Boolean
}
```
## 跨表调用数据
### sdk.getFormDataList(params)  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

`[Object params]`

| 属性              | 类型     | 默认值 | 必填  | 说明                   |
|-----------------|--------|-----|-----|----------------------|
| appId           | Number | 无   | 是   | 表单对应的应用ID            |
| menuId          | Number | 无   | 是   | 表单对应的菜单ID            |
| saasMark        | Number | 无   | 是   | 表单对应的saasMark        |
| businessType    | Number | 无   | 否   | 表单对应的businessType    |
| subBusinessType | Number | 无   | 否   | 表单对应的subBusinessType |
| formId          | Number | 无   | 是   | 表单对应的ID              |
| conditions      | Array  | 无   | 否   | 筛选条件                 |
| page            | Number | 无   | 是   | 页码                   |
| pageSize        | Number | 无   | 是   | 每页数量                 |


**返回值**

`Promise`

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

## 获取当前正在编辑的数据id
### sdk.getDataId()  <Badge text="PC" type="warning"/> <Badge text="v4.57.0"/>

**参数**

无

**返回值**

`Promise`

示例代码

```js
export async function test () {
  const res = await sdk.getDataId()
  console.log(res)
}
// res 数据格式：
res = {
  success: true,   // Boolean
  value: 'dataId'  // 字段的值 String/Number/Object
}
```

## 获取当前销帮帮的用户信息
### sdk.getUserInfo()  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

**参数**

无

**返回值**

`Promise<userinfo>`

```json5
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
export async function example() {
  const user = await sdk.getUserInfo()
  console.log(user)
}
```

## 支持触发表单校验
### sdk.validateForm()  <Badge text="ALL" type="warning"/> <Badge text="v4.46.0"/>

**参数**

无

**返回值**

`Promise<result>` 表单校验结果

```json5
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

## 在审批中触发审批流操作
### sdk.approveProcess(type) <Badge text="PC" type="warning"/> <Badge text="v4.46.0"/>

**参数**

| 名称   | 类型 | 描述 |
|------| ---- |--|
| type | string | 操作类型 |

approveProcess接受一个参数，直接传入审批界面界面上的按钮文字（销帮帮在接收到指令以后是通过汉字去匹配对应操作的）
即可完成对应操作。

**返回值**

`Promise`

实例代码
```js
export async function example() {
  await sdk.approveProcess('回退')
}
```


## 获取当前业务类型
### sdk.getLowCodeType()  <Badge text="ALL" type="warning"/> <Badge text="v4.47.0"/>

**参数**

无

**返回值**

`Promise<String type>` 业务类型    
type为枚举值

| 名称   | 描述 |
|------ |--|
| approve  | 审批页 |
| edit  | 编辑页 |
| detail  | 详情页(移动端不支持) |
| design  | 表单设计页(移动端不支持) |
| new  | 新建页 |
| copy | 复制表单 |
| linkAdd | 新建弹窗类型的关联表单 |
| linkEdit | 修改弹窗类型的关联表单 |

示例代码
```javascript
export async function getType() {
  const res = await sdk.getLowCodeType();
  console.log(res);
}
```


## 调用云函数
### sdk.cloud.callFunction(object)  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

#### 参数
`[Object object]`
| 属性   | 类型     | 默认值 | 必填  | 说明        |
|------|--------|-----|-----|-----------|
| name | String | 无   | 是   | 调用的云函数名称  |
| data | Object | 无   | 否   | 传递给云函数的参数 |
#### 返回值

`Promise<data>`云函数的返回值

#### 示例
```javascript
export async function example() {
  const res = await sdk.cloud.callFunction({
    name: 'test',
    data: {
      a: 1,
      b: 2
    }
  }) 
}
```

## 上传文件到云存储
### sdk.cloud.uploadFile(object)  <Badge text="ALL" type="warning"/> <Badge text="v4.57.0"/>

#### 参数
`[Object object]`
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | ----- | ---- | --- |
| cloudPath | String | 无| 是 | 云存储路径 |
| file | file | 无| 是 | 上传的文件 |
#### 返回值

`Promise<url>`文件的云存储地址

#### 示例
```javascript
export async function example() {
  const res = await sdk.cloud.uploadFile({
    cloudPath: 'test/test.png',
    file: file
  }) 
}
```

## 刷新页面
### sdk.refreshPage()  <Badge text="ALL" type="warning"/> <Badge text="v4.49.0"/>

**参数**

无

#### 返回值

无

#### 示例
```javascript
export async function refreshPage() {
  await sdk.refreshPage()
}
```

## 刷新列表页
> 用于在列表页、详情页通过 API 等方式修改完数据以后想要实时回显到列表上的操作，仅 PC 端可用
### sdk.refreshList()  <Badge text="ALL" type="warning"/> <Badge text="v4.49.0"/>

**参数**

无

#### 返回值

无

#### 示例
```javascript
export async function refreshList() {
  await sdk.refreshList()
}
```

## 刷新详情页
> 用于在详情页通过 API 等方式修改完数据以后想要实时回显到详情页上的操作，仅 PC 端可用
### sdk.refreshDetail()  <Badge text="ALL" type="warning"/> <Badge text="v4.49.0"/>

**参数**

无

#### 返回值

无

#### 示例
```javascript
export async function refreshDetail() {
  await sdk.refreshDetail()
}
```

## 获取当前环境变量
### sdk.getEnv()  <Badge text="ALL" type="warning"/> <Badge text="v4.49.0"/>

**参数**

无

#### 返回值
`Promise<result>` 环境变量信息

```json5
{
  "success": true,
  "error": null,
  "device": "pc", // 当前销帮帮运行设备，pc 为电脑端，mobile 为手机端
  "platform": "dingtalk" // 当前销帮帮运行平台，dingtalk 为钉钉版，h5 为独立版，wx 为企业微信版，lark 为飞书版
}
```

#### 示例
```javascript
export async function getEnv() {
  const envInfo = await sdk.getEnv()
  console.log(envInfo)
}
```

## 调用销帮帮CRM系统组件
### sdk.useComponent(object)
#### 参数
`[Object object]`
| 属性 | 类型 | 必填 | 说明 |
| --- | --- |  ---- | --- |
| action | String | 是 | 调用的组件名称 |
| data | Object | 否 | 传递给组件的数据 |

目前支持调用的组件如下:
| action | data | 说明 |
| ------ | ---- | --- |
| openDetailPage | {appId, dataId, saasMark, businessType, subBusinessType} | 调用详情页 |
| addNewForm | {appId, formId, saasMark, menuId, businessType, subBusinessType, formData} | 调用新建表单页 |
| showMessage | {type, content, time} | 调用message组件 |
| openCloudCodeDialog | openCloudCodeDialogData(详细说明见下方) | 调用云叩弹窗组件 |

openCloudCodeDialogData有一个必填参数boxType,表示弹窗的类型，可选值为 `tipsSuccess`、`tipsWarn`、`tipsError`、`confirm`、`qiankun`。

| boxType | 其余参数 | 说明 |
| ------ | ---- | --- |
| tipsSuccess | title: string, content: string | 成功弹窗 |
| tipsWarn | title: string, content: string | 警告弹窗 |
| tipsError | title: string, content: string | 失败弹窗 |
| confirm | title: string, content: string | 含有确认操作的弹窗 |
| qiankun | title: string, linkAppId: 云叩插件URL, size: 弹框宽度 | 云叩插件弹窗 |


#### 返回值
`Promise<result>`组件的返回值
#### 示例
```javascript
export async function useComponent() {
  const result = await sdk.useComponent({
    action: 'openDetailPage',
    data: {
      appId: '123',
      dataId: '123',
      saasMark: '101',
      businessType: '100',
      subBusinessType: 'customer'
    }
  })
  console.log(result)
}
```

#### 云叩弹窗示例
```javascript
// 低代码
export async function openCloudCodeDialog() {
    const res = await sdk.useComponent({
        action: 'openCloudCodeDialog',
        data: {
            boxType: 'qiankun',
            linkAppId: 'http://localhost:3000/index.html'
        }
    })
    console.log(res)
}
```
```html
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/xbb-sdk/index.js"></script>
</head>
<body>
    <input type="text">
    <script>
        xbb.ready((props) => {
            xbb.onMessage('closeDialog', (e) => {
                xbb.closeContainer({ data: document.querySelector('input').value })
            })
        })
    </script>
</body>
</html>
```