# 添加路由

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

路由会将特定的HTTP请求方法（例如GET、POST、PUT、DELETE等）映射到特定的处理函数，从而实现对请求的响应。

```js
import express from 'express'

const app = express()
const port = 3000

app.get('/user',(req,res)=>{
    res.send({
        code:200,
        message:"successfully!"
    })
})

app.listen(port,()=>{
    console.log('service is running in', port);
})

```

打开本地 3000 端口就可以看到返回的数据

需要返回支持 json 格式的数据，需要使用 express.json( )
```js
import express from 'express'

const app = express()
const port = 3000

app.get('/user',(req,res)=>{
    // 前端发送的 get 请求数据存储在 req.query 中
    const {userId} = req.query
    res.send({
        code:200,
        message: userId
    })
})

// 因为 express 无法直接解析 json ，所以要调用 json 处理函数
app.use(express.json())
app.post('/user',(req,res)=>{
    // 前端发送的 post 请求数据存储在 req.body 中
    const {account,password} = req.body
    res.send({
        code:200,
        message: {
            account,
            password
        }
    })
})
  
app.listen(port,()=>{
    console.log('service is running in', port);
})

```