import "regenerator-runtime/runtime.js";
import { createController } from '../api_call';

exports.index = function (req, res) {
  res.render('index', { title: 'Season 2020' });
};

exports.roundLinks = function (req, res) {
  res.render('round_index', { title: 'Games by round'});
};

exports.getRound1 = function (req, res) {
  createController(1, ['round'], res)
};

exports.getRound2 = function (req, res) {
  createController(2, ['round'], res)
};

exports.getRound3 = function (req, res) {
  createController(3, ['round'], res)
};

exports.getRound4 = function (req, res) {
  createController(4, ['round'], res)
};

exports.getRound5 = function (req, res) {
  createController(5, ['round'], res)
};

exports.getRound6 = function (req, res) {
  createController(6, ['round'], res)
};

exports.getRound7 = function (req, res) {
  createController(7, ['round'], res)
};

exports.getRound8 = function (req, res) {
  createController(8, ['round'], res)
};

exports.getRound9 = function (req, res) {
  createController(9, ['round'], res)
};

exports.getRound10 = function (req, res) {
  createController(10, ['round'], res)
};

exports.getRound11 = function (req, res) {
  createController(11, ['round'], res)
};

exports.getRound12 = function (req, res) {
  createController(12, ['round'], res)
};

exports.getRound13 = function (req, res) {
  createController(13, ['round'], res)
};

exports.getRound14 = function (req, res) {
  createController(14, ['round'], res)
};

exports.getRound15 = function (req, res) {
  createController(15, ['round'], res)
};

exports.getRound16 = function (req, res) {
  createController(16, ['round'], res)
};

exports.getRound17 = function (req, res) {
  createController(17, ['round'], res)
};

exports.getRound18 = function (req, res) {
  createController(18, ['round'], res)
};