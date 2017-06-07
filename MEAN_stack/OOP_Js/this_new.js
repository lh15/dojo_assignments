function NinjaConstructor(name, prevOccupation) {
    
    if (!(this instanceof NinjaConstructor)) {
        // the constructor was called without "new".
        return new NinjaConstructor(name, prevOccupation);
    }
    console.log(this)
    this.name = name;
    this.prevOccupation = prevOccupation;
    this.introduce = function () {
        console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    }
}
var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
var nikki = NinjaConstructor('Nikki', 'Historian');
console.log(nikki);

