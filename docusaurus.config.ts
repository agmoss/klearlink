import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();

const config: Config = {
  title: 'KlearLink',
  tagline: 'Know Your Borrowers. Instantly.',
  favicon: 'img/logo_smallest.png',
  url: 'https://klearlink.io',
  baseUrl: '/',
  organizationName: 'KlearLink',
  projectName: 'KlearLink',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        blog: {
          id: 'use-cases',
          path: './use-cases',
          routeBasePath: 'use-cases',
          showReadingTime: false,
          blogTitle: 'Use Cases',
          blogDescription: 'KlearLink Use Cases',
          sortPosts: 'descending',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'products',
        path: './products',
        routeBasePath: 'products',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: './api',
        routeBasePath: '23d3cq2w349',
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/logo.png',
    navbar: {
      title: 'KlearLink',
      style: 'primary',
      logo: {
        alt: 'logo',
        src: 'img/logo_smallest.png',
      },
      items: [
        {
          href: '/#solutions',
          label: 'Solutions',
          position: 'left',
          activeBaseRegex: '(^/products.*$)',
        },
        {
          to: '/use-cases',
          label: 'Use Cases',
          position: 'left',
        },
        {
          to: '/about-us',
          label: 'About Us',
          position: 'left',
        },
        {
          to: '/contact-us',
          label: 'Contact Us',
          position: 'left',
        },
        {
          to: '/documentation',
          label: 'Documentation',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          items: [
            {
              label: 'Terms of Service',
              to: '/terms-of-service',
            },
          ],
        },
        {
          items: [
            {
              label: 'Privacy Policy',
              to: '/privacy-policy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KlearLink Data Technologies, Inc.`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
    },
    customFields: {
      PUBLIC_KEY: process.env.PUBLIC_KEY,
      SERVICE_ID: process.env.SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
