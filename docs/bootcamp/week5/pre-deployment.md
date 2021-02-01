---
title: '部署前的準備'
keywords:
  - create-react-app
  - deployment
  - gh-pages
---

### STEP 1：修改 baseURL

```js title="src/api/todos"
const baseURL = 'https://todo-mvc.herokuapp.com/api/v1';
```

### STEP 2：將 facebookClientToken 保存在 localStorage

當使用者登入後，將 Facebook 回傳的 token 保存在 localStorage 中

```js
localStorage.setItem(
  'facebookClientToken',
  response?.authResponse?.accessToken
);
```

### STEP 3：在傳送 API request 的 header 中帶入 token

```js {3-5} title="src/api/todos"
export const getTodos = () => {
  return fetch(`${baseURL}/todos/`, {
    headers: {
      'Facebook-Client-Token': localStorage.getItem('facebookClientToken'),
    },
  }).then((res) => res.json());
};
```

### STEP 4：修改 `patchTodo()` 的參數

在每一次呼叫 `patchTodo()` 時都要帶入 `id`, `title` 和 `isDone`：

```js
await patchTodo({
  id,
  title: currentTodo.title,
  isDone: !currentTodo.isDone,
});
```

### STEP 5：改用 HashRouter

由於 Github Pages 並沒有辦法幫我們實際處理路由的改變，因此需改用 `HashRouter`：

```jsx {1,5} title="src/index.js"
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```

### STEP 6

參考[下一篇文章](deployment.md)，將專案部署到 Github Pages 上

### STEP 7：修改 Facebook Developer 上的網址

回到 Facebook Developer 修改網址。
