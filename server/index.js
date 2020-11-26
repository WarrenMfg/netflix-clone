const app = require('express')();
let morgan, config;
const { resolve } = require('path');
const { createGzip } = require('zlib');
const { createReadStream } = require('fs');
const PORT = process.env.PORT || 50000;

if (process.env.NODE_ENV === 'production') {
  config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  };
} else {
  morgan = require('morgan');
  config = require('../src/config');

  app.use(morgan('dev'));
}

// compression, streaming, and caching utility function
const compressAndStream = (resolvedFilePath, res) => {
  return new Promise(resolve => {
    const gzip = createGzip();
    const source = createReadStream(resolvedFilePath);
    res.set({
      'Content-Encoding': 'gzip',
      'Cache-Control': 'public, max-age=86400'
    });
    source.pipe(gzip).pipe(res);
    resolve();
  });
};

app.get('/firebase', (req, res) => {
  res.send(config);
});

// bundle
app.get('/bundle.js', (req, res) => {
  return compressAndStream(resolve(__dirname, '../bundle.js'), res);
});

// aux images
app.get('/images/:subDirectory/:file', (req, res) => {
  const { subDirectory, file } = req.params;
  if (file === 'logo.svg') {
    res.set({
      'Cache-Control': 'public, max-age=86400'
    });
    return res.sendFile(resolve(__dirname, '../images', subDirectory, file));
  }
  return compressAndStream(
    resolve(__dirname, '../images', subDirectory, file),
    res
  );
});

// category images
app.get('/images/:category/:genre/:item/:file', (req, res) => {
  const { category, genre, item, file } = req.params;
  return compressAndStream(
    resolve(__dirname, '../images', category, genre, item, file),
    res
  );
});

// favicon
app.get('/favicon.ico', (req, res) => {
  return compressAndStream(resolve(__dirname, '../favicon.ico'), res);
});

// video
app.get('/videos/:video', (req, res) => {
  const { video } = req.params;
  res.set({
    'Cache-Control': 'public, max-age=86400'
  });
  return res.sendFile(resolve(__dirname, '../videos', video));
});

// index.html
app.get('/*', (req, res) => {
  return compressAndStream(resolve(__dirname, '../index.html'), res);
});

// listen
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
