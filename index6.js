//Write a function that accepts parameter n and returns factorial of n
console.log("Que 7");

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const res = factorial(5);
console.log(res);