// http://www.cnblogs.com/donglegend/p/5821092.html
// https://github.com/leecade/koa-webpack-middleware
/* eslint-disable */
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
