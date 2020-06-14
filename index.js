const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const app = express();
const port = process.env.PORT || '8000'


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use('/afl', routes);
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

