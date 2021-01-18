---
title: '實作 Todo Item 編輯功能'
keywords:
  - React Component
---

## 切換 isEdit 狀態

### 修改 CSS

修改 `.edit` 的 class 讓編輯的樣式更明顯

```scss {4,5,17-19} title="src/App.scss"
.task-item {
  // ...
  &.edit {
    background: #fff3eb;
    box-shadow: inset 0 0 0 1px #fff3eb;

    .task-item-body {
      .task-item-body-input {
        display: block;
      }

      .task-item-body-text {
        display: none;
      }
    }

    .task-item-action .btn-destroy {
      display: none;
    }
  }
}
```

### 建立 updateIsEdit 方法

透過 `updateIsEdit` 來修改 todoItem 的 `isEdit` 狀態：

```jsx title="src/App.js"
const App = () => {
  const updateIsEdit = ({ id, isEdit }) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return { ...todo, isEdit };
      })
    );
  };

  return (/* ... */)
}
```

- 將 `updateIsEdit` 方法從 `App` 傳入 `Todos` 後，再從 `Todos` 傳入 `TodoItem
- 在 `task-item` 透過 `clsx` 添加 edit 的樣式

```jsx {6,12} title="src/components/TodoItem.js"
const TodoItem = ({ todo, handleDelete, handleToggleIsDone, updateIsEdit }) => {
  return (
    <div
      className={clsx('task-item', {
        done: todo.isDone,
        edit: todo.isEdit,
      })}
    >
      {/* ... */}
      <div
        className="task-item-body"
        onDoubleClick={() => updateIsEdit({ id: todo.id, isEdit: true })}
      >
        {/* ... */}
      </div>
    </div>
  );
};
```

## 取得使用者輸入的內容

```jsx {8,10-12,21} title="src/components/TodoItem.js"
const TodoItem = ({
  todo,
  handleDelete,
  handleSave,
  handleToggleIsDone,
  updateIsEdit,
}) => {
  const [tempTodo, setTempTodo] = useState(todo.title);

  const handleChange = (e) => {
    setTempTodo(e.target.value);
  };

  return (
      {/* ... */}
        <input
          className="task-item-body-input"
          type="text"
          placeholder="新增工作"
          value={tempTodo}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      {/* ... */}
  );
};
```

## 取得使用者點擊的按鍵

```jsx {5,40} title="/src/component/TodoItem"
const TodoItem = ({
  // ...
}) => {
  // ...
  const handleKeyDown = (event) => {
    console.log({
      keyCode: event.keyCode,
      key: event.key,
    });

    // keyCode 13 一定是 enter，但 enter 的 keyCode 不一定是 13
    if (event.keyCode === 13 && tempTodo.length !== 0) {
      //
    }

    // keyCode 27 是 Escape
    if (event.keyCode === 27) {
      //
    }
  };

  return (
    {/* ... */}
    <input
      className="task-item-body-input"
      type="text"
      placeholder="新增工作"
      value={tempTodo}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
    {/* ... */}
  );
};
```

## 保存編輯

在 `App.js` 中撰寫 `handleSave` 方法：

```jsx title="src/App.js"
const App = () => {
  const handleSave =  (payload) => {
    const { id, title } = payload;

    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return { ...todo, title, isEdit: false };
      })
    );
  };

  return (/* ... */)
}
```

在 `TodoItem` 的 `handleKeyDown` 中呼叫 `handleSave`：

```jsx title="src/components/TodoItem.js"
const TodoItem = ({/* ... */}) => {
  // ...
  const handleKeyDown = (event) => {

    // keyCode 13 一定是 enter，但 enter 的 keyCode 不一定是 13
    if (event.keyCode === 13 && tempTodo.length !== 0) {
      handleSave({
        id: todo.id,
        title: tempTodo,
      });
    }

   // ...
  };

  return (/* ... */)
};
```

## 取消編輯

- 透過 `updateIsEdit()` 把 isEdit 改回 `false`
- 透過 `setTempTodo` 復原 title

```jsx title="src/components/TodoItem.js"
const TodoItem = ({/* ... */}) => {
  // ...
  const handleKeyDown = (event) => {

   // keyCode 27 是 Escape
    if (event.keyCode === 27) {
      // 取消儲存
      updateIsEdit({
        id: todo.id,
        isEdit: false,
      });

      // 把 tempTodo 改成修改前的內容
      setTempTodo(todo.title);
    }

   // ...
  };

  return (/* ... */)
};
```
