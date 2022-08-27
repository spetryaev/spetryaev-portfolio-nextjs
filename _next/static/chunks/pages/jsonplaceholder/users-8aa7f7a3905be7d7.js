(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[717],{285:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jsonplaceholder/users",function(){return c(9608)}])},9721:function(a,b,c){"use strict";c.d(b,{Z:function(){return h}});var d=c(5893);c(7294);var e=c(9008),f=c.n(e),g=function(a){var b=a.title,c=a.children;return(0,d.jsxs)(f(),{children:[(0,d.jsxs)("title",{children:[b&&"".concat(b," | "),"Hello Next.js SSG"]}),c]})},h=g},7487:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(5893);c(7294);var e=c(6010),f=c(7058),g=c(9721),h=c(5115),i="".concat("/nextjs-ssg"),j={header:"flex items-center border border-gray-200 min-h-[60px] w-full px-4",container:"p-0 flex flex-col min-h-screen",main:"px-4 flex flex-col flex-1",footer:"mt-6 w-full h-16 border-t border-gray-200 flex justify-center items-center space-x-2",footerLink:"flex justify-center items-center",footerLogo:"ml-2 h-4"},k=function(a){var b,c=a.htmlHead,k=void 0===c?(0,d.jsx)(g.Z,{}):c,l=a.header,m=a.children,n=a.className,o=a.containerClassName,p=a.headerClassName,q=(0,f.$)().t;return(0,d.jsxs)(d.Fragment,{children:[k,(0,d.jsxs)("div",{className:(0,e.Z)(j.container,o),children:[l&&(0,d.jsx)("header",{className:(0,e.Z)(j.header,p),children:l}),(0,d.jsx)("main",{className:(0,e.Z)(j.main,n),children:m}),(0,d.jsxs)("footer",{className:j.footer,children:[(0,d.jsxs)(h.Z,{className:j.footerLink,href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",children:["".concat(q("Powered by")," "),(0,d.jsx)("img",{src:(b="vercel.svg",i?"".concat(i,"/").concat(b):"/".concat(b)),alt:"Vercel Logo",className:j.footerLogo})]}),(0,d.jsx)(h.Z,{href:"https://nextjs.org/",children:(0,d.jsx)("img",{src:"https://img.shields.io/badge/-NextJS-000?&logo=next.js",alt:"Next.js Logo"})}),(0,d.jsx)(h.Z,{href:"https://tailwindcss.com/",children:(0,d.jsx)("img",{src:"https://img.shields.io/badge/-TailwindCSS-000?&logo=tailwindcss",alt:"TailwindCSS Logo"})})]})]})]})}},2727:function(a,b,c){"use strict";c.d(b,{Z:function(){return j}});var d=c(5893);c(7294);var e=c(9721),f=c(7058),g=c(4416),h=function(){var a,b=(0,f.$)().t;return(0,d.jsx)(g.u,{items:[{label:(a=b)("Home"),href:"/"},{label:"Json Placeholder",href:"/jsonplaceholder"},{label:a("Users"),href:"/jsonplaceholder/users"},]})},i=c(7487),j=function(a){var b=a.children,c=a.className,f=a.containerClassName;return(0,d.jsx)(i.Z,{children:b,className:c,containerClassName:f,header:(0,d.jsx)(h,{}),htmlHead:(0,d.jsx)(e.Z,{title:"JSON Placeholder"})})}},2927:function(a,b,c){"use strict";c.d(b,{Z:function(){return s}});var d=c(4924),e=c(6042),f=c(9396),g=c(9534),h=c(603),i=c(5893),j=c(7294),k=c(1664),l=c.n(k),m=c(1163),n=c(6010),o=c(3389),p=c.n(o),q=function(a,b){return a===b},r=j.forwardRef(function(a,b){var c=(0,h.Z)(j.useState(!1),2),k=c[0],o=c[1],r=(0,m.useRouter)().pathname,s=a.className,t=a.activeClassName,u=a.checkIsActive,v=void 0===u?q:u,w=a.href,x=a.as,y=a.replace,z=a.scroll,A=a.shallow,B=a.passHref,C=a.prefetch,D=a.locale,E=(0,g.Z)(a,["className","activeClassName","checkIsActive","href","as","replace","scroll","shallow","passHref","prefetch","locale"]);j.useEffect(function(){o(v(r,w))},[r,w,v]);var F=(0,f.Z)((0,e.Z)({},E),{className:(0,n.Z)(p().link,s,(0,d.Z)({},"".concat(void 0===t?"active":t),k))});return(0,i.jsx)(l(),{href:w,as:x,replace:y,scroll:z,shallow:A,passHref:B,prefetch:C,locale:D,children:(0,i.jsx)("a",(0,f.Z)((0,e.Z)({},F),{ref:b}))})});r.displayName="InternalLink";var s=r},5115:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(6042),e=c(9396),f=c(9534),g=c(5893),h=c(7294).forwardRef(function(a,b){var c=a.target,h=a.rel,i=a.href,j=a.children,k=(0,f.Z)(a,["target","rel","href","children"]);return c="_blank",h="noopener noreferrer",(0,g.jsx)("a",(0,e.Z)((0,d.Z)({},k),{ref:b,target:c,rel:h,href:i,children:j||i}))});h.displayName="TargetBlankLink";var i=h},4416:function(a,b,c){"use strict";c.d(b,{u:function(){return s}});var d=c(5893),e=c(7294),f=c(2927),g=c(4924),h=c(603),i=c(6010),j=c(7058),k=c(195),l=c(7551),m=c.n(l),n=/^[a-z]{2}-[a-z]{2}$/i,o=function(a){var b=a.className,c=(0,j.$)().i18n,f=(0,h.Z)(e.useState(c.language),2),l=f[0],o=f[1];e.useEffect(function(){return c.on("languageChanged",o),window&&window.setTimeout(function(){var a=c.language;n.test(a)&&(a=a.split("-")[0]),o(a)}),function(){c.off("languageChanged",o)}},[c]);var p=function(a){(0,k.J1)(a).then(function(){return c.changeLanguage(a)})},q=e.useCallback(function(a){return function(){return l!==a?p(a):void 0}},[l]);return(0,d.jsx)("div",{className:(0,i.Z)(m().container,b),children:(0,d.jsx)("ul",{children:k.J3.map(function(a,b){return(0,d.jsx)("li",{className:(0,i.Z)(m().option,(0,g.Z)({},"".concat(m().selected),a===l)),onClick:q(a),children:a},b)})})})},p=o,q=c(4763),r=c.n(q),s=function(a){var b=a.label,c=a.items;return(0,d.jsxs)("div",{className:r().nav,children:[b&&(0,d.jsx)("div",{className:r().label,children:b}),(0,d.jsx)("ul",{children:(void 0===c?[]:c).map(function(a,b){var c=a.label,e=a.href;return(0,d.jsx)("li",{children:(0,d.jsx)(f.Z,{activeClassName:r().activeLink,href:e,children:c})},b)})}),(0,d.jsx)("div",{className:r().spacer}),(0,d.jsx)(p,{})]})}},9608:function(a,b,c){"use strict";c.r(b),c.d(b,{Users:function(){return i},"__N_SSG":function(){return h}});var d=c(5893);c(7294);var e=c(7058),f=c(2727),g=c(2927),h=!0,i=function(a){var b=a.users,c=(0,e.$)().t;return(0,d.jsxs)(f.Z,{className:"space-y-4",children:[(0,d.jsx)("h1",{className:"mt-8 text-xl",children:c("Users")}),(0,d.jsx)("ul",{className:"list-inside list-disc",children:b.map(function(a){return(0,d.jsx)("li",{children:(0,d.jsx)(g.Z,{href:"/jsonplaceholder/users/".concat(a.id),children:a.name})},a.id)})}),(0,d.jsx)(g.Z,{href:"/jsonplaceholder",children:c("Back")})]})};b.default=i},7551:function(a){a.exports={container:"ChangeLanguage_container__wc7Ay",option:"ChangeLanguage_option__E0Ve3",selected:"ChangeLanguage_selected__JJhXI"}},3389:function(a){a.exports={link:"InternalLink_link__rEVyt"}},4763:function(a){a.exports={nav:"TopNavBase_nav__LG9uP",label:"TopNavBase_label__PDyH4",activeLink:"TopNavBase_activeLink__hHp96",spacer:"TopNavBase_spacer__UBcKB"}}},function(a){a.O(0,[441,774,888,179],function(){var b;return a(a.s=285)}),_N_E=a.O()}])