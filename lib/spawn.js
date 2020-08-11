const path = require('path');
const { spawn } = require('child_process');
const bin = require('unrar-binaries');

/**
* @param {String[]} args
*/
module.exports = function (...args) {
  return spawn(bin, ...args);
}