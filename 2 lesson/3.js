f(9, 3, 2); // 3
f('s', 9, 3) // Error: all parameters type should be a Number



function f() {
    for (var i = 0; i < arguments.length; i++) {
        if (isNaN(parseFloat(arguments[i]))) {
            console.log("Error: parameter type is not a Number ")
        }
    }
    console.log((arguments[0] - arguments[1]) / arguments[2])
}