import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.client.js';

const compiler = webpack(webpackConfig);

export default function (app) {
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/assets/',
    stats: {
      colors: true,
    },
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
};
