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

      if (element.hteam === 'Adelaide') {
          element.hlogo = '/public/images/AdelaideCrows.svg'
      } else if (element.hteam === 'Brisbane Lions') {
        element.hlogo = '/public/images/BrisbaneLions.svg'
      } else if (element.hteam === 'Carlton') {
        element.hlogo = 'Carlton'
      } else if (element.hteam === 'Collingwood') {
        element.hlogo = 'Collingwood'
      } else if (element.hteam === 'Essendon') {
        element.hlogo = 'Essendon'
      } else if (element.hteam === 'Fremantle') {
        element.hlogo = 'Fremantle'
      } else if (element.hteam === 'Geelong') {
        element.hlogo = 'GeelongCats'
      } else if (element.hteam === 'Gold Coast') {
        element.hlogo = 'GoldCoastSuns'
      } else if (element.hteam === 'Greater Western Sydney') {
        element.hlogo = 'GWSGiants'
      } else if (element.hteam === 'Hawthorn') {
        element.hlogo = 'Hawthorn'
      } else if (element.hteam === 'Melbourne') {
        element.hlogo = 'Melbourne'
      } else if (element.hteam === 'North Melbourne') {
        element.hlogo = 'NorthMelbourne'
      } else if (element.hteam === 'Port Adelaide') {
        element.hlogo = 'PortAdelaide'
      } else if (element.hteam === 'Richmond') {
        element.hlogo = 'Richmond'
      } else if (element.hteam === 'St Kilda') {
        element.hlogo = 'StKilda'
      } else if (element.hteam === 'Sydney') {
        element.hlogo = 'SydneySwans'
      } else if (element.hteam === 'West Coast') {
        element.hlogo = 'WestCoastEagles'  
      } else if (element.hteam === 'Western Bulldogs') {
        element.hlogo = 'WesternBulldogs'
      }
      
        if (element.ateam === 'Adelaide') {
        element.alogo = '/public/images/AdelaideCrows.svg'
        } else if (element.ateam === 'Brisbane Lions') {
        element.alogo = '/public/images/BrisbaneLions.svg'
        } else if (element.ateam === 'Carlton') {
        element.alogo = 'Carlton'
        } else if (element.ateam === 'Collingwood') {
        element.alogo = 'Collingwood'
        } else if (element.ateam === 'Essendon') {
        element.alogo = 'Essendon'
        } else if (element.ateam === 'Fremantle') {
        element.alogo = 'Fremantle'
        } else if (element.ateam === 'Geelong') {
        element.alogo = 'GeelongCats'
        } else if (element.ateam === 'Gold Coast') {
        element.alogo = 'GoldCoastSuns'
        } else if (element.ateam === 'Greater Western Sydney') {
        element.alogo = 'GWSGiants'
        } else if (element.ateam === 'Hawthorn') {
        element.alogo = 'Hawthorn'
        } else if (element.ateam === 'Melbourne') {
        element.alogo = 'Melbourne'
        } else if (element.ateam === 'North Melbourne') {
        element.alogo = 'NorthMelbourne'
        } else if (element.ateam === 'Port Adelaide') {
        element.alogo = 'PortAdelaide'
        } else if (element.ateam === 'Richmond') {
        element.alogo = 'Richmond'
        } else if (element.ateam === 'St Kilda') {
        element.alogo = 'StKilda'
        } else if (element.ateam === 'Sydney') {
        element.alogo = 'SydneySwans'
        } else if (element.ateam === 'West Coast') {
        element.alogo = 'WestCoastEagles'  
        } else if (element.ateam === 'Western Bulldogs') {
        element.alogo = 'WesternBulldogs'
        }
      

      element.date = moment(element.date).local();
      element.time = moment(element.date).format('h:mma');
      element.day = moment(element.date).format('ddd MMM D');
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

exports.getRound6 = function (req, res) {
    const round = getRoundInfo(6);
    res.render('round_detail', { title: 'Round 6', round });
  };