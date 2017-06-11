const {
  addPlugins,
  createConfig, 
  defineConstants, 
  env, 
  entryPoint, 
  setOutput, 
  sourceMaps 
} = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const devServer = require('@webpack-blocks/dev-server2');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: './src/html/index.html'
  })
];

module.exports = createConfig([
  entryPoint('./src/js/main.js'),
  setOutput('./dist/index.js'),
  babel(),
  addPlugins(plugins),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV
  }),
  env('development', [
    devServer(),
    sourceMaps()
  ])
]);
