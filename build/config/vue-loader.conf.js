const utils = require('../tool/utils');
const config = require('./index');
const px2rem = require('postcss-px2rem');
const autoprefixer = require('autoprefixer');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction,
  }),
  postcss: [
    autoprefixer({
      browsers: [
        'iOS >= 7',
        'Android >= 4.2',
      ],
    }),
    px2rem({
      remUnit: 75,
      remPrecision: 3,
    }),
  ],
};
