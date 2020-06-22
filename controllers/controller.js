const got = require('got');
const moment = require('moment');
const tzMoment = require('moment-timezone');

let gamesArray;

exports.roundLinks = function (req, res) {
  res.render('index', { title: 'Season 2020' });
};

(async () => {
  try {
    const response = await got('https://api.squiggle.com.au/?q=games');
    const parsed = JSON.parse(response.body);
    gamesArray = parsed.games;
  } catch (error) {
    console.log(error);
  }
})();

function getRoundInfo(roundNumber) {
  const roundArray = [];
  gamesArray.forEach((element) => {
    if (element.round === roundNumber && element.year === 2020) {
      if (element.venue === 'M.C.G.' || element.venue === 'Marvel Stadium' || element.venue === 'Kardinia Park' || element.venue === 'Eureka Stadium') {
        element.date = tzMoment.tz(element.date, 'Australia/Melbourne');
      } else if (element.venue === 'S.C.G.' || element.venue === 'Sydney Showground') {
        element.date = tzMoment.tz(element.date, 'Australia/Sydney');
      } else if (element.venue === 'York Park' || element.venue === 'Bellerive Oval') {
        element.date = tzMoment.tz(element.date, 'Australia/Hobart');
      } else if (element.venue === 'Carrara' || element.location === 'Gabba') {
        element.date = tzMoment.tz(element.date, 'Australia/Brisbane');
      } else if (element.venue === 'Marrara Ova' || element.venue === 'Traeger Park') {
        element.date = tzMoment.tz(element.date, 'Australia/Darwin');
      } else if (element.venue === 'Adelaide Oval') {
        element.date = tzMoment.tz(element.date, 'Australia/Adelaide');
      } else if (element.venue === 'Perth Stadium') {
        element.date = tzMoment.tz(element.date, 'Australia/Perth');
      }
      element.date = moment(element.date).local();
      element.time = moment(element.date).format('h:mma');
      element.day = moment(element.date).format('dddd');
      roundArray.push(element);
    }
  });
  return roundArray;
}


exports.getRound1 = function (req, res) {
  const round = getRoundInfo(1);
  res.render('round_detail', { title: 'Round 1', round });
};

exports.getRound2 = function (req, res) {
  const round = getRoundInfo(2);
  res.render('round_detail', { title: 'Round 2', round });
};

exports.getRound3 = function (req, res) {
  const round = getRoundInfo(3);
  res.render('round_detail', { title: 'Round 3', round });
};

exports.getRound4 = function (req, res) {
  const round = getRoundInfo(4);
  res.render('round_detail', { title: 'Round 4', round });
};

exports.getRound5 = function (req, res) {
  const round = getRoundInfo(5);
  res.render('round_detail', { title: 'Round 5', round });
};
