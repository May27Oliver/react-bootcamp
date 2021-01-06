---
title: 'useState 基礎'
keywords:
  - JSX
  - React Component
  - useState
---

## 重點

- `useState` 取出後，用來改變變數的方法，在命名上會以 set 開頭
- `useState` 的預設值也可以是物件
- React 畫面重新轉譯的時間點（缺一不可）
  - setState 被呼叫到
  - 且 state 的值確實有改變

:::caution
state 要改變一定要使用 setState 的方法，手動改變 state 是沒有效果的。
:::

## 什麼是 state

- state 中文翻譯是「狀態」，但用狀態來表示一開始可能會不太好理解，這時候可以把它想成在 React 元件中的「資料」或「變數」

## 為什麼要用 useState

- 這些 state 會需要請 React 幫我們監控，否則的話，React 並不知道這些 state 已經改變了，它就不會幫我們重新轉譯（render）畫面
- 為了要讓在 React 元件中的這些 state 可以被 React 監管，我們就需要使用 `useState` 這個方法。React 會幫我們監管透過 `useState` 產生的變數，當 state 確實有改變，且有使用了 `useState` 提供用來改變 state 的方法時，React 就會自動幫我們更新畫面。

## 基本用法

```jsx
import { useState } from 'react';

// 這是陣列的解構賦值
const [counter, setCounter] = useState(5);
```

透過 `setCounter` 可以直接設值

```jsx
setCounter(10);
```

`setCounter` 中也可以帶入 function，藉此取出上一次的 state：

```jsx
setCounter((prevCounter) => prevCounter + 1);
```

## 建議閱讀

### Hooks

- [3. Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [7. Hooks API Reference - useState](https://reactjs.org/docs/hooks-reference.html#usestate)
