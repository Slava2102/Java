var arr = [1, 2, -4, 3, -9, -1, 7]

function isPositive() {
    if (typeof arguments[0] === "string") {
        console.log("Error: parameter type is not a Number ")
    }
    else {
        if (arguments[0] >= 0) {
            return true
        }
        else {
            return false
        }
    }
}

function add(arr) {
    var res = []
    for (var i = 0; i < arr.length; i++) {
        if (isPositive(arr[i]) === true) {
            res.push(arr[i])
        }
    }
    console.log(res)
}

add(arr)


