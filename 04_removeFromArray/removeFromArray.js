const removeFromArray = function (array, ...arg) {
    let filtered_array = array;
    for (const ar of arg) {
        filtered_array = filtered_array.filter(item => item !== ar)
    }
    return filtered_array
};

// Do not edit below this line
module.exports = removeFromArray;
