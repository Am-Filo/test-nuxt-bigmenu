module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'lami-app',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'lami project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
  ],
  plugins: [
    '@plugins/vuetify'
  ],

  env: {
    COSMIC_BUCKET: process.env.COSMIC_BUCKET || 'los-app',
    COSMIC_READ_KEY: process.env.COSMIC_READ_KEY,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY
  }
}
