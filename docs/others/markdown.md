# Python编程基础 学习笔记

<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2025-04-14" />
</div>

## 目录

- [一、概述](#一概述)
- [二、基本概念与定义](#二基本概念与定义)
- [三、核心知识点](#三核心知识点)
- [四、代码示例](#四代码示例)
- [五、拓展知识与思考](#五拓展知识与思考)
- [六、小结与反思](#六小结与反思)

## 一、概述

本节主要介绍Python编程的基本知识，包括语言特点、语法结构、常用数据类型及基础操作。

## 二、基本概念与定义

### 1. Python语言特点

- **解释型语言**：无需编译，直接执行。
- **动态类型**：变量类型随时可更改。
- **面向对象**：支持封装、继承、多态。

### 2. 变量与类型

- **变量**：存储数据的容器。
- **数据类型**：
  - 数值型：`int`、`float`
  - 字符串：`str`
  - 布尔型：`bool`
  - 集合型：`list`、`tuple`、`dict`、`set`

## 三、核心知识点

### 1. 基础语法

- 赋值语句：`变量名 = 值`
- 条件判断：`if-elif-else`
- 循环结构：`for`、`while`

### 2. 函数定义与调用

```python
def function_name(参数1, 参数2, ...):
    # 函数体
    return 返回值
```

### 3. 列表推导式

- 简洁地创建列表

```python
squares = [x**2 for x in range(10)]
```

## 四、代码示例

### 简单的计算器函数

```python
def calculator(a, b, operator):
    if operator == '+':
        return a + b
    elif operator == '-':
        return a - b
    elif operator == '*':
        return a * b
    elif operator == '/':
        return a / b
    else:
        return "Invalid operator"

# 调用示例
result = calculator(10, 5, '+')
print("计算结果为：", result)
```

## 五、拓展知识与思考

> 💡 **拓展**  
> Python广泛应用于数据分析、人工智能、Web开发等领域。后续可以探索numpy、pandas、flask、django等常用库和框架。

## 六、小结与反思

本次学习掌握了Python编程语言的基础语法、数据类型以及基本的函数定义方法。后续需要练习更复杂的程序设计和数据结构的使用，以增强实际编码能力。

