(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{185:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),i=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=i(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),m=i(a),d=n,j=m["".concat(c,".").concat(d)]||m[d]||s[d]||r;return a?o.a.createElement(j,l(l({ref:t},b),{},{components:a})):o.a.createElement(j,l({ref:t},b))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<r;b++)c[b]=a[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return i}));var n=a(3),o=a(7),r=(a(0),a(185)),c={title:"4-7 \u5feb\u901f\u4e86\u89e3\u5404\u5143\u4ef6\u7684\u8cc7\u6599\u72c0\u614b - React Developer Tools",keywords:["react devtools"]},l={unversionedId:"book/ch4/4-7",id:"book/ch4/4-7",isDocsHomePage:!1,title:"4-7 \u5feb\u901f\u4e86\u89e3\u5404\u5143\u4ef6\u7684\u8cc7\u6599\u72c0\u614b - React Developer Tools",description:"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1ainstall-react-devtools\u3002",source:"@site/docs/book/ch4/4-7.md",slug:"/book/ch4/4-7",permalink:"/react-bootcamp/docs/book/ch4/4-7",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/book/ch4/4-7.md",version:"current",sidebar:"book",previous:{title:"4-6 \u4f7f\u7528 emotion \u5be6\u4f5c\u6df1\u8272\u4e3b\u984c",permalink:"/react-bootcamp/docs/book/ch4/4-6"},next:{title:"5-1 \u7533\u8acb\u4f7f\u7528\u4e2d\u592e\u6c23\u8c61\u5c40 API",permalink:"/react-bootcamp/docs/book/ch5/5-1"}},p=[{value:"\u55ae\u5143\u6838\u5fc3",id:"\u55ae\u5143\u6838\u5fc3",children:[]},{value:"\u5b89\u88dd React Developer Tools",id:"\u5b89\u88dd-react-developer-tools",children:[]},{value:"\u6aa2\u8996\u9801\u9762\u5167\u7684 React \u5143\u4ef6",id:"\u6aa2\u8996\u9801\u9762\u5167\u7684-react-\u5143\u4ef6",children:[]},{value:"\u6aa2\u8996\u548c\u4fee\u6539 React \u5143\u4ef6\u5167\u7684\u8cc7\u6599\u72c0\u614b",id:"\u6aa2\u8996\u548c\u4fee\u6539-react-\u5143\u4ef6\u5167\u7684\u8cc7\u6599\u72c0\u614b",children:[]},{value:"\u63db\u4f60\u4e86\uff01\u4f7f\u7528 React Developer Tools \u4f86\u6539\u8b8a\u8cc7\u6599\u72c0\u614b",id:"\u63db\u4f60\u4e86\uff01\u4f7f\u7528-react-developer-tools-\u4f86\u6539\u8b8a\u8cc7\u6599\u72c0\u614b",children:[]}],b={toc:p};function i(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1a",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/install-react-devtools"}),Object(r.b)("inlineCode",{parentName:"a"},"install-react-devtools")),"\u3002"),Object(r.b)("h2",{id:"\u55ae\u5143\u6838\u5fc3"},"\u55ae\u5143\u6838\u5fc3"),Object(r.b)("p",null,"\u9019\u500b\u55ae\u5143\u7684\u4e3b\u8981\u76ee\u6a19\u5305\u542b\uff1a"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u80fd\u5920\u900f\u904e React Developer Tools \u6aa2\u8996\u4e26\u4fee\u6539\u5143\u4ef6\u5167\u7684\u8cc7\u6599\u72c0\u614b")),Object(r.b)("hr",null),Object(r.b)("p",null,"\u5728\u6211\u5011\u5b8c\u6210\u7684\u5e7e\u500b\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f\u4e2d\uff0c\u4e0d\u8ad6\u662f\u8a08\u6578\u5668\u3001\u7db2\u901f\u55ae\u4f4d\u63db\u7b97\u5668\u3001\u6216\u662f\u300c\u81fa\u7063\u597d\u5929\u6c23\u300d\uff0c\u4f60\u6703\u611f\u53d7\u5230\u6bcf\u500b React \u5143\u4ef6\u5167\u90e8\u90fd\u53ef\u4ee5\u4fdd\u6709\u81ea\u5df1\u7684\u8cc7\u6599\u72c0\u614b\uff0c\u9019\u4e9b\u72c0\u614b\u6211\u5011\u5f97\u900f\u904e\u7a0b\u5f0f\u53bb\u6aa2\u8996\uff0c\u6c92\u6709\u8fa6\u6cd5\u900f\u904e\u700f\u89bd\u5668\u76f4\u63a5\u4e86\u89e3\u6bcf\u500b React \u5143\u4ef6\u5167\u90e8\u7684\u8cc7\u6599\u72c0\u614b\u3002"),Object(r.b)("p",null,"\u597d\u5728 React \u63d0\u4f9b\u4e86\u53cb\u5584\u7684\u958b\u767c\u8005\u5de5\u5177\uff0c\u8b93\u958b\u767c\u8005\u53ea\u9700\u8981\u5f9e\u700f\u89bd\u5668\u5c31\u53ef\u4ee5\u53bb\u6aa2\u8996\u548c\u4fee\u6539\u6bcf\u500b React \u5143\u4ef6\u5167\u5404\u81ea\u7684\u8cc7\u6599\u72c0\u614b\u3002"),Object(r.b)("h2",{id:"\u5b89\u88dd-react-developer-tools"},"\u5b89\u88dd React Developer Tools"),Object(r.b)("p",null,"React \u958b\u767c\u8005\u5de5\u5177\u652f\u63f4 ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"}),"Chrome")," \u548c ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://addons.mozilla.org/zh-TW/firefox/addon/react-devtools/"}),"Firefox")," \u700f\u89bd\u5668\uff0c\u5206\u5225\u53ef\u4ee5\u5728\u5404\u81ea\u7684\u64f4\u5145\u5957\u4ef6\u5546\u5e97\u4e0b\u8f09\uff08",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"}),"Chrome \u64f4\u5145\u5957\u4ef6"),"\u3001",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://addons.mozilla.org/zh-TW/firefox/addon/react-devtools/"}),"Firefox \u64f4\u5145\u5957\u4ef6"),"\uff09\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Chrome\uff1a",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"}),"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi")),Object(r.b)("li",{parentName:"ul"},"Firefox\uff1a",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://addons.mozilla.org/zh-TW/firefox/addon/react-devtools/"}),"https://addons.mozilla.org/zh-TW/firefox/addon/react-devtools/"))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/hnn2vJ3.png",alt:"Imgur"}))),Object(r.b)("p",null,"\u73fe\u5728\u5c31\u8acb\u4f60\u5148\u6839\u64da\u7fd2\u6163\u4f7f\u7528\u7684\u700f\u89bd\u5668\u4e0b\u8f09\u5c0d\u61c9\u7684 React \u958b\u767c\u8005\u5de5\u5177\uff0c\u5728\u9019\u88e1\u6211\u5011\u5c31\u4ee5 Chrome \u70ba\u4f8b\u4f86\u8aaa\u660e\u4f7f\u7528\u65b9\u5f0f\u3002"),Object(r.b)("h2",{id:"\u6aa2\u8996\u9801\u9762\u5167\u7684-react-\u5143\u4ef6"},"\u6aa2\u8996\u9801\u9762\u5167\u7684 React \u5143\u4ef6"),Object(r.b)("p",null,"\u5b89\u88dd\u597d React Developer Tools \u4e4b\u5f8c\uff0c\u518d\u6b21\u900f\u904e ",Object(r.b)("inlineCode",{parentName:"p"},"npm start")," \u555f\u52d5\u6211\u5011\u7684\u300c\u81fa\u7063\u597d\u5929\u6c23\u300d\uff0c\u63a5\u8457\u6253\u958b\u700f\u89bd\u5668\u7684\u958b\u767c\u8005\u5de5\u5177\u5f8c\uff0c\u9ede\u64ca\u986f\u793a\u66f4\u591a\u7684\u300c>>\u300d\u6309\u9215\u5f8c\uff0c\u6703\u770b\u5230\u591a\u4e86\u5169\u500b\u540d\u70ba ",Object(r.b)("inlineCode",{parentName:"p"},"Components")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"Profiler")," \u7684\u9801\u7c64\uff1a"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/nEv25Pi.png",alt:"Imgur"}))),Object(r.b)("p",null,"\u5148\u4f86\u9ede\u9078 Components \u7684\u90e8\u5206\uff0c\u5f9e\u4e2d\u53ef\u4ee5\u770b\u5230 React \u958b\u767c\u8005\u5de5\u5177\u6703\u5217\u51fa\u8a72\u9801\u9762\u7684\u6240\u6709 React \u5143\u4ef6\u3002\u9019\u88e1\u4f60\u6703\u770b\u5230\u6700\u4e0a\u65b9\u53ef\u4ee5\u770b\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"App"),"\uff0c\u9019\u4e5f\u5c31\u662f\u6211\u5011\u76ee\u524d\u7684 App \u5143\u4ef6\u3002\u53e6\u5916\u4f60\u6703\u767c\u73fe\u88e1\u9762\u9084\u591a\u4e86\u8a31\u591a\u4e0d\u540c\u7684\u5143\u4ef6\uff0c\u50cf\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"ThemeProvider"),"\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"Context.Consumer")," \u7b49\u7b49\u7684\uff0c\u9019\u4e9b\u6771\u897f\u662f emotion \u5e6b\u6211\u5011\u7522\u751f\u7684\uff0c\u76ee\u7684\u662f\u8b93\u6211\u5011\u4e4b\u524d\u7684\u4e3b\u984c\u914d\u8272\u80fd\u5920\u88ab\u6bcf\u4e00\u500b\u88e1\u9762\u7684 styled components \u6240\u53d6\u7528\uff1a"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/vqkNbzG.png",alt:"Imgur"}))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u5c0f\u63d0\u9192")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u9664\u4e86\u53ef\u4ee5\u76f4\u63a5\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Components")," \u9801\u7c64\u4e2d\u53bb\u6aa2\u8996\u5404\u500b\u5143\u4ef6\u4e4b\u5916\uff0c\u6709\u4e9b\u6642\u5019\u56e0\u70ba\u8907\u96dc\u7684\u9801\u9762\u6703\u540c\u6642\u4f7f\u7528\u975e\u5e38\u591a\u7684\u5143\u4ef6\uff0c\u6216\u5404\u5143\u4ef6\u5d4c\u5957\u7684\u60c5\u5f62\u6bd4\u8f03\u56b4\u91cd\u6642\uff0c\u4e5f\u53ef\u4ee5\u5f9e\u6bd4\u8f03\u719f\u6089 ",Object(r.b)("inlineCode",{parentName:"p"},"Elements")," \u9801\u7c64\u5148\u627e\u5230\u60f3\u6aa2\u8996\u7684\u5143\u7d20\uff0c\u9ede\u9078\u5f8c\u518d\u5207\u63db\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"Components")," \u9801\u7c64\uff0c\u5982\u6b64 React \u958b\u767c\u8005\u5de5\u5177\u6703\u76f4\u63a5\u5e6b\u4f60\u9078\u5230\u8a72\u5143\u4ef6\u3002"))),Object(r.b)("p",null,"\u900f\u904e React \u958b\u767c\u8005\u5de5\u5177\uff0c\u8a72\u9801\u9762\u4f7f\u7528\u5230\u7684 React \u5143\u4ef6\u5c31\u53ef\u4ee5\u4e00\u76ee\u77ad\u7136\u3002"),Object(r.b)("h2",{id:"\u6aa2\u8996\u548c\u4fee\u6539-react-\u5143\u4ef6\u5167\u7684\u8cc7\u6599\u72c0\u614b"},"\u6aa2\u8996\u548c\u4fee\u6539 React \u5143\u4ef6\u5167\u7684\u8cc7\u6599\u72c0\u614b"),Object(r.b)("p",null,"\u900f\u904e React \u958b\u767c\u8005\u5de5\u5177\u9664\u4e86\u80fd\u5920\u6aa2\u8996\u8a72\u9801\u9762\u4f7f\u7528\u4e86\u54ea\u4e9b React \u5143\u4ef6\u4e4b\u5916\uff0c\u9084\u53ef\u4ee5\u53bb\u6aa2\u8996\u548c\u4fee\u6539\u8a72\u5143\u4ef6\u5167\u7684\u8cc7\u6599\u72c0\u614b\uff0c\u53ea\u9700\u8981\u9ede\u9078\u8a72\u5143\u4ef6\u5f8c\u5373\u53ef\u5728\u4e0b\u65b9\u770b\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"props")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"state"),"\u3002"),Object(r.b)("p",null,"\u9019\u88e1\u9ede\u64ca ",Object(r.b)("inlineCode",{parentName:"p"},"App")," \u5f8c\u53ef\u4ee5\u770b\u5230\u76ee\u524d App \u9019\u500b\u5143\u4ef6\u4e2d\u6240\u64c1\u6709\u7684\u8cc7\u6599\u72c0\u614b\u3002\u9019\u88e1\u53ef\u4ee5\u770b\u5230\u5728 State \u7684\u5730\u65b9\u76ee\u524d\u6211\u5011\u7684\u8cc7\u6599\u72c0\u614b\u662f Light\uff1a"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/f4t6cro.png",alt:"Imgur"}))),Object(r.b)("p",null,"\u9084\u8a18\u5f97 ",Object(r.b)("inlineCode",{parentName:"p"},"props")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"state")," \u662f\u6307\u4ec0\u9ebc\u55ce\uff1f"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"props")," \u5c31\u662f\u6307\u7531\u5916\u90e8\u50b3\u5165\u8a72\u5143\u4ef6\u5167\u7684\u8cc7\u6599\uff0c\u9019\u88e1\u56e0\u70ba ",Object(r.b)("inlineCode",{parentName:"p"},"App")," \u4e26\u6c92\u6709\u5e36\u5165\u5176\u4ed6\u7684 props \u56e0\u6b64\u6c92\u6709\u8cc7\u6599\u3002",Object(r.b)("inlineCode",{parentName:"p"},"hooks")," \u88e1\u9762\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"State")," \u8868\u793a\u7684\u662f\u8a72\u5143\u4ef6\u81ea\u8eab\u5167\u90e8\u7684\u8cc7\u6599\uff0c\u4e5f\u5c31\u662f\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," \u7522\u751f\u7684\u8cc7\u6599\u3002"),Object(r.b)("p",null,"\u4e0d\u8ad6\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"props")," \u6216 ",Object(r.b)("inlineCode",{parentName:"p"},"state")," \u7684\u503c\u90fd\u53ef\u4ee5\u76f4\u63a5\u5728 React \u958b\u767c\u8005\u5de5\u5177\u5167\u9032\u884c\u4fee\u6539\uff0c\u9019\u5728\u6aa2\u67e5\u7a0b\u5f0f\u908f\u8f2f\u7684\u6642\u5019\u975e\u5e38\u65b9\u4fbf\u3002"),Object(r.b)("p",null,"\u9019\u88e1\u6211\u5011\u53ef\u4ee5\u628a State \u5f9e ",Object(r.b)("inlineCode",{parentName:"p"},"light")," \u6539\u6210 ",Object(r.b)("inlineCode",{parentName:"p"},"dark")," \uff0c\u770b\u770b\u756b\u9762\u662f\u4e0d\u662f\u771f\u7684\u6709\u5207\u63db\u6210\u6df1\u8272\u4e3b\u984c\uff01"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/xFSB5bl.png",alt:"Imgur"}))),Object(r.b)("p",null,"\u5982\u679c\u6709\u80fd\u5920\u5207\u63db\u6210\u6df1\u8272\u4e3b\u984c\u7684\u8a71\uff0c\u8868\u793a\u4e0a\u4e00\u500b\u55ae\u5143\u6240\u505a\u7684\u529f\u80fd\u53ef\u4ee5\u6b63\u5e38\u904b\u4f5c\uff01"),Object(r.b)("h2",{id:"\u63db\u4f60\u4e86\uff01\u4f7f\u7528-react-developer-tools-\u4f86\u6539\u8b8a\u8cc7\u6599\u72c0\u614b"},"\u63db\u4f60\u4e86\uff01\u4f7f\u7528 React Developer Tools \u4f86\u6539\u8b8a\u8cc7\u6599\u72c0\u614b"),Object(r.b)("p",null,"\u73fe\u5728\u8981\u8acb\u4f60\u7528 React Developer Tools \u4f86\u5c07 App \u4e2d\u7684\u8cc7\u6599\u72c0\u614b\u5f9e ",Object(r.b)("inlineCode",{parentName:"p"},"light")," \u6539\u6210 ",Object(r.b)("inlineCode",{parentName:"p"},"dark"),"\uff0c\u770b\u770b\u756b\u9762\u662f\u5426\u6709\u6b63\u78ba\u8b8a\u6210\u6df1\u8272\u4e3b\u984c\u3002\u540c\u6a23\u53ef\u4ee5\u53c3\u8003\u4e0b\u65b9\u7684\u6b65\u9a5f\uff1a"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5230\u700f\u89bd\u5668\u7684\u61c9\u7528\u7a0b\u5f0f\u5546\u5e97\u4e0b\u8f09 React Developer Tools"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u900f\u904e React Developers Tools \u7684 Component \u9801\u7c64\u4f86\u6539\u8b8a\u8cc7\u6599\u72c0\u614b"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u78ba\u5b9a\u6df1\u8272\u4e3b\u984c\u662f\u5426\u6709\u6b63\u78ba\u986f\u793a")),Object(r.b)("p",null,"\u5982\u679c\u6df1\u8272\u4e3b\u984c\u6c92\u6709\u6b63\u78ba\u986f\u793a\u7684\u8a71\uff0c\u53ef\u80fd\u8981\u56de\u7b54\u6aa2\u67e5\u4e00\u4e0b\u7a0b\u5f0f\u78bc\u7684\u5730\u65b9\u662f\u5426\u6709\u4efb\u4f55\u932f\u8aa4\uff0c\u5728\u9019\u500b\u55ae\u5143\u4e2d\u6211\u5011\u4e26\u6c92\u6709\u65b0\u589e\u4e0d\u540c\u7684\u7a0b\u5f0f\u78bc\uff0c\u55ae\u7d14\u662f\u591a\u5b89\u88dd\u4e86 React Developer Tools \u9019\u500b\u64f4\u5145\u5957\u4ef6\uff0c\u82e5\u5c0d\u65bc\u7a0b\u5f0f\u78bc\u6709\u554f\u984c\u7684\u8a71\uff0c\u53ef\u4ee5\u56de\u5230\u4e0a\u4e00\u500b\u55ae\u5143\u7684\u9023\u7d50\u91cd\u65b0\u6bd4\u5c0d\u770b\u770b\u3002"),Object(r.b)("p",null,"\u672c\u55ae\u5143\u76f8\u95dc\u4e4b\u7db2\u9801\u9023\u7d50\u53ef\u65bc ",Object(r.b)("inlineCode",{parentName:"p"},"install-react-devtools")," \u5206\u652f\u6aa2\u8996\uff1a",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/install-react-devtools"}),"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/install-react-devtools")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/wMfPVAM.png",alt:"Imgur"}))))}i.isMDXComponent=!0}}]);