---
title: '[掘竅] 什麼時候該在 useState 中帶入 function 取得前一次的狀態'
sidebar_label: '[掘竅] 在 useState 中帶入 function'
keywords:
  - JSX
  - React Component
  - useState
  - tip
---

## TL;DR

只要是會根據上一次的資料狀態而有變化時，請都在 setState 中使用 function 中取出前一次的值

## 什麼時候該在 useState 中透過 function 取出前一次的狀態

在 [useState 基礎](use-state.md)中，我們已經知道可以在 `useState` 中可以以帶入 function 的方式取得前一次的資料狀態（state）。

在一般的情況下，你可能會覺得這兩種做法在結果上沒不同，但永遠要記得 JavaScript 經常有非同步的情況會發生，所以如果「新的值」是根據「前一次的值」而有改變，例如，新的 `count` 是根據前一次的 `count` 來產生時，**強烈建議** 在 setState 中使用 function 的方式，取得前一次的 state 後再進行變更。

我們可以同樣看一下計數器這個範例：

```jsx {4-12}
function App() {
  const [count, setCount] = useState(5);
  const handleIncrease = () => {
    setTimeout(() => {
      console.log('count', count);

      // 直接使用前 count + 1
      // setCount(count + 1);

      // 帶入 function 取出前一次的 state
      setCount((prevCount) => prevCount + 1);
    }, 3000);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="chevron chevron-up" onClick={handleIncrease}></div>
      <div className="number">{count}</div>
      <div className="chevron chevron-down" onClick={handleDecrease}></div>
    </div>
  );
}
```

從下面的範例中你可以看到，當 `setCount` 有機會是非同步被執行（這裡是透過 `setTimeout`，實際上可能是呼叫 API 等待結果回傳），而且又會需要依賴上一次的資料狀態（`prevCount`）來產生新的資料狀態時（`count`），直接在 `setCount` 中帶入值會產生錯誤的結果，它並沒有依照最後一次的 `count` 來做 increase 的動作，而是從 `-9` 直接跳到 `4`；但若是在 `setCount` 中帶入 function 取得 `prevCount` 的話，則不會有這個問題。

![when to use function in setState](https://i.imgur.com/zheCPhG.gif)

你可以透過這個 [codeSandbox](https://codesandbox.io/s/when-to-use-function-in-setstate-951se?file=/src/App.js:65-704) 連結來玩玩看！

### 想想看

至於為什麼直接用 `setCount(count + 1)` 會有問題呢？

答案很簡單：**閉包（closure）**。

:::info 閉包是什麼
不知道什麼是閉包的話可以參考看看這篇[深入淺出瞭解 JavaScript 閉包（closure）](https://pjchender.blogspot.com/2017/05/javascript-closure.html)。
:::
