---
slug: /book
id: 'react-version'
title: 'React 17'
sidebar_label: 'React 17 異動'
keywords:
  - create react app
  - errata
  - react hooks
---

:::caution 異動章節

- 5-4 頁面載入時就去請求資料 - useEffect 的基本使用

:::

在本書撰寫時使用的是 React v16，目前 React 已經更新到 v17，因此若你使用的是新版的 create-react-app 所建立的專案，均會安裝 v17 的 React。

React v17 和 v16 並沒有重大改變，也就是說你在本書中所學到的語法均可以在 v17 中繼續使用，但仍有些在不影響撰寫時的差異，以下列出幾點目前在閱讀本書時因為版本差異讀者可能有的疑惑：

- 在 [React 17](https://zh-hant.reactjs.org/blog/2020/10/20/react-v17.html) 中，支援 [New JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)，即使沒有在檔案最上方使用 `import React from 'react'` 仍可撰寫 React Components。
- 在 [React 17](https://zh-hant.reactjs.org/blog/2020/10/20/react-v17.html) 中使用 `<React.StrictMode>` 並不會如同 React 16 時導致畫面重新轉譯，因次不需要如 Chapter 5-4 中所述將 StrictMode 關閉。

## 參考

其他關於 React 17 與書中 React 16 的差異可以參考 [React v17.0](https://zh-hant.reactjs.org/blog/2020/10/20/react-v17.html) 的說明。
