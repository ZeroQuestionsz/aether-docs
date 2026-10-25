import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'

// The site lives at https://<user>.github.io/aether-docs/ (GitHub Pages project site).
const base = '/aether-docs/'

export default defineUserConfig({
  base,
  lang: 'en-US',
  title: 'AETHER Docs',
  description: 'AETHER: star map, satellite intelligence and hangar automation for Space Engineers 1, with JARVIS, the ship\'s AI in your chat.',
  head: [
    ['link', { rel: 'icon', href: `${base}favicon.svg`, type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#0e141b' }],
  ],

  bundler: viteBundler(),

  theme: defaultTheme({
    logo: '/favicon.svg',
    colorMode: 'dark',
    colorModeSwitch: true,
    repo: null,
    lastUpdated: false,
    contributors: false,
    editLink: false,

    navbar: [
      { text: 'Get started', link: '/guide/getting-started.md' },
      {
        text: 'AETHER',
        children: [
          '/guide/star-map.md',
          '/guide/ground-view.md',
          '/guide/survival.md',
          '/guide/ship-view.md',
          '/guide/settings.md',
          '/guide/airlocks.md',
          '/guide/viewer.md',
          '/guide/satellites.md',
          '/guide/intel.md',
          '/guide/fleet.md',
          '/guide/docking.md',
          '/guide/hangar.md',
          '/guide/blocks.md',
        ],
      },
      { text: 'JARVIS', children: ['/jarvis/setup.md', '/jarvis/cheatsheet.md'] },
      { text: 'Reference', children: ['/reference/custom-data.md', '/reference/troubleshooting.md', '/reference/changelog.md'] },
    ],

    sidebar: {
      '/': [
        {
          text: 'Start',
          collapsible: false,
          children: ['/guide/getting-started.md', '/guide/approvals.md'],
        },
        {
          text: 'AETHER',
          collapsible: true,
          children: [
            '/guide/star-map.md',
            '/guide/ground-view.md',
            '/guide/survival.md',
            '/guide/ship-view.md',
            '/guide/settings.md',
            '/guide/airlocks.md',
            '/guide/viewer.md',
            '/guide/satellites.md',
            '/guide/intel.md',
            '/guide/fleet.md',
            '/guide/docking.md',
            '/guide/hangar.md',
            '/guide/blocks.md',
          ],
        },
        {
          text: 'JARVIS',
          collapsible: true,
          children: ['/jarvis/setup.md', '/jarvis/cheatsheet.md'],
        },
        {
          text: 'Reference',
          collapsible: true,
          children: ['/reference/custom-data.md', '/reference/troubleshooting.md', '/reference/changelog.md'],
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({
      maxSuggestions: 10,
      hotKeys: ['k', '/'],
      locales: { '/': { placeholder: 'Search  (Ctrl K)' } },
    }),
  ],
})
