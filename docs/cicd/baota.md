<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-06-03" />
</div>
参考文章
[宝塔配置](https://blog.csdn.net/qq392465929/article/details/125040723)
[宝塔注册-内外网地址配置]()
[项目配置](https://juejin.cn/post/7234467007718015036)
### 1. 更新系统包-ubuntu

首先，确保您的系统已经更新：

```shell
sudo apt update -y 
sudo apt upgrade -y   // 升级软件包，时间比较久
```

安装宝塔
~~~
wget -O install.sh https://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh
~~~

登录宝塔外网地址

管理工具下载
nginx 1.24
mysql 5.7
Pure-Frpd 1.0.49
PHP  5.6
phpMyAdmin4.7【将本地数据库同步到服务器】

## 部署-centos

同步mysql到服务器
打开端口888，数据库可视化

