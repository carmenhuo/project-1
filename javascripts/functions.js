// jshint esversion: 6
// Req. 3b
let arrAvg = arr => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
//Req. 3c array max

let arrMax = arr => {
  let max = 0;
  arr.forEach(function(elem) {
    if (max < elem) max = elem;
  });
  return max;
};
