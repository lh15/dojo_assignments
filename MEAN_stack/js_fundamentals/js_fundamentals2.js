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


// Rewrite these as methods of an object
var methodsObj = {
    sum: function (x, y) {
        var sum = 0;
        for (var i = x; i < y; i++) {
            sum += i;
        }
        console.log(sum);
    },
    avgFunc: function (arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        var avg = sum / arr.length;
        console.log(avg);
    },
    minFunc: function (arr) {
        var min = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }
        }
        console.log(min);
    }
};
console.log(methodsObj);
methodsObj.sum(5, 10);


function personConstructor(firstName) {
    this.firstName = firstName;
    this.distTrav = 0;
    this.say_name = function () {
        console.log(firstName);        
        // alert(firstName);
    };
    this.say_something = function (quote) {
        console.log(firstName + " says: " + quote);
        return this;
    };
    this.walk = function () {
        this.distTrav += 3;
        console.log(firstName + " is walking ");
        console.log("Distance Traveled: " + this.distTrav);
        return this;
    };
    this.run = function () {
        this.distTrav += 10;
        console.log(firstName + " is running ");
        console.log("Distance Traveled: " + this.distTrav);
        return this;
        
    };
    this.crawl = function () {
        this.distTrav += 1;
        console.log(firstName + " is crawling ");
        console.log("Distance Traveled: " + this.distTrav);
        return this;
        
    };
}

var leibel = new personConstructor("Leibel");
leibel.say_name();
leibel.say_something("I'm having a great day!");
leibel.walk();
leibel.run();
leibel.crawl();