function VehicleConstructor(name, amt_wheels, amt_passengers) {
    var vehicle = {};     // the object that will eventually be returned
    /*
    Addition of properties to vehicle.
    */
    vehicle.name = name;
    vehicle.amt_wheels = amt_wheels;
    vehicle.amt_passengers = amt_passengers;
    /*
    Addition of methods to vehicle
    */
    vehicle.makeNoise = function () {
        console.log("Making Noise");
    }
    /*
    return vehicle
    */
    return vehicle;
}


// Using the constructor, create a Bike
var Bike = VehicleConstructor("Bike", 2, 1);
Bike.makeNoise();
// Redefine the Bike’s makeNoise method to print “ring ring!”
Bike.makeNoise = function () {
    console.log("Ring Ring!!")
};
Bike.makeNoise();
// Create a Sedan
var Sedan = VehicleConstructor("Sedan", 4, 5);
Sedan.makeNoise();
// Redefine the Sedan’s makeNoise method to print “Honk Honk!”
Sedan.makeNoise = function () {
    console.log("Honk Honk!!")
};
Sedan.makeNoise();
// Using the constructor, create a Bus 
var Bus  = VehicleConstructor("Bus", 6, 38);
// Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​
Bus.addPass = function (new_pass) {
    Bus.amt_passengers += new_pass;
    console.log(Bus.amt_passengers);
};
Bus.addPass(23);