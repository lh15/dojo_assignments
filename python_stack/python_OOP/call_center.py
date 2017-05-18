# Assignment: Call Center
# You're creating a program for a call center. Every time a call comes in you need a way to track that call. One of your program's requirements is to store calls in a queue while callers wait to speak with a call center employee.

# You will create two classes. One class should be Call, the other CallCenter.

# Call():
# Create your call class with an init method. Each instance of Call() should have a few attributes:

# - unique id

# - caller name

# - caller phone number

# - time of call

# - reason for call

# The call class should have a display method that prints all call attributes.

# CallCenter():
# Create your call center class with an init method. Each instance of CallCenter() should have the following attributes:

# - calls: should be a list of call objects

# - queue size: should be the length of the call list

# The call center class should have an add method that adds a new call to the end of the call list

# The call center class should have a remove method that removes the call from the beginning of the list (index 0).

# The call center class should have a method called info that shows the name and phone number for each call in the queue as well as the length of the queue.

# You should be able to test your code to prove that it works. Remember to build one piece at a time and test as you go for easier debugging!

# Ninja Level: add a method to call center class that can find and remove a call from the queue according to the phone number of the caller.

# Hacker Level: If everything is working properly, your queue should be sorted by time, but what if your calls get out of order? Add a method to the call center class that sorts the calls in the queue according to time of call in ascending order.

# I still want to try and do the ninja and hacker levels


class Call(object):
    # the __init__ method is called every time a new object is created
    def __init__(self, id, name, phone, time, reason):
        # set some instance variables. just like any variable we can call these anything
        self.id = id
        self.name = name
        self.phone = phone
        self.time = time
        self.reason = reason
        # self.display_info()
        
    def display_info(self):
        print "Id: " + str(self.id) + "\n", "Name: " + str(self.name) + "\n" , "Phone Number: " + str(self.phone) + "\n", "Time of call: " + str(self.time) + "\n","Reason for call: " + str(self.reason)
        return self


class CallCenter(object):
    # the __init__ method is called every time a new object is created
    def __init__(self):
        # set some instance variables. just like any variable we can call these anything
        self.calls = []
        self.queueSize = len(self.calls)
        # self.display_info()

    def addCall(self, call):
        self.calls.append(call)
        self.queueSize = len(self.calls)
        return self

    def removeCall(self):
        self.calls.pop(0)
        self.queueSize = len(self.calls)
        return self
        
    def display_info(self):
        print "Queue Size: " + str(self.queueSize)
        for index, call in enumerate(self.calls):
            print "Call is number " + str((index+1)) + " in the queue" 
            print "Id: " + str(call.id) + "\n", "Name: " + str(call.name) + "\n" , "Phone Number: " + str(call.phone) + "\n", "Time of call: " + str(call.time) + "\n","Reason for call: " + str(call.reason)
        return self


call1 = Call(123, "Leibel", 7737737733, "10:30am", "bc i can")
CC = CallCenter().addCall(call1).display_info()
