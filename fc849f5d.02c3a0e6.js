(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{171:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var o=t(3),a=t(7),c=(t(0),t(178)),r={title:"7-5 Uncontrolled components \u548c useRef \u7684\u4f7f\u7528",keywords:["React Hooks","uncontrolled components","useRef"]},l={unversionedId:"book/ch7/7-5",id:"book/ch7/7-5",isDocsHomePage:!1,title:"7-5 Uncontrolled components \u548c useRef \u7684\u4f7f\u7528",description:"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1auncontrolled-components-with-use-ref\u3002",source:"@site/docs/book/ch7/7-5.md",slug:"/book/ch7/7-5",permalink:"/react-bootcamp/docs/book/ch7/7-5",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/book/ch7/7-5.md",version:"current",sidebar:"book",previous:{title:"7-4 React \u4e2d\u7684\u8868\u55ae\u8655\u7406\uff08Controlled vs Uncontrolled\uff09",permalink:"/react-bootcamp/docs/book/ch7/7-4"},next:{title:"7-6 \u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u884c\u8a2d\u5b9a\u5730\u5340",permalink:"/react-bootcamp/docs/book/ch7/7-6"}},i=[{value:"\u55ae\u5143\u6838\u5fc3",id:"\u55ae\u5143\u6838\u5fc3",children:[]},{value:"\u70ba\u4ec0\u9ebc\u8981\u4f7f\u7528 Uncontrolled Components",id:"\u70ba\u4ec0\u9ebc\u8981\u4f7f\u7528-uncontrolled-components",children:[]},{value:"useRef \u7684\u57fa\u672c\u7528\u6cd5",id:"useref-\u7684\u57fa\u672c\u7528\u6cd5",children:[]},{value:"\u5957\u7528\u5230\u8a2d\u5b9a\u9801\u9762",id:"\u5957\u7528\u5230\u8a2d\u5b9a\u9801\u9762",children:[{value:"\u5728 Uncontrolled Components \u4e2d\u8a2d\u5b9a\u9810\u8a2d\u503c",id:"\u5728-uncontrolled-components-\u4e2d\u8a2d\u5b9a\u9810\u8a2d\u503c",children:[]}]},{value:"\u63db\u4f60\u4e86\uff01\u4f7f\u7528 uncontrolled components \u7684\u65b9\u5f0f\u53d6\u5f97\u4f7f\u7528\u8005\u6b32\u5132\u5b58\u7684\u5730\u5340\u8cc7\u8a0a",id:"\u63db\u4f60\u4e86\uff01\u4f7f\u7528-uncontrolled-components-\u7684\u65b9\u5f0f\u53d6\u5f97\u4f7f\u7528\u8005\u6b32\u5132\u5b58\u7684\u5730\u5340\u8cc7\u8a0a",children:[]},{value:"useRef \u7684\u88dc\u5145\u8aaa\u660e\uff1a\u5728 Functional Component \u4e2d\u5efa\u7acb\u4e0d\u6703\u5c0e\u81f4\u756b\u9762\u66f4\u65b0\u7684\u8b8a\u6578",id:"useref-\u7684\u88dc\u5145\u8aaa\u660e\uff1a\u5728-functional-component-\u4e2d\u5efa\u7acb\u4e0d\u6703\u5c0e\u81f4\u756b\u9762\u66f4\u65b0\u7684\u8b8a\u6578",children:[]}],b={toc:i};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1a",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/uncontrolled-components-with-use-ref"}),"uncontrolled-components-with-use-ref"),"\u3002"),Object(c.b)("h2",{id:"\u55ae\u5143\u6838\u5fc3"},"\u55ae\u5143\u6838\u5fc3"),Object(c.b)("p",null,"\u9019\u500b\u55ae\u5143\u7684\u4e3b\u8981\u76ee\u6a19\u5305\u542b\uff1a"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u4e86\u89e3\u4ec0\u9ebc\u662f Uncontrolled Components"),Object(c.b)("li",Object(o.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(o.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u900f\u904e useRef \u4f86\u53d6\u5f97\u8868\u55ae\u8cc7\u6599")),Object(c.b)("hr",null),Object(c.b)("p",null,"\u5728\u4e0a\u4e00\u500b\u55ae\u5143\u4e2d\uff0c\u63d0\u5230\u4e86\u8868\u55ae\u7684\u5169\u7a2e\u8655\u7406\u65b9\u5f0f\uff0c\u5206\u5225\u662f controlled components \u548c uncontrolled components\u3002\u5728\u4e0a\u4e00\u500b\u55ae\u5143\u4e2d\u5df2\u7d93\u8aaa\u660e\u4e86 controlled components \u7684\u505a\u6cd5\uff0c\u5728\u9019\u500b\u55ae\u5143\u4e2d\u9032\u4e00\u6b65\u4f86\u770b\u5982\u4f55\u4f7f\u7528 uncontrolled components \u9054\u5230\u76f8\u540c\u7684\u7d50\u679c\u3002"),Object(c.b)("p",null,"\u9019\u500b\u55ae\u5143\u7684 useRef \u7684\u8aaa\u660e\u4e26\u4e0d\u6703\u653e\u5165\u6700\u5f8c\u5b8c\u6574\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u4e3b\u8981\u662f\u4f5c\u70ba\u793a\u7bc4\u8aaa\u660e\u7528\u3002"),Object(c.b)("h2",{id:"\u70ba\u4ec0\u9ebc\u8981\u4f7f\u7528-uncontrolled-components"},"\u70ba\u4ec0\u9ebc\u8981\u4f7f\u7528 Uncontrolled Components"),Object(c.b)("p",null,"\u4e00\u822c\u4f86\u8aaa\u9664\u975e\u662f ",Object(c.b)("inlineCode",{parentName:"p"},'<input type="file">')," \u9019\u7a2e\u6a94\u6848\u4e0a\u50b3\u7684\u6b04\u4f4d\u4e4b\u5916\uff0c\u591a\u6703\u4f7f\u7528 Controlled Component \u4f86\u505a\u3002"),Object(c.b)("p",null,"\u4f46\u6709\u4e9b\u6642\u5019\u53ef\u80fd\u53ea\u662f\u60f3\u8981\u5f88\u7c21\u55ae\u7684\u53bb\u53d6\u5f97\u8868\u55ae\u4e2d\u67d0\u500b\u6b04\u4f4d\u7684\u503c\uff0c\u6216\u8005\u662f\u6709\u4e00\u4e9b\u60c5\u6cc1\u4e0b\u9700\u8981\u76f4\u63a5\u5c0d DOM \u5143\u7d20\u9032\u884c\u64cd\u4f5c\uff08\u4f8b\u5982\uff0c\u97f3\u6a02\u64ad\u653e\u5668\u4e2d\u6709\u8a31\u591a\u65b9\u6cd5\u662f\u76f4\u63a5\u7d81\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"<video>")," \u5143\u7d20\u4e0a\u7684\uff09\uff0c\u9019\u6642\u5c31\u53ef\u4ee5\u4f7f\u7528 React \u4e2d\u63d0\u4f9b\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u9019\u500b Hooks\u3002"),Object(c.b)("p",null,"\u524d\u4e00\u500b\u55ae\u5143\u5728 Controlled Components \u7684\u8868\u55ae\u4e2d\uff0c\u6703\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"useState")," \u642d\u914d ",Object(c.b)("inlineCode",{parentName:"p"},"onChange")," \u4f86\u96a8\u6642\u66f4\u65b0\u4f7f\u7528\u8005\u76ee\u524d\u5728\u8868\u55ae\u4e2d\u586b\u5165\u7684\u8cc7\u6599\uff0c\u628a\u8332\u9019\u4e9b\u8cc7\u6599\u653e\u5230 React \u5143\u4ef6\u5167\u90e8\u7684 state \u4f86\u7ba1\u7406\u3002"),Object(c.b)("p",null,"\u4f46\u5728 Uncontrolled Components \u4e26\u4e0d\u6703\u628a\u8cc7\u6599\u4ea4\u7d66 React \u7ba1\u7406\uff0c\u800c\u662f\u81ea\u5df1\u9078\u5230\u8a72 ",Object(c.b)("inlineCode",{parentName:"p"},"<input />")," \u5143\u7d20\u5f8c\u53bb\u5f9e\u8a72 DOM \u5143\u7d20\u4e2d\u628a\u503c\u53d6\u51fa\u4f86\u3002\u5728 React \u4e2d\u82e5\u60f3\u8981\u9078\u53d6\u5230\u67d0\u4e00\u5143\u7d20\u6642\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u9019\u500b React Hooks\u3002"),Object(c.b)("p",null,"\u9019\u88e1\u6211\u5011\u5c31\u540c\u6a23\u4ee5 WeatherSetting \u9019\u500b\u8868\u55ae\u70ba\u4f8b\uff0c\u53ea\u662f\u9019\u6b21\u628a\u5b83\u4f5c\u70ba Uncontrolled Components \u642d\u914d ",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u4f86\u4f7f\u7528\u3002"),Object(c.b)("h2",{id:"useref-\u7684\u57fa\u672c\u7528\u6cd5"},"useRef \u7684\u57fa\u672c\u7528\u6cd5"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u7684\u57fa\u672c\u7528\u6cd5\u5982\u4e0b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"useRef")," \u5167\u53ef\u4ee5\u653e\u9032\u4e00\u500b\u9810\u8a2d\u503c\uff08initialValue\uff09"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"useRef")," \u6703\u56de\u50b3\u4e00\u500b\u7269\u4ef6\uff08refContainer\uff09\uff0c\u9019\u500b\u7269\u4ef6\u4e2d\u6703\u6709\u4e00\u500b\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"li"},"current")," \u7684\u5c6c\u6027\uff0c\u88e1\u9762\u653e\u7684\u6703\u662f\u4e00\u958b\u59cb\u7d66\u7684\u9810\u8a2d\u503c"),Object(c.b)("li",{parentName:"ul"},"\u9019\u500b\u7269\u4ef6\u6700\u91cd\u8981\u7684\u662f",Object(c.b)("strong",{parentName:"li"},"\u5b83\u4e0d\u6703\u96a8\u8457\u6bcf\u4e00\u6b21\u756b\u9762\u91cd\u65b0\u8f49\u8b6f\u800c\u6307\u7a31\u5230\u4e0d\u540c\u7684\u7269\u4ef6\uff0c\u800c\u662f\u53ef\u4ee5\u4e00\u76f4\u6307\u7a31\u5230\u540c\u4e00\u500b\u7269\u4ef6"))),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// \u4f7f\u7528 useRef \u6703\u56de\u50b3\u4e00\u500b\u5e36\u6709 initialValue \u7684\u7269\u4ef6\nconst refContainer = useRef(initialValue);\n")),Object(c.b)("p",null,"\u4f60\u53ef\u4ee5\u628a\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u53d6\u5f97\u7684\u7269\u4ef6\uff0c\u7576\u4f5c\u662f\u5b8c\u5168\u7368\u7acb\u65bc React \u5143\u4ef6\u7684\u8b8a\u6578\uff0c\u5b83\u4e0d\u6703\u53d7\u5230 React \u5143\u4ef6\u91cd\u65b0\u8f49\u8b6f\u7684\u5f71\u97ff\uff0c\u540c\u6a23\u7684\uff0c\u7576\u4f60\u5c0d\u88e1\u9762\u7684\u503c\u9032\u884c\u64cd\u4f5c\u6642\uff0c\u548c ",Object(c.b)("inlineCode",{parentName:"p"},"useState")," \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"setSomething")," \u4e0d\u540c\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u4e5f\u4e0d\u6703\u89f8\u767c React \u5143\u4ef6\u91cd\u65b0\u8f49\u8b6f\u3002\u8209\u4f8b\u4f86\u8aaa\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const fooRef = useRef('foo');\n\n// \u5728\u56de\u50b3\u7269\u4ef6\u7684 current \u5c6c\u6027\u4e2d\u53ef\u4ee5\u53d6\u5f97\u539f\u672c\u7684\u503c\nconsole.log(fooRef.current === 'foo'); // true\n\n// \u53ef\u4ee5\u76f4\u63a5\u5c0d\u5176\u4fee\u6539\u5c6c\u6027\u503c\uff0c\u9019\u9ebc\u505a\u4e0d\u6703\u89f8\u767c\u5143\u4ef6\u91cd\u65b0\u8f49\u8b6f\nfooRef.current = 'bar';\nconsole.log(fooRef.current); // bar\n")),Object(c.b)("p",null,"\u5982\u679c\u662f\u8981\u628a ",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u7576\u6210 ",Object(c.b)("inlineCode",{parentName:"p"},"document.querySelector")," \u4f86\u9078\u53d6\u5230\u67d0\u4e00\u5143\u7d20\u7684\u8a71\uff0c\u53ef\u4ee5\u5728\u8a72 HTML \u5143\u7d20\u4e0a\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"ref")," \u5c6c\u6027\uff0c\u4e26\u628a ",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u56de\u50b3\u7684\u7269\u4ef6\u653e\u9032\u53bb\u5373\u53ef\uff0c\u4f8b\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const InputElement = () => {\n  // \u900f\u904e useRef \u53d6\u5f97\u4e00\u500b\u4e0d\u5e36\u521d\u59cb\u8cc7\u6599\u7684 inputRef\n  const inputRef = useRef(null);\n\n  // \u900f\u904e\u5728 HTML \u5143\u7d20\u4e0a\u4f7f\u7528 ref \u5c6c\u6027\uff0c\u628a useRef \u53d6\u5f97\u7684\u56de\u50b3\u503c\u5e36\u9032\u53bb\n  return <input ref={inputRef} />;\n};\n")),Object(c.b)("p",null,"\u9019\u6642\u5019\u53ea\u8981\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"inputRef.current")," \u5c31\u53ef\u4ee5\u6307\u7a31\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"<input />")," \u9019\u500b HTML \u5143\u7d20\uff0c\u5c31\u5f88\u50cf\u662f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"document.querySelector('input')")," \u5f8c\u53d6\u5f97\u7684\u7d50\u679c\u3002"),Object(c.b)("h2",{id:"\u5957\u7528\u5230\u8a2d\u5b9a\u9801\u9762"},"\u5957\u7528\u5230\u8a2d\u5b9a\u9801\u9762"),Object(c.b)("p",null,"\u8b93\u6211\u5011\u628a\u539f\u672c Controlled Components \u7684\u5beb\u6cd5\u79fb\u9664\uff0c\u5be6\u969b\u5957\u7528 Uncontrolled Components \u5230\u5730\u5340\u8a2d\u5b9a\u9801\u9762\u4f86\u770b\u770b\u53ef\u4ee5\u600e\u9ebc\u7528\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5148\u5f9e ",Object(c.b)("inlineCode",{parentName:"li"},"react")," \u4e2d\u53d6\u51fa ",Object(c.b)("inlineCode",{parentName:"li"},"useRef")," \u9019\u500b Hook \u4f86\u7528\uff0c\u628a\u539f\u672c\u7528\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"useState")," \u79fb\u9664")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// ./src/views/WeatherSetting.js\nimport React, { useRef } from 'react';\n")),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"useRef")," \u4f86\u5efa\u7acb\u53ef\u4ee5\u4e00\u76f4\u88ab\u53c3\u7167\u5230\u7684\u7269\u4ef6\uff0c\u5c07\u9019\u500b\u56de\u50b3\u7684\u7269\u4ef6\u53d6\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"li"},"inputLocationRef")),Object(c.b)("li",{parentName:"ol"},"\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"<input>")," \u7684\u5730\u65b9\uff0c\u4e0d\u9700\u8981\u518d\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"onChange")," \u4e8b\u4ef6\u96a8\u6642\u66f4\u65b0 React \u7684\u8cc7\u6599\u72c0\u614b\uff0c\u800c\u662f\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"ref={inputLocationRef}")," \u8b93 ",Object(c.b)("inlineCode",{parentName:"li"},"inputLocationRef.current")," \u53ef\u4ee5\u6307\u7a31\u5230\u9019\u500b input \u6b04\u4f4d\uff0c\u8cc7\u6599\u662f\u4fdd\u5b58\u5728\u700f\u89bd\u5668\u672c\u8eab\u7684 input \u6b04\u4f4d\u4e2d")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'const WeatherSetting = ({ handleCurrentPageChange }) => {\n  // STEP 2\uff1a\u4f7f\u7528 useRef \u5efa\u7acb\u4e00\u500b ref\uff0c\u53d6\u540d\u70ba inputLocationRef\n  const inputLocationRef = useRef(null);\n\n  return (\n    {/* STEP 3\uff1a\u5c07 useRef \u56de\u50b3\u7684\u7269\u4ef6\uff0c\u6307\u7a31\u70ba\u8a72 input \u5143\u7d20 */}\n    <StyledSelect id="location" name="location" ref={inputLocationRef}>\n      {/*  */}\n    </StyledSelect>\n  );\n};\n\n')),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"\u5b9a\u7fa9 ",Object(c.b)("inlineCode",{parentName:"li"},"handleSave")," \u65b9\u6cd5\uff0c\u5728\u8a72\u65b9\u6cd5\u4e2d\uff0c\u5373\u53ef\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"inputLocationRef.current")," \u5373\u53ef\u53d6\u5f97\u525b\u525b\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"ref")," \u6307\u7a31\u7684\u5143\u7d20\uff0c\u4e26\u4e14\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"inputLocationRef.current.value")," \u5c31\u53ef\u4ee5\u53d6\u5f97\u8a72\u6b04\u4f4d\u7684\u503c")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const WeatherSetting = ({ handleCurrentPageChange }) => {\n  // ...\n\n  // STEP 4\uff1a\u900f\u904e inputLocationRef.current \u53d6\u5f97\u900f\u904e ref \u6307\u7a31\u7684 HTML \u5143\u7d20\n  const handleSave = () => {\n    console.log('value', inputLocationRef.current.value);\n  };\n\n  return (\n    // ...\n    <ButtonGroup>\n      <Back onClick={() => handleCurrentPageChange('WeatherCard')}>\u8fd4\u56de</Back>\n      <Save onClick={handleSave}>\u5132\u5b58</Save>\n    </ButtonGroup>\n  );\n};\n")),Object(c.b)("p",null,"\u6b64\u6642\u7576\u4f7f\u7528\u8005\u6309\u4e0b\u5132\u5b58\u6309\u9215\u6642\uff0c\u4e00\u6a23\u6703\u5728\u700f\u89bd\u5668\u7684 console \u9762\u677f\u4e2d\u51fa\u73fe\u4f7f\u7528\u8005\u60f3\u8981\u5132\u5b58\u7684\u5730\u5340\u8cc7\u8a0a\u3002"),Object(c.b)("h3",{id:"\u5728-uncontrolled-components-\u4e2d\u8a2d\u5b9a\u9810\u8a2d\u503c"},"\u5728 Uncontrolled Components \u4e2d\u8a2d\u5b9a\u9810\u8a2d\u503c"),Object(c.b)("p",null,"\u5c0d\u65bc Uncontrolled Components \u82e5\u60f3\u8981\u5b9a\u7fa9\u9810\u8a2d\u503c\uff0c\u53ef\u4ee5\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"<input>")," \u6b04\u4f4d\u4e2d\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"defaultValue"),"\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'const WeatherSetting = ({ handleCurrentPageChange }) => {\n  // ...\n\n  return (\n    // ...\n    <StyledSelect\n      id="location"\n      name="location"\n      ref={inputLocationRef}\n      // \u900f\u904e defaultValue \u8a2d\u5b9a\u9810\u8a2d\u503c\n      defaultValue="\u81fa\u5357\u5e02"\n    >\n      {/*  */}\n    </StyledSelect>\n  );\n};\n')),Object(c.b)("p",null,"\u5982\u6b64\uff0c\u7576\u4f7f\u7528\u8005\u4e00\u9032\u4f86\u8a2d\u5b9a\u9801\u9762\u6642\uff0c\u986f\u793a\u7684\u9078\u9805\u5c31\u6703\u662f\u300c\u81fa\u5357\u5e02\u300d\u3002\u6b64\u5916\uff0c\u7531\u65bc\u73fe\u5728\u4e26\u6c92\u6709\u76e3\u63a7 ",Object(c.b)("inlineCode",{parentName:"p"},"onChange")," \u4e8b\u4ef6\uff0c\u4e5f\u6c92\u6709\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"setSomething")," \u7684\u65b9\u6cd5\u4f86\u8b8a\u66f4 React \u5143\u4ef6\u5167\u7684\u8cc7\u6599\u72c0\u614b\uff0c\u56e0\u6b64\u4e0d\u7ba1\u4f7f\u7528\u8005\u5728\u4e2d\u9014\u5207\u63db\u904e\u4ec0\u9ebc\u9078\u9805\uff0c\u958b\u767c\u8005\u90fd\u4e0d\u6703\u7406\u6703\uff0c\u53ea\u8981\u5728\u6700\u5f8c\u6309\u4e0b\u5132\u5b58\u6309\u9215\u6642\uff0c\u624d\u6703\u5f9e\u8a72 HTML \u5143\u7d20\u4e2d\u628a\u503c\u53d6\u51fa\u3002"),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u63d0\u793a")),Object(c.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u767c\u73fe\u7576\u6211\u5011\u628a ",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u56de\u50b3\u7684\u7269\u4ef6\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"rel")," \u7684\u65b9\u5f0f\u653e\u5230 HTML \u5143\u7d20\u4e2d\u6642\uff0c\u5c31\u5f88\u50cf\u662f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"document.querySelector")," \u53bb\u9078\u5230\u8a72\u5143\u7d20\u5f8c\uff0c\u4fdd\u5b58\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u56de\u50b3\u7269\u4ef6\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"current")," \u5c6c\u6027\u5167\u3002"))),Object(c.b)("h2",{id:"\u63db\u4f60\u4e86\uff01\u4f7f\u7528-uncontrolled-components-\u7684\u65b9\u5f0f\u53d6\u5f97\u4f7f\u7528\u8005\u6b32\u5132\u5b58\u7684\u5730\u5340\u8cc7\u8a0a"},"\u63db\u4f60\u4e86\uff01\u4f7f\u7528 uncontrolled components \u7684\u65b9\u5f0f\u53d6\u5f97\u4f7f\u7528\u8005\u6b32\u5132\u5b58\u7684\u5730\u5340\u8cc7\u8a0a"),Object(c.b)("p",null,"\u9019\u500b\u55ae\u5143\u4e3b\u8981\u662f\u793a\u7bc4\u548c\u8aaa\u660e uncontrolled components \u9084\u6709 ",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u7684\u4f7f\u7528\uff0c\u4f46\u662f\u4e00\u822c\u4f86\u8aaa\uff0c\u5728\u6c92\u6709\u984d\u5916\u9700\u6c42\u7684\u60c5\u6cc1\u4e0b\uff0cReact \u7684\u8868\u55ae\u9084\u662f\u6703\u4f7f\u7528 Controlled Components\uff0c\u5982\u6b64\u624d\u80fd\u77e5\u9053\u6bcf\u4e00\u6b21\u4f7f\u7528\u8005\u8f38\u5165\u7684\u5167\u5bb9\uff0c\u505a\u51fa\u7acb\u5373\u7684\u4e92\u52d5\u6548\u679c\uff08\u4f8b\u5982\uff0c\u932f\u8aa4\u63d0\u793a\u3001\u8868\u55ae\u9a57\u8b49\u7b49\u7b49\uff09\u3002\u8b80\u8005\u53ef\u4ee5\u53c3\u8003\u4ee5\u4e0b\u6b65\u9a5f\u5b8c\u6210\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"import")," \u532f\u5165 ",Object(c.b)("inlineCode",{parentName:"li"},"useRef")," \u9019\u500b React Hooks"),Object(c.b)("li",{parentName:"ol"},"\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"useRef")," \u4e2d\u5e36\u5165\u9810\u8a2d\u503c\u70ba ",Object(c.b)("inlineCode",{parentName:"li"},"null"),"\uff0c\u4e26\u53d6\u5f97 ",Object(c.b)("inlineCode",{parentName:"li"},"inputLocationRef")," \u7269\u4ef6"),Object(c.b)("li",{parentName:"ol"},"\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"ref")," \u9019\u500b\u5c6c\u6027\uff0c\u8b93 ",Object(c.b)("inlineCode",{parentName:"li"},"inputLocationRef")," \u53ef\u4ee5\u53c3\u7167\u5230\u8a72 select \u5143\u4ef6"),Object(c.b)("li",{parentName:"ol"},"\u5728\u4f7f\u7528\u8005\u9078\u64c7\u4e0d\u540c\u7684\u5730\u5340\u6642\uff0c\u53ef\u4ee5\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"inputLocationRef.current")," \u6307\u7a31\u5230 Select \u5143\u7d20"),Object(c.b)("li",{parentName:"ol"},"\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"inputLocationRef.current.value")," \u5373\u53ef\u53d6\u5f97\u4f7f\u7528\u8005\u9078\u64c7\u7684\u9805\u76ee\u503c")),Object(c.b)("p",null,"\u5f9e\u9019\u5f35\u5716\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230\u5728\u7a0b\u5f0f\u78bc\u4e0a\uff0c\u4f7f\u7528 Controlled Components \u548c Uncontrolled Components \u4e0a\u7684\u5dee\u7570\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/LdYNv0E.png",alt:"Imgur"}))),Object(c.b)("p",null,"\u96d6\u7136\u900f\u904e Uncontrolled Components \u7684\u4f5c\u6cd5\u4e00\u6a23\u53ef\u4ee5\u5b8c\u6210\u5f8c\u7e8c\u8981\u505a\u7684\u4fdd\u5b58\u4f7f\u7528\u8005\u5730\u5340\u8cc7\u8a0a\u7684\u529f\u80fd\uff0c\u4f46\u76ee\u524d\u4f9d\u7167 React \u7684\u5efa\u8b70\uff0c\u5728\u4e0b\u4e00\u500b\u55ae\u5143\u4e2d\uff0c\u6211\u5011\u4ecd\u6703\u4f7f\u7528\u4e0a\u4e00\u500b\u55ae\u5143\u5b8c\u6210\u7684 Controlled Components \u7684\u505a\u6cd5\uff0c\u56e0\u6b64\u7df4\u7fd2\u5b8c\u5f8c\uff0c\u8a18\u5f97\u8981\u4fee\u6539\u56de\u539f\u672c\u7684\u7a0b\u5f0f\u78bc\u3002"),Object(c.b)("h2",{id:"useref-\u7684\u88dc\u5145\u8aaa\u660e\uff1a\u5728-functional-component-\u4e2d\u5efa\u7acb\u4e0d\u6703\u5c0e\u81f4\u756b\u9762\u66f4\u65b0\u7684\u8b8a\u6578"},"useRef \u7684\u88dc\u5145\u8aaa\u660e\uff1a\u5728 Functional Component \u4e2d\u5efa\u7acb\u4e0d\u6703\u5c0e\u81f4\u756b\u9762\u66f4\u65b0\u7684\u8b8a\u6578"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u9664\u4e86\u53ef\u4ee5\u7528\u4f86\u53c3\u7167\u56de\u67d0\u500b\u8868\u55ae\u5143\u4ef6\u5916\uff0c\u5728 React \u4e2d\u4e5f\u5f88\u5e38\u7528\u4f86\u5efa\u7acb\u4e00\u500b\u4e0d\u6703\u4f7f\u5f97\u756b\u9762\u66f4\u65b0\u7684\u8b8a\u6578\u4f86\u4f7f\u7528\uff0c\u56e0\u6b64\u958b\u767c\u8005\u53ef\u4ee5\u628a\u4e00\u4e9b\u8b8a\u6578\u7684\u8cc7\u6599\u4fdd\u5b58\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"useRef")," \u53d6\u5f97\u7269\u4ef6\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"current")," \u5c6c\u6027\u4e2d\uff0c\u4e26\u5728\u9700\u8981\u6642\u9032\u884c\u4fee\u6539\u5373\u53ef\u3002\u95dc\u65bc\u9019\u90e8\u5206\u66f4\u591a\u7684\u88dc\u5145\uff0c\u53ef\u4ee5\u6aa2\u8996\u672c\u55ae\u5143\u65bc Github \u5c08\u6848\u5206\u652f\u7684\u8aaa\u660e\u9801\u6aa2\u8996\u3002"),Object(c.b)("p",null,"\u672c\u55ae\u5143\u76f8\u95dc\u4e4b\u7db2\u9801\u9023\u7d50\u3001\u5b8c\u6574\u7a0b\u5f0f\u78bc\u8207\u7a0b\u5f0f\u78bc\u8b8a\u66f4\u90e8\u5206\u53ef\u65bc ",Object(c.b)("inlineCode",{parentName:"p"},"uncontrolled-components-with-use-ref")," \u5206\u652f\u6aa2\u8996\uff1a",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/uncontrolled-components-with-use-ref"}),"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/uncontrolled-components-with-use-ref")),Object(c.b)("p",null,Object(c.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/T1JVhkx.png",alt:"Imgur"}))))}p.isMDXComponent=!0},178:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var o=t(0),a=t.n(o);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,r=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(t),s=o,d=u["".concat(r,".").concat(s)]||u[s]||m[s]||c;return t?a.a.createElement(d,l(l({ref:n},b),{},{components:t})):a.a.createElement(d,l({ref:n},b))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,r=new Array(c);r[0]=s;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var b=2;b<c;b++)r[b]=t[b];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);