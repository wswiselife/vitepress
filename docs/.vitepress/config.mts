import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text:"前端",
        items:[
          {text:"html",link:"/front-end/html"},
          {text:"css",link:"/front-end/css"},
          {text:"javascript",link:"/front-end/javascript"},
        ]
      },
      {text:"工具",items:[
        {text:'git',link:'/tools/git'},
        {text:'linux',link:'/tools/linux'},
      ]}
    ],

    // sidebar: [
    //   {
    //     text: 'front-end',
    //     items: [
    //       { text: 'html', link: '/front-end/html' },
    //     ]
    //   },
    //   {
    //     items:[
    //       {text:"git",link:'/tools/git'},
    //       {text:"linux",link:'/tools/linux'}
    //     ]
    //   }
    // ],

    // 这里处理成对象
    sidebar:{
      '/front-end/':[
        {
          text:'Front-end',
          items:[
            {text:"html",link:"/front-end/html"},
            {text:"css",link:"/front-end/css"},
            {text:"javascript",link:"/front-end/javascript"},
          ]
        }
      ],

      '/tools/':[
        {
          text:'Tools',
          items:[
            {
              text:'git',link:'/tools/git',items:[
                {text:'git in work',link:'/tools/git-in-work'},
                {text:'git config',link:'/tools/git-config'}
              ]
            },
            {
              text:'linux',link:'/tools/linux'
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
