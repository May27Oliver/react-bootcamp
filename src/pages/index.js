import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const features = [
  {
    title: '計數器',
    imageUrl: 'img/react-counter.png',
    link: 'https://github.com/pjchender/learn-react-from-hooks-counter',
    description: (
      <>
        從最基本的計數器開始，了解 React UI 的操作，JSX 撰寫、CSS
        樣式使用以及事件的綁定。
      </>
    ),
  },
  {
    title: '網速單位換算器',
    imageUrl: 'img/speed-converter.png',
    link:
      'https://github.com/pjchender/learn-react-from-hooks-internet-speed-converter',
    description: (
      <>
        透過網速單位換算器熟悉 React
        中資料（state）的概念，了解元件的拆分，以及資料如何透過 props
        在不同的元件間傳遞。
      </>
    ),
  },
  {
    title: '台灣即時天氣 App',
    imageUrl: 'img/weather-card.png',
    link:
      'https://github.com/pjchender/learn-react-from-hook-realtime-weather-app',
    description: (
      <>
        實際串接中央氣象局 API 取得最即時的天氣資訊，最終部署到 Github Pages
        上，讓每個人都看得到你的作品。
      </>
    ),
  },
];

function Feature({ imageUrl, title, link, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature, 'text--center')}>
      {imgUrl && (
        <a
          className="text--center mb-3 d-block"
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </a>
      )}
      <h3>{title}</h3>
      <p className="text--left">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="PJCHENder React Bootcamp"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle text--secondary mt-5 mb-5">
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--lg', styles.getStarted)}
              to={useBaseUrl('docs/book')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
