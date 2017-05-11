# from stackoverflow
for i in range(1, 10):
    print "i =", i, ":",                   # Note the comma at the end
    for j in range(1, 10):
        print "{:2d}".format(i * j),       # Note the comma at the end
    print