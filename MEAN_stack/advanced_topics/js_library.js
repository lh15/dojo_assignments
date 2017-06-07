var _ = {
   map: function() {
     //code here;
   },
   reduce: function() { 
     // code here;
   },
   find: function() {   
     // code here;
   },
   filter: function(arr, callback) { 
     // code here;
     console.log("called");
     var newArr = [];
     for (var i = 0; i < arr.length; i++) {
       if (callback(arr[i])) {
         newArr.push(arr[i]);
       }
     }
     return newArr;
   },
   reject: function() { 
     // code here;
   }
 }
// you just created a library with 5 methods!
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].


