const express = require('express');
const app = express();
const port = 3000;

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

module.exports = {
  everyOther
};