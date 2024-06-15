<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-06-02" />
</div>

# linux 学习

ubuntu部署node项目

### 1. 更新系统包

首先，确保您的系统已经更新：

```shell
sudo apt update -y 
sudo apt upgrade -y   // 升级软件包，时间比较久
```

### 2.1 安装Node.js和npm

安装Node.js和npm：

```shell
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

验证安装：

```shell
node -v    // 
npm -v
```

### 2.2 安装MySQL

安装MySQL：

```shell
sudo apt install -y mysql-server
mysql --version // 查看版本
```

启动MySQL服务并设置开机自启：

```shell
sudo systemctl start mysql 
sudo systemctl enable mysql
```

你可以使用以下命令来检查MySQL是否正在运行【启动需要一定时间，请等待】
![查看启动是否成功](https://img-blog.csdnimg.cn/de5128041e7f41329d6ae54fb05a37e7.png)
```shell
sudo systemctl status mysql
```

进入mysql并修改密码

```shell
# 登录mysql，在默认安装时如果没有让我们设置密码，则直接回车就能登录成功。 
mysql -uroot -p
# 设置密码 mysql8.0 
ALTER USER 'root'@'localhost' IDENTIFIED WITH  mysql_native_password BY '新密码';
# 设置密码 mysql5.7 
SET PASSWORD FOR 'root'@'localhost' = 'admin';
# 刷新缓存 
flush privileges;

# 原因是8.0.11版本之后移除了grant 语句添加用户的功能，也就是说grant…只能适用于已存在的账户，不能通过 grant… 来添加账号了。

#这个命令的作用是授予 root 用户对所有数据库的所有权限，并且允许 root 用户从任何主机连接到 MySQL 服务器。配置远程访问
grant all privileges on *.* to root@"%" identified by "密码";
# 退出mysql
exit
```

1. **编辑 MySQL 配置文件**：找到 MySQL 的配置文件，通常位于 `/etc/mysql/mysql.conf.d/mysqld.cnf` 或 `/etc/mysql/my.cnf`。确保 `bind-address` 设置为服务器的 IP 地址，而不是 `localhost`。如果需要允许所有远程主机连接，可以将其设置为 `0.0.0.0`。
    `bind-address = 0.0.0.0`
    
2. **重启 MySQL 服务**：在修改配置文件后，重启 MySQL 服务以使更改生效。
    
    `sudo systemctl restart mysql`

登录MySQL并创建数据库和用户：

```shell
sudo mysql -u root -p
```

在MySQL提示符下，执行以下命令创建数据库和用户：

```shell
CREATE DATABASE expressdb; 
CREATE USER 'expressuser'@'localhost' IDENTIFIED BY 'password'; 
GRANT ALL PRIVILEGES ON expressdb.* TO 'expressuser'@'localhost'; 
FLUSH PRIVILEGES; 
EXIT;
```


### 6. 配置防火墙

如果您希望从外部访问您的应用，您需要打开端口3000：
```shell

```


```shell

```

```shell

```

```shell

```

```shell

```

```shell

```

```shell

```