const add = function(num1,num2) {
  return num1 + num2;
};

const subtract = function(num1,num2) {
  return num1 - num2;
};

const sum = function(...args) {
  let sum = 0;
  args.forEach(element => {
    if (typeof element == 'object') { 
      for(let i = 0; i < args.length; i++) {
          args[i].forEach(element => {
            sum += element
          });
        }
      }
    else {
      sum += element;
    }})
    
    return parseInt(sum);
    } 
  
      
      
        
            
          
      

const multiply = function(...args) {
  let result = 1;
  args.forEach(element => {
    if (typeof element == 'object') { 
      for(let i = 0; i < args.length; i++) {
          args[i].forEach(element => {
            result *= element
          });
        }
      }
    else {
      result *= element;
    }})
    
    return parseInt(result);
};

const power = function(base, pot) {
  let result = base;
  for (let i = 0; i < pot -1; i++) {
    result *= base;
  }
  return result
};

const factorial = function(fat) {
  let n = fat - 1;
  let result = 1;
  
	if (n > 0) {
    result = fat * factorial(n)
  }
  return result;
};
    

console.log(factorial(5))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
