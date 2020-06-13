const express = require('express');

const router = express.Router();

const app = express();

const controllers = require('../controllers/controller')

router.get('/', controllers.roundLinks)
router.get('/round1', controllers.getRound1)
router.get('/round2', controllers.getRound2)
router.get('/round3', controllers.getRound3)
router.get('/round4', controllers.getRound4)
router.get('/round5', controllers.getRound5)

module.exports = router;