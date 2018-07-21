# Zen Artwork

> Nuxt 2 progressive web application for an art gallary operating internationally.
> Based off: https://github.com/chymz/nuxt-starter

## Features

- Nuxt 2
- Babel 7 or TypeScript with Vue class component
- Sass installed
- Prettier, ESLint & Stylelint
- Units tests with @vue/test-utils & Jest
- E2E tests with Cypress
- Accessibility checks with tota11y
- Nuxt modules installed:
  - @nuxtjs/pwa
  - @nuxtjs/router
  - @nuxtjs/dotenv
  - @nuxtjs/component-cache
  - nuxt-sass-resource-loader
  - nuxt-i18n
- Webpack plugins
  - Imagemin
- Simple modules system
- Lazy loaded images with vue-lazyload

## Prerequisites

Make sure to have `node 8.0+` and `npm 5.0+` installed

### Installing Node 8.11.3

Once you have set up the environment variables you should use the correct version of Node. We use 8.11.3 for this project. First install NVM from here: https://github.com/creationix/nvm#installation

Once you've got NVM setup, switch to 8.11.3:

```bash
# install the correct version
$ nvm install

# use the correct version
$ nvm use
```

### Installing NPM Dependencies

Now we're ready to install our node modules. Yarn is recommended.

```bash
# install yarn
$ npm i -g yarn

# install dependencies
$ yarn

# serve with hot reload at localhost:8080
$ yarn dev

# generate static project
$ yarn generate
```

## Usage

### Development

```bash
# serve with hot reloading at localhost:3000
$ yarn dev
```

Go to [http://localhost:3000](http://localhost:3000)

### Production

```bash
# build for production and launch the server
$ yarn build
$ yarn start
```

### Generate

```bash
# generate a static project
$ yarn generate
```
