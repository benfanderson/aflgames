const express = require('express');
const path = require('path');

const controllers = require('./controllers/controller')

const app = express();
const port = process.env.PORT || '8000'


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get('/', controllers.roundLinks)
app.get('/round1', controllers.getRound1)
app.get('/round2', controllers.getRound2)
app.get('/round3', controllers.getRound3)
app.get('/round4', controllers.getRound4)
app.get('/round5', controllers.getRound5)

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
