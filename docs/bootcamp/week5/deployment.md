---
title: '將專案部署到 GitHub Pages'
keywords:
  - create-react-app
  - deployment
  - gh-pages
---

## STEP 1：在 package.json 設定 homepage

:::caution
這是非常重要的一步，設錯的話畫面將沒辦法正確顯示。
:::

如果僅是 Github 中的某一個專案：

```json
"homepage": "https://myusername.github.io/my-app",
```

如果是 Github 中的主要專案：

```json
"homepage": "https://myusername.github.io",
```

## STEP 2：安裝 gh-pages

```bash
$ npm install --save gh-pages
```

接著在 `package.json` 中加上 `predeploy` 和 `deploy` 的指令。

如果是 Github 帳號中的單一專案（網址會是：`https://<username>.github.io/<project-name>`），那個加上這段指令：

```json {2-3}
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

如果要部署的是 Github 帳號中的主要頁（網址會是 `https://<username>.github.io`，且專案名稱就會是 `<username>.github.io`），則加上這段指令：

```json {2-3}
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -b master -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

### STEP 3：透過 npm 進行發布

```bash
$ npm run deploy
```

### STEP 4：到 Github 專案中開啟 gh-pages

在專案導覽列中可以找到 Settings，點進去後可以看到 Github Pages 的區塊，若尚未開啟，則將其開啟：

![Imgur](https://i.imgur.com/TnvrYnL.png)

## 資料來源

- [8-1 將「臺灣好天氣」部署到 Github Pages](https://pjchender.github.io/react-bootcamp/docs/book/ch8/8-1) @ 從 Hooks 開始，讓你的網頁 React 起來
- [Deployment > GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages) @ Create React App
