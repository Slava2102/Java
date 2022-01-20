function f() {
    var summ = 0
    for (var i = 0; i < arguments.length; i++) {
        if (isNaN(parseFloat(arguments[i]))) {
            return "Error: parameter type is not a Number "
        }
        else {
            summ += arguments[i]
        }
    }
    return summ

}

f(1, 2, 3)
f(1, 1, 1, 1, 1, 1, 1, 1)
console.log(f(1, 2, 's', 4))