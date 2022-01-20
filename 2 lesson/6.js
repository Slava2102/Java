console.log(isEven(3)); // false
console.log(isEven(4)); // true
isEven('Content'); // Error: parameter type is not a Number


function isEven() {
    if (typeof arguments[0] === "string") {
        console.log("Error: parameter type is not a Number ")
    }
    else {
        if (arguments[0] % 2 === 0) {
            return true
        }
        else {
            return false
        }
    }
}