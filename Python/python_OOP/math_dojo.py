class MathDojo(object):
    # the __init__ method is called every time a new object is created
    def __init__(self):
        # set some instance variables. just like any variable we can call these anything
        self.result = 0      
    def add(self, *args):
        for arg in args:
            if type(arg) is tuple or type(arg) is list:
                for item in arg:
                    self.result += item
            else:
                self.result += arg
        return self
        return self
    def subtract(self, *args):
        for arg in args:
            if type(arg) is tuple or type(arg) is list:
                for item in arg:
                    self.result -= item
            else:
                self.result -= arg
        return self
    def display_info(self):
        print "---------------------------"
        print self.result
        return self
print "---------------------------"
print "Math Dojo"

md = MathDojo().add(2).add(2, 5).subtract(3, 2).display_info()

md2 = MathDojo().add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).display_info()
