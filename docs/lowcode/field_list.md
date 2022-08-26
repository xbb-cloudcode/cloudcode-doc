# 字段出入参文档

此文档会枚举所有已知字段的 `getValue` 和 `setValue` 范例。
总体来说，销帮帮的所有字段分为 PaaS 字段和 SaaS 字段，PaaS 字段即用户通过表单设计可以自己定义新增的字段，SaaS 字段即销帮帮固有逻辑字段，如`关联客户、关联产品`这类。
## PaaS字段
![PaaS 字段](/cloudcode-doc/images/low-code-field-show.png)
上图中所有可以通过左侧添加进来的字段都可以认为是 PaaS 字段。

### 基础字段

### 单行文本
单行文本的字段标识（attr）通常为 `text_*`
```JavaScript
// 获取值
const data = await sdk.getValue('text_1')
console.log(data)
// { value: 'HelloWorld' }
// 赋值
const data = await sdk.setValue('text_1', 'HelloCloudCode')
```
### 多行文本
多行文本和单行文本行为完全一致
```JavaScript
// 获取值
const data = await sdk.getValue('text_1')
console.log(data)
// { value: 'HelloWorld' }
// 赋值
const data = await sdk.setValue('text_1', 'HelloCloudCode')
```
### 数字
数字字段的标识（attr）通常为 `num_*`
```JavaScript
// 获取值
const data = await sdk.getValue('num_1')
console.log(data)
// { value: 1 }
// 赋值
const data = await sdk.setValue('num_1', 2)
```
### 日期
日期字段需要注意，销帮帮的日期字段存储的是时间戳并且舍去了毫秒位,
比如现在是 2021 年 10 月 1 日 00:00 分，正常我们的时间戳应该是`1633017600000`，那么销帮帮所接受的时间就是`1633017600`。
日期字段的标识（attr）通常为`date_*`
```JavaScript
// 获取值
const data = await sdk.getValue('date_1')
console.log(data)
// { value: 1633017600 }
// 赋值
const now = new Date().getTime()
sdk.setValue('date_1', now / 1000)
```
### 单选按钮
单选按钮的值通常是一个对象，结构固定为`{text:'', value: ''}`，字段标识为`text_*`。
```JavaScript
// 获取值
const data = await sdk.getValue('text_1')
console.log(data)
// { value: { text: '选项值1', value: '0727a962-f7f1-0030-77b9-984577cdd552' } }
// 赋值
sdk.setValue('text_1', { text: '选项值2', value: 'a0614c6a-dde7-6448-7fdd-3a5be559e133' })
```
上面的代码中，我们发现`value`是一串代码，这其实是销帮帮内生成的唯一ID，需要注意的是这个 id 不可以由外部随便乱填一个，否则会导致数据异常，如果需要获取 ID，可以在低代码面板中的字段唯一解释查询：
![PaaS 字段](/cloudcode-doc/images/field-info-quey-options.jpg)
复选框组、下拉框、下拉复选框同样也可以通过这样的操作获取到选项值。
### 复选框组
复选框组的字段标识是`array_*`，他的值是一个数组，里面每一个元素都由`{text:'', value: ''}`组成
```JavaScript
const data = await sdk.getValue('array_1')
console.log(data)
// { value: [{ text: '选项值1', value: '0727a962-f7f1-0030-77b9-984577cdd552' }, { text: '选项值2', value: 'a0614c6a-dde7-6448-7fdd-3a5be559e133' }] }
// 赋值
sdk.setValue('array_1', [{ text: '选项值1', value: '0727a962-f7f1-0030-77b9-984577cdd552' }, { text: '选项值2', value: 'a0614c6a-dde7-6448-7fdd-3a5be559e133' }])
```
### 下拉框
下拉框和单选按钮类似，但是需要注意的是，下拉框允许自己的选项为`关联其他表单数据`和`数据联动`，后两者所读取或者接收的参数都需要根据联动的表单来定义。
> 当选项为常规的自定义选项时
```JavaScript
// 获取值
const data = await sdk.getValue('text_1')
console.log(data)
// { value: { text: '选项值1', value: '0727a962-f7f1-0030-77b9-984577cdd552' } }
// 赋值
sdk.setValue('text_1', { text: '选项值2', value: 'a0614c6a-dde7-6448-7fdd-3a5be559e133' })
```
> 当选项为关联其他表单数据时

