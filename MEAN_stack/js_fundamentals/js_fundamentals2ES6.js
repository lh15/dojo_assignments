//Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
function sumInts(x, y) {
    var sum = 0;
    for (var i = x; i < y; i++) {
        sum += i;
    }
    console.log(sum);
}
sumInts(1, 100)

//Rewrite as anonymous functions assigned to a variable.
var sum = function (x, y) {
    var sum = 0;
    for (var i = x; i < y; i++) {
        sum += i;
    }
    console.log(sum);
}


// 5.Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
function min(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log(min);
}
var y = [1, 5, 90, 25, -3, 0];
min(y);

//Rewrite as anonymous functions assigned to a variable.
var minFunc = function (arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log(min);
}


// 6.Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
function avg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(avg);
}

//Rewrite as anonymous functions assigned to a variable.
var avgFunc = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(avg);
}
avg(y);


"use strict" // you may (some interpreters do, some don't) require this statement before ES2015 is used.
var myVariable = () => { console.log('hello'); }
myVariable();


var avgFunc = (arr) => {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(avg);
}
avg(y);