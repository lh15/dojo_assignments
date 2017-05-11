class Product(object):
    
    # the __init__ method is called every time a new object is created
    def __init__(self, price, item_name, weight, brand, cost):
        # set some instance variables. just like any variable we can call these anything
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "for sale"
        
        self.display_info()

    def sell(self):
        self.status = "sold"
        return self

    def add_tax(self, tax):
        self.tax = tax
        self.price += (self.price * tax)
        return self

    def returned(self, reason):
        self.reason = reason
        if self.reason == "defective":
            self.price = 0
            self.status = reason
        elif self.reason == "not defective":
            self.price = (self.price * .8)
            self.status = "for sale"
        elif self.reason == "new in box":
            self.price = self.price
            self.status = "for sale"
        else:
            self.price = self.price
            self.status = "unknown"
        return self

    def display_info(self):
        print "---------------------------"
        print "Item: " + str(self.item_name) + "\n", "Price: " + str(self.price) + "\n" , "Status: " + str(self.status) + "\n", "Weight: " + str(self.weight) + "\n","Brand: " + str(self.brand) + "\n","Cost: " + str(self.cost)
        print "---------------------------"
        return self

prod1 = Product(20, "Coke", "20oz", "cocacola", 15)

prod1.add_tax(.15).display_info().returned("hmmm").display_info()
prod1.add_tax(.15).display_info().returned("defective").display_info()