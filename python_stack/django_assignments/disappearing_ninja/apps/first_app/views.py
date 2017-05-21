from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
	return render(request, "first_app/index.html")

def ninja(request):
    return render(request, 'first_app/ninja.html')

def show_ninja(request, color):
    print color
    context = {
    "color" : color
    }
    if color == "blue":
        context = {
            "turtle" : "leonardo"
        }
        return render(request, "first_app/turtle.html", context)
    elif color == "orange":
        context = {
            "turtle" : "michelangelo"
        }
        return render(request, "first_app/turtle.html", context)
    elif color == "red":
        context = {
            "turtle" : "raphael"
        }
        return render(request, "first_app/turtle.html", context)
    elif color == "purple":
        context = {
            "turtle" : "donatello"
        }
        return render(request, "first_app/turtle.html", context)
    else:
        context = {
            "turtle" : "notapril"
        }
        return render(request, "first_app/turtle.html", context)