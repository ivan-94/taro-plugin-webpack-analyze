/**
 * @param {import('@tarojs/service').IPluginContext} ctx
 * @param {unknown} options
 */
module.exports = function TaroPluginWebpackAnalyze(ctx, options) {
  const enable = process.env.TARO_ENV !== 'rn' && process.env.ANALYZE === 'true';
  if (!enable) {
    return;
  }

  console.log('Webpack 打包分析模式已开启');

  ctx.modifyWebpackChain(({ chain }) => {
    chain.plugin('webpack-analyze').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, []);
  });
};
