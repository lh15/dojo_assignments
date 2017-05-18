# def multiply(arr,num):
#     print arr, num
#     for x in arr:
#         x *= num
#     return arr
# a = [2,4,10,16]
# b = multiply(a,5)
# print b
# ........few iterations of debugging until we get to the correct output
def multiply(arr,num):
    for x in range(len(arr)):
        arr[x] *= num
    return arr
a = [2,4,10,16]
b = multiply(a,5)
print b
# output:
# >>>[10,20,50,80]