假设当前是 A 表单下的下拉框 a，我选项联动了 B 表单下的下拉框 b，则需要通过上面我们字段唯一解释查询去查询 B 表单的 b 字段的下拉选项。赋值和获取值行为和正常下拉框一致：
```JavaScript
// 获取值
const data = await sdk.getValue('text_1')
console.log(data)
// { value: { text: '选项值1', value: '0727a962-f7f1-0030-77b9-984577cdd552' } }
// 赋值
sdk.setValue('text_1', { text: '选项值2', value: 'a0614c6a-dde7-6448-7fdd-3a5be559e133' })
```
> 当选项为数据联动时

数据联动选项的`text`和`value`始终保持一致，假设我们下拉框数据联动的是客户表，联动显示客户名称，则
```JavaScript
// 获取值
const data = await sdk.getValue('text_1')
console.log(data)
// { value: { text: '张三', value: '张三' } }
// 赋值
sdk.setValue('text_1', { text: '李四', value: '李四' })
```
### 下拉复选框
下拉复选框同样也可以设置选项为`自定义`、`关联其他表单数据`、`数据联动`，规则基本和下拉框一致，只是下拉复选框是数组。
下拉复选框的字段标识为`array_*`
> 当选项为常规的自定义时
```JavaScript
// 获取值
const data = await sdk.getValue('text_1')
console.log(data)
// { value: [{"text":"选项值1","value":"4df36041-646e-7ee7-130a-b03ce23d5b3d"},{"text":"选项值2","value":"44741ae0-b1aa-e8d1-f2ed-7e1bc743ec92"}] }
// 赋值
sdk.setValue('text_1', [{"text":"选项值1","value":"4df36041-646e-7ee7-130a-b03ce23d5b3d"},{"text":"选项值2","value":"44741ae0-b1aa-e8d1-f2ed-7e1bc743ec92"}])
```
> 当选项为关联其他表单数据时

假设当前是 A 表单下的下拉框复选框 a，我选项联动了 B 表单下的下拉框 b，则需要通过上面我们字段唯一解释查询去查询 B 表单的 b 字段的下拉选项。赋值和获取值行为和正常下拉复选框一致：
```JavaScript
// 获取值
const data = await sdk.getValue('array_1')
console.log(data)
// { value: [{"text":"选项值1","value":"4df36041-646e-7ee7-130a-b03ce23d5b3d"}] }
// 赋值
sdk.setValue('text_1', [{"text":"选项值2","value":"44741ae0-b1aa-e8d1-f2ed-7e1bc743ec92"}])
```
> 当选项为数据联动时

数据联动选项的`text`和`value`始终保持一致，假设我们下拉复选框数据联动的是客户表，联动显示客户名称，则
```JavaScript
// 获取值
const data = await sdk.getValue('text_1')
console.log(data)
// { value: [{ text: '张三', value: '张三' }] }
// 赋值
sdk.setValue('text_1', [{ text: '张三', value: '张三' }, { text: '李四', value: '李四' }])
```
### 地址
地址字段由省市区、详细地址、经纬度组成，字段标识是`address_*`
```JavaScript
// 获取值
const data = await sdk.getValue('address_1')
console.log(data)
// { value: {"city":"杭州市","address":"祥符街道通益路861号","district":"拱墅区","province":"浙江省","location":{"lon":120.13072,"lat":30.33306}} }
// 赋值
sdk.setValue('address_1', {"city":"杭州市","address":"银丰大厦1702","district":"滨江区","province":"浙江省","location":{"lon":120.13022,"lat":30.33353}})
```
### 定位
定位字段组成结构和地址一致，字段标识是`geo_*`
```JavaScript
// 获取值
const data = await sdk.getValue('geo_1')
console.log(data)
// { value: {"city":"杭州市","address":"祥符街道通益路861号","district":"拱墅区","province":"浙江省","location":{"lon":120.13072,"lat":30.33306}} }
// 赋值
sdk.setValue('geo_1', {"city":"杭州市","address":"银丰大厦1702","district":"滨江区","province":"浙江省","location":{"lon":120.13022,"lat":30.33353}})
```

