const environment = process.env
const isProdMode = Object.is(environment.NODE_ENV, 'production')

const target = process.env.npm_config_target // production、test
const prefix = target === 'production' ? '' : target
const protocol = ~['production'].indexOf(target) ? 'https:' : 'http:'

const map = {
  development: {
    port: 3000,
    proxyTable: {
      '/APP': {
        targetHost: 'appHost',
        target: 'http://xxx.xxx.com',
        pathRewrite: { '^/APP': '' }
      }
    },
    staticHost: `http://xxx.xxx.com`,
    appHost: `http://xxx.xxx.com`
  },

  build: {
    appHost: `${protocol}//${prefix}.xxx.com`,
    // appHost: `http://yapi.demo.qunar.com/mock/57288`,
    staticHost: `${protocol}//${prefix}static.xxx.com`
  }
}


module.exports = {
  host: isProdMode ? map.build : map.development
}
