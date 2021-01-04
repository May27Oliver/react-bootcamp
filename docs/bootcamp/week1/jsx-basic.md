---
slug: /bootcamp
title: '認識 JSX'
keywords:
  - JSX
  - React Component
---

## 重要概念

- JavaScript 並不認得 JSX
- JSX 可以想成是強化版的 HTML，在 JSX 中可以使用許多 JavaScript 提供的語法
- 須特別留意最外層只能有一個根元素
- HTML 元素中沒有內容的話，需要自動關閉
- HTML 元素屬性會使用 camelCase 的方式命名（例如，className）

## 在 JSX 中帶入變數

```jsx
const framework = 'React';

ReactDOM.render(
  <div>Hello, {framework}!</div>,
  document.getElementById('root')
);
```

## 在 JSX 中帶入表達式

```jsx
const price = '25500';

ReactDOM.render(
  <div>
    原價是 {price}，目前特價 {price * 0.9}
  </div>,
  document.getElementById('root')
);
```

## 把 JSX 當成一個變數

- JSX 需要用 `()` 來讓 JavaScript 知道這個是一個「單元」

```jsx
const price = 25500;
const product = (
  <div>
    原價是 {price}，目前特價 {price * 0.9}
  </div>
);

ReactDOM.render(product, document.getElementById('root'));
```

## JSX 中一樣可以回傳另一個函式

- 讓一個函式回傳另一個 JSX

```jsx
const price = 25500;

const product = () => (
  <div>
    原價是 {price}，目前特價 {price * 0.9}
  </div>
);

ReactDOM.render(product(), document.getElementById('root'));
```

### 建立 React Component

- React Component 就是會回傳 JSX 的 JavaScript 函式
- React Component 的第一個字**需要「大寫」**

```jsx
const price = 25500;
const Product = () => (
  <div>
    原價是 {price}，目前特價 {price * 0.9}
  </div>
);

ReactDOM.render(<Product />, document.getElementById('root'));
```

## 使用 React Fragment

- 使用 React Fragment 可以避免 HTML DOM 中多餘的 `<div></div>`

```jsx
import React from 'react';

const JSX = (
  <React.Fragment>
    <div>Hello</div>
    <div>React</div>
  </React.Fragment>
);
```

React Fragment 也可以簡寫成 `<></>`：

```jsx
import React from 'react';

const JSX = (
  <>
    <div>Hello</div>
    <div>React</div>
  </>
);
```

## 建議閱讀

### Main Concepts

- [1. Hello World](https://reactjs.org/docs/hello-world.html)
- [2. Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [3. Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

### Advanced

- [Fragments](https://reactjs.org/docs/fragments.html)
