---
title: '透過與後端 API 整合'
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
      "title": "學習編輯的方式",
      "isDone": false,
      "id": 1
    },
    {
      "title": "學習 json-server",
      "isDone": false,
      "id": 2
    },
    {
      "title": "學習 useEffect",
      "isDone": false,
      "id": 3
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

export const createTodo = async (payload) => {
  const { title, isDone } = payload;
  const res = await fetch(`${baseURL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      isDone,
    }),
  });

  return res.json();
};

export const deleteTodo = async (id) => {
  const res = await fetch(`${baseURL}/todos/${id}`, {
    method: 'DELETE',
  });

  return await res.json();
};

export const patchTodo = async (payload) => {
  const { id, title, isDone } = payload;

  const res = await fetch(`${baseURL}/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      isDone,
    }),
  });

  return await res.json();
};
```

測試 API 是否都能正常運作：

```jsx title="src/App.js"
useEffect(() => {
  getTodos().then((data) => console.log('data', data));

  createTodo({
    title: 'foobar',
    isDone: false,
  }).then((data) => console.log('data', data));

  deleteTodo('FsfWdWU');

  editTodo('50BnTuY', {
    title: 'foobar',
    isDone: false,
  });
}, []);
```

### Get Todos

#### 在 useEffect 中使用 Promise

在 useEffect 中使用 Promise 搭配 `.then()`：

```jsx title="src/App.js"
useEffect(() => {
  getTodos().then((todos) => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        isEdit: false,
      }))
    );
  });
}, []);
```

#### 在 useEffect 中使用 async

使用 async function：

```jsx title="src/App.js
useEffect(() => {
  const fetchTodos = async () => {
    const todos = await getTodos();

    setTodos(
      todos.map((todo) => ({
        ...todo,
        isEdit: false,
      }))
    );
  };

  fetchTodos();
}, []);
```

### Delete Todo

```jsx title="src/App"
const handleDelete = (id) => async () => {
  await deleteTodo(id);

  setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};
```

### Update Todo

切換 `isDone` 狀態時呼叫 API

```jsx title="/src/App.js"
const handleToggleIsDone = (id) => async () => {
  const currentTodo = todos.find((t) => t.id === id);
  await patchTodo({
    id,
    isDone: !currentTodo.isDone,
  });

  setTodos((prevTodos) =>
    prevTodos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      } else {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
    })
  );
};
```

當使用者「完成編輯」時呼叫 API：

```jsx title="src/App.js"
const handleSave = async (payload) => {
  const { id, title } = payload;
  await patchTodo({
    id,
    title,
  });

  setTodos((prevTodos) =>
    prevTodos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      return { ...todo, title, isEdit: false };
    })
  );
};
```

### Add Todo

當使用者點擊「新增」按鈕時呼叫 API：

```jsx title="src/App.js
const handleAddTodo = async () => {
  if (inputValue.length === 0) {
    return;
  }

  const data = await createTodo({
    title: inputValue,
    isDone: false,
  });

  setTodos((prevTodos) => {
    return [
      ...prevTodos,
      {
        ...data,
        isEdit: false,
      },
    ];
  });

  setInputValue('');
};
```

當使用者點擊「Enter」按鍵時呼叫 API：

```jsx
const handleKeyPress = async (event) => {
  if (event.key !== 'Enter') {
    return;
  }

  if (inputValue.length === 0) {
    return;
  }

  const data = await createTodo({
    title: inputValue,
    isDone: false,
  });

  setTodos((prevTodos) => {
    return [
      ...prevTodos,
      {
        ...data,
        isEdit: false,
      },
    ];
  });

  setInputValue('');
};
```

## 參考資料

- [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) @ MDN
- [json-server](https://www.npmjs.com/package/json-server) @ npm
- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) @ overreacted
