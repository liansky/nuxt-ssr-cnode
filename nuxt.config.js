const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'keywords', name: 'keywords', content: 'Vue开发者,前端技术开发,javascript技术' },
      { hid: 'description', name: 'description', content: pkg.description }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        body: false,
        type: 'text/javascript',
        src: '/js/ant.js'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/style/reset.css',
    { src: '~assets/style/base.scss', lang: 'sass' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },

  proxy: {
    '/api': {
      target: 'https://cnodejs.org',
      pathRewrite: { '^/api': 'api' }
    }
  },

  icon: {
    iconSrc: '/static/icon.png',
    sizes: [16, 120, 144, 152, 192, 384, 512]
  },

  /*
  ** Build configuration
  */
  build: {
    publicPath: 'http://h5.9f.cn' + '/_nuxt/',
    postcss: {
    },
    // 单独提取 css
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
