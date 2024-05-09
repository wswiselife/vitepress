import{_ as s,D as i,c as o,l as a,I as e,a as n,a1 as p,o as h}from"./chunks/framework.BJCuTr2g.js";const C=JSON.parse('{"title":"push code to github","description":"","frontmatter":{},"headers":[],"relativePath":"tools/code-push-to-github.md","filePath":"tools/code-push-to-github.md"}'),l={name:"tools/code-push-to-github.md"},c=a("h1",{id:"push-code-to-github",tabindex:"-1"},[n("push code to github "),a("a",{class:"header-anchor",href:"#push-code-to-github","aria-label":'Permalink to "push code to github"'},"​")],-1),d={style:{color:"rgb(82 82 82)",padding:"16px 0","font-weight":"600",display:"flex",gap:"10px"}},r=a("span",null,"标签：",-1),u={style:{color:"rgb(82 82 82)","font-weight":"600"}},g=a("span",null,"创建时间：",-1),b=p(`<h2 id="在github上创建新的仓库" tabindex="-1">在GitHub上创建新的仓库 <a class="header-anchor" href="#在github上创建新的仓库" aria-label="Permalink to &quot;在GitHub上创建新的仓库&quot;">​</a></h2><p>首先，在GitHub上创建一个新的空仓库。登录到您的GitHub帐户，然后点击页面右上角的加号图标，选择“New repository”（新建仓库），然后按照页面上的指示填写仓库的名称、描述等信息，最后点击“Create repository”（创建仓库）按钮即可。</p><h2 id="在本地初始化git仓库" tabindex="-1">在本地初始化Git仓库 <a class="header-anchor" href="#在本地初始化git仓库" aria-label="Permalink to &quot;在本地初始化Git仓库&quot;">​</a></h2><p>在您的本地项目目录中创建一个新的Git仓库</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git init</span></span></code></pre></div><h2 id="将文件添加到暂存区" tabindex="-1">将文件添加到暂存区 <a class="header-anchor" href="#将文件添加到暂存区" aria-label="Permalink to &quot;将文件添加到暂存区&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git add .</span></span></code></pre></div><h2 id="提交更改" tabindex="-1">提交更改 <a class="header-anchor" href="#提交更改" aria-label="Permalink to &quot;提交更改&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git commit -m &quot;Project Initial&quot;</span></span></code></pre></div><h2 id="由master分支切换为main分支" tabindex="-1">由master分支切换为main分支 <a class="header-anchor" href="#由master分支切换为main分支" aria-label="Permalink to &quot;由master分支切换为main分支&quot;">​</a></h2><p>由于GitHub中主分支为main分支，而本地仓库的主分支为master分支，需要把本地的分支切换成main分支，并删除master分支</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git branch -m main        // 创建并切换到main分支</span></span>
<span class="line"><span>git branch -d master      // 删除master分支</span></span></code></pre></div><h2 id="将远程仓库链接到本地仓库" tabindex="-1">将远程仓库链接到本地仓库 <a class="header-anchor" href="#将远程仓库链接到本地仓库" aria-label="Permalink to &quot;将远程仓库链接到本地仓库&quot;">​</a></h2><p>使用git remote add命令将您的本地仓库链接到远程GitHub仓库。替换yourusername和yourrepository为您在GitHub上创建的仓库的用户名和仓库名称</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git remote add origin git@github.com:yourusername/yourrepository.git</span></span></code></pre></div><h2 id="推送到github" tabindex="-1">推送到GitHub <a class="header-anchor" href="#推送到github" aria-label="Permalink to &quot;推送到GitHub&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git push -u origin main</span></span></code></pre></div>`,17);function m(_,v,k,y,f,x){const t=i("Badge");return h(),o("div",null,[c,a("div",d,[r,e(t,{type:"tip",text:"前端"}),e(t,{type:"tip",text:"html"}),e(t,{type:"tip",text:"原子化"})]),a("div",u,[g,e(t,{type:"tip",text:"2024-04-30"})]),b])}const P=s(l,[["render",m]]);export{C as __pageData,P as default};