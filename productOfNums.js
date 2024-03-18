const express = require('express');
const app = express();
const port = 3000;

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

module.exports = {
  product
};