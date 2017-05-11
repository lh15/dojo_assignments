def draw_stars1(li):
    for i in range(len(li)):
        stars = ""
        for j in range(0, li[i]):
            stars += "*"
        print stars


x = [4, 6, 1, 3, 5, 7, 25]
draw_stars1(x)


def draw_stars2(li):
    for i in range(len(li)):
        stars = ""
        if isinstance(li[i], int) :
            for j in range(0, li[i]):
                stars += "*"
            print stars
        elif isinstance(li[i], str):
            for j in range(0, len(li[i])):
                stars += li[i][0]
            print stars
        

y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars2(y)