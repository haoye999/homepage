const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());
app.use(express.static(path.join(__dirname, 'dist')));

const port = 3002;

app.server = app.listen(port, () => {
  console.log(`server running @ http://localhost:${port}`);
});
