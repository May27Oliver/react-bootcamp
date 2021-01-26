---
title: '在不同頁面間切換'
keywords:
  - useEffect
  - styled-components
---

## 將原本的 App 拆成兩個頁面

原本在 `App.js` 中包含 Todo，現在建立 `views` 資料夾，在這裡面分別建立 `TodoApp.js` 和 `Login.js` 這兩個檔案：

```text
src/views
├── Login.js
└── TodoApp.js
```

### views/TodoApp.js 和 components/Footer.js

接著把原本寫在 `App.js` 中的內容搬一份到 `src/views/TodoApp.js` 中（內容幾乎一樣，就不重複撰寫）。

接著在原本 Footer.js 加一個登出的按鈕，一樣透過 styled-components 進行樣式的修改：

```jsx title="src/components/Footer.js"
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const LogoutBtn = styled.button`
  font-size: 14px;
  font-weight: 300;
  margin: 2rem 0 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = ({ numOfTodos }) => (
  <Container>
    <p>剩餘項目數：{numOfTodos}</p>
    <LogoutBtn className="btn-reset">登出</LogoutBtn>
  </Container>
);

export default Footer;
```

### Login.js

這裡我們使用 [styled-components](https://styled-components.com/docs) 來進行樣式的撰寫。因此先下載 styled-components：

```shell
$ npm install --save styled-components
```

接著建立登入頁面：

```jsx title="/src/views/login.js"
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 2rem 0;
`;

const Button = styled.button`
  background: #1877f2;
  color: white;
  min-width: 200px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
  padding: 6px 0;
  margin: 2rem 0;

  &:hover {
    background: #385898;
  }
`;

const Login = () => {
  return (
    <Container>
      <Title>登入 Todo</Title>
      <Button className="btn-reset"> 使用 Facebook 登入 </Button>
    </Container>
  );
};

export default Login;
```

## 建立 currentPage 狀態以切換頁面

現就就可以透過建立一個 state 來達到切換頁面的目的：

```jsx title="./src/App.js"
const App = () => {
  const [currentPage, setCurrentPage] = useState('Login');
  return (
    <div className="app">
      {currentPage === 'Login' && <Login />}
      {currentPage === 'TodoApp' && <TodoApp />}
    </div>
  );
};
```

## 整合 react-router

安裝 [react-router-dom](https://reactrouter.com/web/example/basic)：

```bash
$ npm install --save react-router-dom
```

```jsx title="src/index.js"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```

```jsx title="src/App.js"
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
const App = () => {
  // ...
  const isLogin = false;

  const isAtLogin = useRouteMatch('/login');

  if (!isLogin && !isAtLogin) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          {isLogin ? <Redirect to="/todos" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/todos">
          <TodoApp />
        </Route>
      </Switch>
    </div>
  );
};
```

## 參考資料

- [The magic behind styled-components](https://mxstbr.blog/2016/11/styled-components-magic-explained/)
