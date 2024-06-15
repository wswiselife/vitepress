# css 学习

<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-05-16" />
</div>

## css 书写规范

### 书写顺序

1. 位置（z-index,position,display,float）
2. 大小边距（width,height,padding,margin）
3. 文字样式+文字属性（font-size,color）
4. 背景（background,border）
5. 其他（animation，transition）

### 注意缩写

属性名对应的属性值，存在例如 font-size: 0.8rem; 时，处理成 font-size： .8rem;

属性值为 0 的去掉单位

### 命名规范

1. 必须以英文字母开头，且保持小写
2. 尽量减少 id 选择器的使用，多使用类选择器，且当需要分割时，使用中横线 “-”
3. 如果是16进制表示颜色，则颜色取值应该大写
4. 如果可以，颜色尽量用三位字符表示，例如#AABBCC写成#ABC

*【扩展：命名规范todo】*

### 注释规范

```css
/*
* @description: 中文说明
* @author: name
* @create time: 2024-05-16
*/

```

### 常见命名

- 容器: container
- 页头：header
- 内容：content/container
- 页面主体：main
- 页尾：footer
- 导航：nav
- 侧栏：sidebar
- 栏目：column
- 页面外围控制整体布局宽度：wrapper
- 左右中：left right center



