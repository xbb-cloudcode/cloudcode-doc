const puppeteer = require('puppeteer');
const Add = require('../scenes/add');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  const scene = new Add(page);
  await page.goto('https://pfweb.xbongbong.com/');
  const userInfo = {"userId":"263726600826608550","corpid":"ding012d1a0065f8b378ffe93478753d9884","xbbAccessToken":"30071c2d9476d9356553ceedf71b7eca87edc35e8e8696b56f79d373aeb64e89"}
  await page.evaluate(userInfo => {
    Object.assign(localStorage, userInfo);
  }, userInfo);
  await page.setRequestInterception(true);
  page.on('console', async e => {
    const args = e.args();
    const arrs = [];
    for(let i=0;i<args.length;i++){
      if(args[i]._remoteObject.type === 'string') {
        arrs.push(args[i]._remoteObject.value)
      }else {
        const data = await args[i].jsonValue();
        arrs.push(data)
      }
    }
    // 日志交由场景单独处理
    scene.processLog(arrs);
  })
  page.on('request', async req => {
    const mock = scene.getMock(req);
    if (mock) {
        await mock(req);
        return;
    }
    await req.continue();
  });
  await page.goto('https://pfweb.xbongbong.com/#/paas/list?subBusinessType=404&appId=395929&menuId=4704932&saasMark=2&distributorMark=0&timestamp=1641888112823');
  // 场景额外逻辑
  await scene.handler();
  // 关闭实例
  // await browser.close();
})();
