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

const getClubInfo = function (club) {
    const clubArray = [];
    gamesArray.forEach( (element) => {
        if((element.hteam === club || element.ateam === club) && element.year === 2020) {
          element.hlogo = homeLogo(element.hteam);
          element.alogo = awayLogo(element.ateam);
          element.date = tzMoment.tz(element.date, 'Australia/Melbourne');
          element.date = element.date.local();
          element.time = moment(element.date).format('h:mma');
          element.day = moment(element.date).format('ddd MMM D');
          clubArray.push(element);
        }
    });
    return clubArray
};

const emitLiveScores = async (socket, club) => {
    try {
        const response = await got('https://api.squiggle.com.au/?q=games')
        const parsed = JSON.parse(response.body);
        const gamesArray = parsed.games;
        const clubArray = [];
        gamesArray.forEach((element) => {
            if ( (element.hteam === club || element.ateam === club) && element.year === 2020) {
                element.date = tzMoment.tz(element.date, 'Australia/Melbourne');
                element.date = moment(element.date).local();
                element.time = moment(element.date).format('h:mma');
                element.day = moment(element.date).format('ddd MMM D');
                clubArray.push(element);
            }
        });
        socket.emit('ClubAPI', clubArray);
    } catch (error) {
        console.error(`Error: ${error.code}`);  
    }
};

const getLiveScores= function (club) {
    io.on('connect', (socket) => {
      if (interval) {
        clearInterval(interval);
      }
      interval = setInterval(() => emitLiveScores(socket, club), 3000);
    });
  };

  exports.clubLinks = function (req, res) {
    res.render('club_index', { title: 'Games by club'});
  };
  
  exports.adelaide = function (req, res) {
    const club = getClubInfo('Adelaide');
    getLiveScores('Adelaide')
    res.render('club_detail', { title: 'Adelaide', club });
  };

  exports.brisbane = function (req, res) {
    const club = getClubInfo('Brisbane Lions');
    getLiveScores('Brisbane Lions')
    res.render('club_detail', { title: 'Brisbane', club });
  };

  exports.carlton = function (req, res) {
    const club = getClubInfo('Carlton');
    getLiveScores('Carlton')
    res.render('club_detail', { title: 'Carlton', club });
  };

  exports.collingwood = function (req, res) {
    const club = getClubInfo('Collingwood');
    getLiveScores('Collingwood')
    res.render('club_detail', { title: 'Collingwood', club });
  };

  exports.essendon = function (req, res) {
    const club = getClubInfo('Essendon');
    getLiveScores('Essendon')
    res.render('club_detail', { title: 'Essendon', club });
  };

  exports.fremantle = function (req, res) {
    const club = getClubInfo('Fremantle');
    getLiveScores('Fremantle')
    res.render('club_detail', { title: 'Fremantle', club });
  };

  exports.geelong = function (req, res) {
    const club = getClubInfo('Geelong');
    getLiveScores('Geelong')
    res.render('club_detail', { title: 'Geelong', club });
  };

  exports.goldcoast = function (req, res) {
    const club = getClubInfo('Gold Coast');
    getLiveScores('Gold Coast')
    res.render('club_detail', { title: 'Gold Coast', club });
  };

  exports.gws = function (req, res) {
    const club = getClubInfo('Greater Western Sydney');
    getLiveScores('Greater Western Sydney')
    res.render('club_detail', { title: 'Greater Western Sydney', club });
  };

  exports.hawthorn = function (req, res) {
    const club = getClubInfo('Hawthorn');
    getLiveScores('Hawthorn')
    res.render('club_detail', { title: 'Hawthorn', club });
  };

  exports.melbourne = function (req, res) {
    const club = getClubInfo('Melbourne');
    getLiveScores('Melbourne')
    res.render('club_detail', { title: 'Melbourne', club });
  };

  exports.northmelbourne = function (req, res) {
    const club = getClubInfo('North Melbourne');
    getLiveScores('North Melbourne')
    res.render('club_detail', { title: 'North Melbourne', club });
  };

  exports.portadelaide = function (req, res) {
    const club = getClubInfo('Port Adelaide');
    getLiveScores('Port Adelaide')
    res.render('club_detail', { title: 'Port Adelaide', club });
  };

  exports.richmond = function (req, res) {
    const club = getClubInfo('Richmond');
    getLiveScores('Richmond')
    res.render('club_detail', { title: 'Richmond', club });
  };

  exports.stkilda = function (req, res) {
    const club = getClubInfo('St Kilda');
    getLiveScores('St Kilda')
    res.render('club_detail', { title: 'St Kilda', club });
  };

  exports.sydney = function (req, res) {
    const club = getClubInfo('Sydney');
    getLiveScores('Sydney')
    res.render('club_detail', { title: 'Sydney', club });
  };

  exports.sydney = function (req, res) {
    const club = getClubInfo('Sydney');
    getLiveScores('Sydney')
    res.render('club_detail', { title: 'Sydney', club });
  };

  exports.westcoast = function (req, res) {
    const club = getClubInfo('West Coast');
    getLiveScores('West Coast')
    res.render('club_detail', { title: 'West Coast', club });
  };

  exports.westernbulldogs = function (req, res) {
    const club = getClubInfo('Western Bulldogs');
    getLiveScores('Western Bulldogs')
    res.render('club_detail', { title: 'Western Bulldogs', club });
  };