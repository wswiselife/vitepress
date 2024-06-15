<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="工作" />
    <Badge type="tip" text="初始化" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-06-12" />
</div>

### 检查MySQL服务器状态

确保MySQL服务器正在运行，并且可以通过终端连接：

`sudo systemctl status mysqld`

如果服务器未运行，启动它：

`sudo systemctl start mysqld`

### 检查网络配置和防火墙【重点-服务器安全组要打开，宝塔有配置也要打开3306】

确保防火墙没有阻止VS Code访问MySQL服务器。如果MySQL在远程服务器上运行，确保在服务器防火墙中开放了3306端口。

### 配置MySQL用户权限

确保`root`用户有足够的权限来访问数据库，并允许从外部主机连接。如果需要从远程连接，可以执行以下SQL命令：

`GRANT ALL PRIVILEGES ON node_20240424.* TO 'root'@'%' IDENTIFIED BY 'your_password【更换】'; FLUSH PRIVILEGES;`

### 重启mysql
exit
sudo service mysql restart