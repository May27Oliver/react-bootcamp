---
title: 'create-react-app 前置設定'
sidebar_label: 'CRA 前置設定'
keywords:
  - create-react-app
---

## 在 create-react-app 中使用 .env 設定環境變數

> [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/) @ create-react-app

### 建立環境變數

在根目錄建立 `.env` 的檔案：

```text title=".env"
REACT_APP_FB_APP_ID=904503003705537
REACT_APP_FB_APP_VERSION="v9.0"
```

:::caution
由於 .env 的環境變數是透過 create-react-app 來協助讀取，因此環境變數的名稱一定要以 `REACT_APP` 作為前綴，否則將無法在 React 元件中被使用。
:::

### 在 React 元件中使用環境變數

接著只需要在 React 元件中，透過 `process.env.REACT_APP_FOO_BAR` 即可使用在 `.env` 中設定的環境變數：

```jsx title="./src/App.js"
useEffect(() => {
  console.log('fb app id', process.env.REACT_APP_FB_APP_ID);
  console.log('fb app version', process.env.REACT_APP_FB_APP_VERSION);
}, []);
```

:::danger
一般來說 `.env` 的檔案會被包含在 .gitignore 中，因此不會進到 git 被進行版控，也不會推到 Github 上被看到，但因為 React 本身仍屬於前端專案，所有內容都會在瀏覽器被載入，因此千萬不要在 .env 中放置任何密碼（private key, secret），因為這些密碼仍會暴露於打包後的程式碼中。
:::

### 在 HTML 中使用環境變數

在 HTML 中若想使用環境變數，可以使用 `%REACT_APP_FOO_BAR%` 的方式，例如：

```html
<title>%REACT_APP_WEBSITE_NAME%</title>
```

## 在 create-react-app 開發環境中使用 HTTPS

> [Using HTTPS in Development](https://create-react-app.dev/docs/using-https-in-development/) @ create-react-app

由於 Facebook Login 僅支援 HTTPS，因此我們必須在開發環境啟用 HTTPS 的服務，這個部分 create-react-app 也處理好了。只許要把 `package.json` 中 `npm start` 的指令修改成：

```json title="package.json"
"scripts": {
  "start": "HTTPS=true react-scripts start"
}
```

或者可以在 `.env` 中加入環境變數：

```text title=".env"
HTTPS=true
```

接著一樣透過 `npm start` 啟動專案後，即可在開發模式下啟動 HTTPS。由於這個 SSL 憑證是自己簽署的（self-signed certificate），並沒有經過第三方機構的驗證，因此瀏覽器會跳出 Insecure 的警示，只需要點 Advanced 後按繼續即可：

![facebook-login-with-react](https://i.imgur.com/WL4AnO1.png)

## 使用 absolute import

> [Absolute Imports](https://create-react-app.dev/docs/importing-a-component/#absolute-imports) @ create-react-app > Importing a Component

在根目錄建立 `jsconfig.json`：

```js title="jsconfig.json"
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": [
    "src"
  ]
}
```
