/*
    @author: Yuxuan Wang
    @email: yx703587@dal.ca
    @descp: CSCI 3172 Lab2 calculate_area.js 
*/

// Q(a): calculate the area of a circle with a radius of 6
const radius = 6;
const pi = 3.14;
function circleArea(radius){
    var area = pi * radius * radius;
    console.log(area);
    return area;
}
circleArea(radius);
