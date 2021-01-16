(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(160)),b={title:"5-6 \u642d\u914d useEffect \u62c9\u53d6\u591a\u652f API \u56de\u50b3\u7684\u8cc7\u6599",keywords:["React Hooks","useEffect"]},i={unversionedId:"book/ch5/5-6",id:"book/ch5/5-6",isDocsHomePage:!1,title:"5-6 \u642d\u914d useEffect \u62c9\u53d6\u591a\u652f API \u56de\u50b3\u7684\u8cc7\u6599",description:"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1afetch-forecast-data\u3002",source:"@site/docs/book/ch5/5-6.md",slug:"/book/ch5/5-6",permalink:"/react-bootcamp/docs/book/ch5/5-6",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/book/ch5/5-6.md",version:"current",sidebar:"book",previous:{title:"5-5 \u5be6\u4f5c\u8cc7\u6599\u8f09\u5165\u4e2d\u7684\u72c0\u614b",permalink:"/react-bootcamp/docs/book/ch5/5-5"},next:{title:"5-7 \u8b93\u62c9\u53d6 API \u7684\u51fd\u5f0f\u8207\u5143\u4ef6\u812b\u9264",permalink:"/react-bootcamp/docs/book/ch5/5-7"}},l=[{value:"\u55ae\u5143\u6838\u5fc3",id:"\u55ae\u5143\u6838\u5fc3",children:[]},{value:"\u4e86\u89e3 API \u56de\u50b3\u7684\u5929\u6c23\u9810\u5831\u8cc7\u6599",id:"\u4e86\u89e3-api-\u56de\u50b3\u7684\u5929\u6c23\u9810\u5831\u8cc7\u6599",children:[]},{value:"\u900f\u904e fetch \u53d6\u5f97\u5929\u6c23\u9810\u5831\u8cc7\u6599",id:"\u900f\u904e-fetch-\u53d6\u5f97\u5929\u6c23\u9810\u5831\u8cc7\u6599",children:[{value:"\u4fee\u6539\u8cc7\u6599\u72c0\u614b\u7684\u540d\u7a31",id:"\u4fee\u6539\u8cc7\u6599\u72c0\u614b\u7684\u540d\u7a31",children:[]},{value:"\u64b0\u5beb fetch \u7a0b\u5f0f\u78bc",id:"\u64b0\u5beb-fetch-\u7a0b\u5f0f\u78bc",children:[]},{value:"\u64b0\u5beb\u547c\u53eb\u5929\u6c23\u9810\u5831 API \u7684\u51fd\u5f0f",id:"\u64b0\u5beb\u547c\u53eb\u5929\u6c23\u9810\u5831-api-\u7684\u51fd\u5f0f",children:[]},{value:"\u932f\u8aa4\u8655\u7406\uff1a\u7559\u610f useState \u7684\u4f7f\u7528",id:"\u932f\u8aa4\u8655\u7406\uff1a\u7559\u610f-usestate-\u7684\u4f7f\u7528",children:[]},{value:"\u4fee\u6539\u539f\u672c\u547c\u53eb setWeatherElement \u7684\u5730\u65b9",id:"\u4fee\u6539\u539f\u672c\u547c\u53eb-setweatherelement-\u7684\u5730\u65b9",children:[]},{value:"\u4fee\u6539\u7576\u4f7f\u7528\u8005\u9ede\u64ca\u91cd\u65b0\u6574\u7406\u6642\u547c\u53eb\u7684\u65b9\u6cd5",id:"\u4fee\u6539\u7576\u4f7f\u7528\u8005\u9ede\u64ca\u91cd\u65b0\u6574\u7406\u6642\u547c\u53eb\u7684\u65b9\u6cd5",children:[]}]},{value:"\u4fee\u6539 weatherElement \u7684\u9810\u8a2d\u503c",id:"\u4fee\u6539-weatherelement-\u7684\u9810\u8a2d\u503c",children:[]},{value:"\u986f\u793a\u5929\u6c23\u63cf\u8ff0\u8207\u8212\u9069\u5ea6",id:"\u986f\u793a\u5929\u6c23\u63cf\u8ff0\u8207\u8212\u9069\u5ea6",children:[]},{value:"\u63db\u4f60\u4e86\uff01\u53d6\u5f97\u5929\u6c23\u63cf\u8ff0\u548c\u964d\u96e8\u6a5f\u7387\u7684\u8cc7\u6599",id:"\u63db\u4f60\u4e86\uff01\u53d6\u5f97\u5929\u6c23\u63cf\u8ff0\u548c\u964d\u96e8\u6a5f\u7387\u7684\u8cc7\u6599",children:[]}],o={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1a",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/fetch-forecast-data"}),Object(c.b)("inlineCode",{parentName:"a"},"fetch-forecast-data")),"\u3002"),Object(c.b)("h2",{id:"\u55ae\u5143\u6838\u5fc3"},"\u55ae\u5143\u6838\u5fc3"),Object(c.b)("p",null,"\u9019\u500b\u55ae\u5143\u7684\u4e3b\u8981\u76ee\u6a19\u5305\u542b\uff1a"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u4e86\u89e3\u5982\u4f55\u642d\u914d useEffect \u62c9\u53d6\u591a\u652f API \u56de\u50b3\u7684\u8cc7\u6599"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 setSomething \u4e2d\u4ee3\u5165\u51fd\u5f0f\uff0c\u4ee5\u53d6\u5f97\u539f\u672c\u7684\u8cc7\u6599\u72c0\u614b")),Object(c.b)("hr",null),Object(c.b)("p",null,"\u5230\u76ee\u524d\u70ba\u6b62\u300c\u81fa\u7063\u597d\u5929\u6c23\u300d\u5df2\u7d93\u53ef\u4ee5\u5728\u8f09\u5165\u6642\u81ea\u52d5\u62c9\u53d6\u8cc7\u6599\uff0c\u4e5f\u53ef\u4ee5\u5728\u4f7f\u7528\u8005\u9ede\u9078\u300c\u91cd\u65b0\u6574\u7406\u300d\u6642\u91cd\u65b0\u62c9\u53d6\u8cc7\u6599\uff0c\u4f46\u662f\u6240\u9700\u7684\u8cc7\u6599\u9084\u4e0d\u5b8c\u6574\uff0c\u5176\u4e2d\u9084\u6c92\u6709\u53d6\u5f97\u300c\u5929\u6c23\u63cf\u8ff0\u300d\u3001\u300c\u964d\u96e8\u6a5f\u7387\u300d\uff0c\u56e0\u6b64\u4e5f\u7121\u6cd5\u66f4\u65b0\u5929\u6c23\u5716\u793a\u3002"),Object(c.b)("p",null,"\u5728\u9019\u500b\u55ae\u5143\u4e2d\uff0c\u6211\u5011\u6703\u4f7f\u7528\u4e2d\u592e\u6c23\u8c61\u5c40\u63d0\u4f9b\u53e6\u4e00\u652f\u300c\u5929\u6c23\u9810\u5831 API\u300d\u4f86\u53d6\u5f97\u4e0d\u8db3\u7684\u8cc7\u8a0a\uff0c\u4e26\u4e14\u5b78\u7fd2\u5728 React \u5143\u4ef6\u4e2d\uff0c\u5982\u4f55\u4e00\u6b21\u767c\u9001\u591a\u652f API \u8acb\u6c42\u3002"),Object(c.b)("h2",{id:"\u4e86\u89e3-api-\u56de\u50b3\u7684\u5929\u6c23\u9810\u5831\u8cc7\u6599"},"\u4e86\u89e3 API \u56de\u50b3\u7684\u5929\u6c23\u9810\u5831\u8cc7\u6599"),Object(c.b)("p",null,"\u70ba\u4e86\u8981\u53d6\u5f97\u300c\u964d\u96e8\u6a5f\u7387\u300d\u8207\u300c\u5929\u6c23\u63cf\u8ff0\u300d\u7684\u8cc7\u6599\uff0c\u9019\u88e1\u6703\u4f7f\u7528\u5230\u524d\u9762\u66fe\u8aaa\u660e\u904e\u300c\u4e00\u822c\u5929\u6c23\u9810\u5831-\u4eca\u660e 36 \u5c0f\u6642\u5929\u6c23\u9810\u5831\u300d\u9019\u652f API\u3002\u540c\u6a23\u53ef\u4ee5\u5728\u7dda\u4e0a\u8aaa\u660e\u6587\u4ef6\u8a66\u6253\u300c",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://opendata.cwb.gov.tw/dist/opendata-swagger.html#/operations/%E9%A0%90%E5%A0%B1/get_v1_rest_datastore_F_C0032_001"}),"/v1/rest/datastore/F-C0032-001")," \u4e00\u822c\u5929\u6c23\u9810\u5831-\u4eca\u660e 36 \u5c0f\u6642\u5929\u6c23\u9810\u5831\u300d\u9019\u652f API \u4f86\u53d6\u5f97\u56de\u61c9\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/IZliw8g.png",alt:"imgur"}))),Object(c.b)("p",null,"\u9ede\u64ca\u300cTry it out\u300d\uff0c\u586b\u5165\u6388\u6b0a\u78bc\u5f8c\uff0c\u770b\u770b\u9019\u652f API \u6703\u56de\u61c9\u7684\u8cc7\u6599\u5167\u5bb9\u3002"),Object(c.b)("p",null,"\u5f9e\u56de\u61c9\u7684\u5167\u5bb9\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u5011\u4e00\u6a23\u53ef\u4ee5\u5f9e ",Object(c.b)("inlineCode",{parentName:"p"},"records.location")," \u4e2d\u53d6\u5f97\u548c\u5929\u6c23\u6709\u95dc\u7684\u8cc7\u6599\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "success": "true",\n  "result": {\n    /* ... */\n  },\n  "records": {\n    "datasetDescription": "\u4e09\u5341\u516d\u5c0f\u6642\u5929\u6c23\u9810\u5831",\n    "location": [/* ... */]\n  }\n}\n')),Object(c.b)("p",null,"\u4e00\u6a23\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"location")," \u5c6c\u6027\u4e2d\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"weatherElement")," \u4e2d\uff0c\u53ef\u4ee5\u770b\u5230\u63d0\u4f9b\u4e86\u5f88\u591a\u4e0d\u540c\u985e\u578b\u7684\u8cc7\u6599\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "weatherElement": [\n    {\n      "elementName": "PoP",\n      "time": [\n        {\n          "startTime": "2020-06-28 18:00:00",\n          "endTime": "2020-06-29 06:00:00",\n          "parameter": {\n            "parameterName": "0",\n            "parameterUnit": "\u767e\u5206\u6bd4"\n          }\n        }, // ...\n      ]\n    }, // ...\n  ]\n}\n')),Object(c.b)("p",null,"\u5f9e\u9019\u4e9b\u8cc7\u6599\u4e2d\u53ef\u4ee5\u53d6\u5f97\u6700\u8fd1 36 \u5c0f\u6642\u7684\u5929\u6c23\u9810\u5831\uff0c\u4e26\u4e14\u5c07\u8cc7\u6599\u5207\u6210\u6bcf 12 \u5c0f\u6642\u4e00\u4efd\uff0c\u56e0\u6b64\u5728\u6642\u9593\uff08",Object(c.b)("inlineCode",{parentName:"p"},"time"),"\uff09\u6b04\u4f4d\u4e2d\uff0c\u4e00\u5171\u6703\u6709\u4e09\u500b\u8cc7\u6599\u3002"),Object(c.b)("p",null,"\u5c0d\u7167\u8457\u300c",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://opendata.cwb.gov.tw/opendatadoc/MFC/D0047.pdf"}),"\u9810\u5831 XML \u7522\u54c1\u9810\u5831\u56e0\u5b50\u6b04\u4f4d\u4e2d\u6587\u8aaa\u660e\u8868\uff08https://opendata.cwb.gov.tw/opendatadoc/MFC/D0047.pdf\uff09"),"\u300d\u9019\u4efd\u6587\u4ef6\uff0c\u53ef\u4ee5\u77e5\u9053\u56de\u50b3\u7684\u8cc7\u6599\u88e1\u9762\u5305\u542b\u300c\u5929\u6c23\u73fe\u8c61\uff08Wx\uff09\u300d\u3001\u300c\u964d\u96e8\u6a5f\u7387\uff08PoP\uff09\u300d\u3001\u300c\u8212\u9069\u5ea6\uff08CI\uff09\u300d\u3001\u300c\u6700\u9ad8\u6eab\u5ea6\uff08MaxT\uff09\u300d\u548c\u300c\u6700\u4f4e\u6eab\u5ea6\uff08MinT\uff09\u300d\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/4aPhNRa.png",alt:"imgur"}))),Object(c.b)("p",null,"\u4e5f\u5c31\u662f\u8aaa\uff0c\u900f\u904e\u5929\u6c23\u9810\u5831\u9019\u652f API \u6211\u5011\u4e0d\u53ea\u62ff\u5230\u4e86\u300c\u964d\u96e8\u6a5f\u7387\u300d\uff0c\u540c\u6642\u4e5f\u53ef\u4ee5\u900f\u904e\u300c\u5929\u6c23\u73fe\u8c61\u300d\u548c\u300c\u8212\u9069\u5ea6\u300d\u4f86\u7d44\u6210\u756b\u9762\u4e2d\u6240\u9700\u7684\u300c\u5929\u6c23\u63cf\u8ff0\u300d\u3002\u53e6\u5916\u5728\u300c\u5929\u6c23\u73fe\u8c61\u300d\u56de\u50b3\u7684\u8cc7\u6599\u4e2d\uff0c\u9084\u63d0\u4f9b\u4e86\u5929\u6c23\u63cf\u8ff0\u4ee3\u78bc\uff08",Object(c.b)("inlineCode",{parentName:"p"},"weatherCode"),")\uff0c\u5f8c\u7e8c\u5c07\u53ef\u4ee5\u900f\u904e\u9019\u500b\u4ee3\u78bc\u4f86\u986f\u793a\u5c0d\u61c9\u7684\u300c\u5929\u6c23\u5716\u793a\u300d\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/HMXgTzI.png",alt:"imgur"}))),Object(c.b)("h2",{id:"\u900f\u904e-fetch-\u53d6\u5f97\u5929\u6c23\u9810\u5831\u8cc7\u6599"},"\u900f\u904e fetch \u53d6\u5f97\u5929\u6c23\u9810\u5831\u8cc7\u6599"),Object(c.b)("p",null,"\u73fe\u5728\u6211\u5011\u5c31\u53ef\u4ee5\u900f\u904e\u525b\u525b\u627e\u5230\u7684\u9019\u652f API \u4f86\u586b\u88dc\u7576\u521d\u8cc7\u6599\u4e0d\u8db3\u7684\u90e8\u5206\u3002"),Object(c.b)("h3",{id:"\u4fee\u6539\u8cc7\u6599\u72c0\u614b\u7684\u540d\u7a31"},"\u4fee\u6539\u8cc7\u6599\u72c0\u614b\u7684\u540d\u7a31"),Object(c.b)("p",null,"\u539f\u672c\u5728\u5b9a\u7fa9\u8cc7\u6599\u72c0\u614b ",Object(c.b)("inlineCode",{parentName:"p"},"state")," \u7684\u6642\u5019\uff0c\u662f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"currentWeather")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"setCurrentWeather"),"\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const [currentWeather, setCurrentWeather] = useState(/* ... */);\n")),Object(c.b)("p",null,"\u4f46\u73fe\u5728\u9019\u500b\u8cc7\u6599\u4e2d\u4e0d\u53ea\u5305\u542b\u7576\u524d\u7684\u5929\u6c23\u8cc7\u6599\uff0c\u9084\u5305\u542b\u5f9e\u5929\u6c23\u9810\u5831\u4e2d\u53d6\u5f97\u7684\u96e8\u91cf\u548c\u5929\u6c23\u63cf\u8ff0\u7684\u8cc7\u6599\uff0c\u70ba\u4e86\u907f\u514d\u81ea\u5df1\u5beb\u5230\u5f8c\u4f86\u6df7\u6dc6\uff0c\u5148\u628a\u8cc7\u6599\u7684\u547d\u540d\u6539\u6210 ",Object(c.b)("inlineCode",{parentName:"p"},"weatherElement"),"\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const [weatherElement, setWeatherElement] = useState(/* ... */);\n")),Object(c.b)("p",null,"\u539f\u672c\u7a0b\u5f0f\u4e2d\u5c31\u6709\u4f7f\u7528\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"currentWeather")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"setCurrentWeather")," \u7684\u90e8\u5206\uff0c\u8a18\u5f97\u4e5f\u8981\u4e00\u4f75\u6539\u6210 ",Object(c.b)("inlineCode",{parentName:"p"},"weatherElement")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"setWeatherElement"),"\uff0c\u5982\u4e0b\u5716\u6240\u793a\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/O7z2cdX.png",alt:"Imgur"}))),Object(c.b)("h3",{id:"\u64b0\u5beb-fetch-\u7a0b\u5f0f\u78bc"},"\u64b0\u5beb fetch \u7a0b\u5f0f\u78bc"),Object(c.b)("p",null,"\u73fe\u5728\u56de\u5230\u5c08\u6848\u4e2d\u4e00\u6a23\u53ef\u4ee5\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"fetch")," \u8acb\u6c42\u5929\u6c23\u9810\u5831\u7684\u8cc7\u6599\uff0c\u5beb\u6cd5\u6703\u50cf\u9019\u6a23\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const LOCATION_NAME_FORECAST = '\u81fa\u5317\u5e02';\n\nfetch(\n  `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME_FORECAST}`\n)\n  .then((response) => response.json())\n  .then((data) => console.log('data', data));\n")),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u7559\u610f")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u9019\u88e1\u6211\u5011\u984d\u5916\u5b9a\u7fa9\u4e86\u4e00\u500b\u8b8a\u6578\u540d\u7a31\u70ba ",Object(c.b)("inlineCode",{parentName:"p"},"LOCATION_NAME_FORECAST"),"\uff0c\u503c\u662f\u300c\u81fa\u5317\u5e02\u300d\uff0c\u9084\u8a18\u5f97\u524d\u9762\u66fe\u7d93\u63d0\u904e\u300c\u5929\u6c23\u89c0\u6e2c\u300d\u548c\u300c\u5929\u6c23\u9810\u5831\u300d\u9700\u8981\u586b\u5165\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"locationName")," \u4e0d\u540c\uff0c\u300c\u5929\u6c23\u89c0\u6e2c\u300d\u8981\u5e36\u5165\u7684\u662f\u300c\u5c40\u5c6c\u89c0\u6e2c\u7ad9\u300d\uff0c\u800c\u300c\u5929\u6c23\u9810\u5831\u300d\u8981\u5e36\u5165\u662f\u300c\u7e23\u5e02\u540d\u7a31\u300d\u3002\u9019\u88e1\u56e0\u70ba\u662f\u547c\u53eb\u300c\u5929\u6c23\u9810\u5831\u300d\u7684 API\uff0c\u56e0\u6b64\u9700\u8981\u5e36\u5165\u7684\u662f\u300c\u81fa\u5317\u5e02\u300d\u800c\u4e0d\u662f\u300c\u81fa\u5317\u300d\uff0c\u5426\u5247\u6703\u7121\u6cd5\u6b63\u78ba\u53d6\u5f97\u8cc7\u6599\u3002"))),Object(c.b)("h3",{id:"\u64b0\u5beb\u547c\u53eb\u5929\u6c23\u9810\u5831-api-\u7684\u51fd\u5f0f"},"\u64b0\u5beb\u547c\u53eb\u5929\u6c23\u9810\u5831 API \u7684\u51fd\u5f0f"),Object(c.b)("p",null,"\u5982\u540c ",Object(c.b)("inlineCode",{parentName:"p"},"fetchCurrentWeather")," \u4e00\u6a23\uff0c\u73fe\u5728\u4f86\u64b0\u5beb\u4e00\u500b ",Object(c.b)("inlineCode",{parentName:"p"},"fetchWeatherForecast")," \u7684\u65b9\u6cd5\uff0c\u628a\u8cc7\u6599\u53d6\u56de\u4f86\u5f8c\uff0c\u904e\u6ffe\u51fa\u6211\u5011\u9700\u8981\u7684\u8cc7\u6599\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"fetchWeatherForecast")," \u7684\u7a0b\u5f0f\u78bc\uff0c\u908f\u8f2f\u57fa\u672c\u4e0a\u548c ",Object(c.b)("inlineCode",{parentName:"p"},"fetchCurrentWeather")," \u662f\u4e00\u6a23\u7684\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"reduce")," \u904e\u6ffe\u51fa\u6240\u9700\u8981\u7684\u5929\u6c23\u56e0\u5b50\uff0c\u5305\u542b\u300c\u5929\u6c23\u73fe\u8c61\uff08Wx\uff09\u300d\u3001\u300c\u964d\u96e8\u6a5f\u7387\uff08PoP\uff09\u300d\u548c\u300c\u8212\u9069\u5ea6\uff08CI\uff09\u300d\u3002"),Object(c.b)("li",{parentName:"ol"},"\u9019\u88e1\u4e4b\u6240\u4ee5\u4f7f\u7528\u4e86 ",Object(c.b)("inlineCode",{parentName:"li"},"item.time[0]")," \u662f\u56e0\u70ba\u5728\u300c\u672a\u4f86 36 \u5c0f\u6642\u5929\u6c23\u9810\u5831\u300d\u7684\u8cc7\u6599\u4e2d\uff0c\u6703\u56de\u50b3\u4e09\u500b\u6642\u6bb5\u7684\u8cc7\u6599\uff08\u6bcf 12 \u5c0f\u6642\u4e00\u7d44\uff09\uff0c\u800c\u6211\u5011\u8981\u986f\u793a\u7684\u662f\u5373\u6642\u5929\u6c23\u8cc7\u8a0a\uff0c\u6240\u4ee5\u6211\u5011\u5c31\u53ea\u53d6\u6700\u63a5\u8fd1\u7684 12 \u5c0f\u6642\u9810\u5831\u8cc7\u6599\uff0c\u4e5f\u5c31\u662f ",Object(c.b)("inlineCode",{parentName:"li"},"time")," \u9663\u5217\u4e2d\u7684\u7b2c\u4e00\u500b\u5143\u7d20\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const fetchWeatherForecast = () => {\n  fetch(/*...*/)\n    .then((response) => response.json())\n    .then((data) => {\n      // \u53d6\u51fa\u67d0\u7e23\u5e02\u7684\u9810\u5831\u8cc7\u6599\n      const locationData = data.records.location[0];\n\n      const weatherElements = locationData.weatherElement.reduce(\n        (neededElements, item) => {\n          // \u53ea\u4fdd\u7559\u9700\u8981\u7528\u5230\u7684\u300c\u5929\u6c23\u73fe\u8c61\u300d\u3001\u300c\u964d\u96e8\u6a5f\u7387\u300d\u548c\u300c\u8212\u9069\u5ea6\u300d\n          if (['Wx', 'PoP', 'CI'].includes(item.elementName)) {\n            // \u9019\u652f API \u6703\u56de\u50b3\u672a\u4f86 36 \u5c0f\u6642\u7684\u8cc7\u6599\uff0c\u9019\u88e1\u53ea\u9700\u8981\u53d6\u51fa\u6700\u8fd1 12 \u5c0f\u6642\u7684\u8cc7\u6599\uff0c\u56e0\u6b64\u4f7f\u7528 item.time[0]\n            neededElements[item.elementName] = item.time[0].parameter;\n          }\n          return neededElements;\n        },\n        {}\n      );\n    });\n};\n")),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"\u628a\u8cc7\u6599\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"setWeatherElement")," \u66f4\u65b0 React \u5143\u4ef6\u7684\u8cc7\u6599\u72c0\u614b\u4e2d\uff0c\u4f46\u9019\u9ebd\u505a\u6703\u6709\u4e00\u4e9b\u554f\u984c\uff0c\u5c07\u65bc\u5f8c\u9762\u8aaa\u660e")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// \u26a0\ufe0f \u9019\u9ebc\u505a\u6703\u6709\u554f\u984c\uff0c\u5c07\u65bc\u5f8c\u9762\u8aaa\u660e\nconst fetchWeatherForecast = () => {\n  fetch(/*...*/)\n    .then((response) => response.json())\n    .then((data) => {\n      // ...\n\n      setWeatherElement({\n        description: weatherElements.Wx.parameterName,\n        weatherCode: weatherElements.Wx.parameterValue,\n        rainPossibility: weatherElements.PoP.parameterName,\n        comfortability: weatherElements.CI.parameterName,\n      });\n    });\n};\n")),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"\u7531\u65bc\u5728\u5143\u4ef6\u4e2d\u591a\u4e86\u8212\u9069\u5ea6\uff08",Object(c.b)("inlineCode",{parentName:"li"},"comfortability"),"\uff09\u548c\u5929\u6c23\u63cf\u8ff0\u4ee3\u78bc\uff08",Object(c.b)("inlineCode",{parentName:"li"},"weatherCode"),"\uff09\u7684\u8cc7\u6599\uff0c\u56e0\u6b64\u8a18\u5f97\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"useState()")," \u7684\u9810\u8a2d\u503c\u4e2d\uff0c\u4e5f\u628a\u9019\u5169\u500b\u5c6c\u6027\u7684\u9810\u8a2d\u503c\u653e\u9032\u53bb\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const [weatherElement, setWeatherElement] = useState({\n  // ...\n  comfortability: '\u8212\u9069\u81f3\u60b6\u71b1',\n  weatherCode: 0,\n  isLoading: true,\n});\n")),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},"\u73fe\u5728\u6211\u5011\u628a\u9019\u500b\u5beb\u597d\u7684\u65b9\u6cd5\uff0c\u653e\u5230 ",Object(c.b)("inlineCode",{parentName:"li"},"useEffect")," \u4e2d\u53bb\u547c\u53eb\uff0c\u50cf\u662f\u9019\u6a23\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"useEffect(() => {\n  console.log('execute function in useEffect');\n  fetchCurrentWeather();\n  fetchWeatherForecast();\n}, []);\n")),Object(c.b)("h3",{id:"\u932f\u8aa4\u8655\u7406\uff1a\u7559\u610f-usestate-\u7684\u4f7f\u7528"},"\u932f\u8aa4\u8655\u7406\uff1a\u7559\u610f useState \u7684\u4f7f\u7528"),Object(c.b)("p",null,"\u4f46\u662f\u7576\u6211\u5011\u9019\u6a23\u5beb\u4e4b\u5f8c\uff0c\u4f60\u6703\u770b\u5230\u300c\u81fa\u7063\u597d\u5929\u6c23\u300d\u4e2d\u986f\u793a\u6eab\u5ea6\u8b8a\u6210\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"NaN"),"\uff0c\u90e8\u5206\u8cc7\u6599\u4e5f\u7121\u6cd5\u6b63\u5e38\u986f\u793a\uff0c\u8868\u793a\u8cc7\u6599\u51fa\u73fe\u4e86\u4e00\u4e9b\u554f\u984c\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/7LPm55G.png",alt:"Imgur"}))),Object(c.b)("p",null,"\u70ba\u4ec0\u9ebc\u6703\u767c\u751f\u9019\u6a23\u7684\u932f\u8aa4\u5462\uff1f"),Object(c.b)("p",null,"\u9019\u4e26\u4e0d\u65b0\u9bae\uff0c\u5176\u5be6\u6211\u5011\u5df2\u7d93\u78b0\u5230\u904e\u4e86\uff0c\u9084\u8a18\u5f97\u4e4b\u524d\u6211\u5011\u6709\u63d0\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"setSomething")," \u9019\u500b\u65b9\u6cd5\u662f\u6703\u628a\u820a\u6709\u7684\u8cc7\u6599\u5168\u90e8\u6e05\u6389\uff0c\u7528\u65b0\u7684\u53bb\u8986\u84cb\u4e86\uff0c\u800c\u9019\u5c31\u662f\u554f\u984c\u7684\u539f\u56e0\u3002"),Object(c.b)("p",null,"\u56e0\u70ba\u6211\u5011\u547c\u53eb\u4e86\u5169\u6b21\u4e0d\u540c\u7684 API \uff0c\u800c\u4e14\u5728\u88e1\u9762\u90fd\u5404\u81ea\u4f7f\u7528\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"setWeatherElement"),"\uff0c\u4f46\u6211\u5011\u53ea\u628a\u900f\u904e API \u53d6\u5f97\u7684\u8cc7\u6599\u653e\u9032\u53bb\uff0c\u800c\u6c92\u6709\u628a\u820a\u6709\u7684\u8cc7\u6599\u4fdd\u7559\u4e0b\u4f86\u3002\u6642\u597d\u6642\u58de\u662f\u56e0\u70ba\u9019\u5169\u9053 API \u56de\u50b3\u8cc7\u6599\u7684\u901f\u5ea6\u6bcf\u6b21\u4e26\u4e0d\u4e00\u5b9a\uff0c\u800c\u6700\u5f8c\u53d6\u5f97\u8cc7\u6599\u7684\u6703\u628a\u4e00\u958b\u59cb ",Object(c.b)("inlineCode",{parentName:"p"},"weatherElement")," \u4e2d\u7684\u8cc7\u6599\u8986\u84cb\u6389\u3002\u6709\u6642\u5019 ",Object(c.b)("inlineCode",{parentName:"p"},"fetchCurrentWeather")," \u6bd4\u8f03\u5feb\u5f97\u5230\u7d50\u679c\uff0c\u6709\u6642\u5019\u5247\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"fetchWeatherForecast")," \u6bd4\u8f03\u5feb\uff0c\u6240\u4ee5\u624d\u6703\u6709\u4e0d\u4e00\u81f4\u7684\u60c5\u6cc1\u3002"),Object(c.b)("p",null,"\u8981\u89e3\u6c7a\u9019\u500b\u554f\u984c\u53ea\u9700\u8981\u628a\u539f\u672c state \u7684\u72c0\u614b\u518d\u91cd\u65b0\u653e\u5165 ",Object(c.b)("inlineCode",{parentName:"p"},"setSomething")," \u7684\u65b9\u6cd5\u4e2d\u5373\u53ef\uff0c\u9084\u8a18\u5f97\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"setSomething")," \u9019\u500b\u65b9\u6cd5\u4e2d\u53ef\u4ee5\u900f\u904e\u5e36\u5165\u51fd\u5f0f\u4f86\u53d6\u5f97\u539f\u6709\u7684\u8cc7\u6599\u72c0\u614b\uff08",Object(c.b)("inlineCode",{parentName:"p"},"prevState"),"\uff09\u55ce\uff1f\u9019\u88e1\u4e00\u6a23\u53ef\u4ee5\u900f\u904e\u9019\u6a23\u7684\u65b9\u5f0f\uff0c\u628a\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"weatherElement")," \u4e2d\u539f\u6709\u7684\u72c0\u614b\u9084\u53bb\u5c31\u53ef\u4ee5\u4e86\uff0c\u5beb\u6cd5\u6703\u50cf\u9019\u6a23\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const [weatherElement, setWeatherElement] = useState(/* ... */);\n\nsetWeatherElement((prevState) => {\n  // \u8a18\u5f97\u8981\u56de\u50b3\u65b0\u7684\u8cc7\u6599\u72c0\u614b\u56de\u53bb\n  return {\n    ...prevState, // \u4fdd\u7559\u539f\u6709\u7684\u8cc7\u6599\u72c0\u614b\n    ...newValue, // \u6dfb\u52a0\u6216\u66f4\u65b0\u7684\u8cc7\u6599\n  };\n});\n")),Object(c.b)("h3",{id:"\u4fee\u6539\u539f\u672c\u547c\u53eb-setweatherelement-\u7684\u5730\u65b9"},"\u4fee\u6539\u539f\u672c\u547c\u53eb setWeatherElement \u7684\u5730\u65b9"),Object(c.b)("p",null,"\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"fetchCurrentWeather")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"fetchWeatherForecast")," \u7684\u9019\u5169\u500b\u51fd\u5f0f\u4e2d\uff0c\u90fd\u6709\u4f7f\u7528\u5230\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"setWeatherElement")," \u7684\u65b9\u6cd5\uff0c\u56e0\u6b64\u90fd\u9700\u8981\u8a18\u5f97\u628a\u539f\u672c\u7684\u72c0\u614b\u7d66\u5e36\u9032\u53bb\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"setWeatherElement")," \u4e2d\u5e36\u5165\u51fd\u5f0f\uff0c\u4e26\u5728\u51fd\u5f0f\u7684\u53c3\u6578\u4e2d\u5e36\u5165 ",Object(c.b)("inlineCode",{parentName:"li"},"prevState")," \u5c07\u53ef\u4ee5\u53d6\u5f97\u539f\u6709\u7684\u8cc7\u6599\u72c0\u614b"),Object(c.b)("li",{parentName:"ul"},"\u900f\u904e\u7269\u4ef6\u7684\u89e3\u69cb\u8ce6\u503c\u628a\u539f\u6709\u7684\u8cc7\u6599\u653e\u9032\u53bb\uff0c\u5f8c\u9762\u518d\u653e\u5165\u900f\u904e API \u53d6\u5f97\u7684\u8cc7\u6599"),Object(c.b)("li",{parentName:"ul"},"\u7576\u7bad\u982d\u51fd\u5f0f\u55ae\u7d14\u53ea\u662f\u8981\u56de\u50b3\u7269\u4ef6\u6642\uff0c\u53ef\u4ee5\u9023 ",Object(c.b)("inlineCode",{parentName:"li"},"return")," \u90fd\u4e0d\u5beb\uff0c\u4f46\u56de\u50b3\u7684\u7269\u4ef6\u9700\u8981\u4f7f\u7528\u5c0f\u62ec\u865f ",Object(c.b)("inlineCode",{parentName:"li"},"()")," \u5305\u8d77\u4f86"),Object(c.b)("li",{parentName:"ul"},"\u539f\u672c\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"fetchCurrentWeather")," \u7684\u51fd\u5f0f\u4e2d\uff0c\u56e0\u70ba\u7576\u6642\u9084\u6c92\u8fa6\u6cd5\u5be6\u969b\u53d6\u5f97\u5929\u6c23\u63cf\u8ff0\u548c\u964d\u96e8\u6a5f\u7387\uff0c\u6240\u4ee5\u6211\u5011\u6709\u5148\u5beb\u4e86\u5047\u8cc7\u6599\u5728\u5b83\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"setWeatherElement")," \u4e2d\uff0c\u9019\u88e1\u8981\u8a18\u5f97\u4e00\u4f75\u79fb\u9664\u9019\u5169\u500b\u5c6c\u6027")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const fetchCurrentWeather = () => {\n  // ...\n  setWeatherElement((prevState) => ({\n    ...prevState,\n    // description: '\u591a\u96f2\u6642\u6674',    // \u79fb\u9664\u9019\u500b\u5c6c\u6027\n    // rainPossibility: 60,      // \u79fb\u9664\u9019\u500b\u5c6c\u6027\n    observationTime: locationData.time.obsTime,\n    locationName: locationData.locationName,\n    temperature: weatherElements.TEMP,\n    windSpeed: weatherElements.WDSD,\n    isLoading: false,\n  }));\n};\n\nconst fetchWeatherForecast = () => {\n  // ...\n  setWeatherElement((prevState) => ({\n    ...prevState,\n    description: weatherElements.Wx.parameterName,\n    weatherCode: weatherElements.Wx.parameterValue,\n    rainPossibility: weatherElements.PoP.parameterName,\n    comfortability: weatherElements.CI.parameterName,\n  }));\n};\n")),Object(c.b)("p",null,"\u9019\u6642\u5019\u756b\u9762\u5c31\u80fd\u6b63\u78ba\u5448\u73fe\u4e86\u3002"),Object(c.b)("h3",{id:"\u4fee\u6539\u7576\u4f7f\u7528\u8005\u9ede\u64ca\u91cd\u65b0\u6574\u7406\u6642\u547c\u53eb\u7684\u65b9\u6cd5"},"\u4fee\u6539\u7576\u4f7f\u7528\u8005\u9ede\u64ca\u91cd\u65b0\u6574\u7406\u6642\u547c\u53eb\u7684\u65b9\u6cd5"),Object(c.b)("p",null,"\u73fe\u5728\u5728\u4f7f\u7528\u8005\u521d\u6b21\u8f09\u5165\u9801\u9762\u6642\uff0c\u6703\u540c\u6642\u547c\u53eb\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"fetchCurrentWeather")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"fetchWeatherForecast")," \u9019\u5169\u500b\u65b9\u6cd5\uff0c\u4f46\u5728\u4f7f\u7528\u8005\u9ede\u64ca\u91cd\u65b0\u6574\u7406\u7684\u6642\u5019\u9084\u4e0d\u6703\uff0c\u56e0\u6b64\u5728\u539f\u672c ",Object(c.b)("inlineCode",{parentName:"p"},"<Refresh onClick={fetchCurrentWeather} />")," \u7684\u5730\u65b9\uff0c\u4e5f\u8981\u8b93\u5b83\u80fd\u5920\u547c\u53eb ",Object(c.b)("inlineCode",{parentName:"p"},"fetchWeatherForecast"),"\uff0c\u65bc\u662f\u53ef\u4ee5\u628a\u7a0b\u5f0f\u78bc\u6539\u6210\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Refresh\n  onClick={() => {\n    fetchCurrentWeather();\n    fetchWeatherForecast();\n  }}\n  isLoading={isLoading}\n>\n  \u6700\u5f8c\u89c0\u6e2c\u6642\u9593\uff1a {/* ... */}\n</Refresh>\n")),Object(c.b)("h2",{id:"\u4fee\u6539-weatherelement-\u7684\u9810\u8a2d\u503c"},"\u4fee\u6539 weatherElement \u7684\u9810\u8a2d\u503c"),Object(c.b)("p",null,"\u73fe\u5728\u4f60\u6703\u767c\u73fe\uff0c\u7576\u9801\u9762\u8f09\u5165\u6642\uff0c\u6578\u5b57\u90fd\u6703\u9583\u4e00\u4e0b\uff0c\u56e0\u70ba\u5b83\u6703\u5148\u5448\u73fe\u6211\u5011\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"useState")," \u4e2d\u7684\u9810\u8a2d\u503c\uff0c\u63a5\u8457\u518d\u62c9\u53d6\u5230\u4e2d\u592e\u6c23\u8c61\u5c40\u7684\u8cc7\u6599\u5f8c\uff0c\u624d\u628a\u6700\u65b0\u7684\u8cc7\u6599\u5e36\u5165\u756b\u9762\u4e2d\u3002\u73fe\u5728\u65e2\u7136\u6211\u5011\u5df2\u7d93\u6709\u8f09\u5165\u4e2d\u7684\u72c0\u614b\uff0c\u540c\u6642\u53c8\u53ef\u4ee5\u53d6\u5f97\u6700\u65b0\u7684\u5929\u6c23\u8cc7\u6599\uff0c\u5c31\u53ef\u4ee5\u628a\u539f\u672c\u64b0\u5beb\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"useState")," \u4e2d\u7684\u9810\u8a2d\u503c\u505a\u500b\u4fee\u6539\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const [weatherElement, setWeatherElement] = useState({\n  observationTime: new Date(),\n  locationName: '',\n  temperature: 0,\n  windSpeed: 0,\n  description: '',\n  weatherCode: 0,\n  rainPossibility: 0,\n  comfortability: '',\n  isLoading: true,\n});\n")),Object(c.b)("h2",{id:"\u986f\u793a\u5929\u6c23\u63cf\u8ff0\u8207\u8212\u9069\u5ea6"},"\u986f\u793a\u5929\u6c23\u63cf\u8ff0\u8207\u8212\u9069\u5ea6"),Object(c.b)("p",null,"\u6700\u5f8c\u8b93\u6211\u5011\u5728 JSX \u4e2d\u628a\u6700\u65b0\u53d6\u5f97\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"comfortability")," \u7684\u8cc7\u6599\u4e5f\u5448\u73fe\u51fa\u4f86\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const App = () => {\n  // ...\n  const {\n    // ...\n    description,\n    comfortability,\n  } = weatherElement;\n\n  return (\n    {/* ... */}\n    <Description>\n      {description} {comfortability}\n    </Description>\n    {/* ... */}\n  );\n};\n\n")),Object(c.b)("h2",{id:"\u63db\u4f60\u4e86\uff01\u53d6\u5f97\u5929\u6c23\u63cf\u8ff0\u548c\u964d\u96e8\u6a5f\u7387\u7684\u8cc7\u6599"},"\u63db\u4f60\u4e86\uff01\u53d6\u5f97\u5929\u6c23\u63cf\u8ff0\u548c\u964d\u96e8\u6a5f\u7387\u7684\u8cc7\u6599"),Object(c.b)("p",null,"\u5728\u9019\u500b\u55ae\u5143\u4e2d\uff0c\u6211\u5011\u900f\u904e\u300c\u4e00\u822c\u5929\u6c23\u9810\u5831-\u4eca\u660e 36 \u5c0f\u6642\u5929\u6c23\u9810\u5831\u300d\u53d6\u5f97\u4e86\u300c\u964d\u96e8\u6a5f\u7387\u300d\u3001\u300c\u5929\u6c23\u63cf\u8ff0\u300d\u3001\u300c\u8212\u9069\u5ea6\u300d\u8207\u300c\u5929\u6c23\u63cf\u8ff0\u4ee3\u78bc\u300d\u7684\u8cc7\u6599\u3002\u96d6\u7136\u73fe\u5728\u5df2\u7d93\u80fd\u5920\u5c07\u8cc7\u6599\u6b63\u78ba\u986f\u793a\u5728\u756b\u9762\u4e0a\uff0c\u4f46\u7a0b\u5f0f\u78bc\u9084\u6709\u53ef\u4ee5\u6539\u9032\u7684\u5730\u65b9\uff0c\u6211\u5011\u5c07\u6703\u5728\u5f8c\u7e8c\u7684\u55ae\u5143\u4e2d\u518d\u4f86\u9032\u884c\u7a0b\u5f0f\u78bc\u7684\u91cd\u69cb\u3002"),Object(c.b)("p",null,"\u73fe\u5728\u8981\u8acb\u4f60\u900f\u904e fetch \u53d6\u5f97\u8cc7\u6599\uff0c\u4e26\u6574\u5408\u5230 App \u5143\u4ef6\u7684\u8cc7\u6599\u72c0\u614b\u4e2d\u3002\u540c\u6a23\u53ef\u4ee5\u53c3\u8003\u5982\u4e0b\u6b65\u9a5f\uff1a"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u6aa2\u8996\u300c\u4e00\u822c\u5929\u6c23\u9810\u5831-\u4eca\u660e 36 \u5c0f\u6642\u5929\u6c23\u9810\u5831\u300dAPI \u4e2d\u56de\u50b3\u7684\u8cc7\u6599\u5167\u5bb9\uff0c\u627e\u5230\u300c\u964d\u96e8\u6a5f\u7387\u300d\u3001\u300c\u63cf\u8ff0\u300d\u8207\u300c\u8212\u9069\u5ea6\u300d\u7684\u6b04\u4f4d"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5c07\u539f\u672c\u900f\u904e useState \u53d6\u5f97\u7684\u8cc7\u6599\u72c0\u614b\u6539\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"li"},"weatherElement")," \u548c ",Object(c.b)("inlineCode",{parentName:"li"},"setWeatherElement")),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u64b0\u5beb ",Object(c.b)("inlineCode",{parentName:"li"},"fetchWeatherForecast")," \u65b9\u6cd5\uff0c\u5728\u53d6\u5f97\u8cc7\u6599\u5f8c\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"setWeatherElement")," \u66f4\u65b0\u5143\u4ef6\u8cc7\u6599\u72c0\u614b"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"setWeatherElement")," \u4e2d\u4f7f\u7528\u51fd\u5f0f\u4ee5\u53d6\u5f97\u539f\u672c\u7684\u8cc7\u6599\u72c0\u614b\uff08",Object(c.b)("inlineCode",{parentName:"li"},"prevState"),"\uff09\uff0c\u4e26\u5c07\u6b64\u72c0\u614b\u4fdd\u7559\u5728\u8a72\u7269\u4ef6\u4e2d"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"onClick")," \u4e2d\u547c\u53eb\u540c\u6642\u547c\u53eb ",Object(c.b)("inlineCode",{parentName:"li"},"fetchCurrentWeather")," \u548c ",Object(c.b)("inlineCode",{parentName:"li"},"fetchWeatherForecast")," \u65b9\u6cd5"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u4fee\u6539 ",Object(c.b)("inlineCode",{parentName:"li"},"useState")," \u4e2d\u8cc7\u6599\u7684\u9810\u8a2d\u503c"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 JSX \u4e2d\u986f\u793a ",Object(c.b)("inlineCode",{parentName:"li"},"description")," \u548c ",Object(c.b)("inlineCode",{parentName:"li"},"comfortability")," \u7684\u63cf\u8ff0")),Object(c.b)("p",null,"\u672c\u55ae\u5143\u76f8\u95dc\u4e4b\u7db2\u9801\u9023\u7d50\u3001\u5b8c\u6574\u7a0b\u5f0f\u78bc\u8207\u7a0b\u5f0f\u78bc\u8b8a\u66f4\u90e8\u5206\uff08\u6642\u9418\u5716\u793a\uff09\u53ef\u65bc ",Object(c.b)("inlineCode",{parentName:"p"},"fetch-forecast-data")," \u5206\u652f\u6aa2\u8996\uff1a",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/fetch-forecast-data"}),"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/fetch-forecast-data"),"\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/a9FXqV5.png",alt:"Imgur"}))))}p.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(n),O=a,j=m["".concat(b,".").concat(O)]||m[O]||s[O]||c;return n?r.a.createElement(j,i(i({ref:t},o),{},{components:n})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<c;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);