const findTheOldest = function(array) {
    const oldest = array.sort((a, b) => {
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        let lastGuy = a.yearOfDeath - a.yearOfBirth;
        let nextGuy = b.yearOfDeath - b.yearOfBirth;
        if (!a.yearOfDeath) {
            lastGuy = anoAtual - a.yearOfBirth;
        }
        if (!b.yearOfDeath) {
            nextGuy = anoAtual - b.yearOfBirth;
        }
        return lastGuy > nextGuy ? -1 : 1;
    })
    return oldest[0];
};
            
    

// Do not edit below this line
module.exports = findTheOldest;
