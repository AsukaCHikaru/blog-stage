(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3847)}])},4009:function(e,t,n){"use strict";n.d(t,{Ey:function(){return k},Ar:function(){return j},M9:function(){return M},QN:function(){return S}});var o=n(5893),r=n(7294),l=n(6393),i=n.n(l),a=n(4596),c=n(1664),u=n.n(c),s=n(1163),f=n(3559),d=n.n(f);let p=e=>{let{onToggleMenu:t,mobileMenu:n,isMenuOpen:l}=e,{pathname:i}=(0,s.useRouter)(),c=(0,r.useCallback)(e=>"/"===i&&e.isHome||i.startsWith(e.url),[i]);return(0,o.jsxs)("div",{className:d().container,"data-is-menu-open":l,children:[(0,o.jsxs)("div",{className:d()["nav-container"],children:[(0,o.jsxs)("div",{className:d()["section-container"],children:[Object.values(a.S).map(e=>(0,o.jsx)(u(),{href:e.url,className:"".concat(d()["section-link"]," interactive-color ").concat(c(e)?"text-color":""),children:e.label},e.url)),(0,o.jsx)(u(),{href:"/blog/feed.xml",target:"_blank",className:"".concat(d()["section-link"]," interactive-color"),children:"rss"})]}),(0,o.jsx)("button",{className:d()["menu-button"],onClick:t,children:l?"close menu":"menu"}),(0,o.jsx)(u(),{href:"/",className:"".concat(d()["publication-folio"]," text-color"),children:"ASUKA WANG"})]}),(0,o.jsx)("div",{className:"".concat(d().divider," border-color-100")}),(0,o.jsx)("div",{className:d()["menu-wrapper"],children:l?n:null})]})};var _=n(5696),v=n.n(_);let h=()=>(0,o.jsx)("div",{className:"".concat(v().container," border-color"),children:(0,o.jsx)("a",{href:"https://asukawang.com",rel:"noopener noreferrer",target:"_blank",className:"".concat(v().link," interactive-color"),children:"asukawang.com 2018-"})});var m=n(2361),b=n.n(m),x=n(3847);let g=e=>{var t;let{onClose:n}=e,l=(0,r.useContext)(x.SiteContext);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:b().backdrop,onClick:()=>n()}),(0,o.jsxs)("div",{className:b().menu,children:[(0,o.jsx)(y,{active:(null==l?void 0:l.activeSection)==="blog",label:"blog",path:"/blog",rssLink:(0,o.jsx)(u(),{href:"/blog/feed.xml",target:"_blank",className:"".concat(b()["menu-section-title"]," interactive-color"),children:"rss"}),onTitleClick:n,children:(null==l?void 0:l.activeSection)==="blog"?(0,o.jsx)("ul",{className:b()["category-container"],children:null==l?void 0:null===(t=l.blogCategories)||void 0===t?void 0:t.sort((e,t)=>t.count-e.count).map(e=>(0,o.jsx)("li",{children:(0,o.jsxs)(u(),{href:"/blog/archive?category=".concat(e.name),onClick:n,className:"".concat(b()["category-link"]),children:[e.name,(0,o.jsx)("div",{}),(0,o.jsxs)("span",{children:[e.count," post",e.count>1?"s":""]})]})},"menu-blog-category-".concat(e)))}):null}),(0,o.jsx)(y,{active:(null==l?void 0:l.activeSection)==="about",label:"about",path:"/about",onTitleClick:n})]})]})},y=e=>{let{children:t,active:n,label:r,rssLink:l,path:i,onTitleClick:a}=e;return(0,o.jsxs)("div",{"data-active":n,children:[(0,o.jsxs)("div",{className:b()["menu-section-container"],children:[(0,o.jsx)(u(),{href:i,className:"".concat(b()["menu-section-title"]," interactive-color"),"data-active":n,onClick:a,children:r}),l]}),t]})},j=e=>{let{children:t}=e,[n,l]=(0,r.useState)(!1);return(0,o.jsxs)("div",{className:"text-color ".concat(i().container),"data-is-menu-open":n,children:[(0,o.jsx)(p,{onToggleMenu:()=>l(e=>!e),isMenuOpen:n,mobileMenu:(0,o.jsx)(g,{onClose:()=>l(!1)})}),t,(0,o.jsx)(h,{})]})},k=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:i()["full-content"],children:t})},M=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:i()["main-content"],children:t})},S=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:i()["right-panel"],children:t})}},4596:function(e,t,n){"use strict";n.d(t,{S:function(){return o}});let o={BLOG:{url:"/blog",label:"blog",description:"Essays, reviews and notes",isHome:!0},ABOUT:{url:"/about",label:"about",description:"Introduction about me and this site",isHome:!1}}},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),i=n(1003),a=n(7795),c=n(4465),u=n(2692),s=n(8245),f=n(9246),d=n(227),p=n(3468);let _=new Set;function v(e,t,n,o){if(i.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(_.has(l))return;_.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function h(e){return"string"==typeof e?e:a.formatUrl(e)}let m=l.default.forwardRef(function(e,t){let n,o;let{href:a,as:_,children:m,prefetch:b,passHref:x,replace:g,shallow:y,scroll:j,locale:k,onClick:M,onMouseEnter:S,onTouchStart:C,legacyBehavior:N=!1}=e,w=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,N&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let E=!1!==b,O=l.default.useContext(u.RouterContext),L=l.default.useContext(s.AppRouterContext),P=null!=O?O:L,H=!O,{href:T,as:A}=l.default.useMemo(()=>{if(!O){let e=h(a);return{href:e,as:_?h(_):e}}let[t,n]=i.resolveHref(O,a,!0);return{href:t,as:_?i.resolveHref(O,_):n||t}},[O,a,_]),I=l.default.useRef(T),R=l.default.useRef(A);N&&(o=l.default.Children.only(n));let K=N?o&&"object"==typeof o&&o.ref:t,[D,U,Z]=f.useIntersection({rootMargin:"200px"}),z=l.default.useCallback(e=>{(R.current!==A||I.current!==T)&&(Z(),R.current=A,I.current=T),D(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[A,K,T,Z,D]);l.default.useEffect(()=>{P&&U&&E&&v(P,T,A,{locale:k})},[A,T,U,k,E,null==O?void 0:O.locale,P]);let F={ref:z,onClick(e){N||"function"!=typeof M||M(e),N&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,o,r,a,c,u,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(n)))return;e.preventDefault();let _=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:u,scroll:c}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};s?l.default.startTransition(_):_()}(e,P,T,A,g,y,j,k,H,E)},onMouseEnter(e){N||"function"!=typeof S||S(e),N&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),P&&(E||!H)&&v(P,T,A,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){N||"function"!=typeof C||C(e),N&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),P&&(E||!H)&&v(P,T,A,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if(!N||x||"a"===o.type&&!("href"in o.props)){let q=void 0!==k?k:null==O?void 0:O.locale,B=(null==O?void 0:O.isLocaleDomain)&&d.getDomainLocale(A,q,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);F.href=B||p.addBasePath(c.addLocale(A,q,null==O?void 0:O.defaultLocale))}return N?l.default.cloneElement(o,F):l.default.createElement("a",Object.assign({},w,F),n)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,u=c||!l,[s,f]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!u&&!s&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=i.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},a.push(n),i.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),i.delete(o);let t=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){let o=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(o)}},[d,u,n,t,s]);let _=o.useCallback(()=>{f(!1)},[]);return[p,s,_]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3847:function(e,t,n){"use strict";n.r(t),n.d(t,{SiteContext:function(){return i},default:function(){return a}});var o=n(5893);n(4744),n(5348),n(9608);var r=n(4009),l=n(7294);let i=(0,l.createContext)(null);function a(e){let{Component:t,pageProps:n}=e;return(0,o.jsx)("main",{children:(0,o.jsx)(i.Provider,{value:{activeSection:void 0,blogCategories:[]},children:(0,o.jsx)(r.Ar,{children:(0,o.jsx)(t,{...n})})})})}},5348:function(){},4744:function(){},6393:function(e){e.exports={container:"Layout_container__S4aNf","full-content":"Layout_full-content__MQIxS","main-content":"Layout_main-content__mr9_2","left-panel":"Layout_left-panel__zMSzy","right-panel":"Layout_right-panel__zSn4t","right-wide-content":"Layout_right-wide-content__bIWnI"}},2361:function(e){e.exports={menu:"MobileMenu_menu__5czkx",menuOpen:"MobileMenu_menuOpen__MMJsZ","menu-section-container":"MobileMenu_menu-section-container__VAGeP","menu-section-title":"MobileMenu_menu-section-title__S4yKl",backdrop:"MobileMenu_backdrop__ySbAo","category-container":"MobileMenu_category-container__GofTh","category-link":"MobileMenu_category-link__qWiHL"}},5696:function(e){e.exports={container:"SiteFooter_container__0v6cR",link:"SiteFooter_link__RuMSe"}},3559:function(e){e.exports={container:"SiteHeader_container__8tKwA","nav-container":"SiteHeader_nav-container__oEq2d","menu-button":"SiteHeader_menu-button__eK9ND","section-container":"SiteHeader_section-container__tAKnZ","section-link":"SiteHeader_section-link__9DmFE","publication-folio":"SiteHeader_publication-folio___ZFZS",divider:"SiteHeader_divider__cq_R_","menu-wrapper":"SiteHeader_menu-wrapper__2evr7"}},9608:function(){},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);