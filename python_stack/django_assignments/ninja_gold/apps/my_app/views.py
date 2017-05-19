from django.shortcuts import render, HttpResponse, redirect
import requests


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
        if 'count' not in request.session.keys():
            request.session['name'] = request.POST['name']
            request.session['location'] = request.POST['location']
            request.session['language'] = request.POST['language']
            request.session['comment'] = request.POST['comment']
        print "Got info"
        return redirect('/result')
        
    else:
        return redirect("/")
    request.session['building'] = request.POST['building']
   if session['building'] == "farm":
     randNum = random.randint(10, 20)
     session['gold'] += randNum
     print session['gold']
     session['activities'].append("earned " + str(randNum) + " golds from the farm! (" + str(datetime.now())[:19] + ")")
   elif session['building'] == "cave":
     randNum = random.randint(5, 10)
     session['gold'] += randNum
     print session['gold']
     session['activities'].append("earned " + str(randNum) + " golds from the cave! (" + str(datetime.now())[:19] + ")")
   elif session['building'] == "house":
     randNum = random.randint(2, 5)
     session['gold'] += randNum
     print session['gold']
     session['activities'].append("earned " + str(randNum) + " golds from the house! (" + str(datetime.now())[:19] + ")")
   elif session['building'] == "casino":
     zeroone = random.randint(0, 1)
     if zeroone == 1:
        randNum = random.randint(0, 50)
        session['gold'] += randNum
        print session['gold']
        session['activities'].append("earned " + str(randNum) + " golds from the casino! (" + str(datetime.now())[:19] + ")")
     else:
        randNum = random.randint(0, 50)
        session['gold'] -= randNum
        print session['gold']
        session['activities'].append("you lost :( " + str(randNum) + " golds from the casino! OUCH!! (" + str(datetime.now())[:19] + ")")
    
   print session['building']
   return redirect('/')





def reset(request):
    if request.method == "POST":
        print reset
        request.session.clear()
        return redirect("/")
    else:
        return redirect("/")