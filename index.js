const express = require('express');
const app = express();
const http = require('http').createServer(app);
exports.io = require('socket.io')(http);
const path = require('path');
const routes = require('./routes/routes');
const port = process.env.PORT || '8000';


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/afl', routes);
http.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
