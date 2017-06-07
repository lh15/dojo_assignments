//modified using prototype
//modified using this
function VehicleConstructor(name, amt_wheels, amt_passengers, speed) {
    if (!(this instanceof VehicleConstructor)) {
        return new VehicleConstructor(name, wheels, passengerNumber, speed);
    }
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";    
    this.name = name;
    this.amt_wheels = amt_wheels;
    this.amt_passengers = amt_passengers;
    this.speed = speed;
    this.distance_traveled = 0;
    this.vin = create_vin();

    function create_vin() {
        var vin = '';
        for (var i = 0; i < 17; i++) {
            vin += chars[Math.floor(Math.random()*35)];
        }
        return vin;
    }

}

VehicleConstructor.prototype.update_distnace_traveled = function () {
    this.distance_traveled += this.speed;
}
/*
    Addition of methods to vehicle
    */
VehicleConstructor.prototype.makeNoise = function () {
    console.log("Making Noise");
    return this;
}
VehicleConstructor.prototype.move = function () {
    VehicleConstructor.prototype.update_distnace_traveled();
    this.makeNoise();
    return this;
}
VehicleConstructor.prototype.check_miles = function () {
    console.log(this.distance_traveled);
    return this;
}
VehicleConstructor.prototype.generate_vin = function () {
    VehicleConstructor.prototype.vin = Math.floor(Math.random() * (100 - 1)) + 1;
} 


// Using the constructor, create a Bike
var Bike = new VehicleConstructor("Bike", 2, 1);
Bike.makeNoise();
// Redefine the Bike’s makeNoise method to print “ring ring!”
Bike.makeNoise = function () {
    console.log("Ring Ring!!")
};
Bike.makeNoise();
// Create a Sedan
var Sedan = new VehicleConstructor("Sedan", 4, 5);
Sedan.makeNoise();
// Redefine the Sedan’s makeNoise method to print “Honk Honk!”
Sedan.makeNoise = function () {
    console.log("Honk Honk!!")
};
Sedan.makeNoise();
// Using the constructor, create a Bus 
var Bus = new VehicleConstructor("Bus", 6, 38);
// Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​
Bus.addPass = function (new_pass) {
    Bus.amt_passengers += new_pass;
    console.log(Bus.amt_passengers);
};
Bus.addPass(23);
var truck = new VehicleConstructor("truck", 18, 2, 85);
console.log(truck);
truck.makeNoise().move().check_miles();
console.log(truck);
console.log(truck.vin);
