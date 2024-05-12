# CICD

<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-05-10" />
</div>

前端部署文档
⦁	构建项目
1.	用编辑器打开文件
2.	安装依赖，在终端执行命令“npm install”
3.	在“.env.development”文件中修改“VITE_API_URL = 'http://192.168.1.83:84/jsy'”的地址，把“http://192.168.1.83:84”替换成上线的服务器地址
4.	在终端中执行命令“npm run dev”，打开浏览器确定服务器地址不发生错误并且可以完整运行项目
5.	回到编辑器中，在终端执行命令“npm run build”,生成dist目录
⦁	配置web服务器
SSH终端
这里使用的是putty，其他终端操作类似,可执行Linux命令即可

1.	Putty下载地址“https://www.putty.org”
 

1.	打开putty，并登录服务器
用户名
 
密码
 
这是成功登录服务器的效果
 

如果服务器中没有安装nginx，以下是安装nginx的教程

CentOS服务器
1.	首先，你需要启用EPEL仓库：“yum install epel-release”
2.	安装Nginx：“yum install nginx”
3.	启动Nginx：“systemctl start nginx”
4.	设置为开机启动：“systemctl enable nginx”

Ubuntu服务器
1.	更新软件包列表：“apt update”
2.	安装Nginx：“apt install nginx”
3.	启动Nginx：“systemctl start nginx”
4.	设置为开机启动：“systemctl enable nginx”

安装后的检查
安装完成后，你可以在浏览器中输入服务器的IP地址，看到Nginx的默认欢迎页面，这表示Nginx已经成功安装并正在运行。

FTP客户端
这里使用的是FileZillaClient，其他客户端操作类似,达到可以上传的目的即可

下载FileZillaClient，地址“https://www.filezilla.cn/download/client”
 

打开FileZillaClient，并登录服务器
 

填写要部署到的服务器的信息
 	
左侧的是本地的文件目录，右侧的是服务器的文件目录
将打包好的dist文件上传到服务器存放前端项目的位置，例如根目录下的frontend文件夹，具体的路径看②的路径“/frontend”
 
等待上传成功
 
建立配置文件，没有安装nginx的请先安装nginx，新部署项目需要建立配置文件，在相应路径下建立配置文件即可，如果是已经部署过的项目则根据需要考虑是否修改配置文件
 
配置nginx.conf文件，对应的端口号需要打开
 

···serve代码
  server {
        listen		8090  default_server;
        listen		[::]:8090  default_server;
        # 默认地址是 /
        location / {
            # 这里是设置访问的路径
                root  /frontend/;
            # 访问的文件
                index  index.html;
        }
}
···

重启nginx，回到SHH终端中重启nginx，命令“systemctl status nginx”，这应该显示Nginx服务的状态为active (running)。
 
