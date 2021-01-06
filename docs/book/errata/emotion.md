---
id: 'emotion'
title: 'emotion 11 安裝方式異動'
sidebar_label: 'emotion 安裝方式異動'
keywords:
  - emotion
  - errata
  - react hooks
---

:::caution 異動章節

- 4-3 用 JavaScript 寫 CSS!? CSS in JS 的使用
- 4-6 使用 emotion 實作深色主題

:::

由於書籍撰寫時 [emotion](https://emotion.sh/docs/introduction) 使用的是 emotion v10，但目前 emotion 已經更新到 v11，因此安裝 emotion 的方式稍有改變，原本在 v10 只需要使用安裝 `@emotion/core` 和 `@emotion/styled` 這兩個套件，但在 [emotion 11](https://emotion.sh/docs/emotion-11) 中把 `@emotion/core` 改名為 `@emotion/react`。

## emotion styled 與 emotion react

因此目前安裝 emotion 11 時會需要透過以下指令安裝：

```bash
# 安裝 emotion 11
$ npm install @emotion/styled @emotion/react
```

若你照著書中的步驟安裝完 emotion，卻出現以下錯誤訊息時：

![Can't resolve '@emotion/react' in ...](https://i.imgur.com/aS8WNPp.png)

表示安裝的是 emotion 11，這時候只需要補安裝 `@emotion/react` 即可讓網頁正常運作：

```bash
# 若出現錯誤訊息 Can't resolve '@emotion/react' in ...
# 只需在安裝 '@emotion/react 即可
$ npm install @emotion/react
```

## emotion theming

同樣的情況也發生在章節「4-6 使用 emotion 實作深色主題」的內容，在 emotion 11 中，原本的套件 `emotion-theming` 已經整併到 `@emotion/react` 中，因此不再需要額外安裝 emotion-theming 這個套件，可以直接從 `@emotion/react` 中取出 `ThemeProvider` 這個方法來使用：

```jsx title="src/App.js"
import { ThemeProvider } from '@emotion/react';
// ...
```

:::info
感謝讀者 [Nikai Chen](https://www.facebook.com/groups/274607427104369/user/100036351350854) 於[社團](https://www.facebook.com/groups/reacthooks)中回報此問題。
:::

## 參考說明

- [emotion 11](https://emotion.sh/docs/emotion-11)
