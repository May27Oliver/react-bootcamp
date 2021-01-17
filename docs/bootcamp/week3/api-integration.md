---
title: '與後端 API 整合'
keywords:
  - React Component
  - useEffect
  - API
---

## 建立 json-server

[json-server](https://www.npmjs.com/package/json-server) 可以幫助前端工程師提早進行開發，只需要與後端討論好資料格式後即可開始動工。

### 安裝 json server

```bash
$ npm install json-server
```

### 建立 JSON DB

在專案根目錄建立 `db.json`，並帶入預期的資料格式：

```js title="db.json"
{
  "todos": [
    {
      "id": "f469b184-97df-4995-9851-5b65d074ed3c",
      "title": "編輯 Todo 項目",
      "isDone": false,
      "isEdit": false
    },
    {
      "id": "a507d859-8ee5-4260-beee-3e0eac2a5124",
      "title": "了解 useEffect 的基本使用",
      "isDone": false,
      "isEdit": false
    },
    {
      "id": "69a8fd73-9238-415d-9138-b3a2dbfb94e6",
      "title": "自動 focus（useRef）",
      "isDone": false,
      "isEdit": false
    }
  ]
}
```

### 使用 Restful API 即可對 Todos 進行 CRUD

```text
GET    /todos
GET    /todos/1
POST   /todos
PUT    /todos/1
PATCH  /todos/1
DELETE /todos/1
```

## 透過 fetch 來呼叫 API

使用瀏覽器原生的 [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) 方法來呼叫後端提供的 API

```js title="/src/api/todos.js"
const baseURL = 'http://localhost:3001';

export const getTodos = () => {
  return fetch(`${baseURL}/todos`).then((res) => res.json());
};

export const createTodo = (payload) => {
  const { title, isDone, isEdit } = payload;
  return fetch(`${baseURL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      isDone,
      isEdit,
    }),
  }).then((res) => res.json);
};

export const deleteTodo = (id) => {
  return fetch(`${baseURL}/todos/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json);
};

export const editTodo = (id, payload) => {
  const { title, isDone, isEdit } = payload;
  return fetch(`${baseURL}/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      isDone,
      isEdit,
    }),
  }).then((res) => res.json);
};
```

測試 API 是否都能正常運作：

```jsx title="src/App.js"
useEffect(() => {
  getTodos().then((data) => console.log('data', data));

  createTodo({
    title: 'foobar',
    isDone: false,
    isEdit: false,
  }).then((data) => console.log('data', data));

  deleteTodo('FsfWdWU');

  editTodo('50BnTuY', {
    title: 'foobar',
    isDone: false,
    isEdit: false,
  });
}, []);
```

### Get Todos

## 參考資料

- [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) @ MDN
- [json-server](https://www.npmjs.com/package/json-server) @ npm
