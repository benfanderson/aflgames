const got = require('got');
const moment = require('moment');
const tzMoment = require('moment-timezone');
const { io } = require('../index');
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
      if (element.hteam === 'Adelaide') {
        element.hlogo = '/images/AdelaideCrows.svg'
      } else if (element.hteam === 'Brisbane Lions') {
        element.hlogo = '/images/BrisbaneLions.svg'
      } else if (element.hteam === 'Carlton') {
        element.hlogo = '/images/Carlton.svg'
      } else if (element.hteam === 'Collingwood') {
        element.hlogo = '/images/Collingwood.svg'
      } else if (element.hteam === 'Essendon') {
        element.hlogo = '/images/Essendon.svg'
      } else if (element.hteam === 'Fremantle') {
        element.hlogo = '/images/Fremantle.svg'
      } else if (element.hteam === 'Geelong') {
        element.hlogo = '/images/GeelongCats.svg'
      } else if (element.hteam === 'Gold Coast') {
        element.hlogo = '/images/GoldCoastSuns.svg'
      } else if (element.hteam === 'Greater Western Sydney') {
        element.hlogo = '/images/GWSGiants.svg'
      } else if (element.hteam === 'Hawthorn') {
        element.hlogo = '/images/Hawthorn.svg'
      } else if (element.hteam === 'Melbourne') {
        element.hlogo = '/images/Melbourne.svg'
      } else if (element.hteam === 'North Melbourne') {
        element.hlogo = '/images/NorthMelbourne.svg'
      } else if (element.hteam === 'Port Adelaide') {
        element.hlogo = '/images/PortAdelaide.svg'
      } else if (element.hteam === 'Richmond') {
        element.hlogo = '/images/Richmond.svg'
      } else if (element.hteam === 'St Kilda') {
        element.hlogo = '/images/StKilda.svg'
      } else if (element.hteam === 'Sydney') {
        element.hlogo = '/images/SydneySwans.svg'
      } else if (element.hteam === 'West Coast') {
        element.hlogo = '/images/WestCoastEagles.svg'
      } else if (element.hteam === 'Western Bulldogs') {
        element.hlogo = '/images/WesternBulldogs.svg'
      }
      
      if (element.ateam === 'Adelaide') {
      element.alogo = '/images/AdelaideCrows.svg'
      } else if (element.ateam === 'Brisbane Lions') {
      element.alogo = '/images/BrisbaneLions.svg'
      } else if (element.ateam === 'Carlton') {
      element.alogo = '/images/Carlton.svg'
      } else if (element.ateam === 'Collingwood') {
      element.alogo = '/images/Collingwood.svg'
      } else if (element.ateam === 'Essendon') {
      element.alogo = '/images/Essendon.svg'
      } else if (element.ateam === 'Fremantle') {
      element.alogo = '/images/Fremantle.svg'
      } else if (element.ateam === 'Geelong') {
      element.alogo = '/images/GeelongCats.svg'
      } else if (element.ateam === 'Gold Coast') {
      element.alogo = '/images/GoldCoastSuns.svg'
      } else if (element.ateam === 'Greater Western Sydney') {
      element.alogo = '/images/GWSGiants.svg'
      } else if (element.ateam === 'Hawthorn') {
      element.alogo = '/images/Hawthorn.svg'
      } else if (element.ateam === 'Melbourne') {
      element.alogo = '/images/Melbourne.svg'
      } else if (element.ateam === 'North Melbourne') {
      element.alogo = '/images/NorthMelbourne.svg'
      } else if (element.ateam === 'Port Adelaide') {
      element.alogo = '/images/PortAdelaide.svg'
      } else if (element.ateam === 'Richmond') {
      element.alogo = '/images/Richmond.svg'
      } else if (element.ateam === 'St Kilda') {
      element.alogo = '/images/StKilda.svg'
      } else if (element.ateam === 'Sydney') {
      element.alogo = '/images/SydneySwans.svg'
      } else if (element.ateam === 'West Coast') {
      element.alogo = '/images/WestCoastEagles.svg' 
      } else if (element.ateam === 'Western Bulldogs') {
      element.alogo = '/images/WesternBulldogs.svg'
      }
      
      element.date = tzMoment.tz(element.date, 'Australia/Melbourne');
      element.date = moment(element.date).local();
      element.time = moment(element.date).format('h:mma');
      element.day = moment(element.date).format('ddd MMM D');
      roundArray.push(element);
    }
  });
  socket.emit('FromAPI', roundArray);
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

exports.roundLinks = function (req, res) {
  res.render('index', { title: 'Season 2020' });
};

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