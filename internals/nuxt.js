const { join, resolve } = require('path');

const babel = require('./babel');

module.exports = {
  /**
   * Sources directory
   */
  srcDir: 'src',

  /**
   * Webpack build
   */
  build: {
    babel: babel(),
    extractCSS: true,
    cssSourceMap: true,
    optimization: {
      splitChunks: {
        name: true,
      },
    },
  },

  /**
   * Styles
   */
  css: ['normalize.css', '~/assets/scss/index.scss'],

  /**
   * Plugins
   */
  plugins: [
    '~~/internals/modules/plugin',
    {
      src: '~~/internals/tota11y',
      ssr: false,
    },
    {
      src: '~~/internals/lazyload',
      ssr: false,
    },
  ],

  /**
   * Allow Sass variables inside components.
   */
  sassResources: [
    resolve(__dirname, '../src/assets/scss/settings/variables.scss'),
    resolve(__dirname, '../src/assets/scss/mixins/media-queries.scss'),
    resolve(__dirname, '../src/assets/scss/helpers.scss'),
  ],

  /**
   * Nuxt modules
   */
  modules: [
    // Community modules
    '@nuxtjs/router',
    ['@nuxtjs/dotenv', { path: join(__dirname, '..') }],
    '@nuxtjs/component-cache',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    'nuxt-sass-resources-loader',

    // Custom modules
    '~~/internals/typescript',
    '~~/internals/webpack/all',
    '~~/internals/webpack/development',
    '~~/internals/webpack/production',
  ],
};
