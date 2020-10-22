const axios = require('axios');

async function makeGetRequest(url) {
    try {
      const season = await axios.get(url);
      return await season.data.games;
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
}

export async function createGamesArray(gameParam, gameProp1, gameProp2) {
  try {
    const games = await makeGetRequest('https://api.squiggle.com.au/?q=games;year=2020;round=1');
    const roundArray = [];
    games.forEach( element => {
      if (element[gameProp1] === gameParam || element[gameProp2] === gameParam) {
        element.hlogo = homeLogo(element.hteam);
      element.alogo = awayLogo(element.ateam);
      element.date = tzMoment.tz(element.date, 'Australia/Melbourne');
      element.date = moment(element.date).local();
      element.time = moment(element.date).format('h:mma');
      element.day = moment(element.date).format('ddd MMM D');
      roundArray.push(element);
      console.log(roundArray);
      }
    });
    return roundArray;
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
}
