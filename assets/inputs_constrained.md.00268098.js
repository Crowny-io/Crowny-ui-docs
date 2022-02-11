import{_ as i,o as c,c as u,e as p,n as o,p as r,g as k,b as t,a as s}from"./app.6f287b29.js";const d={name:"Constrained",props:{right:{type:Boolean,default:!1},error:{type:Boolean,default:!1}}},_=a=>(r("data-v-422adf12"),a=a(),k(),a),h={class:"crowny__input__wrapper"},g=_(()=>p("i",{class:"icon-Calendar"},null,-1)),v=[g];function q(a,l,n,T,C,b){return c(),u("div",h,[p("div",{class:o(["constrained",[{right:n.right},{error:n.error}]])},v,2),p("input",{type:"text",class:o([{error:n.error},"crowny__input__text"]),placeholder:"DD/MM/YYYY",required:""},null,2)])}var e=i(d,[["render",q],["__scopeId","data-v-422adf12"]]);const m=s('<h1 id="constrained-input" tabindex="-1">Constrained input <a class="header-anchor" href="#constrained-input" aria-hidden="true">#</a></h1><h2 id="default" tabindex="-1">Default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h2><p>The constrained input is an extension of the normal textfield, giving you the option to show any icon in the textfield and constrain it&#39;s input type to that specific icon. E.g: Date input should have an calendar icon and constrained input of date format only.</p><h4 id="preview" tabindex="-1">Preview <a class="header-anchor" href="#preview" aria-hidden="true">#</a></h4>',4),f=s(`<div class="warning custom-block"><p class="custom-block-title">Important</p><p>The <code>crowny__input__wrapper</code> comes default with the Crowny-UI library and is needed for the icon positioning.</p></div><h4 id="markup" tabindex="-1">Markup <a class="header-anchor" href="#markup" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__input__wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>constrained<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-Calendar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__input__text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>DD/MM/YYYY<span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="constrained-right-side" tabindex="-1">Constrained right side <a class="header-anchor" href="#constrained-right-side" aria-hidden="true">#</a></h2><p>Optionally you can append the class <code>right</code> to the <code>constrained</code> element to make the constrained element float on the right side of the input.</p><h4 id="preview-1" tabindex="-1">Preview <a class="header-anchor" href="#preview-1" aria-hidden="true">#</a></h4>`,6),w=s(` \xA0 <h4 id="markup-1" tabindex="-1">Markup <a class="header-anchor" href="#markup-1" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__input__wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>constrained right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-Calendar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__input__text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>DD/MM/YYYY<span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="error" tabindex="-1">Error <a class="header-anchor" href="#error" aria-hidden="true">#</a></h2><p>We show the user the constrained input error state when the constrained input received an invalid value or if the back-end throws us an error.</p><p>In order to show the error state we append the class <code>error</code> to the constrained input.</p><h4 id="preview-2" tabindex="-1">Preview <a class="header-anchor" href="#preview-2" aria-hidden="true">#</a></h4>`,7),x=s(` \xA0 <h4 id="markup-2" tabindex="-1">Markup <a class="header-anchor" href="#markup-2" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__input__wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>constrained right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-Calendar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__input__text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>DD/MM/YYYY<span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,3),I='{"title":"Constrained input","description":"","frontmatter":{},"headers":[{"level":2,"title":"Default","slug":"default"},{"level":2,"title":"Constrained right side","slug":"constrained-right-side"},{"level":2,"title":"Error","slug":"error"}],"relativePath":"inputs/constrained.md","lastUpdated":1625578081127}',y={},S=Object.assign(y,{setup(a){return(l,n)=>(c(),u("div",null,[m,t(e),f,t(e,{right:!0}),w,t(e,{error:!0}),x]))}});export{I as __pageData,S as default};
