import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Klearlink',
  tagline: 'Know Your Borrowers. Instantly.',
  favicon: 'img/favicon.svg',
  url: 'https://klearlink.io',
  baseUrl: '/',
  organizationName: 'klearlink',
  projectName: 'klearlink',
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
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/logo_small.png',
    navbar: {
      title: 'Klearlink',
      style: 'primary',
      logo: {
        alt: 'logo',
        src: 'img/logo.png',
      },
      items: [
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
              label: 'Docs',
              to: '/docs',
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
        {
          items: [
            {
              label: 'Contact',
              href: '/contact-us',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Klearlink Data Technologies, Inc.`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
