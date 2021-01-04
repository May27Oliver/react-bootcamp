(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(133)),c={title:"useState \u57fa\u790e",keywords:["JSX","React Component","useState"]},i={unversionedId:"bootcamp/week1/use-state",id:"bootcamp/week1/use-state",isDocsHomePage:!1,title:"useState \u57fa\u790e",description:"\u91cd\u9ede",source:"@site/docs/bootcamp/week1/use-state.md",slug:"/bootcamp/week1/use-state",permalink:"/react-bootcamp/docs/bootcamp/week1/use-state",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/bootcamp/week1/use-state.md",version:"current",sidebar:"bootcamp",previous:{title:"\u5728\u4e8b\u4ef6\u8655\u7406\u5668\u4e2d\u5e36\u5165\u53c3\u6578",permalink:"/react-bootcamp/docs/bootcamp/week1/event-handler"},next:{title:"\u6539\u7528 class Component",permalink:"/react-bootcamp/docs/bootcamp/week1/class-component"}},b=[{value:"\u91cd\u9ede",id:"\u91cd\u9ede",children:[]},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",children:[]},{value:"\u5efa\u8b70\u95b1\u8b80",id:"\u5efa\u8b70\u95b1\u8b80",children:[{value:"Hooks",id:"hooks",children:[]}]}],l={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u91cd\u9ede"},"\u91cd\u9ede"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"useState")," \u53d6\u51fa\u5f8c\uff0c\u7528\u4f86\u6539\u8b8a\u8b8a\u6578\u7684\u65b9\u6cd5\uff0c\u5728\u547d\u540d\u4e0a\u6703\u4ee5 set \u958b\u982d"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"useState")," \u7684\u9810\u8a2d\u503c\u4e5f\u53ef\u4ee5\u662f\u7269\u4ef6"),Object(o.b)("li",{parentName:"ul"},"React \u756b\u9762\u91cd\u65b0\u8f49\u8b6f\u7684\u6642\u9593\u9ede\uff08\u7f3a\u4e00\u4e0d\u53ef\uff09",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"setState \u88ab\u547c\u53eb\u5230"),Object(o.b)("li",{parentName:"ul"},"\u4e14 state \u7684\u503c\u78ba\u5be6\u6709\u6539\u8b8a")))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"state \u8981\u6539\u8b8a\u4e00\u5b9a\u8981\u4f7f\u7528 setState \u7684\u65b9\u6cd5\uff0c\u624b\u52d5\u6539\u8b8a state \u662f\u6c92\u6709\u6548\u679c\u7684"))),Object(o.b)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { useState } from 'react';\n\n// \u9019\u662f\u9663\u5217\u7684\u89e3\u69cb\u8ce6\u503c\nconst [counter, setCounter] = useState(5);\n")),Object(o.b)("p",null,"\u900f\u904e ",Object(o.b)("inlineCode",{parentName:"p"},"setCounter")," \u53ef\u4ee5\u76f4\u63a5\u8a2d\u503c"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"setCounter(10);\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"setCounter")," \u4e2d\u4e5f\u53ef\u4ee5\u5e36\u5165 function\uff0c\u85c9\u6b64\u53d6\u51fa\u4e0a\u4e00\u6b21\u7684 state\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"setCounter((prevCounter) => prevCounter + 1);\n")),Object(o.b)("h2",{id:"\u5efa\u8b70\u95b1\u8b80"},"\u5efa\u8b70\u95b1\u8b80"),Object(o.b)("h3",{id:"hooks"},"Hooks"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://reactjs.org/docs/hooks-state.html"}),"3. Using the State Hook"))))}p.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);