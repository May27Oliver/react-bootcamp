(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{160:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=b(r),d=n,f=l["".concat(a,".").concat(d)]||l[d]||s[d]||c;return r?o.a.createElement(f,i(i({ref:t},u),{},{components:r})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),c=(r(0),r(160)),a={title:"0-3 \u4f60\u8cb7\u7684\u4e0d\u53ea\u662f\u4e00\u672c\u66f8\uff0c\u800c\u662f\u4e00\u5957\u7dda\u4e0a\u8ab2\u7a0b",keywords:["React Hooks"]},i={unversionedId:"book/ch0/0-3",id:"book/ch0/0-3",isDocsHomePage:!1,title:"0-3 \u4f60\u8cb7\u7684\u4e0d\u53ea\u662f\u4e00\u672c\u66f8\uff0c\u800c\u662f\u4e00\u5957\u7dda\u4e0a\u8ab2\u7a0b",description:"\u9019\u4e0d\u662f\u4e00\u672c React \u5b57\u5178",source:"@site/docs/book/ch0/0-3.md",slug:"/book/ch0/0-3",permalink:"/react-bootcamp/docs/book/ch0/0-3",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/book/ch0/0-3.md",version:"current",sidebar:"book",previous:{title:"0-2 \u5c08\u6848\u6a94\u6848\u8207\u8cc7\u6e90\u4e0b\u8f09",permalink:"/react-bootcamp/docs/book/ch0/0-2"},next:{title:"1-1 \u7d71\u4e00\u958b\u767c\u74b0\u5883-\u8a3b\u518a CodePen \u5e33\u865f",permalink:"/react-bootcamp/docs/book/ch1/1-1"}},p=[{value:"\u9019\u4e0d\u662f\u4e00\u672c React \u5b57\u5178",id:"\u9019\u4e0d\u662f\u4e00\u672c-react-\u5b57\u5178",children:[]},{value:"\u53c3\u8207\u793e\u5718",id:"\u53c3\u8207\u793e\u5718",children:[]},{value:"\u63d0\u554f\u7684\u65b9\u5f0f",id:"\u63d0\u554f\u7684\u65b9\u5f0f",children:[]}],u={toc:p};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u9019\u4e0d\u662f\u4e00\u672c-react-\u5b57\u5178"},"\u9019\u4e0d\u662f\u4e00\u672c React \u5b57\u5178"),Object(c.b)("p",null,"\u672c\u66f8\u7684\u76ee\u7684\u975e\u5e38\u7c21\u55ae\uff0c\u5c31\u662f\u8b93\u8b80\u8005\u80fd\u5920\u5b78\u6703 React\uff0c\u4e86\u89e3 React \u4e2d\u91cd\u8981\u7684\u89c0\u5ff5\uff0c\u4f46\u5343\u842c\u4e0d\u8981\u628a\u9019\u672c\u66f8\u7576\u505a\u662f React \u7684\u767e\u79d1\u5168\u66f8\u6216\u5b57\u5178\uff0c\u5e0c\u671b\u80fd\u5920\u5728\u9019\u88e1\u627e\u5230\u6240\u6709\u548c React \u6709\u95dc\u7684\u6771\u897f\uff0c\u9019\u4e26\u4e0d\u662f\u9019\u672c\u66f8\u7684\u76ee\u7684\u3002"),Object(c.b)("p",null,"\u9019\u672c\u66f8\u7684\u76ee\u7684\u662f\u900f\u904e\u5c08\u6848\u7684\u5be6\u4f5c\uff0c\u8b93\u8b80\u8005\u80fd\u5920\u5c0d\u65bc React \u7684\u4f7f\u7528\u6709\u4e00\u500b\u5ee3\u6cdb\u7684\u7406\u89e3\uff0c\u6709\u9ede\u50cf\u662f\u63d0\u4f9b\u4f60\u4e00\u5f35\u5730\u5716\uff0c\u4f46\u4e0d\u6703\u628a\u6240\u6709\u5730\u5740\u5217\u51fa\u4f86\u544a\u8a34\u4f60\u8aaa\u9019\u500b\u5730\u5740\u6703\u5728\u5730\u5716\u4e0a\u7684\u54ea\u500b\u4f4d\u7f6e\uff0c\u800c\u662f\u6703\u5be6\u969b\u5e36\u4f60\u63a2\u8a2a\u5730\u5716\u4e0a\u8a31\u591a\u91cd\u8981\u7684\u666f\u9ede\uff0c\u7576\u4f60\u5c0d\u65bc\u9019\u500b\u74b0\u5883\u6709\u4e86\u4e00\u5b9a\u7684\u719f\u6089\u4e4b\u5f8c\uff0c\u672a\u4f86\u8b80\u8005\u5c31\u80fd\u5920\u4f9d\u5faa\u9019\u500b\u8108\u7d61\uff0c\u958b\u59cb\u6839\u64da\u81ea\u5df1\u7684\u8208\u8da3\u6216\u9700\u8981\uff0c\u63a2\u7d22\u5730\u5716\u4e0a\u4e0d\u540c\u7684\u666f\u9ede\uff0c\u900f\u904e\u81ea\u5df1\u7684\u80fd\u529b\u89e3\u6c7a\u4e0d\u540c\u7684\u554f\u984c\u3002"),Object(c.b)("h2",{id:"\u53c3\u8207\u793e\u5718"},"\u53c3\u8207\u793e\u5718"),Object(c.b)("p",null,"\u7531\u65bc\u5be6\u4f5c\u985e\u7684\u66f8\u7c4d\u6c92\u8fa6\u6cd5\u50cf\u5f71\u7247\u4e00\u6a23\uff0c\u80fd\u5920\u6e05\u695a\u7684\u5c55\u793a\u7a0b\u5f0f\u78bc\u8b8a\u5316\u7684\u904e\u7a0b\uff0c\u6709\u6642\u5f88\u96e3\u6e05\u695a\u63cf\u8ff0\u6574\u500b\u5be6\u4f5c\u8ab2\u7a0b\uff0c\u56e0\u6b64\u672c\u66f8\u6709\u642d\u914d Facebook \u7dda\u4e0a\u793e\u5718\uff0c\u5728\u9019\u500b\u793e\u5718\u4e2d\uff0c\u8b80\u8005\u5011\u9664\u4e86\u53ef\u4ee5\u5206\u4eab\u81ea\u5df1\u5b8c\u6210\u7684\u4f5c\u54c1\u4e4b\u5916\uff0c\u66f4\u91cd\u8981\u7684\u662f\u53ef\u4ee5\u628a\u5b78\u7fd2\u672c\u66f8\u904e\u7a0b\u4e2d\uff0c\u4efb\u4f55\u4e0d\u6e05\u695a\u7684\u5730\u65b9\u5728\u4e0a\u9762\u63d0\u554f\uff0c\u7b46\u8005\u9664\u4e86\u6703\u5b9a\u671f\u56de\u8986\u5916\uff0c\u540c\u6642\u4e5f\u5c07\u6703\u9069\u7576\u63d0\u4f9b\u5f71\u97f3\u8cc7\u6e90\u4f5c\u70ba\u672c\u66f8\u5167\u5bb9\u7684\u88dc\u5145\u3002"),Object(c.b)("p",null,"\u56e0\u6b64\uff0c\u8acb\u900f\u904e\u4e0b\u65b9\u9023\u7d50\uff0c\u52a0\u5165\u7dda\u4e0a\u793e\u5718\uff1a",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.facebook.com/groups/274607427104369/"}),"https://www.facebook.com/groups/274607427104369/"),"\u3002"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/hJUwZ8p.png",alt:"Imgur"}))),Object(c.b)("h2",{id:"\u63d0\u554f\u7684\u65b9\u5f0f"},"\u63d0\u554f\u7684\u65b9\u5f0f"),Object(c.b)("p",null,"\u9664\u4e86\u5c0d\u65bc\u66f8\u7c4d\u5167\u5bb9\u7684\u63cf\u8ff0\u4e0d\u6e05\u3001\u6982\u5ff5\u4e0d\u61c2\u7b49\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u793e\u5718\u4e0a\u6f84\u6e05\u4e4b\u5916\uff0c\u82e5\u64b0\u5beb\u7a0b\u5f0f\u78bc\u5be6\u4f5c\u529f\u80fd\u6642\u78b0\u5230\u7684\u554f\u984c\uff0c\u4f8b\u5982\uff0c\u756b\u9762\u7121\u6cd5\u5982\u66f8\u4e2d\u63cf\u8ff0\u5448\u73fe\u6642\uff0c\u540c\u6a23\u53ef\u4ee5\u5728\u793e\u5718\u4e2d\u767c\u554f\uff0c\u4f46\u56e0\u70ba\u9694\u7a7a\u6293\u85e5\u5f88\u96e3\u627e\u5230\u554f\u984c\u7684\u6838\u5fc3\uff0c\u56e0\u6b64\u82e5\u662f\u9700\u8981\u65bc\u793e\u5718\u4e2d\u8acb\u5176\u4ed6\u6210\u54e1\u5011\u4e00\u540c\u5354\u52a9\u627e\u51fa\u7a0b\u5f0f\u78bc\u554f\u984c\uff0c",Object(c.b)("strong",{parentName:"p"},"\u8acb\u52d9\u5fc5\u5c07\u7a0b\u5f0f\u539f\u59cb\u78bc\u653e\u7f6e\u65bc CodePen \u6216 CodeSandbox \u9019\u985e\u7dda\u4e0a\u7de8\u8f2f\u5668\uff0c\u8b93\u6210\u54e1\u5011\u53ef\u4ee5\u76f4\u63a5\u900f\u904e\u6b64\u7dda\u4e0a\u7de8\u8f2f\u5668\u89e3\u6c7a\u8207\u91d0\u6e05\u6240\u78b0\u5230\u7684\u554f\u984c"),"\u3002"))}b.isMDXComponent=!0}}]);