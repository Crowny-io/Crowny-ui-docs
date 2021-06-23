import{p as a,e as s,o as n,c as t,b as p,w as e,a as o}from"./app.8ce370de.js";const c={name:"Selectlist",props:{error:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}}},l=e();a("data-v-51adc7ff");const u={class:"crowny__input__wrapper select"},i=p("option",{value:""},"-- Please select an option --",-1),r=p("option",{value:"1"},"Option 1",-1),k=p("option",{value:"2"},"Option 2",-1),d=p("option",{value:"3"},"Option 3",-1);s();const g=l(((a,s,e,o,c,l)=>(n(),t("div",u,[p("select",{class:["crowny__input__select",{error:e.error}],name:"",id:"",required:"",disabled:e.disabled},[i,r,k,d],10,["disabled"])]))));c.render=g,c.__scopeId="data-v-51adc7ff";const h=o('<h1 id="seleclist"><a class="header-anchor" href="#seleclist" aria-hidden="true">#</a> Seleclist</h1><h2 id="default-selectlist"><a class="header-anchor" href="#default-selectlist" aria-hidden="true">#</a> Default selectlist</h2><p>The selectlist is used whenever the user must choose an option from a list.</p><h4 id="preview"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h4>',4),v=o('<div class="warning custom-block"><p class="custom-block-title">Important</p><p>When the selectlist receives a value the border state will change. For this we use the <code>required</code> attribute. We require any value from the user for the selectlist in order for the border state to change.</p></div><h4 id="markup"><a class="header-anchor" href="#markup" aria-hidden="true">#</a> Markup</h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__input__select<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>-- Please select an option --<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Option 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Option 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Option 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="error-state"><a class="header-anchor" href="#error-state" aria-hidden="true">#</a> Error state</h2><p>We show the user the selectlist error state when the selectlist received an invalid value or if the back-end throws us an error.</p><p>In order to show the error state we append the class <code>error</code> to the selectlist.</p><h4 id="preview-1"><a class="header-anchor" href="#preview-1" aria-hidden="true">#</a> Preview</h4>',7),_=o('   <h4 id="markup-1"><a class="header-anchor" href="#markup-1" aria-hidden="true">#</a> Markup</h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__input__select error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>-- Please select an option --<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Option 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Option 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Option 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="disabled-state"><a class="header-anchor" href="#disabled-state" aria-hidden="true">#</a> Disabled state</h2><p>We provide the option to disable the selectlist when necessary. In order to disable the selectlist we use the <code>disabled</code> attribute.</p><h4 id="preview-2"><a class="header-anchor" href="#preview-2" aria-hidden="true">#</a> Preview</h4>',6),q=o('   <h4 id="markup-2"><a class="header-anchor" href="#markup-2" aria-hidden="true">#</a> Markup</h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__input__select<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>-- Please select an option --<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Option 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Option 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Option 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',3),m='{"title":"Seleclist","description":"","frontmatter":{},"headers":[{"level":2,"title":"Default selectlist","slug":"default-selectlist"},{"level":2,"title":"Error state","slug":"error-state"},{"level":2,"title":"Disabled state","slug":"disabled-state"}],"relativePath":"inputs/selectlist.md","lastUpdated":1624463211637}',f={};const w=Object.assign(f,{expose:[],setup:function(a){return(a,s)=>(n(),t("div",null,[h,p(c),v,p(c,{error:!0}),_,p(c,{disabled:!0}),q]))}});export default w;export{m as __pageData};
