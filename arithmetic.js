/*
    @author: Yuxuan Wang
    @email: yx703587@dal.ca
    @descp: CSCI 3172 Lab2 arithmetic.js 
*/

// Q(b): arithmetic functions: addition, subtraction, multiplication, and division.
function addition(a, b){
    let res = a + b;
    console.log(res);
    return res;
}

function substract(a, b){
    let res = a - b;
    console.log(res);
    return res;
}

function multiply(a, b){
    let res = a * b;
    console.log(res);
    return res;
}

function divide(a, b){
    let res = a / b;
    console.log(res);
    return res;
}

// sample tests
let a = 3, b = 2;
addition(a, b);
substract(a, b);
multiply(a, b);
divide(a, b);