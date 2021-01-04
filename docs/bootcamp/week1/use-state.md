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
state 要改變一定要使用 setState 的方法，手動改變 state 是沒有效果的
:::

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
