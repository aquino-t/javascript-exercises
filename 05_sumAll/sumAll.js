const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof(a,b)!=="number") {
        return 'ERROR';
    }
    let sum = 0;
    if (b >= a) {
        for (i = 0; i <= b -1; i++) {
            sum += a + i;
        
        }
    }
    else {
        for (i = 0; i <= a -1; i++) {
            sum += b + i;
        }
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
