function sum(sum1, sum2){
    return sum1 + sum2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2, 3, sum));