(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(3),c=a(7),r=(a(0),a(185)),b={title:"5-2 \u5c07\u5929\u6c23\u8cc7\u6599\u5448\u73fe\u65bc\u756b\u9762\u4e2d - useState \u7684\u4f7f\u7528",keywords:["React Hooks","useState"]},i={unversionedId:"book/ch5/5-2",id:"book/ch5/5-2",isDocsHomePage:!1,title:"5-2 \u5c07\u5929\u6c23\u8cc7\u6599\u5448\u73fe\u65bc\u756b\u9762\u4e2d - useState \u7684\u4f7f\u7528",description:"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1acreate-current-weather-state\u3002",source:"@site/docs/book/ch5/5-2.md",slug:"/book/ch5/5-2",permalink:"/react-bootcamp/docs/book/ch5/5-2",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/book/ch5/5-2.md",version:"current",sidebar:"book",previous:{title:"5-1 \u7533\u8acb\u4f7f\u7528\u4e2d\u592e\u6c23\u8c61\u5c40 API",permalink:"/react-bootcamp/docs/book/ch5/5-1"},next:{title:"5-3 \u4f7f\u7528 fetch \u62c9\u53d6\u5929\u6c23\u89c0\u6e2c\u8cc7\u6599",permalink:"/react-bootcamp/docs/book/ch5/5-3"}},l=[{value:"\u55ae\u5143\u6838\u5fc3",id:"\u55ae\u5143\u6838\u5fc3",children:[]},{value:"\u4f7f\u7528 useState \u5b9a\u7fa9\u8cc7\u6599\u72c0\u614b",id:"\u4f7f\u7528-usestate-\u5b9a\u7fa9\u8cc7\u6599\u72c0\u614b",children:[]},{value:"\u5c07\u8cc7\u6599\u72c0\u614b\u5e36\u5165 JSX \u4e2d",id:"\u5c07\u8cc7\u6599\u72c0\u614b\u5e36\u5165-jsx-\u4e2d",children:[]},{value:"\u512a\u5316\u8cc7\u6599\u5448\u73fe",id:"\u512a\u5316\u8cc7\u6599\u5448\u73fe",children:[{value:"\u6eab\u5ea6",id:"\u6eab\u5ea6",children:[]},{value:"\u6700\u5f8c\u89c0\u6e2c\u6642\u9593",id:"\u6700\u5f8c\u89c0\u6e2c\u6642\u9593",children:[]}]},{value:"\u8655\u7406\u8de8\u700f\u89bd\u5668\u554f\u984c",id:"\u8655\u7406\u8de8\u700f\u89bd\u5668\u554f\u984c",children:[{value:"\u5b89\u88dd dayjs",id:"\u5b89\u88dd-dayjs",children:[]},{value:"\u4f7f\u7528 dayjs \u8655\u7406\u8de8\u700f\u89bd\u5668\u6642\u9593\u554f\u984c",id:"\u4f7f\u7528-dayjs-\u8655\u7406\u8de8\u700f\u89bd\u5668\u6642\u9593\u554f\u984c",children:[]}]},{value:"\u63db\u4f60\u4e86\uff01\u4f7f\u7528 useState \u5b9a\u7fa9\u8cc7\u6599\u72c0\u614b",id:"\u63db\u4f60\u4e86\uff01\u4f7f\u7528-usestate-\u5b9a\u7fa9\u8cc7\u6599\u72c0\u614b",children:[]}],p={toc:l};function o(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1a",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/create-current-weather-state"}),Object(r.b)("inlineCode",{parentName:"a"},"create-current-weather-state")),"\u3002"),Object(r.b)("h2",{id:"\u55ae\u5143\u6838\u5fc3"},"\u55ae\u5143\u6838\u5fc3"),Object(r.b)("p",null,"\u9019\u500b\u55ae\u5143\u7684\u4e3b\u8981\u76ee\u6a19\u5305\u542b\uff1a"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u6839\u64da\u756b\u9762\u8a2d\u8a08\u6240\u9700\u8981\u7684\u8cc7\u6599\u6b04\u4f4d"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"useState")," \u5b9a\u7fa9\u4e26\u4f7f\u7528\u6240\u9700\u7684\u8cc7\u6599\u72c0\u614b")),Object(r.b)("hr",null),Object(r.b)("p",null,"\u5728\u4e0a\u4e00\u500b\u55ae\u5143\u4e2d\uff0c\u6211\u5011\u5df2\u7d93\u7533\u8acb\u4e86\u4f7f\u7528\u4e2d\u592e\u6c23\u8c61\u5c40 API \u7684\u6388\u6b0a\u78bc\uff0c\u4e26\u4e14\u8aaa\u660e\u4e86\u5728\u300c\u81fa\u7063\u597d\u5929\u6c23\u300d\u9019\u500b\u5c08\u6848\u4e2d\u6703\u4f7f\u7528\u5230\u7684\u5169\u652f API\u3002\u5728\u5be6\u969b\u5411\u4e2d\u592e\u6c23\u8c61\u5c40 API \u767c\u9001\u8acb\u6c42\u524d\uff0c\u6703\u5148\u5728 React \u5143\u4ef6\u4e2d\u5b9a\u7fa9\u6703\u4f7f\u7528\u5230\u7684\u8cc7\u6599\u72c0\u614b\uff0c\u4e26\u628a\u9019\u4e9b\u8cc7\u6599\u5448\u73fe\u5728\u756b\u9762\u4e0a\uff0c\u7b49\u5230\u8cc7\u6599\u80fd\u6b63\u78ba\u5728\u756b\u9762\u4e0a\u986f\u793a\u5f8c\uff0c\u624d\u6703\u5728\u5be6\u969b\u4e32\u63a5 API \u53d6\u5f97\u7684\u8cc7\u6599\u3002"),Object(r.b)("h2",{id:"\u4f7f\u7528-usestate-\u5b9a\u7fa9\u8cc7\u6599\u72c0\u614b"},"\u4f7f\u7528 useState \u5b9a\u7fa9\u8cc7\u6599\u72c0\u614b"),Object(r.b)("p",null,"\u9996\u5148\u6839\u64da\u6211\u5011\u8a2d\u8a08\u7684\u756b\u9762\uff0c\u53ef\u4ee5\u5148\u898f\u5283\u6240\u9700\u8981\u7684\u8cc7\u6599\u6b04\u4f4d\u6709\u54ea\u4e9b\uff1a"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/wXZOzpn.png",alt:"Imgur"}))),Object(r.b)("p",null,"\u63a5\u8457\u4fbf\u53ef\u4ee5\u958b\u59cb\u900f\u904e ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," \u4f86\u5b9a\u7fa9\u9019\u4e9b\u6240\u9700\u8981\u7684\u8cc7\u6599\u6b04\u4f4d\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const App = () => {\n  const [currentTheme, setCurrentTheme] = useState('light');\n\n  // \u5b9a\u7fa9\u6703\u4f7f\u7528\u5230\u7684\u8cc7\u6599\u72c0\u614b\n  const [currentWeather, setCurrentWeather] = useState({\n    locationName: '\u81fa\u5317\u5e02',\n    description: '\u591a\u96f2\u6642\u6674',\n    windSpeed: 1.1,\n    temperature: 22.9,\n    rainPossibility: 48,3,\n    observationTime: '2020-12-12 22:10:00',\n  });\n  // ...\n}\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5c0f\u63d0\u9192\uff1a\u5728\u5e36\u5165\u8cc7\u6599\u6642\uff0c\u4e26\u4e0d\u662f\u5b8c\u5168\u6191\u7a7a\u634f\u7167\uff0c\u800c\u662f\u53c3\u8003 API \u7d66\u7684\u56de\u61c9\u683c\u5f0f\u586b\u5165\u3002"))),Object(r.b)("h2",{id:"\u5c07\u8cc7\u6599\u72c0\u614b\u5e36\u5165-jsx-\u4e2d"},"\u5c07\u8cc7\u6599\u72c0\u614b\u5e36\u5165 JSX \u4e2d"),Object(r.b)("p",null,"\u63a5\u8457\u6211\u5011\u5c31\u628a\u9019\u4e9b\u8cc7\u6599\u5e36\u5165\u5230 JSX \u4e2d\u539f\u672c\u5beb\u6b7b\u6578\u503c\u7684\u5730\u65b9\uff1a"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/i2wibpb.png",alt:"Imgur"}))),Object(r.b)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u539f\u672c\u5beb\u6b7b\u5728 JSX \u4e2d\u7684\u8cc7\u6599\uff0c\u73fe\u5728\u90fd\u6539\u6210\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," \u7522\u751f\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"currentWeather")," \u9019\u500b\u7269\u4ef6\uff0c\u9019\u6a23\u672a\u4f86\u53ea\u8981 ",Object(r.b)("inlineCode",{parentName:"p"},"currentWeather")," \u5167\u7684\u8cc7\u6599\u6709\u6539\u8b8a\u6642\uff0cReact \u5c31\u6703\u81ea\u52d5\u5e6b\u6211\u5011\u66f4\u65b0\u756b\u9762\u3002"),Object(r.b)("h2",{id:"\u512a\u5316\u8cc7\u6599\u5448\u73fe"},"\u512a\u5316\u8cc7\u6599\u5448\u73fe"),Object(r.b)("p",null,"\u73fe\u5728\u6211\u5011\u770b\u5230\u7684\u6eab\u5ea6\uff08",Object(r.b)("inlineCode",{parentName:"p"},"temperature"),"\uff09\u6703\u51fa\u73fe\u5c0f\u6578\u9ede\uff0c\u800c\u6700\u5f8c\u89c0\u6e2c\u6642\u9593\uff08",Object(r.b)("inlineCode",{parentName:"p"},"observationTime"),"\uff09\u5247\u4e0d\u662f\u6211\u5011\u7fd2\u6163\u7684\u683c\u5f0f\uff0c\u6211\u5011\u91dd\u5c0d\u9019\u500b\u90e8\u5206\u4f86\u9032\u884c\u512a\u5316\u3002"),Object(r.b)("h3",{id:"\u6eab\u5ea6"},"\u6eab\u5ea6"),Object(r.b)("p",null,"\u91dd\u5c0d\u6eab\u5ea6\u7684\u90e8\u5206\uff0c\u53ef\u4ee5\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"Math.round()")," \u505a\u56db\u6368\u4e94\u5165\u3002\u6539\u6210\u9019\u6a23\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Temperature>\n  {Math.round(currentWeather.temperature)} <Celsius>\xb0C</Celsius>\n</Temperature>\n")),Object(r.b)("h3",{id:"\u6700\u5f8c\u89c0\u6e2c\u6642\u9593"},"\u6700\u5f8c\u89c0\u6e2c\u6642\u9593"),Object(r.b)("p",null,"\u5c0d\u65bc\u6700\u5f8c\u89c0\u6e2c\u6642\u9593\uff0c\u6211\u5011\u5f97\u5230\u7684\u8cc7\u6599\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"2020-12-12 22:10:00"),"\uff0c\u6211\u5011\u5e0c\u671b\u53ef\u4ee5\u986f\u793a ",Object(r.b)("inlineCode",{parentName:"p"},"\u4e0b\u534810:10")," \u9019\u6a23\u5c31\u597d\u3002"),Object(r.b)("p",null,"\u8981\u9054\u5230\u9019\u500b\u6548\u679c\u7684\u505a\u6cd5\u6709\u5f88\u591a\uff0c\u9019\u88e1\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u700f\u89bd\u5668\u539f\u751f\u7684 ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"}),"Intl")," \u9019\u500b\u65b9\u6cd5\uff0c\u9019\u500b\u65b9\u6cd5\u7684\u5168\u540d\u662f ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"}),"Internationalization API"),"\uff0c\u5b83\u53ef\u4ee5\u91dd\u5c0d\u65e5\u671f\u3001\u6642\u9593\u3001\u6578\u5b57\uff08\u8ca8\u5e63\uff09\u7b49\u8cc7\u6599\u9032\u884c\u591a\u8a9e\u7cfb\u7684\u5448\u73fe\u8655\u7406\uff0c\u76f8\u7576\u65b9\u4fbf\uff0c\u6211\u5011\u53ef\u4ee5\u5148\u5c07 ",Object(r.b)("inlineCode",{parentName:"p"},"<Refresh>")," \u4e2d\u7684\u7a0b\u5f0f\u78bc\u6539\u6210\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Refresh>\n  \u6700\u5f8c\u89c0\u6e2c\u6642\u9593\uff1a\n  {new Intl.DateTimeFormat('zh-TW', {\n    hour: 'numeric',\n    minute: 'numeric',\n  }).format(new Date(currentWeather.observationTime))} <RefreshIcon />\n</Refresh>\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u63d0\u9192")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u9019\u88e1\u4f60\u6703\u770b\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"{' '}")," \u7684\u7528\u6cd5\uff0c\u9019\u662f\u56e0\u70ba\u5728 JSX \u4e2d\u9810\u8a2d\u7684\u7a7a\u683c\u6700\u5f8c\u5728\u7db2\u9801\u5448\u73fe\u6642\u90fd\u6703\u88ab\u904e\u6ffe\u6389\uff0c\u56e0\u6b64\u5982\u679c\u4f60\u5e0c\u671b\u6700\u5f8c\u5728\u9801\u9762\u4e0a\u5143\u4ef6\u8207\u5143\u4ef6\u9593\u662f\u7559\u6709\u7a7a\u683c\u7684\uff0c\u5c31\u53ef\u4ee5\u900f\u904e\u5e36\u5165\u300c\u7a7a\u5b57\u4e32\u300d\u7684\u65b9\u5f0f\u4f86\u52a0\u5165\u7a7a\u683c\u3002"))),Object(r.b)("p",null,"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat(<\u5730\u5340>, <\u8a2d\u5b9a>)")," \u9019\u500b\u65b9\u6cd5\u4e2d"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u7b2c\u4e00\u500b\u53c3\u6578\u653e\u7684\u662f\u5730\u5340\uff0c\u53f0\u7063\u7684\u8a71\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"zh-TW"),"\u3002"),Object(r.b)("li",{parentName:"ul"},"\u7b2c\u4e8c\u500b\u53c3\u6578\u653e\u7684\u662f\u4e00\u4e9b\u8a2d\u5b9a\u503c\uff0c\u4f8b\u5982\u6211\u5011\u5e0c\u671b\u4ee5\u6578\u503c\u5448\u73fe\u300c\u6642\u300d\u548c\u300c\u5206\u300d\u5c31\u597d"),Object(r.b)("li",{parentName:"ul"},"\u6700\u5f8c\u900f\u904e ",Object(r.b)("inlineCode",{parentName:"li"},".format(<\u6642\u9593>)")," \u628a\u6642\u9593\u5e36\u9032\u53bb\u4e4b\u5f8c\uff0c\u5c31\u6703\u770b\u5230\u683c\u5f0f\u5316\u5f8c\u7684\u6642\u9593")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u88dc\u5145")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u95dc\u65bc ",Object(r.b)("inlineCode",{parentName:"p"},"Intl")," \u9019\u500b\u65b9\u6cd5\uff0c\u6709\u8208\u8da3\u7684\u8a71\u53ef\u4ee5\u9032\u4e00\u6b65\u53c3\u8003 ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"}),"MDN \u5b98\u65b9\u6587\u4ef6"),"\u7684\u8aaa\u660e\uff1a",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"}),"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl")))),Object(r.b)("p",null,"\u73fe\u5728\u7576\u6211\u5011\u900f\u904e ",Object(r.b)("inlineCode",{parentName:"p"},"npm start")," \u628a\u5c08\u6848\u555f\u52d5\u6642\uff0c\u5c31\u6703\u770b\u5230\u300c\u6eab\u5ea6\u300d\u548c\u300c\u89c0\u6e2c\u6642\u9593\u300d\u7684\u986f\u793a\u65b9\u5f0f\u6bd4\u4e4b\u524d\u7684\u6a23\u5b50\u66f4\u53cb\u5584\uff1a"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/eOBdAGM.png",alt:"Imgur"}))),Object(r.b)("h2",{id:"\u8655\u7406\u8de8\u700f\u89bd\u5668\u554f\u984c"},"\u8655\u7406\u8de8\u700f\u89bd\u5668\u554f\u984c"),Object(r.b)("p",null,"\u73fe\u5728\u7576\u6211\u5011\u4f7f\u7528 Chrome \u6216 Firefox \u958b\u555f\u9019\u500b\u9801\u9762\u6642\uff0c\u4e26\u4e0d\u6703\u51fa\u73fe\u4efb\u4f55\u932f\u8aa4\uff0c\u4f46\u82e5\u4f60\u662f Safari \u7684\u4f7f\u7528\u8005\uff08\u5728 iOS \u884c\u52d5\u88dd\u7f6e\u5927\u591a\u90fd\u662f\u4f7f\u7528 Safari\uff09\uff0c\u5c07\u6703\u770b\u5230\u5982\u4e0b\u932f\u8aa4\u8a0a\u606f\uff0c\u4e26\u986f\u793a ",Object(r.b)("inlineCode",{parentName:"p"},"RangeError: date value is not finite in DateTimeFormat format()"),"\uff1a"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/rVAnJ5Q.png",alt:"Imgur"}))),Object(r.b)("p",null,"\u4e4b\u6240\u4ee5\u6703\u6709\u9019\u500b\u932f\u8aa4\u7522\u751f\uff0c\u662f\u56e0\u70ba\u6211\u5011\u5f9e\u4e2d\u592e\u6c23\u8c61\u5c40\u53d6\u5f97\u7684\u6642\u9593\u8cc7\u6599\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"2020-12-12 10:31:00")," \u9019\u6a23\u7684\u683c\u5f0f\uff0c\u7576\u6211\u5011\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"new Date('2020-12-12 10:31:00')")," \u8a66\u8457\u628a\u9019\u500b\u6642\u9593\u8f49\u6210\u5408\u6cd5\u7684 JavaScript \u6642\u9593\u7269\u4ef6\u6642\uff0c\u5728 Chrome \u6216 Firefox \u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u5728 Safari \u4e26\u4e0d\u652f\u63f4\u9019\u7a2e\u7528\u6cd5\u3002"),Object(r.b)("p",null,"\u4f60\u53ef\u4ee5\u5728\u5404\u700f\u89bd\u5668\u958b\u767c\u8005\u5de5\u5177\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"console")," \u9762\u677f\u4e2d\u8f38\u5165\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"new Date('2020-12-12 10:31:00');\n")),Object(r.b)("p",null,"\u5728\u5e7e\u500b\u700f\u89bd\u5668\u4e2d\u6703\u5f97\u5230\u4e0d\u540c\u7684\u56de\u61c9\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Chrome\nSat Dec 12 2020 10:31:00 GMT+0800 (Taipei Standard Time)\n\n// Firefox\nDate Sat Dec 12 2020 10:31:00 GMT+0800 (\u53f0\u5317\u6a19\u6e96\u6642\u9593)\n\n// Safari\nInvalid Date\n")),Object(r.b)("p",null,"\u4f60\u6703\u767c\u73fe\u5c31 Safari \u6700\u7279\u5225...\u786c\u662f\u8ddf\u4f60\u8aaa\u9019\u662f\u7121\u6548\u7684\u65e5\u671f\u683c\u5f0f\u3002\u6c92\u932f\uff0c\u8de8\u700f\u89bd\u5668\u554f\u984c\u6c38\u9060\u662f\u6bcf\u500b\u524d\u7aef\u5de5\u7a0b\u5e2b\u5fc3\u4e2d\u6700\u8edf\u7684\u90a3\u4e00\u584a\u3002"),Object(r.b)("p",null,"\u597d\u5728\u9019\u500b\u554f\u984c\u4e26\u4e0d\u96e3\u8655\u7406\uff0c\u56e0\u70ba\u6642\u9593\u7684\u5167\u5bb9\u7b97\u662f\u5927\u5927\u5c0f\u5c0f\u7684\u7db2\u7ad9\u90fd\u6703\u7528\u5230\u7684\u6771\u897f\uff0c\u6240\u4ee5\u901a\u5e38\u5df2\u7d93\u6709\u8a31\u591a\u958b\u767c\u8005\u4e00\u8d77\u958b\u767c\u958b\u6e90\u5957\u4ef6\uff0c\u8b93\u5927\u5bb6\u90fd\u53ef\u4ee5\u7528\u66f4\u7c21\u4fbf\u4e14\u652f\u63f4\u8de8\u700f\u89bd\u5668\u7684\u65b9\u5f0f\u4f86\u8655\u7406\u9019\u4e9b\u554f\u984c\u3002"),Object(r.b)("h3",{id:"\u5b89\u88dd-dayjs"},"\u5b89\u88dd dayjs"),Object(r.b)("p",null,"\u9019\u88e1\u6211\u5011\u4f7f\u7528\u4e00\u500b\u5f88\u8f15\u91cf\u7684\u6642\u9593\u8655\u7406\u5de5\u5177\uff0c\u7a31\u4f5c dayjs\uff0c\u5b89\u88dd\u7684\u65b9\u5f0f\u4f60\u61c9\u8a72\u4e0d\u964c\u751f\u4e86\uff0c\u5728\u7d42\u7aef\u6a5f\u4e2d\u8f38\u5165\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install --save dayjs\n")),Object(r.b)("h3",{id:"\u4f7f\u7528-dayjs-\u8655\u7406\u8de8\u700f\u89bd\u5668\u6642\u9593\u554f\u984c"},"\u4f7f\u7528 dayjs \u8655\u7406\u8de8\u700f\u89bd\u5668\u6642\u9593\u554f\u984c"),Object(r.b)("p",null,"dayjs \u7684\u529f\u80fd\u5f88\u591a\uff0c\u9019\u88e1\u6211\u5011\u5148\u55ae\u7d14\u7528\u4f86\u8655\u7406\u8de8\u700f\u89bd\u5668\u7684\u554f\u984c\u3002\u8981\u4f7f\u7528\u9019\u500b\u5de5\u5177\u524d\uff0c\u4e00\u6a23\u8981\u5148\u8a18\u5f97\u8f09\u5165\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/App.js\n// ...\nimport dayjs from 'dayjs';\n")),Object(r.b)("p",null,"\u63a5\u8457\u5728\u539f\u672c\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"new Date()")," \u5c07\u65e5\u671f\u5b57\u4e32\u8f49\u63db\u6210 JavaScript \u65e5\u671f\u7269\u4ef6\u7684\u5730\u65b9\uff0c\u6539\u6210\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"dayjs()"),"\uff0c\u4e5f\u5c31\u662f\u5c07 ",Object(r.b)("inlineCode",{parentName:"p"},".format(new Date(...))")," \u6539\u6210 ",Object(r.b)("inlineCode",{parentName:"p"},".format(dayjs(...))"),"\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Refresh>\n  \u6700\u5f8c\u89c0\u6e2c\u6642\u9593\uff1a\n  {new Intl.DateTimeFormat('zh-TW', {\n    hour: 'numeric',\n    minute: 'numeric',\n  }).format(dayjs(currentWeather.observationTime))} <RefreshIcon />\n</Refresh>\n")),Object(r.b)("p",null,"\u6539\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"dayjs")," \u5f8c\u4e16\u754c\u518d\u6b21\u6062\u5fa9\u4e86\u548c\u5e73\uff0c\u73fe\u5728\u5728 Safari \u4e2d\u4e5f\u53ef\u4ee5\u6b63\u78ba\u89e3\u6790\u65e5\u671f\u683c\u5f0f\u3002"),Object(r.b)("h2",{id:"\u63db\u4f60\u4e86\uff01\u4f7f\u7528-usestate-\u5b9a\u7fa9\u8cc7\u6599\u72c0\u614b"},"\u63db\u4f60\u4e86\uff01\u4f7f\u7528 useState \u5b9a\u7fa9\u8cc7\u6599\u72c0\u614b"),Object(r.b)("p",null,"\u73fe\u5728\u8981\u63db\u4f60\u5728 App \u5143\u4ef6\u4e2d\u5b9a\u7fa9\u756b\u9762\u4e2d\u6703\u4f7f\u7528\u5230\u7684\u8cc7\u6599\u72c0\u614b\u3002\u540c\u6a23\u53ef\u4ee5\u53c3\u8003\u4e0b\u9762\u7684\u6d41\u7a0b\uff1a"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u4f7f\u7528 useState \u53d6\u5f97\u300c\u8cc7\u6599\u72c0\u614b\uff08",Object(r.b)("inlineCode",{parentName:"li"},"currentWeather"),"\uff09\u300d\u548c\u300c\u4fee\u6539\u8cc7\u6599\u72c0\u614b\uff08",Object(r.b)("inlineCode",{parentName:"li"},"setCurrentWeather"),"\uff09\u300d\u7684\u65b9\u6cd5"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u6839\u64da\u756b\u9762\u4e2d\u6240\u9700\u8981\u7684\u8cc7\u6599\uff0c\u4ee5\u53ca API \u56de\u61c9\u8cc7\u6599 \uff0c\u5728 ",Object(r.b)("inlineCode",{parentName:"li"},"currentWeather")," \u4e2d\u5b9a\u7fa9\u5404\u8cc7\u6599\u6b04\u4f4d\u9810\u8a2d\u503c"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u628a\u539f\u672c\u5beb\u6b7b\u5728 JSX \u4e2d\u7684\u8cc7\u6599\u6539\u6210\u900f\u904e ",Object(r.b)("inlineCode",{parentName:"li"},"currentWeather")," \u9019\u500b\u8cc7\u6599\u72c0\u614b\u4f86\u5448\u73fe"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u512a\u5316\u300c\u6eab\u5ea6\u300d\u548c\u300c\u89c0\u6e2c\u6642\u9593\u300d\u7684\u986f\u793a"),Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u8655\u7406\u6642\u9593\u5728\u8de8\u700f\u89bd\u5668\u4e0a\u7684\u554f\u984c")),Object(r.b)("p",null,"\u672c\u55ae\u5143\u76f8\u95dc\u4e4b\u7db2\u9801\u9023\u7d50\u3001\u5b8c\u6574\u7a0b\u5f0f\u78bc\u8207\u7a0b\u5f0f\u78bc\u8b8a\u66f4\u90e8\u5206\u53ef\u65bc ",Object(r.b)("inlineCode",{parentName:"p"},"create-current-weather-state")," \u5206\u652f\u6aa2\u8996\uff1a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/create-current-weather-state"}),"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/create-current-weather-state")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/AcYfCHv.png",alt:"Imgur"}))),Object(r.b)("p",null,"\u53e6\u5916\u7531\u65bc\u5c08\u6848\u5be6\u4f5c\u7684\u7a0b\u5f0f\u78bc\u8f03\u70ba\u8907\u96dc\uff0c\u518d\u6b21\u63d0\u9192\u8b80\u8005\u5728\u6bcf\u4e00\u500b\u55ae\u5143\u4e2d\u90fd\u53ef\u4ee5\u5584\u52a0\u5229\u7528 Github \u4e0a\u7684\u300c\u6642\u9418\u300d\u5716\u793a\u4f86\u6aa2\u8996\u6bcf\u500b\u55ae\u5143\u7a0b\u5f0f\u78bc\u7684\u8b8a\u5316\uff1a"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/gJOmzBK.png",alt:"Imgur"}))),Object(r.b)("p",null,"\u5728 commit \u4e2d\u5c07\u6703\u6e05\u695a\u5448\u73fe\u6bcf\u500b\u55ae\u5143\u7a0b\u5f0f\u78bc\u7684\u8b8a\u5316\uff1a"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/3CbooeW.png?1",alt:"Imgur"}))))}o.isMDXComponent=!0},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var p=c.a.createContext({}),o=function(e){var t=c.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},j=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=o(a),j=n,O=s["".concat(b,".").concat(j)]||s[j]||m[j]||r;return a?c.a.createElement(O,i(i({ref:t},p),{},{components:a})):c.a.createElement(O,i({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=j;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var p=2;p<r;p++)b[p]=a[p];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);