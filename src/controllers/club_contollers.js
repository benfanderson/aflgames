
import "regenerator-runtime/runtime.js";
import { createGamesArray, fetchLiveScores } from '../api_call';

async function createController(gamesParam, gamesProp, res) {
  try {
    const gamesArray = await createGamesArray(gamesParam, gamesProp);
    fetchLiveScores(gamesParam, gamesProp)
    res.render('games_detail', { title: gamesParam, gamesArray });
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }

}

exports.clubLinks = function (req, res) {
  res.render('club_index', { title: 'Games by club'});
};

exports.adelaide = function (req, res) {
  createController('Adelaide', ['hteam','ateam'], res)
};

exports.brisbane = function (req, res) {
  createController('Brisbane Lions', ['hteam','ateam'], res)
};

exports.carlton = function (req, res) {
  createController('Carlton', ['hteam','ateam'], res)
};

exports.collingwood = function (req, res) {
  createController('Collingwood', ['hteam','ateam'], res)
};

exports.essendon = function (req, res) {
  createController('Essendon', ['hteam','ateam'], res)
};

exports.fremantle = function (req, res) {
  createController('Fremantle', ['hteam','ateam'], res)
};

exports.geelong = function (req, res) {
  createController('Geelong', ['hteam','ateam'], res)
};

exports.goldcoast = function (req, res) {
  createController('Gold Coast', ['hteam','ateam'], res)
};

exports.gws = function (req, res) {
  createController('Greater Western Sydney', ['hteam','ateam'], res)
};

exports.hawthorn = function (req, res) {
  createController('Hawthorn', ['hteam','ateam'], res)
};

exports.melbourne = function (req, res) {
  createController('Melbourne', ['hteam','ateam'], res)
};

exports.northmelbourne = function (req, res) {
  createController('North Melbourne', ['hteam','ateam'], res)
};

exports.portadelaide = function (req, res) {
  createController('Port Adelaide', ['hteam','ateam'], res)
};

exports.richmond = function (req, res) {
  createController('Richmond', ['hteam','ateam'], res)
};

exports.sydney = function (req, res) {
  createController('Sydney', ['hteam','ateam'], res)
};

exports.stkilda = function (req, res) {
  createController('St Kilda', ['hteam','ateam'], res)
};

exports.westcoast = function (req, res) {
  createController('West Coast', ['hteam','ateam'], res)
};

exports.westernbulldogs = function (req, res) {
  createController('Western Bulldogs', ['hteam','ateam'], res)
};