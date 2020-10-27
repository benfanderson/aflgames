const { io } = require('../index');
import "regenerator-runtime/runtime.js";
import { createGamesArray } from '../api_call';
let interval;

  function fetchLiveScores (club) {
    io.on('connect', (socket) => {
      if (interval) {
        clearInterval(interval);
      }
      interval = setInterval(async () => await createGamesArray(club, ['hteam', 'ateam'], socket) , 3000);
    });
  }

  exports.clubLinks = function (req, res) {
    res.render('club_index', { title: 'Games by club'});
  };
  
  exports.adelaide = function (req, res) {
    (async()=>{
      try {
        const club = await createGamesArray('Adelaide', ['hteam','ateam']);
        fetchLiveScores('Adelaide')
        res.render('club_detail', { title: 'Adelaide', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    })()
  };

  exports.brisbane = function (req, res) {
    (async() => {
      try {
        const club = await createGamesArray('Brisbane Lions', ['hteam', 'ateam']);
        fetchLiveScores('Brisbane Lions')
      res.render('club_detail', { title: 'Brisbane', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    }
    )()
  };

  exports.carlton = function (req, res) {
    (async() => {
      try {
        const club = await createGamesArray('Carlton', ['hteam', 'ateam']);
        fetchLiveScores('Carlton')
      res.render('club_detail', { title: 'Carlton', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    }
    )()
  };

  exports.collingwood = function (req, res) {
    (async() => {
      try {
        const club = await createGamesArray('Collingwood', ['hteam', 'ateam']);
        fetchLiveScores('Collingwood')
      res.render('club_detail', { title: 'Collingwood', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    }
    )()
  };

  exports.essendon = function (req, res) {
    (async() => {
      try {
        const club = await createGamesArray('Essendon', ['hteam', 'ateam']);
        fetchLiveScores('Essendon')
      res.render('club_detail', { title: 'Essendon', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    }
    )()
  };

  exports.fremantle = function (req, res) {
    (async() => {
      try {
        const club = await createGamesArray('Fremantle', ['hteam', 'ateam']);
        fetchLiveScores('Fremantle')
      res.render('club_detail', { title: 'Fremantle', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    }
    )()
  };

  exports.geelong = function (req, res) {
    (async() => {
      try {
        const club = await createGamesArray('Geelong', ['hteam', 'ateam']);
        fetchLiveScores('Geelong')
      res.render('club_detail', { title: 'Geelong', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    }
    )()
  };

  exports.goldcoast = function (req, res) {
    (async() => {
      try {
        const club = await createGamesArray('Gold Coast', ['hteam', 'ateam']);
        fetchLiveScores('Gold Coast')
      res.render('club_detail', { title: 'Gold Coast', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    }
    )()
  };

  exports.gws = function (req, res) {
    (async() => {
      try {
        const club = await createGamesArray('Greater Western Sydney', ['hteam', 'ateam']);
        fetchLiveScores('Greater Western Sydney')
      res.render('club_detail', { title: 'Greater Western Sydney', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    }
    )()
  };

  exports.hawthorn = function (req, res) {
    (async() => {
      try {
        const club = await createGamesArray('Hawthorn', ['hteam', 'ateam']);
        fetchLiveScores('Hawthorn')
      res.render('club_detail', { title: 'Hawthorn', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    }
    )()
  };

  exports.melbourne = function (req, res) {
    (async() => {
      try {
        const club = await createGamesArray('Melbourne', ['hteam', 'ateam']);
        fetchLiveScores('Melbourne')
      res.render('club_detail', { title: 'Melbourne', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    }
    )()
  };
  exports.northmelbourne = function (req, res) {
    (async() => {
      try {
        const club = await createGamesArray('North Melbourne', ['hteam', 'ateam']);
        fetchLiveScores('North Melbourne')
      res.render('club_detail', { title: 'North Melbourne', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    }
    )()
  };

  exports.portadelaide = function (req, res) {
    (async()=>{
      try {
        const club = await createGamesArray('Port Adelaide', ['hteam','ateam']);
        fetchLiveScores('Port Adelaide')
        res.render('club_detail', { title: 'Port Adelaide', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    })()
  };

  exports.richmond = function (req, res) {
    (async()=>{
      try {
        const club = await createGamesArray('Richmond', ['hteam','ateam']);
        fetchLiveScores('Richmond')
        res.render('club_detail', { title: 'Richmond', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    })()
  };

  exports.sydney = function (req, res) {
    (async()=>{
      try {
        const club = await createGamesArray('Sydney', ['hteam','ateam']);
        fetchLiveScores('Sydney')
        res.render('club_detail', { title: 'Sydney', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    })()
  };

  exports.stkilda = function (req, res) {
    (async()=>{
      try {
        const club = await createGamesArray('St Kilda', ['hteam','ateam']);
        fetchLiveScores('St Kilda')
        res.render('club_detail', { title: 'St Kilda', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    })()
  };

  exports.stkilda = function (req, res) {
    (async()=>{
      try {
        const club = await createGamesArray('St Kilda', ['hteam','ateam']);
        fetchLiveScores('St Kilda')
        res.render('club_detail', { title: 'St Kilda', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    })()
  };

  exports.westcoast = function (req, res) {
    (async()=>{
      try {
        const club = await createGamesArray('West Coast', ['hteam','ateam']);
        fetchLiveScores('West Coast')
        res.render('club_detail', { title: 'West Coast', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    })()
  };

  exports.westernbulldogs = function (req, res) {
    (async()=>{
      try {
        const club = await createGamesArray('Western Bulldogs', ['hteam','ateam']);
        fetchLiveScores('Western Bulldogs')
        res.render('club_detail', { title: 'Western Bulldogs', club });
      } catch (error) {
        console.error(`Error: ${error.code}`);
      }
    })()
  };
  