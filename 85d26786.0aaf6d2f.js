(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(133)),o={title:"useState \u57fa\u790e",keywords:["JSX","React Component","useState"]},i={unversionedId:"bootcamp/week1/use-state",id:"bootcamp/week1/use-state",isDocsHomePage:!1,title:"useState \u57fa\u790e",description:"\u91cd\u9ede",source:"@site/docs/bootcamp/week1/use-state.md",slug:"/bootcamp/week1/use-state",permalink:"/react-bootcamp/docs/bootcamp/week1/use-state",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/bootcamp/week1/use-state.md",version:"current",sidebar:"bootcamp",previous:{title:"\u8a8d\u8b58 JSX",permalink:"/react-bootcamp/docs/bootcamp"},next:{title:"\u5728\u4e8b\u4ef6\u8655\u7406\u5668\u4e2d\u5e36\u5165\u53c3\u6578",permalink:"/react-bootcamp/docs/bootcamp/week1/event-handler"}},b=[{value:"\u91cd\u9ede",id:"\u91cd\u9ede",children:[]},{value:"\u4ec0\u9ebc\u662f state",id:"\u4ec0\u9ebc\u662f-state",children:[]},{value:"\u70ba\u4ec0\u9ebc\u8981\u7528 useState",id:"\u70ba\u4ec0\u9ebc\u8981\u7528-usestate",children:[]},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",children:[]},{value:"\u5efa\u8b70\u95b1\u8b80",id:"\u5efa\u8b70\u95b1\u8b80",children:[{value:"Hooks",id:"hooks",children:[]}]}],l={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u91cd\u9ede"},"\u91cd\u9ede"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"useState")," \u53d6\u51fa\u5f8c\uff0c\u7528\u4f86\u6539\u8b8a\u8b8a\u6578\u7684\u65b9\u6cd5\uff0c\u5728\u547d\u540d\u4e0a\u6703\u4ee5 set \u958b\u982d"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"useState")," \u7684\u9810\u8a2d\u503c\u4e5f\u53ef\u4ee5\u662f\u7269\u4ef6"),Object(c.b)("li",{parentName:"ul"},"React \u756b\u9762\u91cd\u65b0\u8f49\u8b6f\u7684\u6642\u9593\u9ede\uff08\u7f3a\u4e00\u4e0d\u53ef\uff09",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"setState \u88ab\u547c\u53eb\u5230"),Object(c.b)("li",{parentName:"ul"},"\u4e14 state \u7684\u503c\u78ba\u5be6\u6709\u6539\u8b8a")))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"state \u8981\u6539\u8b8a\u4e00\u5b9a\u8981\u4f7f\u7528 setState \u7684\u65b9\u6cd5\uff0c\u624b\u52d5\u6539\u8b8a state \u662f\u6c92\u6709\u6548\u679c\u7684\u3002"))),Object(c.b)("h2",{id:"\u4ec0\u9ebc\u662f-state"},"\u4ec0\u9ebc\u662f state"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"state \u4e2d\u6587\u7ffb\u8b6f\u662f\u300c\u72c0\u614b\u300d\uff0c\u4f46\u7528\u72c0\u614b\u4f86\u8868\u793a\u4e00\u958b\u59cb\u53ef\u80fd\u6703\u4e0d\u592a\u597d\u7406\u89e3\uff0c\u9019\u6642\u5019\u53ef\u4ee5\u628a\u5b83\u60f3\u6210\u5728 React \u5143\u4ef6\u4e2d\u7684\u300c\u8cc7\u6599\u300d\u6216\u300c\u8b8a\u6578\u300d")),Object(c.b)("h2",{id:"\u70ba\u4ec0\u9ebc\u8981\u7528-usestate"},"\u70ba\u4ec0\u9ebc\u8981\u7528 useState"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u9019\u4e9b state \u6703\u9700\u8981\u8acb React \u5e6b\u6211\u5011\u76e3\u63a7\uff0c\u5426\u5247\u7684\u8a71\uff0cReact \u4e26\u4e0d\u77e5\u9053\u9019\u4e9b state \u5df2\u7d93\u6539\u8b8a\u4e86\uff0c\u5b83\u5c31\u4e0d\u6703\u5e6b\u6211\u5011\u91cd\u65b0\u8f49\u8b6f\uff08render\uff09\u756b\u9762"),Object(c.b)("li",{parentName:"ul"},"\u70ba\u4e86\u8981\u8b93\u5728 React \u5143\u4ef6\u4e2d\u7684\u9019\u4e9b state \u53ef\u4ee5\u88ab React \u76e3\u7ba1\uff0c\u6211\u5011\u5c31\u9700\u8981\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"useState")," \u9019\u500b\u65b9\u6cd5\u3002React \u6703\u5e6b\u6211\u5011\u76e3\u7ba1\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"useState")," \u7522\u751f\u7684\u8b8a\u6578\uff0c\u7576 state \u78ba\u5be6\u6709\u6539\u8b8a\uff0c\u4e14\u6709\u4f7f\u7528\u4e86 ",Object(c.b)("inlineCode",{parentName:"li"},"useState")," \u63d0\u4f9b\u7528\u4f86\u6539\u8b8a state \u7684\u65b9\u6cd5\u6642\uff0cReact \u5c31\u6703\u81ea\u52d5\u5e6b\u6211\u5011\u66f4\u65b0\u756b\u9762\u3002")),Object(c.b)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { useState } from 'react';\n\n// \u9019\u662f\u9663\u5217\u7684\u89e3\u69cb\u8ce6\u503c\nconst [counter, setCounter] = useState(5);\n")),Object(c.b)("p",null,"\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"setCounter")," \u53ef\u4ee5\u76f4\u63a5\u8a2d\u503c"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"setCounter(10);\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"setCounter")," \u4e2d\u4e5f\u53ef\u4ee5\u5e36\u5165 function\uff0c\u85c9\u6b64\u53d6\u51fa\u4e0a\u4e00\u6b21\u7684 state\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"setCounter((prevCounter) => prevCounter + 1);\n")),Object(c.b)("h2",{id:"\u5efa\u8b70\u95b1\u8b80"},"\u5efa\u8b70\u95b1\u8b80"),Object(c.b)("h3",{id:"hooks"},"Hooks"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/docs/hooks-state.html"}),"3. Using the State Hook")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/docs/hooks-reference.html#usestate"}),"7. Hooks API Reference - useState"))))}s.isMDXComponent=!0},133:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||c;return a?r.a.createElement(d,i(i({ref:t},l),{},{components:a})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);