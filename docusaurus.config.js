module.exports = {
  title: '從 Hooks 開始，讓你的網頁 React 起來',
  tagline: 'React Bootcamp',
  url: 'https://pjchender.github.io',
  baseUrl: '/react-bootcamp/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pjchender', // Usually your GitHub org/user name.
  projectName: 'react-bootcamp', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    algolia: {
      apiKey: '97e13f6c5cdd8742a63c2ffa930e7bcb',
      indexName: 'prod_react_bootcamp',
      contextualSearch: true,
    },
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'React Bootcamp',
      logo: {
        alt: 'PJCHENder React Bootcamp',
        src: 'img/logo192.png',
      },
      items: [
        {
          to: '/docs/bootcamp',
          activeBasePath: '/docs/bootcamp',
          label: 'Bootcamp',
          position: 'left',
        },
        {
          to: '/docs/book',
          activeBasePath: '/docs/book',
          label: 'Book',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/pjchender/react-bootcamp',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.tenlong.com.tw/products/9789864345083',
          label: '購書去',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook 讀者社群',
              href: 'https://www.facebook.com/groups/reacthooks',
            },
            {
              label: 'PJCHENder 網頁開發咩腳',
              href: 'https://www.facebook.com/pjchender',
            },
          ],
        },
        {
          title: 'ALPHA Camp',
          items: [
            {
              label: 'Lighthouse',
              to: 'https://lighthouse.alphacamp.co/',
            },
            {
              label: 'Slack for React Camp ',
              to: 'https://react-camp.slack.com',
            },
            {
              label: '官方網站',
              to: 'https://tw.alphacamp.co/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '購書去',
              href: 'https://www.tenlong.com.tw/products/9789864345083',
            },
            {
              label: 'PJCHENder 那些沒告訴你的小細節',
              href: 'https://pjchender.blogspot.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PJCHENder. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'UA-39523593-4',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/pjchender/react-bootcamp/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/pjchender/react-bootcamp/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
};
