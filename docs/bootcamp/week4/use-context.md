---
title: '透過 useContext 讓狀態可以被每個元件存取'
sidebar_label: 'useContext'
keywords:
  - useContext
---

## 建立 Context

在 src 資料夾中新增 `contexts` 資料夾，並建立 `AuthContext.js`：

```js title="src/contexts/AuthContext.js"
import { createContext } from 'react';

const AuthContext = createContext({
  status: null,
  authResponse: null,
  handleFBLogin: null,
  handleFBLogout: null,
});

export default AuthContext;
```

## 將資料傳入 Provider 中

由於 AuthContext 的資料主要會在 `App` 元件中透過 `useFacebookLogin` 取得，因此在 `App.js` 中將這些資料灌入 Provider 中：

```jsx title="src/App.js"
import AuthContext from 'contexts/AuthContext';
function App() {
  // ...
  return (
    <AuthContext.Provider
      value={{
        status: response.status,
        authResponse: response.authResponse,
        handleFBLogin,
        handleFBLogout,
      }}
    >
      {/* ... */}
    </AuthContext.Provider>
  );
}
```

## 取用 Context 中的內容

在 Footer 中有使用了 `handleFBLogout` 的方法，它原本是先從 App 傳到 TodoApp 再傳到 Footer 元件內，現在我們可以直接從 Footer 元件中，透過 `useContext` 取得這個方法：

```jsx title="src/components/Footer.js"
import { useContext } from 'react';
import AuthContext from 'contexts/AuthContext';

const Footer = ({ numOfTodos }) => {
  const auth = useContext(AuthContext);

  return (
    <Container>
      <p>剩餘項目數：{numOfTodos}</p>
      <LogoutBtn className="btn-reset" onClick={auth.handleFBLogout}>
        登出
      </LogoutBtn>
    </Container>
  );
};
```

```jsx title="src/views/Login.js"
import AuthContext from 'contexts/AuthContext';
import { useContext } from 'react';

const Login = () => {
  const auth = useContext(AuthContext);

  if (auth.status === 'connected') {
    return <Redirect to="/todos" />;
  }

  return (
    <Container>
      <Title>登入 Todo</Title>
      <Button className="btn-reset" onClick={auth.handleFBLogin}>
        {' '}
        使用 Facebook 登入{' '}
      </Button>
    </Container>
  );
};
```
