(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),a=(n(0),n(162)),s={title:"\u8207\u5f8c\u7aef API \u6574\u5408",keywords:["React Component","useEffect","API"]},c={unversionedId:"bootcamp/week3/api-integration",id:"bootcamp/week3/api-integration",isDocsHomePage:!1,title:"\u8207\u5f8c\u7aef API \u6574\u5408",description:"\u5efa\u7acb json-server",source:"@site/docs/bootcamp/week3/api-integration.md",slug:"/bootcamp/week3/api-integration",permalink:"/react-bootcamp/docs/bootcamp/week3/api-integration",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/bootcamp/week3/api-integration.md",version:"current",sidebar:"bootcamp",previous:{title:"Todo MVC \u5c08\u6848\u9023\u7d50",permalink:"/react-bootcamp/docs/bootcamp/week2/todo-mvc"}},i=[{value:"\u5efa\u7acb json-server",id:"\u5efa\u7acb-json-server",children:[{value:"\u5b89\u88dd json server",id:"\u5b89\u88dd-json-server",children:[]},{value:"\u5efa\u7acb JSON DB",id:"\u5efa\u7acb-json-db",children:[]},{value:"\u4f7f\u7528 Restful API \u5373\u53ef\u5c0d Todos \u9032\u884c CRUD",id:"\u4f7f\u7528-restful-api-\u5373\u53ef\u5c0d-todos-\u9032\u884c-crud",children:[]}]},{value:"\u900f\u904e fetch \u4f86\u547c\u53eb API",id:"\u900f\u904e-fetch-\u4f86\u547c\u53eb-api",children:[{value:"Get Todos",id:"get-todos",children:[]}]},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",children:[]}],l={toc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u5efa\u7acb-json-server"},"\u5efa\u7acb json-server"),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com/package/json-server"}),"json-server")," \u53ef\u4ee5\u5e6b\u52a9\u524d\u7aef\u5de5\u7a0b\u5e2b\u63d0\u65e9\u9032\u884c\u958b\u767c\uff0c\u53ea\u9700\u8981\u8207\u5f8c\u7aef\u8a0e\u8ad6\u597d\u8cc7\u6599\u683c\u5f0f\u5f8c\u5373\u53ef\u958b\u59cb\u52d5\u5de5\u3002"),Object(a.b)("h3",{id:"\u5b89\u88dd-json-server"},"\u5b89\u88dd json server"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install json-server\n")),Object(a.b)("h3",{id:"\u5efa\u7acb-json-db"},"\u5efa\u7acb JSON DB"),Object(a.b)("p",null,"\u5728\u5c08\u6848\u6839\u76ee\u9304\u5efa\u7acb ",Object(a.b)("inlineCode",{parentName:"p"},"db.json"),"\uff0c\u4e26\u5e36\u5165\u9810\u671f\u7684\u8cc7\u6599\u683c\u5f0f\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'title="db.json"',title:'"db.json"'}),'{\n  "todos": [\n    {\n      "id": "f469b184-97df-4995-9851-5b65d074ed3c",\n      "title": "\u7de8\u8f2f Todo \u9805\u76ee",\n      "isDone": false,\n      "isEdit": false\n    },\n    {\n      "id": "a507d859-8ee5-4260-beee-3e0eac2a5124",\n      "title": "\u4e86\u89e3 useEffect \u7684\u57fa\u672c\u4f7f\u7528",\n      "isDone": false,\n      "isEdit": false\n    },\n    {\n      "id": "69a8fd73-9238-415d-9138-b3a2dbfb94e6",\n      "title": "\u81ea\u52d5 focus\uff08useRef\uff09",\n      "isDone": false,\n      "isEdit": false\n    }\n  ]\n}\n')),Object(a.b)("h3",{id:"\u4f7f\u7528-restful-api-\u5373\u53ef\u5c0d-todos-\u9032\u884c-crud"},"\u4f7f\u7528 Restful API \u5373\u53ef\u5c0d Todos \u9032\u884c CRUD"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"GET    /todos\nGET    /todos/1\nPOST   /todos\nPUT    /todos/1\nPATCH  /todos/1\nDELETE /todos/1\n")),Object(a.b)("h2",{id:"\u900f\u904e-fetch-\u4f86\u547c\u53eb-api"},"\u900f\u904e fetch \u4f86\u547c\u53eb API"),Object(a.b)("p",null,"\u4f7f\u7528\u700f\u89bd\u5668\u539f\u751f\u7684 ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}),"fetch")," \u65b9\u6cd5\u4f86\u547c\u53eb\u5f8c\u7aef\u63d0\u4f9b\u7684 API"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'title="/src/api/todos.js"',title:'"/src/api/todos.js"'}),"const baseURL = 'http://localhost:3001';\n\nexport const getTodos = () => {\n  return fetch(`${baseURL}/todos`).then((res) => res.json());\n};\n\nexport const createTodo = (payload) => {\n  const { title, isDone, isEdit } = payload;\n  return fetch(`${baseURL}/todos`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      title,\n      isDone,\n      isEdit,\n    }),\n  }).then((res) => res.json);\n};\n\nexport const deleteTodo = (id) => {\n  return fetch(`${baseURL}/todos/${id}`, {\n    method: 'DELETE',\n  }).then((res) => res.json);\n};\n\nexport const editTodo = (id, payload) => {\n  const { title, isDone, isEdit } = payload;\n  return fetch(`${baseURL}/todos/${id}`, {\n    method: 'PATCH',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      title,\n      isDone,\n      isEdit,\n    }),\n  }).then((res) => res.json);\n};\n")),Object(a.b)("p",null,"\u6e2c\u8a66 API \u662f\u5426\u90fd\u80fd\u6b63\u5e38\u904b\u4f5c\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/App.js"',title:'"src/App.js"'}),"useEffect(() => {\n  getTodos().then((data) => console.log('data', data));\n\n  createTodo({\n    title: 'foobar',\n    isDone: false,\n    isEdit: false,\n  }).then((data) => console.log('data', data));\n\n  deleteTodo('FsfWdWU');\n\n  editTodo('50BnTuY', {\n    title: 'foobar',\n    isDone: false,\n    isEdit: false,\n  });\n}, []);\n")),Object(a.b)("h3",{id:"get-todos"},"Get Todos"),Object(a.b)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}),"Using Fetch")," @ MDN"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.npmjs.com/package/json-server"}),"json-server")," @ npm")))}d.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,f=p["".concat(s,".").concat(u)]||p[u]||b[u]||a;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);