(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),c=(n(0),n(185)),i={title:"6-1 \u5c07\u5929\u6c23\u4ee3\u78bc\u8f49\u63db\u70ba\u5929\u6c23\u5716\u793a",keywords:["React Hooks"]},o={unversionedId:"book/ch6/6-1",id:"book/ch6/6-1",isDocsHomePage:!1,title:"6-1 \u5c07\u5929\u6c23\u4ee3\u78bc\u8f49\u63db\u70ba\u5929\u6c23\u5716\u793a",description:"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1aweather-code-to-weather-type\u3002",source:"@site/docs/book/ch6/6-1.md",slug:"/book/ch6/6-1",permalink:"/react-bootcamp/docs/book/ch6/6-1",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/book/ch6/6-1.md",version:"current",sidebar:"book",previous:{title:"5-8 \u4e86\u89e3\u5b9a\u7fa9\u51fd\u5f0f\u7684\u9069\u7576\u4f4d\u7f6e\u4ee5\u53ca useCallback \u7684\u4f7f\u7528",permalink:"/react-bootcamp/docs/book/ch5/5-8"},next:{title:"6-2 \u6839\u64da\u5929\u6c23\u4ee3\u78bc\u986f\u793a\u5929\u6c23\u5716\u793a - useMemo \u7684\u4f7f\u7528",permalink:"/react-bootcamp/docs/book/ch6/6-2"}},b=[{value:"\u55ae\u5143\u6838\u5fc3",id:"\u55ae\u5143\u6838\u5fc3",children:[]},{value:"\u5efa\u7acb\u4e26\u4f7f\u7528 WeatherIcon \u5143\u4ef6",id:"\u5efa\u7acb\u4e26\u4f7f\u7528-weathericon-\u5143\u4ef6",children:[{value:"WeatherIcon \u5143\u4ef6",id:"weathericon-\u5143\u4ef6",children:[]},{value:"App \u5143\u4ef6",id:"app-\u5143\u4ef6",children:[]}]},{value:"\u5b9a\u7fa9\u5929\u6c23\u4ee3\u78bc\u8981\u5c0d\u61c9\u5230\u7684\u5929\u6c23\u5716\u793a",id:"\u5b9a\u7fa9\u5929\u6c23\u4ee3\u78bc\u8981\u5c0d\u61c9\u5230\u7684\u5929\u6c23\u5716\u793a",children:[{value:"\u8f09\u5165\u6240\u6709\u5929\u6c23\u5716\u793a",id:"\u8f09\u5165\u6240\u6709\u5929\u6c23\u5716\u793a",children:[]},{value:"\u5b9a\u7fa9\u300c\u5929\u6c23\u4ee3\u78bc\u300d\u6240\u5c0d\u61c9\u7684\u300c\u5929\u6c23\u578b\u614b\u300d",id:"\u5b9a\u7fa9\u300c\u5929\u6c23\u4ee3\u78bc\u300d\u6240\u5c0d\u61c9\u7684\u300c\u5929\u6c23\u578b\u614b\u300d",children:[]},{value:"\u6839\u64da\u300c\u5929\u6c23\u578b\u614b\u300d\u986f\u793a\u5c0d\u61c9\u7684\u300c\u5929\u6c23\u5716\u793a\u300d",id:"\u6839\u64da\u300c\u5929\u6c23\u578b\u614b\u300d\u986f\u793a\u5c0d\u61c9\u7684\u300c\u5929\u6c23\u5716\u793a\u300d",children:[]},{value:"\u5929\u6c23\u4ee3\u78bc\u3001\u5929\u6c23\u578b\u614b\u8207\u5929\u6c23\u5716\u793a\u9593\u7684\u5c0d\u61c9\u95dc\u4fc2",id:"\u5929\u6c23\u4ee3\u78bc\u3001\u5929\u6c23\u578b\u614b\u8207\u5929\u6c23\u5716\u793a\u9593\u7684\u5c0d\u61c9\u95dc\u4fc2",children:[]}]},{value:"\u5efa\u7acb\u6839\u64da\u5929\u6c23\u4ee3\u78bc\u627e\u51fa\u5c0d\u61c9\u5929\u6c23\u578b\u614b\u7684\u51fd\u5f0f",id:"\u5efa\u7acb\u6839\u64da\u5929\u6c23\u4ee3\u78bc\u627e\u51fa\u5c0d\u61c9\u5929\u6c23\u578b\u614b\u7684\u51fd\u5f0f",children:[]},{value:"\u63db\u4f60\u4e86\uff01\u628a\u5929\u6c23\u4ee3\u78bc\u8f49\u63db\u6210\u5929\u6c23\u578b\u614b",id:"\u63db\u4f60\u4e86\uff01\u628a\u5929\u6c23\u4ee3\u78bc\u8f49\u63db\u6210\u5929\u6c23\u578b\u614b",children:[]}],p={toc:b};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1a",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/weather-code-to-weather-type"}),"weather-code-to-weather-type"),"\u3002"),Object(c.b)("h2",{id:"\u55ae\u5143\u6838\u5fc3"},"\u55ae\u5143\u6838\u5fc3"),Object(c.b)("p",null,"\u9019\u500b\u55ae\u5143\u7684\u4e3b\u8981\u76ee\u6a19\u5305\u542b\uff1a"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5efa\u7acb\u4e26\u4f7f\u7528\u5929\u6c23\u5716\u793a\u7684\u5143\u4ef6"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u4e86\u89e3\u5982\u4f55\u5f9e\u5929\u6c23\u4ee3\u78bc\u8f49\u63db\u70ba\u5929\u6c23\u578b\u614b\uff0c\u518d\u5f9e\u5929\u6c23\u578b\u614b\u8f49\u63db\u70ba\u5929\u6c23\u5716\u793a\u7684\u908f\u8f2f")),Object(c.b)("hr",null),Object(c.b)("p",null,"\u5728\u9019\u500b\u55ae\u5143\u4e2d\u6211\u5011\u8981\u4f86\u70ba\u5929\u6c23\u5716\u793a\u7684\u5448\u73fe\u505a\u6e96\u5099\uff0c\u7531\u65bc\u4e2d\u592e\u6c23\u8c61\u5c40\u56de\u50b3\u7684\u8cc7\u6599\u4e2d\uff0c\u53ea\u7d66\u6211\u5011\u5929\u6c23\u4ee3\u78bc\uff0c\u5269\u4e0b\u7684\u90e8\u5206\u9700\u8981\u81ea\u5df1\u6839\u64da\u4e2d\u592e\u6c23\u8c61\u5c40\u7684\u6587\u4ef6\uff0c\u4f86\u5224\u65b7\u8a72\u4ee3\u78bc\u5c6c\u65bc\u54ea\u4e00\u985e\u7684\u5929\u6c23\u578b\u614b\uff0c\u662f\u6674\u5929\u3001\u9670\u5929\u3001\u8d77\u9727\u3001\u9084\u662f\u96e8\u5929\u7b49\u7b49\u3002\u56e0\u6b64\uff0c\u9019\u88e1\u6703\u9700\u8981\u5148\u628a API \u56de\u50b3\u7684\u5929\u6c23\u4ee3\u78bc\uff0c\u900f\u904e\u7a0b\u5f0f\u7684\u908f\u8f2f\u5224\u65b7\u8f49\u63db\u70ba\u5c0d\u61c9\u7684\u5929\u6c23\u5716\u793a\u3002"),Object(c.b)("p",null,"\u5be6\u969b\u4e0a\u5929\u6c23\u5716\u793a\u7684\u5efa\u7acb\u4e26\u4e0d\u56f0\u96e3\uff0c\u4f46\u56e0\u70ba\u5716\u793a\u5f88\u591a\u800c\u6709\u4e9b\u7e41\u7463\uff0c\u7a0b\u5f0f\u78bc\u7247\u6bb5\u591a\u653e\u5728\u672c\u55ae\u5143 Github \u4e0a\u7684\u8aaa\u660e\u9801\u9762\uff0c\u5efa\u8b70\u8b80\u8005\u53ef\u4ee5\u642d\u914d\u7db2\u9801\u4e0a\u7684\u8aaa\u660e\u4f86\u6aa2\u8996\u672c\u55ae\u5143\u5167\u5bb9\u3002"),Object(c.b)("h2",{id:"\u5efa\u7acb\u4e26\u4f7f\u7528-weathericon-\u5143\u4ef6"},"\u5efa\u7acb\u4e26\u4f7f\u7528 WeatherIcon \u5143\u4ef6"),Object(c.b)("p",null,"\u6709\u5f88\u591a\u4e0d\u540c\u7684\u5929\u6c23\u578b\u614b\u9700\u8981\u5224\u65b7\u4e26\u5c0d\u61c9\u5230\u4e0d\u540c\u7684\u5929\u6c23\u5716\u793a\uff0c\u5982\u679c\u628a\u9019\u4e9b\u5224\u65b7\u908f\u8f2f\u90fd\u5beb\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"<App />")," \u5143\u4ef6\u4e2d\u6703\u986f\u5f97\u6709\u4e9b\u96dc\u4e82\uff0c\u6240\u4ee5\u6211\u5011\u8981\u628a\u5929\u6c23\u5716\u793a\u7684\u5448\u73fe\u62c6\u6210\u53e6\u4e00\u500b React \u5143\u4ef6\u3002\u9084\u8a18\u5f97 React \u5143\u4ef6\u8981\u600e\u9ebc\u62c6\u5206\u55ce\uff1f"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"src")," \u8cc7\u6599\u593e\u4e2d\uff0c\u65b0\u589e\u4e00\u500b\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"li"},"components")," \u7684\u8cc7\u6599\u593e"),Object(c.b)("li",{parentName:"ol"},"\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"components")," \u8cc7\u6599\u593e\u4e2d\uff0c\u65b0\u589e ",Object(c.b)("inlineCode",{parentName:"li"},"WeatherIcon.js"))),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/nhpbpMq.png",alt:"Imgur"}))),Object(c.b)("p",null,"\u63a5\u8457\u628a\u539f\u672c\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"App.js")," \u4e2d ",Object(c.b)("inlineCode",{parentName:"p"},"<DayCloudy />")," \u7684\u90e8\u5206\u62c6\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"WeatherIcon")," \u9019\u500b\u5143\u4ef6\u4e2d\u3002"),Object(c.b)("h3",{id:"weathericon-\u5143\u4ef6"},"WeatherIcon \u5143\u4ef6"),Object(c.b)("p",null,"\u9019\u88e1\u6709\u4e09\u500b\u5730\u65b9\u9700\u8981\u7a0d\u5fae\u7559\u610f\u4e00\u4e0b\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u539f\u672c App \u5143\u4ef6\u7684\u6a94\u6848\u4f4d\u7f6e\u662f ",Object(c.b)("inlineCode",{parentName:"li"},"./src/App.js"),"\uff0c\u4f46\u73fe\u5728\u7684\u5143\u4ef6\u662f\u653e\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"./src/components/WeatherIcon.js"),"\uff0c\u56e0\u6b64\u5982\u679c\u73fe\u5728\u8981\u532f\u5165\u540c\u4e00\u5f35 SVG \u6a94\u6642\uff0c\u8981\u8a18\u5f97\u591a\u5f80\u5916\u8df3\u4e00\u5c64\u8cc7\u6599\u593e\uff0c\u624d\u80fd\u8f09\u5230\u539f\u672c\u7684\u5716\u7247\uff0c\u4e5f\u5c31\u662f\u5f9e\u539f\u672c\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"'./images/day-cloudy.svg'"),"\uff0c\u6539\u6210 ",Object(c.b)("inlineCode",{parentName:"li"},"'./../images/day-cloudy.svg'")),Object(c.b)("li",{parentName:"ol"},"\u539f\u672c\u662f\u76f4\u63a5\u5c0d SVG icon \u900f\u904e emotion \u4f86\u8abf\u6574\u6a23\u5f0f ",Object(c.b)("inlineCode",{parentName:"li"},"const DayCloudy = styled(DayCloudyIcon)"),"\uff0c\u9019\u88e1\u55ae\u7d14\u70ba\u4e86\u7f8e\u89c0\uff0c\u5728\u5916\u9762\u591a\u5305\u4e00\u5c64 ",Object(c.b)("inlineCode",{parentName:"li"},"div"),"\uff0c\u8b8a\u6210 ",Object(c.b)("inlineCode",{parentName:"li"},"const IconContainer = styled.div")),Object(c.b)("li",{parentName:"ol"},"\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"max-height")," \u9650\u5236 SVG \u7684\u6700\u5927\u9ad8\u5ea6\u70ba ",Object(c.b)("inlineCode",{parentName:"li"},"110px"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/components/WeatherIcon.js\nimport React from 'react';\nimport styled from '@emotion/styled';\n// STEP 1\uff1a\u7559\u610f\u8f09\u5165 SVG \u5716\u6a94\u7684\u8def\u5f91\nimport { ReactComponent as DayCloudyIcon } from './../images/day-cloudy.svg';\n\n// STEP 2\uff1a\u5916\u570d\u5148\u5305\u4e00\u5c64 div\nconst IconContainer = styled.div`\n  flex-basis: 30%;\n\n  /* STEP 3\uff1a\u70ba SVG \u9650\u5236\u9ad8\u5ea6 */\n  svg {\n    max-height: 110px;\n  }\n`;\n\nconst WeatherIcon = () => {\n  return (\n    <IconContainer>\n      <DayCloudyIcon />\n    </IconContainer>\n  );\n};\n\nexport default WeatherIcon;\n")),Object(c.b)("p",null,"\u5169\u8005\u8b8a\u66f4\u7684\u5c0d\u7167\u5716\u5982\u4e0b\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/k4n1O2r.png",alt:"Imgur"}))),Object(c.b)("h3",{id:"app-\u5143\u4ef6"},"App \u5143\u4ef6"),Object(c.b)("p",null,"\u56de\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"App.js")," \u4e2d\uff0c\u73fe\u5728\u9700\u8981\u628a\u525b\u525b\u5b8c\u6210\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"WeatherIcon")," \u7d66\u8f09\u5165\u9032\u4f86\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/App.js\n// STEP 1\uff1a\u532f\u5165 WeatherIcon \u5143\u4ef6\nimport WeatherIcon from './components/WeatherIcon';\n\nconst App = () => {\n  // ...\n  return (\n    {/* ... */}\n    <CurrentWeather>\n      {/* STEP 2\uff1a\u4f7f\u7528 WeatherIcon \u5143\u4ef6 */}\n      <WeatherIcon />\n    </CurrentWeather>\n    {/* ... */}\n  );\n};\n")),Object(c.b)("p",null,"\u5982\u6b64\u5c31\u628a ",Object(c.b)("inlineCode",{parentName:"p"},"<WeatherIcon />")," \u62c6\u6210\u4e00\u500b\u7368\u7acb\u7684\u5143\u4ef6\u4e86\uff0c\u756b\u9762\u4e5f\u4e0d\u6703\u6709\u4efb\u4f55\u8b8a\u52d5\u3002"),Object(c.b)("h2",{id:"\u5b9a\u7fa9\u5929\u6c23\u4ee3\u78bc\u8981\u5c0d\u61c9\u5230\u7684\u5929\u6c23\u5716\u793a"},"\u5b9a\u7fa9\u5929\u6c23\u4ee3\u78bc\u8981\u5c0d\u61c9\u5230\u7684\u5929\u6c23\u5716\u793a"),Object(c.b)("p",null,"\u5f9e",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://opendata.cwb.gov.tw/dist/opendata-swagger.html"}),"\u4e2d\u592e\u6c23\u8c61\u5c40 API")," \u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"fetchWeatherForecast")," \u53d6\u56de\u7684\u5929\u6c23\u9810\u5831\u8cc7\u6599\u4e2d\uff0c\u5728\u5929\u6c23\u73fe\u8c61\uff08",Object(c.b)("inlineCode",{parentName:"p"},"Wx"),"\uff09\u7684\u8cc7\u6599\u4e2d\u4e5f\u5305\u542b\u4e86\u5929\u6c23\u4ee3\u78bc\uff08",Object(c.b)("inlineCode",{parentName:"p"},"weatherCode"),"\uff09\u5728\u5167\uff0c\u63a5\u4e0b\u4f86\u9700\u8981\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"<WeatherIcon />")," \u4e2d\u53bb\u5224\u65b7\u4e0d\u540c\u7684\u5929\u6c23\u985e\u578b\u9700\u8981\u986f\u793a\u4ec0\u9ebc\u6a23\u7684\u5929\u6c23\u5716\u793a\u3002"),Object(c.b)("h3",{id:"\u8f09\u5165\u6240\u6709\u5929\u6c23\u5716\u793a"},"\u8f09\u5165\u6240\u6709\u5929\u6c23\u5716\u793a"),Object(c.b)("p",null,"\u5728\u4e00\u958b\u59cb\u5efa\u7acb\u5c08\u6848\u7684\u6642\u5019\u5c31\u5df2\u7d93\u628a\u6240\u6709\u7684\u5929\u6c23\u5716\u793a\u4e0b\u8f09\u4e26\u653e\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"./src/images")," \u7684\u8cc7\u6599\u593e\u4e2d\uff0c\u6240\u6709\u7684\u5929\u6c23\u5716\u793a\u4e00\u5171\u5206\u6210\u5169\u985e\uff0c\u4ee5 ",Object(c.b)("inlineCode",{parentName:"p"},"day-")," \u4f5c\u70ba\u524d\u7db4\u7684\u662f\u767d\u5929\u7528\u7684\uff0c\u4ee5 ",Object(c.b)("inlineCode",{parentName:"p"},"night-")," \u70ba\u524d\u7db4\u7684\u5247\u662f\u665a\u4e0a\u7528\u7684\uff0c\u4e00\u5171\u6709 14 \u5f35\u548c\u5929\u6c23\u6709\u95dc\u7684\u5716\u793a\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/dwiE7xc.png",alt:"Imgur"}))),Object(c.b)("p",null,"\u73fe\u5728\uff0c\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"WeatherIcon")," \u5143\u4ef6\u4e2d\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"import")," \u8f09\u5165\u9019 14 \u5f35\u5929\u6c23\u5716\u793a\uff0c\u9019\u88e1\u5df2\u7d93\u628a\u8f09\u5165\u5404\u5716\u793a\u7684\u7a0b\u5f0f\u78bc\u5beb\u597d\uff08\u9019\u88e1\u70ba\u4e86\u547d\u540d\u7684\u4e00\u81f4\uff0c\u628a\u5148\u524d\u547d\u540d\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"<DayCloudyIcon />")," \u6539\u6210 ",Object(c.b)("inlineCode",{parentName:"p"},"<DayCloudy />")," \uff09\uff0c\u8b80\u8005\u53ef\u4ee5\u5230\u672c\u55ae\u5143\u5728 Github \u4e0a\u7684\u8aaa\u660e\u9801\u76f4\u63a5\u5c07\u7a0b\u5f0f\u78bc\u8907\u88fd\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"./src/components/WeatherIcon.js")," \u4e2d\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// ./src/components/WeatherIcon.js\n\nimport React from 'react';\nimport styled from '@emotion/styled';\nimport { ReactComponent as DayThunderstorm } from './../images/day-thunderstorm.svg';\nimport { ReactComponent as DayClear } from './../images/day-clear.svg';\nimport { ReactComponent as DayCloudyFog } from './../images/day-cloudy-fog.svg';\nimport { ReactComponent as DayCloudy } from './../images/day-cloudy.svg';\nimport { ReactComponent as DayFog } from './../images/day-fog.svg';\nimport { ReactComponent as DayPartiallyClearWithRain } from './../images/day-partially-clear-with-rain.svg';\nimport { ReactComponent as DaySnowing } from './../images/day-snowing.svg';\nimport { ReactComponent as NightThunderstorm } from './../images/night-thunderstorm.svg';\nimport { ReactComponent as NightClear } from './../images/night-clear.svg';\nimport { ReactComponent as NightCloudyFog } from './../images/night-cloudy-fog.svg';\nimport { ReactComponent as NightCloudy } from './../images/night-cloudy.svg';\nimport { ReactComponent as NightFog } from './../images/night-fog.svg';\nimport { ReactComponent as NightPartiallyClearWithRain } from './../images/night-partially-clear-with-rain.svg';\nimport { ReactComponent as NightSnowing } from './../images/night-snowing.svg';\n\n// ...\n")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u9019\u4e9b\u5929\u6c23\u5716\u793a\u53d6\u81ea IconFinder \u4e0a The Weather is Nice Today \uff08",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.iconfinder.com/iconsets/the-weather-is-nice-today"}),"https://www.iconfinder.com/iconsets/the-weather-is-nice-today"),"\uff09\u3002"))),Object(c.b)("h3",{id:"\u5b9a\u7fa9\u300c\u5929\u6c23\u4ee3\u78bc\u300d\u6240\u5c0d\u61c9\u7684\u300c\u5929\u6c23\u578b\u614b\u300d"},"\u5b9a\u7fa9\u300c\u5929\u6c23\u4ee3\u78bc\u300d\u6240\u5c0d\u61c9\u7684\u300c\u5929\u6c23\u578b\u614b\u300d"),Object(c.b)("p",null,"\u5728\u4e2d\u592e\u6c23\u8c61\u5c40\u63d0\u4f9b\u7684\u300c",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://opendata.cwb.gov.tw/opendatadoc/MFC/D0047.pdf"}),"\u9810\u5831 XML \u7522\u54c1\u9810\u5831\u56e0\u5b50\u6b04\u4f4d\u4e2d\u6587\u8aaa\u660e\u8868")," \u300d\u9019\u4efd\u6587\u4ef6\u4e2d\uff0c\u6709\u5217\u51fa\u6240\u6709\u5929\u6c23\u4ee3\u78bc\u5c0d\u61c9\u5230\u7684\u5929\u6c23\u578b\u614b\uff0c\u4ee3\u78bc\u4e00\u5171\u6709 42 \u7a2e\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/vDsvwbm.png",alt:"imgur"}))),Object(c.b)("p",null,"\u9019\u88e1\uff0c\u70ba\u4e86\u907f\u514d\u8cc7\u6599\u8655\u7406\u7684\u90e8\u5206\u504f\u96e2\u4e86\u5b78\u7fd2 React \u7684\u91cd\u9ede\uff0c\u7b46\u8005\u5148\u5c07\u8cc7\u6599\u9032\u884c\u6574\u7406\uff0c\u8b80\u8005\u5011\u53ef\u4ee5\u900f\u904e\u4e0b\u9762\u7684\u8aaa\u660e\uff0c\u4e86\u89e3\u6574\u7406\u7684\u6d41\u7a0b\u5373\u53ef\uff0c\u82e5\u60f3\u66f4\u6e05\u695a\u7406\u89e3\u4e0d\u540c\u5929\u6c23\u4ee3\u78bc\u662f\u5982\u4f55\u5c0d\u61c9\u5230\u5929\u6c23\u578b\u614b\u7684\u90e8\u5206\uff0c\u8b80\u8005\u53ef\u4ee5\u518d\u53c3\u8003\u672c\u55ae\u5143 Github \u4e0a\u7684\u8aaa\u660e\u9801\u3002"),Object(c.b)("p",null,"\u9996\u5148\uff0c\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"./src/components/WeatherIcon.js")," \u4e2d\u7b46\u8005\u5b9a\u7fa9\u4e86\u4e00\u500b\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"p"},"weatherTypes")," \u7684\u7269\u4ef6\uff08\u53ef\u65bc Github \u8aaa\u660e\u9801\u8907\u88fd\u6b64\u7269\u4ef6\uff09\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/components/WeatherIcon.js\n// ...\nconst weatherTypes = {\n  isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],\n  isClear: [1],\n  isCloudyFog: [25, 26, 27, 28],\n  isCloudy: [2, 3, 4, 5, 6, 7],\n  isFog: [24],\n  isPartiallyClearWithRain: [\n    8,\n    9,\n    10,\n    11,\n    12,\n    13,\n    14,\n    19,\n    20,\n    29,\n    30,\n    31,\n    32,\n    38,\n    39,\n  ],\n  isSnowing: [23, 37, 42],\n};\n")),Object(c.b)("p",null,"\u5728\u9019\u500b\u7269\u4ef6\u4e2d\uff0c\u53f3\u5074\u653e\u7684\u662f\u300c\u5929\u6c23\u4ee3\u78bc\uff08weatherCode\uff09\u300d\uff0c\u5de6\u5074\u5247\u662f\u8a72\u5929\u6c23\u4ee3\u78bc\u5c0d\u61c9\u5230\u7684\u300c\u5929\u6c23\u578b\u614b\uff08weatherType\uff09\u300d\uff0c\u8209\u4f8b\u4f86\u8aaa\uff0c\u5929\u6c23\u4ee3\u78bc\u70ba ",Object(c.b)("inlineCode",{parentName:"p"},"15")," \u6642\uff0c\u5c0d\u61c9\u5230\u7684\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"isThunderstorm"),"\uff0c\u8868\u793a\u8a72\u4ee3\u78bc\u53cd\u6620\u7684\u662f\u96f7\u96e8\u7684\u5929\u6c23\u578b\u614b\uff1b\u5929\u6c23\u4ee3\u78bc\u5982\u679c\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"1")," \u6642\uff0c\u5c0d\u61c9\u5230\u7684\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"isClear"),"\uff0c\u53cd\u6620\u7684\u662f\u6674\u6717\u7684\u5929\u6c23\u578b\u614b\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/e1Qv3f7.png",alt:"Imgur"}))),Object(c.b)("p",null,"\u53e6\u5916\uff0c\u53ef\u4ee5\u7559\u610f\u5230\uff0c\u591a\u500b\u5929\u6c23\u4ee3\u78bc\u90fd\u53ef\u80fd\u53cd\u6620\u5230\u540c\u4e00\u500b\u5929\u6c23\u578b\u614b\u3002\u5982\u679c\u5929\u6c23\u4ee3\u78bc\u662f\u5c6c\u65bc 15, 16, 17, 18, ... \u9019\u5176\u4e2d\u4e00\u7a2e\u7684\u8a71\uff0c\u90fd\u5c6c\u65bc\u96f7\u9663\u96e8\uff08",Object(c.b)("inlineCode",{parentName:"p"},"isThunderstorm"),"\uff09\u3002"),Object(c.b)("h3",{id:"\u6839\u64da\u300c\u5929\u6c23\u578b\u614b\u300d\u986f\u793a\u5c0d\u61c9\u7684\u300c\u5929\u6c23\u5716\u793a\u300d"},"\u6839\u64da\u300c\u5929\u6c23\u578b\u614b\u300d\u986f\u793a\u5c0d\u61c9\u7684\u300c\u5929\u6c23\u5716\u793a\u300d"),Object(c.b)("p",null,"\u80fd\u5920\u5c07\u300c\u5929\u6c23\u4ee3\u78bc\u300d\u5c0d\u61c9\u5230\u7279\u5b9a\u7684\u300c\u5929\u6c23\u578b\u614b\u300d\u5f8c\uff0c\u56e0\u70ba\u6240\u6709\u7684\u5929\u6c23\u5716\u793a\u4e2d\u53c8\u6709\u5206\u6210\u767d\u5929\uff08day\uff09\u548c\u665a\u4e0a\uff08night\uff09\uff0c\u6240\u4ee5\u6703\u518d\u5b9a\u7fa9\u4e00\u500b\u80fd\u5920\u5c07\u300c\u5929\u6c23\u578b\u614b\u300d\u5c0d\u61c9\u5230\u300c\u5929\u6c23\u5716\u793a\u300d\u7684\u8b8a\u6578\uff0c\u7a31\u4f5c ",Object(c.b)("inlineCode",{parentName:"p"},"weatherIcons"),"\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/4rxj68w.png",alt:"Imgur"}))),Object(c.b)("p",null,"\u4e00\u6a23\u628a\u9019\u500b\u8b8a\u6578\u653e\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"./src/components/WeatherIcon.js")," \u4e2d\uff08\u8b80\u8005\u540c\u6a23\u53ef\u4ee5\u5728 Github \u4e0a\u7684\u5c08\u6848\u8aaa\u660e\u9801\u8907\u88fd\u6b64\u6bb5\u7a0b\u5f0f\u78bc\uff09\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/components/WeatherIcon.js\n// ..\n\nconst weatherTypes = {\n  /* ... */\n};\n\nconst weatherIcons = {\n  day: {\n    isThunderstorm: <DayThunderstorm />,\n    isClear: <DayClear />,\n    isCloudyFog: <DayCloudyFog />,\n    isCloudy: <DayCloudy />,\n    isFog: <DayFog />,\n    isPartiallyClearWithRain: <DayPartiallyClearWithRain />,\n    isSnowing: <DaySnowing />,\n  },\n  night: {\n    isThunderstorm: <NightThunderstorm />,\n    isClear: <NightClear />,\n    isCloudyFog: <NightCloudyFog />,\n    isCloudy: <NightCloudy />,\n    isFog: <NightFog />,\n    isPartiallyClearWithRain: <NightPartiallyClearWithRain />,\n    isSnowing: <NightSnowing />,\n  },\n};\n\n// ...\n")),Object(c.b)("h3",{id:"\u5929\u6c23\u4ee3\u78bc\u3001\u5929\u6c23\u578b\u614b\u8207\u5929\u6c23\u5716\u793a\u9593\u7684\u5c0d\u61c9\u95dc\u4fc2"},"\u5929\u6c23\u4ee3\u78bc\u3001\u5929\u6c23\u578b\u614b\u8207\u5929\u6c23\u5716\u793a\u9593\u7684\u5c0d\u61c9\u95dc\u4fc2"),Object(c.b)("p",null,"\u300c\u5929\u6c23\u4ee3\u78bc\uff08weatherCode\uff09\u300d\u3001\u300c\u5929\u6c23\u578b\u614b\uff08weatherType\uff09\u300d\u5230\u300c\u5929\u6c23\u5716\u793a\uff08weatherIcon\uff09\u300d\u9593\u5c0d\u61c9\u7684\u95dc\u4fc2\u6703\u50cf\u9019\u6a23\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/TkzfZPY.png",alt:"Imgur"}))),Object(c.b)("p",null,"\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"weatherTypes")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"weatherIcons")," \u9019\u5169\u500b\u8b8a\u6578\uff0c\u5c31\u53ef\u4ee5\u627e\u51fa\u67d0\u4e00\u300c\u5929\u6c23\u4ee3\u78bc\u300d\u9700\u8981\u5c0d\u61c9\u986f\u793a\u54ea\u4e00\u5f35\u300c\u5929\u6c23\u5716\u793a\u300d\u3002\u8209\u4f8b\u4f86\u8aaa\uff0c\u5982\u679c\u5f9e API \u53d6\u5f97\u7684\u300c\u5929\u6c23\u4ee3\u78bc\u300d\u662f 1\uff0c\u90a3\u9ebc\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"weatherTypes")," \u9019\u500b\u8b8a\u6578\uff0c\u5c31\u53ef\u4ee5\u77e5\u9053\u9019\u500b\u300c\u5929\u6c23\u4ee3\u78bc\u300d\u5c0d\u61c9\u5230\u7684\u300c\u5929\u6c23\u578b\u614b\u300d\u662f\u5c6c\u65bc\u300c\u6674\u5929\uff08",Object(c.b)("inlineCode",{parentName:"p"},"isClear"),"\uff09\u300d\uff1b\u5982\u679c\u7576\u6642\u662f\u767d\u5929\uff08",Object(c.b)("inlineCode",{parentName:"p"},"day"),"\uff09\uff0c\u5c31\u53ef\u4ee5\u5f9e ",Object(c.b)("inlineCode",{parentName:"p"},"weatherIcons")," \u7269\u4ef6\u4e2d\uff0c\u627e\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"weatherIcons.day.isClear")," \u9019\u500b\u5929\u6c23\u5716\u793a\u4f86\u986f\u793a\uff1b\u5982\u679c\u7576\u6642\u662f\u665a\u4e0a\uff08",Object(c.b)("inlineCode",{parentName:"p"},"night"),"\uff09\uff0c\u5247\u986f\u793a ",Object(c.b)("inlineCode",{parentName:"p"},"weatherIcons.night.isClear")," \u9019\u500b\u5716\u793a\u3002"),Object(c.b)("h2",{id:"\u5efa\u7acb\u6839\u64da\u5929\u6c23\u4ee3\u78bc\u627e\u51fa\u5c0d\u61c9\u5929\u6c23\u578b\u614b\u7684\u51fd\u5f0f"},"\u5efa\u7acb\u6839\u64da\u5929\u6c23\u4ee3\u78bc\u627e\u51fa\u5c0d\u61c9\u5929\u6c23\u578b\u614b\u7684\u51fd\u5f0f"),Object(c.b)("p",null,"\u5982\u540c\u4e0a\u9762\u6700\u5f8c\u4e00\u6bb5\u7684\u63cf\u8ff0\uff0c\u73fe\u5728\u6703\u9700\u8981\u4e00\u500b\u51fd\u5f0f\u628a\u300c\u5929\u6c23\u4ee3\u78bc\u8f49\u70ba\u5929\u6c23\u578b\u614b\u300d\uff0c\u9019\u88e1\u628a\u9019\u500b\u51fd\u5f0f\u7a31\u4f5c ",Object(c.b)("inlineCode",{parentName:"p"},"weatherCode2Type"),"\uff0c\u6d41\u7a0b\u5982\u4e0b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5047\u8a2d\u5f9e API \u53d6\u5f97\u7684\u5929\u6c23\u4ee3\u78bc\uff08",Object(c.b)("inlineCode",{parentName:"li"},"weatherCode"),"\uff09\u662f ",Object(c.b)("inlineCode",{parentName:"li"},"1")),Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"Object.entries")," \u5c07 ",Object(c.b)("inlineCode",{parentName:"li"},"weatherTypes")," \u9019\u500b\u7269\u4ef6\u7684 key \u548c value \u8f49\u6210\u9663\u5217\uff0c\u628a key \u53d6\u505a ",Object(c.b)("inlineCode",{parentName:"li"},"weatherType"),"\uff0c\u628a value \u53d6\u505a ",Object(c.b)("inlineCode",{parentName:"li"},"weatherCodes")),Object(c.b)("li",{parentName:"ul"},"\u91dd\u5c0d\u8a72\u9663\u5217\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"find")," \u65b9\u6cd5\u4f86\u8dd1\u8ff4\u5708\uff0c\u642d\u914d ",Object(c.b)("inlineCode",{parentName:"li"},"includes")," \u65b9\u6cd5\u4f86\u6aa2\u9a57 API \u56de\u50b3\u7684\u300c\u5929\u6c23\u4ee3\u78bc\u300d\uff0c\u6703\u5c0d\u61c9\u5230\u54ea\u4e00\u7a2e\u300c\u5929\u6c23\u578b\u614b\u300d"),Object(c.b)("li",{parentName:"ul"},"\u627e\u5230\u7684\u9663\u5217\u6703\u9577\u50cf\u9019\u6a23 ",Object(c.b)("inlineCode",{parentName:"li"},"['isClear', [1]]"),"\uff0c\u56e0\u6b64\u53ef\u4ee5\u900f\u904e\u900f\u904e\u9663\u5217\u7684\u8ce6\u503c\uff0c\u53d6\u51fa\u9663\u5217\u7684\u7b2c\u4e00\u500b\u5143\u7d20\uff0c\u4e26\u53d6\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"li"},"weatherType")," \u5f8c\u56de\u50b3")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u63d0\u9192")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u9019\u88e1\u7528\u5230\u8f03\u591a\u8655\u7406\u9663\u5217\u7684\u65b9\u6cd5\uff0c\u5305\u542b ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"}),"Array.prototype.find")," \u548c ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"}),"Array.prototype.includes")," \u7b49\uff0c\u82e5\u5c0d\u65bc\u9663\u5217\u64cd\u4f5c\u9084\u8f03\u4e0d\u719f\u6089\u7684\u8a71\uff0c\u53ef\u4ee5\u5148\u5927\u6982\u770b\u904e\u3002\u53ea\u9700\u77e5\u9053\u9019\u88e1\u5efa\u7acb\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"weatherCode2Type")," \u51fd\u5f0f\uff0c\u53ef\u4ee5\u5c07\u300c\u5929\u6c23\u4ee3\u78bc\u300d\u8f49\u63db\u6210\u300c\u5929\u6c23\u578b\u614b\u300d\u3002"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const weatherTypes = {\n  /* ... */\n};\n\n// \u4f7f\u7528\u8ff4\u5708\u4f86\u627e\u51fa\u8a72\u5929\u6c23\u4ee3\u78bc\u5c0d\u61c9\u5230\u7684\u5929\u6c23\u578b\u614b\nconst weatherCode2Type = (weatherCode) => {\n  const [weatherType] =\n    Object.entries(weatherTypes).find(([weatherType, weatherCodes]) =>\n      weatherCodes.includes(Number(weatherCode))\n    ) || [];\n\n  return weatherType;\n};\n\n// \u5047\u8a2d\u5f9e API \u53d6\u5f97\u7684\u5929\u6c23\u4ee3\u78bc\u662f 1\nconst weatherCode = 1;\nconsole.log(weatherCode2Type(weatherCode)); // isClear\n")),Object(c.b)("p",null,"\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"weatherCode2Type")," \u7684\u65b9\u6cd5\u4e2d\uff0c\u7576 ",Object(c.b)("inlineCode",{parentName:"p"},"weatherCode")," \u662f 1 \u7684\u6642\u5019\uff0c\u6211\u5011\u6703\u77e5\u9053\u8a72\u5929\u6c23\u578b\u614b\u6703\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"isClear"),"\u3002\u9019\u500b\u65b9\u6cd5\u7684\u908f\u8f2f\u7a0d\u5fae\u9700\u8981\u601d\u8003\u4e00\u4e0b\uff0c\u5982\u679c\u5c0d\u65bc\u9663\u5217\u7684\u8655\u7406\u9084\u4e0d\u662f\u90a3\u9ebc\u719f\u6089\u7684\u8a71\uff0c\u53ef\u4ee5\u5148\u5927\u6982\u770b\u904e\u3002\u53ea\u9700\u77e5\u9053\u9019\u88e1\u5efa\u7acb\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"weatherCode2Type")," \u51fd\u5f0f\uff0c\u53ef\u4ee5\u5c07\u300c\u5929\u6c23\u4ee3\u78bc\u300d\u8f49\u63db\u6210\u300c\u5929\u6c23\u578b\u614b\u300d\u3002\u9019\u90e8\u5206\u7684\u7a0b\u5f0f\u78bc\u540c\u6642\u4e5f\u6709\u653e\u5728 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://repl.it/@PJCHENder/weatherCode2Type"}),"repl.it")," \u4e0a\uff0c\u8b80\u8005\u4e5f\u53ef\u4ee5\u5728\u4e0a\u9762\u6e2c\u8a66\u73a9\u73a9\u770b\uff0c\u6703\u5c0d\u65bc ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://repl.it/@PJCHENder/weatherCode2Type"}),"weatherCode2Type")," \u9019\u500b\u65b9\u6cd5\u6bd4\u8f03\u7406\u89e3\uff1a"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://repl.it/@PJCHENder/weatherCode2Type"}),"https://repl.it/@PJCHENder/weatherCode2Type")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/meAxbeC.png",alt:"Imgur"}))),Object(c.b)("p",null,"\u63a5\u4e0b\u4f86\uff0c\u5c31\u53ea\u9700\u8981\u5224\u65b7\u4f7f\u7528\u8005\u64cd\u4f5c\u6b64 App \u6642\u662f\u767d\u5929\u9084\u662f\u665a\u4e0a\uff0c\u518d\u5f9e ",Object(c.b)("inlineCode",{parentName:"p"},"weatherIcons")," \u4e2d\u627e\u51fa\u5c0d\u61c9\u7684 SVG \u5716\u793a\u3002\u5982\u679c\u662f\u767d\u5929\uff0c\u5c31\u986f\u793a ",Object(c.b)("inlineCode",{parentName:"p"},"weatherIcons.day.isClear")," \u9019\u5f35\u5716\u793a\uff1b\u665a\u4e0a\u7684\u8a71\uff0c\u5c31\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"weatherIcons.night.isClear")," \u9019\u5f35\u5929\u6c23\u5716\u793a\u3002"),Object(c.b)("p",null,"\u672c\u55ae\u5143\u4e3b\u8981\u90fd\u662f\u5728\u4fee\u6539 ",Object(c.b)("inlineCode",{parentName:"p"},"<WeatherIcon />")," \u9019\u500b\u5143\u4ef6\uff0c\u9019\u500b\u5143\u4ef6\u7684\u7a0b\u5f0f\u78bc\u6700\u7d42\u6703\u50cf\u9019\u6a23\uff08\u5b8c\u6574\u7a0b\u5f0f\u78bc\u53ef\u65bc Github \u4e0a\u5c0d\u61c9\u7684\u5206\u652f\u6aa2\u8996\uff09\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { ReactComponent as DayClear } from './../images/day-clear.svg';\n// ...\n\nconst IconContainer = styled.div`\n  /* ... */\n`;\n\nconst weatherTypes = {\n  /* ... */\n};\n\nconst weatherIcons = {\n  /* ... */\n};\n\nconst weatherCode2Type = (weatherCode) => {\n  /* ... */\n};\n\nconst WeatherIcon = () => {\n  return (\n    <IconContainer>\n      <DayCloudy />\n    </IconContainer>\n  );\n};\n\nexport default WeatherIcon;\n")),Object(c.b)("p",null,"\u73fe\u5728\uff0c\u6211\u5011\u5df2\u7d93\u53ef\u4ee5\u6839\u64da\u5929\u6c23\u4ee3\u78bc\u8f49\u63db\u5f97\u5230\u5929\u6c23\u578b\u614b\uff0c\u5728\u4e0b\u4e00\u500b\u55ae\u5143\u4e2d\uff0c\u6703\u6839\u64da\u9019\u500b\u5929\u6c23\u578b\u614b\uff0c\u8b93 WeatherIcon \u5143\u4ef6\u80fd\u986f\u793a\u51fa\u5c0d\u61c9\u7684\u5929\u6c23\u5716\u793a\u3002"),Object(c.b)("h2",{id:"\u63db\u4f60\u4e86\uff01\u628a\u5929\u6c23\u4ee3\u78bc\u8f49\u63db\u6210\u5929\u6c23\u578b\u614b"},"\u63db\u4f60\u4e86\uff01\u628a\u5929\u6c23\u4ee3\u78bc\u8f49\u63db\u6210\u5929\u6c23\u578b\u614b"),Object(c.b)("p",null,"\u73fe\u5728\u8981\u8acb\u4f60\u88fd\u4f5c\u80fd\u5920\u7522\u751f\u5929\u6c23\u5716\u793a\u7684 WeatherIcon \u5143\u4ef6\uff0c\u4e26\u64b0\u5beb\u80fd\u5920\u6839\u64da\u4e2d\u592e\u6c23\u8c61\u5c40 API \u56de\u50b3\u7684\u5929\u6c23\u4ee3\u78bc\uff0c\u8f49\u63db\u70ba\u5929\u6c23\u578b\u614b\u8207\u5929\u6c23\u5716\u793a\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"weatherCode2Type")," \u7684\u9019\u500b\u65b9\u6cd5\u3002\u4f60\u53ef\u4ee5\u53c3\u8003\u4ee5\u4e0b\u6d41\u7a0b\uff1a"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"./src/components")," \u4e2d\u5efa\u7acb WeatherIcon \u5143\u4ef6"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5c07\u539f\u672c App \u5143\u4ef6\u4e2d\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"<DayCloudyIcon />")," \u5143\u4ef6\u62c6\u5230 ",Object(c.b)("inlineCode",{parentName:"li"},"WeatherIcon")," \u5143\u4ef6\u5167\uff0c\u4e26\u4f5c\u51fa\u5c0d\u61c9\u7684\u8abf\u6574"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 App \u5143\u4ef6\u4e2d\u532f\u5165\u4e26\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"<WeatherIcon />")," \u5143\u4ef6\uff0c\u78ba\u8a8d\u5716\u793a\u80fd\u6b63\u5e38\u986f\u793a"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"WeatherIcon")," \u5143\u4ef6\u4e2d\u532f\u5165\u6240\u6709\u5929\u6c23\u5716\u793a"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5c07\u7b46\u8005\u6574\u7406\u597d\u7684\u8b8a\u6578 ",Object(c.b)("inlineCode",{parentName:"li"},"weatherTypes")," \u548c\u8b8a\u6578 ",Object(c.b)("inlineCode",{parentName:"li"},"weatherIcons")," \u653e\u5165 ",Object(c.b)("inlineCode",{parentName:"li"},"./src/components/WeatherIcon.js")," \u4e2d"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u64b0\u5beb\u80fd\u5920\u5c07\u5929\u6c23\u4ee3\u78bc\uff08",Object(c.b)("inlineCode",{parentName:"li"},"weatherCode"),"\uff09\u8f49\u63db\u70ba\u5929\u6c23\u578b\u614b\uff08",Object(c.b)("inlineCode",{parentName:"li"},"weatherType")," \uff09\u7684\u51fd\u5f0f\uff0c\u4e26\u53d6\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"li"},"weatherCode2Type"))),Object(c.b)("p",null,"\u672c\u55ae\u5143\u76f8\u95dc\u4e4b\u7db2\u9801\u9023\u7d50\u3001\u5b8c\u6574\u7a0b\u5f0f\u78bc\u8207\u7a0b\u5f0f\u78bc\u8b8a\u66f4\u90e8\u5206\u53ef\u65bc ",Object(c.b)("inlineCode",{parentName:"p"},"weather-code-to-weather-type")," \u5206\u652f\u6aa2\u8996\uff1a",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/weather-code-to-weather-type"}),"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/weather-code-to-weather-type")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/AcK6MPg.png",alt:"Imgur"}))))}l.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=l(n),d=a,j=s["".concat(i,".").concat(d)]||s[d]||m[d]||c;return n?r.a.createElement(j,o(o({ref:t},p),{},{components:n})):r.a.createElement(j,o({ref:t},p))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);