
# vite 初始化 react 项目，引入tailwind

<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2025-05-09" />
</div>

## 一、前期准备

- **系统环境**: window 
- **node 版本**: 18.19.1
- **npm 版本**: 10.2.4
- **tailwind 版本**: ^4.1.5

## 二、初始化 react 项目

参考连接: [从零开始构建 React 应用](https://zh-hans.react.dev/learn/build-a-react-app-from-scratch)

```terminal
npm create vite@latest my-app-name -- --template react
```

```terminal
cd my-app-name
npm install
```

## 三、初始化 tailwind 

参考连接: [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)

1. 安装 tailwind
```termainal
npm install tailwindcss @tailwindcss/vite
```

2. 在 *vite.config.js* 中引入 tailwindcss 

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),tailwindcss()]
})
```

3. 在全局 css 文件中注册 tailwind

```css
/* index.css */
@import "tailwindcss";
```

4. 在项目入口文件 *main.tsx* 中引入 *index.css* 文件

```js
// main.tsx
import './index.css'
```

5. 测试 tailwind 是否生效,替换 *App.tsx* 文件

```tsx
// App.tsx
export default function App() {
    return (
        <h1 className="w-screen h-screen flex justify-center items-center text-pink-500 underline text-6xl">
            Hello world!
        </h1>
    );
}
```

6. 运行项目
```termainal
npm run dev
```





