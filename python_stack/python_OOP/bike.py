class Bike(object):
    # the __init__ method is called every time a new object is created
    def __init__(self, price, max_speed):
        # set some instance variables. just like any variable we can call these anything
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
        

    def display_info(self):
        print self.price, self.max_speed, self.miles
        return self

    def ride(self):
        print "riding!!!"
        self.miles = self.miles + 10
        return self

    def reverse(self):
        print "reversing!!!"
        if self.miles > 4:
            self.miles = self.miles - 5
        return self
    
#now create an instance of the class
bike1 = Bike("$28",120)
bike2 = Bike("$48",110)
bike3 = Bike("$68",150)
bike4 = Bike("$78",220)
print bike1.display_info().ride().ride().ride().display_info().reverse().display_info()
print bike2.display_info().ride().ride().display_info().reverse().reverse().display_info()
print bike3.display_info().reverse().reverse().reverse().display_info()


