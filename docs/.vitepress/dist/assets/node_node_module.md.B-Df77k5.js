import{_ as e,D as p,c as t,l as s,I as n,a as l,a1 as o,o as i}from"./chunks/framework.BJCuTr2g.js";const C=JSON.parse('{"title":"模块化","description":"","frontmatter":{},"headers":[],"relativePath":"node/node_module.md","filePath":"node/node_module.md"}'),c={name:"node/node_module.md"},d=s("h1",{id:"模块化",tabindex:"-1"},[l("模块化 "),s("a",{class:"header-anchor",href:"#模块化","aria-label":'Permalink to "模块化"'},"​")],-1),r={style:{color:"rgb(82 82 82)",padding:"16px 0","font-weight":"600",display:"flex",gap:"10px"}},_=s("span",null,"标签：",-1),h={style:{color:"rgb(82 82 82)","font-weight":"600"}},u=s("span",null,"创建时间：",-1),m=o(`<p>为了方便管理，将项目拆分为多个模块，每个模块负责实现一个特定的功能或提供一个相关的功能集合。这有助于提高代码的可读性和可维护性，并允许团队成员分别负责不同模块的开发和维护。确保每个模块只负责一个功能或领域。这有助于减少模块之间的耦合度，并使其更易于理解和测试。</p><p>将上面的路由模块（router）、业务模块（service）、数据（库）操作模块（model）抽离成三大模块，进行组织和管理Node.js项目。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>|-- nodeProject</span></span>
<span class="line"><span>    |-- node_modules</span></span>
<span class="line"><span>    |-- app.js</span></span>
<span class="line"><span>    |-- router</span></span>
<span class="line"><span>    |-- service</span></span>
<span class="line"><span>    |-- model</span></span></code></pre></div><p>为了更好的组织项目结构，我们还可以将上面三者细分，路由模块只充当路由url的处理，业务模块可细分为中间件（middlewares）、统一错误处理（error）、表单验证（validate）和工具（util）等，而数据（库）操作模块，可分为与mysql等存储数据的连接数据库（db）和操作数据crud两部分。</p><p>但这只适用与开发环境，当需要上线到生产环境时，我们还需要配置很多项目，所以可以新增一个配置文件（config）统一处理需要配置的内容，而不需要每一个配置都要在代码中寻找。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>|-- nodeProject</span></span>
<span class="line"><span>    |-- config</span></span>
<span class="line"><span>    |-- db</span></span>
<span class="line"><span>    |   |-- mysql.js</span></span>
<span class="line"><span>    |-- error</span></span>
<span class="line"><span>    |-- middlewares</span></span>
<span class="line"><span>    |   |-- jwt.js</span></span>
<span class="line"><span>    |-- model</span></span>
<span class="line"><span>    |-- node_modules</span></span>
<span class="line"><span>    |-- router</span></span>
<span class="line"><span>    |-- service</span></span>
<span class="line"><span>    |-- utils</span></span>
<span class="line"><span>    |-- vaildates</span></span>
<span class="line"><span>    |-- app.js</span></span>
<span class="line"><span>    |-- package-lock.json</span></span>
<span class="line"><span>    |-- package.json</span></span></code></pre></div>`,6);function g(v,b,f,y,k,x){const a=p("Badge");return i(),t("div",null,[d,s("div",r,[_,n(a,{type:"tip",text:"工作"}),n(a,{type:"tip",text:"初始化"}),n(a,{type:"tip",text:"原子化"})]),s("div",h,[u,n(a,{type:"tip",text:"2024-05-02"})]),m])}const N=e(c,[["render",g]]);export{C as __pageData,N as default};
