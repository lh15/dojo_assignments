# def odd_even(start, finish):
#     for num in range(start, finish):
#         if num % 2 == 0:
#             print "Number is " + str(num) + ". This is an even number"
#         else:
#             print "Number is " + str(num) + ". This is an odd number"
        
# odd_even(1, 2001)

def multiply(l, num):
    for i in range(len(l)):
        l[i] *= num
    return l

# a = [2,4,10,16]        
# b = multiply(a, 5)
# print b

def layered_multiples(arr):
  # your code here
  new_array = []
  
  for i in range(len(arr)):
    inner_arr = []
    for j in range(0, arr[i]):
      inner_arr.append(1)
    new_array.append(inner_arr)
#   print new_array
  return new_array
  
x = layered_multiples(multiply([2,4,5],3))
# print x
# output
# >>>[[1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]

