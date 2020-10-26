const { io } = require('../index');
import "regenerator-runtime/runtime.js";
import { createGamesArray } from '../api_call';
let interval;

function fetchLiveScores (round) {
  
  io.on('connect', (socket) => {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(async () => await createGamesArray(round, ['round'], socket) , 3000);
  });
}

exports.index = function (req, res) {
  res.render('index', { title: 'Season 2020' });
};

exports.roundLinks = function (req, res) {
  res.render('round_index', { title: 'Games by round'});
};

exports.getRound1 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(1, ['round']);
    fetchLiveScores(1)
    res.render('round_detail', { title: 1, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};

exports.getRound2 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(2, ['round']);
    fetchLiveScores(2)
    res.render('round_detail', { title: 2, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};

exports.getRound3 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(3, ['round']);
    fetchLiveScores(3)
    res.render('round_detail', { title: 3, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};

exports.getRound4 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(4, ['round']);
    fetchLiveScores(4)
    res.render('round_detail', { title: 4, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound5 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(5, ['round']);
    fetchLiveScores(5)
    res.render('round_detail', { title: 5, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound6 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(6, ['round']);
    fetchLiveScores(6)
    res.render('round_detail', { title: 6, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound7 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(7, ['round']);
    fetchLiveScores(7)
    res.render('round_detail', { title: 7, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound8 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(8, ['round']);
    fetchLiveScores(8)
    res.render('round_detail', { title: 8, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound9 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(9, ['round']);
    fetchLiveScores(9)
    res.render('round_detail', { title: 9, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound10 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(10, ['round']);
    fetchLiveScores(10)
    res.render('round_detail', { title: 10, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound11 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(11, ['round']);
    fetchLiveScores(11)
    res.render('round_detail', { title: 11, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound12 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(12, ['round']);
    fetchLiveScores(12)
    res.render('round_detail', { title: 12, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound13 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(13, ['round']);
    fetchLiveScores(13)
    res.render('round_detail', { title: 13, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound14 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(14, ['round']);
    fetchLiveScores(14)
    res.render('round_detail', { title: 14, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound15 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(15, ['round']);
    fetchLiveScores(15)
    res.render('round_detail', { title: 15, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound16 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(16, ['round']);
    fetchLiveScores(16)
    res.render('round_detail', { title: 16, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound17 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(17, ['round']);
    fetchLiveScores(17)
    res.render('round_detail', { title: 17, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
exports.getRound18 = function (req, res) {
  (async() => {
    try {
      const round = await createGamesArray(18, ['round']);
    fetchLiveScores(18)
    res.render('round_detail', { title: 18, round });
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  })()
};
