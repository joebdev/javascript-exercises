const sumAll = function(a, b) {
    let sum = 0

    if (typeof a !== 'number' || typeof b !== 'number') return 'ERROR'
    if (Number.isInteger(a) !== true || Number.isInteger(b) !== true) return 'ERROR'
    if (a < 0 || b < 0) return 'ERROR'

    const [start, end] = a < b ? [a, b] : [b, a]

    for (let i = start; i <= end; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
