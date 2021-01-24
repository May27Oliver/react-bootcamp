(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),c=a(7),i=(a(0),a(178)),l={title:"7-1 \u8655\u7406\u4e0d\u540c\u652f API \u9700\u5e36\u5165\u4e0d\u540c\u5730\u5340\u540d\u7a31\u7684\u554f\u984c",keywords:["React Hooks"]},o={unversionedId:"book/ch7/7-1",id:"book/ch7/7-1",isDocsHomePage:!1,title:"7-1 \u8655\u7406\u4e0d\u540c\u652f API \u9700\u5e36\u5165\u4e0d\u540c\u5730\u5340\u540d\u7a31\u7684\u554f\u984c",description:"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1acreate-available-locations-data\u3002",source:"@site/docs/book/ch7/7-1.md",slug:"/book/ch7/7-1",permalink:"/react-bootcamp/docs/book/ch7/7-1",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/book/ch7/7-1.md",version:"current",sidebar:"book",previous:{title:"6-5 \u5efa\u7acb\u81ea\u5df1\u7684\u9264\u5b50 - Custom Hooks",permalink:"/react-bootcamp/docs/book/ch6/6-5"},next:{title:"7-2 \u65b0\u589e\u5730\u5340\u8a2d\u5b9a\u9801\u9762",permalink:"/react-bootcamp/docs/book/ch7/7-2"}},b=[{value:"\u55ae\u5143\u6838\u5fc3",id:"\u55ae\u5143\u6838\u5fc3",children:[]},{value:"\u4e0d\u540c\u652f API \u9700\u8981\u5e36\u5165\u7684\u5730\u5340\u540d\u7a31\u4e0d\u540c",id:"\u4e0d\u540c\u652f-api-\u9700\u8981\u5e36\u5165\u7684\u5730\u5340\u540d\u7a31\u4e0d\u540c",children:[]},{value:"\u5efa\u7acb\u4e0d\u540c API \u7684\u5730\u5340\u540d\u7a31\u5c0d\u61c9\u8868",id:"\u5efa\u7acb\u4e0d\u540c-api-\u7684\u5730\u5340\u540d\u7a31\u5c0d\u61c9\u8868",children:[]},{value:"\u5efa\u7acb\u53d6\u5f97\u5730\u5340\u540d\u7a31\u7684\u51fd\u5f0f",id:"\u5efa\u7acb\u53d6\u5f97\u5730\u5340\u540d\u7a31\u7684\u51fd\u5f0f",children:[]},{value:"\u63db\u4f60\u4e86\uff01\u5efa\u7acb\u5730\u5340\u540d\u7a31\u5c0d\u61c9\u8868",id:"\u63db\u4f60\u4e86\uff01\u5efa\u7acb\u5730\u5340\u540d\u7a31\u5c0d\u61c9\u8868",children:[]}],r={toc:b};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1a",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/create-available-locations-data"}),"create-available-locations-data"),"\u3002"),Object(i.b)("h2",{id:"\u55ae\u5143\u6838\u5fc3"},"\u55ae\u5143\u6838\u5fc3"),Object(i.b)("p",null,"\u9019\u500b\u55ae\u5143\u7684\u4e3b\u8981\u76ee\u6a19\u5305\u542b\uff1a"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5efa\u7acb\u5404 API \u6240\u9700\u4f7f\u7528\u7684 locationName \u5c0d\u61c9\u8868"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u64b0\u5beb ",Object(i.b)("inlineCode",{parentName:"li"},"findLocation")," \u51fd\u5f0f\uff0c\u4ee5\u53d6\u5f97\u62c9\u53d6 API \u8cc7\u6599\u6642\u6240\u9700\u4f7f\u7528\u7684 locationName")),Object(i.b)("hr",null),Object(i.b)("p",null,"\u73fe\u5728\u300c\u81fa\u7063\u597d\u5929\u6c23\u300d\u96d6\u7136\u529f\u80fd\u770b\u4f3c\u4e00\u5207\u6b63\u5e38\u4e86\uff0c\u4f46\u4f7f\u7528\u8005\u4e26\u6c92\u6709\u8fa6\u6cd5\u81ea\u7531\u9078\u64c7\u60f3\u8981\u5207\u63db\u7684\u5730\u5340\uff0c\u56e0\u6b64\u52e2\u5fc5\u9700\u8981\u591a\u4e00\u500b\u8a2d\u5b9a\u9801\u9762\uff0c\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u5728\u300c\u5929\u6c23\u8cc7\u8a0a\u9801\u300d\u548c\u300c\u8a2d\u5b9a\u9801\u300d\u9593\u4f86\u56de\u5207\u63db\uff1a"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/RTEOXpe.png",alt:"Imgur"}))),Object(i.b)("p",null,"\u5728\u9019\u500b\u7ae0\u7bc0\u4e2d\u5c07\u6703\u7df4\u7fd2\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u900f\u904e\u689d\u4ef6\u6e32\u67d3\u7684\u65b9\u5f0f\u4f86\u9054\u5230\u300c\u5207\u63db\u9801\u9762\u300d\u7684\u6548\u679c"),Object(i.b)("li",{parentName:"ol"},"\u4e86\u89e3\u8868\u55ae\uff08form\uff09\u5728 React \u4e2d\u7684\u5169\u7a2e\u4e0d\u540c\u4f7f\u7528\u65b9\u5f0f\uff08controlled vs uncontrolled\uff09"),Object(i.b)("li",{parentName:"ol"},"useRef \u9019\u500b React Hooks \u7684\u4f7f\u7528"),Object(i.b)("li",{parentName:"ol"},"\u700f\u89bd\u5668 localStorage \u7684\u4f7f\u7528")),Object(i.b)("p",null,"\u8b93\u6211\u5011\u4f9d\u5e8f\u770b\u4e0b\u53bb\u3002"),Object(i.b)("h2",{id:"\u4e0d\u540c\u652f-api-\u9700\u8981\u5e36\u5165\u7684\u5730\u5340\u540d\u7a31\u4e0d\u540c"},"\u4e0d\u540c\u652f API \u9700\u8981\u5e36\u5165\u7684\u5730\u5340\u540d\u7a31\u4e0d\u540c"),Object(i.b)("p",null,"\u4f46\u5728\u958b\u59cb\u5be6\u4f5c\u9019\u500b\u8a2d\u5b9a\u9801\u9762\u524d\uff0c\u9700\u8981\u5148\u4f86\u8655\u7406\u4e4b\u524d\u4e00\u76f4\u63d0\u5230\u7684\u554f\u984c\uff0d\u300c\u5929\u6c23\u89c0\u6e2c\u300d\u548c\u300c\u5929\u6c23\u9810\u5831\u300d\u9019\u5169\u652f API \u9700\u8981\u5e36\u5165\u7684\u5730\u5340\u540d\u7a31\u4e0d\u540c\uff08",Object(i.b)("inlineCode",{parentName:"p"},"locationName"),"\uff09\u3002"),Object(i.b)("p",null,"\u4e5f\u5c31\u662f\u8aaa\uff0c\u540c\u6a23\u60f3\u62c9\u53d6\u300c\u81fa\u5317\u5e02\u300d\u7684\u5929\u6c23\u8cc7\u6599\u6642\uff0c\u5728\u300c\u5929\u6c23\u9810\u5831 API\u300d\u7684 locationName \u9700\u8981\u5e36\u5165\u300c\u81fa\u5317\u5e02\u300d\uff0c\u4f46\u5728\u300c\u5929\u6c23\u89c0\u6e2c API\u300d\u4e2d\u9700\u8981\u5e36\u5165\u7684\u662f\u300c\u81fa\u5317\u300d\u3002"),Object(i.b)("p",null,"\u9019\u4e5f\u5c31\u662f\u70ba\u4ec0\u9ebc\u76ee\u524d\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"App.js")," \u4e2d\uff0c\u96d6\u7136\u540c\u6a23\u662f\u8981\u641c\u5c0b\u300c\u81fa\u5317\u5e02\u300d\u7684\u8cc7\u6599\uff0c\u4f46\u537b\u5206\u5225\u8a02\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"LOCATION_NAME"),"\uff08\u81fa\u5317\uff09\u548c ",Object(i.b)("inlineCode",{parentName:"p"},"LOCATION_NAME_FORECAST"),"\uff08\u81fa\u5317\u5e02\uff09\u9019\u5169\u500b\u5e38\u6578\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// ./src/App.js\n// ...\n\nconst LOCATION_NAME = '\u81fa\u5317';\nconst LOCATION_NAME_FORECAST = '\u81fa\u5317\u5e02';\n\nconst App = () => {\n  /* ... */\n};\n")),Object(i.b)("p",null,"\u53e6\u5916\uff0c\u4e00\u500b\u7e23\u5e02\u5167\u4e5f\u6703\u6709\u8a31\u591a\u4e0d\u540c\u7684\u5c40\u5c6c\u6c23\u8c61\u7ad9\uff0c\u4f46\u56e0\u70ba\u76ee\u524d\u81fa\u7063\u597d\u5929\u6c23\u7684\u8a2d\u8a08\u4e0a\uff0c\u53ea\u6703\u8b93\u4f7f\u7528\u8005\u9078\u64c7\u4e00\u500b\u7e23\u5e02\uff0c\u800c\u4e0d\u6703\u518d\u7d30\u5206\u5404\u7e23\u5e02\u5167\u7684\u5340\u57df\uff0c\u56e0\u6b64\u6211\u5011\u53ea\u80fd\u9078\u64c7\u4e00\u500b\u6700\u5177\u4ee3\u8868\u6027\u7684\u5c40\u5c6c\u6c23\u8c61\u7ad9\u4f86\u4ee3\u8868\u8a72\u7e23\u5e02\u3002\u8209\u4f8b\u4f86\u8aaa\uff0c\u96d6\u7136\u4f7f\u7528\u8005\u9078\u64c7\u300c\u82d7\u6817\u7e23\u300d\uff0c\u4f46\u56e0\u82d7\u6817\u7e23\u6709\u8a31\u591a\u4e0d\u540c\u9109\u93ae\u5340\uff0c\u9019\u88e1\u6211\u5011\u5728\u8cc7\u6599\u5448\u73fe\u6642\u53ea\u6703\u6311\u5176\u4e2d\u4e00\u500b\u9109\u93ae\u7684\u8cc7\u6599\u4f86\u5448\u73fe\u3002"),Object(i.b)("h2",{id:"\u5efa\u7acb\u4e0d\u540c-api-\u7684\u5730\u5340\u540d\u7a31\u5c0d\u61c9\u8868"},"\u5efa\u7acb\u4e0d\u540c API \u7684\u5730\u5340\u540d\u7a31\u5c0d\u61c9\u8868"),Object(i.b)("p",null,"\u548c\u524d\u5e7e\u500b\u55ae\u5143\u4e2d\u6703\u7279\u5225\u6574\u7406\u300c\u65e5\u51fa\u65e5\u843d\u300d\u548c\u300c\u5929\u6c23\u578b\u614b\u5c0d\u61c9\u5716\u793a\u300d\u7684\u8cc7\u6599\u4e00\u6a23\uff0c\u9019\u88e1\u6211\u5011\u540c\u6a23\u9700\u8981\u6574\u7406\u51fa\u4e00\u5f35\u5c0d\u61c9\u8868\uff0c\u7528\u4f86\u8655\u7406\u4e0d\u540c\u652f API \u6240\u9700\u7684\u4e0d\u540c\u5730\u5340\u540d\u7a31\u4f86\u9032\u884c\u67e5\u8a62\uff0c\u9019\u88e1\u6211\u5011\u5148\u5b9a\u7fa9\u4e00\u500b\u540d\u70ba ",Object(i.b)("inlineCode",{parentName:"p"},"availableLocations")," \u7684\u7269\u4ef6\uff0c\u628a\u6240\u6709\u53ef\u67e5\u8a62\u5230\u7684\u5730\u5340\u90fd\u653e\u5728\u5167\uff0c\u5176\u4e2d\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cityName")," \u6307\u7684\u662f\u7e23\u5e02\u7684\u540d\u7a31\uff0c\u53ef\u4ee5\u5c0d\u61c9\u5230\u300c\u5929\u6c23\u9810\u5831\u300d\u7684\u5730\u5340\u540d\u7a31"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"locationName")," \u6307\u7684\u662f\u89c0\u6e2c\u7ad9\u6240\u5728\u5730\u5340\uff0c\u53ef\u4ee5\u5c0d\u61c9\u5230\u300c\u5929\u6c23\u89c0\u6e2c\u300d\u7684\u5730\u5340\u540d\u7a31"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sunriseCityName")," \u5247\u662f\u5c0d\u61c9\u5230\u300c\u65e5\u843d\u65e5\u51fa\u6642\u9593\u300d\u7684\u5730\u5340\u540d\u7a31")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// \u5b8c\u6574\u7684\u7a0b\u5f0f\u78bc\u653e\u7f6e\u65bc\u8a72\u55ae\u5143\u7684 Github \u5206\u652f\u8aaa\u660e\u9801\nconst availableLocations = [\n  {\n    cityName: '\u5b9c\u862d\u7e23',\n    locationName: '\u5b9c\u862d',\n    sunriseCityName: '\u5b9c\u862d\u7e23',\n  },\n  {\n    cityName: '\u5609\u7fa9\u5e02',\n    locationName: '\u5609\u7fa9',\n    sunriseCityName: '\u5609\u7fa9\u5e02',\n  },\n  // ...\n];\n")),Object(i.b)("p",null,"\u8b80\u8005\u53ef\u4ee5\u5230\u672c\u55ae\u5143\u5728 Github \u4e0a\u5c0d\u61c9\u7684\u5206\u652f\uff08",Object(i.b)("inlineCode",{parentName:"p"},"create-available-locations-data"),"\uff09\u8aaa\u660e\u9801\u8907\u88fd\u5b8c\u6574\u7684\u7a0b\u5f0f\u78bc\uff1a"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/nHicgV1.png",alt:"Imgur"}))),Object(i.b)("p",null,"\u4e26\u628a ",Object(i.b)("inlineCode",{parentName:"p"},"availableLocations")," \u7269\u4ef6\uff0c\u8907\u88fd\u8cbc\u4e0a\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"./src/utils/helpers.js")," \u6a94\u6848\u4e2d\u3002\u9019\u88e1\u900f\u904e ",Object(i.b)("inlineCode",{parentName:"p"},"export")," \u53ef\u4ee5\u628a ",Object(i.b)("inlineCode",{parentName:"p"},"availableLocations")," \u532f\u51fa\uff0c\u8b93\u5176\u4ed6\u652f JavaScript \u6a94\u6848\u53ef\u4ee5\u900f\u904e ",Object(i.b)("inlineCode",{parentName:"p"},"import")," \u8f09\u5165\u6b64\u8b8a\u6578\uff1a"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/sKGxL7d.png",alt:"Imgur"}))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u88dc\u4e2d")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u4e2d\u592e\u6c23\u8c61\u5c40\u53e6\u5916\u9084\u6709\u63d0\u4f9b\u300c",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://opendata.cwb.gov.tw/dist/opendata-swagger.html#/%E8%A7%80%E6%B8%AC/get_v1_rest_datastore_O_A0001_001"}),"\u81ea\u52d5\u6c23\u8c61\u7ad9-\u6c23\u8c61\u89c0\u6e2c\u8cc7\u6599"),"\u300d\u7684\u89c0\u6e2c\u8cc7\u6599\uff0c\u53ef\u4ee5\u62ff\u5230\u66f4\u7cbe\u7d30\u7684\u5730\u5340\u5929\u6c23\u8cc7\u8a0a\uff0c\u4f46\u6d89\u53ca\u66f4\u8907\u96dc\u7684\u8cc7\u6599\u8655\u7406\uff0c\u4e26\u975e\u672c\u66f8\u8457\u58a8\u7684\u91cd\u9ede\uff0c\u56e0\u6b64\u6709\u8208\u8da3\u7684\u8b80\u8005\u672a\u4f86\u53ef\u4ee5\u81ea\u884c\u53d6\u7528\u3002"),Object(i.b)("li",{parentName:"ul"},"\u76ee\u524d\u300c\u5929\u6c23\u9810\u6e2c\u300d\u548c\u300c\u65e5\u51fa\u65e5\u843d\u300d\u4f7f\u7528\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"locationName")," \u503c\u662f\u4e00\u6a23\u7684\uff0c\u4f46\u56e0\u70ba\u904e\u53bb\u66fe\u6709\u4e0d\u540c\u7684\u60c5\u6cc1\uff0c\u56e0\u6b64\u9019\u88e1\u9084\u662f\u5206\u6210 ",Object(i.b)("inlineCode",{parentName:"li"},"cityName")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"sunriseCityName")," \u5169\u500b\u4e0d\u540c\u6b04\u4f4d\u3002")))),Object(i.b)("h2",{id:"\u5efa\u7acb\u53d6\u5f97\u5730\u5340\u540d\u7a31\u7684\u51fd\u5f0f"},"\u5efa\u7acb\u53d6\u5f97\u5730\u5340\u540d\u7a31\u7684\u51fd\u5f0f"),Object(i.b)("p",null,"\u63a5\u8457\u524d\u9762\u55ae\u5143\u4e2d\u5b9a\u7fa9\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"getMoment")," \u51fd\u5f0f\u5f88\u985e\u4f3c\uff0c\u4e4b\u524d\u9019\u500b\u51fd\u5f0f\u662f\u8b93\u4f7f\u7528\u8005\u50b3\u5165 ",Object(i.b)("inlineCode",{parentName:"p"},"locationName")," \u53c3\u6578\u6642\uff0c\u53ef\u4ee5\u56de\u50b3\u7576\u524d\u7684\u6642\u9593\u662f\u5c6c\u65bc\u767d\u5929\u6216\u665a\u4e0a\u3002"),Object(i.b)("p",null,"\u5728\u4e4b\u5f8c\u7684\u8a2d\u5b9a\u9801\u9762\u4e2d\uff0c\u4e3b\u8981\u6703\u986f\u793a\u300c\u7e23\u5e02\u300d\u7684\u5217\u8868\u8b93\u4f7f\u7528\u8005\u9078\u64c7\uff0c\u70ba\u4e86\u5e6b\u52a9\u6211\u5011\u53ef\u4ee5\u5f9e\u4f7f\u7528\u8005\u9078\u64c7\u7684\u300c\u7e23\u5e02\u540d\u7a31\u300d\u4e2d\u5feb\u901f\u627e\u5230\u8a72\u5730\u5340\u5728\u5404\u500b API \u6240\u5c0d\u61c9\u9700\u8981\u5e36\u5165\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"locationName"),"\uff0c\u56e0\u6b64\u540c\u6a23\u9700\u8981\u5b9a\u7fa9\u4e00\u500b\u51fd\u5f0f\u4f86\u8655\u7406\u9019\u4ef6\u4e8b\u3002"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"./src/utils/helpers.js")," \u7684\u6a94\u6848\u4e2d\uff0c\u5b9a\u7fa9\u4e00\u500b\u540d\u70ba ",Object(i.b)("inlineCode",{parentName:"p"},"findLocation")," \u7684\u51fd\u5f0f\uff0c\u9019\u500b\u51fd\u5f0f\u7684\u53c3\u6578\u53ea\u9700\u5e36\u5165\u7e23\u5e02\u540d\u7a31\uff08",Object(i.b)("inlineCode",{parentName:"p"},"cityName"),"\uff09\uff0c\u5c31\u53ef\u4ee5\u627e\u51fa\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"availableLocations")," \u4e2d\u5c0d\u61c9\u7269\u4ef6\u5f8c\u56de\u50b3 \uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// ./src/utils/helpers.js\n// ...\nexport const availableLocations = [\n  /* ... */\n];\n\nexport const findLocation = (cityName) => {\n  return availableLocations.find((location) => location.cityName === cityName);\n};\n")),Object(i.b)("p",null,"\u73fe\u5728\u5047\u8a2d\u4f7f\u7528\u8005\u9078\u64c7\u7684\u662f\u300c\u5609\u7fa9\u5e02\u300d\u6642\uff0c\u900f\u904e ",Object(i.b)("inlineCode",{parentName:"p"},"findLocation")," \u51fd\u5f0f\uff0c\u5c31\u53ef\u4ee5\u627e\u5230\u5404\u500b API \u9700\u8981\u5c0d\u61c9\u5e36\u5165\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"locationName")," \u70ba\u4f55\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const currentLocation = findLocation('\u5609\u7fa9\u5e02');\n\n// currentLocation \u6703\u5f97\u5230\n// {\n//   cityName: '\u5609\u7fa9\u5e02',\n//   locationName: '\u5609\u7fa9',\n//   sunriseCityName: '\u5609\u7fa9\u5e02',\n// };\n")),Object(i.b)("h2",{id:"\u63db\u4f60\u4e86\uff01\u5efa\u7acb\u5730\u5340\u540d\u7a31\u5c0d\u61c9\u8868"},"\u63db\u4f60\u4e86\uff01\u5efa\u7acb\u5730\u5340\u540d\u7a31\u5c0d\u61c9\u8868"),Object(i.b)("p",null,"\u9019\u500b\u55ae\u5143\u4e3b\u8981\u662f\u70ba\u4e86\u8655\u7406\u4e0d\u540c\u652f API \u9700\u8981\u4f7f\u7528\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"locationName")," \u4e0d\u540c\uff0c\u56e0\u6b64\u5efa\u7acb\u4e86\u4e00\u500b ",Object(i.b)("inlineCode",{parentName:"p"},"availableLocations")," \u7684\u7269\u4ef6\uff0c\u5f9e\u4e2d\u53ef\u4ee5\u67e5\u8a62\u4e0d\u540c API \u9700\u8981\u5e36\u5165\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"locationName"),"\u3002\u53e6\u5916\uff0c\u5efa\u7acb\u4e86\u4e00\u500b\u540d\u70ba ",Object(i.b)("inlineCode",{parentName:"p"},"findLocation")," \u65b9\u6cd5\uff0c\u65b9\u4fbf\u5f8c\u7e8c\u53ef\u4ee5\u5feb\u901f\u5f9e ",Object(i.b)("inlineCode",{parentName:"p"},"availableLocations")," \u4e2d\u627e\u51fa\u9700\u8981\u7684\u5730\u5340\u540d\u7a31\u3002"),Object(i.b)("p",null,"\u73fe\u5728\u8981\u8acb\u4f60\uff1a"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5230\u672c\u55ae\u5143 Github \u7684\u5206\u652f\u8aaa\u660e\u9801\uff0c\u8907\u88fd ",Object(i.b)("inlineCode",{parentName:"li"},"availableLocations")," \u9663\u5217"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5c07 ",Object(i.b)("inlineCode",{parentName:"li"},"availableLocation")," \u8cbc\u4e0a\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"./src/utils/helpers")," \u4e2d"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u65b0\u589e ",Object(i.b)("inlineCode",{parentName:"li"},"findLocation")," \u9019\u500b\u65b9\u6cd5\uff0c\u53ef\u4ee5\u63a5\u6536\u53c3\u6578 ",Object(i.b)("inlineCode",{parentName:"li"},"cityName")," \uff0c\u4e26\u56de\u50b3 ",Object(i.b)("inlineCode",{parentName:"li"},"availableLocations")," \u5c0d\u61c9\u5730\u5340\u7684\u7269\u4ef6\u3002")),Object(i.b)("p",null,"\u672c\u55ae\u5143\u76f8\u95dc\u4e4b\u7db2\u9801\u9023\u7d50\u3001\u5b8c\u6574\u7a0b\u5f0f\u78bc\u8207\u7a0b\u5f0f\u78bc\u8b8a\u66f4\u90e8\u5206\u53ef\u65bc ",Object(i.b)("inlineCode",{parentName:"p"},"create-available-locations-data")," \u5206\u652f\u6aa2\u8996\uff1a",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/create-available-locations-data"}),"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/create-available-locations-data")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/nHicgV1.png",alt:"Imgur"}))))}p.isMDXComponent=!0},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),c=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var r=c.a.createContext({}),p=function(e){var t=c.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return c.a.createElement(r.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,r=b(e,["components","mdxType","originalType","parentName"]),m=p(a),O=n,j=m["".concat(l,".").concat(O)]||m[O]||s[O]||i;return a?c.a.createElement(j,o(o({ref:t},r),{},{components:a})):c.a.createElement(j,o({ref:t},r))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=O;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var r=2;r<i;r++)l[r]=a[r];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);