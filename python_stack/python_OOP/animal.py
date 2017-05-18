class Animal(object):
    
    # the __init__ method is called every time a new object is created
    def __init__(self, name, health):
        # set some instance variables. just like any variable we can call these anything
        self.name = name
        self.health = health
        self.display_info()

    def walk(self, amt):
        self.health -= amt
        return self

    def run(self, amt):
        self.health -= (amt*5)
        return self

    def display_info(self):
        print "---------------------------"
        print "Name: " + str(self.name) + "\n", "Health: " + str(self.health) 
        print "---------------------------"
        return self

# animal1 = Animal("bob", 100)
# animal1.walk(3).run(2).display_info()

class Dog(Animal):
    def __init__(self, name ,health):
        super(Dog, self).__init__(name, 150)
        self.health = 150
    def pet(self, amt):
        self.health += (amt*5)
        return self

class Dragon(Animal):
    def __init__(self, name ,health):
        super(Dragon, self).__init__(name, 170)
        self.health = 170
    def fly(self, amt):
        self.health -= (amt*10)
        return self
    def display_info(self):
        print "This is a dragon!"
        super(Dragon, self).display_info()
        return self

# dog1 = Dog("waggy", 150)
dragon1 = Dragon("puff", 170)
# dragon1.display_info()
# animal2 =  Animal("blue", 100)
# dog1.walk(3).display_info().run(2).display_info().pet(1).display_info()
dragon1.walk(3).display_info().run(2).display_info().fly(2).display_info()


