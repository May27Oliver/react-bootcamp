(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),c=(a(0),a(186)),i={title:"6-4 \u5c08\u6848\u7a0b\u5f0f\u78bc\u91cd\u69cb",keywords:["React Hooks"]},b={unversionedId:"book/ch6/6-4",id:"book/ch6/6-4",isDocsHomePage:!1,title:"6-4 \u5c08\u6848\u7a0b\u5f0f\u78bc\u91cd\u69cb",description:"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1acreate-view-of-weather-card-for-refactoring\u3002",source:"@site/docs/book/ch6/6-4.md",slug:"/book/ch6/6-4",permalink:"/react-bootcamp/docs/book/ch6/6-4",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/book/ch6/6-4.md",version:"current",sidebar:"book",previous:{title:"6-3 \u6839\u64da\u767d\u5929\u6216\u591c\u665a\u986f\u793a\u4e0d\u540c\u7684\u4e3b\u984c\u914d\u8272",permalink:"/react-bootcamp/docs/book/ch6/6-3"},next:{title:"6-5 \u5efa\u7acb\u81ea\u5df1\u7684\u9264\u5b50 - Custom Hooks",permalink:"/react-bootcamp/docs/book/ch6/6-5"}},o=[{value:"\u55ae\u5143\u6838\u5fc3",id:"\u55ae\u5143\u6838\u5fc3",children:[]},{value:"\u5efa\u7acb WeatherCard \u5143\u4ef6",id:"\u5efa\u7acb-weathercard-\u5143\u4ef6",children:[]},{value:"\u642c\u79fb\u548c WeatherCard \u6709\u95dc\u7684\u8b8a\u6578\u8207\u6a23\u5f0f",id:"\u642c\u79fb\u548c-weathercard-\u6709\u95dc\u7684\u8b8a\u6578\u8207\u6a23\u5f0f",children:[]},{value:"\u79fb\u9664 App \u5143\u4ef6\u4e2d\u591a\u9918\u7684\u7a0b\u5f0f\u78bc",id:"\u79fb\u9664-app-\u5143\u4ef6\u4e2d\u591a\u9918\u7684\u7a0b\u5f0f\u78bc",children:[]},{value:"\u63db\u4f60\u4e86\uff01\u5c07 WeatherCard \u7368\u7acb\u6210\u4e00\u500b\u5143\u4ef6",id:"\u63db\u4f60\u4e86\uff01\u5c07-weathercard-\u7368\u7acb\u6210\u4e00\u500b\u5143\u4ef6",children:[]}],p={toc:o};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1a",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/create-view-of-weather-card-for-refactoring"}),"create-view-of-weather-card-for-refactoring"),"\u3002"),Object(c.b)("h2",{id:"\u55ae\u5143\u6838\u5fc3"},"\u55ae\u5143\u6838\u5fc3"),Object(c.b)("p",null,"\u9019\u500b\u55ae\u5143\u7684\u4e3b\u8981\u76ee\u6a19\u5305\u542b\uff1a"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5c07\u7a0b\u5f0f\u78bc\u9032\u884c React \u5143\u4ef6\u7684\u62c6\u6a94\u8207\u6574\u7406\uff0c\u4ee5\u5229\u5f8c\u7e8c\u958b\u767c\u7dad\u8b77")),Object(c.b)("hr",null),Object(c.b)("p",null,"\u4e0d\u77e5\u9053\u4f60\u6709\u6c92\u6709\u767c\u73fe\uff0c\u96d6\u8457\u5c08\u6848\u7684\u529f\u80fd\u8d8a\u4f86\u8d8a\u591a\uff0c\u7a0b\u5f0f\u78bc\u7684\u91cf\u4e5f\u8d8a\u4f86\u8d8a\u5927\uff0c\u7279\u5225\u91dd\u5c0d ",Object(c.b)("inlineCode",{parentName:"p"},"App.js")," \u9019\u652f\u6a94\u6848\uff0c\u4f60\u6709\u6c92\u6709\u89ba\u5f97\u5167\u5bb9\u597d\u50cf\u591a\u5230\u627e\u500b\u60f3\u8981\u6539\u7684\u6771\u897f\u6642\u5e38\u5e38\u4e0d\u5bb9\u6613\u627e\u5230\u5462\uff1f"),Object(c.b)("p",null,"\u4e00\u958b\u59cb\u64b0\u5beb\u5c08\u6848\u6642\uff0c\u70ba\u4e86\u907f\u514d\u5be6\u4f5c\u6642\u8981\u5728\u4e0d\u540c\u6a94\u6848\u4e4b\u9593\u5207\u4f86\u5207\u53bb\uff0c\u5bb9\u6613\u9020\u6210\u6df7\u6dc6\uff0c\u6240\u4ee5\u5c31\u5148\u628a\u5927\u591a\u6578\u7684\u529f\u80fd\u90fd\u5beb\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"App.js")," \u4e2d\u800c\u6c92\u6709\u984d\u5916\u628a\u7368\u7acb\u7684\u51fd\u5f0f\u6216\u5143\u4ef6\u62c6\u5206\u958b\u4f86\uff0c\u4f46\u9019\u9ebc\u505a\u7576\u5c08\u6848\u8d8a\u4f86\u8d8a\u5927\u7684\u6642\u5019\uff0c\u5982\u679c\u6c92\u6709\u5584\u7528\u5143\u4ef6\u62c6\u5206\u548c JavaScript \u6a21\u7d44\u5316\uff0c\u6703\u958b\u59cb\u8b8a\u5f97\u8d8a\u4f86\u8d8a\u96e3\u7dad\u8b77\u3002"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u6709\u7684\u958b\u767c\u8005\u7fd2\u6163\u5148\u628a\u591a\u500b\u529f\u80fd\u5beb\u5728\u540c\u4e00\u500b\u5143\u4ef6\u4e2d\uff0c\u5f85\u529f\u80fd\u90fd\u958b\u767c\u5b8c\u6210\u5f8c\u518d\u4f86\u9032\u884c\u5143\u4ef6\u7684\u62c6\u5206\uff1b\u6709\u4e9b\u958b\u767c\u8005\u5247\u7fd2\u6163\u4e00\u958b\u59cb\u5c31\u628a\u4e0d\u540c\u756b\u9762\u6216\u529f\u80fd\u7684\u5143\u4ef6\u62c6\u958b\u4f86\u958b\u767c\u3002\u7b46\u8005\u8a8d\u70ba\u8981\u5148\u9032\u884c\u5143\u4ef6\u62c6\u5206\uff0c\u6216\u5f85\u529f\u80fd\u5b8c\u6210\u5f8c\u518d\u9032\u884c\u62c6\u5206\uff0c\u7aef\u770b\u958b\u767c\u8005\u500b\u4eba\u7fd2\u6163\u3002"))),Object(c.b)("p",null,"\u91cd\u69cb\uff08refactoring\uff09\u7684\u610f\u601d\u901a\u5e38\u662f\u6307\u5728",Object(c.b)("strong",{parentName:"p"},"\u4e0d\u6539\u8b8a\u539f\u672c\u529f\u80fd"),"\u7684\u60c5\u6cc1\u4e0b\uff0c\u628a\u7a0b\u5f0f\u78bc\u6539\u6210\u7528\u66f4\u5bb9\u6613\u7dad\u8b77\u3001\u66f4\u5bb9\u6613\u7406\u89e3\u3001\u6216\u66f4\u7cbe\u7c21\u7684\u65b9\u5f0f\u4f86\u6539\u5beb\u3002\u73fe\u5728\u53ef\u4ee5\u5148\u628a\u548c\u5728 App \u5143\u4ef6\u4e2d\uff0c\u8207 ",Object(c.b)("inlineCode",{parentName:"p"},"<WeatherCard>")," \u6709\u95dc\u7684\u529f\u80fd\u9032\u884c\u6a94\u6848\u7684\u62c6\u5206\u3002"),Object(c.b)("p",null,"\u5728\u9019\u500b\u55ae\u5143\u4e2d\u6211\u5011\u5c31\u4f86\u9032\u884c\u5c08\u6848\u7a0b\u5f0f\u78bc\u7684\u91cd\u69cb\uff0c\u900f\u904e\u5143\u4ef6\u7684\u62c6\u5206\u4e4b\u5916\uff0c\u8b93\u7a0b\u5f0f\u78bc\u770b\u8d77\u4f86\u66f4\u6613\u8b80\u8207\u597d\u7dad\u8b77\u5427\uff01"),Object(c.b)("h2",{id:"\u5efa\u7acb-weathercard-\u5143\u4ef6"},"\u5efa\u7acb WeatherCard \u5143\u4ef6"),Object(c.b)("p",null,"\u5148\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"./src")," \u8cc7\u6599\u593e\u5167\u65b0\u589e\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"p"},"views")," \u7684\u8cc7\u6599\u593e\uff0c\u4e26\u5728\u88e1\u9762\u5efa\u7acb\u4e00\u652f\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"p"},"WeatherCard.js")," \u7684\u6a94\u6848\uff0c\u653e\u5165\u8d77\u624b\u52e2\u7684\u7a0b\u5f0f\u78bc\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/views/WeatherCard.js\n\nimport React from 'react';\n\nconst WeatherCard = () => {\n  return /* ... */;\n};\n\nexport default WeatherCard;\n")),Object(c.b)("p",null,"\u901a\u5e38\u548c\u4e00\u6574\u500b\u9801\u9762\u6709\u95dc\u7684\u5167\u5bb9\u6703\u653e\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"views")," \u7684\u8cc7\u6599\u593e\uff0c\u73fe\u5728\u96d6\u7136\u53ea\u6709 WeatherCard \u9019\u500b\u9801\u9762\uff0c\u4f46\u5f8c\u7e8c\u6211\u5011\u9084\u6703\u5be6\u4f5c\u8a2d\u5b9a\u9801\u9762\u3002"),Object(c.b)("p",null,"\u63a5\u8457\u628a\u539f\u672c\u653e\u5728 WeatherApp \u5167 ",Object(c.b)("inlineCode",{parentName:"p"},"<WeatherCard>...</WeatherCard>")," \u7684\u90e8\u5206\u90fd\u8907\u88fd\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"WeatherCard.js")," \u7684\u5143\u4ef6\u4e2d\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/FJd5RdG.png",alt:"Imgur"}))),Object(c.b)("p",null,"\u9700\u8981\u7a0d\u5fae\u7559\u610f\u4e00\u4e0b\u7684\u662f\uff0c\u539f\u672c\u5728 App \u5143\u4ef6\u4e2d\uff0cWeatherCard \u5340\u584a\u6700\u5916\u5c64\u7684\u540d\u7a31\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"<WeatherCard>")," \uff0c\u4f46\u73fe\u5728\u56e0\u70ba\u5143\u4ef6\u7684\u540d\u7a31\u5c31\u5df2\u7d93\u662f WeatherCard\uff08",Object(c.b)("inlineCode",{parentName:"p"},"const WeatherCard = () => {/*...*/}"),"\uff09\uff0c\u56e0\u6b64\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"WeatherCard.js")," \u4e2d\uff0c\u6211\u5011\u628a\u539f\u672c\u6700\u5916\u5c64\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"<WeatherCard>")," \u6539\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"p"},"<WeatherCardWrapper>"),"\u3002"),Object(c.b)("h2",{id:"\u642c\u79fb\u548c-weathercard-\u6709\u95dc\u7684\u8b8a\u6578\u8207\u6a23\u5f0f"},"\u642c\u79fb\u548c WeatherCard \u6709\u95dc\u7684\u8b8a\u6578\u8207\u6a23\u5f0f"),Object(c.b)("p",null,"\u63a5\u4e0b\u4f86\uff0c\u628a\u7576\u521d\u5b9a\u7fa9\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"App.js")," \u4e2d\u548c WeatherCard \u5143\u4ef6\u6709\u95dc\u7684 Styled Components \u4e5f\u4e00\u8d77\u642c\u9032\u4f86 ",Object(c.b)("inlineCode",{parentName:"p"},"WeatherCard.js")," \u4e2d\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5728 WeatherCard \u5143\u4ef6\u4e2d\u4e00\u6a23\u8981\u5148\u532f\u5165 emotion \u548c days")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/views/WeatherCard.js\n// ...\nimport styled from '@emotion/styled';\nimport dayjs from 'dayjs';\n")),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"\u5728 App \u5143\u4ef6\u4e2d\uff0c\u9664\u4e86\u6700\u5916\u5c64\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"<Container>")," \u4e4b\u5916\uff0c\u5176\u4ed6\u90fd\u662f\u548c WeatherCard \u6709\u95dc\u7684 styled components\uff0c\u5168\u90e8\u642c\u9032 WeatherCard.js \u4e2d\u3002\u9019\u88e1\u8981\u8a18\u5f97\u628a\u539f\u672c\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"li"},"WeatherCard")," \u7684 styled components \u6539\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"li"},"WeatherCardWrapper"),"\u3002"),Object(c.b)("li",{parentName:"ol"},"\u63a5\u8457\u642c\u79fb\u6709\u7528\u5230\u7684\u5143\u4ef6\u548c\u5716\u793a\uff0c\u5305\u542b\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/views/WeatherCard.js\n// ...\nimport WeatherIcon from './../components/WeatherIcon.js';\nimport { ReactComponent as AirFlowIcon } from './../images/airFlow.svg';\nimport { ReactComponent as RainIcon } from './../images/rain.svg';\nimport { ReactComponent as RefreshIcon } from './../images/refresh.svg';\nimport { ReactComponent as LoadingIcon } from './../images/loading.svg';\n")),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"\u5728 App \u5143\u4ef6\u4e2d\u532f\u5165\u4e26\u4f7f\u7528 WeatherCard \u5143\u4ef6\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import WeatherCard from './views/WeatherCard';\n\nconst App = () => {\n  // ...\n  return (\n    <ThemeProvider theme={theme[currentTheme]}>\n      <Container>\n        <WeatherCard />\n      </Container>\n    </ThemeProvider>\n  );\n};\n")),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},"\u5c07 WeatherCard \u9700\u8981\u7684\u8cc7\u6599\uff0c\u900f\u904e props \u5f9e App \u5143\u4ef6\u50b3\u5165\uff0c\u5176\u4e2d\u5305\u542b\uff1a")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8cc7\u6599\uff1a\u300c\u5929\u6c23\u8cc7\u6599\uff08",Object(c.b)("inlineCode",{parentName:"li"},"weatherElement"),"\uff09\u300d\u4ee5\u53ca\u300c\u767d\u5929\u6216\u665a\u4e0a\uff08",Object(c.b)("inlineCode",{parentName:"li"},"moment"),"\uff09\u300d"),Object(c.b)("li",{parentName:"ul"},"\u51fd\u5f0f\uff1a\u56e0\u70ba\u5728 WeatherCard \u4e2d\u7684\u91cd\u65b0\u6574\u7406\u9700\u8981\u547c\u53eb ",Object(c.b)("inlineCode",{parentName:"li"},"fetchData")," \u9019\u500b\u65b9\u6cd5\uff0c\u6240\u4ee5\u4e5f\u9700\u8981\u4e00\u4f75\u900f\u904e props \u50b3\u5165")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/App.js\n\nconst App = () => {\n  // ...\n  return (\n    // ...\n    <WeatherCard\n      weatherElement={weatherElement}\n      moment={moment}\n      fetchData={fetchData}\n    />\n    // ...\n  );\n};\n")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u63d0\u9192")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u900f\u904e props \u4e0d\u53ea\u53ef\u4ee5\u50b3\u905e\u300c\u5b57\u4e32\u300d\u3001\u300c\u7269\u4ef6\u300d\u3001\u300c\u9663\u5217\u300d\u3001\u300c\u6578\u503c\u300d\u9019\u985e\u8cc7\u6599\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u628a\u300c\u51fd\u5f0f\u300d\u50b3\u9032\u53bb\u3002"))),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},"\u63a5\u8457\u5728 WeatherCard \u4e2d\u53d6\u51fa\u50b3\u5165\u7684 props\uff0c\u4e26\u4ee5\u89e3\u69cb\u8ce6\u503c\u7684\u65b9\u5f0f\u5c07\u8b8a\u6578\u53d6\u51fa\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/views/WeatherCard.js\nconst WeatherCard = ({ weatherElement, moment, fetchData }) => {\n  const {\n    observationTime,\n    locationName,\n    temperature,\n    windSpeed,\n    description,\n    weatherCode,\n    rainPossibility,\n    comfortability,\n    isLoading,\n  } = weatherElement;\n  // ...\n};\n")),Object(c.b)("p",null,"\u5230\u9019\u4e00\u6b65\u7684\u6642\u5019\uff0c\u7e3d\u7b97\u642c\u79fb\u5b8c\u6210\uff0c\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"npm start")," \u5c07\u5c08\u6848\u555f\u52d5\u5f8c\uff0c\u53ef\u4ee5\u770b\u5230\u756b\u9762\u53c8\u518d\u6b21\u6062\u5fa9\u6b63\u5e38\u4e86\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/Xc2JfkM.png",alt:"Imgur"}))),Object(c.b)("h2",{id:"\u79fb\u9664-app-\u5143\u4ef6\u4e2d\u591a\u9918\u7684\u7a0b\u5f0f\u78bc"},"\u79fb\u9664 App \u5143\u4ef6\u4e2d\u591a\u9918\u7684\u7a0b\u5f0f\u78bc"),Object(c.b)("p",null,"\u6700\u5f8c\u5728 App \u5143\u4ef6\u4e2d\uff0c\u56e0\u70ba\u5f88\u591a\u8b8a\u6578\u90fd\u5df2\u7d93\u79fb\u5230 WeatherCard \u5143\u4ef6\u4e2d\uff0c\u56e0\u6b64\u5f88\u591a\u8b8a\u6578\u5728 App \u5143\u4ef6\u4e2d\u662f\u7528\u4e0d\u5230\u7684\uff0c\u5982\u679c\u4f60\u5728 VSCode \u6709\u5b89\u88dd ESLint \u9019\u500b\u5957\u4ef6\u7684\u8a71\uff0c\u7a0b\u5f0f\u7de8\u8f2f\u5668\u6703\u900f\u904e\u5e95\u7dda\u6216\u984f\u8272\u4f86\u63d0\u793a\u54ea\u4e9b\u8b8a\u6578\u662f\u591a\u9918\u7684\uff0c\u53ef\u4ee5\u4f9d\u5efa\u8b70\u79fb\u9664\u5373\u53ef\u3002"),Object(c.b)("h2",{id:"\u63db\u4f60\u4e86\uff01\u5c07-weathercard-\u7368\u7acb\u6210\u4e00\u500b\u5143\u4ef6"},"\u63db\u4f60\u4e86\uff01\u5c07 WeatherCard \u7368\u7acb\u6210\u4e00\u500b\u5143\u4ef6"),Object(c.b)("p",null,"\u900f\u904e\u91cd\u69cb\u548c\u5143\u4ef6\u7684\u62c6\u5206\uff0c\u9019\u88e1\u6211\u5011\u628a\u62c9\u53d6\u8cc7\u6599\u548c\u8655\u7406\u8cc7\u6599\u7684\u908f\u8f2f\u4fdd\u7559\u5728 App \u5143\u4ef6\u4e2d\uff0c\u628a\u8cc7\u6599\u7684\u5448\u73fe\u642c\u79fb\u5230\u4e86 WeatherCard \u5143\u4ef6\u4e2d\uff0c\u5c07\u908f\u8f2f\u8655\u7406\u548c\u756b\u9762\u5448\u73fe\u52a0\u4ee5\u5340\u9694\u958b\u4f86\u3002\u73fe\u5728\u4f60\u53ef\u4ee5\u53c3\u8003\u4e0b\u9762\u7684\u6b65\u9a5f\u4f86\u5617\u8a66\u770b\u770b\uff1a"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"./src/views")," \u4e2d\u5efa\u7acb ",Object(c.b)("inlineCode",{parentName:"li"},"WeatherCard")," \u5143\u4ef6"),Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 WeatherCard \u4e2d\u532f\u5165\u6240\u9700\u7684\u7b2c\u4e09\u65b9\u5957\u4ef6"),Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5c07 App \u5143\u4ef6\u4e2d JSX \u5167\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"<WeatherCard />")," \u5340\u584a\u642c\u79fb\u5230 WeatherCard \u5143\u4ef6\u5167"),Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u642c\u79fb\u548c WeatherCard \u6709\u95dc\u7684 Styled Components\uff08\u5728 App \u5143\u4ef6\u4e2d\u9664\u4e86 ",Object(c.b)("inlineCode",{parentName:"li"},"<Container />")," \u5916\uff0c\u5176\u4ed6\u7684 styled components \u90fd\u9700\u642c\u79fb\uff09"),Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u642c\u79fb\u548c WeatherCard \u6709\u95dc\u7684\u5716\u793a"),Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u628a\u539f\u672c\u6700\u5916\u5c64\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"<WeatherCard>")," \u6539\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"li"},"<WeatherCardWrapper>")),Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 App \u5143\u4ef6\u4e2d\u532f\u5165\u4e26\u4f7f\u7528 WeatherCard \u5143\u4ef6"),Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u900f\u904e props \u5c07 WeatherCard \u6240\u9700\u7684\u8cc7\u6599\u6216\u65b9\u6cd5\u7531 App \u5143\u4ef6\u4e2d\u50b3\u5165\uff0c\u4e26\u65bc WeatherCard \u4e2d\u53d6\u51fa\u4f7f\u7528"),Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u79fb\u9664 App \u5143\u4ef6\u4e2d\u591a\u9918\u7684\u7a0b\u5f0f\u78bc")),Object(c.b)("p",null,"\u672c\u55ae\u5143\u76f8\u95dc\u4e4b\u7db2\u9801\u9023\u7d50\u3001\u5b8c\u6574\u7a0b\u5f0f\u78bc\u8207\u7a0b\u5f0f\u78bc\u8b8a\u66f4\u90e8\u5206\u53ef\u65bc ",Object(c.b)("inlineCode",{parentName:"p"},"create-view-of-weather-card-for-refactoring")," \u5206\u652f\u6aa2\u8996\uff1a",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/create-view-of-weather-card-for-refactoring"}),"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/create-view-of-weather-card-for-refactoring")),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/S4PM6X7.png",alt:"Imgur"}))))}l.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,j=m["".concat(i,".").concat(d)]||m[d]||s[d]||c;return a?n.a.createElement(j,b(b({ref:t},p),{},{components:a})):n.a.createElement(j,b({ref:t},p))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var p=2;p<c;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);