<div align="center">
<h1 align="center">✨ Create Builderhub App</h1>
<h6>Create your Builderhub Project.</h6>
<br/>
<img src="https://raw.githubusercontent.com/builderhub-platform/create-builderhub-app/master/.github/assets/create-builderhub-app.png" alt="screenshot"/>
<br/><br/>
<a href="https://github.com/builderhub-platform/create-builderhub-app/actions/workflows/publish.yml"><img src="https://github.com/builderhub-platform/create-builderhub-app/actions/workflows/publish.yml/badge.svg"></a>
<a href="https://npmjs.org/package/create-builderhub-app"><img src="https://img.shields.io/npm/dw/create-builderhub-app"/></a>
<img src="https://img.shields.io/bundlephobia/minzip/create-builderhub-app"> <img src="https://img.shields.io/github/issues/builderhub-platform/create-builderhub-app"><img src="https://img.shields.io/npm/v/create-builderhub-app"> <img src="https://img.shields.io/npm/l/create-builderhub-app">
</div>
Create Builderhub App

```
> npx create-builderhub-app my-app

? description Hello. This is my app
? Author name Eunchurn Park
? Author email eunchurn@builderhub.io
? License MIT
? Package manager to use for installing packages from npm pnpm
```

## Usage

```bash
npx create-builderhub-app <name>
npm init builderhub-app <name>
yarn create builderhub-app <name>
```

## Templates

```bash
npx create-builderhub-app <name> --template=<template>
```

### `default`

Default TypeScript App

```bash
npx create-builderhub-app <name>
```

### `vanilla-ts`

Minimum setting for VanillaJS, HTML webpage
**required NodeJS version over 12.x**

- VanillaJS
- Typescript
- Webpack
- Pure CSS
- Autoprefixer (`postcss-loader`)
- Assets(`public`)
- Browser Sync (dev web server)
- Minimization(Image, HTML, CSS, JS) on production
- `gh-pages` Deployment

```bash
npx create-builderhub-app <name> --template=vanilla-ts
```
