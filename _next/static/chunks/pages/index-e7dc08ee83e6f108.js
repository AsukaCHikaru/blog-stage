(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7484:function(e){var t,n,r,i,s,u,o,a,c,l,f,d,h,p,m,y,v,$,g,M,x;e.exports=(t="millisecond",n="second",r="minute",i="hour",s="week",u="month",o="quarter",a="year",c="date",l="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},(m={})[p="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}},y=function(e){return e instanceof M},v=function e(t,n,r){var i;if(!t)return p;if("string"==typeof t){var s=t.toLowerCase();m[s]&&(i=s),n&&(m[s]=n,i=s);var u=t.split("-");if(!i&&u.length>1)return e(u[0])}else{var o=t.name;m[o]=t,i=o}return!r&&i&&(p=i),i||!r&&p},$=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},(g={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),s=n-i<0,o=t.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:u,y:a,w:s,d:"day",D:c,h:i,m:r,s:n,ms:t,Q:o})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=v,g.i=y,g.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},x=(M=function(){function e(e){this.$L=v(e.locale,null,!0),this.parse(e)}var h=e.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(f);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return this.$d.toString()!==l},h.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return $(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<$(e)},h.$g=function(e,t,n){return g.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var o=this,l=!!g.u(t)||t,f=g.p(e),d=function(e,t){var n=g.w(o.$u?Date.UTC(o.$y,t,e):new Date(o.$y,t,e),o);return l?n:n.endOf("day")},h=function(e,t){return g.w(o.toDate()[e].apply(o.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),o)},p=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case a:return l?d(1,0):d(31,11);case u:return l?d(1,m):d(0,m+1);case s:var $=this.$locale().weekStart||0,M=(p<$?p+7:p)-$;return d(l?y-M:y+(6-M),m);case"day":case c:return h(v+"Hours",0);case i:return h(v+"Minutes",1);case r:return h(v+"Seconds",2);case n:return h(v+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,s){var o,l=g.p(e),f="set"+(this.$u?"UTC":""),d=((o={}).day=f+"Date",o[c]=f+"Date",o[u]=f+"Month",o[a]=f+"FullYear",o[i]=f+"Hours",o[r]=f+"Minutes",o[n]=f+"Seconds",o[t]=f+"Milliseconds",o)[l],h="day"===l?this.$D+(s-this.$W):s;if(l===u||l===a){var p=this.clone().set(c,1);p.$d[d](h),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[g.p(e)]()},h.add=function(e,t){var o,c=this;e=Number(e);var l=g.p(t),f=function(t){var n=$(c);return g.w(n.date(n.date()+Math.round(t*e)),c)};if(l===u)return this.set(u,this.$M+e);if(l===a)return this.set(a,this.$y+e);if("day"===l)return f(1);if(l===s)return f(7);var d=((o={})[r]=6e4,o[i]=36e5,o[n]=1e3,o)[l]||1,h=this.$d.getTime()+e*d;return g.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=g.z(this),s=this.$H,u=this.$m,o=this.$M,a=n.weekdays,c=n.months,f=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},h=function(e){return g.s(s%12||12,e,"0")},p=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:g.s(o+1,2,"0"),MMM:f(n.monthsShort,o,c,3),MMMM:f(c,o),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,a,2),ddd:f(n.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:g.s(s,2,"0"),h:h(1),hh:h(2),a:p(s,u,!0),A:p(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:i};return r.replace(d,function(e,t){return t||m[e]||i.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,t,c){var l,f=g.p(t),d=$(e),h=(d.utcOffset()-this.utcOffset())*6e4,p=this-d,m=g.m(this,d);return m=((l={})[a]=m/12,l[u]=m,l[o]=m/3,l[s]=(p-h)/6048e5,l.day=(p-h)/864e5,l[i]=p/36e5,l[r]=p/6e4,l[n]=p/1e3,l)[f]||p,c?m:g.a(m)},h.daysInMonth=function(){return this.endOf(u).$D},h.$locale=function(){return m[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=v(e,t,!0);return r&&(n.$L=r),n},h.clone=function(){return g.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},e}()).prototype,$.prototype=x,[["$ms",t],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",u],["$y",a],["$D",c]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),$.extend=function(e,t){return e.$i||(e(t,M,$),e.$i=!0),$},$.locale=v,$.isDayjs=y,$.unix=function(e){return $(1e3*e)},$.en=m[p],$.Ls=m,$.p={},$)},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8697)}])},4260:function(e,t,n){"use strict";n.d(t,{$:function(){return i}});var r=n(5893);let i=()=>(0,r.jsxs)("div",{className:"mt-16 mb-5 text-center",children:[(0,r.jsx)("a",{href:"https://asukachikaru.com",rel:"noopener noreferrer",target:"_blank",children:"asukachikaru.com"})," ","2018-"]})},1943:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var r=n(5893);let i=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"max-w-3xl mx-auto",children:t})}},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,i=n(7273).Z,s=r(n(7294)),u=n(1003),o=n(7795),a=n(4465),c=n(2692),l=n(8245),f=n(9246),d=n(227),h=n(3468);let p=new Set;function m(e,t,n,r){if(u.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let i=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,s=t+"%"+n+"%"+i;if(p.has(s))return;p.add(s)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:o.formatUrl(e)}let v=s.default.forwardRef(function(e,t){let n,r;let{href:o,as:p,children:v,prefetch:$,passHref:g,replace:M,shallow:x,scroll:_,locale:b,onClick:S,onMouseEnter:w,onTouchStart:j,legacyBehavior:D=!1}=e,k=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,D&&("string"==typeof n||"number"==typeof n)&&(n=s.default.createElement("a",null,n));let O=!1!==$,C=s.default.useContext(c.RouterContext),T=s.default.useContext(l.AppRouterContext),N=null!=C?C:T,L=!C,{href:E,as:P}=s.default.useMemo(()=>{if(!C){let e=y(o);return{href:e,as:p?y(p):e}}let[t,n]=u.resolveHref(C,o,!0);return{href:t,as:p?u.resolveHref(C,p):n||t}},[C,o,p]),H=s.default.useRef(E),I=s.default.useRef(P);D&&(r=s.default.Children.only(n));let A=D?r&&"object"==typeof r&&r.ref:t,[Y,W,U]=f.useIntersection({rootMargin:"200px"}),R=s.default.useCallback(e=>{(I.current!==P||H.current!==E)&&(U(),I.current=P,H.current=E),Y(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[P,A,E,U,Y]);s.default.useEffect(()=>{N&&W&&O&&m(N,E,P,{locale:b})},[P,E,W,b,O,null==C?void 0:C.locale,N]);let J={ref:R,onClick(e){D||"function"!=typeof S||S(e),D&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,n,r,i,o,a,c,l,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(n)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:o,locale:c,scroll:a}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};l?s.default.startTransition(p):p()}(e,N,E,P,M,x,_,b,L,O)},onMouseEnter(e){D||"function"!=typeof w||w(e),D&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&(O||!L)&&m(N,E,P,{locale:b,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){D||"function"!=typeof j||j(e),D&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&(O||!L)&&m(N,E,P,{locale:b,priority:!0,bypassPrefetchedCheck:!0})}};if(!D||g||"a"===r.type&&!("href"in r.props)){let F=void 0!==b?b:null==C?void 0:C.locale,Z=(null==C?void 0:C.isLocaleDomain)&&d.getDomainLocale(P,F,null==C?void 0:C.locales,null==C?void 0:C.domainLocales);J.href=Z||h.addBasePath(a.addLocale(P,F,null==C?void 0:C.defaultLocale))}return D?s.default.cloneElement(r,J):s.default.createElement("a",Object.assign({},k,J),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:a}=e,c=a||!s,[l,f]=r.useState(!1),[d,h]=r.useState(null);r.useEffect(()=>{if(s){if(!c&&!l&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:i,elements:s}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=o.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let i=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:s,elements:i},o.push(n),u.set(n,t),t}(n);return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),u.delete(r);let t=o.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&o.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!l){let r=i.requestIdleCallback(()=>f(!0));return()=>i.cancelIdleCallback(r)}},[d,c,n,t,l]);let p=r.useCallback(()=>{f(!1)},[]);return[h,l,p]};var r=n(7294),i=n(4686);let s="function"==typeof IntersectionObserver,u=new Map,o=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8697:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return y}});var r=n(5893),i=n(9008),s=n.n(i),u=n(4260),o=n(1943),a=n(1664),c=n.n(a),l=n(2421);let f=e=>{let{postSummary:t}=e;return(0,r.jsxs)("div",{className:"mt-6",children:[(0,r.jsx)("h3",{className:"text-4xl mb-1 hover:underline",children:(0,r.jsx)(c(),{href:"/post/".concat(t.pathname),children:t.title})}),(0,r.jsx)("div",{className:"mb-1",children:(0,r.jsx)("span",{className:"inline-block h-5 leading-5 mr-2 pr-2 ".concat(!!t.tags.length),children:(0,l.W)(t.publishDate)})})]})},d=()=>(0,r.jsxs)("div",{className:"my-12",children:[(0,r.jsx)("h1",{className:"mb-2 text-6xl font-extrabold",children:(0,r.jsx)(c(),{href:"/",children:"The work is undone."})}),(0,r.jsxs)("div",{className:"flex font-courier text-lg",children:[(0,r.jsx)("a",{href:"https://asukachikaru.com",rel:"noreferrer noopener",target:"_blank",className:"underline",children:"asukachikaru"}),"'s blog"]})]}),h=e=>{let{postSummaryList:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"The work is undone."}),(0,r.jsx)("meta",{name:"description",content:"asukachikaru's blog"}),(0,r.jsx)("meta",{property:"og:title",content:"The work is undone."}),(0,r.jsx)("meta",{property:"twitter:title",content:"The work is undone."})]}),(0,r.jsxs)(o.A,{children:[(0,r.jsx)(d,{}),(0,r.jsx)("div",{children:t.map(e=>(0,r.jsx)(f,{postSummary:e},e.id))}),(0,r.jsx)(u.$,{})]})]})},p=e=>{let{postSummaryList:t}=e;return(0,r.jsx)(h,{postSummaryList:t})};var m=!0,y=p},2421:function(e,t,n){"use strict";n.d(t,{W:function(){return i}}),n(7484);let r=e=>{switch(e){case"01":return"Jan.";case"02":return"Feb.";case"03":return"Mar.";case"04":return"Apr.";case"05":return"May";case"06":return"Jun.";case"07":return"Jul.";case"08":return"Aug.";case"09":return"Sep.";case"10":return"Oct.";case"11":return"Nov.";case"12":return"Dec.";default:return""}},i=e=>{let t=e.replace(/(\d{4})-\d{2}-\d{2}/,"$1"),n=e.replace(/\d{4}-(\d{2})-\d{2}/,"$1"),i=e.replace(/\d{4}-\d{2}-(\d{2})/,"$1");return"".concat(r(n)," ").concat(i,", ").concat(t)}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);