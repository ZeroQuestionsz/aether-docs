# AETHER Docs

The guide for **AETHER**, a single-player Space Engineers 1 mod (live star map, satellite intelligence, ground view, hangar automation), and **JARVIS**, the ship's AI that talks to you in the game chat.

Read it at **https://zeroquestionsz.github.io/aether-docs/**.

This repository holds only the documentation site. It's built with [VuePress 2](https://vuepress.vuejs.org/) and published to GitHub Pages by `.github/workflows/deploy-docs.yml` on every push to `main`.

## Working on it locally

```bash
npm install
npm run docs:dev
```

Pages are Markdown files under `docs/`; the sidebar and navbar are in `docs/.vuepress/config.js`, and the interactive pieces (system overview, chat replay, hangar animation, cheatsheet) are Vue components in `docs/.vuepress/components/`.
