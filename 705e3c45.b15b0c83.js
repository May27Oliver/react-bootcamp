(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),c=n(7),a=(n(0),n(133)),o={slug:"/bootcamp",title:"\u8a8d\u8b58 JSX",keywords:["JSX","React Component"]},l={unversionedId:"bootcamp/week1/jsx-basic",id:"bootcamp/week1/jsx-basic",isDocsHomePage:!1,title:"\u8a8d\u8b58 JSX",description:"\u91cd\u8981\u6982\u5ff5",source:"@site/docs/bootcamp/week1/jsx-basic.md",slug:"/bootcamp",permalink:"/react-bootcamp/docs/bootcamp",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/bootcamp/week1/jsx-basic.md",version:"current",sidebar:"bootcamp",next:{title:"\u5728\u4e8b\u4ef6\u8655\u7406\u5668\u4e2d\u5e36\u5165\u53c3\u6578",permalink:"/react-bootcamp/docs/bootcamp/week1/event-handler"}},i=[{value:"\u91cd\u8981\u6982\u5ff5",id:"\u91cd\u8981\u6982\u5ff5",children:[]},{value:"\u5728 JSX \u4e2d\u5e36\u5165\u8b8a\u6578",id:"\u5728-jsx-\u4e2d\u5e36\u5165\u8b8a\u6578",children:[]},{value:"\u5728 JSX \u4e2d\u5e36\u5165\u8868\u9054\u5f0f",id:"\u5728-jsx-\u4e2d\u5e36\u5165\u8868\u9054\u5f0f",children:[]},{value:"\u628a JSX \u7576\u6210\u4e00\u500b\u8b8a\u6578",id:"\u628a-jsx-\u7576\u6210\u4e00\u500b\u8b8a\u6578",children:[]},{value:"JSX \u4e2d\u4e00\u6a23\u53ef\u4ee5\u56de\u50b3\u53e6\u4e00\u500b\u51fd\u5f0f",id:"jsx-\u4e2d\u4e00\u6a23\u53ef\u4ee5\u56de\u50b3\u53e6\u4e00\u500b\u51fd\u5f0f",children:[{value:"\u5efa\u7acb React Component",id:"\u5efa\u7acb-react-component",children:[]}]},{value:"\u4f7f\u7528 React Fragment",id:"\u4f7f\u7528-react-fragment",children:[]},{value:"\u5efa\u8b70\u95b1\u8b80",id:"\u5efa\u8b70\u95b1\u8b80",children:[{value:"Main Concepts",id:"main-concepts",children:[]},{value:"Advanced",id:"advanced",children:[]}]}],b={toc:i};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u91cd\u8981\u6982\u5ff5"},"\u91cd\u8981\u6982\u5ff5"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"JavaScript \u4e26\u4e0d\u8a8d\u5f97 JSX"),Object(a.b)("li",{parentName:"ul"},"JSX \u53ef\u4ee5\u60f3\u6210\u662f\u5f37\u5316\u7248\u7684 HTML\uff0c\u5728 JSX \u4e2d\u53ef\u4ee5\u4f7f\u7528\u8a31\u591a JavaScript \u63d0\u4f9b\u7684\u8a9e\u6cd5"),Object(a.b)("li",{parentName:"ul"},"\u9808\u7279\u5225\u7559\u610f\u6700\u5916\u5c64\u53ea\u80fd\u6709\u4e00\u500b\u6839\u5143\u7d20"),Object(a.b)("li",{parentName:"ul"},"HTML \u5143\u7d20\u4e2d\u6c92\u6709\u5167\u5bb9\u7684\u8a71\uff0c\u9700\u8981\u81ea\u52d5\u95dc\u9589"),Object(a.b)("li",{parentName:"ul"},"HTML \u5143\u7d20\u5c6c\u6027\u6703\u4f7f\u7528 camelCase \u7684\u65b9\u5f0f\u547d\u540d\uff08\u4f8b\u5982\uff0cclassName\uff09")),Object(a.b)("h2",{id:"\u5728-jsx-\u4e2d\u5e36\u5165\u8b8a\u6578"},"\u5728 JSX \u4e2d\u5e36\u5165\u8b8a\u6578"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const framework = 'React';\n\nReactDOM.render(\n  <div>Hello, {framework}!</div>,\n  document.getElementById('root')\n);\n")),Object(a.b)("h2",{id:"\u5728-jsx-\u4e2d\u5e36\u5165\u8868\u9054\u5f0f"},"\u5728 JSX \u4e2d\u5e36\u5165\u8868\u9054\u5f0f"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const price = '25500';\n\nReactDOM.render(\n  <div>\n    \u539f\u50f9\u662f {price}\uff0c\u76ee\u524d\u7279\u50f9 {price * 0.9}\n  </div>,\n  document.getElementById('root')\n);\n")),Object(a.b)("h2",{id:"\u628a-jsx-\u7576\u6210\u4e00\u500b\u8b8a\u6578"},"\u628a JSX \u7576\u6210\u4e00\u500b\u8b8a\u6578"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"JSX \u9700\u8981\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"()")," \u4f86\u8b93 JavaScript \u77e5\u9053\u9019\u500b\u662f\u4e00\u500b\u300c\u55ae\u5143\u300d")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const price = 25500;\nconst product = (\n  <div>\n    \u539f\u50f9\u662f {price}\uff0c\u76ee\u524d\u7279\u50f9 {price * 0.9}\n  </div>\n);\n\nReactDOM.render(product, document.getElementById('root'));\n")),Object(a.b)("h2",{id:"jsx-\u4e2d\u4e00\u6a23\u53ef\u4ee5\u56de\u50b3\u53e6\u4e00\u500b\u51fd\u5f0f"},"JSX \u4e2d\u4e00\u6a23\u53ef\u4ee5\u56de\u50b3\u53e6\u4e00\u500b\u51fd\u5f0f"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8b93\u4e00\u500b\u51fd\u5f0f\u56de\u50b3\u53e6\u4e00\u500b JSX")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const price = 25500;\n\nconst product = () => (\n  <div>\n    \u539f\u50f9\u662f {price}\uff0c\u76ee\u524d\u7279\u50f9 {price * 0.9}\n  </div>\n);\n\nReactDOM.render(product(), document.getElementById('root'));\n")),Object(a.b)("h3",{id:"\u5efa\u7acb-react-component"},"\u5efa\u7acb React Component"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"React Component \u5c31\u662f\u6703\u56de\u50b3 JSX \u7684 JavaScript \u51fd\u5f0f"),Object(a.b)("li",{parentName:"ul"},"React Component \u7684\u7b2c\u4e00\u500b\u5b57",Object(a.b)("strong",{parentName:"li"},"\u9700\u8981\u300c\u5927\u5beb\u300d"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const price = 25500;\nconst Product = () => (\n  <div>\n    \u539f\u50f9\u662f {price}\uff0c\u76ee\u524d\u7279\u50f9 {price * 0.9}\n  </div>\n);\n\nReactDOM.render(<Product />, document.getElementById('root'));\n")),Object(a.b)("h2",{id:"\u4f7f\u7528-react-fragment"},"\u4f7f\u7528 React Fragment"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528 React Fragment \u53ef\u4ee5\u907f\u514d HTML DOM \u4e2d\u591a\u9918\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"<div></div>"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n\nconst JSX = (\n  <React.Fragment>\n    <div>Hello</div>\n    <div>React</div>\n  </React.Fragment>\n);\n")),Object(a.b)("p",null,"React Fragment \u4e5f\u53ef\u4ee5\u7c21\u5beb\u6210 ",Object(a.b)("inlineCode",{parentName:"p"},"<></>"),"\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\n\nconst JSX = (\n  <>\n    <div>Hello</div>\n    <div>React</div>\n  </>\n);\n")),Object(a.b)("h2",{id:"\u5efa\u8b70\u95b1\u8b80"},"\u5efa\u8b70\u95b1\u8b80"),Object(a.b)("h3",{id:"main-concepts"},"Main Concepts"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://reactjs.org/docs/hello-world.html"}),"1. Hello World")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://reactjs.org/docs/introducing-jsx.html"}),"2. Introducing JSX")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://reactjs.org/docs/rendering-elements.html"}),"3. Rendering Elements"))),Object(a.b)("h3",{id:"advanced"},"Advanced"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://reactjs.org/docs/fragments.html"}),"Fragments"))))}p.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c.a.createContext({}),p=function(e){var t=c.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,s=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return n?c.a.createElement(s,l(l({ref:t},b),{},{components:n})):c.a.createElement(s,l({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<a;b++)o[b]=n[b];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);