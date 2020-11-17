const express = require('express');
const path = require('path');
const enforce = require('express-sslify');
const compression = require('compression');

const port = process.env.PORT || 4000;
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(compression());
}

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
