import{_ as l,o as s,c as n,f as t,F as r,a,b as o}from"./app.9c1de231.js";const i={name:"Buttons",props:{show:{type:String,default:"default"}}},_={key:0,class:"wrapper default"},u=a('<div class="crowny__icon__holder" data-v-1e98d0bc><i class="icon-Crown" data-v-1e98d0bc></i></div><div class="crowny__icon__holder" data-v-1e98d0bc><i class="icon-Trophy" data-v-1e98d0bc></i></div><div class="crowny__icon__holder" data-v-1e98d0bc><i class="icon-Bell" data-v-1e98d0bc></i></div>',3),h=[u],k={key:1,class:"wrapper default"},v=a('<div class="crowny__icon__holder rounded" data-v-1e98d0bc><i class="icon-Crown" data-v-1e98d0bc></i></div><div class="crowny__icon__holder rounded" data-v-1e98d0bc><i class="icon-Trophy" data-v-1e98d0bc></i></div><div class="crowny__icon__holder rounded" data-v-1e98d0bc><i class="icon-Bell" data-v-1e98d0bc></i></div>',3),b=[v],g={key:2,class:"wrapper"},T=a('<div class="crowny__icon__holder with__border" data-v-1e98d0bc><i class="icon-Crown" data-v-1e98d0bc></i></div><div class="crowny__icon__holder with__border" data-v-1e98d0bc><i class="icon-Trophy" data-v-1e98d0bc></i></div><div class="crowny__icon__holder with__border" data-v-1e98d0bc><i class="icon-Bell" data-v-1e98d0bc></i></div>',3),m=[T],w={key:3,class:"wrapper"},f=a('<div class="crowny__icon__holder rounded with__border" data-v-1e98d0bc><i class="icon-Crown" data-v-1e98d0bc></i></div><div class="crowny__icon__holder rounded with__border" data-v-1e98d0bc><i class="icon-Trophy" data-v-1e98d0bc></i></div><div class="crowny__icon__holder rounded with__border" data-v-1e98d0bc><i class="icon-Bell" data-v-1e98d0bc></i></div>',3),x=[f];function y(d,p,e,q,P,E){return s(),n(r,null,[e.show=="default"?(s(),n("div",_,h)):t("",!0),e.show=="rounded"?(s(),n("div",k,b)):t("",!0),e.show=="border"?(s(),n("div",g,m)):t("",!0),e.show=="borderrounded"?(s(),n("div",w,x)):t("",!0)],64)}var c=l(i,[["render",y],["__scopeId","data-v-1e98d0bc"]]);const S=a('<h1 id="icon-holders" tabindex="-1">Icon holders <a class="header-anchor" href="#icon-holders" aria-hidden="true">#</a></h1><h2 id="default" tabindex="-1">Default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h2><p>The holder is simple a &#39;wrapper&#39; around the icon(s), visually different from just the icons. These holders will be used in many cases.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><p>The default icon holder is a squire with rounded borders, should be used on medium / dark backgrounds.<br><strong>Size: 48x48px</strong></p>',5),A=a(`<br><h4 id="markup" tabindex="-1">Markup <a class="header-anchor" href="#markup" aria-hidden="true">#</a></h4><p>The <code>{iconName}</code> should be replaced with the icon names shown in the list of icons below.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__icon__holder<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-{iconName}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="rounded-holder" tabindex="-1">Rounded Holder <a class="header-anchor" href="#rounded-holder" aria-hidden="true">#</a></h2><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-hidden="true">#</a></h3><p>In some cases we use a rounded version of the icon holder e.g Avatars.<br><strong>Size: 48x48px</strong></p>`,7),I=a(`<br><h4 id="markup-1" tabindex="-1">Markup <a class="header-anchor" href="#markup-1" aria-hidden="true">#</a></h4><p>Add the class <code>rounded</code> to the parent wrapper <code>crowny__icon__holder</code></p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__icon__holder rounded<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-{iconName}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="border-variant" tabindex="-1">Border Variant <a class="header-anchor" href="#border-variant" aria-hidden="true">#</a></h2><h3 id="example-2" tabindex="-1">Example <a class="header-anchor" href="#example-2" aria-hidden="true">#</a></h3><p>Whenever you want to use the Icon Holder on a light/white background you need to add a border.<br><strong>Size: 48x48px</strong></p>`,7),C=a(`<br><h4 id="markup-2" tabindex="-1">Markup <a class="header-anchor" href="#markup-2" aria-hidden="true">#</a></h4><p>Add the class <code>with__border</code> to the parent wrapper <code>crowny__icon__holder</code></p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__icon__holder with__border<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-{iconName}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,4),D='{"title":"Icon holders","description":"","frontmatter":{},"headers":[{"level":2,"title":"Default","slug":"default"},{"level":3,"title":"Example","slug":"example"},{"level":2,"title":"Rounded Holder","slug":"rounded-holder"},{"level":3,"title":"Example","slug":"example-1"},{"level":2,"title":"Border Variant","slug":"border-variant"},{"level":3,"title":"Example","slug":"example-2"}],"relativePath":"utils/iconholders.md","lastUpdated":1645783336389}',V={},R=Object.assign(V,{setup(d){return(p,e)=>(s(),n("div",null,[S,o(c),A,o(c,{show:"rounded"}),I,o(c,{show:"border"}),o(c,{show:"borderrounded"}),C]))}});export{D as __pageData,R as default};
