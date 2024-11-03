import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Clearlinc',
  tagline: 'Know Your Borrowers. Instantly.',
  favicon: 'img/favicon.ico',
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
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs',
            },
          ],
        },
        // {
        //   title: 'Policy',
        //   items: [
        //     {
        //       label: 'Privacy Policy',
        //       href: '/privacy-policy',
        //     },
        //     {
        //       label: 'Terms of Service',
        //       href: '/terms-of-service',
        //     },
        //   ],
        // },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: '/contact-us',
            },
            {
              label: 'Phone',
              href: '/contact-us',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Clearlinc, Inc.`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
