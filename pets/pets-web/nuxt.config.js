const { host } = require('./config/env')

module.exports = {
  mode: 'universal',

  env: {
    host
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '~/plugins/injected.js',
    '~/plugins/filters.js',
    '~/plugins/globals.js',
    { src: '~/plugins/fastclick.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt'
  ],

  router: {
    middleware: [],
    linkActiveClass: 'link-active',
    extendRoutes (routes) {},
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },

  proxy: host.proxyTable || {},

  /*
  ** Build configuration
  */
  build: {
    analyze: false,
    maxChunkSize: 350000, // 单个包最大尺寸
    // 提取公共包
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: 'all',
            minChunks: 2,
            name: 'commons',
            priority: 1,
            reuseExistingChunk: true
          }
        }
      }
    },

    babel: {
      comments: true,
      plugins: [
        ['@babel/plugin-transform-runtime', { corejs: 2 }],
        '@babel/plugin-transform-async-to-generator'
      ],
      presets ({ isServer }) {
        return [
          [
            '@nuxtjs/babel-preset-app',
            {
              targets: isServer ? { node: '8.0.0' } : { browsers: ['Android > 4.3', 'ios >= 8'] },
              useBuiltIns: 'usage',
              modules: false
            }
          ]
        ]
      }
    },

    postcss: {
      plugins: {
        'postcss-import': {}, // 支出@import css 输出文件
        'postcss-url': {},
        autoprefixer: {
          overrideBrowserslist: [
            'iOS>=7', 
            'Android>4'
          ]
        }, // 浏览器兼容补全
        'postcss-plugin-px2rem': { // px2rem
          rootValue: 100, // font-size root 值
          unitPrecision: 5, // 保留小数
          replace: true, // 是否rem替换px
          minPixelValue: 2 // >=2px替换
        }
      }
    },

    // 单独提取 css
    extractCSS: process.env.NODE_ENV === 'development' ? false : {
      orderWarning: false
    },

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
      config.stats = 'errors-only'
      config.performance = {
        maxEntrypointSize: 400000,
        maxAssetSize: 400000,
        hints: false
      }
    }
  }
}
