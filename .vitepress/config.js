
const pkg = require('../package.json')

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Pear Admin Naive',
  lang: 'zh-CN',
  description: '开箱即用的中后台系统模板',
  themeConfig: {
    repo: pkg.repository,
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',

    nav: [
      {text: '指引', link: '/guide/'},
      {text: '配置', link: '/config/'},
      {text: '组件', link: '/components/'},
      {text: 'composable', link: '/composable/'},
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          link: '/guide/',
        },
        {
          text: '介绍',
          link: '/guide/introduction'
        },
        {
          text: '使用',
          link: '/guide/install'
        }
      ],
      '/config/': [
        {
          text: '主题配置',
          link: '/config/theme'
        },
        {
          text: '项目基础配置',
          link: '/config/project'
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          children: [
            {
              text: 'Icon',
              link: '/components/base/icon'
            },
            {
              text: 'Form',
              link: '/components/base/form'
            },
            {
              text: 'Table',
              link: '/components/base/table'
            }
          ]
        }
      ],
      '/composable/': [
        {
          text: 'useApi',
          link: '/composable/useApi'
        }
      ]
    }
  }
}