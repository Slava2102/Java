f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number



function f() {


    switch (arguments[0]) {
        case 1:
            console.log("Понедельник")
            break
        case 2:
            console.log("Вторник")
            break
        case 3:
            console.log("Среда")
            break
        case 4:
            console.log("Четверг")
            break
        case 5:
            console.log("Пятница")
            break
        case 6:
            console.log("Суббота")
            break
        case 7:
            console.log("Воскресенье")
            break
        default:
            if (typeof arguments[0] === "string") {
                console.log("Error: parameter type is not a Number ")
            }
            else {
                console.log("Error: parameter should be in the range of 1 to 7 ")
            }
    }
}