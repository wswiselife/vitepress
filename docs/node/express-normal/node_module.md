# 模块化

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

为了方便管理，将项目拆分为多个模块，每个模块负责实现一个特定的功能或提供一个相关的功能集合。这有助于提高代码的可读性和可维护性，并允许团队成员分别负责不同模块的开发和维护。确保每个模块只负责一个功能或领域。这有助于减少模块之间的耦合度，并使其更易于理解和测试。

将上面的路由模块（router）、业务模块（service）、数据（库）操作模块（model）抽离成三大模块，进行组织和管理Node.js项目。

```
|-- nodeProject
    |-- node_modules
    |-- app.js
    |-- router
    |-- service
    |-- model

```

为了更好的组织项目结构，我们还可以将上面三者细分，路由模块只充当路由url的处理，业务模块可细分为中间件（middlewares）、统一错误处理（error）、表单验证（validate）和工具（util）等，而数据（库）操作模块，可分为与mysql等存储数据的连接数据库（db）和操作数据crud两部分。

但这只适用与开发环境，当需要上线到生产环境时，我们还需要配置很多项目，所以可以新增一个配置文件（config）统一处理需要配置的内容，而不需要每一个配置都要在代码中寻找。

```
|-- nodeProject
    |-- config
    |-- db
    |   |-- mysql.js
    |-- error
    |-- middlewares
    |   |-- jwt.js
    |-- model
    |-- node_modules
    |-- router
    |-- service
    |-- utils
    |-- vaildates
    |-- app.js
    |-- package-lock.json
    |-- package.json

```