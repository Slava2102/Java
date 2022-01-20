getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0);


function getDivisors() {
    var arr = []
    if (typeof arguments[0] === "string") {
        console.log("Error: parameter type is not a Number ")
    }
    else if (arguments[0] === 0) {
        console.log("Error: parameter can't be a 0 ")
    }
    else {
        var test = 1
        while (test <= arguments[0]) {
            console.log(test)
            if (arguments[0] % test === 0) {
                arr.push(test)
            }
            test++
        }
        console.log(arr)
    }
}