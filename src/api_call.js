const axios = require('axios');
const moment = require('moment');
const tzMoment = require('moment-timezone');
const { io } = require('./index');
import { homeLogo, awayLogo } from './club_logo';
let interval;

async function makeGetRequest(url) {
    try {
      const season = await axios.get(url);
      return await season.data.games;
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
}

async function createGamesArray(gameParam, gameProp, socket = undefined) {
  try {
    const games = await makeGetRequest('https://api.squiggle.com.au/?q=games;year=2020');
    const gamesArray = [];
    games.forEach( element => {
      if (element[gameProp[0]] === gameParam || element[gameProp[1]] === gameParam) {
        element.hlogo = homeLogo(element.hteam);
        element.alogo = awayLogo(element.ateam);
        element.date = tzMoment.tz(element.date, 'Australia/Melbourne');
        element.date = moment(element.date).local();
        element.time = moment(element.date).format('h:mma');
        element.day = moment(element.date).format('ddd MMM D');
        gamesArray.push(element);
      }
    });
    if (socket) {
      socket.emit('gamesAPI', gamesArray)
    } else {
      return gamesArray;
    }
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
}

function fetchLiveScores (gameParam, gameProp) {
  try {
    io.on('connect', (socket) => {
      if (interval) {
        clearInterval(interval);
      }
      interval = setInterval(async () => await createGamesArray(gameParam, gameProp, socket) , 3000);
    });
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
}

export async function createController(gamesParam, gamesProp, res) {
  try {
    const gamesArray = await createGamesArray(gamesParam, gamesProp);
    fetchLiveScores(gamesParam, gamesProp)
    if (typeof(gamesParam) === 'string') {
      res.render('games_detail', { title: gamesParam, gamesArray });
    } else {
      res.render('games_detail', { title: `Round ${gamesParam}`, gamesArray });
    }
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
}