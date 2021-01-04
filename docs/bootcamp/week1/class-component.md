---
title: '改用 class Component'
keywords:
  - JSX
  - React Component
---

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 5,
    };

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  handleDecrease() {
    this.setState(({ counter }) => ({
      counter: counter - 1,
    }));
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="container">
        <div className="chevron chevron-up" onClick={this.handleIncrease}></div>
        <div className="number">{counter}</div>
        <div
          className="chevron chevron-down"
          onClick={this.handleDecrease}
        ></div>
      </div>
    );
  }
}
```
