const got = require('got');
const moment = require('moment');
const tzMoment = require('moment-timezone');
const { io } = require('../index');
import "regenerator-runtime/runtime.js";
import { homeLogo, awayLogo } from '../club_logo';
let interval;
let gamesArray;

(async() => {
  try {
    const response = await got('https://api.squiggle.com.au/?q=games');
    const parsed = JSON.parse(response.body);
    gamesArray = parsed.games;
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
})()



const getRoundInfo = function (round) {
  const roundArray = [];
  gamesArray.forEach( (element)=> {
    if (element.round === round && element.year === 2020) {
      element.hlogo = homeLogo(element.hteam);
      element.alogo = awayLogo(element.ateam);
      element.date = tzMoment.tz(element.date, 'Australia/Melbourne');
      element.date = moment(element.date).local();
      element.time = moment(element.date).format('h:mma');
      element.day = moment(element.date).format('ddd MMM D');
      roundArray.push(element);
    }
  });
  return roundArray
};

const emitLiveScores = async (socket, round) => {
  try {
    const response = await got('https://api.squiggle.com.au/?q=games');
    const parsed = JSON.parse(response.body);
    const gamesArray = parsed.games;
    const roundArray = [];
    gamesArray.forEach((element) => {
      if (element.round === round && element.year === 2020) {
        element.date = tzMoment.tz(element.date, 'Australia/Melbourne');
        element.date = moment(element.date).local();
        element.time = moment(element.date).format('h:mma');
        element.day = moment(element.date).format('ddd MMM D');
        roundArray.push(element);
      }
    });
    socket.emit('RoundAPI', roundArray);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
  
};

const getLiveScores= function (round) {
  io.on('connect', (socket) => {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => emitLiveScores(socket, round), 3000);
  });
};

exports.index = function (req, res) {
  res.render('index', { title: 'Season 2020' });
};

exports.roundLinks = function (req, res) {
  res.render('round_index', { title: 'Games by round'});
};

// exports.clubLinks = function (req, res) {
//   res.render('club_index', { title: 'Games by club'});
// };

exports.getRound1 = function (req, res) {
  const round = getRoundInfo(1);
  getLiveScores(1)
  res.render('round_detail', { title: 1, round });
};

exports.getRound2 = function (req, res) {
  const round = getRoundInfo(2);
  getLiveScores(2)
  res.render('round_detail', { title: 2, round });
};

exports.getRound3 = function (req, res) {
  const round = getRoundInfo(3);
  getLiveScores(3)
  res.render('round_detail', { title: 3, round });
};

exports.getRound4 = function (req, res) {
  const round = getRoundInfo(4);
  getLiveScores(4)
  res.render('round_detail', { title: 4, round });
};

exports.getRound5 = function (req, res) {
  const round = getRoundInfo(5);
  getLiveScores(5)
  res.render('round_detail', { title: 5, round });
};

exports.getRound6 = function (req, res) {
  const round = getRoundInfo(6);
  getLiveScores(6)
  res.render('round_detail', { title: 6, round });
};

exports.getRound7 = function (req, res) {
  const round = getRoundInfo(7);
  getLiveScores(7)
  res.render('round_detail', { title: 7, round });
};

exports.getRound8 = function (req, res) {
  const round = getRoundInfo(8);
  getLiveScores(8)
  res.render('round_detail', { title: 8, round });
};

exports.getRound9 = function (req, res) {
  const round = getRoundInfo(9);
  getLiveScores(9)
  res.render('round_detail', { title: 9, round });
};

exports.getRound10 = function (req, res) {
  const round = getRoundInfo(10);
  getLiveScores(10)
  res.render('round_detail', { title: 10, round });
};

exports.getRound11 = function (req, res) {
  const round = getRoundInfo(11);
  getLiveScores(11)
  res.render('round_detail', { title: 11, round });
};

exports.getRound12 = function (req, res) {
  const round = getRoundInfo(12);
  getLiveScores(12)
  res.render('round_detail', { title: 12, round});
};

exports.getRound13 = function (req, res) {
  const round = getRoundInfo(13);
  getLiveScores(13)
  res.render('round_detail', { title: 13, round});
};

exports.getRound14 = function (req, res) {
  const round = getRoundInfo(14);
  getLiveScores(14)
  res.render('round_detail', { title: 14, round});
};

exports.getRound15 = function (req, res) {
  const round = getRoundInfo(15);
  getLiveScores(15)
  res.render('round_detail', { title: 15, round});
};

exports.getRound16 = function (req, res) {
  const round = getRoundInfo(16);
  getLiveScores(16)
  res.render('round_detail', { title: 16, round});
};

exports.getRound17 = function (req, res) {
  const round = getRoundInfo(17);
  getLiveScores(17)
  res.render('round_detail', { title: 17, round});
};

exports.getRound18 = function (req, res) {
  const round = getRoundInfo(18);
  getLiveScores(18)
  res.render('round_detail', { title: 18, round});
};