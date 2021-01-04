---
title: '在事件處理器中帶入參數'
keywords:
  - JSX
  - React Component
---

在事件處理器中（event handler）中若有需要帶入參數有幾種不同的做法。

## 基本用法

在 `onClick` 中建立函式

```jsx {4,16,21}
function App() {
  const [counter, setCounter] = useState(5);

  const handleClick = (type) => {
    if (type === 'increase') {
      setCounter(counter + 1);
    } else if (type === 'decrease') {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container">
      <div
        className="chevron chevron-up"
        onClick={() => handleClick('increase')}
      ></div>
      <div className="number">{counter}</div>
      <div
        className="chevron chevron-down"
        onClick={() => handleClick('decrease')}
      ></div>
    </div>
  );
}
```

## 讓函式回傳函式：寫法一

```jsx {4,18,23}
function App() {
  const [counter, setCounter] = useState(5);

  const handleClick = (type) => {
    return () => {
      if (type === 'increase') {
        setCounter(counter + 1);
      } else if (type === 'decrease') {
        setCounter(counter - 1);
      }
    };
  };

  return (
    <div className="container">
      <div
        className="chevron chevron-up"
        onClick={handleClick('increase')}
      ></div>
      <div className="number">{counter}</div>
      <div
        className="chevron chevron-down"
        onClick={handleClick('decrease')}
      ></div>
    </div>
  );
}
```

## 讓函式回傳函式：寫法二

```jsx {4,16,21}
function App() {
  const [counter, setCounter] = useState(5);

  const handleClick = (type) => () => {
    if (type === 'increase') {
      setCounter(counter + 1);
    } else if (type === 'decrease') {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container">
      <div
        className="chevron chevron-up"
        onClick={handleClick('increase')}
      ></div>
      <div className="number">{counter}</div>
      <div
        className="chevron chevron-down"
        onClick={handleClick('decrease')}
      ></div>
    </div>
  );
}
```

## 想想看！在帶入參數的同時又想要取得事件（e）可以怎麼寫？

```jsx {4}
function App() {
  const [counter, setCounter] = useState(5);

  const handleClick = (type) => (e) => {
    console.log('e.target', e.target);
    if (type === 'increase') {
      setCounter(counter + 1);
    } else if (type === 'decrease') {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container">
      <div
        className="chevron chevron-up"
        onClick={handleClick('increase')}
      ></div>
      <div className="number">{counter}</div>
      <div
        className="chevron chevron-down"
        onClick={handleClick('decrease')}
      ></div>
    </div>
  );
}
```

## 建議閱讀

### Main Concepts

- [6. Handling Events](https://reactjs.org/docs/handling-events.html)
