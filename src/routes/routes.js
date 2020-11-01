const express = require('express');

const router = express.Router();
const controllers = require('../controllers/round_controller');
const clubController = require('../controllers/club_contollers')

router.get('/', controllers.index);

router.get('/round_index', controllers.roundLinks);
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
router.get('/round13', controllers.getRound13);
router.get('/round14', controllers.getRound14);
router.get('/round15', controllers.getRound15);
router.get('/round16', controllers.getRound16);
router.get('/round17', controllers.getRound17);
router.get('/round18', controllers.getRound18);

router.get('/club_index', clubController.clubLinks);
router.get('/adelaide', clubController.adelaide);
router.get('/brisbane', clubController.brisbane);
router.get('/carlton', clubController.carlton);
router.get('/collingwood', clubController.collingwood);
router.get('/essendon', clubController.essendon);
router.get('/fremantle', clubController.fremantle);
router.get('/geelong', clubController.geelong);
router.get('/goldcoast', clubController.goldcoast);
router.get('/greaterwesternsydney', clubController.gws);
router.get('/hawthorn', clubController.hawthorn);
router.get('/melbourne', clubController.melbourne);
router.get('/northmelbourne', clubController.northmelbourne);
router.get('/portadelaide', clubController.portadelaide);
router.get('/richmond', clubController.richmond);
router.get('/stkilda', clubController.stkilda);
router.get('/sydney', clubController.sydney);
router.get('/westcoast', clubController.westcoast);
router.get('/westernbulldogs', clubController.westernbulldogs);

module.exports = router;
