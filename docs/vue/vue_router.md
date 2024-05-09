# vue-router@4

## 安装路由

对于一个现有的使用 JavaScript 包管理器的项目，安装 Vue Router

```
npm install vue-router@4

```

## 创建路由实例

在 router 目录下新增 router.ts 文件

```js
import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from '../views/homeView/HomeView.vue'

const routes = [
    {path:"/",component:HomeView},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router

```

全局注册 router

```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/router'

createApp(App)
    .use(router)
    .mount('#app')

```

最后修改 App.vue 内容

```vue
<script setup lang="ts"></script>

<template>
    <div>hello router</div>
</template>

<style scoped></style>

```