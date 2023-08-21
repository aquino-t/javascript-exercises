const palindromes = function (string) {
    let newString = string.replace(/[" ".,!?]/g, "");
    
    let upperString = newString.toUpperCase();
    
    let reverseString = upperString.split("").reverse().join("");
    
    if (upperString == reverseString) {
        return true;
    }
    else {
        return false;
    }
};

palindromes("A car a man a maraca");

// Do not edit below this line
module.exports = palindromes;
