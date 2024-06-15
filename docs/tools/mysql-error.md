
mysql安装错误

【Error: 98 (Address already in use)】

看起来MySQL服务启动时遇到了“Address already in use”的错误。这通常意味着在尝试启动MySQL时，端口或套接字已被其他进程占用。

你之前试图杀死MySQL进程以释放端口，但是在新的启动尝试中仍然遇到了相同的问题。这可能表明MySQL进程被重新启动，或者可能有其他应用程序在使用相同的端口。

你可以执行以下操作来解决这个问题：

1. **确定端口占用情况：**  
    运行以下命令来查看端口3306是否被其他进程占用：
    
    `sudo netstat -tuln | grep 3306`
    
    如果有输出，说明端口3306已被其他进程占用。
    
2. **找出占用端口的进程：**  
    如果端口被占用，可以使用以下命令找出占用端口的进程：
    
    `sudo lsof -i :3306`
    
    这将显示正在使用端口3306的进程的详细信息，包括进程ID（PID）。
    
3. **终止占用端口的进程：**  
    如果确定存在占用3306端口的进程，并且该进程不再需要，可以使用以下命令终止该进程：

    `sudo kill <PID>`
    
    其中，`<PID>`是占用3306端口的进程的PID。
    
4. **重新启动MySQL服务：**  
    终止占用端口的进程后，尝试重新启动MySQL服务：
    

    `sudo systemctl start mysql`
    
    如果一切顺利，MySQL服务应该能够正常启动。
5. 查看mysql状态

```shell
sudo systemctl status mysql
```
    

通过这些步骤，你应该能够解决MySQL服务启动时遇到的端口占用问题。
![查看启动是否成功](https://img-blog.csdnimg.cn/de5128041e7f41329d6ae54fb05a37e7.png)