### 图片
图片字段是一个数组，元素为图片地址，字段标识是`file_*`，销帮帮可以接受任意来源的地址
> 注意，由于浏览器限制必须要是 https 链接，并且做好Access-Control-Allow-Origin（跨域）的配置
```JavaScript
// 获取值
const data = await sdk.getValue('file_1')
console.log(data)
// { value: ["https://cdn3.xbongbong.com/xbbProPrd/ding012d1a0065f8b378ffe93478753d9884/1060661526-1904315290/jpg/16342813779849b65d7a37fa3ef4c80e42795947b51fa.jpg?1634281377984"] }
// 赋值
sdk.setValue('file_1', ["https://cdn3.xbongbong.com/xbbProPrd/ding012d1a0065f8b378ffe93478753d9884/1060661526-1904315290/jpg/16342813779849b65d7a37fa3ef4c80e42795947b51fa.jpg?1634281377984"])
```
### 附件
附件字段的标识是`file_*`，附件字段是一个数组，元素为对象，对象内包含文件地址、文件类型、文件名、大小、uid（随机生成 id）
```JSON
{
  "filename":"12055.jpg", // 文件名称
  "attachIndex":"https://cdn3.xbongbong.com/xbbProPrd/ding012d1a0065f8b378ffe93478753d9884/1060661526-1904315290/jpg/16342818566499b65d7a37fa3ef4c80e42795947b51fa.jpg", // 文件地址
  "ext":"jpg", // 文件类型
  "size":6686467, // 文件大小
  "uid":1634281856649 // 唯一 id 可以用时间戳+随机数的方法生成
}
```
附件的地址规则跟图片一致，允许外部来源，同样需要 https 和跨域配置。
```JavaScript
const data = await sdk.getValue('file_1')
console.log(data)
// { value: [{
//  "filename":"12055.jpg", // 文件名称
//  "attachIndex":"https://cdn3.xbongbong.com/xbbProPrd/ding012d1a0065f8b378ffe93478753d9884/1060661526-1904315290/jpg/16342818566499b65d7a37fa3ef4c80e42795947b51fa.jpg", // 文件地址
//  "ext":"jpg", // 文件类型
//  "size":6686467, // 文件大小
//  "uid":1634281856649 // 唯一 id 可以用时间戳+随机数的方法生成
// }] }
// 赋值
sdk.setValue('file_1', [{
  "filename":"12055.jpg", // 文件名称
  "attachIndex":"https://cdn3.xbongbong.com/xbbProPrd/ding012d1a0065f8b378ffe93478753d9884/1060661526-1904315290/jpg/16342818566499b65d7a37fa3ef4c80e42795947b51fa.jpg", // 文件地址
  "ext":"jpg", // 文件类型
  "size":6686467, // 文件大小
  "uid":1634281856649 // 唯一 id 可以用时间戳+随机数的方法生成
}])
```
### 描述文本
> 此字段暂不支持低代码
### 标签
标签字段的标识是`array_*`，，标签字段是一个数组，元素为对象，对象内包含：
```JSON
{
  "addTime":1614390504, // 创建时间
  "appId":267450, // 应用 ID
  "businessType":0, // 业务类型 SaaS 表单特供
  "color":"#FF813D", // 标签颜色
  "corpid":"ding012d1a0065f8b378ffe93478753d9884", // 公司 ID
  "creatorId":"1060661526", // 创建人
  "del":0,
  "enable":0,
  "formId":2675232,
  "groupId":8138,
  "id":8687,
  "name":"默认标签",
  "sort":0,
  "updateTime":1614390504
}
```
> 注意，目前低代码无法从内部直接获取标签选项，为了谨慎起见，使用低代码修改标签字段的数据都应该源自于 API 查询，详见：[销帮帮 Open-API](https://profapi.xbongbong.com/#/apitest?anchor=%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%95)

```JavaScript
// 获取值
const data = await sdk.getValue('file_1')
console.log(data)
// {value: [{"addTime":1614390504,"appId":267450,"businessType":0,"color":"#FF813D","corpid":"ding012d1a0065f8b378ffe93478753d9884","creatorId":"1060661526-1904315290","del":0,"enable":0,"formId":2675232,"groupId":8138,"id":8687,"name":"默认标签","sort":0,"updateTime":1614390504}] }
// 赋值
sdk.setValue('file_1', [{"addTime":1614390504,"appId":267450,"businessType":0,"color":"#FF813D","corpid":"ding012d1a0065f8b378ffe93478753d9884","creatorId":"1060661526-1904315290","del":0,"enable":0,"formId":2675232,"groupId":8138,"id":8687,"name":"默认标签","sort":0,"updateTime":1614390504}])
```

### 复杂字段
### 子表单
子表单的标识是`subForm_*`子表单是对字段的聚合，内部可以包含其他字段，比如这样的子表单：
![PaaS 字段](/cloudcode-doc/images/subform-demo.png)
拿到的结构示例：
```JavaScript
// 获取值
const data = await sdk.getValue('subForm_1');
console.log(data)
// { value: [{"text_1":"Han","num_1":22,"subId":"bb1802c2-0570-b977-a536-675fe06b2e94","editFlag":true},{"text_1":"Kin","num_1":22,"subId":"5bd37d72-34e2-2787-80a0-d5334c57278a","editFlag":true}] }
// 赋值
sdk.setValue('subForm_1', [{"text_1":"Han","num_1":22},{"text_1":"Kin","num_1":22}])
```
> 注意，上面我们看到获取值的时候每一行数据都有 subId 和 editFlag 两个属性，但是赋值的时候是不需要这两个字段的，低代码会在接收到子表单赋值指令后自动为数据添加这两个属性。

### 关联数据
关联数据的标识为`text_*`。关联数据的结构较为特殊，内部的属性和关联的表单级其主键 ID 相关，如我关联了客户列表，其主键为客户名称，那么这条关联数据的数据结构就是：
```JSON
{
  "dataId":69690056, // 关联数据的 ID，必填
  "data":{
    "addTime":1633771411, // 关联数据的添加时间 非必填
    "appId":257213, // 关联数据的应用 ID, 非必填
    "corpid":"ding012d1a0065f8b378ffe93478753d9884",// 当前公司 corpidid 非必填
    "creatorId":"1060661526-1904315290",// 当前数据创建人 非必填
    "dataId":69690056, // 关联数据的 ID，必填
    "del":0, // 删除标记，非必填
    "formId":2572664, // 表单 ID，非必填
    "menuId":2643262, // 菜单 ID，非必填
    "ownerId":"1060661526-1904315290", // 数据归属人，非必填
    "serialNo":"", // 流水号，非必填
    "updateTime":1633771707, // 更新时间，非必填
    "text_1":"测试001" // 客户名称，必填
  }
}
```
> 注意上面我们对 text_1这个字段标明了必填，但这个东西不是固定的，而是根据关联数据主键来的，我关联的是客户表下面的客户名称，客户名称的字段标识是 text_1，所以这个字段必填。
```JavaScript
// 获取值
const data = await sdk.getValue('text_8')
console.log(data)
// { value: {"dataId":69690056,"data":{"addTime":1633771411,"appId":257213,"corpid":"ding012d1a0065f8b378ffe93478753d9884","creatorId":"1060661526-1904315290","dataId":69690056,"del":0,"formId":2572664,"menuId":2643262,"ownerId":"1060661526-1904315290","serialNo":"","updateTime":1633771707,"text_1":"测试001"}} }
// 赋值
sdk.setValue('text_8', {"dataId":69690056,"data":{"dataId":69690056,"text_1":"测试001"}}) // 只用填写数据 ID 和主键字段。
```
### 成员单选
成员单选的字段标识是`text_*`，他的值是一个对象，里面包含`id`用户id和`name`用户名：
```JavaScript
// 获取值
const data = await sdk.getValue('text_9')
console.log(data)
// { value: {"id":"011","name":"吴军昊"} }
// 赋值
sdk.setValue('text_9', {"id":"012","name":" 谭景琳"})
```
### 成员多选
成员多选的字段标识是`array_*`，他的值是一个数组，数组里包含的每个元素和成员单选一样，`id`用户id和`name`用户名。
```JavaScript
// 获取值
const data = await sdk.getValue('text_9')
console.log(data)
// { value: [{"id":"011","name":"吴军昊"},{"id":"012","name":"Han 谭景琳"}] }
// 赋值
sdk.setValue('text_9', [{"id":"011","name":"吴军昊"},{"id":"012","name":"Han 谭景琳"}])
```
### 部门单选
部门单选的字段标识是`text_*`，他的值是一个对象，包含`id`部门id和`name`部门名、`property`属性，属性固定的值是`dept`。
```JavaScript
// 获取值
const data = await sdk.getValue('text_9')
console.log(data)
// { value: {"id":411449877,"name":"体验校区","property":"dept"} }
// 赋值
sdk.setValue('text_9', {"id":411449877,"name":"体验校区","property":"dept"})
```
### 部门多选
部门单选的字段标识是`array_*`，他的值是一个数组，数组里包含的每个元素和部门单选一样，`id`用户id和`name`用户名、`property: dept`
```JavaScript
// 获取值
const data = await sdk.getValue('array_1')
console.log(data)
// { value: [{"id":411682382,"name":"Han 谭景琳的体验班","property":"dept"},{"id":411586525,"name":"老师","property":"dept"},{"id":411586526,"name":"学生","property":"dept"},{"id":411586527,"name":"家长","property":"dept"}] }
// 赋值
sdk.setValue('array_1', [{"id":411682382,"name":"Han 谭景琳的体验班","property":"dept"},{"id":411586525,"name":"老师","property":"dept"},{"id":411586526,"name":"学生","property":"dept"},{"id":411586527,"name":"家长","property":"dept"}])
```

### 系统字段
### 创建人
创建人字段的标识是`creatorId`，注意创建人字段是由系统自动生成的，所以无法修改和读取。此字段可以在列表页、详情页以及跨表调用等后端数据查询的场景下获取到。
### 创建时间
创建时间字段的标识是`addTime`，注意创建时间是由系统自动生成的，所以无法修改和读取。此字段可以在列表页、详情页以及跨表调用等后端数据查询的场景下获取到。

### 更新时间
更新时间字段的标识是`updateTime`，注意更新时间是由系统自动生成的，所以无法修改和读取。此字段可以在列表页、详情页以及跨表调用等后端数据查询的场景下获取到。

### 所属部门
更新时间字段的标识是`departmentId`，其数据结构和成员单选类似，`id`部门id和`name`部门名。
> 在回填`departmentId`请注意，正常情况下所属部门是当前用户的所属部门及其名下的子部门，不可向上选取，如果强行修改为其他节点数据可能造成数据异常。
```JavaScript
// 获取值
const data = await sdk.getValue('departmentId')
console.log(data)
// { value: {"id":411449877,"name":"体验校区"} }
// 赋值
sdk.setValue('departmentId', {"id":411449877,"name":"体验校区"})
```

### 负责人
负责人字段的标识是`ownerId`，需要注意虽然负责人是单选的，但是他的数据结构是个数组。
```JavaScript
// 获取值
const data = await sdk.getValue('ownerId')
console.log(data)
// { value: [{"id":"1060661526-1904315290","name":"Han 谭景琳"}] }
// 赋值
sdk.setValue('ownerId', [{"id":"1060661526-1904315290","name":"Han 谭景琳"}])
```
### 流水号
流水号字段的标识是`serialNo`，值是一个文本。正常情况下这个字段会由销帮帮生成，如非必要请不要随意修改。
```JavaScript
// 获取值
const data = await sdk.getValue('serialNo')
console.log(data)
// { value: "2021101500001" }
// 赋值
sdk.setValue('serialNo', "2021101500002")
```

## SaaS字段
SaaS 字段常见于CRM、进销存、资金、经销商、工单、市场管理这些系统应用内的字段。
> 这里只讲和常规字段有差异的字段。

### CRM

### 上级客户
上级客户和关联数据的逻辑类似，他的值是一个数组包含对象。值得一提的是，上级客户的字段标识固定为`text_17`。
```JavaScript
// 获取值
const data = await sdk.getValue('text_17')
console.log(data)
// { value: [{"dataId":69690056,"appId":257213,"menuId":2643262,"formId":2572664,"addTime":1633771411,"text_1":"测试001","creatorId":"1060661526-1904315290","updateTime":1633771707,"option_0":{"value":[]},"ownerId":["1060661526-1904315290"],"serialNo":"","date_2":"一周内","customer_last_connect_time":"1","advancePaymentBalance":0,"finishAmount":undefined,"text_4":"","id":69690056,"name":"测试001"}] }
// 赋值
// 以下四个字段必填
sdk.setValue('text_17', [{"dataId":69690056,"text_1":"测试001","id":69690056,"name":"测试001"}]) // 只用填写数据 ID 和主键字段。
```
### 客户电话
客户电话和子表单的逻辑类似，字段标识固定为`subForm_1`，下面的子字段为`text_1`电话类型、`text_2`电话，电话类型为对象，结构是：
```JSON
{"text":"工作","value":"1"}
```
销帮帮默认提供的选项值和对应 value 如下：
```JSON
[
  {
    "checked": true,
    "isOther": 0,
    "text": "工作",
    "value": "1"
  },
  {
    "checked": false,
    "isOther": 0,
    "text": "手机",
    "value": "2"
  },
  {
    "checked": false,
    "isOther": 0,
    "text": "住址",
    "value": "3"
  },
  {
    "checked": false,
    "isOther": 0,
    "text": "主要",
    "value": "4"
  },
  {
    "checked": false,
    "isOther": 0,
    "text": "传真",
    "value": "5"
  },
  {
    "checked": false,
    "isOther": 0,
    "text": "其他",
    "value": "6"
  }
]
```
如果自定义了选项，或者把上面其中一个选项删除再重新添加，他的 value 都会随机生成一个 uuid，这个时候需要参考下拉框获取value的方式。
```JavaScript
// 获取值
const data = await sdk.getValue('subForm_1')
console.log(data)
// [{"text_1":{"text":"工作","value":"1"},"text_2":"12315848166","subId":"fac185af-69c1-769d-2fe3-dc7006352e50","editFlag":true}]
// 赋值
sdk.setValue('subForm_1', [{"text_1":{"text":"工作","value":"1"},"text_2":"12315848166"}, "text_1":{"text":"手机","value":"2"},"text_2":"12315848167"}])
```

### 重要程度
重要程度这类评分字段，他的值就是 1-5 的数字。客户下的重要程度标识固定为`num_1`
```JavaScript
const data = await sdk.getValue('num_1')
console.log(data)
// {"value": 1}
sdk.setValue('num_1', 5)
```
### 联系人
### 生日
生日字段由`birthday`生日和`birthdayFlag`生日类型组成：
```JSON
{
  "birthdayFlag":0, // 0 代表公里  1 代表农历
  "birthday":"1980-01-03"
}
```
联系人的生日固定为`text_14`
```JavaScript
// 获取值
const data = await sdk.getValue('text_14')
console.log(data)
// {"birthdayFlag":0,"birthday":"1980-01-03"}
// 赋值
sdk.setValue('text_14', {"birthdayFlag":1,"birthday":"1980-01-03"})
```

### 跟进记录
### 下次跟进提醒
下次跟进提醒的字段标识固定为`num_3`。他的值是0或者 1，0 代表关闭，1 代表开启。
```JavaScript
// 获取值
const data = await sdk.getValue('num_3')
console.log(data)
// { "value": 0 }
// 赋值
sdk.setValue('num_3', 1)
```

### 通用
### 关联产品
> 警告⚠️！关联产品通常会联动比较多的业务，不建议修改其数据，否则可能会造成数据异常。
关联产品类似子表单结构，每一行都是这样的对象：
```JSON
{
  "text_1": { // 产品名称 参考关联数据
    "dataId": 8246466,
    "id": 8246466,
    "data": {
      "dataId": 8246466,
      "text_1": "商品测试" // 会基于这个 text_1做文本回显
    }
  },
  "text_8": { // 销售单位，参考下拉字段
    "text": "件",
    "value": "1"
  },
  "num_3": 1, // 数量
  "num_1": 0, // 单价
  "num_4": 100, // 折扣
  "num_6": 0, // 售价
  "num_5": 0, // 销售小计
  "text_3": "" // 备注
}
```
关联产品标识通常为`array_*`
```JavaScript
const data = await sdk.getValue('array_1')
console.log(data)
// 为了节省页面空间下面的代码可以自行丢到 JSON 解析器里解析。
// [{"text_1":{"dataId":8246466,"refProductId":undefined,"id":8246466,"data":{"addTime":1610695813,"appId":257214,"corpid":"ding012d1a0065f8b378ffe93478753d9884","creatorId":"钱卿","data":{"addTime":1610695813,"departmentId":0,"creatorId":"钱卿","text_10":"12","ownerId":["04232447501201390"],"num_40":1,"text_11":["小谭的供应商"],"text_70":["22703"],"text_3":"","text_2":"CP.20210115000005.0","text_5":"12","text_4":"","text_7":"","array_29":"云叩学院","text_9":["207196"],"text_8":"件","num_11":0,"num_12":0,"num_13":"","file_1":["https://cdn3.xbongbong.com/xbbProPrd/ding012d1a0065f8b378ffe93478753d9884/04232447501201390/jpeg/16106957648533e03bf04c9b5b2b5ffa1e42f9a5cbd76.jpeg?1610695764848"],"text_1":"商品测试","file_2":[],"text_69":["测试仓库"],"date_20":"","updateTime":1610695813,"coUserId":["1"],"serialNo":"CP.20210115000005","array_30":"","num_5":0,"num_6":0,"num_7":0,"num_8":0,"num_1":"0.00","num_2":"0.00","num_3":8246465,"num_4":1},"dataId":8246466,"del":0,"departmentId":0,"flowStatus":0,"formId":2572652,"id":8246466,"menuId":2643261,"my_join_field":"saas_product","ownerId":["04232447501201390"],"serialNo":"CP.20210115000005","sourceData":{"addTime":1610695813,"departmentId":0,"creatorId":{"avatar":"/images/default.jpg","id":"04232447501201390","name":"钱卿"},"discount":1,"text_10":"{\"12\":\"12\"}","ownerId":"04232447501201390","num_40":1,"text_11":["小谭的供应商"],"text_70":["22703"],"text_2":"CP.20210115000005.0","text_5":1,"text_7":"","text_9":["207196"],"text_8":{"text":"件","value":"1"},"num_11":0,"enableMultiUnit":0,"num_12":0,"file_1":["https://cdn3.xbongbong.com/xbbProPrd/ding012d1a0065f8b378ffe93478753d9884/04232447501201390/jpeg/16106957648533e03bf04c9b5b2b5ffa1e42f9a5cbd76.jpeg?1610695764848"],"text_1":"商品测试","text_69":["测试仓库"],"updateTime":1610695813,"serialNo":"CP.20210115000005","num_5":0,"num_6":0,"num_7":0,"num_8":0,"num_1":0,"num_2":0,"num_3":8246465,"num_4":1},"tagData":{},"updateTime":1610695813,"text_10":"12","num_40":1,"text_11":["小谭的供应商"],"text_70":["22703"],"text_3":"","text_2":"CP.20210115000005.0","text_5":"12","text_4":"","text_7":"","array_29":"云叩学院","text_9":["207196"],"text_8":"件","num_11":0,"num_12":0,"num_13":"","file_1":["https://cdn3.xbongbong.com/xbbProPrd/ding012d1a0065f8b378ffe93478753d9884/04232447501201390/jpeg/16106957648533e03bf04c9b5b2b5ffa1e42f9a5cbd76.jpeg?1610695764848"],"text_1":"商品测试","file_2":[],"text_69":["测试仓库"],"date_20":"","coUserId":["1"],"array_30":"","num_5":0,"num_6":0,"num_7":0,"num_8":0,"num_1":"0.00","num_2":"0.00","num_3":8246465,"num_4":1},"sourceData":{"addTime":1610695813,"departmentId":0,"creatorId":{"avatar":"/images/default.jpg","id":"04232447501201390","name":"钱卿"},"discount":1,"text_10":"{\"12\":\"12\"}","ownerId":"04232447501201390","num_40":1,"text_11":["小谭的供应商"],"text_70":["22703"],"text_2":"CP.20210115000005.0","text_5":1,"text_7":"","text_9":["207196"],"text_8":{"text":"件","value":"1"},"num_11":0,"enableMultiUnit":0,"num_12":0,"file_1":["https://cdn3.xbongbong.com/xbbProPrd/ding012d1a0065f8b378ffe93478753d9884/04232447501201390/jpeg/16106957648533e03bf04c9b5b2b5ffa1e42f9a5cbd76.jpeg?1610695764848"],"text_1":"商品测试","text_69":["测试仓库"],"updateTime":1610695813,"serialNo":"CP.20210115000005","num_5":0,"num_6":0,"num_7":0,"num_8":0,"num_1":0,"num_2":0,"num_3":8246465,"num_4":1}},"text_8":{"text":"件","value":"1"},"num_3":1,"num_1":0,"num_4":100,"num_6":0,"num_5":0,"text_3":undefined,"num_13":undefined,"num_15":undefined,"num_16":undefined,"num_12":undefined,"num_18":undefined,"text_9":undefined,"subId":"d99ba213-f265-00ae-5b01-a87614a093a7","editFlag":1,"refProductId":undefined,"enableMultiUnit":0,"unitRate":undefined,"transformUnitRate":undefined,"price":undefined}]
sdk.setValue('array_4', [
  {
  "text_1": { // 产品名称 参考关联数据
    "dataId": 8246466,
    "id": 8246466,
    "data": {
      "dataId": 8246466,
      "text_1": "商品测试" // 会基于这个 text_1做文本回显
    }
  },
  "text_8": { // 销售单位，参考下拉字段
    "text": "件",
    "value": "1"
  },
  "num_3": 1, // 数量
  "num_1": 0, // 单价
  "num_4": 100, // 折扣
  "num_6": 0, // 售价
  "num_5": 0, // 销售小计
  "text_3": "" // 备注
}
])
```