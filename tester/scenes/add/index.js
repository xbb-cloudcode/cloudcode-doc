const mock = require('./mock');
const fs = require('fs');
const path = require('path');

module.exports = class Add {
  constructor(page) {
    this.page = page;
  }
  getMock(req) {
    const {_url, _resourceType, _method, _postData} = req;
    if(_resourceType === 'xhr' && mock[_url]) {
      return mock[_url];
    }else if(_resourceType === 'fetch' && Object.keys(mock).find(key => _url.startsWith(key))) {
      return mock[Object.keys(mock).find(key => _url.startsWith(key))];
    }
  }
  processLog(args) {
    if (args[0] === 'res:') { // 以 res: 开头的行，记录到json文件中
      fs.writeFileSync(path.join(__dirname, '../../../codes/lowcode/setValueResult.json'), JSON.stringify(args[1], null, 2));
    }
  }
  async handler() {
    await this.page.waitForSelector('.children-head > .head-right > .options > #add > span')
    await this.page.click('.children-head > .head-right > .options > #add > span')
  }
}
