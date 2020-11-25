const app = require('express')();
const morgan = require('morgan');
const { resolve } = require('path');
const { createGzip } = require('zlib');
const { createReadStream } = require('fs');
const PORT = process.env.PORT || 50000;

app.use(morgan('dev'));

// compression and streaming utility function
const compressAndStream = (resolvedFilePath, res) => {
  return new Promise(resolve => {
    const gzip = createGzip();
    const source = createReadStream(resolvedFilePath);
    res.set({ 'Content-Encoding': 'gzip' });
    source.pipe(gzip).pipe(res);
    resolve();
  });
};

app.get('/bundle.js', (req, res) => {
  return compressAndStream(resolve(__dirname, '../bundle.js'), res);
});

app.get('/images/:subDirectory/:file', (req, res) => {
  const { subDirectory, file } = req.params;
  if (file === 'logo.svg') {
    return res.sendFile(resolve(__dirname, '../images', subDirectory, file));
  }
  return compressAndStream(
    resolve(__dirname, '../images', subDirectory, file),
    res
  );
});

app.get('/images/:category/:genre/:item/:file', (req, res) => {
  const { category, genre, item, file } = req.params;
  return compressAndStream(
    resolve(__dirname, '../images', category, genre, item, file),
    res
  );
});

app.get('/favicon.ico', (req, res) => {
  return compressAndStream(resolve(__dirname, '../favicon.ico'), res);
});

app.get('/videos/:video', (req, res) => {
  const { video } = req.params;
  return res.sendFile(resolve(__dirname, '../videos', video));
});

app.get('/*', (req, res) => {
  return compressAndStream(resolve(__dirname, '../index.html'), res);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
