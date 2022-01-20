function f(n) {
    if (isNaN(parseFloat(n))) {
        return "Error: parameter type is not a Number"
    } else {
        return n * n * n
    }
}

console.log(f(2))
console.log(f("test"))