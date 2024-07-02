# CSS 基础

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

## 布局

如何把你的盒子放在与视口相关的正确位置上，zhe

### position

[MDN 地址](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

### overflow

[MDN 地址](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)

使用 overflow 的前提

1. display 的值非 inline
2. 具有尺寸限制，即有具体的 width、height、max-width、max-height、absolute
3. 对于单元格 td 等,还需要 table 为 table-layout: fixed 才可以

### grid 布局

当 flex 布局不是一定的倍数的时候，最后一排的布局无法满足需求时，需要写一些额外的样式进行处理


