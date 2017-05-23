from django.shortcuts import render, HttpResponse, redirect
import random


def isPrime(num):
    # Python program to check if the input number is prime or not
    # prime numbers are greater than 1
    num = num
    if num > 1:
    # check for factors
        for i in range(2,num):
            if (num % i) == 0:
                print(num,"is not a prime number")
                print(i,"times",num//i,"is",num)
                return False
                break
        else:
            print(num,"is a prime number")   
            return True
    # if input number is less than
    # or equal to 1, it is not prime
    else:
        print(num,"is not a prime number")
        return False


# Create your views here.
def index(request):
	return render(request, "first_app/index.html")


def show(request, user_num):
    user_num_int = int(user_num)
    print user_num_int
    if isPrime(user_num_int) == True:
        context = {
            "landscape" : "prime",
            "randNum": random.randint(1,5)
        }
        return render(request, "first_app/show.html", context)
    else:
        if user_num_int > 0 and user_num_int < 11:
            context = {
                "landscape" : "snow"
            }
            return render(request, "first_app/show.html", context)
        elif user_num_int > 10 and user_num_int < 21:
            context = {
                "landscape" : "desert"
            }
            return render(request, "first_app/show.html", context)
        elif user_num_int > 20 and user_num_int < 31:
            context = {
                "landscape" : "forest"
            }
            return render(request, "first_app/show.html", context)
        elif user_num_int > 30 and user_num_int < 41:
            context = {
                "landscape" : "vineyard"
            }
            return render(request, "first_app/show.html", context)
        elif user_num_int > 40 and user_num_int < 51:
            context = {
                "landscape" : "tropical"
            }
            return render(request, "first_app/show.html", context)
        else:
            return redirect('/')