# connect tailwindcss

<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-07-03" />
</div>

[官网地址链接](https://tailwindcss.com/docs/guides/vite#react)

1. 如果还没项目，请先创建一个项目

```shell
# 创建 react 项目
npm create vite@latest my-project -- --template react

# 创建 vue3 项目
npm create vite@latest my-project -- --template vue

```

2. 进入项目，并安装依赖，以及初始化

```shell
cd my-project

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

3. 配置 tailwind.config.js 

```shell
# tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

4. 在入口文件中引入 @tailwind，通常可覆盖默认引入的全局 css 引入文件

```shell
@tailwind base;
@tailwind components;
@tailwind utilities;

```

5. 替换 App.vue/App.tsx 验证是否配置成功

- react
```jsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

- vue3
```vue
<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>
```

6. 改变 package.json 文件后需要重启项目