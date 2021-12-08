const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const path = require('path')
const webpack = require('webpack')

const {
  SENTRY_AUTH_TOKEN, SENTRY_URL, ORG, SENTRY_PROJECT, BRANCH
} = process.env
const gitRevisionPlugin = new GitRevisionPlugin({
  versionCommand: ` describe --tags --always --dirty="-${BRANCH}"`
})
const APP_VERSION = gitRevisionPlugin.version()
function resolve(dir) {
  return path.join(__dirname, dir)
}
let devProxy = {
  '/miniprogram/': {
    target: 'http://dohko.online.minipapi.hualala.com'
  },
  '/or/': {
    target: 'http://dohko.online.restaurant.hualala.com'
  },
  '/orh5/xfk/': {
    target: 'http://dohko.online.h5api.hualala.com',
    changeOrigin: true
  },
  '/orh5/': {
    target: 'http://dohko.online.h5api.hualala.com'
  },
  '/mauth/': {
    target: 'http://mauth.dohko.restaurant.hualala.com',
  },
  '/broker/': {
    target: 'http://172.16.32.124:8080',
    ws: true,
  },
  '/multi/': {
    target: 'http://dohko.multifunction.http.hualala.com/'
  },
  '/tp/': {
    target: 'http://dohko.online.or.tp.service.hualala.com',
  },
}

if (process.env.DATA_SERVER === 'production') {
  devProxy = Object.assign(devProxy, {
    '/or/': {
      target: 'http://online.restaurant.hualala.com'
    },
    '/orh5/': {
      target: 'http://online.h5api.hualala.com',
    },
  });
}


const sentryPlugin = process.env.NODE_ENV === 'production' && ['dohko', 'master'].includes(BRANCH) ? [
  new SentryWebpackPlugin({
    authToken: SENTRY_AUTH_TOKEN,
    url: SENTRY_URL,
    org: ORG,
    project: SENTRY_PROJECT,
    release: APP_VERSION,
    include: './dist',
    ignore: ['node_modules', 'vue.config.js'],
    deleteAfterCompile: true,
    suppressErrors: true,
    urlPrefix: '~',
  })
] : [];

module.exports = {
  outputDir: 'dist',
  assetsDir: 'newm',
  productionSourceMap: true,
  runtimeCompiler: true,
  css: {
    extract: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        $vue: 'vue/dist/vue.js',
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new ManifestPlugin(),
      new webpack.DefinePlugin(
        {
          'process.env': {
            VUE_APP_SENTRY_RELEASE: JSON.stringify(APP_VERSION),
            GIT_HASH: JSON.stringify(gitRevisionPlugin.version()),
          }
        }
      )
    ].concat(sentryPlugin),
    optimization: {
      splitChunks: {
        cacheGroups: {
          custom: {
            minSize: 10000,
            test: /[\\/]src[\\/]/,
            name: 'chunk-common-duplicate',
            minChunks: 20,
            priority: -10,
            chunks: 'all',
            reuseExistingChunk: true
          }
        }
      }
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      stats: {
        version: false,
        hash: false,
        maxModules: 0
      },
      compress: true,
      host: '0.0.0.0',
      disableHostCheck: true,
      overlay: {
        warnings: true,
        errors: true,
      },
      historyApiFallback: true,
      proxy: devProxy,
    },
  },
  chainWebpack: (config) => {
    config.module.rule('images').use('url-loader').loader('url-loader').tap(options => ({
      limit: 4096,
      fallback: {
        loader: 'file-loader',
        options: {
          name: 'newm/images/[name].[ext]?[hash:8]'
        }
      }
    }));

    config.module.rule('svg').use('file-loader').loader('file-loader').tap(options => ({
      name: 'newm/images/[name].[hash:8].[ext]'
    }));

    /*    const types = ['vue']
    types.forEach((type) => {
      config.module.rule('scss').oneOf(type).use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['./src/assets/styles/mixin.scss']
          /!* [
            // 公用的scss变量
            // path.resolve(__dirname, './src/assets/css/variable.scss'),
            // 公用的scss混入
            path.resolve(__dirname, '../src/assets/styles/mixin.scss'),
            // 共用的默认样式
            // path.resolve(__dirname, './src/assets/css/base.scss')
          ] *!/
        })
    }) */

    // 移除 prefetch 插件
    config.plugins.delete('prefetch');
  },
  transpileDependencies: [
    'swiper',
    'dom7',
    'ssr-window'
  ]
};
