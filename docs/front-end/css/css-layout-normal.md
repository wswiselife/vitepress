# CSS 布局之正常流布局

https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Normal_Flow


首先，取得元素的内容并将其放在一个独立的元素盒子中，然后在其周边加上内边距、边框和外边距——就是我们所说的盒子模型。

默认情况下，一个块级元素会填充其父元素所有的行向空间，并沿着其块向伸长以容纳其内容。行级元素的大小就是其本身的大小。你可以为某些 display 属性值默认为 inline 的元素（例如 <img>）设置 width 或 height，但其 display 仍将保持为 inline。