import { defineConfig } from 'vitepress'
const BASE_URL = '/dairyNotes/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Huey Dairy",
  description: "A Website for My Dairy and Notes",
  base: BASE_URL,
  head: [['link', { rel: 'icon', href: `${BASE_URL}favicon.ico` }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '非暴力沟通观感', link: '/Nonviolent-Communication/part1' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '非暴力沟通观感',
        collapsed: true,
        items: [
          { text: '第一章-由衷的给予', link: '/Nonviolent-Communication/part1' },
          { text: '第二章-疏离生命的语言', link: '/Nonviolent-Communication/part2' },
          { text: '第三章-不带评论的观察', link: '/Nonviolent-Communication/part3' },
          { text: '第四章-体会与表达感受', link: '/Nonviolent-Communication/part4' },
          { text: '第五章-为自己的感受负责', link: '/Nonviolent-Communication/part5' },
          { text: '第六章-提出请求，丰盈生命', link: '/Nonviolent-Communication/part6' },
          { text: '第七章-以同理心倾听', link: '/Nonviolent-Communication/part7' },
        ]
      },

      {
        text: 'JS高级知识',
        collapsed: true,
        items: [
          { text: '面试题1', link: '/javaScript/interview-js' }
        ]
      },
      {
        text: 'VS Code',
        collapsed: true,
        items: [
          { text: '公共格式化配置', link: '/formate' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yanbh7/dairyNotes.git' }
    ]
  }
})


