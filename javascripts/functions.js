// jshint esversion: 7
// Req. 3b returns averages
let arrAvg = arr => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
//Req. 3c array max returns largest number

let arrMax = arr => {
  let max = 0;
  arr.forEach(function(elem) {
    if (max < elem) max = elem;
  });
  return max;
};

//Req. 3d sumEvens sum of all even numbers
let sumEvens = num => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      sum = sum + num[i];
    }
  }
  return sum;
};

// extra credit alpha position
