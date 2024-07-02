<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-06-20" />
</div>

## mock 配置

包安装

~~~
npm install vite-plugin-mock mockjs -D    // 线上不需要
npm install vite-plugin-mock mockjs       // 线上需要
~~~

官网 https://github.com/vbenjs/vite-plugin-mock

~~~json
export default defineConfig({

  base:'./',

  plugins: [

    vue(),

    // mock

    viteMockServe({

      // 以根目录为路径开始

      mockPath: 'mock',

      // 是否启用mock功能

      enable: true,

    }),

  ],

})
~~~

在根目录下配置 mock/index.ts

~~~ts
// test.ts

import { MockMethod, MockConfig } from "vite-plugin-mock";

export default [

    {

        url: "/api/get",

        method: "get",

        response: ({ query }) => {

            return {

                code: 0,

                data: {

                    name: "vben",

                },

            };

        },

    },

] as MockMethod[];
~~~

对mock数据进行抽离处理

~~~ts
import { MockMethod, MockConfig } from "vite-plugin-mock";

import pkg【Mock】 from "mockjs";

  

const { mock } = pkg【Mock】;

  
// 或者 Mock.mock({...})
var dataList = mock([

    {

        name: "lining",

        age: 18,

    },

]);

  

export default [

    {

        url: "/api/get",

        method: "get",

        response: ({ query }) => {

            return {

                code: 0,

                dataList,

            };

        },

    },

] as MockMethod[];
~~~

定义随机数据

~~~ts
import pkg from "mockjs";

  

const { mock, Random } = pkg;

  

var dataList = mock({

    "list|10": [

        {

            // 英文名

            name: () => Random.name(),

            // 两到三长度的中国人名

            cName: () => Random.cname(2, 3),

            // cword 是文字

            tName: "@cname",

            age: 18,

        },

    ],

});
~~~
