(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var o=n(3),a=n(7),r=(n(0),n(162)),s={title:"\u900f\u904e\u8207\u5f8c\u7aef API \u6574\u5408",keywords:["React Component","useEffect","API"]},c={unversionedId:"bootcamp/week3/api-integration",id:"bootcamp/week3/api-integration",isDocsHomePage:!1,title:"\u900f\u904e\u8207\u5f8c\u7aef API \u6574\u5408",description:"\u5efa\u7acb json-server",source:"@site/docs/bootcamp/week3/api-integration.md",slug:"/bootcamp/week3/api-integration",permalink:"/react-bootcamp/docs/bootcamp/week3/api-integration",editUrl:"https://github.com/pjchender/react-bootcamp/edit/main/docs/bootcamp/week3/api-integration.md",version:"current",sidebar:"bootcamp",previous:{title:"Todo MVC \u5c08\u6848\u9023\u7d50",permalink:"/react-bootcamp/docs/bootcamp/week2/todo-mvc"}},i=[{value:"\u5efa\u7acb json-server",id:"\u5efa\u7acb-json-server",children:[{value:"\u5b89\u88dd json server",id:"\u5b89\u88dd-json-server",children:[]},{value:"\u5efa\u7acb JSON DB",id:"\u5efa\u7acb-json-db",children:[]},{value:"\u4f7f\u7528 Restful API \u5373\u53ef\u5c0d Todos \u9032\u884c CRUD",id:"\u4f7f\u7528-restful-api-\u5373\u53ef\u5c0d-todos-\u9032\u884c-crud",children:[]}]},{value:"\u900f\u904e fetch \u4f86\u547c\u53eb API",id:"\u900f\u904e-fetch-\u4f86\u547c\u53eb-api",children:[{value:"Get Todos",id:"get-todos",children:[]},{value:"Update Todo",id:"update-todo",children:[]},{value:"Delete Todo",id:"delete-todo",children:[]},{value:"Add Todo",id:"add-todo",children:[]}]},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",children:[]}],d={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u5efa\u7acb-json-server"},"\u5efa\u7acb json-server"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com/package/json-server"}),"json-server")," \u53ef\u4ee5\u5e6b\u52a9\u524d\u7aef\u5de5\u7a0b\u5e2b\u63d0\u65e9\u9032\u884c\u958b\u767c\uff0c\u53ea\u9700\u8981\u8207\u5f8c\u7aef\u8a0e\u8ad6\u597d\u8cc7\u6599\u683c\u5f0f\u5f8c\u5373\u53ef\u958b\u59cb\u52d5\u5de5\u3002"),Object(r.b)("h3",{id:"\u5b89\u88dd-json-server"},"\u5b89\u88dd json server"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install json-server\n")),Object(r.b)("h3",{id:"\u5efa\u7acb-json-db"},"\u5efa\u7acb JSON DB"),Object(r.b)("p",null,"\u5728\u5c08\u6848\u6839\u76ee\u9304\u5efa\u7acb ",Object(r.b)("inlineCode",{parentName:"p"},"db.json"),"\uff0c\u4e26\u5e36\u5165\u9810\u671f\u7684\u8cc7\u6599\u683c\u5f0f\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'title="db.json"',title:'"db.json"'}),'{\n  "todos": [\n    {\n      "title": "\u5b78\u7fd2\u7de8\u8f2f\u7684\u65b9\u5f0f",\n      "isDone": false,\n      "id": 1\n    },\n    {\n      "title": "\u5b78\u7fd2 json-server",\n      "isDone": false,\n      "id": 2\n    },\n    {\n      "title": "\u5b78\u7fd2 useEffect",\n      "isDone": false,\n      "id": 3\n    }\n  ]\n}\n')),Object(r.b)("h3",{id:"\u4f7f\u7528-restful-api-\u5373\u53ef\u5c0d-todos-\u9032\u884c-crud"},"\u4f7f\u7528 Restful API \u5373\u53ef\u5c0d Todos \u9032\u884c CRUD"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"GET    /todos\nGET    /todos/1\nPOST   /todos\nPUT    /todos/1\nPATCH  /todos/1\nDELETE /todos/1\n")),Object(r.b)("h2",{id:"\u900f\u904e-fetch-\u4f86\u547c\u53eb-api"},"\u900f\u904e fetch \u4f86\u547c\u53eb API"),Object(r.b)("p",null,"\u4f7f\u7528\u700f\u89bd\u5668\u539f\u751f\u7684 ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}),"fetch")," \u65b9\u6cd5\u4f86\u547c\u53eb\u5f8c\u7aef\u63d0\u4f9b\u7684 API"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'title="/src/api/todos.js"',title:'"/src/api/todos.js"'}),"const baseURL = 'http://localhost:3001';\n\nexport const getTodos = () => {\n  return fetch(`${baseURL}/todos`).then((res) => res.json());\n};\n\nexport const createTodo = async (payload) => {\n  const { title, isDone } = payload;\n  const res = await fetch(`${baseURL}/todos`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      title,\n      isDone,\n    }),\n  });\n\n  return res.json();\n};\n\nexport const deleteTodo = async (id) => {\n  const res = await fetch(`${baseURL}/todos/${id}`, {\n    method: 'DELETE',\n  });\n\n  return await res.json();\n};\n\nexport const patchTodo = async (payload) => {\n  const { id, title, isDone } = payload;\n\n  const res = await fetch(`${baseURL}/todos/${id}`, {\n    method: 'PATCH',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      title,\n      isDone,\n    }),\n  });\n\n  return await res.json();\n};\n")),Object(r.b)("p",null,"\u6e2c\u8a66 API \u662f\u5426\u90fd\u80fd\u6b63\u5e38\u904b\u4f5c\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/App.js"',title:'"src/App.js"'}),"useEffect(() => {\n  getTodos().then((data) => console.log('data', data));\n\n  createTodo({\n    title: 'foobar',\n    isDone: false,\n  }).then((data) => console.log('data', data));\n\n  deleteTodo('FsfWdWU');\n\n  editTodo('50BnTuY', {\n    title: 'foobar',\n    isDone: false,\n  });\n}, []);\n")),Object(r.b)("h3",{id:"get-todos"},"Get Todos"),Object(r.b)("h4",{id:"\u5728-useeffect-\u4e2d\u4f7f\u7528-promise"},"\u5728 useEffect \u4e2d\u4f7f\u7528 Promise"),Object(r.b)("p",null,"\u5728 useEffect \u4e2d\u4f7f\u7528 Promise \u642d\u914d ",Object(r.b)("inlineCode",{parentName:"p"},".then()"),"\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/App.js"',title:'"src/App.js"'}),"useEffect(() => {\n  getTodos().then((todos) => {\n    setTodos(\n      todos.map((todo) => ({\n        ...todo,\n        isEdit: false,\n      }))\n    );\n  });\n}, []);\n")),Object(r.b)("h4",{id:"\u5728-useeffect-\u4e2d\u4f7f\u7528-async"},"\u5728 useEffect \u4e2d\u4f7f\u7528 async"),Object(r.b)("p",null,"\u4f7f\u7528 async function\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/App.js',title:'"src/App.js'}),"useEffect(() => {\n  const fetchTodos = async () => {\n    const todos = await getTodos();\n\n    setTodos(\n      todos.map((todo) => ({\n        ...todo,\n        isEdit: false,\n      }))\n    );\n  };\n\n  fetchTodos();\n}, []);\n")),Object(r.b)("h3",{id:"update-todo"},"Update Todo"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="/src/App.js"',title:'"/src/App.js"'}),"const handleToggleIsDone = (id) => async () => {\n  const currentTodo = todos.find((t) => t.id === id);\n  await patchTodo({\n    id,\n    isDone: !currentTodo.isDone,\n  });\n\n  setTodos((prevTodos) =>\n    prevTodos.map((todo) => {\n      if (todo.id !== id) {\n        return todo;\n      } else {\n        return {\n          ...todo,\n          isDone: !todo.isDone,\n        };\n      }\n    })\n  );\n};\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/App.js"',title:'"src/App.js"'}),"const handleSave = async (payload) => {\n  const { id, title } = payload;\n  await patchTodo({\n    id,\n    title,\n  });\n\n  setTodos((prevTodos) =>\n    prevTodos.map((todo) => {\n      if (todo.id !== id) {\n        return todo;\n      }\n      return { ...todo, title, isEdit: false };\n    })\n  );\n};\n")),Object(r.b)("h3",{id:"delete-todo"},"Delete Todo"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/App"',title:'"src/App"'}),"const handleDelete = (id) => async () => {\n  await deleteTodo(id);\n\n  setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));\n};\n")),Object(r.b)("h3",{id:"add-todo"},"Add Todo"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="src/App.js',title:'"src/App.js'}),"const handleAddTodo = async () => {\n  if (inputValue.length === 0) {\n    return;\n  }\n\n  const data = await createTodo({\n    title: inputValue,\n    isDone: false,\n  });\n\n  setTodos((prevTodos) => {\n    return [\n      ...prevTodos,\n      {\n        ...data,\n        isEdit: false,\n      },\n    ];\n  });\n\n  setInputValue('');\n};\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const handleKeyPress = async (event) => {\n  if (event.key !== 'Enter') {\n    return;\n  }\n\n  if (inputValue.length === 0) {\n    return;\n  }\n\n  const data = await createTodo({\n    title: inputValue,\n    isDone: false,\n  });\n\n  setTodos((prevTodos) => {\n    return [\n      ...prevTodos,\n      {\n        ...data,\n        isEdit: false,\n      },\n    ];\n  });\n\n  setInputValue('');\n};\n")),Object(r.b)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}),"Using Fetch")," @ MDN"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.npmjs.com/package/json-server"}),"json-server")," @ npm"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://overreacted.io/a-complete-guide-to-useeffect/"}),"A Complete Guide to useEffect")," @ overreacted")))}l.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,j=p["".concat(s,".").concat(u)]||p[u]||b[u]||r;return n?a.a.createElement(j,c(c({ref:t},d),{},{components:n})):a.a.createElement(j,c({ref:t},d))}));function j(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var d=2;d<r;d++)s[d]=n[d];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);