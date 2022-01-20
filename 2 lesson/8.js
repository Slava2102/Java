
var arr = [1, 2, 3];
var i = 0;

function consoleRec(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            console.log(arr[i]);
            i++;
            if (i < arr.length) consoleRec(arr);
        }
        else {
            console.log("Error: parameter can't be an empty")
        }
    }
    else {
        console.log("Error: parameter type should be an array")
    }
}

consoleRec(arr);