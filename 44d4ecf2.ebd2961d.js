(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{130:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var b=c.a.createContext({}),l=function(e){var n=c.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return c.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},m=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,h=u["".concat(a,".").concat(m)]||u[m]||s[m]||o;return t?c.a.createElement(h,i(i({ref:n},b),{},{components:t})):c.a.createElement(h,i({ref:n},b))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var b=2;b<o;b++)a[b]=t[b];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),c=t(7),o=(t(0),t(130)),a={title:"1-4 \u7bad\u982d\u51fd\u5f0f\uff08arrow functions\uff09",keywords:["JavaScript","React Hooks"]},i={unversionedId:"book/ch1/1-4",id:"book/ch1/1-4",isDocsHomePage:!1,title:"1-4 \u7bad\u982d\u51fd\u5f0f\uff08arrow functions\uff09",description:"\u7bad\u982d\u51fd\u5f0f\uff08arrow functions\uff09\u662f\u5728 ES6 \u4e2d\u53e6\u4e00\u7a2e\u66f4\u7c21\u4fbf\u4f86\u5b9a\u7fa9\u51fd\u5f0f\u7684\u8a9e\u6cd5\u3002\u50b3\u7d71\u4e0a\u6211\u5011\u6703\u9019\u6a23\u5b9a\u7fa9 JavaScript \u7684\u51fd\u5f0f\uff1a",source:"@site/docs/book/ch1/1-4.md",slug:"/book/ch1/1-4",permalink:"/react-bootcamp/docs/book/ch1/1-4",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/book/ch1/1-4.md",version:"current",sidebar:"book",previous:{title:"1-3 \u6a23\u677f\u5b57\u9762\u503c\uff08Template literals\uff0fTemplate strings\uff09",permalink:"/react-bootcamp/docs/book/ch1/1-3"},next:{title:"1-5 \u89e3\u69cb\u8ce6\u503c\u548c\u7269\u4ef6\u5c6c\u6027\u540d\u7a31\u7e2e\u5beb",permalink:"/react-bootcamp/docs/book/ch1/1-5"}},p=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",children:[]},{value:"\u7576\u51fd\u5f0f\u53ea\u6709\u4e00\u500b\u53c3\u6578\u6642\u53ef\u4ee5\u7701\u7565\u53c3\u6578\u5916\u7684\u5c0f\u62ec\u865f",id:"\u7576\u51fd\u5f0f\u53ea\u6709\u4e00\u500b\u53c3\u6578\u6642\u53ef\u4ee5\u7701\u7565\u53c3\u6578\u5916\u7684\u5c0f\u62ec\u865f",children:[]},{value:"\u7576\u51fd\u5f0f\u6703\u76f4\u63a5\u56de\u50b3\u503c\u6642\uff0c\u53ef\u4ee5\u7701\u7565\u7bad\u982d\u5f8c\u7684\u5927\u62ec\u865f",id:"\u7576\u51fd\u5f0f\u6703\u76f4\u63a5\u56de\u50b3\u503c\u6642\uff0c\u53ef\u4ee5\u7701\u7565\u7bad\u982d\u5f8c\u7684\u5927\u62ec\u865f",children:[]}],b={toc:p};function l(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u7bad\u982d\u51fd\u5f0f\uff08arrow functions\uff09\u662f\u5728 ES6 \u4e2d\u53e6\u4e00\u7a2e\u66f4\u7c21\u4fbf\u4f86\u5b9a\u7fa9\u51fd\u5f0f\u7684\u8a9e\u6cd5\u3002\u50b3\u7d71\u4e0a\u6211\u5011\u6703\u9019\u6a23\u5b9a\u7fa9 JavaScript \u7684\u51fd\u5f0f\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function showIphonePrice(currentPrice) {\n  return `The iPhone is ${currentPrice} now.`;\n}\n\nconsole.log(showIphonePrice(26900));\n// The iPhone is 26900 now.\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udca1 ECMAScript \u662f\u4ec0\u9ebc\uff1fES6 \u53c8\u662f\u4ec0\u9ebc\uff1f\nECMAScript \u53ef\u4ee5\u8996\u4f5c JavaScript \u9019\u5957\u7a0b\u5f0f\u8a9e\u8a00\u7684\u898f\u7bc4\uff0c\u5728\u9019\u7576\u4e2d\u6703\u5b9a\u7fa9\u6240\u6709\u8207 JavaScript \u76f8\u95dc\u7684\u8a9e\u6cd5\u548c\u898f\u683c\uff0c\u8a9e\u6cd5\u6a19\u6e96\u8a02\u5b9a\u5f8c\u518d\u7531\u5404\u700f\u89bd\u5668\u53bb\u5be6\u4f5c\u5e95\u5c64\u7684\u529f\u80fd\u3002"),Object(o.b)("p",{parentName:"blockquote"},"ES6 \u7684\u5168\u540d\u5247\u662f\u6307 ECMAScript 6\uff0c\u5b83\u6307\u7684\u662f\u7b2c\u516d\u7248\u7684 ECMAScript\uff0c\u800c\u9019\u500b\u7248\u672c\u63a8\u51fa\u6642\u64f4\u589e\u4e86 JavaScript \u5927\u91cf\u7684\u8a9e\u6cd5\uff0c\u56e0\u6b64\u53ef\u4ee5\u8996\u4f5c JavaScript \u975e\u5e38\u91cd\u8981\u7684\u300c\u5a01\u529b\u52a0\u5f37\u7248\u300d\uff0c\u53c8\u56e0\u70ba\u5b83\u63a8\u51fa\u7684\u6642\u9593\u662f\u5728 2015 \u5e74\uff0c\u56e0\u6b64\u53c8\u88ab\u7a31\u4f5c ES2015\uff08ECMAScript 2015\uff09\u3002"),Object(o.b)("p",{parentName:"blockquote"},"2015 \u5e74\u5f8c\u96d6\u7136\u6bcf\u5e74\u90fd\u6709\u6301\u7e8c\u63a8\u51fa\u65b0\u7248\u7684 ECMAScript\uff08\u4f8b\u5982\uff0c ES7\u3001ES8\u3001...\uff09\uff0c\u4f46\u591a\u662f\u5c0f\u5e45\u5ea6\u7684\u8a9e\u6cd5\u64f4\u589e\u6216\u52a0\u5f37\uff0c\u56e0\u6b64\u6709\u4e9b\u958b\u767c\u8005\u6703\u4ee5 ES6 \u4f86\u7d71\u7a31 2015 \u5e74\u5f8c\u7684\u6240\u6709 JavaScript \u65b0\u8a9e\u6cd5\u3002")),Object(o.b)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),Object(o.b)("p",null,"\u5728 ES6 \u4e2d\u5247\u53ef\u4ee5\u7528\u7bad\u982d\u51fd\u5f0f\u8b93\u5b83\u8b8a\u5f97\u66f4\u7cbe\u7c21\u3002\u7bad\u982d\u51fd\u5f0f\u7684\u4f7f\u7528\u6703\u628a\u51fd\u5f0f\u7684\u53c3\u6578\u653e\u5728\u524d\u9762\u7684\u5c0f\u62ec\u865f ",Object(o.b)("inlineCode",{parentName:"p"},"()")," \u4e2d\uff0c\u4e2d\u9593\u642d\u914d ",Object(o.b)("inlineCode",{parentName:"p"},"=>"),"\uff0c\u539f\u672c\u51fd\u5f0f\u57f7\u884c\u7684\u5167\u5bb9\u5247\u653e\u5728\u6700\u5f8c\u7684\u5927\u62ec\u865f ",Object(o.b)("inlineCode",{parentName:"p"},"{}")," \u4e2d\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const showIphonePrice = (currentPrice) => {\n  return `The iPhone is ${currentPrice} now.`;\n};\n\nconsole.log(showIphonePrice(26900)); // The iPhone is 26900 now.\n")),Object(o.b)("h2",{id:"\u7576\u51fd\u5f0f\u53ea\u6709\u4e00\u500b\u53c3\u6578\u6642\u53ef\u4ee5\u7701\u7565\u53c3\u6578\u5916\u7684\u5c0f\u62ec\u865f"},"\u7576\u51fd\u5f0f\u53ea\u6709\u4e00\u500b\u53c3\u6578\u6642\u53ef\u4ee5\u7701\u7565\u53c3\u6578\u5916\u7684\u5c0f\u62ec\u865f"),Object(o.b)("p",null,"\u7bad\u982d\u51fd\u5f0f\u7684\u5beb\u6cd5\u6709\u6642\u6703\u8b93\u521d\u5b78\u8005\u611f\u5230\u56f0\u60d1\uff0c\u56e0\u70ba\u5728\u4e0d\u540c\u7684\u60c5\u6cc1\u4e0b\u53ef\u4ee5\u7c21\u5316\u8a9e\u6cd5\uff0c\u4f46\u5be6\u969b\u4e0a\u8868\u9054\u7684\u662f\u76f8\u540c\u7684\u610f\u601d\u3002\u4ee5\u4e0a\u9762\u7684\u51fd\u5f0f\u70ba\u4f8b\uff0c\u7576\u7bad\u982d\u51fd\u5f0f\u4e2d\u7684\u53c3\u6578\u53ea\u6709\u4e00\u500b\u6642\uff0c\u53ef\u4ee5\u7c21\u5316\u5916\u5c64\u7684\u5c0f\u62ec\u865f\uff0c\u529f\u80fd\u662f\u4e00\u6a23\u7684\uff0c\u8b8a\u6210\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// \u7576\u51fd\u5f0f\u53c3\u6578\u53ea\u6709\u4e00\u500b\u6642\uff0c\u53ef\u4ee5\u7701\u7565\u5c0f\u62ec\u865f\uff0c\u56e0\u6b64\u9019\u88e1 currentPrice \u5916\u7684\u5c0f\u62ec\u865f\u53ef\u4ee5\u7701\u7565\nconst showIphonePrice = (currentPrice) => {\n  return `The iPhone is ${currentPrice} now.`;\n};\n")),Object(o.b)("h2",{id:"\u7576\u51fd\u5f0f\u6703\u76f4\u63a5\u56de\u50b3\u503c\u6642\uff0c\u53ef\u4ee5\u7701\u7565\u7bad\u982d\u5f8c\u7684\u5927\u62ec\u865f"},"\u7576\u51fd\u5f0f\u6703\u76f4\u63a5\u56de\u50b3\u503c\u6642\uff0c\u53ef\u4ee5\u7701\u7565\u7bad\u982d\u5f8c\u7684\u5927\u62ec\u865f"),Object(o.b)("p",null,"\u5982\u679c\u5728\u7bad\u982d\u51fd\u5f0f\u4e2d\u53ea\u6703\u56de\u50b3\u4e00\u500b\u503c\u800c\u4e0d\u9700\u8981\u505a\u5176\u4ed6\u64cd\u4f5c\u7684\u8a71\uff0c\u751a\u81f3\u53ef\u4ee5\u76f4\u63a5\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"=>")," \u5f8c\u9762\u52a0\u4e0a\u56de\u50b3\u503c\uff0c\u4f8b\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// \u51fd\u5f0f\u4e0d\u9700\u8981\u505a\u5176\u4ed6\u64cd\u4f5c\u76f4\u63a5\u56de\u50b3\u6642\uff0c\u53ef\u4ee5\u7701\u7565 => \u5f8c\u7684 { }\nconst showIphonePrice = (currentPrice) => `The iPhone is ${currentPrice} now.`;\n\nconsole.log(showIphonePrice(26900)); // The iPhone is 26900 now.\n")),Object(o.b)("p",null,"\u6709\u4e9b\u6642\u5019\u958b\u767c\u8005\u6703\u900f\u904e\u7bad\u982d\u51fd\u5f0f\u76f4\u63a5\u56de\u50b3\u7269\u4ef6\uff0c\u9019\u6642\u5019\u56e0\u70ba\u51fd\u5f0f\u76f4\u63a5\u56de\u50b3\u503c\u6642\u53ef\u4ee5\u7701\u7565 ",Object(o.b)("inlineCode",{parentName:"p"},"=>")," \u5f8c\u7684\u5927\u62ec\u865f\uff0c\u4f46\u56e0\u70ba\u7269\u4ef6\u672c\u8eab\u7684\u8a9e\u6cd5\u5c31\u662f\u4f7f\u7528\u5927\u62ec\u865f\uff0c",Object(o.b)("strong",{parentName:"p"},"\u56e0\u6b64\u82e5\u60f3\u8981\u76f4\u63a5\u56de\u50b3\u4e00\u500b\u7269\u4ef6\uff0c\u7269\u4ef6\u5916\u9762\u5fc5\u9808\u5305\u4e0a\u5c0f\u62ec\u865f\uff0c\u8b93 JavaScript \u53ef\u4ee5\u77e5\u9053\u5927\u62ec\u865f\u5167\u662f\u4e00\u500b\u7269\u4ef6"),"\uff0c\u50cf\u662f\u9019\u6a23\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// \u82e5\u7bad\u982d\u51fd\u5f0f\u8981\u76f4\u63a5\u56de\u50b3\u7684\u662f\u500b\u7269\u4ef6\uff0c\u7269\u4ef6\u5916\u570d\u9700\u4f7f\u7528\u5c0f\u62ec\u865f\u5305\u8d77\u4f86\nconst showIphonePrice = () => ({\n  deviceName: 'iPhone 11',\n  price: 24900,\n  brand: 'Apple',\n  merchants: ['apple store', 'pchome', 'momo', 'shoppe'],\n});\n\nconsole.log(showIphonePrice()); // { deviceName: 'Iphone 11', ... }\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u7559\u610f\uff1a\u7bad\u982d\u51fd\u5f0f\u4e0d\u55ae\u55ae\u53ea\u662f\u7cbe\u7c21\u5beb\u6cd5\u7684\u51fd\u5f0f\u5b9a\u7fa9\u8a9e\u6cd5\n\u8a31\u591a\u4eba\u8aa4\u4ee5\u70ba\u7bad\u982d\u51fd\u5f0f\u53ea\u662f\u8b93\u958b\u767c\u8005\u53ef\u4ee5\u7528\u66f4\u7c21\u6f54\u7684\u65b9\u5f0f\u4f86\u5b9a\u7fa9\u51fd\u5f0f\uff0c\u4f46\u6709\u6642\u932f\u7528\u4e86\u7bad\u982d\u51fd\u5f0f\u6703\u9020\u6210\u7a0b\u5f0f\u932f\u8aa4\u3002\u9019\u662f\u56e0\u70ba\u5728 JavaScript \u4e2d\u6709\u4e00\u500b\u95dc\u9375\u5b57\u7a31\u4f5c ",Object(o.b)("inlineCode",{parentName:"p"},"this"),"\uff0c\u800c\u7bad\u982d\u51fd\u5f0f\u6703\u6539\u8b8a\u9019\u500b\u95dc\u9375\u5b57 ",Object(o.b)("inlineCode",{parentName:"p"},"this")," \u6240\u6307\u7a31\u5230\u7684\u5c0d\u8c61\uff0c\u9020\u6210\u4f7f\u7528\u539f\u672c\u51fd\u5f0f\u8a9e\u6cd5\u548c\u7bad\u982d\u51fd\u5f0f\u8a9e\u6cd5\u6709\u4e0d\u540c\u7684\u7d50\u679c\u3002\u56e0\u70ba\u591a\u6578\u7684\u6642\u5019\u6211\u5011\u4e0d\u6703\u6d89\u53ca\u5230\u9019\u6a23\u7684\u554f\u984c\uff0c\u4e14 ",Object(o.b)("inlineCode",{parentName:"p"},"this")," \u7684\u8aaa\u660e\u8207\u672c\u66f8\u7684\u95dc\u806f\u8f03\u4f4e\uff0c\u6240\u4ee5\u82e5\u6709\u9700\u8981\u5247\u53ef\u4ee5\u5230\u7db2\u8def\u4e0a\u5c0b\u627e\u66f4\u591a\u300c\u7bad\u982d\u51fd\u5f0f\u8207 this \u9593\u95dc\u806f\u300d\u7684\u8aaa\u660e\u3002")))}l.isMDXComponent=!0}}]);