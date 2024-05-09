import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的编程小屋",
  description: "一步一脚印，加油！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text:"编程基础",
        items:[
          {text:'',items:[{text:"计算机网络",link:"/code-basics/computer_network"}]}, 
          {text:"",items:[{text:"操作系统",link:"/code-basics/operating_system"}]},
          {text:"",items:[{text:"设计模式",link:"/code-basics/design_patterns"}]},
        ]
      },
      {
        text:"前端",
        items:[
          {text:'',items:[{text:"html",link:"/front-end/html"},{text:"css",link:"/front-end/css"},{text:"javascript",link:"/front-end/javascript"}, ]},
          {text:"vue",link:"/vue/vue_cli"},
          {text:"vue project",link:"/vue-project/vue_project_step"},
          {text:'react', link:"/react/react_cli"}
        ]
      },
      {
        text:"后端",
        items:[
          {text:"sql",link:"/sql/env_config"},
          {text:"node",link:"/node/node"}
        ]
      },
      {
        text:"算法",
        items:[
          {text:"数据结构",link:"/data-structures-and-algorithm/data-structures/"},
          {text:"",items:[{text:"查找",link:"/data-structures-and-algorithm/find/"},{text:"排序",link:"/data-structures-and-algorithm/sort/"}]},
          {text:"算法",link:"/data-structures-and-algorithm/algorithm/"}
        ]
      },
      {
        text:"CICD",
        link:"/cicd/cicd"
      },
      {
        text:"工具",
        items:[
          {text:'git',link:'/tools/git'},
          {text:'linux',link:'/tools/linux'},
      ]},
      {
        text:"其他",
        items:[
          {text:'markdown',link:'/others/markdown'},
          {text:"blog template",link:"/others/blog_template"}
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
          text:'前端基础',
          items:[
            {text:"html",link:"/front-end/html"},
            {text:"css",link:"/front-end/css",items:[
              {text:"common tailwindcss",link:"/front-end/common_tailwindcss"},
              {text:"vue connect tailwindcss",link:"/front-end/vue_connect_tailwindcss"},
            ]},
            {text:"javascript",link:"/front-end/javascript"},
          ]
        }
      ],

      '/vue/':[
        {
          text:'Vue frame',
          items:[
            {
              text:"vue 脚手架",
              items:[
                {text:"vue cli",link:"/vue/vue_cli"},
                {text:"vite",link:"/vue/vue_vite"},
              ]
            },
          ]
        }
      ],
      '/vue-project/':[
        {
          text:"通用项目处理",
          items:[
            {
              text:'',
              items:[
                {text:"项目初始化",link:"/vue-project/vue_project_step"}
              ]
            }
          ]
        },
        {
          text:"抖音项目",
          items:[
            {
              text:'',
              items:[
                {text:"步骤",link:"/vue-project/douyin_step"}
              ]
            }
          ]
        },
        {
          text:"抖音项目-todo记录",
          items:[
            {
              text:'',
              items:[
                {text:"步骤",link:"/vue-project/douyin_todo"}
              ]
            }
          ]
        },
      ],
  

      '/react/':[
        {
          text:"React frame",
          items:[
            {
              text:'react 脚手架',
              items:[
                {text:"react cli",link:"/react/react_cli"},
                {text:"vite",link:"/react/react_vite"},
              ]
            },
          ]
        },
        
      ],

      '/sql/':[
       {
          text:"SQL",
          items:[
            {text:"environment config",link:'/sql/env_config'},
            {text:"sql learning",link:'/sql/sql'},
          ]
       }

      ],

      '/node/':[
        {text:"node",items:[
          {
            text:'node 基础',
            items:[{text:"node",link:"/node/node"},{text:"node router",link:"/node/node_router"},{text:"node service",link:"/node/node_service"},
                  {text:"node model",link:"/node/node_model"},{text:"node module",link:"/node/node_module"},
            ]
          },
          {
            text:"其他",
            items:[{text:"cros",link:"/node/cros"}]
          }
        ]}
      ],

      '/tools/':[
        {
          text:'Tools',
          items:[
            {
              text:'git',link:'/tools/git',items:[
                {text:'git connect github',link:'/tools/git-connect-github'},
                {text:'code push to github',link:'/tools/code-push-to-github'},
              ]
            },
            {
              text:'linux',link:'/tools/linux'
            }
          ]
        }
      ],

      '/others':[
        {
          text:"Others",
          items:[
            { text:'markdown',link:"/others/markdown"},
            {text:"blog template",link:"/others/blog_template"}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
