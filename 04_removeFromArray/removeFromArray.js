
const removeFromArray = function(array, ...remove) {
    let arrayNew = [];
    array.forEach((item) => {
        if (!remove.includes(item)) {
            arrayNew.push(item);
        }
    });
    return arrayNew;
}

// Do not edit below this line
module.exports = removeFromArray;
