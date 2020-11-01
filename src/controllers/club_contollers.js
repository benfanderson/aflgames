
import "regenerator-runtime/runtime.js";
import { createGamesArray, fetchLiveScores } from '../api_call';

exports.clubLinks = function (req, res) {
  res.render('club_index', { title: 'Games by club'});
};

exports.adelaide = function (req, res) {
  (async()=>{
    try {
      const gamesArray = await createGamesArray('Adelaide', ['hteam','ateam']);
      fetchLiveScores('Adelaide', ['hteam', 'ateam'])
      res.render('games_detail', { title: 'Adelaide', gamesArray });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};

exports.brisbane = function (req, res) {
  (async() => {
    try {
      const gamesArray = await createGamesArray('Brisbane Lions', ['hteam', 'ateam']);
      fetchLiveScores('Brisbane Lions', ['hteam', 'ateam'])
    res.render('games_detail', { title: 'Brisbane', gamesArray });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  }
  )()
};

exports.carlton = function (req, res) {
  (async() => {
    try {
      const gamesArray = await createGamesArray('Carlton', ['hteam', 'ateam']);
      fetchLiveScores('Carlton', ['hteam', 'ateam'])
    res.render('games_detail', { title: 'Carlton', gamesArray });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  }
  )()
};

  // exports.collingwood = function (req, res) {
  //   (async() => {
  //     try {
  //       const gamesArray = await createGamesArray('Collingwood', ['hteam', 'ateam']);
  //       fetchLiveScores('Collingwood')
  //     res.render('games_detail', { title: 'Collingwood', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   }
  //   )()
  // };

  // exports.essendon = function (req, res) {
  //   (async() => {
  //     try {
  //       const gamesArray = await createGamesArray('Essendon', ['hteam', 'ateam']);
  //       fetchLiveScores('Essendon')
  //     res.render('games_detail', { title: 'Essendon', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   }
  //   )()
  // };

  // exports.fremantle = function (req, res) {
  //   (async() => {
  //     try {
  //       const gamesArray = await createGamesArray('Fremantle', ['hteam', 'ateam']);
  //       fetchLiveScores('Fremantle')
  //     res.render('games_detail', { title: 'Fremantle', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   }
  //   )()
  // };

  // exports.geelong = function (req, res) {
  //   (async() => {
  //     try {
  //       const gamesArray = await createGamesArray('Geelong', ['hteam', 'ateam']);
  //       fetchLiveScores('Geelong')
  //     res.render('games_detail', { title: 'Geelong', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   }
  //   )()
  // };

  // exports.goldcoast = function (req, res) {
  //   (async() => {
  //     try {
  //       const gamesArray = await createGamesArray('Gold Coast', ['hteam', 'ateam']);
  //       fetchLiveScores('Gold Coast')
  //     res.render('games_detail', { title: 'Gold Coast', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   }
  //   )()
  // };

  // exports.gws = function (req, res) {
  //   (async() => {
  //     try {
  //       const gamesArray = await createGamesArray('Greater Western Sydney', ['hteam', 'ateam']);
  //       fetchLiveScores('Greater Western Sydney')
  //     res.render('games_detail', { title: 'Greater Western Sydney', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   }
  //   )()
  // };

  // exports.hawthorn = function (req, res) {
  //   (async() => {
  //     try {
  //       const gamesArray = await createGamesArray('Hawthorn', ['hteam', 'ateam']);
  //       fetchLiveScores('Hawthorn')
  //     res.render('games_detail', { title: 'Hawthorn', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   }
  //   )()
  // };

  // exports.melbourne = function (req, res) {
  //   (async() => {
  //     try {
  //       const gamesArray = await createGamesArray('Melbourne', ['hteam', 'ateam']);
  //       fetchLiveScores('Melbourne')
  //     res.render('games_detail', { title: 'Melbourne', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   }
  //   )()
  // };
  // exports.northmelbourne = function (req, res) {
  //   (async() => {
  //     try {
  //       const gamesArray = await createGamesArray('North Melbourne', ['hteam', 'ateam']);
  //       fetchLiveScores('North Melbourne')
  //     res.render('games_detail', { title: 'North Melbourne', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   }
  //   )()
  // };

  // exports.portadelaide = function (req, res) {
  //   (async()=>{
  //     try {
  //       const gamesArray = await createGamesArray('Port Adelaide', ['hteam','ateam']);
  //       fetchLiveScores('Port Adelaide')
  //       res.render('games_detail', { title: 'Port Adelaide', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   })()
  // };

  // exports.richmond = function (req, res) {
  //   (async()=>{
  //     try {
  //       const gamesArray = await createGamesArray('Richmond', ['hteam','ateam']);
  //       fetchLiveScores('Richmond')
  //       res.render('games_detail', { title: 'Richmond', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   })()
  // };

  // exports.sydney = function (req, res) {
  //   (async()=>{
  //     try {
  //       const gamesArray = await createGamesArray('Sydney', ['hteam','ateam']);
  //       fetchLiveScores('Sydney')
  //       res.render('games_detail', { title: 'Sydney', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   })()
  // };

  // exports.stkilda = function (req, res) {
  //   (async()=>{
  //     try {
  //       const gamesArray = await createGamesArray('St Kilda', ['hteam','ateam']);
  //       fetchLiveScores('St Kilda')
  //       res.render('games_detail', { title: 'St Kilda', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   })()
  // };

  // exports.stkilda = function (req, res) {
  //   (async()=>{
  //     try {
  //       const gamesArray = await createGamesArray('St Kilda', ['hteam','ateam']);
  //       fetchLiveScores('St Kilda')
  //       res.render('games_detail', { title: 'St Kilda', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   })()
  // };

  // exports.westcoast = function (req, res) {
  //   (async()=>{
  //     try {
  //       const gamesArray = await createGamesArray('West Coast', ['hteam','ateam']);
  //       fetchLiveScores('West Coast')
  //       res.render('games_detail', { title: 'West Coast', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   })()
  // };

  // exports.westernbulldogs = function (req, res) {
  //   (async()=>{
  //     try {
  //       const gamesArray = await createGamesArray('Western Bulldogs', ['hteam','ateam']);
  //       fetchLiveScores('Western Bulldogs')
  //       res.render('games_detail', { title: 'Western Bulldogs', gamesArray });
  //     } catch (error) {
  //       console.error(`Error: ${error.code}`);
  //     }
  //   })()
  // };
  