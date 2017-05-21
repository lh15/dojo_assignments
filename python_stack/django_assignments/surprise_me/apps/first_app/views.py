from django.shortcuts import render, HttpResponse, redirect
import requests
import re
from random import *

word_site = "http://svnweb.freebsd.org/csrg/share/dict/words?view=co&content-type=text/plain"
response = requests.get(word_site)
WORDS = response.content.splitlines()



def index(request):
    print "index"
    return render(request, 'first_app/index.html')

def process(request):
    if request.method == "POST":
        user_num = request.POST['user_num']
        print user_num
        if 'strings' not in request.session.keys():
            request.session["strings"] = []
        VALUES = []
        while len(VALUES) < int(user_num):
            x = randint(1, len(WORDS))
            VALUES.append(WORDS[x])
            request.session["strings"] = VALUES
        print VALUES
        return redirect("/results")
    else:
        return redirect("/")
        

def results(request):
    print "results"
    return render(request, 'first_app/results.html')