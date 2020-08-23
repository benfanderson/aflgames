const express = require('express');

const router = express.Router();
const controllers = require('../controllers/controller');

router.get('/', controllers.roundLinks);
router.get('/round1', controllers.getRound1);
router.get('/round2', controllers.getRound2);
router.get('/round3', controllers.getRound3);
router.get('/round4', controllers.getRound4);
router.get('/round5', controllers.getRound5);
router.get('/round6', controllers.getRound6);
router.get('/round7', controllers.getRound7);
router.get('/round8', controllers.getRound8);
router.get('/round9', controllers.getRound9);
router.get('/round10', controllers.getRound10);
router.get('/round11', controllers.getRound11);
router.get('/round12', controllers.getRound12);

module.exports = router;