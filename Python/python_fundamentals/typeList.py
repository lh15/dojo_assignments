def typeList (list):
  string = ""
  ints = 0
  for el in list:
    if isinstance(el, int) or isinstance(el, float) :
        ints += el
    elif isinstance(el, str):
        string += el
         
  if len(string) > 0 and ints > 0: 
    print "The array you entered is of mixed type"
    print "String: " + string
    print "Sum: " + str(ints)
  elif len(string) <= 0 and ints > 0: 
    print "The array you entered is of integer or float type"
    print "Sum: " + str(ints)
  elif len(string) > 0 and ints <= 0: 
    print "The array you entered is of string type"
    print "String: " + string
  
typeList (['magical unicorns',19,'hello',98.98,'world'])
typeList ([2,3,1,7,4,12])
typeList (['magical','unicorns'])