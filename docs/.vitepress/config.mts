import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "我的编程小屋",
    description: "一步一脚印，加油！",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "首页", link: "/" },
            {
                text: "编程基础",
                items: [
                    {
                        items: [
                            {
                                text: "计算机网络",
                                link: "/code-basics/computer_network",
                            },
                        ],
                    },
                    {
                        items: [
                            {
                                text: "操作系统",
                                link: "/code-basics/operating_system",
                            },
                        ],
                    },
                    {
                        items: [
                            {
                                text: "设计模式",
                                link: "/code-basics/design_patterns",
                            },
                        ],
                    },
                    {
                        items: [
                            {
                                text: "数据结构与算法",
                                link: "/data-structures-and-algorithm/data-structures/",
                            },
                        ],
                    },
                ],
            },
            {
                text: "UI",
                items: [{ text: "Figma", link: "/design/figma" }],
            },
            {
                text: "前端",
                items: [
                    { text: "html", link: "/html/html" },
                    { text: "css", link: "/css/css" },
                    {
                        text: "javascript",
                        link: "/javascript/javascript",
                    },
                    { text: "vue", link: "/vue/vue_cli" },
                    { text: "react", link: "/react/react_cli" },
                    {
                        items: [
                            { text: "vite 配置", link: "/front-end/vite/" },
                        ],
                    },
                ],
            },
            {
                text: "后端",
                items: [
                    { text: "node", link: "/node/" },
                    { text: "中间件", link: "/middlewares/redis" },
                    { text: "sql", link: "/sql/env_config" },
                    { text: "Linux", link: "/node/linux" },
                ],
            },
            {
                text: "项目",
                items: [
                    {
                        text: "React",
                        items: [
                            {
                                text: "airbnb-next",
                                link: "/project/airbnb-next/",
                            },
                            { text: "x-next", link: "/project/x-next/setp" },
                        ],
                    },

                    {
                        text: "Vue",
                        items: [
                            {
                                text: "douyin-vue3",
                                link: "/project/douyin-vue3/douyin_todo",
                            },
                        ],
                    },
                    {
                        text: "Node",
                        items: [
                            {
                                text: "douyin-node",
                                link: "/project/douyin-node/douyin-node",
                            },
                        ],
                    },
                ],
            },
            {
                text: "CICD",
                items: [
                    { text: "服务器", link: "/cicd/cicd" },
                    { text: "vercel", link: "/cicd/vercel_deploy_frontend" },
                    { text: "宝塔", link: "/cicd/baota" },
                ],
            },

            {
                text: "工具",
                items: [{ text: "git", link: "/tools/git" }],
            },
            {
                text: "其他",
                items: [
                    { text: "markdown", link: "/others/markdown" },
                    { text: "blog template", link: "/others/blog_template" },
                ],
            },
        ],
        // 这里处理成对象
        sidebar: {
            "/html/": [{ text: "html", link: "/html/html" }],

            "/css/": [
                {
                    text: "CSS",
                    items: [
                        { text: "BEM", link: "/css/css_BEM" },
                        { text: "Project", link: "/css/css_project" },
                    ],
                },
                {
                    text: "tailwindcss",
                    items: [
                        {
                            text: "安装 tailwind",
                            link: "/css/connect_tailwindcss",
                        },
                        { text: "Project", link: "/front-end/css/css_project" },
                    ],
                },
            ],

            "/vue/": [
                {
                    text: "Vue frame",
                    items: [
                        {
                            text: "vue 脚手架",
                            items: [
                                { text: "vue cli", link: "/vue/vue_cli" },
                                { text: "vite", link: "/vue/vue_vite" },
                            ],
                        },
                    ],
                },
            ],

            "/react/": [
                {
                    text: "React frame",
                    items: [
                        {
                            text: "react 脚手架",
                            items: [
                                { text: "react cli", link: "/react/react_cli" },
                                { text: "vite", link: "/react/react_vite" },
                            ],
                        },
                    ],
                },
            ],

            "/sql/": [
                {
                    text: "SQL",
                    items: [
                        { text: "environment config", link: "/sql/env_config" },
                        { text: "sql learning", link: "/sql/sql" },
                    ],
                },
            ],
            "/project/": [
                { text: "airbnb-next", link: "/project/airbnb-next/" },
                { text: "x-next", link: "/project/x-next/setp" },
                {
                    text: "douyin-vue3",
                    items: [
                        {
                            text: "step",
                            link: "/project/douyin-vue3/step",
                        },
                        {
                            text: "todo",
                            link: "/project/douyin-vue3/douyin_todo",
                        },
                        {
                            text: "project",
                            link: "/project/douyin-vue3/vue_project_step",
                        },
                    ],
                },
                {
                    text: "douyin-node",
                    link: "/project/douyin-node/douyin-node",
                },
            ],

            "/node/": [
                {
                    text: "node",
                    items: [
                        {
                            text: "node 基础",
                            items: [
                                { text: "node", link: "/node/node" },
                                {
                                    text: "node router",
                                    link: "/node/node_router",
                                },
                                {
                                    text: "node service",
                                    link: "/node/node_service",
                                },
                                {
                                    text: "node model",
                                    link: "/node/node_model",
                                },
                                {
                                    text: "node module",
                                    link: "/node/node_module",
                                },
                            ],
                        },
                        {
                            text: "其他",
                            items: [
                                { text: "cros", link: "/node/cros" },
                                {
                                    text: "任意列更新",
                                    link: "/node/updateColumnByCloumnCondition",
                                },
                            ],
                        },
                    ],
                },
            ],

            "/tools/": [
                {
                    text: "Tools",
                    items: [
                        {
                            text: "git",
                            link: "/tools/git",
                            items: [
                                {
                                    text: "git connect github",
                                    link: "/tools/git-connect-github",
                                },
                                {
                                    text: "code push to github",
                                    link: "/tools/code-push-to-github",
                                },
                            ],
                        },
                    ],
                },
            ],

            "/others": [
                {
                    text: "Others",
                    items: [
                        { text: "markdown", link: "/others/markdown" },
                        {
                            text: "blog template",
                            link: "/others/blog_template",
                        },
                        { text: "vscode 配置", link: "/others/vscode_config" },
                        { text: "vscode 插件", link: "/others/vscode_plugin" },
                    ],
                },
            ],
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/wswiselife" },
        ],
    },
});
