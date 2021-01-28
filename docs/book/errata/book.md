---
id: 'book'
title: '書中內容勘誤'
sidebar_label: '書中內容勘誤'
keywords:
  - errata
---

## CH 5-8

在「實際使用 useCallback」的單元中，原本第三點：

「3. 因為 `fetchingData` 現在會相依到 React 元件中的資料狀態（states 或 props），所以 `useCallback` 的 dependencies 陣列中需要帶入 `weatherElement`」

修改為：

「3. 在 useCallback 的 dependencies 陣列中帶入空陣列」
