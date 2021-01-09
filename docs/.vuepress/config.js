/*
 * @Author: jinhui.li
 * @Date: 2020-11-18 10:12:51
 * @LastEditors: jinhui.li
 * @LastEditTime: 2021-01-09 14:01:08
 * @Description: 
 */
module.exports = {
  base: '/cloudcode-doc/',
  title: '云叩',
  description: '低代码平台',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '云开发', link: '/cloud-dev/' },
    ],
    lastUpdated: '上次更新时间',
    sidebar: {
      '/guide/': [
        '',
        'quick_start',
        'host_environment',
        'use_sdk',
      ],
      '/cloud-dev/': [
        '',
        'first_function'
      ],
    }
  }
}