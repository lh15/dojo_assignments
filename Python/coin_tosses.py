import random


def coin_toss():
    num = random.randint(0, 1)
    if num == 0:
        return "heads"
    else:
        return "tails"

def coin_toss_machine(limit):
    heads = 0
    tails = 0
    print "Starting the program..."
    for i in range(0, limit):
        coin = coin_toss()

        if coin == "heads":
            heads += 1
            print "Attempt #" + str(i) + ": Throwing a coin... It's a head! ... Got " + str(heads) + " heads(s) so far and " + str(tails) + " tail(s) so far"
        elif coin == "tails":
            tails += 1
            print "Attempt #" + str(i) + ": Throwing a coin... It's a Tail! ... Got " + str(heads) + " heads(s) so far and " + str(tails) + " tail(s) so far"
    print "Ending the program, thank you!"


coin_toss_machine(5001)