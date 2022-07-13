const fibonacci = function (num) {

    if (num < 0) return "OOPS";

    let fib = [];
    for (i = 0; i <= parseInt(num); i++) {
        if (i == 0 || i == 1) {
            fib.push(i);
        } else {
            fib.push(fib[i - 1] + fib[i - 2])
        }

    }
    return fib[fib.length - 1]
};
console.log(fibonacci(8))
// Do not edit below this line
module.exports = fibonacci;
// 0,1,