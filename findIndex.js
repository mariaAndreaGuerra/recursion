const express = require('express');
const app = express();
const port = 3000;

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

module.exports = {
  findIndex
};