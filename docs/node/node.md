# node

<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="工作" />
    <Badge type="tip" text="初始化" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-05-02" />
</div>

## 初始化

```
npm init

```

下载 express 包

```
npm install express

```

将 package.json 中的导入类型设置成 esm 类型

```js
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type":"module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2"
  }
}

```

新建 **app.js** 文件

```js
import express from 'express'

const app = express()
const port = 3000

app.listen(port,()=>{
    console.log('service is running in', port);
})

```

在终端启动项目

```js
node app.js

```

检测到文件更改时自动重新启动Node.js应用程序,无需手动重新启动服务器

```
npm install -g nodemon

```

将 node 命令替换为 nodemon 命令

```
nodemon app.js

```
 