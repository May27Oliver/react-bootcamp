---
slug: /book
id: 'create-react-app'
title: 'CRA v4 建立專案方式異動'
sidebar_label: 'CRA 建立專案方式異動'
keywords:
  - create react app
  - errata
  - react hooks
---

:::caution 異動章節

- 4-2 認識專案資料夾結構與檔案下載
- 8-2 將網頁變成手機 Web App

:::

由於書籍撰寫時 Create React App 使用的是 v3，產生的專案預設就會有 Progressive Web App（PWA）的功能，而在最新 v4 版本的 [Create React App](https://github.com/facebook/create-react-app)，需要額外指定模板後才會有帶有 PWA 的功能。

因此在書中「5-2 認識專案資料夾結構與檔案下載」中，麻煩改用專案的方式改用下述指令建立專案：

```bash
# <my-app> 請換成專案想取的名稱
$ npx create-react-app <my-app> --template cra-template-pwa
```

## 參考說明

- [Making a Progressive Web App](https://create-react-app.dev/docs/making-a-progressive-web-app/) @ Create React App
