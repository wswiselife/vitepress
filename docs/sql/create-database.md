<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-05-30" />
</div>

安装mysql包

```shell
npm install mysql
```

To create a database in MySQL, use the "CREATE DATABASE" statement:

Create a database named "mydb":

```js
var mysql = require('mysql');  
  
var con = mysql.createConnection({  
  host: "localhost",  
  user: "_yourusername_",  
  password: "_yourpassword_"  
});  
  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
  con.query("**CREATE DATABASE mydb**", function (err, result) {  
    if (err) throw err;  
    console.log("Database created");  
  });  
});
```