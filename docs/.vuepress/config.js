/*
 * @Author: jinhui.li
 * @Date: 2020-11-18 10:12:51
 * @LastEditors: jinhui.li
 * @LastEditTime: 2021-04-13 21:49:28
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
      { text: '服务端', link: '/server-side/' },
      { text: '云开发', link: '/cloud-dev/' },
      { text: '低代码', link: '/lowcode/' },
    ],
    lastUpdated: '上次更新时间',
    sidebar: {
      '/guide/': [
        '',
        'quick_start',
        'host_environment',
        'use_sdk',
        'use_platform'
      ],
      '/server-side/': [
        ''
      ],
      '/cloud-dev/': [
        '',
        'first_function',
        'func_environment',
        'use_sdk'
      ],
      '/lowcode/': [
        ''
      ],
    }
  }
}