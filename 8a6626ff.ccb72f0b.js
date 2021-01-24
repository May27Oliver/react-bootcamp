(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{134:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return r})),t.d(n,"default",(function(){return p}));var o=t(3),a=t(7),c=(t(0),t(183)),i={title:"\u5728 React \u4e2d\u5be6\u4f5c Facebook Login",sidebar_label:"\u5be6\u4f5c Facebook Login",keywords:["OAuth2","Facebook Login"]},b={unversionedId:"bootcamp/week4/facebook-login",id:"bootcamp/week4/facebook-login",isDocsHomePage:!1,title:"\u5728 React \u4e2d\u5be6\u4f5c Facebook Login",description:"\u5efa\u7acb Facebook \u958b\u767c\u8005\u5e33\u865f\u8207\u61c9\u7528\u7a0b\u5f0f",source:"@site/docs/bootcamp/week4/facebook-login.md",slug:"/bootcamp/week4/facebook-login",permalink:"/react-bootcamp/docs/bootcamp/week4/facebook-login",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/bootcamp/week4/facebook-login.md",version:"current",sidebar_label:"\u5be6\u4f5c Facebook Login",sidebar:"bootcamp",previous:{title:"create-react-app \u524d\u7f6e\u8a2d\u5b9a",permalink:"/react-bootcamp/docs/bootcamp/week4/create-react-app-setting"},next:{title:"\u5c07\u767b\u5165\u7684\u908f\u8f2f\u8b8a\u6210\u81ea\u5df1\u7684 Hooks",permalink:"/react-bootcamp/docs/bootcamp/week4/custom-hooks"}},r=[{value:"\u5efa\u7acb Facebook \u958b\u767c\u8005\u5e33\u865f\u8207\u61c9\u7528\u7a0b\u5f0f",id:"\u5efa\u7acb-facebook-\u958b\u767c\u8005\u5e33\u865f\u8207\u61c9\u7528\u7a0b\u5f0f",children:[]},{value:"\u5be6\u4f5c Facebook Login",id:"\u5be6\u4f5c-facebook-login",children:[{value:"STEP 1\uff1a\u8f09\u5165 Facebook SDK",id:"step-1\uff1a\u8f09\u5165-facebook-sdk",children:[]},{value:"STEP 2\uff1a\u521d\u59cb\u5316 Facebook SDK",id:"step-2\uff1a\u521d\u59cb\u5316-facebook-sdk",children:[]},{value:"STEP 3\uff1a\u53d6\u5f97\u4f7f\u7528\u8005\u7576\u524d\u767b\u5165\u72c0\u614b",id:"step-3\uff1a\u53d6\u5f97\u4f7f\u7528\u8005\u7576\u524d\u767b\u5165\u72c0\u614b",children:[]},{value:"STEP 4\uff1a\u4f7f\u7528\u8005\u767b\u5165",id:"step-4\uff1a\u4f7f\u7528\u8005\u767b\u5165",children:[]},{value:"STEP 5\uff1a\u4f7f\u7528\u8005\u767b\u51fa",id:"step-5\uff1a\u4f7f\u7528\u8005\u767b\u51fa",children:[]},{value:"STEP 6\uff1a\u4fdd\u7559\u4f7f\u7528\u8005\u7684\u767b\u5165\u72c0\u614b",id:"step-6\uff1a\u4fdd\u7559\u4f7f\u7528\u8005\u7684\u767b\u5165\u72c0\u614b",children:[]},{value:"STEP 7\uff1a\u900f\u904e Graph API \u53d6\u5f97\u4f7f\u7528\u8005\u8cc7\u8a0a",id:"step-7\uff1a\u900f\u904e-graph-api-\u53d6\u5f97\u4f7f\u7528\u8005\u8cc7\u8a0a",children:[]}]},{value:"\u6574\u5408 Facebook Login \u8207 App",id:"\u6574\u5408-facebook-login-\u8207-app",children:[]},{value:"\u53c3\u8003",id:"\u53c3\u8003",children:[]}],s={toc:r};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u5efa\u7acb-facebook-\u958b\u767c\u8005\u5e33\u865f\u8207\u61c9\u7528\u7a0b\u5f0f"},"\u5efa\u7acb Facebook \u958b\u767c\u8005\u5e33\u865f\u8207\u61c9\u7528\u7a0b\u5f0f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"https://developers.facebook.com/apps/"}),"\u5efa\u7acb Facebook \u61c9\u7528\u7a0b\u5f0f")),Object(c.b)("li",{parentName:"ul"},"\u6253\u9020\u4e92\u806f\u9ad4\u9a57"),Object(c.b)("li",{parentName:"ul"},"\u70ba\u61c9\u7528\u7a0b\u5f0f\u65b0\u589e\u7522\u54c1",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Facebook \u767b\u5165"))),Object(c.b)("li",{parentName:"ul"},"\u7db2\u7ad9")),Object(c.b)("h2",{id:"\u5be6\u4f5c-facebook-login"},"\u5be6\u4f5c Facebook Login"),Object(c.b)("h3",{id:"step-1\uff1a\u8f09\u5165-facebook-sdk"},"STEP 1\uff1a\u8f09\u5165 Facebook SDK"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="./src/App.js"',title:'"./src/App.js"'}),"useEffect(() => {\n  // \u8f09\u5165 Facebook SDK\n  (function (d, s, id) {\n    var js,\n      fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) {\n      return;\n    }\n    js = d.createElement(s);\n    js.id = id;\n    js.src = 'https://connect.facebook.net/en_US/sdk.js';\n    fjs.parentNode.insertBefore(js, fjs);\n  })(document, 'script', 'facebook-jssdk');\n}, []);\n")),Object(c.b)("h3",{id:"step-2\uff1a\u521d\u59cb\u5316-facebook-sdk"},"STEP 2\uff1a\u521d\u59cb\u5316 Facebook SDK"),Object(c.b)("h5",{id:"keywords-windowfbasyncinit-windowfbinit"},"keywords: ",Object(c.b)("inlineCode",{parentName:"h5"},"window.fbAsyncInit"),", ",Object(c.b)("inlineCode",{parentName:"h5"},"window.FB.init()")),Object(c.b)("p",null,"\u5728\u8f09\u5165 Facebook SDK \u5f8c\u9084\u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528\uff0c\u9700\u8981\u5148\u5c07 Facebook SDK \u9032\u884c\u521d\u59cb\u5316\uff08initialization\uff09\u3002\u7531\u65bc Facebook SDK \u8f09\u5165\u5b8c\u6210\u5f8c\u6703\u7acb\u5373\u89f8\u767c ",Object(c.b)("inlineCode",{parentName:"p"},"window.fbAsyncInit")," \u7684\u65b9\u6cd5\uff0c\u56e0\u6b64\u6211\u5011\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"window.fbAsyncInit = function() {}")," \u4e2d\u5148\u521d\u59cb\u5316 Facebook SDK\uff1a"),Object(c.b)("p",null,"\u4f7f\u7528 FB SDK \u6240\u63d0\u4f9b\u7684\u65b9\u6cd5\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="./src/App.js"',title:'"./src/App.js"'}),"useEffect(() => {\n  // SDK \u8f09\u5165\u5b8c\u6210\u6642\u6703\u7acb\u5373\u547c\u53eb fbAsyncInit\uff0c\u5728\u9019\u500b\u51fd\u5f0f\u4e2d\u5c0d Facebook SDK \u9032\u884c\u521d\u59cb\u5316\n  window.fbAsyncInit = function () {\n    // \u521d\u59cb\u5316 Facebook SDK\n    window.FB.init({\n      appId: process.env.REACT_APP_FB_APP_ID,\n      cookie: true,\n      xfbml: true,\n      version: process.env.REACT_APP_FB_APP_VERSION,\n    });\n\n    console.log('[fbAsyncInit] after window.FB.init');\n    window.FB.AppEvents.logPageView();\n  };\n\n  // \u8f09\u5165 Facebook SDK\n  // ...\n}, []);\n")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u7531\u65bc FB \u9019\u500b\u8b8a\u6578\u662f\u900f\u904e Facebook SDK \u7531\u700f\u89bd\u5668\u7684 window \u8f09\u5165\uff0c\u56e0\u6b64\u4f7f\u7528\u6642\u9700\u547c\u53eb ",Object(c.b)("inlineCode",{parentName:"p"},"window.FB"),"\uff0cESLint \u624d\u4e0d\u6703\u51fa\u73fe ",Object(c.b)("inlineCode",{parentName:"p"},"FB' is not defined")," \u7684\u932f\u8aa4\uff1a"))),Object(c.b)("h3",{id:"step-3\uff1a\u53d6\u5f97\u4f7f\u7528\u8005\u7576\u524d\u767b\u5165\u72c0\u614b"},"STEP 3\uff1a\u53d6\u5f97\u4f7f\u7528\u8005\u7576\u524d\u767b\u5165\u72c0\u614b"),Object(c.b)("h5",{id:"keywords-fbgetloginstatus"},"keywords: ",Object(c.b)("inlineCode",{parentName:"h5"},"FB.getLoginStatus()")),Object(c.b)("p",null,"\u5728 Facebook SDK \u521d\u59cb\u5316\u5f8c\uff0c\u5c31\u53ef\u4ee5\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"FB.getLoginStatus")," \u4f86\u53d6\u5f97\u4f7f\u7528\u8005\u7684\u767b\u5165\u72c0\u614b\u3002\u7531\u65bc\u548c\u521d\u59cb\u5316\u662f\u4e0d\u540c\u7684\u908f\u8f2f\uff0c\u56e0\u6b64\u53ef\u4ee5\u62c6\u6210\u53e6\u4e00\u500b ",Object(c.b)("inlineCode",{parentName:"p"},"useEffect")," \u4f86\u5beb\uff0c\u53c8\u56e0\u70ba ",Object(c.b)("inlineCode",{parentName:"p"},"FB.getLoginStatus")," \u4e00\u5b9a\u8981\u5728 Facebook SDK \u521d\u59cb\u5316\u5f8c\u624d\u80fd\u88ab\u547c\u53eb\uff08\u5426\u5247\u6703\u5674\u932f\uff09\uff0c\u56e0\u6b64\u53ef\u4ee5\u900f\u904e\u525b\u525b\u5efa\u7acb\u597d\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"isFBInitialized")," \u4f86\u9032\u884c\u5224\u65b7\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'{14-17} title="./src/App.js"',"{14-17}":!0,title:'"./src/App.js"'}),"useEffect(() => {\n  // SDK \u8f09\u5165\u5b8c\u6210\u6642\u6703\u7acb\u5373\u547c\u53eb fbAsyncInit\uff0c\u5728\u9019\u500b\u51fd\u5f0f\u4e2d\u5c0d Facebook SDK \u9032\u884c\u521d\u59cb\u5316\n  window.fbAsyncInit = function () {\n    // \u521d\u59cb\u5316 Facebook SDK\n    window.FB.init({\n      appId: process.env.REACT_APP_FB_APP_ID,\n      cookie: true,\n      xfbml: true,\n      version: process.env.REACT_APP_FB_APP_VERSION,\n    });\n\n    console.log('[fbAsyncInit] after window.FB.init');\n\n    // \u53d6\u5f97\u4f7f\u7528\u8005\u767b\u5165\u72c0\u614b\n    window.FB.getLoginStatus(function (response) {\n      console.log('[refreshLoginStatus]', response);\n    });\n\n    window.FB.AppEvents.logPageView();\n  };\n\n  // \u8f09\u5165 Facebook SDK\n  // ...\n}, []);\n")),Object(c.b)("p",null,"\u5728 response \u7269\u4ef6\u4e2d\u6703\u53d6\u5f97 ",Object(c.b)("inlineCode",{parentName:"p"},"authResponse")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"status")," \u9019\u5169\u500b\u5c6c\u6027\uff0c\u9577\u5f97\u53ef\u80fd\u6703\u50cf\u9019\u6a23\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'// \u82e5 status \u4e0d\u662f connected \u7684\u8a71\uff0cauthResponse \u5c07\u6703\u662f null\n{\n  "authResponse": {\n    "accessToken": "<access_token>",\n    "userID": "<user_id>",\n    "expiresIn": 6650,\n    "signedRequest": "<signed_request>",\n    "graphDomain": "facebook",\n    "data_access_expiration_time": 1619194150\n  },\n  "status": "connected"\n}\n')),Object(c.b)("p",null,"\u6839\u64da",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.facebook.com/docs/facebook-login/web?locale=zh_TW"}),"\u5b98\u65b9\u6587\u4ef6"),"\u6240\u8ff0\uff0c ",Object(c.b)("inlineCode",{parentName:"p"},"status")," \u53ef\u4ee5\u5206\u6210\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"connected"),"\uff1a\u5df2\u767b\u5165 Facebook \u8207\u7db2\u9801"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"not_authorized"),"\uff1a\u5df2\u767b\u5165 Facebook \u4f46\u672a\u767b\u5165\u7db2\u9801"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"unknown"),"\uff1a\u672a\u767b\u5165 Facebook\uff0c\u6216\u547c\u53eb ",Object(c.b)("inlineCode",{parentName:"li"},"FB.logout()")," \u5f8c")),Object(c.b)("p",null,"\u5982\u679c ",Object(c.b)("inlineCode",{parentName:"p"},"status")," \u662f ",Object(c.b)("inlineCode",{parentName:"p"},"connected")," \u7684\u8a71\uff0c\u5247\u53ef\u4ee5\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"authResponse")," \u4e2d\u9032\u4e00\u6b65\u53d6\u5f97\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"accessToken"),"\uff1a\u4e2d\u6587\u7ffb\u8b6f\u53eb\u300c\u5b58\u53d6\u6b0a\u6756\u300d\uff0c\u53ef\u4ee5\u60f3\u50cf\u6210\u662f\u300c\u4f7f\u7528\u8005\u300d\u501f\u7d66\u300c\u7db2\u9801\u300d\u7684\u4e00\u628a\u9470\u5319\uff0c\u5f8c\u7e8c\u7576\u300c\u7db2\u9801\u300d\u8981\u5411\u300cFacebook\u300d\u5b58\u53d6\u300c\u4f7f\u7528\u8005\u300d\u7684\u8cc7\u6599\u6642\u90fd\u9700\u8981\u4f7f\u7528\u5230\u9019\u628a\u9470\u5319"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"expiresIn"),"\uff1a\u5b58\u53d6\u6b0a\u6756\u904e\u671f\u7684\u6642\u9593\u6233\u8a18\uff0c\u4e5f\u5c31\u662f\u9019\u628a\u9470\u5319\u501f\u5230\u4ec0\u9ebc\u6642\u5019\u70ba\u6b62\uff0c\u8d85\u904e\u5c31\u8981\u91cd\u65b0\u7533\u8acb\uff0c\u4e5f\u5c31\u662f\u4f7f\u7528\u8005\u9700\u8981\u91cd\u65b0\u9032\u884c Facebook \u767b\u5165"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"userID"),"\uff1a\u4f7f\u7528\u8005\u7684 ID")),Object(c.b)("h3",{id:"step-4\uff1a\u4f7f\u7528\u8005\u767b\u5165"},"STEP 4\uff1a\u4f7f\u7528\u8005\u767b\u5165"),Object(c.b)("h5",{id:"keywords-fblogin"},"keywords: ",Object(c.b)("inlineCode",{parentName:"h5"},"FB.login()")),Object(c.b)("p",null,"\u5982\u679c\u4f7f\u7528\u8005\u5c1a\u672a\u767b\u5165\u7684\u8a71\uff0c\u5373\u53ef\u900f\u904e\u547c\u53eb ",Object(c.b)("inlineCode",{parentName:"p"},"FB.login()")," \u4f86\u8b93\u4f7f\u7528\u8005\u767b\u5165\uff0c\u547c\u53eb\u6b64\u65b9\u6cd5\u6642\uff0c\u700f\u89bd\u5668\u6703\u8df3\u51fa\u5c0d\u8a71\u6846\u4f9b\u4f7f\u7528\u8005\u9032\u884c\u767b\u5165\u3002"),Object(c.b)("p",null,"\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"FB.login()")," \u7684\u7b2c\u4e8c\u500b\u53c3\u6578\u4e2d\u53ef\u4ee5\u5e36\u5165\u5e0c\u671b\u4f7f\u7528\u8005\u63d0\u4f9b\u7684\u6b0a\u9650\uff08scope\uff09\u6709\u54ea\u4e9b\uff0c\u9810\u8a2d\u5c31\u6703\u5305\u542b\u767b\u5165\u8005\u7684\u59d3\u540d\u548c\u5927\u982d\u8cbc\u7167\uff1b\u800c ",Object(c.b)("inlineCode",{parentName:"p"},"email")," \u548c\u516c\u958b\u8cc7\u6599\uff08",Object(c.b)("inlineCode",{parentName:"p"},"public_profile"),"\uff09 \u5247\u662f\u4e0d\u9700\u8981\u984d\u5916\u7533\u8acb\u5373\u53ef\u4f7f\u7528\u7684\u6b0a\u9650\uff1b\u5176\u9918\u7684\u6b0a\u9650\u5247\u90fd\u9700\u8981\u5728 Facebook \u958b\u767c\u8005\u5f8c\u53f0\u984d\u5916\u5411 Facebook \u9032\u884c\u7533\u8acb\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// \u4f7f\u7528 Facebook \u767b\u5165\nFB.login(\n  function (response) {\n    // \u53d6\u5f97\u4f7f\u7528\u8005\u767b\u5165\u7684\u60c5\u6cc1\n  },\n  { scope: 'public_profile,email' }\n);\n")),Object(c.b)("p",null,"\u547c\u53eb ",Object(c.b)("inlineCode",{parentName:"p"},"FB.login()")," \u5f8c\uff0c\u700f\u89bd\u5668\u5373\u6703\u8df3\u51fa\u767b\u5165\u8996\u7a97\uff0c\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"response")," \u53ef\u4ee5\u4e86\u89e3\u4f7f\u7528\u8005\u767b\u5165\u7684\u60c5\u6cc1\uff0c\u9019\u500b ",Object(c.b)("inlineCode",{parentName:"p"},"response")," \u56de\u50b3\u7684\u5167\u5bb9\u548c\u525b\u525b\u547c\u53eb ",Object(c.b)("inlineCode",{parentName:"p"},"FB.getLoginStatus()")," \u6642\u53d6\u5f97\u7684 response \u7269\u4ef6\u5167\u5bb9\u662f\u4e00\u6a23\u7684\uff0c\u56e0\u6b64\u53ef\u4ee5\u7531\u6b64\u5224\u65b7\u4f7f\u7528\u8005\u662f\u5426\u5df2\u7d93\u767b\u5165\u3002"),Object(c.b)("p",null,"\u4e0b\u9762\u5148\u5efa\u7acb\u4e00\u500b\u6309\u9215\uff0c\u4e26\u5728\u6309\u9215\u88ab\u9ede\u64ca\u6642\u89f8\u767c ",Object(c.b)("inlineCode",{parentName:"p"},"FB.login()")," \u65b9\u6cd5\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="./src/App.js"',title:'"./src/App.js"'}),"const App = () => {\n  // ...\n  const handleFBLogin = () => {\n    // \u8df3\u51fa Facebook \u767b\u5165\u7684\u5c0d\u8a71\u6846\n    window.FB.login(\n      function (response) {\n        console.log('handleFBLogout', response);\n      },\n      { scope: 'public_profile,email' }\n    );\n  };\n\n  // ...\n  return (\n    <div>\n      <button onClick={handleFBLogin}>Facebook Login</button>\n    </div>\n  );\n};\n")),Object(c.b)("h3",{id:"step-5\uff1a\u4f7f\u7528\u8005\u767b\u51fa"},"STEP 5\uff1a\u4f7f\u7528\u8005\u767b\u51fa"),Object(c.b)("h5",{id:"keywords-fblogout"},"keywords: ",Object(c.b)("inlineCode",{parentName:"h5"},"FB.logout()")),Object(c.b)("p",null,"\u7576\u4f7f\u7528\u8005\u9700\u8981\u767b\u51fa\u6642\uff0c\u548c\u767b\u5165\u7684\u65b9\u6cd5\u76f8\u4f3c\uff0c\u53ea\u9700\u8981\u547c\u53eb ",Object(c.b)("inlineCode",{parentName:"p"},"FB.logout()")," \u5373\u53ef\uff0c\u5728\u767b\u51fa\u5f8c\u4e00\u6a23\u6703\u53d6\u5f97 response \u7269\u4ef6\uff0c\u53ef\u4ee5\u4ee5\u6b64\u7269\u4ef6\u66f4\u65b0\u5728 App \u5143\u4ef6\u4e2d\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"authResponse")," \u72c0\u614b\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="./src/App.js"',title:'"./src/App.js"'}),"const App = () => {\n  // ...\n  // \u4f7f\u7528\u8005\u767b\u51fa\n  const handleFBLogout = () => {\n    window.FB.logout(function (response) {\n      console.log('handleFBLogout', response);\n    });\n  };\n\n  // ...\n};\n")),Object(c.b)("h3",{id:"step-6\uff1a\u4fdd\u7559\u4f7f\u7528\u8005\u7684\u767b\u5165\u72c0\u614b"},"STEP 6\uff1a\u4fdd\u7559\u4f7f\u7528\u8005\u7684\u767b\u5165\u72c0\u614b"),Object(c.b)("p",null,"\u7531\u65bc\u5728 STEP 4 \u547c\u53eb ",Object(c.b)("inlineCode",{parentName:"p"},"FB.getLoginStatus()")," \u5f8c\uff0c\u4ee5\u53ca STEP 6 \u547c\u53eb ",Object(c.b)("inlineCode",{parentName:"p"},"FB.Login()")," \u5f8c\u90fd\u53ef\u4ee5\u53d6\u5f97\u4f7f\u7528\u8005\u7684\u767b\u5165\u72c0\u614b\uff0c\u6211\u5011\u53ef\u4ee5\u7528\u9019\u500b\u4f86\u5224\u65b7\u4f7f\u7528\u8005\u662f\u5426\u5df2\u7d93\u767b\u5165\uff0c\u56e0\u6b64\u9019\u88e1\u540c\u6a23\u5b9a\u7fa9\u4e00\u500b state \u4f86\u4fdd\u5b58\u4f7f\u7528\u8005\u7684\u767b\u5165\u72c0\u614b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'{1,12,30,41} title="./src/App.js"',"{1,12,30,41}":!0,title:'"./src/App.js"'}),"const [authResponse, setResponse] = useState();\n\nuseEffect(() => {\n  // SDK \u8f09\u5165\u5b8c\u6210\u6642\u6703\u7acb\u5373\u547c\u53eb fbAsyncInit\uff0c\u5728\u9019\u500b\u51fd\u5f0f\u4e2d\u5c0d Facebook SDK \u9032\u884c\u521d\u59cb\u5316\n  window.fbAsyncInit = function () {\n    // \u521d\u59cb\u5316 Facebook SDK\n    // ...\n\n    // \u53d6\u5f97\u4f7f\u7528\u8005\u767b\u5165\u72c0\u614b\n    window.FB.getLoginStatus(function (response) {\n      console.log('[refreshLoginStatus]', response);\n      setResponse(response);\n    });\n\n    window.FB.AppEvents.logPageView();\n  };\n\n  // \u8f09\u5165 Facebook SDK\n  // ...\n}, []);\n\n// \u4f7f\u7528\u8005\u9ede\u64ca\u767b\u5165\nconst handleFBLogin = () => {\n  if (!isFBInitialized) {\n    return;\n  }\n  window.FB.login(\n    function (response) {\n      console.log('handleFBLogin', response);\n      setResponse(response);\n    },\n    { scope: 'public_profile,email' }\n  );\n};\n\n// \u4f7f\u7528\u9019\u9ede\u64ca\u767b\u51fa\nconst handleFBLogout = () => {\n  // ...\n  window.FB.logout(function (response) {\n    console.log('handleFBLogout', response);\n    setResponse(response);\n  });\n};\n")),Object(c.b)("h3",{id:"step-7\uff1a\u900f\u904e-graph-api-\u53d6\u5f97\u4f7f\u7528\u8005\u8cc7\u8a0a"},"STEP 7\uff1a\u900f\u904e Graph API \u53d6\u5f97\u4f7f\u7528\u8005\u8cc7\u8a0a"),Object(c.b)("h5",{id:"keywords-fbapi"},"keywords: ",Object(c.b)("inlineCode",{parentName:"h5"},"FB.api()")),Object(c.b)("p",null,"\u9664\u4e86\u53ef\u4ee5\u5224\u65b7\u4f7f\u7528\u8005\u662f\u5426\u6210\u529f\u900f\u904e Facebook \u767b\u5165\u5916\uff0c\u5728\u767b\u5165\u4e4b\u5f8c\uff0c\u53ef\u4ee5\u4f7f\u7528 Facebook \u63d0\u4f9b\u7684 ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.facebook.com/docs/graph-api/overview"}),"Graph API")," \u4f86\u53d6\u5f97\u4f7f\u7528\u8005\u76f8\u95dc\u7684\u8cc7\u8a0a\u3002Graph API \u80fd\u5920\u53d6\u5f97\u7684\u8cc7\u6599\u5c07\u53d6\u6c7a\u65bc\u4f7f\u7528\u8005\u6388\u6b0a\u7db2\u9801\u5b58\u53d6\u7684\u6b0a\u9650\u7bc4\u570d\u3002"),Object(c.b)("p",null,"\u5728\u6c92\u6709\u984d\u5916\u7533\u8acb\u5176\u4ed6 Facebook \u6b0a\u9650\u7684\u60c5\u6cc1\u4e0b\uff0c\u53ef\u4ee5\u900f\u904e ",Object(c.b)("inlineCode",{parentName:"p"},"/me")," \u4f86\u53d6\u5f97\u4f7f\u7528\u8005\u540d\u7a31\u548c id\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"window.FB.api('/me', function (response) {\n  // response \u6703\u5305\u542b name \u548c id\n});\n")),Object(c.b)("p",null,"\u82e5\u5e0c\u671b\u53d6\u5f97\u5176\u4ed6\u8cc7\u8a0a\uff0c\u4f8b\u5982 name, email \u7b49\u5176\u4ed6\u516c\u958b\u8cc7\u6599\uff0c\u5247\u53ef\u4ee5\u4f7f\u7528\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// fields \u4e2d\u662f\u5e36\u5165\u5b57\u4e32\nwindow.FB.api('/me', 'GET', { fields: 'name,email' }, function (response) {\n  // response \u6703\u5305\u542b name \u548c id\n});\n")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u82e5\u9700\u7372\u53d6\u66f4\u591a\u4f7f\u7528\u8005\u8cc7\u8a0a\uff0c\u53ef\u9032\u4e00\u6b65\u53c3\u8003",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.facebook.com/docs/graph-api/using-graph-api/"}),"\u4f7f\u7528\u5716\u5f62 API"),"\u3002"))),Object(c.b)("h2",{id:"\u6574\u5408-facebook-login-\u8207-app"},"\u6574\u5408 Facebook Login \u8207 App"),Object(c.b)("p",null,"\u6700\u5f8c\u53ea\u9700\u8981\u5c07\u767b\u5165\uff08",Object(c.b)("inlineCode",{parentName:"p"},"handleFBLogin"),"\uff09\u548c\u767b\u51fa\uff08",Object(c.b)("inlineCode",{parentName:"p"},"handleFBLogout"),"\uff09\u7684\u65b9\u6cd5\uff0c\u5206\u5225\u50b3\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"views/Login")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"components/Footer.js")," \u4e2d\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'{14,17} title="src/App.js"',"{14,17}":!0,title:'"src/App.js"'}),'const App = () => {\n  // ..\n  return (\n    <div className="app">\n      <Switch>\n        <Route exact path="/">\n          {response && response.status === \'connected\' ? (\n            <Redirect to="/todos" />\n          ) : (\n            <Redirect to="/login" />\n          )}\n        </Route>\n        <Route path="/login">\n          <Login handleFBLogin={handleFBLogin} status={response.status} />\n        </Route>\n        <Route path="/todos">\n          <TodoApp handleFBLogout={handleFBLogout} />\n        </Route>\n      </Switch>\n    </div>\n  );\n};\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'{1} title="src/components/Login.js"',"{1}":!0,title:'"src/components/Login.js"'}),'const Login = ({ status, handleFBLogin }) => {\n  if (status === \'connected\') {\n    return <Redirect to="/todos" />;\n  }\n\n  return (\n    <Container foo="bar">\n      <Title>\u767b\u5165 Todo </Title>\n      <Button className="btn-reset" onClick={handleFBLogin}>\n        \u4f7f\u7528 Facebook \u767b\u5165\n      </Button>\n    </Container>\n  );\n};\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'{1,5} title="src/components/Footer.js"',"{1,5}":!0,title:'"src/components/Footer.js"'}),'const Footer = ({ numOfTodos, handleFBLogout }) => {\n  return (\n    <Container>\n      <p>\u5269\u9918\u9805\u76ee\u6578\uff1a{numOfTodos}</p>\n      <LogoutBtn className="btn-reset" onClick={handleFBLogout}>\n        \u767b\u51fa\n      </LogoutBtn>\n    </Container>\n  );\n};\n')),Object(c.b)("h2",{id:"\u53c3\u8003"},"\u53c3\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"https://developers.facebook.com/docs/facebook-login/web?locale=zh_TW"}),"\u642d\u914d JavaScript SDK \u7684\u7db2\u9801\u7248\u300cFacebook \u767b\u5165\u300d")," @ Facebook Developers"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"https://create-react-app.dev/docs/adding-custom-environment-variables/"}),"Adding Custom Environment Variables")," @ create-react-app"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"https://create-react-app.dev/docs/using-https-in-development/"}),"Using HTTPS in Development")," @ create-react-app")))}p.isMDXComponent=!0},183:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return j}));var o=t(0),a=t.n(o);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},l=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),l=p(t),u=o,j=l["".concat(i,".").concat(u)]||l[u]||d[u]||c;return t?a.a.createElement(j,b(b({ref:n},s),{},{components:t})):a.a.createElement(j,b({ref:n},s))}));function j(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=u;var b={};for(var r in n)hasOwnProperty.call(n,r)&&(b[r]=n[r]);b.originalType=e,b.mdxType="string"==typeof e?e:o,i[1]=b;for(var s=2;s<c;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);