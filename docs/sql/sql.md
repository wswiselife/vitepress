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


### Node.js MySQL

[Node.js 操作 mysql详解](https://www.w3schools.com/nodejs/nodejs_mysql.asp)

Node.js MySQL Insert Into

```shell
var mysql = require('mysql');  
  
var con = mysql.createConnection({  
  host: "localhost",  
  user: "_yourusername_",  
  password: "_yourpassword_",  
  database: "mydb"  
});  
  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {  
    if (err) throw err;  
    console.log("1 record inserted");  
  });  
});
```

插入操作的返回值用`result.affectedRows` 判断，如果为1，则插入一条数据成功，反之失败
```js
insert into name (username) values (?)
```

删除操作（直接删数据，而不是改变状态时）和插入操作一样

修改操作

查询get操作如果查询成功，会直接返回数组
- 当我们需要数据时，可以直接返回数组
- 当我们需要数据的个数时，我们可以返回数组的长度`arr.length`