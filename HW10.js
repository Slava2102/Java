var arr = [6, 5, 4, 3, 2, 1];
// [1,2,3,4,5,6]

for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}