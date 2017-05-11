# print "Hello World!"
# x = "Hello Python"
# print x
# y = 42
# print y
# define a function that says hello to the name provided
# this starts a new block


def say_hello(name):

  # these lines are indented therefore part of the function
  if name:
    print 'Hello, ' + name + ' from inside the function'
  else:
    print 'No name'
say_hello("leibel")
# now we're unindented and have ended the previous block
print 'Outside of the function'


name = 12
print "My name is", name


# name = 12
# print "My name is " + name
