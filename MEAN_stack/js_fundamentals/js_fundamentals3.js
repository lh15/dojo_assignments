// function Person(firstName) {
//     this.firstName = firstName;
//     this.distTrav = 0;
//     this.say_name = function () {
//         console.log(firstName);        
//         // alert(firstName);
//     };
//     this.say_something = function (quote) {
//         console.log(firstName + " says: " + quote);
//         return this;
//     };
//     this.walk = function () {
//         this.distTrav += 3;
//         console.log(firstName + " is walking ");
//         console.log("Distance Traveled: " + this.distTrav);
//         return this;
//     };
//     this.run = function () {
//         this.distTrav += 10;
//         console.log(firstName + " is running ");
//         console.log("Distance Traveled: " + this.distTrav);
//         return this;
        
//     };
//     this.crawl = function () {
//         this.distTrav += 1;
//         console.log(firstName + " is crawling ");
//         console.log("Distance Traveled: " + this.distTrav);
//         return this;
        
//     };
// }

// var leibel = new Person("Leibel");
// leibel.say_name();
// leibel.say_something("I'm having a great day!");
// leibel.walk();
// leibel.run();
// leibel.crawl();



// function NinjaConstructor(name, cohort) {
//     this.name = name;
//     this.cohort = cohort;
//     this.belt_level = "yellow";
//     this.level_up = function (quote) {
//         if (this.belt_level === "yellow") {
//             this.belt_level = "red"
//         } else if (this.belt_level === "red") {
//             this.belt_level = "black"
//         }
//         return this;
//     };
// }

// var ninjaLeibel = new NinjaConstructor("leibel", "april 17th");
// console.log(ninjaLeibel)
// ninjaLeibel.level_up().level_up();
// console.log(ninjaLeibel.belt_level);


//copied from the platform because mine used constructors and i'm behind
var person = {
  name : "Charlie",
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk : function(){
    console.log(`${person.name} is walking!`);
    person.distance_traveled += 3;
    return person;
  },
  run : function(){
    console.log(`${person.name} is running!`);
    person.distance_traveled += 10;
    return person;
  },
  crawl : function(){
    console.log(`${person.name} is crawling!`);
    person.distance_traveled += 1;
    return person;
  },
  chewGum:function(){
    console.log("I can walk and chew gum, but I can't chew gum and walk...");
  }
}

/* This is not the only way to do this.
  Specifically: the beltArray, and the levelUp strategy.
  Notice that the function returns an object literal and to reference/update internal object pieces we call the object by name.
*/
function NinjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if (ninja.beltLevel < 2){
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    return ninja
  }
  ninja.belt = belts[ninja.beltLevel];
  return ninja;
}