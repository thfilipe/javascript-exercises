const palindromes = function (words) {

    let processed = words.toLowerCase().replace(/[^a-z]/g, "");

    return (
        processed
            .split("")
            .reverse()
            .join("") == processedString
    );
};

console.log(palindromes("Animal loots foliated detail of stool lamina."))
// Do not edit below this line
module.exports = palindromes;

// animallootsfoliateddetailofstoollamina