import "regenerator-runtime/runtime.js";
import { createGamesArray, fetchLiveScores } from '../api_call';

exports.index = function (req, res) {
  res.render('index', { title: 'Season 2020' });
};

exports.roundLinks = function (req, res) {
  res.render('round_index', { title: 'Games by round'});
};

exports.getRound1 = function (req, res) {
  (async() => {
    try {
      const gamesArray = await createGamesArray(1, ['round']);
    fetchLiveScores(1, ['round'])
    res.render('games_detail', { title: `Round ${1}`, gamesArray });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};

exports.getRound2 = function (req, res) {
  (async() => {
    try {
      const gamesArray = await createGamesArray(2, ['round']);
    fetchLiveScores(2, ['round'])
    res.render('games_detail', { title: `Round ${2}`, gamesArray });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};

exports.getRound3 = function (req, res) {
  (async() => {
    try {
      const gamesArray = await createGamesArray(3, ['round']);
    fetchLiveScores(3, ['round'])
    res.render('games_detail', { title: `Round ${3}`, gamesArray });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};

// exports.getRound4 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(4, ['round']);
//     fetchLiveScores(4)
//     res.render('games_detail', { title: `Round ${4}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound5 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(5, ['round']);
//     fetchLiveScores(5)
//     res.render('games_detail', { title: `Round ${5}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound6 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(6, ['round']);
//     fetchLiveScores(6)
//     res.render('games_detail', { title: `Round ${6}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound7 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(7, ['round']);
//     fetchLiveScores(7)
//     res.render('games_detail', { title: `Round ${7}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound8 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(8, ['round']);
//     fetchLiveScores(8)
//     res.render('games_detail', { title: `Round ${8}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound9 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(9, ['round']);
//     fetchLiveScores(9)
//     res.render('games_detail', { title: `Round ${9}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound10 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(10, ['round']);
//     fetchLiveScores(10)
//     res.render('games_detail', { title: `Round ${10}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound11 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(11, ['round']);
//     fetchLiveScores(11)
//     res.render('games_detail', { title: `Round ${11}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound12 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(12, ['round']);
//     fetchLiveScores(12)
//     res.render('games_detail', { title: `Round ${12}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound13 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(13, ['round']);
//     fetchLiveScores(13)
//     res.render('games_detail', { title: `Round ${13}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound14 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(14, ['round']);
//     fetchLiveScores(14)
//     res.render('games_detail', { title: `Round ${14}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound15 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray= await createGamesArray(15, ['round']);
//     fetchLiveScores(15)
//     res.render('games_detail', { title: `Round ${15}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound16 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(16, ['round']);
//     fetchLiveScores(16)
//     res.render('games_detail', { title: `Round ${16}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound17 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(17, ['round']);
//     fetchLiveScores(17)
//     res.render('games_detail', { title: `Round ${17}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
// exports.getRound18 = function (req, res) {
//   (async() => {
//     try {
//       const gamesArray = await createGamesArray(18, ['round']);
//     fetchLiveScores(18)
//     res.render('games_detail', { title: `Round ${18}`, gamesArray });
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   })()
// };
