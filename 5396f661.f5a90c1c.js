(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(186)),i={title:"7-6 \u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u884c\u8a2d\u5b9a\u5730\u5340",keywords:["React Hooks"]},l={unversionedId:"book/ch7/7-6",id:"book/ch7/7-6",isDocsHomePage:!1,title:"7-6 \u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u884c\u8a2d\u5b9a\u5730\u5340",description:"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1aselect-location-in-weather-setting\u3002",source:"@site/docs/book/ch7/7-6.md",slug:"/book/ch7/7-6",permalink:"/react-bootcamp/docs/book/ch7/7-6",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/book/ch7/7-6.md",version:"current",sidebar:"book",previous:{title:"7-5 Uncontrolled components \u548c useRef \u7684\u4f7f\u7528",permalink:"/react-bootcamp/docs/book/ch7/7-5"},next:{title:"7-7 \u900f\u904e localStorage \u4fdd\u5b58\u4f7f\u7528\u8005\u8a2d\u5b9a\u7684\u5730\u5340",permalink:"/react-bootcamp/docs/book/ch7/7-7"}},b=[{value:"\u55ae\u5143\u6838\u5fc3",id:"\u55ae\u5143\u6838\u5fc3",children:[]},{value:"\u5728 App \u4e2d\u5b9a\u7fa9\u76ee\u524d\u5730\u5340",id:"\u5728-app-\u4e2d\u5b9a\u7fa9\u76ee\u524d\u5730\u5340",children:[]},{value:"\u900f\u904e React Developer Tools \u6539\u8b8a currentLocation \u7684\u8cc7\u6599\u72c0\u614b",id:"\u900f\u904e-react-developer-tools-\u6539\u8b8a-currentlocation-\u7684\u8cc7\u6599\u72c0\u614b",children:[{value:"App \u5143\u4ef6",id:"app-\u5143\u4ef6",children:[]},{value:"WeatherCard \u5143\u4ef6",id:"weathercard-\u5143\u4ef6",children:[]}]},{value:"\u8b93\u4f7f\u7528\u8005\u5f9e\u8a2d\u5b9a\u9801\u6539\u8b8a\u5730\u5340\u8cc7\u8a0a",id:"\u8b93\u4f7f\u7528\u8005\u5f9e\u8a2d\u5b9a\u9801\u6539\u8b8a\u5730\u5340\u8cc7\u8a0a",children:[{value:"App \u5143\u4ef6",id:"app-\u5143\u4ef6-1",children:[]},{value:"WeatherSetting \u5143\u4ef6",id:"weathersetting-\u5143\u4ef6",children:[]}]},{value:"\u63db\u4f60\u4e86\uff01\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u884c\u8a2d\u5b9a\u5730\u5340",id:"\u63db\u4f60\u4e86\uff01\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u884c\u8a2d\u5b9a\u5730\u5340",children:[]}],o={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u672c\u55ae\u5143\u5c0d\u61c9\u7684\u5c08\u6848\u5206\u652f\u70ba\uff1a",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/select-location-in-weather-setting"}),"select-location-in-weather-setting"),"\u3002"),Object(c.b)("h2",{id:"\u55ae\u5143\u6838\u5fc3"},"\u55ae\u5143\u6838\u5fc3"),Object(c.b)("p",null,"\u9019\u500b\u55ae\u5143\u7684\u4e3b\u8981\u76ee\u6a19\u5305\u542b\uff1a"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u8b93\u4f7f\u7528\u8005\u5207\u63db\u5730\u5340\u5f8c\uff0c\u53ef\u4ee5\u53d6\u5f97\u4e26\u986f\u793a\u8a72\u5730\u5340\u7684\u5929\u6c23\u8cc7\u8a0a")),Object(c.b)("hr",null),Object(c.b)("p",null,"\u5728\u9019\u500b\u55ae\u5143\u4e2d\u8981\u4f86\u8b93\u4f7f\u7528\u9019\u80fd\u5920\u5be6\u969b\u66f4\u63db\u986f\u793a\u5929\u6c23\u8cc7\u8a0a\u7684\u5730\u5340\uff0c\u5982\u4e0b\u5716\u6240\u793a\uff0c\u4f7f\u7528\u8005\u5728\u9078\u64c7\u5340\u57df\u4e26\u9ede\u9078\u5132\u5b58\u5f8c\uff0c\u56de\u5230\u5929\u6c23\u8cc7\u8a0a\u9801\u9762\u5c31\u53ef\u4ee5\u770b\u5230\u8a72\u5730\u5340\u5373\u6642\u7684\u5929\u6c23\u8cc7\u8a0a\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/bb0FkOf.png",alt:"Imgur"}))),Object(c.b)("p",null,"\u6574\u500b\u6d41\u7a0b\u6703\u50cf\u9019\u6a23\uff0c\u5728\u9019\u6574\u500b\u5c08\u6848\u4e2d\uff0c\u5927\u90e8\u5206\u7684\u8cc7\u6599\u72c0\u614b\u90fd\u662f\u4fdd\u5b58\u5728\u6700\u4e0a\u5c64\u7684 App \u5143\u4ef6\u4e2d\uff0c\u900f\u904e props \u7684\u65b9\u5f0f\u50b3\u905e\u7d66\u5176\u4ed6\u9700\u8981\u7684\u5143\u4ef6\u3002\u56e0\u6b64\u9019\u88e1\u6211\u5011\u6703\u7dad\u6301\u9019\u6a23\u7684\u539f\u5247\uff0c\u5728 App \u5143\u4ef6\u4e2d\uff0c\u6703\u4fdd\u5b58\u8981\u986f\u793a\u7684\u5929\u6c23\u8cc7\u8a0a\u7684\u5730\u5340\uff0c\u63a5\u8457\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u5728 WeatherSetting \u9801\u9762\u4e2d\u53bb\u4fee\u6539\u5730\u5340\uff0c\u4f46\u5be6\u969b\u4e0a\u662f\u66f4\u65b0 App \u4e2d\u5730\u5340\u7684\u8cc7\u6599\u72c0\u614b\u3002"),Object(c.b)("h2",{id:"\u5728-app-\u4e2d\u5b9a\u7fa9\u76ee\u524d\u5730\u5340"},"\u5728 App \u4e2d\u5b9a\u7fa9\u76ee\u524d\u5730\u5340"),Object(c.b)("p",null,"\u7531\u65bc\u5be6\u969b\u4e0a\u767c\u9001 API \u8acb\u6c42\uff0c\u62c9\u53d6\u8cc7\u6599\u7684\u52d5\u4f5c\uff08",Object(c.b)("inlineCode",{parentName:"p"},"useWeatherAPI"),"\uff09\u662f\u5728 App \u5143\u4ef6\u4e2d\uff0c\u56e0\u6b64\u53ef\u4ee5\u5728 App \u5143\u4ef6\u4e2d\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"useState")," \u5b9a\u7fa9\u7576\u524d\u8981\u62c9\u53d6\u5929\u6c23\u8cc7\u6599\u7684\u5730\u5340\uff0c\u4e26\u4e14\u628a\u53ef\u4ee5\u4fee\u6539\u5929\u6c23\u5730\u5340\u7684\u65b9\u6cd5\u900f\u904e props \u50b3\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"WeatherSetting")," \u5143\u4ef6\u4e2d\uff0c\u8b93\u8a72\u5143\u4ef6\u53ef\u4ee5\u4fee\u6539 WeatherApp \u5167\u7576\u524d\u5730\u5340\u7684\u8cc7\u6599\u3002"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"useState")," \u5b9a\u7fa9\u7576\u524d\u8981\u62c9\u53d6\u5929\u6c23\u8cc7\u8a0a\u7684\u5730\u5340\uff08",Object(c.b)("inlineCode",{parentName:"li"},"currentCity"),"\uff09\uff0c\u9810\u8a2d\u503c\u5148\u5b9a\u70ba\u300c\u81fa\u5317\u5e02\u300d")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// ./src/App.js\n// ...\nconst App = () => {\n  // STEP 1\uff1a\u5b9a\u7fa9 currentCity\n  const [currentCity, setCurrentCity] = useState('\u81fa\u5317\u5e02');\n};\n")),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"import")," \u532f\u5165\u525b\u525b\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"utils.js")," \u4e2d\u5b9a\u7fa9\u597d\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"findLocation")," \u65b9\u6cd5"),Object(c.b)("li",{parentName:"ol"},"\u6839\u64da ",Object(c.b)("inlineCode",{parentName:"li"},"currentCity")," \u4f86\u627e\u51fa\u5c0d\u61c9\u5230\u4e0d\u540c API \u6642\u4f7f\u7528\u7684\u5730\u5340\u540d\u7a31\uff0c\u627e\u5230\u7684\u5730\u5340\u53d6\u540d\u70ba ",Object(c.b)("inlineCode",{parentName:"li"},"currentLocation"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// ./src/App.js\n\n// STEP 2\uff1a\u532f\u5165 findLocation\nimport { getMoment, findLocation } from './utils/helpers';\n\nconst App = () => {\n  const [currentCity, setCurrentCity] = useState('\u81fa\u5317\u5e02');\n  // STEP 3\uff1a\u627e\u51fa\u6bcf\u652f API \u9700\u8981\u5e36\u5165\u7684 locationName\n  const currentLocation = findLocation(currentCity);\n};\n")),Object(c.b)("p",null,"\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"currentLocation")," \u5c31\u53ef\u4ee5\u53d6\u5f97\u6240\u6709 API \u9700\u8981\u4f7f\u7528\u5230\u7684 locationName\uff0c\u4ee5\u81fa\u5317\u5e02\u70ba\u4f8b\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"currentLocation")," \u6703\u662f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{cityName: "\u81fa\u5317\u5e02", locationName: "\u81fa\u5317", sunriseCityName: "\u81fa\u5317\u5e02"}  // currentLocation\n')),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"\u9019\u88e1\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"findLocation")," \u9019\u884c\u4e5f\u540c\u6a23\u53ef\u4ee5\u7528\u4e0a ",Object(c.b)("inlineCode",{parentName:"li"},"useMemo")," \u7684\u6982\u5ff5\uff0c\u53ea\u8981 ",Object(c.b)("inlineCode",{parentName:"li"},"currentCity")," \u6c92\u6709\u6539\u8b8a\u7684\u60c5\u6cc1\u4e0b\uff0c\u5373\u4f7f\u5143\u4ef6\u91cd\u65b0\u8f49\u8b6f\uff0c\u4e5f\u4e0d\u9700\u8981\u91cd\u65b0\u53d6\u503c\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/App.js\nconst App = () => {\n  // STEP 4 \u4f7f\u7528 useMemo \u628a\u53d6\u5f97\u7684\u8cc7\u6599\u4fdd\u5b58\u4e0b\u4f86\n  const currentLocation = useMemo(() => findLocation(currentCity), [\n    currentCity,\n  ]);\n};\n")),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},"\u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"useWeatherAPI")," \u548c ",Object(c.b)("inlineCode",{parentName:"li"},"getMoment")," \u7684\u53c3\u6578\u4e2d\uff0c\u5c31\u53ef\u4ee5\u66f4\u6539\u70ba\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"currentLocation")," \u53d6\u5f97\u7684\u5730\u5340\u8cc7\u6599\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/App.js\n// ...\nconst App = () => {\n  // ...\n\n  const currentLocation = useMemo(() => findLocation(currentCity), [\n    currentCity,\n  ]);\n  // STEP 5\uff1a\u518d\u900f\u904e\u89e3\u69cb\u8ce6\u503c\u53d6\u51fa currentLocation \u7684\u8cc7\u6599\n  const { cityName, locationName, sunriseCityName } = currentLocation;\n\n  // STEP 6\uff1a\u5728 getMoment \u7684\u53c3\u6578\u4e2d\u63db\u6210 sunriseCityName\n  const moment = useMemo(() => getMoment(sunriseCityName), [sunriseCityName]);\n\n  // STEP 7\uff1a\u5728 useWeatherAPI \u4e2d\u7684\u53c3\u6578\u6539\u6210 locationName \u548c cityName\n  const [weatherElement, fetchData] = useWeatherAPI({\n    locationName,\n    cityName,\n    authorizationKey: AUTHORIZATION_KEY,\n  });\n  //...\n};\n")),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},"\u5728 App \u5143\u4ef6\u4e2d\u539f\u672c\u4f7f\u7528\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"LOCATION_NAME")," \u548c ",Object(c.b)("inlineCode",{parentName:"li"},"LOCATION_NAME_FORECAST")," \u9019\u5169\u500b\u5e38\u6578\u4e86\uff0c\u56e0\u70ba\u53ef\u4ee5\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"currentLocation")," \u53d6\u5f97\uff0c\u56e0\u6b64\u53ef\u4ee5\u628a\u9019\u5169\u500b\u5e38\u6578\u79fb\u9664\u3002")),Object(c.b)("h2",{id:"\u900f\u904e-react-developer-tools-\u6539\u8b8a-currentlocation-\u7684\u8cc7\u6599\u72c0\u614b"},"\u900f\u904e React Developer Tools \u6539\u8b8a currentLocation \u7684\u8cc7\u6599\u72c0\u614b"),Object(c.b)("p",null,"\u73fe\u5728\u6211\u5011\u53ef\u4ee5\u900f\u904e React Developer Tools \uff0c\u5f9e\u958b\u767c\u8005\u5de5\u5177\u4e2d State \u7684\u5730\u65b9\uff0c\u628a\u300c\u81fa\u5317\u5e02\u300d\u6539\u6210\u5176\u4ed6\u7e23\u5e02\uff0c\u770b\u770b\u5de6\u5074\u7684\u756b\u9762\u662f\u5426\u6703\u9023\u5e36\u6539\u8b8a\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/8htBUC0.png",alt:"Imgur"}))),Object(c.b)("p",null,"\u9019\u88e1\u4f60\u6703\u767c\u73fe\u5929\u6c23\u5361\u7247\u7684\u5730\u5340\u986f\u793a\u6709\u4e9b\u4e0d\u592a\u6b63\u78ba\uff0c\u9019\u662f\u56e0\u70ba\u539f\u672c\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"weatherElement.locationName")," \u6703\u662f\u5c40\u5c6c\u6c23\u8c61\u7ad9\u7684\u540d\u7a31\uff0c\u800c\u4e0d\u662f\u7e23\u5e02\u540d\u7a31\u3002"),Object(c.b)("h3",{id:"app-\u5143\u4ef6"},"App \u5143\u4ef6"),Object(c.b)("p",null,"\u6211\u5011\u53ef\u4ee5\u628a ",Object(c.b)("inlineCode",{parentName:"p"},"cityName")," \u900f\u904e props \u50b3\u5165 WeatherCard \u5143\u4ef6\u52a0\u4ee5\u986f\u793a\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/App.js\nconst App = () => {\n  // ...\n  // \u5c07 cityName \u50b3\u5165 WeatherCard \u5143\u4ef6\u4e2d\n  <WeatherCard\n    cityName={cityName}\n    weatherElement={weatherElement}\n    moment={moment}\n    fetchData={fetchData}\n    handleCurrentPageChange={handleCurrentPageChange}\n  />;\n};\n")),Object(c.b)("h3",{id:"weathercard-\u5143\u4ef6"},"WeatherCard \u5143\u4ef6"),Object(c.b)("p",null,"\u63a5\u8457\u5728 WeatherCard \u5143\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u628a ",Object(c.b)("inlineCode",{parentName:"p"},"cityName")," \u5f9e props \u53d6\u51fa\u5f8c\u986f\u793a\u3002\u53e6\u5916\u73fe\u5728\u7528\u4e0d\u5230\u539f\u672c\u5f9e ",Object(c.b)("inlineCode",{parentName:"p"},"weatherElement")," \u4e2d\u53d6\u51fa\u7684",Object(c.b)("inlineCode",{parentName:"p"},"locationName"),"\uff08\u5c40\u5c6c\u6c23\u8c61\u7ad9\uff09\uff0c\u53ef\u4ee5\u4e00\u4f75\u79fb\u9664\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/views/WeatherCard.js\n// ...\nconst WeatherCard = ({\n  weatherElement,\n  moment,\n  fetchData,\n  handleCurrentPageChange,\n  cityName, // \u53d6\u5f97 App \u50b3\u5165\u7684 cityName\n}) => {\n  // ...\n  return (\n    // ...\n    // \u5728 JSX \u4e2d\u986f\u793a cityName\n    <Location>{cityName}</Location>\n  );\n};\n")),Object(c.b)("p",null,"\u73fe\u5728\u5929\u6c23\u5361\u7247\u5c31\u6703\u6b63\u78ba\u986f\u793a\u7e23\u5e02\u540d\u7a31\uff0c\u800c\u4e0d\u662f\u5c40\u5c6c\u6c23\u8c61\u7ad9\u7684\u540d\u7a31\uff01"),Object(c.b)("h2",{id:"\u8b93\u4f7f\u7528\u8005\u5f9e\u8a2d\u5b9a\u9801\u6539\u8b8a\u5730\u5340\u8cc7\u8a0a"},"\u8b93\u4f7f\u7528\u8005\u5f9e\u8a2d\u5b9a\u9801\u6539\u8b8a\u5730\u5340\u8cc7\u8a0a"),Object(c.b)("p",null,"\u63a5\u8457\uff0c\u548c\u5207\u63db\u9801\u9762\uff08",Object(c.b)("inlineCode",{parentName:"p"},"handleCurrentPageChange"),"\uff09\u7684\u65b9\u5f0f\u4e00\u6a23\uff0c\u628a ",Object(c.b)("inlineCode",{parentName:"p"},"handleCurrentCityChange")," \u65b9\u6cd5\u900f\u904e props \u50b3\u5165\uff0c\u8b93 WeatherSetting \u53ef\u4ee5\u53bb\u4fee\u6539 ",Object(c.b)("inlineCode",{parentName:"p"},"currentCity"),"\uff0c\u4ee5\u66f4\u65b0\u8981\u62c9\u53d6\u5929\u6c23\u8cc7\u6599\u7684\u5730\u5340\uff0c\u5982\u4e0b\u5716\u6240\u793a\uff1a"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5716\u4e00\uff1a")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/VaHIkwX.png",alt:"Imgur"}))),Object(c.b)("h3",{id:"app-\u5143\u4ef6-1"},"App \u5143\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/App.js\n// ...\n\nconst App = () => {\n  const handleCurrentCityChange = (currentCity) => {\n    setCurrentCity(currentCity);\n  };\n\n  // ...\n  return (\n    // ...\n\n    // \u5c07 cityName \u548c handleCurrentCityChange \u50b3\u5165 \uff37eatherSetting \u5143\u4ef6\u4e2d\n    <WeatherSetting\n      cityName={cityName}\n      handleCurrentCityChange={handleCurrentCityChange}\n      handleCurrentPageChange={handleCurrentPageChange}\n    />\n  );\n};\n")),Object(c.b)("h3",{id:"weathersetting-\u5143\u4ef6"},"WeatherSetting \u5143\u4ef6"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5f9e props \u4e2d\u53d6\u51fa ",Object(c.b)("inlineCode",{parentName:"li"},"cityName")," \u548c ",Object(c.b)("inlineCode",{parentName:"li"},"handleCurrentCityChange")),Object(c.b)("li",{parentName:"ol"},"\u628a ",Object(c.b)("inlineCode",{parentName:"li"},"cityName")," \u7576\u6210 ",Object(c.b)("inlineCode",{parentName:"li"},"locationName")," \u9019\u500b state \u7684\u9810\u8a2d\u503c\uff0c\u56e0\u70ba ",Object(c.b)("inlineCode",{parentName:"li"},"<input value={locationName}>"),"\uff0c\u56e0\u6b64\u7576\u4f7f\u7528\u8005\u4e00\u9032\u5230\u6b64\u9801\u9762\u6642\uff0c\u5730\u5340\u7684\u8868\u55ae\u6b04\u4f4d\u5c31\u6703\u662f\u4f7f\u7528\u8005\u7576\u524d\u7684\u5730\u5340")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// ./src/views/WeatherSetting.js\n// ...\n\n// \u5f9e props \u4e2d\u53d6\u51fa App \u5143\u4ef6\u50b3\u5165\u7684 cityName \u548c handleCurrentCityChange\nconst WeatherSetting = ({\n  cityName,\n  handleCurrentCityChange,\n  handleCurrentPageChange,\n}) => {\n  const [locationName, setLocationName] = useState(cityName); // \u628a cityName \u7576\u6210\u9810\u8a2d\u503c\n  // ...\n};\n")),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"\u63a5\u8457\u5728\u539f\u672c\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"handleSave")," \u4e2d\uff0c\u7576\u4f7f\u7528\u8005\u9ede\u64ca\u5132\u5b58\u6642\uff0c\u628a\u4f7f\u7528\u8005\u9078\u64c7\u7684\u5730\u5340\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"handleCurrentCityChange")," \u4f86\u66f4\u65b0 App \u5143\u4ef6\u4e2d ",Object(c.b)("inlineCode",{parentName:"li"},"currentCity")," \u7684\u8cc7\u6599\u72c0\u614b\uff0c\u540c\u6642\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"handleCurrentPageChange")," \u628a\u4f7f\u7528\u8005\u7684\u9801\u9762\u5207\u63db\u56de\u5929\u6c23\u8cc7\u8a0a\u9801\uff08",Object(c.b)("inlineCode",{parentName:"li"},"WeatherCard"),"\uff09\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const WeatherSetting = ({\n  cityName,\n  handleCurrentCityChange,\n  handleCurrentPageChange,\n}) => {\n  const [locationName, setLocationName] = useState(cityName); // \u628a cityName \u7576\u6210\u9810\u8a2d\u503c\n  // ...\n  const handleSave = () => {\n    console.log(`\u5132\u5b58\u7684\u5730\u5340\u8cc7\u8a0a\u70ba\uff1a${locationName}`);\n    handleCurrentCityChange(locationName); // \u66f4\u65b0 App \u5143\u4ef6\u4e2d\u7684 currentCity \u540d\u7a31\n    handleCurrentPageChange('WeatherCard'); // \u5207\u63db\u56de WeatherCard \u9801\u9762\n  };\n  // ...\n};\n")),Object(c.b)("p",null,"\u592a\u68d2\u4e86\uff01\u73fe\u5728\u4f60\u53ef\u4ee5\u8a66\u8457\u5728\u8a2d\u5b9a\u9801\u9762\u4e2d\u5207\u63db\u5730\u5340\uff0c\u5728\u6309\u4e0b\u5132\u5b58\u5f8c\uff0c\u5929\u6c23\u5361\u7247\u7684\u6240\u62c9\u53d6\u5730\u5340\u4e5f\u6703\u9023\u5e36\u66f4\u6539\u3002"),Object(c.b)("h2",{id:"\u63db\u4f60\u4e86\uff01\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u884c\u8a2d\u5b9a\u5730\u5340"},"\u63db\u4f60\u4e86\uff01\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u81ea\u884c\u8a2d\u5b9a\u5730\u5340"),Object(c.b)("p",null,"\u5728\u9019\u500b\u55ae\u5143\u4e2d\uff0c\u6211\u5011\u5e7e\u4e4e\u5b8c\u6210\u4e86\u6240\u6709\u300c\u81fa\u7063\u597d\u5929\u6c23\u300d\u7684\u529f\u80fd\uff0c\u73fe\u5728\u4f7f\u7528\u8005\u53ef\u4ee5\u5728\u8a2d\u5b9a\u9801\u9762\u5c07\u5730\u5340\u5207\u63db\u6210\u81ea\u5df1\u6240\u5728\u7684\u5730\u5340\uff0c\u53d6\u5f97\u8a72\u5730\u5340\u7684\u5929\u6c23\u8cc7\u8a0a\u548c\u964d\u96e8\u6a5f\u7387\u3002\u73fe\u5728\u8981\u8acb\u4f60\u8a66\u8457\u5be6\u4f5c\u9019\u500b\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u53c3\u8003\u4e0b\u9762\u7684\u6b65\u9a5f\u52a0\u4ee5\u5b8c\u6210\uff1a"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 App \u5143\u4ef6\u4e2d\uff0c\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"useState")," \u53d6\u5f97 ",Object(c.b)("inlineCode",{parentName:"li"},"currentCity")," \u548c ",Object(c.b)("inlineCode",{parentName:"li"},"setCurrentCity")," \uff0c\u5148\u4ee5\u4e00\u500b\u7e23\u5e02\uff08\u4f8b\u5982\uff0c\u9ad8\u96c4\u5e02\uff09\u7576\u4f5c\u9810\u8a2d\u503c\u3002"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"findLocation")," \u9019\u500b\u65b9\u6cd5\uff0c\u5c07 ",Object(c.b)("inlineCode",{parentName:"li"},"currentCity")," \u8f49\u63db\u6210\u5404\u500b API \u5c0d\u61c9\u9700\u8981\u4f7f\u7528\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"locationName")),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ",Object(c.b)("inlineCode",{parentName:"li"},"findLocation")," \u9019\u500b\u65b9\u6cd5\uff0c\u4e00\u6a23\u53ef\u4ee5\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"useMemo")," \u9019\u500b\u65b9\u6cd5\uff0c\u6e1b\u5c11\u4e0d\u5fc5\u8981\u7684\u91cd\u8907\u904b\u7b97"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u53d6\u5f97\u5404\u500b API \u9069\u7528\u7684 locationName \u5f8c\uff0c\u5206\u5225\u4ee5\u53c3\u6578\u7684\u65b9\u5f0f\u5e36\u5165 ",Object(c.b)("inlineCode",{parentName:"li"},"getMoment"),"\uff08\u5f97\u77e5\u76ee\u524d\u662f\u767d\u5929\u6216\u665a\u4e0a\u7684\u65b9\u6cd5\uff09\u4ee5\u53ca ",Object(c.b)("inlineCode",{parentName:"li"},"useWeatherAPI")," \uff08\u53d6\u5f97\u5929\u6c23\u8cc7\u8a0a\u7684 Custom Hook\uff09"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5c07 ",Object(c.b)("inlineCode",{parentName:"li"},"findLocation")," \u5f8c\u53d6\u5f97\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"cityName")," \u4ee5 props \u7684\u65b9\u5f0f\u50b3\u5165 ",Object(c.b)("inlineCode",{parentName:"li"},"WeatherCard")," \u5143\u4ef6\u4e2d\uff0c\u4ee5\u986f\u793a\u6b63\u78ba\u7684\u7e23\u5e02\u540d\u7a31"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5c07 ",Object(c.b)("inlineCode",{parentName:"li"},"setCurrentCity")," \u7684\u65b9\u6cd5\u5148\u5305\u6210 ",Object(c.b)("inlineCode",{parentName:"li"},"handleCurrentCityChange")," \u9019\u500b\u51fd\u5f0f\uff0c\u518d\u5f9e App \u5143\u4ef6\u50b3\u5165 ",Object(c.b)("inlineCode",{parentName:"li"},"WeatherSetting")," \u5143\u4ef6\u4e2d\uff0c\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u5728\u8a2d\u5b9a\u9801\u4fee\u6539\u986f\u793a\u7684\u5730\u5340"),Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u5728 WeatherSetting \u5143\u4ef6\u4e2d\uff0c\u7576\u4f7f\u7528\u8005\u9ede\u64ca\u5132\u5b58\u5f8c\uff0c\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"handleCurrentCityChange")," \u66f4\u65b0 App \u5143\u4ef6\u4e2d ",Object(c.b)("inlineCode",{parentName:"li"},"currentCity")," \u7684\u8cc7\u6599\u72c0\u614b\uff0c\u4e26\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"li"},"handleCurrentPageChange")," \u5207\u63db\u56de\u5929\u6c23\u8cc7\u8a0a\u9801")),Object(c.b)("p",null,"\u73fe\u5728\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5207\u63db\u5730\u5340\u4e86\uff01\u4f46\u73fe\u5728\u9084\u5269\u4e0b\u6700\u5f8c\u4e00\u500b\u529f\u80fd\u9700\u8981\u5b8c\u6210\uff0c\u56e0\u70ba\u76ee\u524d\u6c92\u6709\u628a\u4f7f\u7528\u8005\u9078\u64c7\u7684\u5730\u5340\u8cc7\u8a0a\u4fdd\u5b58\u4e0b\u4f86\uff0c\u56e0\u6b64\u53ea\u8981\u4f7f\u7528\u8005\u91cd\u65b0\u6574\u7406\u9801\u9762\uff0c\u5730\u5340\u5c31\u6703\u5207\u63db\u70ba\u4e00\u958b\u59cb\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"currentCity")," \u7684\u9810\u8a2d\u503c\u3002\u5728\u4e0b\u4e00\u500b\u55ae\u5143\u4e2d\uff0c\u6211\u5011\u8981\u4f86\u628a\u4f7f\u7528\u8005\u9078\u64c7\u7684\u5730\u5340\u8cc7\u8a0a\u4fdd\u5b58\u4e0b\u4f86\u3002"),Object(c.b)("p",null,"\u672c\u55ae\u5143\u76f8\u95dc\u4e4b\u7db2\u9801\u9023\u7d50\u3001\u5b8c\u6574\u7a0b\u5f0f\u78bc\u8207\u7a0b\u5f0f\u78bc\u8b8a\u66f4\u90e8\u5206\u53ef\u65bc ",Object(c.b)("inlineCode",{parentName:"p"},"select-location-in-weather-setting")," \u5206\u652f\u6aa2\u8996\uff1a",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/select-location-in-weather-setting"}),"https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/tree/select-location-in-weather-setting")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/B6ZaUCF.png",alt:"Imgur"}))),Object(c.b)("hr",null),Object(c.b)("p",null,"\u5716\u4e00\u7684\u6587\u5b57\u5167\u5bb9\uff1a"),Object(c.b)("p",null,"App"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"handleCurrentCityChange"),Object(c.b)("li",{parentName:"ul"},"currentCity")),Object(c.b)("p",null,"WeatherSetting, WeatherCard"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"<WeatherSetting handleCurrentCityChange={handleCurrentCityChange} />"),", ",Object(c.b)("inlineCode",{parentName:"p"},"handleCurrentCityChange(\u201c\u53f0\u5357\u5e02\u201d)")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5c07\u66f4\u65b0 currentCity \u7684\u65b9\u6cd5\u50b3\u5165\u5b50\u5143\u4ef6\u4e2d"),Object(c.b)("li",{parentName:"ol"},"\u900f\u904e\u8a72\u65b9\u6cd5\u66f4\u65b0 app \u4e2d\u7684 currentCity \u8cc7\u6599\u72c0\u614b")))}p.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,j=m["".concat(i,".").concat(s)]||m[s]||u[s]||c;return n?r.a.createElement(j,l(l({ref:t},o),{},{components:n})):r.a.createElement(j,l({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<c;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);