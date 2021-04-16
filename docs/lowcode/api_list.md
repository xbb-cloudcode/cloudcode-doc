# API列表

> 默认容器中已经注入SDK，可直接通过sdk.xxx调用低代码的sdk。xbb.xxx可调用云叩的sdk

## getValue(fieldId)

> 获取表单字段值

**参数**

fieldId 字段唯一id

**返回值**

**Promise value  字段值**

- setValue(fieldId, value)

> 设置表单字段值

**参数**

fieldId 字段唯一id

value 字段值

**返回值**

**Promise**



## setSubformValue(params)

> 设置子表单字段值

**参数**

Object params

| 属性    | 类型            | 默认值 | 必填 | 说明               |
| ------- | --------------- | ------ | ---- | ------------------ |
| formId  | String          | 无     | 是   | 表单id             |
| row     | Number          | 无     | 是   | 设置第几条数据的值 |
| fieldId | String          | 无     | 是   | 子表单字段的唯一id |
| value   | Strig \| Number | 无     | 是   | 设置的值           |

**返回值**

**Promise**



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



## addSubformRow(formId)

> 新建一条子表单数据

**参数**

formId 子表单唯一id

**返回值**

**Promise**



## disableField(fieldId)

> 设置字段为不可编辑

**参数**

fieldId 字段唯一id

**返回值**

**Promise**



## enableField(fieldId)

> 设置字段为可编辑

**参数**

fieldId 字段唯一id

**返回值**

**Promise**



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
