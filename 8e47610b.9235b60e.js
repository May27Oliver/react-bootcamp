(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),p=n(7),r=(n(0),n(185)),o={title:"3-6 React \u5143\u4ef6\u9593\u7684\u8cc7\u6599\u50b3\u905e - props \u7684\u4f7f\u7528",keywords:["JavaScript","React Hooks","props"]},c={unversionedId:"book/ch3/3-6",id:"book/ch3/3-6",isDocsHomePage:!1,title:"3-6 React \u5143\u4ef6\u9593\u7684\u8cc7\u6599\u50b3\u905e - props \u7684\u4f7f\u7528",description:"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1apass-props-to-components\u3002",source:"@site/docs/book/ch3/3-6.md",slug:"/book/ch3/3-6",permalink:"/react-bootcamp/docs/book/ch3/3-6",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/book/ch3/3-6.md",version:"current",sidebar:"book",previous:{title:"3-5 React \u5143\u4ef6\u7684\u62c6\u5206",permalink:"/react-bootcamp/docs/book/ch3/3-5"},next:{title:"3-7 \u5b50\u5c64\u5143\u4ef6\u5982\u4f55\u4fee\u6539\u7236\u5c64\u5143\u4ef6\u7684\u8cc7\u6599\u72c0\u614b",permalink:"/react-bootcamp/docs/book/ch3/3-7"}},i=[{value:"\u900f\u904e props \u5728\u5143\u4ef6\u9593\u50b3\u905e\u8cc7\u6599\u72c0\u614b",id:"\u900f\u904e-props-\u5728\u5143\u4ef6\u9593\u50b3\u905e\u8cc7\u6599\u72c0\u614b",children:[{value:"\u7236\u5c64\u900f\u904e props \u50b3\u905e\u8cc7\u6599",id:"\u7236\u5c64\u900f\u904e-props-\u50b3\u905e\u8cc7\u6599",children:[]},{value:"\u5b50\u5c64\u5143\u4ef6\u63a5\u6536 props \u8cc7\u6599\u7684\u65b9\u5f0f",id:"\u5b50\u5c64\u5143\u4ef6\u63a5\u6536-props-\u8cc7\u6599\u7684\u65b9\u5f0f",children:[]}]},{value:"\u5c07 inputValue \u50b3\u905e\u5230 CardFooter \u4e2d\u4f7f\u7528",id:"\u5c07-inputvalue-\u50b3\u905e\u5230-cardfooter-\u4e2d\u4f7f\u7528",children:[{value:"\u900f\u904e props \u5c07 inputValue \u5f9e App \u50b3\u5165 CardFooter",id:"\u900f\u904e-props-\u5c07-inputvalue-\u5f9e-app-\u50b3\u5165-cardfooter",children:[]},{value:"\u5728 CardFooter \u5f9e props \u53d6\u5f97 App \u50b3\u9032\u4f86\u7684 InputValue",id:"\u5728-cardfooter-\u5f9e-props-\u53d6\u5f97-app-\u50b3\u9032\u4f86\u7684-inputvalue",children:[]}]},{value:"\u63db\u4f60\u4e86\uff1a\u5728 CardFooter \u53d6\u5f97 App \u7684 inputValue",id:"\u63db\u4f60\u4e86\uff1a\u5728-cardfooter-\u53d6\u5f97-app-\u7684-inputvalue",children:[]},{value:"\u6839\u64da inputValue \u6539\u8b8a CardFooter \u7684\u6a23\u5f0f",id:"\u6839\u64da-inputvalue-\u6539\u8b8a-cardfooter-\u7684\u6a23\u5f0f",children:[]},{value:"\u63db\u4f60\u4e86\uff1a\u6839\u64da inputValue \u6539\u8b8a CardFooter \u7684\u6587\u5b57\u5167\u5bb9\u548c\u6a23\u5f0f",id:"\u63db\u4f60\u4e86\uff1a\u6839\u64da-inputvalue-\u6539\u8b8a-cardfooter-\u7684\u6587\u5b57\u5167\u5bb9\u548c\u6a23\u5f0f",children:[]}],l={toc:i};function b(e){var t=e.components,n=Object(p.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1a",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hooks-internet-speed-converter/tree/pass-props-to-components"}),Object(r.b)("inlineCode",{parentName:"a"},"pass-props-to-components")),"\u3002"),Object(r.b)("hr",null),Object(r.b)("p",null,"\u5728\u4e0a\u4e00\u500b\u55ae\u5143\u4e2d\u5df2\u7d93\u62c6\u5206\u51fa\u4e86\u5169\u500b\u7368\u7acb\u7684 React \u5143\u4ef6 - ",Object(r.b)("inlineCode",{parentName:"p"},"UnitControl")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"CardFooter"),"\u3002\u73fe\u5728\u6211\u5011\u60f3\u8981\u8b93 ",Object(r.b)("inlineCode",{parentName:"p"},"CardFooter")," \u80fd\u5920\u6839\u64da\u4f7f\u7528\u8005\u8f38\u5165\u7684\u7db2\u901f\u5feb\u6162\u4f86\u986f\u793a\u4e0d\u540c\u7684\u6587\u5b57\u5167\u5bb9\u548c\u984f\u8272\u6a23\u5f0f\u3002"),Object(r.b)("p",null,"\u5728\u4e0a\u4e00\u7ae0\u4e2d\uff0c\u6211\u5011\u5df2\u7d93\u5b78\u904e\u5982\u4f55\u8b93 JSX \u80fd\u5920\u6839\u64da\u4e0d\u540c\u7684\u8cc7\u6599\u72c0\u614b\u4f86\u5448\u73fe\u4e0d\u540c\u7684\u5167\u5bb9\uff0c\u6240\u4ee5\u689d\u4ef6\u8f49\u8b6f\u548c\u52d5\u614b\u5207\u63db CSS \u6a23\u5f0f\u7684\u65b9\u5f0f\u5176\u5be6\u4f60\u61c9\u8a72\u5df2\u7d93\u77e5\u9053\u4e86\u3002\u6bd4\u8f03\u4e0d\u4e00\u6a23\u7684\u5730\u65b9\u662f\uff0c\u73fe\u5728\u4f7f\u7528\u8005\u8f38\u5165\u7684\u7db2\u901f ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue")," \u9019\u500b\u72c0\u614b\u662f\u4fdd\u5b58\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"App")," \u9019\u500b\u5143\u4ef6\u4e2d\uff0c\u800c ",Object(r.b)("inlineCode",{parentName:"p"},"CardFooter")," \u662f\u4e00\u500b\u7368\u7acb\u7684\u5143\u4ef6\uff0cCardFooter \u4e26\u6c92\u6709\u8fa6\u6cd5\u76f4\u63a5\u77e5\u9053 App \u4e2d ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue")," \u7684\u503c\u662f\u591a\u5c11\uff0c\u5fc5\u9808\u8981\u628a\u9019\u500b\u503c\u5f9e App \u50b3\u905e\u5230 CardFooter \u5f8c\uff0cCardFooter \u624d\u6703\u77e5\u9053 ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue")," \u7684\u503c\u3002\u56e0\u6b64\u9019\u88e1\u6211\u5011\u5c31\u9700\u8981\u5148\u4f86\u4e86\u89e3\u5982\u4f55\u5728 React \u5404\u5143\u4ef6\u4e4b\u9593\u9032\u884c\u7684\u8cc7\u6599\u50b3\u905e\u3002"),Object(r.b)("h2",{id:"\u900f\u904e-props-\u5728\u5143\u4ef6\u9593\u50b3\u905e\u8cc7\u6599\u72c0\u614b"},"\u900f\u904e props \u5728\u5143\u4ef6\u9593\u50b3\u905e\u8cc7\u6599\u72c0\u614b"),Object(r.b)("p",null,"\u5148\u8b93\u6211\u5011\u7528\u4e00\u5f35\u5716\u4f86\u63cf\u8ff0\u7576\u524d\u7db2\u901f\u55ae\u4f4d\u63db\u7b97\u5668\u7684\u7d50\u69cb\uff1a"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/JliUd2S.png",alt:"Imgur"}))),Object(r.b)("p",null,"\u5f9e\u4e0a\u5716\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u5c08\u6848\u4e2d\u73fe\u5728\u4e00\u5171\u6709\u4e09\u500b React \u5143\u4ef6\uff0c\u5176\u4e2d\u6700\u4e0a\u5c64\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"App")," \u88e1\u9762\u6703\u5305\u542b ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue")," \u9019\u500b\u72c0\u614b\uff08state\uff09\u548c\u7528\u4f86\u6539\u8b8a\u9019\u500b\u72c0\u614b\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"setInputValue")," \u9019\u500b\u65b9\u6cd5\u3002"),Object(r.b)("p",null,"\u63a5\u8457\u5728 App \u9019\u500b\u5143\u4ef6\u4e2d\u9084\u532f\u5165\u4e26\u4f7f\u7528\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"UnitControl")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"CardFooter")," \u9019\u5169\u500b\u5143\u4ef6\uff0c\u5728\u9019\u6a23\u7684\u95dc\u4fc2\u4e2d\uff0c\u6211\u5011\u6703\u8aaa ",Object(r.b)("inlineCode",{parentName:"p"},"App")," \u662f\u7236\u5c64\u5143\u4ef6\uff08parent component\uff09\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"UnitControl")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"CardFooter")," \u662f\u5b50\u5c64\u5143\u4ef6\uff08child component\uff09\u3002"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u63d0\u9192")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u7236\u5c64\u548c\u5b50\u5c64\u662f\u76f8\u5c0d\u7684\u6982\u5ff5\uff0c\u4f8b\u5982\u9019\u88e1 UnitControl \u662f App \u7684\u5b50\u5c64\u5143\u4ef6\uff0c\u4f46\u82e5\u5728 UnitControl \u4e2d\u9084\u6709\u532f\u5165\u4e26\u4f7f\u7528\u53e6\u4e00\u500b\u5143\u4ef6\uff0c\u9019\u6642\u5019 UnitControl \u5247\u6703\u662f\u53e6\u4e00\u500b\u5143\u4ef6\u7684\u7236\u5c64\u5143\u4ef6\u3002"))),Object(r.b)("p",null,"\u5f9e\u9019\u5f35\u5716\u4e2d\u6211\u5011\u53ef\u4ee5\u770b\u5230\uff0c\u56e0\u70ba ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue")," \u7684\u72c0\u614b\u662f\u4fdd\u5b58\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"App")," \u4e2d\uff0c\u56e0\u6b64 CardFooter \u4e26\u6c92\u6709\u8fa6\u6cd5\u76f4\u63a5\u77e5\u9053 ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue")," \u7684\u503c\u3002\u5728 React \u4e2d\uff0c\u5b50\u5c64\u5143\u4ef6\u5982\u679c\u60f3\u8981\u5f97\u5230\u7236\u5c64\u5143\u4ef6\u7684\u8cc7\u6599\u72c0\u614b\uff0c\u53ea\u9700\u8981\u900f\u904e props \u7684\u65b9\u5f0f\u4f86\u50b3\u9001\u8cc7\u6599\u5c31\u53ef\u4ee5\u4e86\uff1a"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/jorIp0T.jpg",alt:"Imgur"}))),Object(r.b)("p",null,"\u8b1b\u89e3\u5b8c\u4e86\u6982\u5ff5\u4e4b\u5f8c\uff0c\u8b93\u6211\u5011\u4f86\u770b\u5177\u9ad4\u8981\u600e\u9ebc\u505a\u3002"),Object(r.b)("h3",{id:"\u7236\u5c64\u900f\u904e-props-\u50b3\u905e\u8cc7\u6599"},"\u7236\u5c64\u900f\u904e props \u50b3\u905e\u8cc7\u6599"),Object(r.b)("p",null,"\u7236\u5c64\u8981\u50b3\u905e props \u5230\u5b50\u5c64\u7684\u65b9\u5f0f\u975e\u5e38\u7c21\u55ae\uff0c\u5047\u8a2d\u73fe\u5728\u6211\u5011\u6709\u540d\u70ba ChildComponent \u7684\u5b50\u5c64\u5143\u4ef6\uff0c\u60f3\u8981\u628a\u7236\u5c64\u5143\u4ef6\u4e2d\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"firstName")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"lastName")," \u9019\u5169\u500b\u8cc7\u6599\u50b3\u905e\u9032 ChildComponent \u4e2d\uff0c\u53ea\u9700\u8981\u900f\u904e\u50cf\u662f HTML \u5c6c\u6027\u7684\u65b9\u5f0f\u50b3\u9032\u53bb\u5c31\u53ef\u4ee5\u4e86\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// \u7236\u5c64\u5143\u4ef6\n// STEP 1: \u5c07\u8cc7\u6599\u900f\u904e html \u5c6c\u6027\u7684\u65b9\u5f0f\u50b3\u5165 component \u5167\nconst ParentComponent = () => (\n  <ChildComponent firstName="Aaron" lastName="Chen" />\n);\n')),Object(r.b)("h3",{id:"\u5b50\u5c64\u5143\u4ef6\u63a5\u6536-props-\u8cc7\u6599\u7684\u65b9\u5f0f"},"\u5b50\u5c64\u5143\u4ef6\u63a5\u6536 props \u8cc7\u6599\u7684\u65b9\u5f0f"),Object(r.b)("p",null,"\u63a5\u8457\u5b50\u5c64\u5143\u4ef6 ChildComponent \u53ea\u9700\u8981\u900f\u904e\u300c\u51fd\u5f0f\u53c3\u6578\u300d\u7684\u65b9\u5f0f\u4f86\u63a5\u6536\u7236\u5c64\u5143\u4ef6\u50b3\u9032\u4f86\u7684 firstName \u548c lastName \u5373\u53ef\u3002\u9019\u88e1\u6211\u5011\u900f\u904e\u5728\u51fd\u5f0f\u53c3\u6578\u4e2d\u5e36\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"props")," \u9019\u500b\u53c3\u6578\uff0c\u5373\u53ef\u53d6\u5f97\u7236\u5c64\u50b3\u9032\u4f86\u7684\u8cc7\u6599\uff0c\u900f\u904e ",Object(r.b)("inlineCode",{parentName:"p"},"props.firstName")," \u548c ",Object(r.b)("inlineCode",{parentName:"p"},"props.lastName")," \u5c31\u53ef\u53d6\u5f97\u5c0d\u61c9\u7684\u503c\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// \u5b50\u5c64\u5143\u4ef6\n// STEP 2: \u5728\u8a72 component \u5167\u53ef\u4ee5\u900f\u904e\u53c3\u6578 props \u53d6\u5f97\u50b3\u5165\u7684\u8cc7\u6599\nconst ChildComponent = (props) => {\n  return (\n    <h1>\n      Hello, {props.firstName} {props.lastName}\n    </h1>\n  ); // Hello, Aaron Chen\n};\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u63d0\u9192")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u9019\u88e1\u6163\u4f8b\u4e0a\u6703\u628a\u51fd\u5f0f\u53c3\u6578\u7684\u540d\u7a31\u7a31\u4f5c ",Object(r.b)("inlineCode",{parentName:"p"},"props")," \u4f46\u5be6\u969b\u4e0a\u540d\u7a31\u662f\u53ef\u4ee5\u81ea\u7531\u547d\u540d\u7684\u3002"))),Object(r.b)("p",null,"\u5728\u53d6\u7528 props \u7684\u6642\u5019\uff0c\u6703\u7fd2\u6163\u4f7f\u7528\u89e3\u69cb\u8ce6\u503c\u76f4\u63a5\u628a\u9700\u8981\u7684\u8b8a\u6578\u53d6\u51fa\u4f86\uff0c\u56e0\u6b64\u5728\u53d6\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"props")," \u7684\u5730\u65b9\u6703\u50cf\u9019\u6a23\u5beb\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// \u900f\u904e\u89e3\u69cb\u8ce6\u503c\u628a props \u5167\u9700\u8981\u7528\u5230\u7684\u8b8a\u6578\u53d6\u51fa\nfunction ChildComponent(props) {\n  const { firstName, lastName } = props;\n  return (\n    <h1>\n      Hello, {firstName} {lastName}\n    </h1>\n  ); // Hello, Aaron Chen\n}\n")),Object(r.b)("p",null,"\u751a\u81f3\u66f4\u7cbe\u7c21\u5230\u9023 ",Object(r.b)("inlineCode",{parentName:"p"},"props")," \u90fd\u4e0d\u547d\u540d\u4e86\uff0c\u76f4\u63a5\u5728\u53c3\u6578\u4e2d\u900f\u904e\u89e3\u69cb\u8ce6\u503c\u53d6\u51fa\u4f86\u7528\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// \u900f\u904e\u89e3\u69cb\u8ce6\u503c\u76f4\u63a5\u5728\u300c\u51fd\u5f0f\u53c3\u6578\u7684\u5730\u65b9\u300d\u628a\u9700\u8981\u7528\u5230\u7684\u8b8a\u6578\u53d6\u51fa\nfunction ChildComponent({ firstName, lastName }) {\n  return (\n    <h1>\n      Hello, {firstName} {lastName}\n    </h1>\n  ); // Hello, Aaron Chen\n}\n")),Object(r.b)("p",null,"\u4e0a\u9762\u9019\u4e9b\u90fd\u662f\u5f88\u5e38\u898b\u7684\u5beb\u6cd5\u3002"),Object(r.b)("h2",{id:"\u5c07-inputvalue-\u50b3\u905e\u5230-cardfooter-\u4e2d\u4f7f\u7528"},"\u5c07 inputValue \u50b3\u905e\u5230 CardFooter \u4e2d\u4f7f\u7528"),Object(r.b)("p",null,"\u56de\u5230\u7db2\u901f\u55ae\u4f4d\u63db\u7b97\u5668\uff0c\u73fe\u5728\u60f3\u8981\u628a\u7236\u5c64\u5143\u4ef6 App \u7684\u8cc7\u6599 ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue")," \u900f\u904e props \u50b3\u5230\u5b50\u5c64\u7684 CardFooter \u5143\u4ef6\u4e2d\uff0c\u53ea\u9700\u8981\u900f\u904e\u50cf\u662f HTML \u5c6c\u6027\u7684\u65b9\u5f0f\u50b3\u9032\u53bb\u5c31\u53ef\u4ee5\u4e86\u3002"),Object(r.b)("h3",{id:"\u900f\u904e-props-\u5c07-inputvalue-\u5f9e-app-\u50b3\u5165-cardfooter"},"\u900f\u904e props \u5c07 inputValue \u5f9e App \u50b3\u5165 CardFooter"),Object(r.b)("p",null,"\u6211\u5011\u53ef\u4ee5\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"<App />")," \u5143\u4ef6\u4e2d\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"<CardFooter />")," \u7684\u5730\u65b9\uff0c\u628a\u60f3\u8981\u50b3\u5165\u7684\u8cc7\u6599\u900f\u904e ",Object(r.b)("inlineCode",{parentName:"p"},"<CardFooter key={value} />")," \u7684\u65b9\u5f0f\u50b3\u5165\uff0c\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"value")," \u7684\u5730\u65b9\u628a\u60f3\u8981\u50b3\u905e\u5230 CardFooter \u7684\u8cc7\u6599\u503c\u5e36\u5165\uff0c\u4e5f\u5c31\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue"),"\uff1b\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"key")," \u7684\u5730\u65b9\uff0c\u65b9\u4fbf\u8d77\u898b\u6211\u5011\u4e00\u6a23\u53d6\u540d\u70ba ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue"),"\uff0c\u4f46\u9019\u4e26\u4e0d\u662f\u4e00\u5b9a\u7684\uff0c\u540d\u7a31\u540c\u6a23\u53ef\u4ee5\u81ea\u884c\u547d\u540d\uff0c\u800c\u9019\u500b key \u6703\u7528\u5728 CardFooter \u63a5\u6536 props \u6642\u4f7f\u7528\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// ./src/App.js\n\nfunction App() {\n  //...\n\n  return (\n    <div className="container">\n      {/* ... */}\n      {/* STEP 1: \u628a\u60f3\u8981\u50b3\u5165 CardFooter \u7684\u8cc7\u6599\u900f\u904e key={value} \u7684\u65b9\u5f0f\u50b3\u5165 */}\n      <CardFooter inputValue={inputValue} />\n    </div>\n  );\n}\n')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u63d0\u9192")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"key")," \u7684\u547d\u540d\u4e3b\u8981\u662f\u8b93\u5b50\u5c64\u5143\u4ef6\u53d6\u7528 props \u6642\u4f7f\u7528\uff0c\u4e26\u6c92\u6709\u786c\u6027\u898f\u5b9a\u8981\u7528\u4ec0\u9ebc\u540d\u7a31\uff0c\u53ea\u662f\u9019\u88e1\u525b\u597d\u90fd\u53d6\u505a ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue"),"\u3002"))),Object(r.b)("h3",{id:"\u5728-cardfooter-\u5f9e-props-\u53d6\u5f97-app-\u50b3\u9032\u4f86\u7684-inputvalue"},"\u5728 CardFooter \u5f9e props \u53d6\u5f97 App \u50b3\u9032\u4f86\u7684 InputValue"),Object(r.b)("p",null,"\u63a5\u8457\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"<CardFooter />")," \u7684\u5143\u4ef6\u4e2d\uff0c\u5c31\u53ef\u4ee5\u5728\u53c3\u6578\u4e2d\u900f\u904e ",Object(r.b)("inlineCode",{parentName:"p"},"props")," \u53d6\u5f97\u50b3\u9032\u4f86\u7684\u8cc7\u6599\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"props")," \u672c\u8eab\u6703\u662f\u4e00\u500b\u7269\u4ef6\uff0c\u56e0\u6b64\u4e00\u6a23\u53ef\u4ee5\u900f\u904e\u89e3\u69cb\u8ce6\u503c\u7684\u65b9\u5f0f\uff0c\u628a\u60f3\u8981\u7684\u8cc7\u6599\u53d6\u51fa\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// STEP 2\uff1a\u900f\u904e props \u53d6\u5f97\u5f9e\u7236\u5c64\u50b3\u5165\u7684\u8cc7\u6599\nconst CardFooter = (props) => {\n  const { inputValue } = props;\n\n  // ...\n};\n")),Object(r.b)("p",null,"\u6574\u500b\u6d41\u7a0b\u6703\u50cf\u9019\u6a23\uff1a"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/XBa6DWd.png",alt:"Imgur"}))),Object(r.b)("p",null,"\u5982\u679c\u4f60\u5c0d\u65bc ",Object(r.b)("inlineCode",{parentName:"p"},"props")," \u9084\u4e0d\u662f\u9019\u9ebc\u719f\u6089\u7684\u8a71\uff0c\u4e5f\u53ef\u4ee5\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"<CardFooter />")," \u4e2d\u900f\u904e ",Object(r.b)("inlineCode",{parentName:"p"},"console.log(props)")," \u628a\u5b83\u5448\u73fe\u51fa\u4f86\u770b\u4e00\u4e0b\u3002"),Object(r.b)("h2",{id:"\u63db\u4f60\u4e86\uff1a\u5728-cardfooter-\u53d6\u5f97-app-\u7684-inputvalue"},"\u63db\u4f60\u4e86\uff1a\u5728 CardFooter \u53d6\u5f97 App \u7684 inputValue"),Object(r.b)("p",null,"\u73fe\u5728\u8f2a\u5230\u4f60\u7df4\u7fd2\u628a App \u4e2d\u7684\u72c0\u614b ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue")," \u900f\u904e props \u50b3\u905e\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"CardFooter")," \u4e2d\uff0c\u5be6\u505a\u7684\u6d41\u7a0b\u6703\u50cf\u662f\u9019\u6a23\uff1a"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 App \u4e2d\u900f\u904e html \u6a19\u7c64\u7684\u65b9\u5f0f\u628a ",Object(r.b)("inlineCode",{parentName:"li"},"inputValue")," \u50b3\u5230 CardFooter \u5143\u4ef6"),Object(r.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 CardFooter \u4e2d\uff0c\u900f\u904e\u51fd\u5f0f\u53c3\u6578\u7684\u65b9\u5f0f\uff0c\u53d6\u5f97 App \u50b3\u9032\u4f86\u7684 props"),Object(r.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 CardFooter \u4e2d\u900f\u904e ",Object(r.b)("inlineCode",{parentName:"li"},"console.log(props)")," \u78ba\u8a8d\u6709\u5f97\u5230 props")),Object(r.b)("h2",{id:"\u6839\u64da-inputvalue-\u6539\u8b8a-cardfooter-\u7684\u6a23\u5f0f"},"\u6839\u64da inputValue \u6539\u8b8a CardFooter \u7684\u6a23\u5f0f"),Object(r.b)("p",null,"\u73fe\u5728\u6211\u5011\u5df2\u7d93\u53ef\u4ee5\u5728 CardFooter \u53d6\u5f97 App \u4e2d\u7684\u8cc7\u6599\u72c0\u614b\uff0c\u6700\u5f8c\u8981\u4f86\u6839\u64da\u9019\u500b ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue")," \u642d\u914d\u524d\u4e00\u7ae0\u8aaa\u660e\u7684\u689d\u4ef6\u8f49\u8b6f\u548c\u52d5\u614b CSS \u6a23\u5f0f\u4f86\u8b93 CardFooter \u53ef\u4ee5\u52d5\u614b\u6539\u8b8a\u3002"),Object(r.b)("p",null,"\u9019\u88e1\u7684\u908f\u8f2f\u6703\u662f\u9019\u6a23\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u7576 ",Object(r.b)("inlineCode",{parentName:"li"},"inputValue")," \u6c92\u6709\u8f38\u5165\u6642\uff0cFooter \u6703\u986f\u793a ",Object(r.b)("inlineCode",{parentName:"li"},"---"),"\uff0c\u984f\u8272\u6703\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"#d3d8e2")),Object(r.b)("li",{parentName:"ul"},"\u7576 ",Object(r.b)("inlineCode",{parentName:"li"},"inputValue")," \u5c0f\u65bc 15 \u6642\uff0cFooter \u6703\u986f\u793a ",Object(r.b)("inlineCode",{parentName:"li"},"SLOW"),"\uff0c\u984f\u8272\u6703\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"#ee362d")),Object(r.b)("li",{parentName:"ul"},"\u7576 ",Object(r.b)("inlineCode",{parentName:"li"},"15 <= inputValue < 40"),"\uff0cFooter \u6703\u986f\u793a ",Object(r.b)("inlineCode",{parentName:"li"},"GOOD"),"\uff0c\u984f\u8272\u6703\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"#1b82f1")),Object(r.b)("li",{parentName:"ul"},"\u7576 ",Object(r.b)("inlineCode",{parentName:"li"},"inputValue")," \u5927\u65bc\u7b49\u65bc 40 \u6642\uff0cFooter \u6703\u986f\u793a ",Object(r.b)("inlineCode",{parentName:"li"},"FAST"),"\uff0c\u984f\u8272\u6703\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"#13d569"))),Object(r.b)("p",null,"\u9019\u88e1\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"if...else...else if")," \u505a\u51fa\u985e\u4f3c\u7684\u5224\u65b7\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// ...\nconst CardFooter = (props) => {\n  const { inputValue } = props;\n  let criteria = {};\n\n  if (!inputValue) {\n    criteria = {\n      title: '---',\n      backgroundColor: '#d3d8e2',\n    };\n  } else if (inputValue < 15) {\n    criteria = {\n      title: 'SLOW',\n      backgroundColor: '#ee362d',\n    };\n  } else if (inputValue < 40) {\n    // ...\n  } else if (inputValue >= 40) {\n    // ...\n  }\n\n  // ...\n};\n")),Object(r.b)("p",null,"\u63a5\u8457\u5728\u6700\u5f8c ",Object(r.b)("inlineCode",{parentName:"p"},"return")," JSX \u7684\u5730\u65b9\uff0c\u628a\u5c0d\u61c9\u7684\u80cc\u666f\u984f\u8272\u548c\u6a19\u984c\u5e36\u9032\u53bb\u5c31\u53ef\u4ee5\u4e86\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'return (\n  <div\n    className="card-footer"\n    style={{\n      backgroundColor: criteria.backgroundColor,\n    }}\n  >\n    {criteria.title}\n  </div>\n);\n')),Object(r.b)("p",null,"\u5b8c\u6210\u5f8c\uff0c\u7576\u4f7f\u7528\u8005\u8f38\u5165\u7684\u6578\u5b57\u4e0d\u540c\u6642\uff0cCardFooter \u5c31\u6703\u5c0d\u61c9\u51fa\u73fe\u4e0d\u540c\u7684\u6587\u5b57\u5167\u5bb9\u548c\u984f\u8272\uff1a"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/XnAqk5R.png",alt:"Imgur"}))),Object(r.b)("h2",{id:"\u63db\u4f60\u4e86\uff1a\u6839\u64da-inputvalue-\u6539\u8b8a-cardfooter-\u7684\u6587\u5b57\u5167\u5bb9\u548c\u6a23\u5f0f"},"\u63db\u4f60\u4e86\uff1a\u6839\u64da inputValue \u6539\u8b8a CardFooter \u7684\u6587\u5b57\u5167\u5bb9\u548c\u6a23\u5f0f"),Object(r.b)("p",null,"\u5728\u5df2\u7d93\u53d6\u5f97 App \u4e2d\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue")," \u5f8c\uff0c\u8981\u8acb\u4f60\u6839\u64da ",Object(r.b)("inlineCode",{parentName:"p"},"inputValue")," \u4f86\u8b93 CardFooter \u986f\u793a\u4e0d\u540c\u7684\u5167\u5bb9\u548c\u80cc\u666f\u6a23\u5f0f\uff0c\u985e\u4f3c\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5efa\u7acb\u5224\u65b7 ",Object(r.b)("inlineCode",{parentName:"li"},"inputValue")," \u4f86\u986f\u793a\u4e0d\u540c\u5167\u5bb9\u548c\u80cc\u666f\u6a23\u5f0f\u7684\u908f\u8f2f"),Object(r.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5c07\u5224\u65b7\u5f8c\u7684\u7d50\u679c\u4ee5\u8b8a\u6578\u548c style \u7684\u65b9\u5f0f\u5e36\u5165 JSX \u4e2d")),Object(r.b)("p",null,"\u672c\u55ae\u5143\u76f8\u95dc\u4e4b\u7db2\u9801\u9023\u7d50\u3001\u5b8c\u6574\u7a0b\u5f0f\u78bc\u8207\u7a0b\u5f0f\u78bc\u8b8a\u66f4\u90e8\u5206\u53ef\u65bc ",Object(r.b)("inlineCode",{parentName:"p"},"pass-props-to-components")," \u5206\u652f\u6aa2\u8996\uff1a",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hooks-internet-speed-converter/tree/pass-props-to-components"}),"https://github.com/pjchender/learn-react-from-hooks-internet-speed-converter/tree/pass-props-to-components")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/1QPtxwr.png",alt:"Imgur"}))))}b.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),p=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=p.a.createContext({}),b=function(e){var t=p.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return p.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},u=p.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||r;return n?p.a.createElement(m,c(c({ref:t},l),{},{components:n})):p.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);