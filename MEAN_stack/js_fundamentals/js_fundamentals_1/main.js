// 1. Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.
var x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"];
for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
}

//2.Add a new value (100) in the array x using a push method.
x.push(100);
console.log(x);

//3.Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);

//4.Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
var sum = 0;
var i = 1;
while (i <= 500) {
    sum += i;
    i++;
}
console.log(sum);

// 5.Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
var y = [1, 5, 90, 25, -3, 0];
var min = y[0];
for (var i = 0; i < y.length; i++) {
    if (y[i] < min) {
        min = y[i]
    }
}
console.log(min);

// 6.Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
var sum = 0;
for (var i = 0; i < y.length; i++) {
    sum += y[i];
}
var avg = sum / y.length;
console.log(avg);


var newNinja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript', //like that's even a question!
    dojo: 'Dallas'
}

// Write a for-in loop that will navigate through the object below (or write your own object):
var newNinja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript', //like that's even a question!
    dojo: 'Dallas'
}

for (var key in newNinja) {
    console.log(key + ": " + newNinja[key]);

}