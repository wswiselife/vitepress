# 根据不同的列修改数据表中的列值

这样可以根据前端传递不同的列的信息，但接口都是同一个，减少前端的接口数量

普通的写法，每一个列都需要有值,此时不允许有某一个列存在为空（undefined）的情况

```js
const updateModel = ({avatar,nickname,signature,gender,birthday,country,
                    province,city,school,unique_id,cover_url,ip_location},user_id)=>{
    return new Promise((resolve,reject)=>{
        const sql = `update user set avatar = '${avatar}',nickname = '${nickname}',signature = '${signature}',gender = ${gender},
                    birthday = '${birthday}',country = '${country}',province = '${province}',city = '${city}',school = '${school}',
                    unique_id = '${unique_id}',cover_url = '${cover_url}',ip_location = '${ip_location}' where auth_id = ${user_id}`
        db.query(sql,(error,result)=>{
                if(error){
                    reject(error)
                }
                resolve(result)

            })
    })
}
```

你可以使用类似SQL中的CASE语句的逻辑来处理JavaScript对象中的属性。你可以在函数中使用条件语句来动态构建SQL语句

```js
const updateModel = (userData, user_id) => {
    return new Promise((resolve, reject) => {
        let sql = "UPDATE user SET";
        let updates = [];
        // 构建更新语句
        if (userData.avatar !== undefined) updates.push(`avatar = '${userData.avatar}'`);
        if (userData.nickname !== undefined) updates.push(`nickname = '${userData.nickname}'`);
        if (userData.signature !== undefined) updates.push(`signature = '${userData.signature}'`);
        if (userData.gender !== undefined) updates.push(`gender = ${userData.gender}`);
        if (userData.birthday !== undefined) updates.push(`birthday = '${userData.birthday}'`);
        if (userData.country !== undefined) updates.push(`country = '${userData.country}'`);
        if (userData.province !== undefined) updates.push(`province = '${userData.province}'`);
        if (userData.city !== undefined) updates.push(`city = '${userData.city}'`);
        if (userData.school !== undefined) updates.push(`school = '${userData.school}'`);
        if (userData.unique_id !== undefined) updates.push(`unique_id = '${userData.unique_id}'`);
        if (userData.cover_url !== undefined) updates.push(`cover_url = '${userData.cover_url}'`);
        if (userData.ip_location !== undefined) updates.push(`ip_location = '${userData.ip_location}'`);

        if (updates.length === 0) {
            reject(new Error("No fields provided to update"));
            return;
        }

        sql += " " + updates.join(", ") + ` WHERE auth_id = ${user_id}`;
        db.query(sql, (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
};
```

实际上我们可以利用数据库提供的CASE方式

```js
const updateModel = (userData, user_id) => {
    return new Promise((resolve, reject) => {
        let sql = "UPDATE user SET ";
        let updates = [];

        // 构建更新语句
        for (const key in userData) {
            if (userData.hasOwnProperty(key) && userData[key] !== undefined) {
                switch (key) {
                    case 'avatar':
                    case 'nickname':
                    case 'signature':
                    case 'gender':
                    case 'birthday':
                    case 'country':
                    case 'province':
                    case 'city':
                    case 'school':
                    case 'unique_id':
                    case 'cover_url':
                    case 'ip_location':
                        updates.push(`${key} = '${userData[key]}'`);
                        break;
                    default:
                        // 忽略不支持更新的属性
                        break;
                }
            }
        }

        if (updates.length === 0) {
            reject(new Error("No fields provided to update"));
            return;
        }

        sql += updates.join(", ") + ` WHERE auth_id = ${user_id}`;
        db.query(sql, (error, result) => {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
};

```
