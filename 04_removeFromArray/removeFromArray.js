const removeFromArray = function (...arg) {
    const array = arg[0]
    return array.filter(val => !arg.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
