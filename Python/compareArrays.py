def compareArrays(list1, list2):
  string = ""
  ints = 0
  result = True
  if len(list1) != len(list2):
    result = False
  for el in list1:
    if not el in list2:
      result = False
      break
  if result == True:
    print "The lists are the same."
  else: 
    print "The lists are not the same."
 


list_one = [1,2,5,6,2]
list_two = [1,2,5,6,2]
compareArrays (list_one, list_two)
list_one = [1,2,5,6,5]
list_two = [1,2,5,6,5,3]
compareArrays (list_one, list_two)
list_one = [1,2,5,6,5,16]
list_two = [1,2,5,6,5]
compareArrays (list_one, list_two)
list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream'] 
compareArrays (list_one, list_two)
