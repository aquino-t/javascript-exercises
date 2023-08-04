const convertToCelsius = function(f) {
  let c = (f - 32) * (5/9);
  var rounded = Math.round(c * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(c) {
  let f =  c * (9/5) +  32;
  var rounded = Math.round(f * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
