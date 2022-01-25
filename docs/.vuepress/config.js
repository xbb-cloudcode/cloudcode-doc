/*
 * @Author: jinhui.li
 * @Date: 2020-11-18 10:12:51
 * @LastEditors: jinhui.li
 * @LastEditTime: 2021-04-26 11:15:13
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
      { text: '插件开发', link: '/plugin/' },
      { text: '低代码', link: '/lowcode/' },
      { text: '云开发', link: '/cloud-dev/' },
      { text: '工具', link: '/devtool/' },
    ],
    lastUpdated: '上次更新时间',
    sidebar: {
      '/guide/': [
        '',
        'plugin_introduce',
        'lowcode_introduce'
      ],
      '/plugin/': [
        '',
        'guide',
        'use_sdk',
        'api_list',
        'FAQ'
      ],
      '/cloud-dev/': [
        '',
        'func_environment',
        'first_function'
      ],
      '/lowcode/': [
        '',
        'quick_start',
        'api_list',
        'field_list',
        'FAQ'
      ],
    }
  }
}
