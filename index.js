/*
    @author: Yuxuan Wang
    @email: yx703587@dal.ca
    @descp: CSCI 3172 Lab2 index.js 
*/

// Q(a): calculate the area of a circle with a radius of 6
const radius = 6;
function circleArea(radius){
    const pi = 3.14;
    var area = pi * radius * radius;
    console.log(area);
    return area;
}
circleArea(radius);