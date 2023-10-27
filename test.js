const numbers = [10, 20, 30, 40, 50]
function calculateAverage(arr) {
    a = arr.length;
    b = 0
    while (a > 0) {
        b += arr[ a - 1];
        a -= 1;
        }
    b /= arr.length
    console.log(b)
}
calculateAverage(numbers)