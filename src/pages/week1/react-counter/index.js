import React, { useState } from 'react';

import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Counter = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [count, setCount] = useState(5);

  // 將事件處理器獨立成 handleIncrement 和 handleDecrement
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="PJCHENder React Bootcamp"
    >
      <div className={styles.container}>
        <div
          // 把 handleIncrement 在這裡帶入
          onClick={handleIncrement}
          className={clsx(styles.chevron, styles.chevronUp)}
          style={{
            visibility: count >= 10 && 'hidden',
          }}
        />

        <div className={styles.number}>{count}</div>

        <div
          // 把 handleDecrement 在這裡帶入
          onClick={handleDecrement}
          className={clsx(styles.chevron, styles.chevronDown)}
          style={{
            visibility: count <= 0 && 'hidden',
          }}
        />
      </div>
    </Layout>
  );
};

export default Counter;
