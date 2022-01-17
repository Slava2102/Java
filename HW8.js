var arr = [1, 2, 3, 4];
let result = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] % 2 == 0) {
        result += arr[i]
    }

}