import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Clearlinc',
  tagline: 'Know Your Borrowers. Instantly.',
  favicon: 'img/favicon.svg',
  url: 'https://clearlinc.io',
  baseUrl: '/',
  organizationName: 'clearlinc',
  projectName: 'clearlinc',
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
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          id: 'use-cases',
          path: './use-cases',
          routeBasePath: 'use-cases',
          showReadingTime: false,
          blogTitle: 'Use Cases',
          blogDescription: 'Clearlinc Use Cases',
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

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/logo.png',
    navbar: {
      title: 'Clearlinc',
      style: 'primary',
      logo: {
        alt: 'logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/#solutions',
          label: 'Solutions',
          position: 'left',
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
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Docs',
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
      copyright: `Copyright © ${new Date().getFullYear()} Clearlinc Data Technologies, Inc.`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
