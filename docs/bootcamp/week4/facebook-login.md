---
title: '在 React 中實作 Facebook Login'
sidebar_label: '實作 Facebook Login'
keywords:
  - OAuth2
  - Facebook Login
---

## 建立 Facebook 開發者帳號與應用程式

- [建立 Facebook 應用程式](https://developers.facebook.com/apps/)
- 打造互聯體驗
- 為應用程式新增產品
  - Facebook 登入
- 網站

## 實作 Facebook Login

### STEP 1：載入 Facebook SDK

```jsx title="./src/App.js"
useEffect(() => {
  // 載入 Facebook SDK
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
}, []);
```

### STEP 2：初始化 Facebook SDK

##### keywords: `window.fbAsyncInit`, `window.FB.init()`

在載入 Facebook SDK 後還不能直接使用，需要先將 Facebook SDK 進行初始化（initialization）。由於 Facebook SDK 載入完成後會立即觸發 `window.fbAsyncInit` 的方法，因此我們在 `window.fbAsyncInit = function() {}` 中先初始化 Facebook SDK：

使用 FB SDK 所提供的方法：

```jsx title="./src/App.js"
useEffect(() => {
  // SDK 載入完成時會立即呼叫 fbAsyncInit，在這個函式中對 Facebook SDK 進行初始化
  window.fbAsyncInit = function () {
    // 初始化 Facebook SDK
    window.FB.init({
      appId: process.env.REACT_APP_FB_APP_ID,
      cookie: true,
      xfbml: true,
      version: process.env.REACT_APP_FB_APP_VERSION,
    });

    console.log('[fbAsyncInit] after window.FB.init');
    window.FB.AppEvents.logPageView();
  };

  // 載入 Facebook SDK
  // ...
}, []);
```

:::tip
由於 FB 這個變數是透過 Facebook SDK 由瀏覽器的 window 載入，因此使用時需呼叫 `window.FB`，ESLint 才不會出現 `FB' is not defined` 的錯誤：
:::

### STEP 3：取得使用者當前登入狀態

##### keywords: `FB.getLoginStatus()`

在 Facebook SDK 初始化後，就可以透過 `FB.getLoginStatus` 來取得使用者的登入狀態。由於和初始化是不同的邏輯，因此可以拆成另一個 `useEffect` 來寫，又因為 `FB.getLoginStatus` 一定要在 Facebook SDK 初始化後才能被呼叫（否則會噴錯），因此可以透過剛剛建立好的 `isFBInitialized` 來進行判斷：

```jsx {14-17} title="./src/App.js"
useEffect(() => {
  // SDK 載入完成時會立即呼叫 fbAsyncInit，在這個函式中對 Facebook SDK 進行初始化
  window.fbAsyncInit = function () {
    // 初始化 Facebook SDK
    window.FB.init({
      appId: process.env.REACT_APP_FB_APP_ID,
      cookie: true,
      xfbml: true,
      version: process.env.REACT_APP_FB_APP_VERSION,
    });

    console.log('[fbAsyncInit] after window.FB.init');

    // 取得使用者登入狀態
    window.FB.getLoginStatus(function (response) {
      console.log('[refreshLoginStatus]', response);
    });

    window.FB.AppEvents.logPageView();
  };

  // 載入 Facebook SDK
  // ...
}, []);
```

在 response 物件中會取得 `authResponse` 和 `status` 這兩個屬性，長得可能會像這樣：

```json
// 若 status 不是 connected 的話，authResponse 將會是 null
{
  "authResponse": {
    "accessToken": "<access_token>",
    "userID": "<user_id>",
    "expiresIn": 6650,
    "signedRequest": "<signed_request>",
    "graphDomain": "facebook",
    "data_access_expiration_time": 1619194150
  },
  "status": "connected"
}
```

根據[官方文件](https://developers.facebook.com/docs/facebook-login/web?locale=zh_TW)所述， `status` 可以分成：

- `connected`：已登入 Facebook 與網頁
- `not_authorized`：已登入 Facebook 但未登入網頁
- `unknown`：未登入 Facebook，或呼叫 `FB.logout()` 後

如果 `status` 是 `connected` 的話，則可以在 `authResponse` 中進一步取得：

- `accessToken`：中文翻譯叫「存取權杖」，可以想像成是「使用者」借給「網頁」的一把鑰匙，後續當「網頁」要向「Facebook」存取「使用者」的資料時都需要使用到這把鑰匙
- `expiresIn`：存取權杖過期的時間戳記，也就是這把鑰匙借到什麼時候為止，超過就要重新申請，也就是使用者需要重新進行 Facebook 登入
- `userID`：使用者的 ID

### STEP 4：使用者登入

##### keywords: `FB.login()`

如果使用者尚未登入的話，即可透過呼叫 `FB.login()` 來讓使用者登入，呼叫此方法時，瀏覽器會跳出對話框供使用者進行登入。

在 `FB.login()` 的第二個參數中可以帶入希望使用者提供的權限（scope）有哪些，預設就會包含登入者的姓名和大頭貼照；而 `email` 和公開資料（`public_profile`） 則是不需要額外申請即可使用的權限；其餘的權限則都需要在 Facebook 開發者後台額外向 Facebook 進行申請。

```js
// 使用 Facebook 登入
FB.login(
  function (response) {
    // 取得使用者登入的情況
  },
  { scope: 'public_profile,email' }
);
```

呼叫 `FB.login()` 後，瀏覽器即會跳出登入視窗，透過 `response` 可以了解使用者登入的情況，這個 `response` 回傳的內容和剛剛呼叫 `FB.getLoginStatus()` 時取得的 response 物件內容是一樣的，因此可以由此判斷使用者是否已經登入。

下面先建立一個按鈕，並在按鈕被點擊時觸發 `FB.login()` 方法：

```jsx title="./src/App.js"
const App = () => {
  // ...
  const handleFBLogin = () => {
    // 跳出 Facebook 登入的對話框
    window.FB.login(
      function (response) {
        console.log('handleFBLogin', response);
      },
      { scope: 'public_profile,email' }
    );
  };

  // ...
  return (
    <div>
      <button onClick={handleFBLogin}>Facebook Login</button>
    </div>
  );
};
```

### STEP 5：使用者登出

##### keywords: `FB.logout()`

當使用者需要登出時，和登入的方法相似，只需要呼叫 `FB.logout()` 即可，在登出後一樣會取得 response 物件，可以以此物件更新在 App 元件中的 `authResponse` 狀態。

```jsx title="./src/App.js"
const App = () => {
  // ...
  // 使用者登出
  const handleFBLogout = () => {
    window.FB.logout(function (response) {
      console.log('handleFBLogout', response);
    });
  };

  // ...
};
```

### STEP 6：保留使用者的登入狀態

由於在 STEP 4 呼叫 `FB.getLoginStatus()` 後，以及 STEP 6 呼叫 `FB.Login()` 後都可以取得使用者的登入狀態，我們可以用這個來判斷使用者是否已經登入，因此這裡同樣定義一個 state 來保存使用者的登入狀態：

```jsx {1,12,30,41} title="./src/App.js"
const [authResponse, setResponse] = useState();

useEffect(() => {
  // SDK 載入完成時會立即呼叫 fbAsyncInit，在這個函式中對 Facebook SDK 進行初始化
  window.fbAsyncInit = function () {
    // 初始化 Facebook SDK
    // ...

    // 取得使用者登入狀態
    window.FB.getLoginStatus(function (response) {
      console.log('[refreshLoginStatus]', response);
      setResponse(response);
    });

    window.FB.AppEvents.logPageView();
  };

  // 載入 Facebook SDK
  // ...
}, []);

// 使用者點擊登入
const handleFBLogin = () => {
  if (!isFBInitialized) {
    return;
  }
  window.FB.login(
    function (response) {
      console.log('handleFBLogin', response);
      setResponse(response);
    },
    { scope: 'public_profile,email' }
  );
};

// 使用這點擊登出
const handleFBLogout = () => {
  // ...
  window.FB.logout(function (response) {
    console.log('handleFBLogout', response);
    setResponse(response);
  });
};
```

### STEP 7：透過 Graph API 取得使用者資訊

##### keywords: `FB.api()`

除了可以判斷使用者是否成功透過 Facebook 登入外，在登入之後，可以使用 Facebook 提供的 [Graph API](https://developers.facebook.com/docs/graph-api/overview) 來取得使用者相關的資訊。Graph API 能夠取得的資料將取決於使用者授權網頁存取的權限範圍。

在沒有額外申請其他 Facebook 權限的情況下，可以透過 `/me` 來取得使用者名稱和 id：

```js
window.FB.api('/me', function (response) {
  // response 會包含 name 和 id
});
```

若希望取得其他資訊，例如 name, email 等其他公開資料，則可以使用：

```js
// fields 中是帶入字串
window.FB.api('/me', 'GET', { fields: 'name,email' }, function (response) {
  // response 會包含 name 和 id
});
```

:::info
若需獲取更多使用者資訊，可進一步參考[使用圖形 API](https://developers.facebook.com/docs/graph-api/using-graph-api/)。
:::

## 整合 Facebook Login 與 App

最後只需要將登入（`handleFBLogin`）和登出（`handleFBLogout`）的方法，分別傳到 `views/Login` 和 `components/Footer.js` 中。

```jsx {14,17} title="src/App.js"
const App = () => {
  // ..

  const isAtLogin = useRouteMatch('/login');

  if (!response) {
    return <></>;
  }

  if (response.status !== 'connected' && !isAtLogin) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          {response.status === 'connected' ? (
            <Redirect to="/todos" />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/login">
          <Login handleFBLogin={handleFBLogin} status={response.status} />
        </Route>
        <Route path="/todos">
          <TodoApp handleFBLogout={handleFBLogout} />
        </Route>
      </Switch>
    </div>
  );
};
```

```jsx {1} title="src/components/Login.js"
const Login = ({ status, handleFBLogin }) => {
  if (status === 'connected') {
    return <Redirect to="/todos" />;
  }

  return (
    <Container foo="bar">
      <Title>登入 Todo </Title>
      <Button className="btn-reset" onClick={handleFBLogin}>
        使用 Facebook 登入
      </Button>
    </Container>
  );
};
```

```jsx {1,5} title="src/components/Footer.js"
const Footer = ({ numOfTodos, handleFBLogout }) => {
  return (
    <Container>
      <p>剩餘項目數：{numOfTodos}</p>
      <LogoutBtn className="btn-reset" onClick={handleFBLogout}>
        登出
      </LogoutBtn>
    </Container>
  );
};
```

## 補充：伺服器端

### 取得應用程式權杖

> [取得應用程式權杖](https://developers.facebook.com/docs/facebook-login/access-tokens/#apptokens)

```bash
$ curl -X GET "https://graph.facebook.com/oauth/access_token ?client_id={your-app-id} &client_secret={your-app-secret} &grant_type=client_credentials"
```

或

```bash
curl -i -X GET "https://graph.facebook.com/{api-endpoint}&access_token={your-app_id}|{your-app_secret}"
```

### 檢查使用者存取權杖

> [檢查存取權杖](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow#checktoken)

- input_toke 指的是使用者端登入後在 `authResponse` 中的 access_token
- access_token 指的是根據上一個段落取得的應用程式存取權杖

```http
GET graph.facebook.com/debug_token?
     input_token={token-to-inspect}
     &access_token={app-token-or-admin-token}
```

## 參考

- [搭配 JavaScript SDK 的網頁版「Facebook 登入」](https://developers.facebook.com/docs/facebook-login/web?locale=zh_TW) @ Facebook Developers
- [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/) @ create-react-app
- [Using HTTPS in Development](https://create-react-app.dev/docs/using-https-in-development/) @ create-react-app
