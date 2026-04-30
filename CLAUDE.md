# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Amel Muminovic, served at amelmuminovic.com (custom domain via the `CNAME` file). Bootstrapped with Create React App (react-scripts 3.4.1, React 16.13). Deployed to GitHub Pages.

## Commands

- `npm start` — dev server at http://localhost:3000
- `npm run build` — production build into `build/`
- `npm test` — react-scripts test runner (Jest, watch mode); run a single test with `npm test -- -t "test name"` or `npm test -- src/App.test.js`
- `npm run deploy` — runs `predeploy` (build) then publishes `build/` to the `gh-pages` branch via the `gh-pages` package

Both `package-lock.json` and `pnpm-lock.yaml` exist in the repo. `package.json` scripts and the gh-pages deploy flow assume npm — prefer `npm` to keep the lockfile in sync.

## Architecture

The site is a single static page; there is no router and no API.

- `src/index.js` mounts `<App />` and calls `serviceWorker.unregister()` (PWA disabled).
- `src/App.js` renders the lone page container, `src/containers/index.js`, which lays out the bio card (left column: photo, title, skills list, CV link; right column: bio paragraph + `SocialIcons`).
- `src/components/SocialIcons.js` is the only reusable component — a hardcoded list of social links rendered with Font Awesome 4 icon classes.
- Styling uses Bootstrap 4 grid classes (`container`, `row`, `col-md-*`, `register-left`/`register-right` from `containers/index.css`). Bootstrap 4 CSS and Font Awesome 4 are loaded via CDN `<link>` tags in `public/index.html`, **not** through the npm `bootstrap` / `react-bootstrap` deps — those are installed but only `Image` from `react-bootstrap` is actually used. Be aware of this when changing styling: layout classes come from the CDN stylesheet, not from local CSS or the npm package.
- Content (bio text, skills list, CV Drive link, profile image URL, social URLs) lives inline in `containers/index.js` and `components/SocialIcons.js`. Content edits = JSX edits.

## Deployment

`homepage` in `package.json` is set to `https://amelmuminovic.com/`, which determines the asset paths in the production build. The `CNAME` file in the repo root is what binds the GitHub Pages site to the custom domain — it must be preserved in the published `build/` output (the `gh-pages` package copies repo-root `CNAME` automatically when present in `public/`, but here it lives at the repo root; verify it survives a deploy if you change the build flow).
