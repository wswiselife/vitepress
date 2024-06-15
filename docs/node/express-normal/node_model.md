# 数据存储

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

安装mysql2

数据存储交互，包括查询、插入、更新和删除数据等操作，将数据保存到数据库中。

建表的方式有问题，待解决

```js
app.post('/user',(req,res)=>{
    // 前端发送的 post 请求数据存储在 req.body 中
    const {account,password} = req.body

    // 业务逻辑的处理-数据校验
    if(!account || !password){
        return res.send({
            code:400,
            message:'账号或密码不能为空。'
        })
    }

    // 将数据存储到数据库中
    // todo······

    res.send({
        code:200,
        message: {
            account,
            password
        }
    })
})

```