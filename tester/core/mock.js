module.exports = {
  // 列表页
  'https://app1013.eapps.dingtalkcloud.com/pro/v1/form/data/list?lang=zh_CN': (req) => {
    return req.respond({
      status: 200,
      contentType: 'application/json',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        "code": 1, "empty": false, "msg": "操作成功", "result": {
          "allowEditAfterFinished": 1,
          "bottomPermissions": [{"attr": "batchEdit", "needRemind": 0, "value": "编辑"}, {
            "attr": "batchPrint",
            "needRemind": 0,
            "type": "",
            "value": "打印"
          }],
          "businessType": 0,
          "explainMap": {
            "text_3": {
              "attr": "text_3",
              "attrName": "单行文本_1",
              "attrNameEn": "单行文本_1",
              "attrType": "text",
              "cancelFlag": 0,
              "columnWidth": 24,
              "dateType": "yyyy-MM-dd HH:mm",
              "defaultAttr": {
                "defaultList": [],
                "defaultType": "formula",
                "formulaInfo": {"formula": "NOW()", "labelMap": {}, "text": "NOW()"},
                "rely": {"displayField": "", "linkField": "", "subRelyFieldList": [], "targetField": ""}
              },
              "editable": 1,
              "editableAdvanceEnable": 0,
              "editableRule": {
                "dep": [],
                "relative": [],
                "role": [],
                "roleList": [],
                "type": 2,
                "user": [],
                "userList": []
              },
              "fieldId": "d5aae083-7ddf-1a2e-4c94-01399cdcf17c",
              "fieldType": 1,
              "fixed": false,
              "icon": "web-icon-field-text",
              "isOpen": 1,
              "isRedundant": 1,
              "isSingleRow": 0,
              "memo": "",
              "noEditable": 0,
              "noRepeat": 0,
              "recentTime": false,
              "redFlag": 0,
              "required": 0,
              "showEditable": 1,
              "sort": 3,
              "strictController": 0,
              "verifyMessage": "",
              "verifyRule": "",
              "visible": 1,
              "visibleScopeEnable": 0,
              "visibleScopeRule": {
                "dep": [],
                "relative": [],
                "role": [],
                "roleList": [],
                "type": 2,
                "user": [],
                "userList": []
              }
            },
            "text_2": {
              "attr": "text_2",
              "attrName": "下拉框",
              "attrNameEn": "下拉框",
              "attrType": "text",
              "cancelFlag": 0,
              "columnWidth": 24,
              "comboType": 0,
              "dateType": "yyyy-MM-dd HH:mm",
              "defaultAttr": {
                "rely": {
                  "displayField": "",
                  "linkField": "",
                  "subRelyFieldList": [],
                  "targetField": ""
                }
              },
              "editable": 1,
              "editableAdvanceEnable": 0,
              "editableRule": {
                "dep": [],
                "relative": [],
                "role": [],
                "roleList": [],
                "type": 2,
                "user": [],
                "userList": []
              },
              "fieldId": "12fdde71-df1e-7e3c-a3a6-8fffba1cdfc1",
              "fieldType": 3,
              "fixed": false,
              "icon": "web-icon-field-select-radio",
              "isDictionary": 0,
              "isOpen": 1,
              "isRedundant": 1,
              "isSingleRow": 0,
              "items": [{
                "checked": false,
                "isOther": 0,
                "text": "选项值1",
                "value": "3dfd766d-9b72-57c5-ecab-544767e0af09"
              }, {
                "checked": false,
                "isOther": 0,
                "text": "选项值2",
                "value": "95223a52-9045-0a0a-5bf2-eec4b2887056"
              }, {"checked": false, "isOther": 0, "text": "选项值3", "value": "6f072766-afcd-dc45-5dd6-904fd30517a3"}],
              "linkForm": {"displayField": ""},
              "memo": "",
              "noEditable": 0,
              "recentTime": false,
              "redFlag": 0,
              "required": 0,
              "showEditable": 1,
              "sort": 1,
              "strictController": 0,
              "visible": 1,
              "visibleScopeEnable": 0,
              "visibleScopeRule": {
                "dep": [],
                "relative": [],
                "role": [],
                "roleList": [],
                "type": 2,
                "user": [],
                "userList": []
              }
            },
            "ownerId": {
              "add": 1,
              "addAdvanceEnable": 1,
              "addRule": {
                "dep": [],
                "relative": [1, 3, 4],
                "role": [1, 2],
                "roleList": [],
                "type": 2,
                "user": [],
                "userList": []
              },
              "attr": "ownerId",
              "attrName": "负责人",
              "attrNameEn": "负责人",
              "attrType": "text",
              "cancelFlag": 0,
              "columnWidth": 24,
              "dateType": "yyyy-MM-dd HH:mm",
              "defaultAttr": {
                "defaultList": [],
                "defaultType": "custom",
                "rely": {"displayField": "", "linkField": "", "subRelyFieldList": [], "targetField": ""}
              },
              "editable": 1,
              "editableRule": {"dep": [], "relative": [], "role": [], "roleList": [], "user": [], "userList": []},
              "fieldId": "57694a25-689d-a287-3a2d-9dbbe6be39e5",
              "fieldType": 10017,
              "fixed": false,
              "icon": "web-icon-field-main-user",
              "isOpen": 1,
              "isRedundant": 1,
              "isSingleRow": 0,
              "memo": "",
              "noEditable": 0,
              "recentTime": false,
              "redFlag": 0,
              "remove": 1,
              "removeAdvanceEnable": 1,
              "removeRule": {
                "dep": [],
                "relative": [1, 3, 4],
                "role": [1, 2],
                "roleList": [],
                "type": 2,
                "user": [],
                "userList": []
              },
              "required": 0,
              "showAdd": 1,
              "showEditable": 0,
              "showRemove": 1,
              "sort": 2,
              "strictController": 0,
              "visible": 1,
              "visibleScopeEnable": 0,
              "visibleScopeRule": {
                "dep": [],
                "relative": [],
                "role": [],
                "roleList": [],
                "type": 2,
                "user": [],
                "userList": []
              }
            },
            "text_1": {
              "attr": "text_1",
              "attrName": "单行文本",
              "attrNameEn": "单行文本",
              "attrType": "text",
              "cancelFlag": 0,
              "columnWidth": 24,
              "dateType": "yyyy-MM-dd HH:mm",
              "defaultAttr": {
                "defaultList": [],
                "defaultType": "custom",
                "rely": {"displayField": "", "linkField": "", "subRelyFieldList": [], "targetField": ""}
              },
              "editHide": 0,
              "editable": 1,
              "editableAdvanceEnable": 0,
              "editableRule": {
                "dep": [],
                "relative": [],
                "role": [],
                "roleList": [],
                "type": 2,
                "user": [],
                "userList": []
              },
              "fieldId": "00708dcf-6583-6f91-8b46-015c005bfe2f",
              "fieldType": 1,
              "fixed": false,
              "icon": "web-icon-field-text",
              "isOpen": 1,
              "isRedundant": 1,
              "isSingleRow": 0,
              "memo": "",
              "noEditable": 0,
              "noRepeat": 0,
              "recentTime": false,
              "redFlag": 0,
              "required": 0,
              "showEditable": 1,
              "sort": 0,
              "strictController": 0,
              "verifyMessage": "",
              "verifyRule": "",
              "visible": 1,
              "visibleScopeEnable": 0,
              "visibleScopeRule": {
                "dep": [],
                "relative": [],
                "role": [],
                "roleList": [],
                "type": 2,
                "user": [],
                "userList": []
              }
            }
          },
          "form": {
            "addTime": 1635470792,
            "appId": 395929,
            "associationList": "[]",
            "businessRules": "0",
            "businessType": 0,
            "coOpPerms": "{\"delete\":0,\"export\":0,\"print\":0,\"read\":1,\"update\":0}",
            "coOpPermsExt": {"delete": 0, "export": 0, "print": 0, "read": 1, "update": 0},
            "corpid": "ding012d1a0065f8b378ffe93478753d9884",
            "creatorId": "263726600826608550",
            "customTitle": "[]",
            "del": 0,
            "disableFieldAssign": 2,
            "distributorMark": 0,
            "enable": 1,
            "fieldPosition": "left",
            "frontCache": 0,
            "hidden": 0,
            "id": 4522602,
            "isProcessForm": 0,
            "labels": "[]",
            "labelsList": [],
            "menuId": 4704932,
            "name": "bug测试",
            "nameEn": "bug测试",
            "openDistribution": 0,
            "priceAssociation": 0,
            "saasMark": 2,
            "sort": 0,
            "summary": "[]",
            "summaryList": [],
            "surcharge": "[]",
            "titleType": 1,
            "updateTime": 1637285605,
            "verifyRule": ""
          },
          "headList": [{
            "attr": "option_0",
            "attrName": "操作",
            "cancelFlag": 0,
            "dateType": "yyyy-MM-dd HH:mm",
            "defaultAttr": {},
            "editableRule": {"dep": [], "relative": [], "role": [], "roleList": [], "user": [], "userList": []},
            "fieldType": 30000,
            "fixed": false,
            "isOpen": 1,
            "isRedundant": 1,
            "isSingleRow": 0,
            "noEditable": 0,
            "recentTime": false,
            "redFlag": 0,
            "strictController": 0,
            "visible": 1
          }, {
            "attr": "text_1",
            "attrName": "单行文本",
            "attrNameEn": "单行文本",
            "attrType": "text",
            "cancelFlag": 0,
            "columnWidth": 24,
            "dateType": "yyyy-MM-dd HH:mm",
            "defaultAttr": {
              "defaultList": [],
              "defaultType": "custom",
              "rely": {"displayField": "", "linkField": "", "subRelyFieldList": [], "targetField": ""}
            },
            "editHide": 0,
            "editable": 1,
            "editableAdvanceEnable": 0,
            "editableRule": {
              "dep": [],
              "relative": [],
              "role": [],
              "roleList": [],
              "type": 2,
              "user": [],
              "userList": []
            },
            "fieldId": "00708dcf-6583-6f91-8b46-015c005bfe2f",
            "fieldType": 1,
            "fixed": false,
            "icon": "web-icon-field-text",
            "isOpen": 1,
            "isRedundant": 1,
            "isSingleRow": 0,
            "memo": "",
            "noEditable": 0,
            "noRepeat": 0,
            "recentTime": false,
            "redFlag": 0,
            "required": 0,
            "showEditable": 1,
            "sort": 0,
            "strictController": 0,
            "verifyMessage": "",
            "verifyRule": "",
            "visible": 1,
            "visibleScopeEnable": 0,
            "visibleScopeRule": {
              "dep": [],
              "relative": [],
              "role": [],
              "roleList": [],
              "type": 2,
              "user": [],
              "userList": []
            }
          }],
          "paasFormDataESList": [],
          "pageHelper": {
            "currentPageNum": 1,
            "hasLeft": false,
            "hasRight": false,
            "leftPageNums": [],
            "pageSize": 20,
            "pageTotal": 1,
            "rightPageNums": [],
            "rowsCount": 1
          },
          "topPermissions": [{"attr": "add", "needRemind": 0, "type": "", "value": "新建"}],
          "updateTime": 1637285605
        }, "success": true, "totalCount": 1
      })
    })
  },
  // 新建页
  'https://app1013.eapps.dingtalkcloud.com/pro/v1/form/data/add/get?lang=zh_CN': (req) => {
    return req.respond({
      status: 200,
      contentType: 'application/json',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        "code": 1,
        "empty": false,
        "msg": "操作成功",
        "result": {
          "draftExistVO": {"hasDraft": false},
          "explainList": [{
            "attr": "text_1",
            "attrName": "单行文本",
            "attrNameEn": "单行文本",
            "attrType": "text",
            "cancelFlag": 0,
            "columnWidth": 24,
            "dateType": "yyyy-MM-dd HH:mm",
            "defaultAttr": {
              "defaultList": [],
              "defaultType": "custom",
              "rely": {"displayField": "", "linkField": "", "subRelyFieldList": [], "targetField": ""}
            },
            "editHide": 0,
            "editable": 1,
            "editableAdvanceEnable": 0,
            "editableRule": {
              "dep": [],
              "relative": [],
              "role": [],
              "roleList": [],
              "type": 2,
              "user": [],
              "userList": []
            },
            "fieldId": "00708dcf-6583-6f91-8b46-015c005bfe2f",
            "fieldType": 1,
            "fixed": false,
            "icon": "web-icon-field-text",
            "isOpen": 1,
            "isRedundant": 1,
            "isSingleRow": 0,
            "memo": "",
            "noEditable": 0,
            "noRepeat": 0,
            "recentTime": false,
            "redFlag": 0,
            "required": 0,
            "showEditable": 1,
            "sort": 0,
            "strictController": 0,
            "verifyMessage": "",
            "verifyRule": "",
            "visible": 1,
            "visibleScopeEnable": 0,
            "visibleScopeRule": {
              "dep": [],
              "relative": [],
              "role": [],
              "roleList": [],
              "type": 2,
              "user": [],
              "userList": []
            }
          }],
          "isBusiness": 0,
          "isFineClue": 0,
          "lowCodeConfig": {
            "actionList": {
              "form": [{
                "code": 2,
                "list": [{
                  "actionType": 5,
                  "attr": "form",
                  "id": 5504,
                  "param": {"functionName": "check"},
                  "sort": 0,
                  "triggerTiming": 2,
                  "type": 1
                }],
                "name": "表单页面被展示时"
              }]
            },
            "customButtonList": [],
            "lowCodeJsFile": {
              "fileId": 3734,
              "release": {
                "attachIndex": "https://cloudcode-usercode.oss-cn-beijing.aliyuncs.com/xbbProPrd/ding012d1a0065f8b378ffe93478753d9884/395929/4522602_release.js",
                "ext": "text/javascript",
                "filename": "4522602_release.js",
                "size": 790
              },
              "unreleased": {
                "attachIndex": "https://cloudcode-usercode.oss-cn-beijing.aliyuncs.com/xbbProPrd/ding012d1a0065f8b378ffe93478753d9884/395929/4522602_dev.js",
                "ext": "text/javascript",
                "filename": "4522602_dev.js",
                "size": 790
              },
              "whetherToPublish": 1
            }
          },
          "paasFormEntity": {
            "addTime": 1635470792,
            "appId": 395929,
            "associationList": "[]",
            "businessRules": "0",
            "businessType": 0,
            "coOpPerms": "{\"delete\":0,\"export\":0,\"print\":0,\"read\":1,\"update\":0}",
            "coOpPermsExt": {"delete": 0, "export": 0, "print": 0, "read": 1, "update": 0},
            "corpid": "ding012d1a0065f8b378ffe93478753d9884",
            "creatorId": "263726600826608550",
            "customTitle": "[]",
            "del": 0,
            "disableFieldAssign": 2,
            "distributorMark": 0,
            "enable": 1,
            "fieldPosition": "left",
            "frontCache": 0,
            "hidden": 0,
            "id": 4522602,
            "isProcessForm": 0,
            "labels": "[]",
            "labelsList": [],
            "menuId": 4704932,
            "name": "测试",
            "nameEn": "测试",
            "openDistribution": 0,
            "priceAssociation": 0,
            "saasMark": 2,
            "sort": 0,
            "summary": "[]",
            "summaryList": [],
            "surcharge": "[]",
            "titleType": 1,
            "updateTime": 1637285605,
            "verifyRule": ""
          },
          "serialNo": ""
        },
        "success": true,
        "totalCount": 1
      })
    })
  },
  // 低代码配置
  'https://app1013.eapps.dingtalkcloud.com/pro/v1/lowCodeFile/config/get?lang=zh_CN': req => {
    return req.respond({
      status: 200,
      contentType: 'application/json',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        "code": 1,
        "empty": false,
        "msg": "操作成功",
        "result": {
          "lowCodeConfig": {
            "actionList": {
              "form": [{
                "code": 2,
                "list": [{
                  "actionType": 5,
                  "attr": "form",
                  "id": 5504,
                  "param": {"functionName": "check"},
                  "sort": 0,
                  "triggerTiming": 2,
                  "type": 1
                }],
                "name": "表单页面被展示时"
              }]
            },
            "customButtonList": [],
            "lowCodeJsFile": {
              "fileId": 3734,
              "release": {
                "attachIndex": "https://cloudcode-usercode.oss-cn-beijing.aliyuncs.com/xbbProPrd/ding012d1a0065f8b378ffe93478753d9884/395929/4522602_release.js?_t=1642057256577",
                "ext": "text/javascript",
                "filename": "4522602_release.js",
                "size": 790
              },
              "unreleased": {
                "attachIndex": "https://cloudcode-usercode.oss-cn-beijing.aliyuncs.com/xbbProPrd/ding012d1a0065f8b378ffe93478753d9884/395929/4522602_release.js?_t=1642057256577",
                "ext": "text/javascript",
                "filename": "4522602_dev.js",
                "size": 790
              },
              "whetherToPublish": 1
            }
          }
        },
        "success": true,
        "totalCount": 1
      })
    })
  }
}
