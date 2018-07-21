const merge = require('deepmerge');
const config = require('./internals/nuxt');

module.exports = merge(config, {
  /**
   * Head
   */
  head: {
    titleTemplate(title) {
      return title ? `${title} - Zen Int.` : `Zen International Marketing`;
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'The beauty of art is truly in the eye of the beholder.',
      },
    ],
  },

  /**
   * Progress bar
   */
  loading: { color: '#5c80bc' },

  /**
   * Workbox
   */
  workbox: {},

  /**
   * PWA metas
   */
  meta: {},

  /**
   * PWA manifest
   */
  manifest: {
    name: 'Zen Int.',
    short_name: 'Zen',
    lang: 'en',
    theme_color: '#5c80bc',
    background_color: '#f6f6f6',
    description: 'The beauty of art is truly in the eye of the beholder.',
    display: 'fullscreen',
  },

  /**
   * SPA mode
   */
  // mode: 'spa',
  // router: {
  //   mode: 'hash',
  // },
  // loadingIndicator: {
  //   name: 'nuxt',
  //   color: '#3B8070',
  //   background: '#fefefe',
  // },
});
