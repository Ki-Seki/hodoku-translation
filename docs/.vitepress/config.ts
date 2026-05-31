import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'HoDoKu Techniques',
  description: 'Sudoku Solving Techniques — Bilingual EN/CN',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Techniques', link: '/techniques/' }
        ],
        sidebar: {
          '/techniques/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Overview', link: '/techniques/' },
                { text: 'Introduction', link: '/techniques/intro' },
              ]
            },
            {
              text: 'Solving Techniques',
              items: [
                { text: 'Singles', link: '/techniques/singles' },
                { text: 'Intersections', link: '/techniques/intersections' },
                { text: 'Hidden Subsets', link: '/techniques/hidden-subsets' },
                { text: 'Naked Subsets', link: '/techniques/naked-subsets' },
              ]
            },
            {
              text: 'Fish Techniques',
              items: [
                { text: 'Fish (General)', link: '/techniques/fish-general' },
                { text: 'Basic Fish', link: '/techniques/basic-fish' },
                { text: 'Finned/Sashimi Fish', link: '/techniques/finned-sashimi-fish' },
                { text: 'Complex Fish', link: '/techniques/complex-fish' },
              ]
            },
            {
              text: 'Advanced Techniques',
              items: [
                { text: 'Single Digit Patterns', link: '/techniques/single-digit-patterns' },
                { text: 'Uniqueness', link: '/techniques/uniqueness' },
                { text: 'Wings', link: '/techniques/wings' },
                { text: 'Miscellaneous', link: '/techniques/misc' },
                { text: 'Coloring', link: '/techniques/coloring' },
              ]
            },
            {
              text: 'Chains & Complex',
              items: [
                { text: 'Chains and Loops', link: '/techniques/chains-loops' },
                { text: 'ALS (Almost Locked Sets)', link: '/techniques/als' },
                { text: 'Last Resort', link: '/techniques/last-resort' },
              ]
            }
          ]
        }
      }
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      title: 'HoDoKu 解题技巧',
      description: '数独解题技巧 — 中英双语版',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '技巧', link: '/zh/techniques/' }
        ],
        sidebar: {
          '/zh/techniques/': [
            {
              text: '入门',
              items: [
                { text: '总览', link: '/zh/techniques/' },
                { text: '简介', link: '/zh/techniques/intro' },
              ]
            },
            {
              text: '解题技巧',
              items: [
                { text: '唯数 (Singles)', link: '/zh/techniques/singles' },
                { text: '交叉 (Intersections)', link: '/zh/techniques/intersections' },
                { text: '隐性数集 (Hidden Subsets)', link: '/zh/techniques/hidden-subsets' },
                { text: '显性数集 (Naked Subsets)', link: '/zh/techniques/naked-subsets' },
              ]
            },
            {
              text: '鱼 (Fish)',
              items: [
                { text: '鱼（概述）', link: '/zh/techniques/fish-general' },
                { text: '基础鱼', link: '/zh/techniques/basic-fish' },
                { text: '鳍鱼/刺身鱼', link: '/zh/techniques/finned-sashimi-fish' },
                { text: '复杂鱼', link: '/zh/techniques/complex-fish' },
              ]
            },
            {
              text: '高级技巧',
              items: [
                { text: '单数字模式', link: '/zh/techniques/single-digit-patterns' },
                { text: '唯一性', link: '/zh/techniques/uniqueness' },
                { text: '翼 (Wings)', link: '/zh/techniques/wings' },
                { text: '杂项', link: '/zh/techniques/misc' },
                { text: '着色法', link: '/zh/techniques/coloring' },
              ]
            },
            {
              text: '链与复杂技巧',
              items: [
                { text: '链与环', link: '/zh/techniques/chains-loops' },
                { text: 'ALS (准锁集)', link: '/zh/techniques/als' },
                { text: '最后手段', link: '/zh/techniques/last-resort' },
              ]
            }
          ]
        }
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    footer: {
      message: 'Content based on HoDoKu by Bernhard Hobiger. Licensed under GNU FDLv1.3.',
      copyright: 'Copyright © 2008-12 Bernhard Hobiger'
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3]
    }
  }
})
