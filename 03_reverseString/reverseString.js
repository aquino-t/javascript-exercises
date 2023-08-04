const reverseString = function(str) {
    let strR = "";
    for (i = str.length - 1; i >= 0; i--) {
        strR = strR + str[i];
    
    }
    return strR;
};

// Do not edit below this line
module.exports = reverseString;
