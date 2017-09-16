const fs = require('fs');
const path = require('path');
const server = require('express')();
const vueServerRenderer = require('vue-server-renderer');
const setupDevServer = require('./test');

const resolvePath = file => path.resolve(__dirname, file);

const template = fs.readFileSync(path.resolve(__dirname, '../index.html'), {
  encoding: 'utf-8',
});

function createRenderer(bundle, options) {
  return vueServerRenderer.createBundleRenderer(bundle, Object.assign(options, {
    template,
    basedir: resolvePath('../dist'),
    runInNewContext: false,
  }));
}

let renderer;
setupDevServer((bundle, options) => {
  renderer = createRenderer(bundle, options);
});


server.get('*', (req, res) => {
  const context = { url: req.url };
  renderer.renderToString(context, (err, html) => {
    if (!err) {
      res.end(html);
    } else {
      console.log('error');
    }
  });
});

server.listen(8090, () => {
  console.log('🌏  http server started at localhost:8090');
});

