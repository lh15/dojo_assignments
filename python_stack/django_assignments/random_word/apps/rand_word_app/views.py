from django.shortcuts import render, HttpResponse, redirect
import requests
from random import *

word_site = "http://svnweb.freebsd.org/csrg/share/dict/words?view=co&content-type=text/plain"
response = requests.get(word_site)
WORDS = response.content.splitlines()


def index(request):
    print "index"
    return render(request, 'rand_word_app/index.html')

def new_word(request):
    x = randint(1, len(WORDS))
    if request.method == "POST":
        if 'count' not in request.session.keys():
            request.session['count'] = 0
        request.session['count'] += 1
        print request.session['count']
        request.session['word'] = WORDS[x]
        print WORDS[x]
        return redirect("/")
    else:
        return redirect("/")

def reset(request):
    if request.method == "POST":
        print reset
        request.session.clear()
        return redirect("/")
    else:
        return redirect("/")