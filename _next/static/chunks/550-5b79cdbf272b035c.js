(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[550],{5388:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var r=n(5893),l=n(9008),a=n.n(l);let s=e=>{let{title:t,description:n}=e;return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:title",content:t}),(0,r.jsx)("meta",{property:"twitter:title",content:t})]})}},5976:function(e,t,n){"use strict";n.d(t,{dz:function(){return C},$E:function(){return P}});var r=n(5893),l=n(7294),a=n(837),s=n(9622),c=n(2247),i=n(2022),o=n(836),u=n(4636);n(6769);var d=n(5872),h=n.n(d);a.Z.registerLanguage("js",s.Z),a.Z.registerLanguage("javascript",s.Z),a.Z.registerLanguage("ts",c.Z),a.Z.registerLanguage("typescript",c.Z),a.Z.registerLanguage("csharp",i.Z),a.Z.registerLanguage("css",o.Z),a.Z.registerLanguage("json",u.Z);let p=e=>{let{children:t,lan:n}=e;return(0,l.useEffect)(()=>{a.Z.highlightAll()},[]),(0,r.jsx)("pre",{className:h().block,children:(0,r.jsx)("code",{className:"".concat(h().code," language-").concat("c#"===n?"csharp":n),children:t})})};var m=n(5675),_=n.n(m),x=n(4748),g=n.n(x);let j=e=>{let{item:t}=e,n=/youtube\.com/.test(t.url)?t.url.replace(/watch\?v=/,"embed/"):/youtu\.be/.test(t.url)?t.url.replace(/https:\/\/youtu\.be\/(\w+)/,"https://youtube.com/embed/$1"):void 0;return n?(0,r.jsx)("div",{className:g().container,children:(0,r.jsx)("div",{className:g().wrapper,children:(0,r.jsx)("iframe",{className:g().iframe,id:"ytplayer",src:n})})}):null};var k=n(5941),f=n.n(k);let B=e=>{let{block:t}=e;return(0,r.jsx)("div",{className:"".concat(f().container," text-color-second"),children:(0,r.jsxs)("span",{className:f().wrapper,children:[(0,r.jsx)("span",{className:f()["quote-mark-start"],children:"“"}),t.children.map((e,t)=>(0,r.jsx)(P,{item:e},t)),(0,r.jsx)("span",{className:f()["quote-mark-end"],children:"”"})]})})},y=e=>/!\[.+\]/.test(e),b=e=>e.replace(/!\[(.+)\]/,"$1");var N=n(9432),w=n.n(N),v=n(1497);let C=e=>{let{block:t}=e;return(0,r.jsx)("div",{className:w().wrapper,children:(0,r.jsx)(Z,{block:t})})},Z=e=>{let{block:t}=e;switch(t.type){case"paragraph":return(0,r.jsx)(r.Fragment,{children:t.children.map((e,t)=>(0,r.jsx)(P,{item:e},t))});case"image":if(/youtube\.com/.test(t.url)||/youtu\.be/.test(t.url))return(0,r.jsx)(j,{item:t});return(0,r.jsxs)("div",{children:[(0,r.jsx)(_(),{src:"/images/"+t.url,alt:t.alt||"",width:600,height:400,className:w().image}),"#nullcaption"!==t.caption?(0,r.jsx)("span",{className:"".concat(w()["image-caption"]," text-color-second"),children:t.caption}):null]});case"heading":switch(t.depth){case 1:return(0,r.jsx)("h2",{className:w().h2,id:(0,v.Rh)(t),children:t.children.map((e,t)=>(0,r.jsx)(P,{item:e},t))});case 2:return(0,r.jsx)("h3",{className:w().h3,id:(0,v.Rh)(t),children:t.children.map((e,t)=>(0,r.jsx)(P,{item:e},t))});case 3:return(0,r.jsx)("h4",{className:w().h4,id:(0,v.Rh)(t),children:t.children.map((e,t)=>(0,r.jsx)(P,{item:e},t))});default:return null}case"list":if(t.ordered)return(0,r.jsx)("ol",{className:w().ol,children:t.children.map((e,t)=>(0,r.jsx)("li",{children:e.children.map(e=>(0,r.jsx)(P,{item:e},t))},t))});return(0,r.jsx)("ul",{className:w().ul,children:t.children.map((e,t)=>(0,r.jsx)("li",{children:e.children.map(e=>(0,r.jsx)(P,{item:e},t))},t))});case"code":return(0,r.jsx)(p,{lan:t.lang,children:t.text});case"quote":return(0,r.jsx)(B,{block:t});case"thematicBreak":return(0,r.jsx)("hr",{className:"".concat(w().br," border-color")});default:return null}},P=e=>{let{item:t}=e;switch(t.type){case"plain":if(y(t.text))return(0,r.jsx)(_(),{className:w()["snapshot-image"],src:b(t.text),alt:"",width:500,height:500});return(0,r.jsx)(r.Fragment,{children:t.text});case"link":return(0,r.jsx)("a",{href:t.url,className:w().link,rel:"noreferrer noopener",target:"_blank",children:t.text});case"strong":return(0,r.jsx)("strong",{children:t.text});case"italic":return(0,r.jsx)("em",{children:t.text});case"inlineCode":return(0,r.jsx)("code",{className:w()["inline-code"],children:t.text});default:return(0,r.jsx)("span",{children:"FIXME"})}}},3034:function(e,t,n){"use strict";n.d(t,{P:function(){return i}});var r=n(5893),l=n(7294),a=n(4879),s=n.n(a),c=n(1497);let i=e=>{let{list:t}=e,n=(0,l.useCallback)(e=>{let t=document.querySelector("#".concat(e));t&&window.scrollBy({top:t.getBoundingClientRect().top-20-56,behavior:"smooth"})},[]);return(0,r.jsx)("div",{className:s().container,children:(0,r.jsx)("ul",{className:"".concat(s().ul," interactive-list-color"),children:t.map(e=>{let t=e.children.map(e=>e.text).join(" "),l=(0,c.Rh)(e);return(0,r.jsx)(o,{onClick:()=>n(l),indent:e.depth-1,children:t},e.children[0].text)})})})},o=e=>{let{onClick:t,children:n,indent:l}=e;return(0,r.jsxs)("li",{className:s().li,children:[Array(l).fill(0).map((e,t)=>(0,r.jsx)("div",{className:s().indent},t)),(0,r.jsx)("button",{role:"link",className:s().link,onClick:t,children:n})]})}},1497:function(e,t,n){"use strict";n.d(t,{FE:function(){return r},Rh:function(){return a}});let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[],r=e=>e.reduce((e,t)=>e+t.size,0),a=e.map(l),s=[];return a.forEach(e=>{if(t-r(s)<e.size){let l=s.find(e=>1===e.size);l&&(l.size=2),r(s)===t&&(n.push([...s]),s=[])}t-r(s)>=e.size&&s.push(e),r(s)===t&&(n.push([...s]),s=[])}),0!==s.length&&n.push([...s]),n},l=e=>({size:e.title.length>30||(e.description||"").length>160?2:1,title:e.title,description:e.description||"",publishDate:e.publishDate,pathname:e.pathname}),a=e=>e.children.map(e=>e.text).join("-").replace(/[\s\.,\(\)]/g,"-").toLowerCase()},6476:function(e,t,n){"use strict";n.d(t,{Kd:function(){return l}});let r=e=>e.map(e=>"text"===e.type?{type:"plain",text:e.value}:"strong"===e.type?{type:"strong",text:r(e.children)[0].text}:"emphasis"===e.type?{type:"italic",text:r(e.children)[0].text}:"link"===e.type?{type:"link",text:r(e.children)[0].text,url:e.url}:"inlineCode"===e.type?{type:"inlineCode",text:e.value}:void 0).filter(e=>e),l=e=>"heading"===e.type},5872:function(e){e.exports={block:"CodeBlock_block__wRht1",code:"CodeBlock_code__1aD9x"}},9432:function(e){e.exports={wrapper:"PostBodyBlock_wrapper__wRxJc",image:"PostBodyBlock_image__KsPkW","image-caption":"PostBodyBlock_image-caption__ODIhE",h2:"PostBodyBlock_h2__z8Iri",h3:"PostBodyBlock_h3__BUDla",h4:"PostBodyBlock_h4__78VBA",ol:"PostBodyBlock_ol__kg5mk",ul:"PostBodyBlock_ul__QtcuL",br:"PostBodyBlock_br__HpKdA","snapshot-image":"PostBodyBlock_snapshot-image__aHepv",link:"PostBodyBlock_link__faaEN","inline-code":"PostBodyBlock_inline-code__TAzYM"}},5941:function(e){e.exports={container:"QuoteBlock_container__9awLK",wrapper:"QuoteBlock_wrapper__f0o4S","quote-mark-start":"QuoteBlock_quote-mark-start__8smTS","quote-mark-end":"QuoteBlock_quote-mark-end__O_ayK"}},4879:function(e){e.exports={container:"TableOfContentColumn_container__0tmUV",ul:"TableOfContentColumn_ul__7wuVs",li:"TableOfContentColumn_li__FUe4z",indent:"TableOfContentColumn_indent__CXWB4",link:"TableOfContentColumn_link__5qS3c"}},4748:function(e){e.exports={container:"YoutubeBlock_container__QJ4aD",wrapper:"YoutubeBlock_wrapper__v7BYj",iframe:"YoutubeBlock_iframe__tB7b2"}}}]);