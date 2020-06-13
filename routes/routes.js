const express = require('express');

const app = express();

const controllers = require('./controllers/controller')

app.get('/', controllers.roundLinks)
app.get('/round1', controllers.getRound1)
app.get('/round2', controllers.getRound2)
app.get('/round3', controllers.getRound3)
app.get('/round4', controllers.getRound4)
app.get('/round5', controllers.getRound5)