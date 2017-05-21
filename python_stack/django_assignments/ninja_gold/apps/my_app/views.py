from django.shortcuts import render, HttpResponse, redirect
import requests
import random
from datetime import datetime


def index(request):
    print "index"
    if 'gold' not in request.session.keys():
        request.session['gold'] = 0
    if 'activities' not in request.session.keys():
        request.session['activities'] = []
    if 'green' not in request.session.keys():
        request.session['green'] = True
    return render(request, 'my_app/index.html')



def process(request):
    if request.method == "POST":
        request.session['building'] = request.POST['building']
        if request.session['building'] == "farm":
            randNum = random.randint(10, 20)
            request.session['gold'] += randNum
            print request.session['gold']
            request.session['activities'].append("earned " + str(randNum) + " golds from the farm! (" + str(datetime.now())[:19] + ")")
        elif request.session['building'] == "cave":
            randNum = random.randint(5, 10)
            request.session['gold'] += randNum
            print request.session['gold']
            request.session['activities'].append("earned " + str(randNum) + " golds from the cave! (" + str(datetime.now())[:19] + ")")
        elif request.session['building'] == "house":
            randNum = random.randint(2, 5)
            request.session['gold'] += randNum
            print request.session['gold']
            request.session['activities'].append("earned " + str(randNum) + " golds from the house! (" + str(datetime.now())[:19] + ")")
        elif request.session['building'] == "casino":
            zeroone = random.randint(0, 1)
            if zeroone == 1:
                randNum = random.randint(0, 50)
                request.session['gold'] += randNum
                print request.session['gold']
                request.session['activities'].append("earned " + str(randNum) + " golds from the casino! (" + str(datetime.now())[:19] + ")")
            else:
                randNum = random.randint(0, 50)
                request.session['gold'] -= randNum
                print request.session['gold']
                request.session['activities'].append("you lost :( " + str(randNum) + " golds from the casino! OUCH!! (" + str(datetime.now())[:19] + ")")
        print request.session['building']
        return redirect('/')
        
    else:
        return redirect("/")
        
    
  
  
   
     
    
   





def reset(request):
    if request.method == "POST":
        print reset
        request.session.clear()
        return redirect("/")
    else:
        return redirect("/")