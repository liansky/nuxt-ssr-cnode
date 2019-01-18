const pkg = require('./package')

const { host } = require('./config/env')

module.exports = {
  mode: 'universal',

  env: {
    host
  },

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
  loading: { color: '#41b883', height: '4px' },

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
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt'

  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },

  proxy: host.proxyTable || {},

  icon: {
    iconSrc: '/static/icon.png',
    sizes: [16, 120, 144, 152, 192, 384, 512]
  },

  /*
  ** Build configuration
  */
  build: {
    analyze: false,

    publicPath: 'http://h5.9f.cn' + '/_nuxt/',

    babel: {
      comments: true,
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-async-to-generator'
      ],
      presets ({ isServer }) {
        return [
          [
            '@nuxtjs/babel-preset-app',
            {
              targets: isServer ? { node: '8.0.0' } : { browsers: ['Android >= 4.0', 'ios >= 7'] }
            }
          ]
        ]
      }
    },

    postcss: {
      plugins: {
        'postcss-import': {}, // 支出@import css 输出文件
        'postcss-url': {},
        'autoprefixer': { browsers: ['iOS>=7', 'Android>4'] }, // 浏览器兼容补全
        'postcss-plugin-px2rem': { // px2rem
          rootValue: 100, // font-size root 值
          unitPrecision: 5, // 保留小数
          replace: true, // 是否rem替换px
          minPixelValue: 2 // >=2px替换
        }
      }
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
