const express = require('express');
const app = express();
const port = 3000;

function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr);
}

module.exports = {
  revString
};