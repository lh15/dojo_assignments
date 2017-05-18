def findChars(list, char):
    newList = []
    for el in list:
        if el.find(char) > -1:
            newList.append(el)
    print newList

# input
list = ['hello', 'world', 'my', 'name', 'is', 'Anna']
char = 'o'
findChars(list, char)