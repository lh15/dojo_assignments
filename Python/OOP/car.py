class Car(object):
    
    # the __init__ method is called every time a new object is created
    def __init__(self, price, speed, fuel, mileage):
        # set some instance variables. just like any variable we can call these anything
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = .15
        else:
            self.tax = .12
        self.display_info()
        

    def display_info(self):
        print "Price: " + str(self.price) + "\n", "Speed: " + str(self.speed) + "\n" , "Fuel: " + str(self.fuel) + "\n", "Mileage: " + str(self.mileage) + "\n","Tax: " + str(self.tax)
        return self
print "---------------------------"
car1 = Car(20000,100, "empty",35,)
print "---------------------------"
car2 = Car(3000,230, "empty",35,)
print "---------------------------"
car3 = Car(20000,100, "empty",35,)
print "---------------------------"
car4 = Car(20000,100, "empty",35,)
print "---------------------------"
car5 = Car(20000,100, "empty",35,)
print "---------------------------"
car6 = Car(20000,100, "empty",35,)

    