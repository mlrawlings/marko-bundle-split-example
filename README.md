# Marko: Bundle Splitting

## Getting Started

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## About

This is a demo of how to split components into separate bundles. This is useful for pages that have many components, but only need to load a few of them at a time. This is accomplished by having a lookup that maps component names to their respective templates. When a Marko template is imported from a$ `.js` file on the server, the `@marko/webpack` plugin will generate a separate bundle for that template that only gets injected into the page when the template is rendered. (This is the same mechanism that's used to code split pages)

The relevant code is in [`./src/components/demo/lookup.js`](./src/components/demo/lookup.js) and [`./src/components/demo/index.marko`](./src/components/demo/index.marko).

The demo is driven by queryString, but could be driven by anything (e.g. specific item details, user preferences, experimentation, etc.)

Click on the links in the demo to load the page with different components and notice that there are separate bundles loaded.
